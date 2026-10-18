# Daily article procedure (125 days)

Site repo: `C:\Users\DANNA\tdp\goldpdf-site`. Queue: `src/articles/_queue.txt` (`topic|Title`, 150 lines). Published articles live in `src/articles/*.md`.

1. Find the next title: the first queue line whose slug (`title` lowercased, non-alphanumerics -> `-`) has no article yet (search `src/articles` for `title: <Title>`).
2. Write ONE new article, **1,200-1,600 words**, in a new file `src/articles/day-NNN.md` (NNN = number of articles already published, zero-padded to 3). Use today's date in `date:`.
   - Format (see `day-000-a.md`): `=====` line, then `title:`, `description:` (<=155 chars), `topic:` (redaction, editing, ocr, forms, security, compare, languages, ai), `date:`, 3-5 `faq: Question || Answer` lines, a `---` line, then markdown.
   - Title is the exact 4-10 word query. First paragraph = a direct 2-sentence quotable answer. Then `## Quick steps` (numbered), 3-5 `##` sections phrased around the query, a table where it helps, a `> **Common mistakes**` box, one honest paragraph about what Gold PDF does and does not do.
   - Link to 3-5 existing articles/landing pages only (`/articles/<slug>/`, `/redact-pdf/` ...). Never link to unpublished slugs.
   - Be accurate about Gold PDF: Windows only, free, offline, edit text (E), redact (R) rebuilds pages on save, OCR (Ctrl+Shift+O; English/Hebrew bundled), signatures library, forms, AES-256 passwords, Gold AI with the user's own key, 30 UI languages. Plain Whiteout only covers. No invented statistics; competitor prices dated and hedged.
3. Also deepen ONE earlier day-000 article by about 500 words (add a section, example or table) and set `modified:` to today. Do this each day until all 25 are 1,000+ words.
4. `node scripts/build-site.js` then `node scripts/check-site.js` — fix any errors.
5. `git add -A && git commit -m "Add article: <title>"`; `git push` if a remote exists.
6. Report the title, word count and check results in one or two lines.

## Indexing (every run, after git push)
Wait ~90 s for GitHub Pages, then run: node scripts/indexnow.js --new   (submits today's new/changed URLs to Bing/Yandex via IndexNow). Google picks the sitemap up via Search Console (manual one-time submit of https://pdf.gold/sitemap.xml).
