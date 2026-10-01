const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, 'palace', 'dist');
const port = Number(process.argv[2] || 5173);
const types = {'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.woff2':'font/woff2','.json':'application/json'};
if (!Number.isInteger(port) || port < 1024 || port > 65535) process.exit(1);
http.createServer((req, res) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') { res.writeHead(405); res.end(); return; }
  let filename;
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    filename = path.resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
  } catch { res.writeHead(400); res.end(); return; }
  if (!filename.startsWith(root + path.sep)) { res.writeHead(403); res.end(); return; }
  fs.stat(filename, (error, info) => {
    if (error || !info.isFile()) { res.writeHead(404); res.end('Not found'); return; }
    res.writeHead(200, {'Content-Type': types[path.extname(filename)] || 'application/octet-stream', 'Content-Length': info.size, 'Cache-Control':'no-cache'});
    if (req.method === 'HEAD') { res.end(); return; }
    const stream = fs.createReadStream(filename);
    stream.on('error', () => res.destroy());
    stream.pipe(res);
  });
}).listen(port, '127.0.0.1', () => console.log('Palace ready at http://127.0.0.1:' + port + '/'));
