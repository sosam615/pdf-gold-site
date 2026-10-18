# pdf.gold site

Static site generator (no dependencies). `npm run build` writes `dist/`; `npm run check` validates it.

- `src/home-en.html` English home; `src/lang-*.js` native home copy for 29 other languages; `src/landing.js` landing pages; `src/articles/*.md` guides (+ `_queue.txt`).
- `config.json` -> `downloadUrl` (installer link). Put the installer on a GitHub Release and set the full URL here.

## Deploy (Cloudflare Pages, one time)
1. Create a GitHub repo and push this folder (`git remote add origin ...; git push -u origin main`).
2. Cloudflare Pages -> Create project -> connect the repo. Build command `npm run build`, output directory `dist`.
3. Add custom domain `pdf.gold`.
4. Google Search Console + Bing Webmaster: add `https://pdf.gold`, submit `https://pdf.gold/sitemap.xml`.
5. Upload `GoldPDF-Setup-1.0.0.exe` as a GitHub Release asset and set `downloadUrl` in `config.json`.
