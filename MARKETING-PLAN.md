# Gold PDF — Online Marketing Plan (zero-cost)

Goal: get pdf.gold found by people searching for a free PDF editor, and recommended by AI assistants.
Everything below is online and costs nothing except your time. (I read "TWOST" as "zero/low cost" — tell me if you meant something else.)

Your edge, used in every message: **free forever · edits real text · true redaction · OCR · 30 languages · offline · your own AI key**.

---

## Part 1 — SEO (search engines)

### 1. Keywords to own
| Intent | Examples |
|---|---|
| Free tool | "free pdf editor for windows", "pdf editor no watermark", "offline pdf editor" |
| Task | "edit text in pdf", "redact pdf permanently", "ocr scanned pdf", "fill pdf form", "add signature to pdf", "password protect pdf" |
| Alternative | "adobe acrobat alternative free", "foxit alternative", "smallpdf alternative offline" |
| Language | "עורך pdf חינם", "editor pdf gratis", "pdf bearbeiten kostenlos", "pdf 편집기", "pdf 编辑器" |

### 2. On-page (already done in the site)
- Title, meta description, canonical, Open Graph, `robots` meta, sitemap.xml, robots.txt, JSON-LD (SoftwareApplication + FAQPage + WebSite).
- To do: one landing page per task (below), each with one H1, a 60-second how-to, a screenshot, a FAQ block and a download button.

### 3. Landing pages to add (one per high-intent keyword)
`/edit-pdf-text` · `/redact-pdf` · `/ocr-pdf` · `/fill-pdf-form` · `/sign-pdf` · `/password-protect-pdf` · `/merge-pdf` · `/adobe-acrobat-alternative` · `/foxit-alternative` · `/smallpdf-alternative` — plus translated versions for the top 8 languages (`/he/`, `/es/`, `/de/`, `/fr/`, `/pt/`, `/ru/`, `/ja/`, `/zh/`) with `hreflang` tags.

### 4. Technical
- Host on a fast static host with HTTPS; keep the page under ~2 s to load (compress the three videos, lazy-load below the fold).
- Add `width`/`height` to images (done), WebP versions of screenshots, and a proper favicon set.
- Submit to Google Search Console and Bing Webmaster Tools; submit the sitemap; request indexing for each new page.
- Add `Content-Security` and security headers (trust signal).
- Sign the installer with a code-signing certificate when you can (cuts the SmartScreen warning, lifts conversions and reputation).

### 5. Content & links
- Publish 2 helpful guides a month ("How to redact a PDF so it can't be undone", "Why a black box isn't redaction", "How to OCR a scanned contract for free").
- Earn links by being the best answer, then by outreach (see ideas 1–22).
- Track: Search Console impressions, clicks, top queries; download clicks (add a simple event).

---

## Part 2 — GEO (Generative-Engine Optimization: ChatGPT, Gemini, Claude, Perplexity, Copilot, Google AI Overviews)

AI assistants recommend what they can **verify and quote**. So:

1. **`llms.txt` + robots** (done): a short, factual summary AI crawlers can read; AI bots are explicitly allowed.
2. **Answer-first pages**: start every page with a 2-sentence direct answer ("Gold PDF is a free Windows PDF editor that can edit text, redact for real and run OCR…"), then details. Use question-style H2s that match how people ask.
3. **Facts in plain text, not images**: price, platform, size, languages, privacy, limits (no Mac yet) — AI avoids vague claims. Keep the "not available yet" list honest; it increases trust.
4. **Structured data** (done): SoftwareApplication, FAQPage. Add `Review`/`AggregateRating` only when you have real reviews.
5. **Third-party corroboration** — AI cross-checks. Get consistent descriptions on: AlternativeTo, Product Hunt, G2/Capterra/SourceForge/Softpedia listings, GitHub README, Wikipedia-style "comparison" pages, Reddit and Stack Exchange answers, Hacker News, Medium/dev.to.
6. **Comparison tables with citations**: keep the competitor price table, always with "list price, date, verify at vendor" and links (done) — AI quotes dated, sourced tables.
7. **Entity consistency**: same name ("Gold PDF"), same one-line description, same logo and URL everywhere.
8. **Fresh dates**: update "Last updated" and prices quarterly; AI prefers fresh pages.
9. **Test monthly**: ask ChatGPT, Gemini, Claude and Perplexity "best free PDF editor for Windows", "free Acrobat alternative that can redact", "free PDF editor with OCR offline" — record whether Gold PDF appears and which sources they cite, then strengthen those sources.

---

## Part 3 — 22 more ideas (all online, all free)

**Directories & launches**
1. **Product Hunt** launch (Tuesday–Thursday, prepare a gallery, a 1-minute demo video and a maker comment).
2. **AlternativeTo** listing as an alternative to Acrobat, Foxit, Nitro, Smallpdf, iLovePDF — the single best source of "alternative" traffic and AI citations.
3. **Software directories**: SourceForge, Softpedia, MajorGeeks, Neowin, Chocolatey/winget package (a `winget install` line is great for tech users), FileHorse, Uptodown.
4. **GitHub**: public repo with README, screenshots, releases page; add topics `pdf-editor`, `ocr`, `redaction`, `electron`. Ask for stars; this builds links and developer trust.
5. **Hacker News "Show HN"** and **Reddit** (r/software, r/windows, r/Adobe, r/pdf, r/privacy, r/selfhosted-adjacent, r/lawyertalk and r/legaladvice-style communities, r/Israel/r/de/etc. for language versions) — share helpfully, never spam; follow each sub's self-promo rules.

**Content**
6. **YouTube**: 10 short tutorials ("Redact a PDF for real in 30 seconds"). Titles = search queries. Link to the matching landing page.
7. **Shorts/Reels/TikTok** before-and-after clips: price changed, secret removed, scanned page edited.
8. **Blog/guide series** on the site + syndicate to dev.to, Medium, Hashnode, LinkedIn articles with canonical links back.
9. **"Is X a real redaction?" myth-busting post** with a safe demo — highly shareable, ranks for "black box redaction not secure".
10. **Free templates & checklists** (redaction checklist for lawyers/HR/journalists; GDPR document-sharing checklist) as PDFs that link back.

**Community & Q&A**
11. **Quora, Stack Exchange (Super User, Law, Academia), Microsoft Q&A**: answer real "how do I edit/redact/OCR a PDF" questions, mention Gold PDF only when it truly solves it.
12. **LinkedIn & X/Bluesky/Mastodon** build-in-public threads: weekly "what shipped".
13. **Facebook groups & Telegram/WhatsApp communities** for freelancers, lawyers, accountants, students, translators, real-estate agents.
14. **Discord/Slack communities** (indie hackers, Windows power users, localization/translation communities).

**Partnerships & PR**
15. **Reviewer outreach**: email 30 small tech bloggers/YouTubers a personal note + the download; offer a quick interview. Free-forever products get covered.
16. **"Best free PDF editor" list owners**: politely ask to be included (give them a one-line description + screenshot).
17. **Universities, libraries, NGOs, journalists' networks**: a free, private redaction tool is a natural fit — offer a short training webinar.
18. **Free webinar/live demo** on Zoom/YouTube Live ("Redaction done right"), recorded and reused.

**Product-led growth**
19. **Referral loop in the app**: after a save, a gentle "Share Gold PDF" link; keep it opt-in and non-annoying.
20. **Localized launches**: the app already has 30 languages — post in each language community (Hebrew, Arabic, Spanish, Portuguese, Russian, Japanese, Korean, Chinese, Hindi), where English competitors are weaker. Translate the landing page's top 8 languages first.
21. **Email list (free tier of a newsletter tool)**: a tiny "new version + PDF tip" email; ask download-page visitors to subscribe.
22. **Reviews & ratings engine**: ask happy users for honest reviews on AlternativeTo, G2, Capterra, Trustpilot, SourceForge — reviews feed both SEO snippets and AI answers.

---

## 12-week schedule

| Weeks | Focus |
|---|---|
| 1 | Search Console + Bing; publish site; commit GitHub repo; claim name everywhere (X, LinkedIn, YouTube, Product Hunt maker page). |
| 2–3 | AlternativeTo, SourceForge, Softpedia, winget/Chocolatey, other directories (ideas 2–4). First 3 landing pages. |
| 4 | Product Hunt + Show HN + Reddit launch (ideas 1, 5). |
| 5–6 | 5 YouTube tutorials + shorts (6–7); 4 guides (8–9); redaction checklist (10). |
| 7–8 | Q&A answers (11), community posts (12–14), reviewer outreach (15–16). |
| 9–10 | Translated landing pages + localized launches (20). |
| 11 | Webinar (18) + newsletter launch (21). |
| 12 | GEO test (Part 2 #9), review requests (22), refresh prices/dates, plan next quarter from Search Console data. |

## Metrics (check weekly)
Downloads (installer clicks), Search Console clicks & top queries, referring domains, AlternativeTo/GitHub stars, AI-answer mentions (monthly test), reviews count.

## Honest guardrails
- Keep competitor claims factual and dated; link to vendors; never imply affiliation.
- Don't promise "unrecoverable" beyond what's tested; say exactly what the secure save does.
- Disclose that the installer is unsigned until it is signed, and that there's no Mac version yet.
