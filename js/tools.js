/* pdf.gold free web tools — everything runs in the browser, files never leave the device */
(() => {
  'use strict';
  const root = document.getElementById('tool');
  if (!root) return;
  const KEY = { 'merge-pdf': 'merge', 'split-pdf': 'split', 'extract-pdf-pages': 'extract-pages', 'delete-pdf-pages': 'delete-pages', 'rotate-pdf': 'rotate', 'compress-pdf': 'compress', 'add-page-numbers-to-pdf': 'page-numbers', 'watermark-pdf': 'watermark', 'pdf-to-text': 'extract-text', 'protect-pdf-with-password': 'protect', 'unlock-pdf': 'unlock' };
  const slug = KEY[root.dataset.tool] || root.dataset.tool;
  const $ = (s, r = root) => r.querySelector(s);
  const PDFLib = () => window.PDFLib;
  const loaded = {};
  const loadScript = src => loaded[src] || (loaded[src] = new Promise((res, rej) => { const s = document.createElement('script'); s.src = src; s.onload = res; s.onerror = () => rej(new Error('Could not load ' + src)); document.head.appendChild(s); }));
  const needLib = () => loadScript('/assets/lib/pdf-lib.min.js');
  const needJs = async () => { window.requestAnimationFrame = cb => setTimeout(() => cb(performance.now()), 0); /* keep rendering when the tab is in the background */ await loadScript('/assets/lib/pdf.min.js'); pdfjsLib.GlobalWorkerOptions.workerSrc = '/assets/lib/pdf.worker.min.js'; };

  const drop = $('.drop'), input = $('input[type=file]'), list = $('.flist'), run = $('.run'), status = $('.status'), out = $('.out');
  let files = [];
  const multi = input.multiple;

  const fmt = n => n > 1048576 ? (n / 1048576).toFixed(1) + ' MB' : Math.max(1, Math.round(n / 1024)) + ' KB';
  const say = (m, bad) => { status.textContent = m; status.className = 'status' + (bad ? ' bad' : ''); };
  const base = f => f.name.replace(/\.[^.]+$/, '');
  const buf = f => f.arrayBuffer();
  const val = n => { const e = $('[name=' + n + ']'); return e ? e.value : ''; };

  function renderList() {
    list.innerHTML = '';
    files.forEach((f, i) => {
      const li = document.createElement('li');
      li.innerHTML = '<span class="fn"></span><em></em>';
      li.firstChild.textContent = f.name; li.lastChild.textContent = fmt(f.size);
      if (multi) {
        [['↑', -1], ['↓', 1]].forEach(([t, d]) => { const b = document.createElement('button'); b.type = 'button'; b.textContent = t; b.setAttribute('aria-label', d < 0 ? 'Move up' : 'Move down'); b.onclick = () => { const j = i + d; if (j < 0 || j >= files.length) return; [files[i], files[j]] = [files[j], files[i]]; renderList(); }; li.appendChild(b); });
      }
      const x = document.createElement('button'); x.type = 'button'; x.textContent = '✕'; x.setAttribute('aria-label', 'Remove'); x.onclick = () => { files.splice(i, 1); renderList(); }; li.appendChild(x);
      list.appendChild(li);
    });
    run.disabled = !files.length;
    root.classList.toggle('has-files', files.length > 0);
  }
  function addFiles(fl) {
    const accept = (input.accept || '').split(',').map(s => s.trim().toLowerCase());
    const ok = [...fl].filter(f => accept.some(a => a.startsWith('.') ? f.name.toLowerCase().endsWith(a) : f.type === a || (a.endsWith('/*') && f.type.startsWith(a.slice(0, -1)))));
    if (!ok.length) { say('Please choose ' + (input.accept.includes('pdf') ? 'a PDF file.' : 'image files (JPG, PNG, WebP).'), true); return; }
    files = multi ? files.concat(ok) : [ok[0]];
    out.innerHTML = ''; say(''); renderList();
  }
  input.addEventListener('change', () => { addFiles(input.files); input.value = ''; });
  ['dragenter', 'dragover'].forEach(e => drop.addEventListener(e, ev => { ev.preventDefault(); drop.classList.add('over'); }));
  ['dragleave', 'drop'].forEach(e => drop.addEventListener(e, ev => { ev.preventDefault(); drop.classList.remove('over'); }));
  drop.addEventListener('drop', ev => addFiles(ev.dataTransfer.files));

  /* page-range parser: "1-3, 5, 8-"  ->  [[0,1,2],[4],[7..n-1]] */
  function ranges(str, n) {
    const parts = str.split(/[,;\s]+/).filter(Boolean), res = [];
    for (const p of parts) {
      const m = p.match(/^(\d*)-(\d*)$/) || p.match(/^(\d+)$/);
      if (!m) throw new Error('Cannot read "' + p + '". Use numbers like 1-3, 5, 8-');
      let a = m[2] === undefined ? +m[1] : (m[1] ? +m[1] : 1), b = m[2] === undefined ? +m[1] : (m[2] ? +m[2] : n);
      if (a < 1 || b > n || a > b) throw new Error('Pages must be between 1 and ' + n + ' (got "' + p + '")');
      const r = []; for (let i = a; i <= b; i++) r.push(i - 1); res.push(r);
    }
    if (!res.length) throw new Error('Enter the pages you want.');
    return res;
  }
  const flat = r => [...new Set(r.flat())].sort((a, b) => a - b);
  const pdfBlob = bytes => new Blob([bytes], { type: 'application/pdf' });
  const load = async (f, opts) => PDFLib().PDFDocument.load(await buf(f), Object.assign({ ignoreEncryption: false }, opts || {}));

  async function renderPages(file, scale, type, quality, cb, password) {
    await needJs();
    const doc = await pdfjsLib.getDocument({ data: new Uint8Array(await buf(file)), password }).promise;
    for (let i = 1; i <= doc.numPages; i++) {
      say('Page ' + i + ' of ' + doc.numPages + '…');
      const page = await doc.getPage(i), vp = page.getViewport({ scale });
      const c = document.createElement('canvas'); c.width = Math.round(vp.width); c.height = Math.round(vp.height);
      const g = c.getContext('2d'); g.fillStyle = '#fff'; g.fillRect(0, 0, c.width, c.height);
      await page.render({ canvasContext: g, viewport: vp }).promise;
      const blob = await new Promise(r => c.toBlob(r, type, quality));
      await cb(blob, i, c, doc.numPages);
      c.width = c.height = 1;
    }
  }

  const T = {
    async merge() {
      if (files.length < 2) throw new Error('Add at least two PDF files.');
      const m = await PDFLib().PDFDocument.create();
      for (const f of files) { const d = await load(f); (await m.copyPages(d, d.getPageIndices())).forEach(p => m.addPage(p)); }
      return [{ name: 'merged.pdf', blob: pdfBlob(await m.save()) }];
    },
    async split() {
      const d = await load(files[0]), n = d.getPageCount(), res = [];
      const rs = val('mode') === 'each' ? d.getPageIndices().map(i => [i]) : ranges(val('pages'), n);
      for (let k = 0; k < rs.length; k++) {
        const o = await PDFLib().PDFDocument.create();
        (await o.copyPages(d, rs[k])).forEach(p => o.addPage(p));
        res.push({ name: base(files[0]) + '-part' + (k + 1) + '.pdf', blob: pdfBlob(await o.save()) });
      }
      return res;
    },
    async 'extract-pages'() {
      const d = await load(files[0]), keep = flat(ranges(val('pages'), d.getPageCount()));
      const o = await PDFLib().PDFDocument.create();
      (await o.copyPages(d, keep)).forEach(p => o.addPage(p));
      return [{ name: base(files[0]) + '-extracted.pdf', blob: pdfBlob(await o.save()) }];
    },
    async 'delete-pages'() {
      const d = await load(files[0]), n = d.getPageCount(), del = flat(ranges(val('pages'), n));
      if (del.length >= n) throw new Error('You cannot delete every page.');
      del.reverse().forEach(i => d.removePage(i));
      return [{ name: base(files[0]) + '-edited.pdf', blob: pdfBlob(await d.save()) }];
    },
    async rotate() {
      const d = await load(files[0]), n = d.getPageCount(), deg = +val('angle');
      const sel = val('pages').trim() ? flat(ranges(val('pages'), n)) : d.getPageIndices();
      sel.forEach(i => { const p = d.getPage(i); p.setRotation(PDFLib().degrees(((p.getRotation().angle + deg) % 360 + 360) % 360)); });
      return [{ name: base(files[0]) + '-rotated.pdf', blob: pdfBlob(await d.save()) }];
    },
    async compress() {
      const q = +val('quality'), s = q >= .8 ? 2 : q >= .6 ? 1.6 : 1.25, o = await PDFLib().PDFDocument.create();
      await renderPages(files[0], s, 'image/jpeg', q, async (blob, i, c) => {
        const img = await o.embedJpg(new Uint8Array(await blob.arrayBuffer()));
        const p = o.addPage([c.width / s, c.height / s]);
        p.drawImage(img, { x: 0, y: 0, width: p.getWidth(), height: p.getHeight() });
      });
      const bytes = await o.save();
      if (bytes.length >= files[0].size) say('Done — but this file was already small, so the result is not smaller. Try a lower quality.');
      return [{ name: base(files[0]) + '-compressed.pdf', blob: pdfBlob(bytes) }];
    },
    async 'pdf-to-jpg'() {
      const png = val('format') === 'png', res = [];
      await renderPages(files[0], +val('scale'), png ? 'image/png' : 'image/jpeg', .92, async (blob, i, c, n) => {
        res.push({ name: base(files[0]) + '-page' + String(i).padStart(String(n).length, '0') + (png ? '.png' : '.jpg'), blob });
      });
      return res;
    },
    async 'jpg-to-pdf'() {
      const o = await PDFLib().PDFDocument.create(), a4 = val('size') === 'a4';
      for (const f of files) {
        say('Adding ' + f.name + '…');
        let bytes = new Uint8Array(await buf(f)), img;
        if (f.type === 'image/jpeg') img = await o.embedJpg(bytes);
        else if (f.type === 'image/png') img = await o.embedPng(bytes);
        else { // webp etc. -> png via canvas
          const bm = await createImageBitmap(f), c = document.createElement('canvas'); c.width = bm.width; c.height = bm.height; c.getContext('2d').drawImage(bm, 0, 0);
          img = await o.embedPng(new Uint8Array(await (await new Promise(r => c.toBlob(r, 'image/png'))).arrayBuffer()));
        }
        const iw = img.width, ih = img.height;
        if (a4) { const W = 595.28, H = 841.89, s = Math.min((W - 40) / iw, (H - 40) / ih, 1), w = iw * s, h = ih * s, p = o.addPage([W, H]); p.drawImage(img, { x: (W - w) / 2, y: (H - h) / 2, width: w, height: h }); }
        else { const p = o.addPage([iw, ih]); p.drawImage(img, { x: 0, y: 0, width: iw, height: ih }); }
      }
      return [{ name: 'images.pdf', blob: pdfBlob(await o.save()) }];
    },
    async 'page-numbers'() {
      const d = await load(files[0]), font = await d.embedFont(PDFLib().StandardFonts.Helvetica), start = +val('start') || 1, pos = val('pos'), total = d.getPageCount();
      d.getPages().forEach((p, i) => {
        const { width, height } = p.getSize(), t = val('format') === 'of' ? (start + i) + ' / ' + (start + total - 1) : String(start + i), w = font.widthOfTextAtSize(t, 11);
        const x = pos.endsWith('left') ? 36 : pos.endsWith('right') ? width - 36 - w : (width - w) / 2, y = pos.startsWith('top') ? height - 30 : 22;
        p.drawText(t, { x, y, size: 11, font, color: PDFLib().rgb(.2, .2, .2) });
      });
      return [{ name: base(files[0]) + '-numbered.pdf', blob: pdfBlob(await d.save()) }];
    },
    async watermark() {
      const text = val('text').trim(); if (!text) throw new Error('Type the watermark text.');
      if (/[^ -ÿ]/.test(text)) throw new Error('This web tool supports Latin letters only. The free Gold PDF desktop app supports every language.');
      const d = await load(files[0]), font = await d.embedFont(PDFLib().StandardFonts.HelveticaBold), op = +val('opacity');
      d.getPages().forEach(p => {
        const { width, height } = p.getSize(), size = Math.min(width, height) / Math.max(6, text.length * .55), w = font.widthOfTextAtSize(text, size);
        const a = Math.atan2(height, width), ang = val('angle') === 'diag' ? a : 0, c = Math.cos(ang), s = Math.sin(ang);
        p.drawText(text, { x: width / 2 - (w / 2) * c + (size / 3) * s, y: height / 2 - (w / 2) * s - (size / 3) * c, size, font, rotate: PDFLib().degrees(ang * 180 / Math.PI), color: PDFLib().rgb(.55, .55, .55), opacity: op });
      });
      return [{ name: base(files[0]) + '-watermarked.pdf', blob: pdfBlob(await d.save()) }];
    },
    async 'extract-text'() {
      await needJs();
      const doc = await pdfjsLib.getDocument({ data: new Uint8Array(await buf(files[0])) }).promise; let txt = '';
      for (let i = 1; i <= doc.numPages; i++) { say('Reading page ' + i + ' of ' + doc.numPages + '…'); const c = await (await doc.getPage(i)).getTextContent(); let line = ''; c.items.forEach(it => { line += it.str; line += it.hasEOL ? '\n' : ''; }); txt += (doc.numPages > 1 ? '--- Page ' + i + ' ---\n' : '') + line.trim() + '\n\n'; }
      if (!txt.replace(/---[^-]*---|\s/g, '')) say('No selectable text found — this PDF is probably a scan. Use OCR in the free Gold PDF desktop app.', true);
      const ta = document.createElement('textarea'); ta.value = txt.trim(); ta.readOnly = true; ta.rows = 12; ta.className = 'txt'; out.appendChild(ta);
      return [{ name: base(files[0]) + '.txt', blob: new Blob([txt.trim()], { type: 'text/plain;charset=utf-8' }) }];
    },
    async protect() {
      const pw = val('password'); if (pw.length < 4) throw new Error('Use a password of at least 4 characters.');
      const d = await load(files[0]);
      await d.encrypt({ userPassword: pw, ownerPassword: pw + '·owner', permissions: { printing: 'highResolution', modifying: false, copying: true, annotating: true, fillingForms: true } });
      return [{ name: base(files[0]) + '-protected.pdf', blob: pdfBlob(await d.save()) }];
    },
    async unlock() {
      const pw = val('password');
      let d; try { d = await PDFLib().PDFDocument.load(await buf(files[0]), { password: pw }); } catch (e) { throw new Error(pw ? 'Wrong password, or this file uses an unsupported lock.' : 'Enter the PDF password.'); }
      return [{ name: base(files[0]) + '-unlocked.pdf', blob: pdfBlob(await d.save()) }];
    }
  };

  run.addEventListener('click', async () => {
    run.disabled = true; out.innerHTML = ''; say('Working… your file stays on this device.');
    try {
      if (slug !== 'pdf-to-jpg' && slug !== 'extract-text') await needLib();
      else if (slug === 'pdf-to-jpg') await needJs();
      const results = await T[slug]();
      say(results.length + (results.length > 1 ? ' files are' : ' file is') + ' ready — nothing was uploaded.');
      results.forEach(r => {
        const url = URL.createObjectURL(r.blob), a = document.createElement('a');
        a.href = url; a.download = r.name; a.className = 'btn btn-gold dlres'; a.textContent = 'Download ' + r.name + ' (' + fmt(r.blob.size) + ')'; out.appendChild(a);
      });
      if (results.length > 1) { const b = document.createElement('button'); b.type = 'button'; b.className = 'btn btn-ghost'; b.textContent = 'Download all'; b.onclick = () => [...out.querySelectorAll('a.dlres')].forEach((a, i) => setTimeout(() => a.click(), i * 250)); out.appendChild(b); }
      document.dispatchEvent(new CustomEvent('tool-done', { detail: slug }));
    } catch (e) { say(e.message || String(e), true); }
    run.disabled = !files.length;
  });
  renderList();
})();
