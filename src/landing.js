// English landing pages for high-intent searches.
const DL = 'Download Gold PDF free';
module.exports = [
  {
    slug: 'edit-pdf-text', nav: 'Edit PDF text',
    title: 'Edit Text in a PDF Free on Windows — Gold PDF',
    desc: 'Edit the words already inside a PDF for free: click a line, retype it, save. Offline, no account, no watermark. Gold PDF for Windows.',
    h1: 'How to edit text in a PDF for free',
    answer: 'Open the PDF in **Gold PDF**, choose **Edit text**, click the line you want to change and retype it. Gold PDF matches the size and colour, and on save the old words are removed from the file.',
    steps: [['Open the PDF.', 'Drag it onto Gold PDF or press Ctrl+O.'], ['Choose Edit text.', 'Press E, then click any line of text and type the new words.'], ['Save.', 'Ctrl+S. Edited pages are rebuilt so the old text cannot be recovered; the page stays searchable.']],
    why: ['**Free forever** — no account, no watermark, no trial.', '**Offline** — the file never leaves your computer.', '**Scanned pages too** — run Recognize text first, then edit.', '**Any script** — Hebrew, Arabic, Chinese, Japanese, Korean, Hindi, Thai.'],
    faq: [['Can I edit a scanned PDF?', 'Yes. Use Recognize text (OCR) first, then Edit text.'], ['Will the layout break?', 'Gold PDF places the new text in the same position, size and colour; very long replacements may need a manual check.'], ['Is it really free?', 'Yes, Gold PDF is free for personal and commercial use.']],
    related: ['/redact-pdf/', '/ocr-pdf/', '/articles/how-to-edit-text-in-a-pdf-for-free/']
  },
  {
    slug: 'redact-pdf', nav: 'Redact a PDF',
    title: 'Redact a PDF Permanently for Free — Gold PDF',
    desc: 'Redact a PDF so the text cannot be recovered. Gold PDF removes redacted content from the file, not just covers it. Free for Windows.',
    h1: 'How to redact a PDF so it cannot be undone',
    answer: 'Draw a **Redact** box over the secret in **Gold PDF** and save. Every redacted page is rebuilt without the original text, and document metadata is cleared, so a black box is a real redaction.',
    steps: [['Mark it.', 'Choose Redact (R) and drag over each name, number or image.'], ['Review.', 'Redactions show as black bars with a RED label; Undo if you slip.'], ['Save.', 'Pages with redactions are rebuilt and the file is swept of old content and metadata.']],
    why: ['**True removal** — the redacted words are gone from the text layer, not hidden under a box.', '**Metadata cleared** — title and author are removed.', '**Works on scans** — recognise text, then redact.', '**Free and offline.**'],
    faq: [['Is a black rectangle a redaction?', 'No. A rectangle only covers text. Gold PDF rebuilds the page so the covered text is not in the saved file.'], ['What stays searchable?', 'Everything you did not redact.'], ['Should I re-open the saved file to check?', 'Yes. Press Ctrl+F in the saved file and search for the redacted word.']],
    related: ['/edit-pdf-text/', '/password-protect-pdf/', '/articles/how-to-redact-a-pdf-so-it-cannot-be-undone/']
  },
  {
    slug: 'ocr-pdf', nav: 'OCR a PDF',
    title: 'OCR a Scanned PDF Offline for Free — Gold PDF',
    desc: 'Make a scanned PDF searchable and editable with free OCR that runs offline on Windows. English and Hebrew built in, more languages on demand.',
    h1: 'How to OCR a scanned PDF offline for free',
    answer: 'Open the scan in **Gold PDF** and press **Recognize text**. Gold PDF reads each page on your computer, adds an invisible text layer, and you can then search, copy and edit the text.',
    steps: [['Open the scan.', 'Gold PDF tells you when a page has no text layer.'], ['Recognize text.', 'Ctrl+Shift+O processes the pages locally; English and Hebrew work offline.'], ['Save.', 'The saved PDF is searchable and can be edited with Edit text.']],
    why: ['**Private** — nothing is uploaded.', '**Free** — no page limits.', '**30 languages** supported on demand (downloaded once).', '**Edit after OCR** — fix lines directly.'],
    faq: [['Which languages work offline?', 'English and Hebrew are built in; other languages download a small model the first time.'], ['Why is OCR sometimes wrong?', 'Low-resolution scans and handwriting reduce accuracy; use a 300 dpi scan when possible.'], ['Does OCR change how the page looks?', 'No. The text layer is invisible.']],
    related: ['/edit-pdf-text/', '/redact-pdf/', '/articles/how-to-ocr-a-scanned-pdf-for-free/']
  },
  {
    slug: 'fill-pdf-form', nav: 'Fill a PDF form',
    title: 'Fill Out a PDF Form for Free — Gold PDF',
    desc: 'Fill and sign PDF forms for free on Windows: text boxes, check boxes, radios and drop-downs, with saved signatures. Offline, no account.',
    h1: 'How to fill out a PDF form for free',
    answer: 'Open the form in **Gold PDF**. Fillable fields are highlighted automatically — click and type. Add a saved signature, then press Ctrl+S.',
    steps: [['Open the form.', 'Fields appear as soft blue boxes.'], ['Fill it in.', 'Type, tick boxes and choose from drop-downs; Hebrew and other scripts work.'], ['Sign and save.', 'Place a saved signature and save; the values are stored as real form data.']],
    why: ['**No printing** — fill and sign on screen.', '**Signature library** — draw once, reuse forever.', '**Free and offline.**'],
    faq: [['Can I fill a form that is not fillable?', 'Yes. Use the Text tool to type anywhere on the page.'], ['Will the data be editable later?', 'Yes, saved fields stay live unless the page was rebuilt by a redaction.']],
    related: ['/password-protect-pdf/', '/edit-pdf-text/', '/articles/how-to-fill-out-a-pdf-form-for-free/']
  },
  {
    slug: 'password-protect-pdf', nav: 'Password protect a PDF',
    title: 'Password Protect a PDF Free (AES-256) — Gold PDF',
    desc: 'Add or open PDF passwords for free with AES-256 encryption on Windows. Offline, no upload, no account. Gold PDF.',
    h1: 'How to password protect a PDF for free',
    answer: 'In **Gold PDF** press **Password**, type a password and save. The saved file is encrypted with AES-256, and anyone opening it needs the password.',
    steps: [['Open the PDF.', 'Make any edits first.'], ['Set a password.', 'Protect → Password → enter it.'], ['Save.', 'Ctrl+S writes an encrypted PDF; your working copy stays unlocked.']],
    why: ['**AES-256** modern encryption.', '**Opens locked PDFs** — it asks for the password.', '**Offline** — the password never leaves your PC.'],
    faq: [['Can Gold PDF crack a PDF password?', 'No. It opens a file only when you know the password.'], ['How do I remove a password?', 'Open the file, choose Password → Remove password, and save.']],
    related: ['/redact-pdf/', '/fill-pdf-form/', '/articles/how-to-password-protect-a-pdf-for-free/']
  },
  {
    slug: 'a-alternative', nav: 'A alternative',
    title: 'Free A Alternative for Windows — Gold PDF',
    desc: 'A free A alternative with text editing, true redaction, OCR, forms, signatures and passwords. Offline, no account, no watermark.',
    h1: 'A free A alternative for Windows',
    answer: '**Gold PDF** covers what most people use A Pro for — editing text, redaction, OCR, forms, signatures, passwords and page tools — and it is free, offline and needs no account. A Pro costs about $19.99 a month on an annual plan (list price, October 2026; check A).',
    steps: [['Install.', 'Run the installer — no admin rights needed.'], ['Open your PDFs.', 'Double-click any PDF.'], ['Work.', 'Use the same tasks: edit, redact, OCR, sign, protect.']],
    why: ['**$0** instead of a yearly subscription.', '**Private** — files stay on your PC.', '**30 interface languages**, right-to-left layouts included.', '**Honest limits** — Windows only, no Mac yet, installer unsigned.'],
    faq: [['What does Gold PDF not do?', 'It is not a prepress or accessibility-tagging suite, has no Mac version and no cloud signing service.'], ['Where do the prices come from?', 'Published list prices; they vary by country and plan, so verify on each vendor site.']],
    related: ['/free-pdf-editor-windows/', '/edit-pdf-text/', '/articles/best-free-a-alternative-for-windows/']
  },
  {
    slug: 'free-pdf-editor-windows', nav: 'Free PDF editor for Windows',
    title: 'Free PDF Editor for Windows — No Watermark | Gold PDF',
    desc: 'Gold PDF is a free PDF editor for Windows 10 and 11: edit text, redact, OCR, fill forms, sign, merge and protect — offline with no account.',
    h1: 'The free PDF editor for Windows with no watermark',
    answer: '**Gold PDF** is a free PDF editor for Windows 10 and 11. It edits text, redacts for real, recognises scanned text, fills forms, signs, merges pages and adds passwords — offline, with no account, no watermark and no time limit.',
    steps: [['Download.', 'Get the installer (about 118 MB).'], ['Install.', 'Per-user install; double-click a PDF to open it.'], ['Edit.', 'Use the ribbon or press Ctrl+K to search any command.']],
    why: ['**No watermark, ever.**', '**Tabs, thumbnails, search, undo/redo.**', '**Optional AI** with your own key.', '**30 languages.**'],
    faq: [['Does it work offline?', 'Yes, everything except the optional AI feature.'], ['Is there a catch?', 'No account, no trial, no watermark. The installer is not code-signed yet, so Windows may warn once.']],
    related: ['/a-alternative/', '/redact-pdf/', '/articles/best-free-pdf-editor-without-watermark/']
  }
];
