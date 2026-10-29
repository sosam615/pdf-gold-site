=====
title: How to Remove Metadata From a PDF Before Sharing
description: PDFs carry hidden author, title and software details. Learn how to remove PDF metadata before you share a file, free on Windows with Gold PDF.
topic: redaction
date: 2026-10-18
modified: 2026-10-26
faq: What metadata does a PDF contain? || Common fields are title, author, subject, keywords, creator application, producer and creation or modification dates, plus optional XMP data.
faq: Does removing metadata change how the PDF looks? || No. It only clears the hidden information fields.
faq: Is metadata removed when I redact? || In Gold PDF, saving a document with redactions also clears metadata automatically.
---
To remove metadata from a PDF, clear its hidden title, author, subject, keywords and XMP fields before sharing. In Gold PDF, open the file, choose **Protect → Remove metadata** and save; the document looks identical but the hidden details are gone.

## Quick steps
1. Open the PDF in Gold PDF.
2. Open the **Protect** tab and click **Remove metadata**.
3. Save with Ctrl+Shift+S as a new file.
4. Reopen it and check the document properties.

## Why metadata matters
A PDF often remembers who wrote it, what software made it, and when. A contract exported from a word processor may carry an employee's name, an internal project title or a previous file name. When privacy or negotiation matters, clear it.

| Field | Can reveal |
|---|---|
| Author | Person's or company's name |
| Title | Internal project names |
| Creator / Producer | Software and version |
| Dates | When the document was created or changed |
| XMP | Extended or older descriptive data |

## What it does not change
Metadata removal does not edit visible text. If a name appears on the page, redact it. See [how to redact a PDF so it cannot be undone](/articles/how-to-redact-a-pdf-so-it-cannot-be-undone/).

## Where else a PDF hides information
The fields in the table above are only the start. A PDF can carry more than one copy of the same details, and clearing one place does not clear the others.

| Place | Example of what it holds | How to check |
|---|---|---|
| Document properties | Title, author, subject, keywords | Open the file's properties and read each field |
| XMP metadata | A second, extended copy of title, author and software | Cleared together with the fields above by **Remove metadata** |
| Comments and sticky notes | Reviewer names and internal remarks | Scroll the pages with comments visible |
| Bookmarks | Section titles with project or client names | Open the bookmarks panel |
| Form fields | Pre-filled names, addresses, dates | Click through the fields on each page |
| File name | "Acme-salary-review-final.pdf" | Look at it before you attach it |

Metadata is invisible when you read the page, which is exactly why people forget it. Someone who receives your file can open its properties in any viewer and see the author's name and the program that produced the document.

## A worked example: sending a quote to a new client
Imagine you wrote a quote in a word processor at work, saved it as a PDF and now want to send it to a client who is comparing suppliers. The file's title is still "Quote draft v3 - lowest we can go", and the author field holds your colleague's full name.

1. Open the PDF in Gold PDF and press **Ctrl+Shift+S** to save a copy named "Quote-2026-114.pdf". Your working file stays untouched.
2. Open the **Protect** tab and click **Remove metadata**.
3. Scroll through the pages and look for comments or sticky notes. Delete any that are internal, such as "check margin with Dan".
4. Save the copy with Ctrl+S.
5. Close the file and reopen it. Open the document properties. The title and author should be empty.
6. Check the file name once more. The new name carries only the quote number.

The page looks identical before and after. The difference is what a curious recipient finds when they look behind it.

## Metadata is not the same as redaction
Clearing metadata and redacting are two separate jobs, and a safe share often needs both.

- **Remove metadata** clears the hidden information fields. It does not touch what is written on the pages.
- **Redact** (**R**) removes text and images you mark on the page, and Gold PDF also clears metadata when it saves a file with redactions.
- **Edit text** (**E**) changes visible wording, such as replacing a name, but it does not clear metadata by itself.

If your file has visible secrets as well as hidden ones, redact first and read [how to check if a PDF redaction is secure](/articles/how-to-check-if-a-pdf-redaction-is-secure/) before you send it.

## Good sharing habits
- Remove metadata, then send the saved copy — never the original.
- Remove hidden comments and form data you do not need.
- Password protect when emailing: [how to password protect a PDF for free](/articles/how-to-password-protect-a-pdf-for-free/).

> **Common mistakes**
> - Assuming "Print to PDF" removes everything.
> - Clearing metadata but leaving a name in the page footer.
> - Forgetting that file names themselves can leak information.
=====
title: How to Edit Text in a PDF for Free
description: Edit the words already inside a PDF for free on Windows: click a line, retype it, save. Offline, no account and no watermark with Gold PDF.
topic: editing
date: 2026-10-18
modified: 2026-10-27
faq: Can I edit existing text in a PDF for free? || Yes. In Gold PDF choose Edit text, click a line and type the new words; it matches size and colour.
faq: Will the layout change? || The new text is placed in the same position with the same size and colour. Much longer text may need manual adjustment.
faq: Can I edit a scanned PDF? || Yes, after running Recognize text (OCR).
---
To edit text in a PDF for free, open it in Gold PDF, press E for **Edit text**, click the line you want to change and retype it. Save with Ctrl+S. Gold PDF keeps the size and colour, and the old words are removed from the saved file.

## Quick steps
1. Open the PDF (drag it onto the window).
2. Press **E**. Dotted boxes appear around each line of text.
3. Click a line, type the new text and press Enter.
4. Save with Ctrl+S, or Save as to keep the original.

## What you can and cannot change
- You can change words, numbers, dates and names line by line.
- Lines are edited as whole lines, so retype the full line.
- Rotated text is not editable; rotate the page back first.
- Scanned pages need OCR first. See [how to OCR a scanned PDF for free](/articles/how-to-ocr-a-scanned-pdf-for-free/).

## How it works
Gold PDF reads the text of each page, covers the old line with the page's own background colour, and places your new text at the same position, size and colour. On save, edited pages are rebuilt so the old words cannot be recovered, and the page remains searchable.

## Which tool to use for which change
Not every change to a PDF is a text edit. Picking the right tool first saves time and keeps the page tidy.

| What you want to do | Tool | Notes |
|---|---|---|
| Fix a typo, date, name or number already on the page | Edit text (E) | Retype the whole line |
| Add a sentence where there was none | Text tool (T) | Place it anywhere, choose size and colour |
| Remove confidential text for good | Redact (R) | The page is rebuilt without it on save |
| Hide a stray mark on a printout copy | Whiteout | Only covers; not for anything sensitive |
| Change a scanned page | OCR (Ctrl+Shift+O), then E | English and Hebrew are bundled |
| Change wording across many pages | Gold AI | Uses your own API key |

The most common confusion is between editing and removing. If the goal is that nobody can ever read the old words, use Redact, explained in [how to redact a PDF so it cannot be undone](/articles/how-to-redact-a-pdf-so-it-cannot-be-undone/).

## Keeping edits neat
Edit text works line by line, which suits short corrections best. A few habits keep the result looking as if it was always there:

- **Keep the length similar.** A replacement of roughly the same number of characters fits the gap. If the new wording is much longer, split it: shorten this line and add the rest with the Text tool on an empty line below.
- **Retype the whole line.** Because the line is replaced as a unit, type every word on it, not only the one that changed. Read it back once before pressing Enter.
- **Zoom in.** At 150% or more you can see whether the new line sits on the same baseline as its neighbours.
- **Check paragraphs.** PDFs do not reflow text like a word processor. If you add words to one line, the next line will not move down by itself.
- **Look at numbers in tables.** A total in a table is often a separate line from its label. Edit it on its own, then check that any other figure that depends on it still adds up.

## A worked example: correcting a CV
Say you exported your CV to PDF, sent it to a friend for a check, and the original Word file is on another computer. Two things need fixing: a phone number with a wrong digit and a job title that should read "Senior Analyst".

1. Open the PDF in Gold PDF and use Save as (Ctrl+Shift+S) to make "cv-updated.pdf".
2. Press **E**. Dotted boxes appear around each line.
3. Click the line with the phone number, retype the full line with the correct digit and press Enter.
4. Click the job title line, type "Senior Analyst" and the dates exactly as they were, and press Enter.
5. Zoom in and compare both lines with the surrounding text.
6. Press Ctrl+S. Reopen the file and press Ctrl+F for the old phone number. There are no results, because the old line is gone from the saved page.

That last check matters if you are sending the file to several employers: you do not want an older number still sitting in the text layer.

## Other ways to change a PDF
- Add new text anywhere with the Text tool (T).
- Highlight, draw, add images and signatures from the Annotate tab.
- Use Gold AI to propose changes across a whole document: [how to edit a PDF using AI](/articles/how-to-edit-a-pdf-using-ai/).

> **Common mistakes**
> - Editing a scan without running OCR.
> - Making the new text much longer than the old so it overlaps nearby lines.
> - Overwriting the original instead of using Save as.

Quick overview: [Edit text in a PDF](/edit-pdf-text/).
=====
title: How to Change a Price in a PDF
description: Change a price, number or total in a PDF without breaking the layout. Step-by-step for free on Windows, plus a note on honest use.
topic: editing
date: 2026-10-18
modified: 2026-10-28
faq: How do I change a number in a PDF? || Use Edit text: click the line containing the number and retype it.
faq: Can I change a price in a scanned invoice? || Yes, run Recognize text first and then edit the recognised line.
faq: Is it okay to edit a PDF invoice? || Only edit documents you own or are authorised to change, and keep the original. Altering documents to deceive is illegal in many places.
---
To change a price in a PDF, open it in Gold PDF, press E, click the line with the price and type the new amount. The new number takes the same size and colour as the old one, and the saved PDF contains the updated value.

## Quick steps
1. Open the PDF in Gold PDF.
2. Press **E** and click the line that contains the price.
3. Retype the whole line, for example "Design fee: $5,200.00".
4. Check totals that depend on it, and edit those lines too.
5. Save a copy with Ctrl+Shift+S.

## Keep related numbers consistent
A price usually appears in several places: line items, subtotal, tax and total. Search with Ctrl+F for the old amount to find every occurrence, then change each one so the document adds up.

## Scanned invoices
If the invoice is an image, press **Recognize text** (Ctrl+Shift+O) first. Gold PDF reads the lines, and you can edit them like normal text. Check each recognised number — OCR can misread digits on poor scans.

The digits most often confused on a weak scan are easy to predict, so check these first:

| Printed | Sometimes read as | How to spot it |
|---|---|---|
| 0 | O or D | A letter inside a number, e.g. "1,2O0" |
| 1 | l or I | A thin vertical stroke that searches as a letter |
| 5 | S | "$S00" instead of "$500" |
| 8 | B or 3 | Totals that no longer add up |
| , and . | swapped or dropped | "1.200,00" vs "1,200.00", or a missing separator |

A quick way to catch these is to add up the recognised line items on a calculator and compare the result with the recognised total. If they differ, one of the digits was misread.

## Keep the layout intact
The new price takes the font size and colour of the old one, but its length can still change the line. A few habits keep the page tidy:

- **Keep the format.** If the document writes "1,250.00", write "1,980.00", not "1980". Matching separators and decimals keeps columns aligned.
- **Watch right-aligned columns.** Prices in a table are often aligned on the right edge. If the new amount has more digits than the old one, check that it does not run into the column border or the next cell.
- **Retype the whole line.** Clicking a line and retyping all of it, including the label, gives cleaner results than trying to change one digit in the middle.
- **Zoom in before saving.** At 200% you can see whether a digit sits slightly higher or lower than its neighbours.
- **Check currency symbols.** Symbols such as €, £ or ₪ should come out the same way they went in; if one looks different, retype it.

## Prices that appear in more than one form
Some documents carry the same amount in different shapes. A quote might say "$12,000.00" in the table and "twelve thousand dollars" in the terms, or show a monthly figure that is a twelfth of the yearly one. Ctrl+F only finds exact text, so search for each version separately: the number with and without separators, the words, and any derived amounts such as tax, deposit or instalments. Read the page once more from top to bottom before saving; a total that is right in the table but wrong in a sentence is the most common leftover.

## A short example
A designer sent a client a quote for $4,800 and then agreed to add a second round of revisions for $400. Instead of rebuilding the quote in a word processor, they open the PDF in Gold PDF and save a copy named "Quote v2.pdf". They press **E**, click the "Revisions" line and retype it as "Revisions (2 rounds): $1,200.00". Ctrl+F for "4,800" finds the subtotal and the total in the summary box, and a search for "1,200" finds the 25% deposit line, which needs to become $1,300. The subtotal and total become "$5,200.00". After saving, they reopen the file, add the line items on a calculator, and the numbers match.

## Use this responsibly
Correcting your own quote or fixing a typo is normal. Changing someone else's invoice to mislead is fraud in many places. Keep the original file, and use Save as for the edited copy.

> **Common mistakes**
> - Changing the price but not the total.
> - Editing a low-resolution scan without checking recognised digits.
> - Replacing the original file.

Related: [how to edit text in a PDF for free](/articles/how-to-edit-text-in-a-pdf-for-free/).
=====
title: How to Edit a PDF Without A
description: Edit a PDF without A: change text, add notes, redact, OCR and sign — free on Windows, offline, with Gold PDF as an alternative.
topic: editing
date: 2026-10-18
modified: 2026-10-29
faq: Can I edit a PDF without A? || Yes. Several editors do it; Gold PDF is a free Windows option that edits text, redacts, runs OCR and signs.
faq: Do I need a subscription? || Not for Gold PDF, which is free with no account or watermark.
faq: What can free editors usually not do? || Many free editors lack real text editing, true redaction or offline OCR; check each feature before choosing.
---
You can edit a PDF without A by using another editor. Gold PDF is a free Windows editor that changes the text inside a PDF, redacts, recognises scanned text, fills forms and signs — offline, with no account or watermark.

## What most people need
| Task | How in Gold PDF |
|---|---|
| Change a word or number | Edit text (E) |
| Add a note | Text tool (T) |
| Hide a secret | Redact (R) |
| Read a scan | Recognize text (Ctrl+Shift+O) |
| Sign | Signatures button |
| Reorder pages | Drag thumbnails |

## Quick steps
1. Install Gold PDF and open your PDF.
2. Use the ribbon tabs, or press Ctrl+K to search any command.
3. Save with Ctrl+S; use Save as to keep the original.

## Choosing an alternative
Check these before you commit: Does it edit existing text or only add text? Does it add a watermark? Does it upload your files? Is the redaction real? Is it priced per month? For a comparison, see [best free A alternative for Windows](/articles/best-free-a-alternative-for-windows/).

## Honest limits of Gold PDF
It is for Windows 10 and 11 only, has no Mac version, and is not a prepress or accessibility-tagging suite.

## Three common jobs, step by step
Most people who go looking for an alternative have one specific job in mind. Here is how the three most common ones work in Gold PDF.

**1. Fix a typo or change a figure.** Open the file and press **E** for Edit text. Click the word or number, type the replacement and click away. Press **Ctrl+S**, or use Save as to keep the original untouched. Edit text works on pages that have a real text layer; if the page is a scan, run Recognize text (**Ctrl+Shift+O**) first. For a worked example with amounts, see [how to change a price in a PDF](/articles/how-to-change-a-price-in-a-pdf/).

**2. Hide something before sending.** Press **R**, drag a box over the name, number or paragraph, and save. The affected pages are rebuilt without the removed content. Then reopen the copy and test it: search for the hidden word with **Ctrl+F** and copy across the bar into Notepad. The reasons are explained in [how to redact a PDF so it cannot be undone](/articles/how-to-redact-a-pdf-so-it-cannot-be-undone/).

**3. Sign and return a form.** Open the form, click each fillable field (they are highlighted in blue), type your answers and place a saved signature from the Signatures button. Save, and password protect the file if it holds personal data.

## Questions to ask about any free editor
"Free" can mean very different things. Before you rely on a tool for real work, run through this list and test the answers on a sample file rather than trusting the description.

| Question | Why it matters |
|---|---|
| Does it change the text already in the file? | Some tools only let you lay new text on top, which looks edited but leaves the old words underneath. |
| Is the free version limited by pages, files or days? | Trial limits often appear only when you try to save. |
| Does it stamp a watermark on the saved file? | Check the output, not the preview. |
| Does it upload your document? | Matters for contracts, IDs and medical papers. |
| Is the redaction real? | Search and copy across the bar in the saved copy. |
| Does it need an account? | Some require sign-up even for basic saving. |
| Which systems does it run on? | Gold PDF is Windows only, so Mac and Linux users need another route. |

## Offline versus online editors
A browser-based editor is quick for a one-off, but your file travels to a server you do not control. An installed editor such as Gold PDF opens the file from your disk and saves it back there, with no connection needed, which is the safer pattern for anything confidential. The tradeoff is that you must install it, and it is available for Windows only. Whichever route you pick, keep the original, work on a copy and open the saved result once before you send it. More on the privacy side in [is an online PDF editor safe for confidential documents](/articles/is-online-pdf-editor-safe-for-confidential-documents/).

> **Common mistakes**
> - Picking an online editor for confidential files.
> - Assuming "free" means no watermark.
> - Not testing redaction before sending.
=====
title: How to OCR a Scanned PDF for Free
description: Make a scanned PDF readable: run OCR for free on Windows, offline. English and Hebrew built in, more languages on demand. Step by step.
topic: ocr
date: 2026-10-18
faq: What is OCR? || Optical character recognition turns pictures of text into real, searchable text.
faq: Does Gold PDF OCR work offline? || English and Hebrew work fully offline. Other languages download a small model the first time.
faq: Why is my OCR inaccurate? || Low resolution, skewed pages and handwriting reduce accuracy; use clear 300 dpi scans.
---
To OCR a scanned PDF for free, open it in Gold PDF and press **Recognize text** (Ctrl+Shift+O). The text is recognised on your computer, saved as an invisible layer, and the PDF becomes searchable and editable.

## Quick steps
1. Open the scanned PDF. Gold PDF tells you a page has no text layer.
2. Press **Ctrl+Shift+O** or choose Edit → Recognize text.
3. Wait for the progress bar; each page is processed locally.
4. Save the PDF. It is now searchable.

## Languages
English and Hebrew are bundled and work offline. For other languages, Gold PDF downloads a small language model the first time you use it and then remembers it. Choose the OCR language in Settings, or leave it on Auto, which follows your interface language.

## Getting better results
- Scan at 300 dpi, upright, with good contrast.
- Remove shadows and skew before scanning.
- Check numbers and names after recognition.
- Fix errors with Edit text (E).

## After OCR
Search inside the scan with Ctrl+F, edit lines, or redact sensitive items. See [how to make a scanned PDF searchable](/articles/how-to-make-a-scanned-pdf-searchable/) and [OCR a PDF](/ocr-pdf/).

> **Common mistakes**
> - Expecting perfect results from blurry photos.
> - Forgetting to save after OCR.
> - Choosing the wrong OCR language.
=====
title: How to Make a Scanned PDF Searchable
description: Turn a scanned PDF into a searchable document with OCR. Free on Windows, offline, with a clear step-by-step and quality tips.
topic: ocr
date: 2026-10-18
faq: Why can't I search my scanned PDF? || A scan is a picture without a text layer; searching needs OCR to add one.
faq: Does making it searchable change the look? || No. The recognised text is invisible and sits under the image.
faq: How do I know if a PDF is scanned? || Try selecting text or pressing Ctrl+F; if nothing is found, it is probably an image.
---
To make a scanned PDF searchable, run OCR on it. In Gold PDF press **Ctrl+Shift+O** (Recognize text), wait for the pages to process and save. The look stays the same, but you can now search, copy and edit the text.

## Quick steps
1. Open the scanned PDF in Gold PDF.
2. Press Ctrl+Shift+O.
3. Save the file.
4. Press Ctrl+F and search for a word to test.

## Why scans are not searchable
A scanner or phone camera makes a picture. Computers see pixels, not letters. OCR reads the pixels, finds letters and places an invisible text layer over the image at the right positions, so search and selection work.

## Check the result
Search for several words you can see on the page. If some are missed, the scan may be too small, too dark or tilted. Rescan at 300 dpi or crop and straighten the image first.

## What you can do next
- Search with highlighted results in the left panel.
- Edit recognised lines with Edit text.
- Redact sensitive lines before sharing: [how to redact a PDF so it cannot be undone](/articles/how-to-redact-a-pdf-so-it-cannot-be-undone/).

> **Common mistakes**
> - Running OCR on already-searchable pages.
> - Scanning in low resolution to save space.
> - Not saving after OCR.

Related: [how to OCR a scanned PDF for free](/articles/how-to-ocr-a-scanned-pdf-for-free/).
