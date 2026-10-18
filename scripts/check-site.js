// Validates dist/: internal links, titles/descriptions, JSON-LD, hreflang, article length.  node scripts/check-site.js
const fs = require('fs');
const path = require('path');
const DIST = path.join(__dirname, '..', 'dist');
const files = [];
(function walk(d) { for (const f of fs.readdirSync(d)) { const p = path.join(d, f); fs.statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') && files.push(p); } })(DIST);

const exists = u => {
  u = u.split('#')[0].split('?')[0];
  if (!u || /^(https?:|mailto:|data:|tel:)/.test(u)) return true;
  if (!u.startsWith('/')) return true; // relative to page: only used in the English home for assets
  const p = path.join(DIST, u);
  return fs.existsSync(p) && (fs.statSync(p).isFile() || fs.existsSync(path.join(p, 'index.html')));
};
let errors = 0, warns = 0;
const err = (f, m) => { errors++; console.log('ERROR', path.relative(DIST, f), m); };
const warn = (f, m) => { warns++; console.log('warn ', path.relative(DIST, f), m); };
const titles = new Map(), descs = new Map();
let articleWords = [];

for (const f of files) {
  const h = fs.readFileSync(f, 'utf8');
  const rel = path.relative(DIST, f).split(path.sep).join('/');
  if (rel === '404.html') continue;
  const title = (h.match(/<title>([^<]*)<\/title>/) || [])[1];
  const desc = (h.match(/<meta name="description" content="([^"]*)"/) || [])[1];
  if (!title) err(f, 'no title'); else { if (title.length > 75) warn(f, `title ${title.length} chars`); if (titles.has(title)) err(f, 'duplicate title with ' + titles.get(title)); titles.set(title, rel); }
  if (!desc) err(f, 'no description'); else { if (desc.length > 175) warn(f, `description ${desc.length} chars`); if (descs.has(desc)) err(f, 'duplicate description'); descs.set(desc, rel); }
  if (!/<link rel="canonical"/.test(h)) err(f, 'no canonical');
  if ((h.match(/<h1[ >]/g) || []).length !== 1) err(f, 'needs exactly one h1');
  for (const m of h.matchAll(/<script type="application\/ld\+json">([^<]*)<\/script>/g)) { try { JSON.parse(m[1]); } catch (e) { err(f, 'bad JSON-LD'); } }
  for (const m of h.matchAll(/(?:href|src)="([^"]+)"/g)) if (!exists(m[1])) err(f, 'broken link ' + m[1]);
  if (/^articles\/[^/]+\/index\.html$/.test(rel) && !/^articles\/(redaction|editing|ocr|forms|security|compare|languages|ai)\//.test(rel)) {
    const text = h.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<[^>]+>/g, ' ');
    const words = (text.match(/\S+/g) || []).length;
    articleWords.push(words);
    if (words < 450) warn(f, `short article (${words} words)`);
  }
}
const home = files.filter(f => /^(index\.html|[a-z]{2}\/index\.html)$/.test(path.relative(DIST, f).split(path.sep).join('/')));
for (const f of home) { const n = (fs.readFileSync(f, 'utf8').match(/hreflang="/g) || []).length; if (n < 31) err(f, 'hreflang count ' + n); }
console.log(`\n${files.length} pages checked; articles avg ${articleWords.length ? Math.round(articleWords.reduce((a, b) => a + b, 0) / articleWords.length) : 0} words; ${errors} errors, ${warns} warnings`);
process.exit(errors ? 1 : 0);
