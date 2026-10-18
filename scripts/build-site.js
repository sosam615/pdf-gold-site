// pdf.gold static site builder (no dependencies).  node scripts/build-site.js  ->  dist/
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SRC = path.join(ROOT, 'src');
const DIST = path.join(ROOT, 'docs');
const SITE = 'https://pdf.gold';
const CFG = JSON.parse(fs.readFileSync(path.join(ROOT, 'config.json'), 'utf8'));
const TODAY = new Date().toISOString().slice(0, 10);

const LANGS = ['en', 'he', 'ar', 'es', 'fr', 'de', 'it', 'pt', 'ru', 'uk', 'pl', 'nl', 'sv', 'nb', 'da', 'fi', 'tr', 'el', 'cs', 'ro', 'hu', 'bg', 'id', 'ms', 'vi', 'th', 'hi', 'ja', 'ko', 'zh'];
const HREF = { nb: 'nb', zh: 'zh-Hans' };
const RTL = new Set(['he', 'ar']);
const LOC = { en: 'en_US', he: 'he_IL', ar: 'ar_AR', es: 'es_ES', fr: 'fr_FR', de: 'de_DE', it: 'it_IT', pt: 'pt_BR', ru: 'ru_RU', uk: 'uk_UA', pl: 'pl_PL', nl: 'nl_NL', sv: 'sv_SE', nb: 'nb_NO', da: 'da_DK', fi: 'fi_FI', tr: 'tr_TR', el: 'el_GR', cs: 'cs_CZ', ro: 'ro_RO', hu: 'hu_HU', bg: 'bg_BG', id: 'id_ID', ms: 'ms_MY', vi: 'vi_VN', th: 'th_TH', hi: 'hi_IN', ja: 'ja_JP', ko: 'ko_KR', zh: 'zh_CN' };
const TOPICS = {
  redaction: ['Redaction & privacy', 'Remove sensitive information for real — and prove it is gone.'],
  editing: ['Editing PDFs', 'Change text, prices, fonts and pages without breaking the layout.'],
  ocr: ['OCR & scanned PDFs', 'Turn scans into searchable, editable documents — offline.'],
  forms: ['Forms & signatures', 'Fill, sign and reuse signatures without printing.'],
  security: ['Passwords & security', 'Encrypt, protect and share PDFs safely.'],
  compare: ['Alternatives & comparisons', 'Free tools, honest comparisons and real costs.'],
  languages: ['PDF in every language', 'Hebrew, Arabic, CJK, Hindi, Thai and right-to-left text.'],
  ai: ['AI with your own key', 'Edit and question PDFs with the AI you already use.']
};

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const slugify = t => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const wc = s => (s.match(/\S+/g) || []).length;
const write = (rel, data) => { const f = path.join(DIST, rel); fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, data); };
const homeUrl = l => SITE + (l === 'en' ? '/' : '/' + l + '/');
const hl = l => HREF[l] || l;
const dl = CFG.downloadUrl;
const lite = CFG.liteUrl;

/* ---------- tiny markdown ---------- */
const inline = s => esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/`(.+?)`/g, '<code>$1</code>').replace(/\[([^\]]+)\]\(([^)]+)\)/g, (m, t, u) => `<a href="${u}">${t}</a>`);
function md(src) {
  const lines = src.split('\n');
  let html = '', i = 0;
  while (i < lines.length) {
    const l = lines[i];
    if (!l.trim()) { i++; continue; }
    if (/^## /.test(l)) { const t = l.slice(3); html += `<h2 id="${slugify(t)}">${inline(t)}</h2>\n`; i++; continue; }
    if (/^### /.test(l)) { html += `<h3>${inline(l.slice(4))}</h3>\n`; i++; continue; }
    if (/^> /.test(l)) { let b = []; while (i < lines.length && /^> ?/.test(lines[i])) b.push(lines[i++].replace(/^> ?/, '')); html += `<aside class="box">${b.map(x => x.startsWith('- ') ? x : `<p>${inline(x)}</p>`).join('').replace(/(<p>- [^]*?<\/p>)+/g, m => m)}</aside>\n`; continue; }
    if (/^- /.test(l)) { let b = []; while (i < lines.length && /^- /.test(lines[i])) b.push(lines[i++].slice(2)); html += '<ul>' + b.map(x => `<li>${inline(x)}</li>`).join('') + '</ul>\n'; continue; }
    if (/^\d+\. /.test(l)) { let b = []; while (i < lines.length && /^\d+\. /.test(lines[i])) b.push(lines[i++].replace(/^\d+\. /, '')); html += '<ol>' + b.map(x => `<li>${inline(x)}</li>`).join('') + '</ol>\n'; continue; }
    if (/^\|/.test(l)) { let b = []; while (i < lines.length && /^\|/.test(lines[i])) b.push(lines[i++]); const rows = b.filter(r => !/^\|[\s:-]+\|/.test(r)).map(r => r.split('|').slice(1, -1).map(c => c.trim())); html += '<div class="tw"><table><thead><tr>' + rows[0].map(c => `<th>${inline(c)}</th>`).join('') + '</tr></thead><tbody>' + rows.slice(1).map(r => '<tr>' + r.map(c => `<td>${inline(c)}</td>`).join('') + '</tr>').join('') + '</tbody></table></div>\n'; continue; }
    let p = []; while (i < lines.length && lines[i].trim() && !/^(## |### |- |\d+\. |> |\|)/.test(lines[i])) p.push(lines[i++]);
    html += `<p>${inline(p.join(' '))}</p>\n`;
  }
  return html;
}

/* ---------- content ---------- */
function loadArticles() {
  const dir = path.join(SRC, 'articles');
  const out = [];
  for (const f of fs.readdirSync(dir).filter(x => x.endsWith('.md')).sort()) {
    const raw = fs.readFileSync(path.join(dir, f), 'utf8').replace(/\r/g, '');
    for (const chunk of raw.split(/^=====\s*$/m)) {
      if (!chunk.trim()) continue;
      const i = chunk.indexOf('\n---\n');
      if (i < 0) throw new Error('No --- separator in ' + f);
      const a = { faq: [], file: f };
      chunk.slice(0, i).split('\n').forEach(line => {
        const m = line.match(/^(\w+):\s*(.*)$/);
        if (!m) return;
        if (m[1] === 'faq') { const [q, an] = m[2].split(' || '); a.faq.push([q, an]); } else a[m[1]] = m[2];
      });
      a.body = chunk.slice(i + 5).trim();
      a.slug = a.slug || slugify(a.title);
      out.push(a);
    }
  }
  return out.sort((x, y) => (y.date || '').localeCompare(x.date || '') || x.title.localeCompare(y.title));
}

const LANDINGS = require(path.join(SRC, 'landing.js'));
const TOOLS = require(path.join(SRC, 'tools.js'));

/* ---------- shared page pieces ---------- */
const FONTS = '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500;1,600&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">';
const langSwitch = cur => `<details class="langsw"><summary aria-label="Language">${cur.toUpperCase()}</summary><div>${LANGS.map(l => `<a href="${homeUrl(l).replace(SITE, '')}" hreflang="${hl(l)}" lang="${hl(l)}">${esc(NAMES[l])}</a>`).join('')}</div></details>`;
let NAMES = {};
const nav = (l, links) => `<header class="nav solid" id="nav"><a class="brand" href="${homeUrl(l).replace(SITE, '')}"><img src="/assets/logo.svg" alt="" width="34" height="34"><span>GOLD PDF</span></a><nav class="nav-links" aria-label="Main">${links}${links.includes('/tools/') ? '' : '<a href="/tools/">Free tools</a>'}</nav>${langSwitch(l)}</header>`;
const footer = l => `<footer class="footer"><div class="collar slim" aria-hidden="true"><i></i><i></i><i></i><i></i></div><div class="wrap foot"><div><a class="brand" href="/"><img src="/assets/logo.svg" alt="" width="34" height="34"><span>GOLD PDF</span></a><p class="muted">pdf.gold</p></div><nav aria-label="Free tools"><h4>Free tools</h4><a href="/tools/">All PDF tools</a>${TOOLS.slice(0, 6).map(t => `<a href="/tools/${t.slug}/">${esc(t.nav)}</a>`).join('')}</nav><nav aria-label="Guides"><h4>Guides</h4><a href="/articles/">All guides</a>${Object.keys(TOPICS).slice(0, 5).map(t => `<a href="/articles/${t}/">${esc(TOPICS[t][0])}</a>`).join('')}</nav><nav aria-label="Pages"><h4>Gold PDF</h4>${LANDINGS.slice(0, 6).map(p => `<a href="/${p.slug}/">${esc(p.nav)}</a>`).join('')}</nav></div><div class="wrap langlist">${LANGS.map(x => `<a href="${homeUrl(x).replace(SITE, '')}" hreflang="${hl(x)}" lang="${hl(x)}">${esc(NAMES[x])}</a>`).join(' · ')}</div><p class="copy">© ${new Date().getFullYear()} Gold PDF · pdf.gold</p></footer>`;
const alternates = (path_) => path_ === null ? '' : LANGS.map(l => `<link rel="alternate" hreflang="${hl(l)}" href="${homeUrl(l)}">`).join('') + `<link rel="alternate" hreflang="x-default" href="${homeUrl('en')}">`;
const ldScript = o => `<script type="application/ld+json">${JSON.stringify(o)}</script>`;
const crumb = items => ({ '@type': 'BreadcrumbList', itemListElement: items.map(([n, u], i) => ({ '@type': 'ListItem', position: i + 1, name: n, item: SITE + u })) });
const head = ({ lang = 'en', title, desc, canonical, extra = '', og = 'website' }) => `<!doctype html><html lang="${hl(lang)}" dir="${RTL.has(lang) ? 'rtl' : 'ltr'}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${esc(title)}</title><meta name="description" content="${esc(desc)}"><link rel="canonical" href="${canonical}"><meta name="robots" content="index,follow,max-image-preview:large"><meta property="og:type" content="${og}"><meta property="og:site_name" content="Gold PDF"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}"><meta property="og:url" content="${canonical}"><meta property="og:image" content="${SITE}/assets/icon.png"><meta property="og:locale" content="${LOC[lang]}"><meta name="twitter:card" content="summary"><meta name="theme-color" content="#050a1c"><link rel="icon" type="image/svg+xml" href="/assets/logo.svg"><link rel="apple-touch-icon" href="/assets/icon.png">${FONTS}<link rel="stylesheet" href="/css/style.css"><link rel="stylesheet" href="/css/articles.css">${extra}</head><body>`;
const ctaBox = (l = 'en') => `<section class="cta-box"><img src="/assets/logo.svg" alt="" width="64" height="64"><div><h2>Gold PDF — the free PDF editor for Windows</h2><p>Edit text, redact for real, OCR scans, fill forms, sign and protect. Offline, no account, no watermark.</p></div><a class="btn btn-gold btn-lg" href="${dl}">Download free</a></section>`;

/* ---------- pages ---------- */
function articlePage(a, all) {
  const url = `${SITE}/articles/${a.slug}/`;
  const related = all.filter(x => x.topic === a.topic && x.slug !== a.slug).slice(0, 4).concat(all.filter(x => x.topic !== a.topic).slice(0, 2)).slice(0, 5);
  const first = a.body.split('\n\n')[0];
  const rest = a.body.slice(first.length).trim();
  const ld = [{ '@context': 'https://schema.org', '@type': 'Article', headline: a.title, description: a.description, datePublished: a.date, dateModified: a.modified || a.date, author: { '@type': 'Organization', name: 'Gold PDF', url: SITE }, publisher: { '@type': 'Organization', name: 'Gold PDF', logo: { '@type': 'ImageObject', url: SITE + '/assets/icon.png' } }, mainEntityOfPage: url, image: SITE + '/assets/icon.png', inLanguage: 'en' }];
  if (a.faq.length) ld.push({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: a.faq.map(([q, an]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: an } })) });
  ld.push({ '@context': 'https://schema.org', ...crumb([['Home', '/'], ['Guides', '/articles/'], [TOPICS[a.topic][0], `/articles/${a.topic}/`], [a.title, `/articles/${a.slug}/`]]) });
  const toc = [...rest.matchAll(/^## (.+)$/gm)].map(m => `<li><a href="#${slugify(m[1])}">${esc(m[1])}</a></li>`).join('');
  return head({ title: a.title.length > 48 ? a.title : a.title + ' | Gold PDF', desc: a.description, canonical: url, og: 'article', extra: ld.map(ldScript).join('') }) +
    nav('en', '<a href="/articles/">Guides</a><a href="/#features">Features</a><a href="/#download">Download</a>') +
    `<main class="doc"><nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a> › <a href="/articles/">Guides</a> › <a href="/articles/${a.topic}/">${esc(TOPICS[a.topic][0])}</a></nav><article><h1>${esc(a.title)}</h1><p class="meta">Updated ${a.modified || a.date} · ${Math.max(2, Math.round(wc(a.body) / 220))} min read · by Gold PDF</p><div class="answer"><p>${inline(first)}</p></div>${toc ? `<nav class="toc" aria-label="Contents"><b>In this guide</b><ol>${toc}</ol></nav>` : ''}${md(rest)}${a.faq.length ? `<section class="faqs"><h2 id="faq">Frequently asked questions</h2>${a.faq.map(([q, an]) => `<details><summary>${esc(q)}</summary><p>${esc(an)}</p></details>`).join('')}</section>` : ''}${ctaBox()}</article><aside class="related"><h2>Related guides</h2><ul>${related.map(r => `<li><a href="/articles/${r.slug}/">${esc(r.title)}</a></li>`).join('')}</ul></aside></main>` + footer('en') + '<script src="/js/main.js" defer></script></body></html>';
}

function hubPage(all, topic) {
  const list = topic ? all.filter(a => a.topic === topic) : all;
  const title = topic ? `${TOPICS[topic][0]} guides — Gold PDF` : 'PDF guides, how-tos and comparisons — Gold PDF';
  const desc = topic ? TOPICS[topic][1] + ' Free step-by-step guides from Gold PDF.' : 'Step-by-step PDF guides: redact, edit text, OCR scans, fill forms, sign, protect and compare free PDF editors.';
  const url = `${SITE}/articles/${topic ? topic + '/' : ''}`;
  const ld = [{ '@context': 'https://schema.org', '@type': 'CollectionPage', name: title, url, hasPart: list.slice(0, 50).map(a => ({ '@type': 'Article', headline: a.title, url: `${SITE}/articles/${a.slug}/` })) }, { '@context': 'https://schema.org', ...crumb([['Home', '/'], ['Guides', '/articles/']].concat(topic ? [[TOPICS[topic][0], `/articles/${topic}/`]] : [])) }];
  const sections = topic ? [[topic, list]] : Object.keys(TOPICS).map(t => [t, all.filter(a => a.topic === t)]).filter(([, l]) => l.length);
  return head({ title, desc, canonical: url, extra: ld.map(ldScript).join('') }) + nav('en', '<a href="/articles/">Guides</a><a href="/#features">Features</a><a href="/#download">Download</a>') +
    `<main class="doc hub"><h1>${topic ? esc(TOPICS[topic][0]) : 'PDF guides'}</h1><p class="lede">${esc(topic ? TOPICS[topic][1] : 'Clear, practical answers for everything you do with PDFs — written for people who type long, specific questions.')}</p>${!topic ? `<div class="chips">${Object.keys(TOPICS).filter(t => all.some(a => a.topic === t)).map(t => `<a href="/articles/${t}/">${esc(TOPICS[t][0])}</a>`).join('')}</div>` : ''}${sections.map(([t, l]) => `<section><h2><a href="/articles/${t}/">${esc(TOPICS[t][0])}</a></h2><ul class="cards">${l.map(a => `<li><a href="/articles/${a.slug}/"><b>${esc(a.title)}</b><span>${esc(a.description)}</span></a></li>`).join('')}</ul></section>`).join('')}${ctaBox()}</main>` + footer('en') + '<script src="/js/main.js" defer></script></body></html>';
}

function landingPage(p) {
  const url = `${SITE}/${p.slug}/`;
  const ld = [{ '@context': 'https://schema.org', '@type': 'HowTo', name: p.h1, description: p.desc, step: p.steps.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s[0], text: s[1] })) }, { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: p.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }, { '@context': 'https://schema.org', ...crumb([['Home', '/'], [p.nav, `/${p.slug}/`]]) }];
  return head({ title: p.title, desc: p.desc, canonical: url, extra: ld.map(ldScript).join('') }) + nav('en', '<a href="/articles/">Guides</a><a href="/#features">Features</a><a href="/#download">Download</a>') +
    `<main class="doc"><nav class="crumbs"><a href="/">Home</a> › ${esc(p.nav)}</nav><article><h1>${esc(p.h1)}</h1><div class="answer"><p>${inline(p.answer)}</p></div><h2>How to do it in 3 steps</h2><ol class="steps3">${p.steps.map(s => `<li><b>${esc(s[0])}</b> ${esc(s[1])}</li>`).join('')}</ol><h2>Why Gold PDF</h2><ul>${p.why.map(w => `<li>${inline(w)}</li>`).join('')}</ul><section class="faqs"><h2>Questions</h2>${p.faq.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('')}</section>${ctaBox()}<p class="muted">Related: ${p.related.map(r => `<a href="${r}">${esc(r.replace(/\//g, ' ').trim().replace(/-/g, ' '))}</a>`).join(' · ')}</p></article></main>` + footer('en') + '<script src="/js/main.js" defer></script></body></html>';
}

function toolPage(t) {
  const url = `${SITE}/tools/${t.slug}/`;
  const ld = [
    { '@context': 'https://schema.org', '@type': 'WebApplication', name: t.nav + ' — Gold PDF', url, description: t.desc, applicationCategory: 'UtilitiesApplication', operatingSystem: 'Any (web browser)', browserRequirements: 'Requires JavaScript', isAccessibleForFree: true, offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, publisher: { '@type': 'Organization', name: 'Gold PDF', url: SITE } },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: t.h1, step: t.steps.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s[0], text: s[1] })) },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: t.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
    { '@context': 'https://schema.org', ...crumb([['Home', '/'], ['Free PDF tools', '/tools/'], [t.nav, `/tools/${t.slug}/`]]) }
  ];
  const rel = t.related.map(s => TOOLS.find(x => x.slug === s)).filter(Boolean);
  return head({ title: t.title, desc: t.desc, canonical: url, extra: ld.map(ldScript).join('') }) +
    nav('en', '<a href="/articles/">Guides</a><a href="/#download">Download</a>') +
    `<main class="doc"><nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a> › <a href="/tools/">Free tools</a> › ${esc(t.nav)}</nav><article><h1>${esc(t.h1)}</h1><div class="answer"><p>${inline(t.answer)}</p></div>` +
    `<section class="tool" id="tool" data-tool="${t.slug}" aria-label="${esc(t.nav)} tool"><div class="drop" tabindex="0"><input type="file" accept="${t.accept}"${t.multiple ? ' multiple' : ''} aria-label="Choose file"><b>Drop ${t.accept.includes('pdf') ? 'your PDF' : 'your images'} here</b><span>or click to choose · stays on your device</span></div><ul class="flist"></ul>${t.options ? `<div class="opts">${t.options}</div>` : ''}<button class="btn btn-gold btn-lg run" type="button" disabled>${esc(t.cta)}</button><p class="status" role="status" aria-live="polite"></p><div class="out"></div><noscript><p>This tool needs JavaScript. Or use the free <a href="/">Gold PDF desktop app</a>.</p></noscript></section>` +
    `<h2>How to do it in 3 steps</h2><ol class="steps3">${t.steps.map(s => `<li><b>${esc(s[0])}</b> ${esc(s[1])}</li>`).join('')}</ol><h2>About this tool</h2>${t.about.map(p => `<p>${esc(p)}</p>`).join('')}<h2>Why use it</h2><ul>${t.why.map(w => `<li>${inline(w)}</li>`).join('')}</ul><section class="faqs"><h2 id="faq">Questions</h2>${t.faq.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('')}</section>` +
    `<h2>More free PDF tools</h2><ul class="cards">${rel.map(r => `<li><a href="/tools/${r.slug}/"><b>${esc(r.nav)}</b><span>${esc(r.desc)}</span></a></li>`).join('')}</ul>${ctaBox()}</article></main>` + footer('en') + '<script src="/js/main.js" defer></script><script src="/js/tools.js" defer></script></body></html>';
}

function toolsHub() {
  const title = 'Free PDF Tools Online — Merge, Split, Compress, Rotate, Protect | Gold PDF';
  const desc = 'Free PDF tools in your browser: merge, split, delete pages, rotate, compress, PDF to JPG, page numbers, watermark, protect, unlock. No upload.';
  const url = SITE + '/tools/';
  const ld = [{ '@context': 'https://schema.org', '@type': 'CollectionPage', name: title, url, mainEntity: { '@type': 'ItemList', itemListElement: TOOLS.map((t, i) => ({ '@type': 'ListItem', position: i + 1, url: `${SITE}/tools/${t.slug}/`, name: t.nav })) } }, { '@context': 'https://schema.org', ...crumb([['Home', '/'], ['Free PDF tools', '/tools/']]) }];
  return head({ title, desc, canonical: url, extra: ld.map(ldScript).join('') }) + nav('en', '<a href="/articles/">Guides</a><a href="/#download">Download</a>') +
    `<main class="doc hub"><h1>Free PDF tools</h1><div class="answer"><p>Twelve free PDF tools that run <strong>inside your browser</strong>: your files are never uploaded, there is no watermark and no sign-up. Pick a tool, drop a file, download the result.</p></div><ul class="cards">${TOOLS.map(t => `<li><a href="/tools/${t.slug}/"><b>${esc(t.nav)}</b><span>${esc(t.desc)}</span></a></li>`).join('')}</ul><h2>Need more than a quick tool?</h2><p>The free Gold PDF desktop editor for Windows adds real redaction, text editing, OCR for scans, forms, signatures and AES-256 passwords — still offline and free.</p>${ctaBox()}</main>` + footer('en') + '<script src="/js/main.js" defer></script></body></html>';
}

/* localized home page (native copy per language) */
function localHome(l, D, all) {
  const url = homeUrl(l);
  const ld = [{ '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: 'Gold PDF', url, applicationCategory: 'BusinessApplication', operatingSystem: 'Windows 10, Windows 11', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, inLanguage: hl(l), description: D.d, downloadUrl: SITE + dl, featureList: D.f.map(x => x[0]) }, { '@context': 'https://schema.org', '@type': 'FAQPage', inLanguage: hl(l), mainEntity: D.q.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }];
  return head({ lang: l, title: D.t, desc: D.d, canonical: url, extra: alternates() + ld.map(ldScript).join('') }) +
    nav(l, `<a href="#features">${esc(D.nav[0])}</a><a href="/articles/">${esc(D.nav[1])}</a><a href="#faq">${esc(D.nav[2])}</a>`) +
    `<main><section class="hero hero-a"><video class="hero-video" autoplay muted loop playsinline preload="metadata" poster="/assets/hero-a.jpg"><source src="/assets/hero-a.mp4" type="video/mp4"></video><div class="hero-shade"></div><div class="hero-inner"><p class="kicker"><span class="gem"></span>${esc(D.k)}</p><h1>${esc(D.h1a)}<br><em>${esc(D.h1b)}</em></h1><p class="lede">${esc(D.lede)}</p><div class="cta"><a class="btn btn-gold btn-lg" href="${dl}">${esc(D.c1)}</a><a class="btn btn-ghost btn-lg" href="#features">${esc(D.c2)}</a></div><ul class="badges">${D.b.map(x => `<li>${esc(x)}</li>`).join('')}</ul></div></section>` +
    `<section class="section features" id="features"><div class="wrap"><header class="head"><h2>${esc(D.fh)}</h2></header><div class="grid">${D.f.map(([t, d], i) => `<article class="card${i === 0 ? ' big' : ''}"><h3>${esc(t)}</h3><p>${esc(d)}</p></article>`).join('')}</div><p class="shotwrap"><img class="shotimg" src="/assets/app-edit.png" alt="Gold PDF" width="1440" height="900" loading="lazy"></p></div></section>` +
    `<section class="section faq" id="faq"><div class="wrap narrow"><header class="head center"><h2>${esc(D.faqh)}</h2></header><div class="faq-list">${D.q.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('')}</div></div></section>` +
    `<section class="section download"><div class="wrap"><div class="dl"><img class="dl-logo" src="/assets/logo.svg" alt="" width="96" height="96"><h2>${esc(D.dlh)}</h2><a class="btn btn-gold btn-xl" href="${dl}">${esc(D.c1)}</a><p class="muted">Windows 10 / 11 · 119 MB · $0 · <a href="${lite}" download>Lite · 93 MB</a></p></div></div></section></main>` + footer(l) + '<script src="/js/main.js" defer></script></body></html>';
}

/* ---------- build ---------- */
function build() {
  fs.rmSync(DIST, { recursive: true, force: true });
  fs.mkdirSync(DIST, { recursive: true });
  const skip = p => /logo-options|\.webp$/.test(p);
  fs.cpSync(path.join(ROOT, 'assets'), path.join(DIST, 'assets'), { recursive: true, filter: s => !skip(s) });
  for (const d of ['css', 'js']) fs.cpSync(path.join(ROOT, d), path.join(DIST, d), { recursive: true });

  // language names
  const data = Object.assign({}, require(path.join(SRC, 'lang-a.js')), require(path.join(SRC, 'lang-b.js')), require(path.join(SRC, 'lang-c.js')));
  NAMES = { en: 'English' };
  LANGS.slice(1).forEach(l => { if (!data[l]) throw new Error('missing language ' + l); NAMES[l] = data[l].n; });

  const all = loadArticles();
  const seen = new Set();
  for (const a of all) {
    if (seen.has(a.slug)) throw new Error('duplicate slug ' + a.slug);
    seen.add(a.slug);
    if (!TOPICS[a.topic]) throw new Error('bad topic in ' + a.slug);
  }

  // English home
  let home = fs.readFileSync(path.join(SRC, 'home-en.html'), 'utf8');
  const guides = all.slice(0, 6);
  const guidesHtml = `<section class="section guides" id="guides"><div class="wrap"><header class="head"><p class="kicker">Guides</p><h2>Answers to the questions <em>people really ask.</em></h2></header><ul class="cards">${guides.map(a => `<li><a href="/articles/${a.slug}/"><b>${esc(a.title)}</b><span>${esc(a.description)}</span></a></li>`).join('')}</ul><p><a class="btn btn-ghost" href="/articles/">All ${all.length} guides</a></p></div></section>`;
  home = home.replace('<!--GUIDES-->', guidesHtml)
    .replace('<a href="#faq">FAQ</a>', '<a href="/tools/">Free tools</a><a href="/articles/">Guides</a><a href="#faq">FAQ</a>')
    .replace('</head>', alternates() + '<link rel="stylesheet" href="css/articles.css"></head>')
    .replace('<p class="copy">', `<div class="wrap langlist">${LANGS.map(x => `<a href="${homeUrl(x).replace(SITE, '')}" hreflang="${hl(x)}" lang="${hl(x)}">${esc(NAMES[x])}</a>`).join(' · ')}</div><p class="copy">`)
    .replace(/href="downloads\/GoldPDF-Setup-1\.0\.0\.exe"/g, `href="${dl}"`)
    .replace('<dd id="dlSize">118 MB</dd>', `<dd id="dlSize">119 MB &middot; <a href="${lite}" download>Lite version, 93 MB (OCR downloads on first use)</a></dd>`);
  write('index.html', home);

  LANGS.slice(1).forEach(l => write(`${l}/index.html`, localHome(l, data[l], all)));
  write('articles/index.html', hubPage(all, null));
  Object.keys(TOPICS).filter(t => all.some(a => a.topic === t)).forEach(t => write(`articles/${t}/index.html`, hubPage(all, t)));
  all.forEach(a => write(`articles/${a.slug}/index.html`, articlePage(a, all)));
  LANDINGS.forEach(p => write(`${p.slug}/index.html`, landingPage(p)));
  write('tools/index.html', toolsHub());
  TOOLS.forEach(t => write(`tools/${t.slug}/index.html`, toolPage(t)));

  write('404.html', head({ title: 'Page not found — Gold PDF', desc: 'This page does not exist.', canonical: SITE + '/404.html' }).replace('index,follow', 'noindex') + nav('en', '<a href="/articles/">Guides</a>') + '<main class="doc"><h1>Page not found</h1><p>Try the <a href="/">home page</a> or the <a href="/articles/">guides</a>.</p></main></body></html>');

  // sitemap
  const urls = [];
  LANGS.forEach(l => urls.push(`<url><loc>${homeUrl(l)}</loc><lastmod>${TODAY}</lastmod><priority>${l === 'en' ? '1.0' : '0.8'}</priority>${LANGS.map(x => `<xhtml:link rel="alternate" hreflang="${hl(x)}" href="${homeUrl(x)}"/>`).join('')}<xhtml:link rel="alternate" hreflang="x-default" href="${homeUrl('en')}"/></url>`));
  urls.push(`<url><loc>${SITE}/articles/</loc><lastmod>${TODAY}</lastmod><priority>0.8</priority></url>`);
  Object.keys(TOPICS).filter(t => all.some(a => a.topic === t)).forEach(t => urls.push(`<url><loc>${SITE}/articles/${t}/</loc><lastmod>${TODAY}</lastmod><priority>0.7</priority></url>`));
  LANDINGS.forEach(p => urls.push(`<url><loc>${SITE}/${p.slug}/</loc><lastmod>${TODAY}</lastmod><priority>0.9</priority></url>`));
  urls.push(`<url><loc>${SITE}/tools/</loc><lastmod>${TODAY}</lastmod><priority>0.9</priority></url>`);
  TOOLS.forEach(t => urls.push(`<url><loc>${SITE}/tools/${t.slug}/</loc><lastmod>${TODAY}</lastmod><priority>0.9</priority></url>`));
  all.forEach(a => urls.push(`<url><loc>${SITE}/articles/${a.slug}/</loc><lastmod>${a.modified || a.date}</lastmod><priority>0.6</priority></url>`));
  write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`);
  write('robots.txt', `User-agent: *\nAllow: /\n\nUser-agent: GPTBot\nAllow: /\nUser-agent: OAI-SearchBot\nAllow: /\nUser-agent: ChatGPT-User\nAllow: /\nUser-agent: ClaudeBot\nAllow: /\nUser-agent: Claude-SearchBot\nAllow: /\nUser-agent: PerplexityBot\nAllow: /\nUser-agent: Google-Extended\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
  const facts = fs.readFileSync(path.join(SRC, 'llms-head.txt'), 'utf8');
  write('llms.txt', facts + `\n## Free browser tools (no upload, no watermark)\n${TOOLS.map(t => `- [${t.nav}](${SITE}/tools/${t.slug}/): ${t.desc}`).join('\n')}\n\n## Guides\n${all.slice(0, 40).map(a => `- [${a.title}](${SITE}/articles/${a.slug}/): ${a.description}`).join('\n')}\n\n## Localized home pages\n${LANGS.map(l => `- [${NAMES[l]}](${homeUrl(l)})`).join('\n')}\n`);
  write('llms-full.txt', facts + `\n## All guides (${all.length})\n${all.map(a => `### ${a.title}\n${SITE}/articles/${a.slug}/\n${a.description}\n`).join('\n')}`);
  write('feed.xml', `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Gold PDF guides</title><link>${SITE}/articles/</link><description>PDF how-tos and comparisons</description>${all.slice(0, 30).map(a => `<item><title>${esc(a.title)}</title><link>${SITE}/articles/${a.slug}/</link><guid>${SITE}/articles/${a.slug}/</guid><pubDate>${new Date(a.date).toUTCString()}</pubDate><description>${esc(a.description)}</description></item>`).join('')}</channel></rss>`);
  write('_headers', '/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n  X-Frame-Options: SAMEORIGIN\n/assets/*\n  Cache-Control: public, max-age=31536000, immutable\n/css/*\n  Cache-Control: public, max-age=86400\n/js/*\n  Cache-Control: public, max-age=86400\n');
  write('CNAME', 'pdf.gold\n');
  const ik = path.join(ROOT, 'indexnow.key');
  if (fs.existsSync(ik)) { const k = fs.readFileSync(ik, 'utf8').trim(); write(k + '.txt', k); }
  write('.nojekyll', '');
  console.log(`built: ${LANGS.length} home pages, ${all.length} articles, ${LANDINGS.length} landing pages`);
}
build();
