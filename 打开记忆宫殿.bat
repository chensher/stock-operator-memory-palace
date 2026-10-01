@echo off
setlocal
powershell.exe -NoLogo -NoProfile -ExecutionPolicy Bypass -File "%~dp0start-palace.ps1"
if errorlevel 1 (
  echo.
  echo Could not open the palace. Please keep this window for troubleshooting.
  pause
)
endlocal
