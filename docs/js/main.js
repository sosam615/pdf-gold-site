/* pdf.gold — interactions */
(() => {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* nav turns solid after the first screen */
  const nav = $('#nav');
  const onScroll = () => nav.classList.toggle('solid', scrollY > 60);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* reveal on scroll + play videos only while visible */
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12, rootMargin: '0px 0px -6% 0px' });
    $$('.reveal').forEach(el => io.observe(el));
    const vo = new IntersectionObserver(es => es.forEach(e => {
      const v = e.target;
      if (e.isIntersecting) { const p = v.play(); if (p && p.catch) p.catch(() => {}); } else v.pause();
    }), { threshold: .05 });
    $$('video').forEach(v => vo.observe(v));
  } else $$('.reveal').forEach(el => el.classList.add('in'));

  /* gold dust over the first hero */
  const cv = $('.dust');
  if (cv && !reduce) {
    const ctx = cv.getContext('2d');
    let w, h, parts;
    const size = () => {
      const r = cv.getBoundingClientRect();
      w = cv.width = r.width * devicePixelRatio; h = cv.height = r.height * devicePixelRatio;
      parts = Array.from({ length: Math.round(r.width / 14) }, () => ({ x: Math.random() * w, y: Math.random() * h, r: (Math.random() * 1.6 + .4) * devicePixelRatio, s: Math.random() * .35 + .08, a: Math.random() * Math.PI * 2 }));
    };
    size();
    addEventListener('resize', size);
    let on = true;
    new IntersectionObserver(es => { on = es[0].isIntersecting; }).observe(cv);
    const tick = () => {
      if (on) {
        ctx.clearRect(0, 0, w, h);
        for (const p of parts) {
          p.y -= p.s * devicePixelRatio; p.a += .02; p.x += Math.sin(p.a) * .3;
          if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
          const tw = .55 + Math.sin(p.a * 2) * .45;
          ctx.beginPath();
          ctx.fillStyle = `rgba(241,210,122,${(.25 + tw * .55).toFixed(2)})`;
          ctx.shadowColor = 'rgba(241,210,122,.9)'; ctx.shadowBlur = 8 * devicePixelRatio;
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      requestAnimationFrame(tick);
    };
    tick();
  }

  /* savings calculator */
  const users = $('#users'), years = $('#years');
  const money = n => '$' + Math.round(n).toLocaleString('en-US');
  function calc() {
    const u = +users.value, y = +years.value;
    $('#uOut').textContent = u; $('#yOut').textContent = y;
    const bars = $$('.cbar b[data-rate]');
    const max = Math.max(...bars.map(b => +b.dataset.rate)) * u * y;
    bars.forEach(b => {
      const v = +b.dataset.rate * u * y;
      b.textContent = money(v);
      b.parentElement.querySelector('i').style.setProperty('--w', (v / max * 100).toFixed(1) + '%');
    });
    $('#saveTotal').textContent = money(239.88 * u * y);
  }
  users.addEventListener('input', calc); years.addEventListener('input', calc); calc();

  /* app tour tabs */
  const caps = [
    'Open several PDFs as tabs. Recent files wait on the welcome screen.',
    'Retype a line, black out a secret, fill the form — then save, and the old words are gone for good.',
    'A scanned page after Recognize text: every line can now be searched and edited.',
    'Ctrl+K finds any command by name, with its shortcut.',
    'Hebrew and Arabic mirror the whole interface right-to-left.',
    'Prefer daylight? Switch to the Papyrus theme.'
  ];
  $$('.tab').forEach(t => t.addEventListener('click', () => {
    const i = +t.dataset.tab;
    $$('.tab').forEach(x => x.classList.toggle('on', x === t));
    $$('.shot-i').forEach((s, k) => s.classList.toggle('on', k === i));
    $('#tourCap').textContent = caps[i];
  }));

  /* the 30 languages, in their own names */
  const L = ['English', 'עברית', 'العربية', 'Español', 'Français', 'Deutsch', 'Italiano', 'Português', 'Русский', 'Українська', 'Polski', 'Nederlands', 'Svenska', 'Norsk', 'Dansk', 'Suomi', 'Türkçe', 'Ελληνικά', 'Čeština', 'Română', 'Magyar', 'Български', 'Bahasa Indonesia', 'Bahasa Melayu', 'Tiếng Việt', 'ไทย', 'हिन्दी', '日本語', '한국어', '简体中文'];
  const ll = $('#langList');
  L.forEach(n => { const s = document.createElement('span'); s.textContent = n; ll.appendChild(s); });

  $('#yr').textContent = new Date().getFullYear();
})();
