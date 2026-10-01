param([switch]$NoBrowser)
$ErrorActionPreference = 'Stop'
try {
    $palaceRoot = Join-Path $PSScriptRoot 'palace'
    $serverScript = Join-Path $PSScriptRoot 'palace-server.cjs'
    if (-not (Test-Path -LiteralPath (Join-Path $palaceRoot 'dist/index.html'))) {
        throw 'Missing palace/dist/index.html. Keep this launcher beside the palace folder.'
    }
    $nodeCommand = Get-Command node.exe -ErrorAction SilentlyContinue
    $nodePath = if ($nodeCommand) { $nodeCommand.Source } else { Join-Path $env:LOCALAPPDATA 'hermes/node/node.exe' }
    if (-not (Test-Path -LiteralPath $nodePath)) { throw 'Node.js was not found. Install Node.js or open the online palace.' }

    function Test-PalaceUrl([string]$url) {
        try {
            $response = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 1
            return ($response.StatusCode -eq 200 -and $response.Content -match 'THE HOUSE OF A STOCK OPERATOR')
        } catch { return $false }
    }

    $selectedPort = $null
    $palaceUrl = $null
    foreach ($candidatePort in 5173..5178) {
        $candidateUrl = "http://127.0.0.1:$candidatePort/"
        if (Test-PalaceUrl $candidateUrl) { $palaceUrl = $candidateUrl; break }
        $probe = New-Object System.Net.Sockets.TcpListener([System.Net.IPAddress]::Loopback, $candidatePort)
        try { $probe.Start(); $selectedPort = $candidatePort; break } catch { } finally { $probe.Stop() }
    }
    if (-not $palaceUrl) {
        if (-not $selectedPort) { throw 'Ports 5173-5178 are busy. Close another local preview and try again.' }
        $serverLog = Join-Path $palaceRoot '.palace-server.log'
        $serverErrorLog = Join-Path $palaceRoot '.palace-server-error.log'
        $serverProcess = Start-Process -FilePath $nodePath -ArgumentList @('"' + $serverScript + '"', [string]$selectedPort) -WorkingDirectory $palaceRoot -WindowStyle Hidden -RedirectStandardOutput $serverLog -RedirectStandardError $serverErrorLog -PassThru
        $palaceUrl = "http://127.0.0.1:$selectedPort/"
        $ready = $false
        for ($attempt = 0; $attempt -lt 30; $attempt++) {
            if (Test-PalaceUrl $palaceUrl) { $ready = $true; break }
            $serverProcess.Refresh()
            if ($serverProcess.HasExited) { throw "The local server stopped. See $serverErrorLog" }
            Start-Sleep -Milliseconds 200
        }
        if (-not $ready) { throw "The palace did not start in time. See $serverErrorLog" }
    }
    if (-not $NoBrowser) { Start-Process $palaceUrl }
    Write-Output "Palace ready: $palaceUrl"
    exit 0
} catch {
    Write-Host $_.Exception.Message -ForegroundColor Red
    exit 1
}
