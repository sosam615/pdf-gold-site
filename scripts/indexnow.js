// Submits every URL in docs/sitemap.xml to IndexNow (Bing, Yandex, Seznam, Naver, Yep...).
// node scripts/indexnow.js [--new]   --new = only URLs whose lastmod is today (use after the daily article)
// Needs the live site to serve docs/<KEY>.txt (created by the build).
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..');
const KEY = fs.readFileSync(path.join(ROOT, 'indexnow.key'), 'utf8').trim();
const xml = fs.readFileSync(path.join(ROOT, 'docs', 'sitemap.xml'), 'utf8');
const today = new Date().toISOString().slice(0, 10);
let urls = [...xml.matchAll(/<url><loc>([^<]+)<\/loc><lastmod>([^<]+)<\/lastmod>/g)].filter(m => !process.argv.includes('--new') || m[2] === today).map(m => m[1]);
(async () => {
  if (!urls.length) return console.log('nothing to submit');
  for (let i = 0; i < urls.length; i += 9000) {
    const r = await fetch('https://api.indexnow.org/indexnow', { method: 'POST', headers: { 'Content-Type': 'application/json; charset=utf-8' }, body: JSON.stringify({ host: 'pdf.gold', key: KEY, keyLocation: `https://pdf.gold/${KEY}.txt`, urlList: urls.slice(i, i + 9000) }) });
    console.log('IndexNow', r.status, r.statusText, '-', urls.slice(i, i + 9000).length, 'urls');
  }
})();
