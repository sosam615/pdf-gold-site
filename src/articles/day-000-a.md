=====
title: How to Redact a PDF So It Cannot Be Undone
description: A black box is not redaction. Learn how to redact a PDF so the hidden text is truly removed from the file, step by step, free on Windows.
topic: redaction
date: 2026-10-18
modified: 2026-10-19
faq: Is a black rectangle enough to redact a PDF? || No. A rectangle only sits on top of the text; anyone can select, copy or delete it. True redaction removes the text and image data underneath.
faq: How can I check my redaction worked? || Open the saved file, press Ctrl+F and search for the redacted word, then try selecting the area and pasting into a text editor. Nothing should appear.
faq: Does redaction change the rest of my PDF? || Only the pages with redactions are rebuilt. Other pages stay exactly as they were.
---
To redact a PDF so it cannot be undone, you must **remove** the text and image data under the black bar, not just draw a box over it. In Gold PDF, mark the area with the Redact tool and save: each redacted page is rebuilt without the original words and the file's metadata is cleared.

## Quick steps
1. Open the PDF in Gold PDF (drag it onto the window or press Ctrl+O).
2. Press **R** to choose Redact, then drag over every name, number or image you need to hide.
3. Review the black bars — press Ctrl+Z if you covered too much.
4. Press Ctrl+S (or Save as, to keep your original).
5. Reopen the saved file and search for a redacted word to confirm it is gone.

## Why a simple black box fails
A PDF stores text, images and drawings as separate layers. When you draw a rectangle, the original text is still in the file underneath. Selecting the area, copying it, or deleting the rectangle in another editor reveals the "hidden" words. Many real-world leaks happened exactly this way. Real redaction deletes the underlying content.

## What Gold PDF does when you save
- Rebuilds every page that contains a redaction as a sharp, high-resolution image with the black bars burned in.
- Adds back the remaining words as an invisible text layer so the page stays searchable.
- Removes orphaned objects and clears the document title, author and other metadata.
- Leaves untouched pages exactly as they were, including live form fields.

## Redacting a scanned PDF
A scan has no text layer, so first press **Recognize text** (Ctrl+Shift+O). Then redact. Because the page is rebuilt on save, the redacted pixels are gone as well.

## Redaction vs covering: what stays in the file
The difference between real redaction and a tool that only hides content is easiest to see side by side:

| Method | Looks hidden on screen | Text still copyable | Text still searchable | Can be undone by the recipient |
|---|---|---|---|---|
| Black rectangle or shape | Yes | Yes | Yes | Yes, delete the shape |
| Black highlighter | Yes | Yes | Yes | Yes, remove the highlight |
| Whiteout | Yes | Yes | Yes | Yes, delete the cover |
| Printing, scanning and re-saving | Yes | No | No, unless OCR is run | No, but quality drops and the whole file becomes an image |
| Redact tool with page rebuild on save | Yes | No | No (only for the redacted words) | No |

Printing and rescanning does remove the text, but it turns every page into a lower-quality picture, breaks form fields and makes the file larger. Rebuilding only the redacted pages keeps the rest of the document sharp and editable.

## A worked example: an employment letter
Say you need to send an employment letter to a landlord, but you want to hide your salary and your employee ID. The letter is three pages: a cover page, the letter itself, and a signed HR form.

1. Open the file and use **Save as** to create "letter-redacted.pdf". Your original stays untouched.
2. Press Ctrl+F and search for the salary figure. It appears twice on page 2 and once on page 3, in a table you might have missed.
3. Search for the employee ID. It also appears in the page footer on all three pages, in small print.
4. Press **R** and drag over each of the six occurrences. Zoom in so each box covers the whole number and nothing else.
5. Press Ctrl+S. Gold PDF rebuilds all three pages, because each has at least one redaction, and clears the document title and author.
6. Reopen the saved file. Search for the salary and the ID again: no results. Drag across a black bar and paste into Notepad: nothing comes back.

The footer copy is the one people usually forget. Searching, rather than relying on your eyes, is what catches it.

## Planning a redaction before you start
A few minutes of planning saves a second round of fixes:

- **List what must go.** Names, account numbers, addresses, signatures, photos, and anything a law, court or contract tells you to remove.
- **List the formats.** A phone number can be written with spaces, dashes or brackets; a date can be written several ways. Search each one.
- **Decide on partial redaction.** Some recipients accept the last four digits of an account number. Decide before you draw boxes so you do it consistently.
- **Think about context.** Removing a name does not help if a job title, address or email on the same page still points to the person.
- **Keep a log for legal work.** If you must explain later what you removed and why, write down the page and reason for each redaction as you go.

If you redact personal numbers often, see [how to black out a Social Security number in a PDF](/articles/how-to-black-out-a-social-security-number-in-a-pdf/) for a focused walkthrough.

> **Common mistakes**
> - Using a shape, highlighter or Whiteout tool instead of Redact. Whiteout only covers.
> - Forgetting that names also appear in the document title, headers, comments and metadata.
> - Saving over the only copy. Use Save as so you keep the unredacted original privately.

## Check before you share
Search the saved file for every sensitive word, try to copy the redacted area, and look at the file's properties. See [how to check if a PDF redaction is secure](/articles/how-to-check-if-a-pdf-redaction-is-secure/) for a full checklist, and [how to remove metadata from a PDF](/articles/how-to-remove-metadata-from-a-pdf-before-sharing/) for the hidden fields.

For a short overview of the tool, see [Redact a PDF](/redact-pdf/).
=====
title: Does Drawing a Black Box Redact a PDF
description: No — drawing a black box only covers text. Here is why boxes, highlights and whiteout fail, and what real PDF redaction does differently.
topic: redaction
date: 2026-10-18
modified: 2026-10-22
faq: Can you copy text from under a black box in a PDF? || Yes, if the box is just a drawing. The text beneath is still in the file, so it can be selected, copied or exposed by deleting the shape.
faq: Is highlighting text in black the same as redacting? || No. A black highlight is still a visual layer on top of the text.
faq: What does a real redaction tool do? || It deletes the covered text and image data from the file and clears related metadata, then saves.
---
No — drawing a black box does not redact a PDF. A box is a picture sitting on top of the words, and the words are still in the file. Real redaction removes the covered text and image data so that nothing can be selected, copied or recovered.

## What actually happens under the box
PDF files keep text and graphics as separate objects. A black rectangle is just another graphic. Open the file in a different program, delete the rectangle, or press Ctrl+A and copy, and the words appear. That is why "blacked out" documents have repeatedly exposed names, numbers and settlement amounts.

| Method | Hides it visually | Removes it from the file |
|---|---|---|
| Black rectangle or highlight | Yes | No |
| White box (Whiteout) | Yes | No |
| Editing the text to "XXXX" and saving normally | Yes | Not always |
| Real redaction (Gold PDF Redact) | Yes | Yes |

## How to redact properly in Gold PDF
1. Press **R** and drag over the information.
2. Save. Gold PDF rebuilds each redacted page without the original content and clears metadata.
3. Search the saved file for the word to confirm.

The full walkthrough is in [how to redact a PDF so it cannot be undone](/articles/how-to-redact-a-pdf-so-it-cannot-be-undone/).

## Whiteout still has a place
Use Whiteout and Edit text for corrections — like fixing a date — when the old value is not a secret. When it is a secret, use Redact. The difference matters: see [how to permanently remove text from a PDF](/articles/how-to-permanently-remove-text-from-a-pdf/).

## Four ways the text under a box comes back
It helps to know exactly how a "blacked out" PDF gives up its secrets, because each one is easy to try and none needs special skill:

1. **Select and copy.** Press Ctrl+A on the page, copy, and paste into Notepad. The text layer is pasted in full, including the words under the box, because the box is not part of the text.
2. **Search.** Press Ctrl+F and type a name you suspect is hidden. If the PDF viewer jumps to the black area, the word is still there.
3. **Delete the shape.** In almost any PDF editor, a drawn rectangle or annotation can be clicked and deleted, or hidden by turning off comments and markups when printing.
4. **Pull out the images.** On a scanned page, the original picture of the paper sits under the box untouched. Image extraction tools save it as a separate file, with no box at all.

None of these leaves a trace for the sender to notice. You find out only when someone tells you, which is why testing the saved file before you send it matters more than how careful the black bar looks.

## What about scanned pages?
Many people assume a scan is safe because "there is no text to copy." That is only half right. A scan is an image, so it often has no selectable words, but the image itself still holds the information. A black rectangle drawn on top changes nothing about that image. Worse, some scanners and earlier OCR runs add an invisible text layer to the page, so the words may be searchable after all, without any visible sign.

Real redaction on a scan has to rewrite the pixels. Gold PDF does this on save by rebuilding each redacted page as an image with the bars burned in, then adding the remaining words back as an invisible text layer that leaves out what you removed. The full process, including running OCR first so you can search the scan, is in [how to redact a scanned PDF document](/articles/how-to-redact-a-scanned-pdf-document/).

## A quick test you can run on any "redacted" PDF
If someone sends you a file and says it has been redacted, or you are about to send one yourself, these checks take under a minute:

| Test | How | A safe result |
|---|---|---|
| Copy test | Drag across the black bar, copy, paste into Notepad | Nothing from under the bar appears |
| Search test | Ctrl+F for a word you know was hidden | No match in the black area |
| Shape test | Click the black bar and press Delete | It cannot be selected as a separate object |
| Zoom test | Zoom to 400% on the edges of each bar | No partial letters visible around the edges |
| Properties test | Check the title, author and subject fields | No names or case details |

If any test fails, do not send the file. Go back to the original, redact with a real redaction tool, and test again. A longer version of this checklist is in [how to check if a PDF redaction is secure](/articles/how-to-check-if-a-pdf-redaction-is-secure/).

## When a black box is still fine
A drawn box is not useless. It is a reasonable choice when nothing under it is secret: hiding a distracting background on a slide you are about to present, masking a layout guide, or covering a printing mark on a page you will print and shred. The rule is simple. If it matters whether someone can read what is underneath, the box is not enough.

> **Common mistakes**
> - Trusting how the page looks on screen instead of testing the saved file.
> - Redacting only the visible page while the name stays in the metadata or in a hidden comment.
> - Emailing the redacted file before searching it.
=====
title: How to Permanently Remove Text From a PDF
description: Deleting or covering text in a PDF often leaves it in the file. Learn how to remove text permanently so it cannot be recovered, free on Windows.
topic: redaction
date: 2026-10-18
modified: 2026-10-23
faq: Does deleting text in a PDF remove it for good? || Not always. Some editors only hide it, and an older copy of the text can remain in the file structure. Use a redaction or secure-save workflow and verify.
faq: How do I remove text from a scanned PDF? || Recognize the text first, then redact the lines you want removed; the page is rebuilt on save.
faq: Will other text on the page stay searchable? || Yes. Gold PDF restores the remaining words as an invisible text layer.
---
To remove text from a PDF permanently, redact it in an editor that rebuilds the page and clears leftovers when you save. In Gold PDF, use the Redact tool (R) for anything secret, or Edit text (E) to replace wording; both rebuild the page on save so the old words are not recoverable.

## Quick steps
1. Open the PDF in Gold PDF.
2. For secrets: press **R** and drag over the text. To replace a line: press **E**, click it and retype.
3. Press Ctrl+S. Edited and redacted pages are rebuilt.
4. Open the result, press Ctrl+F and search for the removed words.

## Why "delete" is not always final
- Some editors mark text as deleted but leave it in the file.
- Incremental saves can keep the previous version of an object.
- Covering text with a white or black shape leaves it intact underneath.
- Metadata and thumbnails can still mention the removed text.

## What a secure rebuild does
Gold PDF turns each affected page into a high-resolution image with your changes burned in, restores the other words as invisible text, and deletes unreferenced objects. The result is a normal PDF whose redacted lines no longer exist in the file. Pages you did not touch are unchanged.

## Trade-offs to know
- Rebuilt pages are images with a text layer, so file size can grow and tiny text is rendered at high resolution rather than as vector text.
- Complex pages with many form fields keep their live fields, but redacted fields are dropped.
- If you only need a cosmetic fix and nothing is secret, you can turn secure saving off in Settings.

## Which removal method fits the job
Not every change to a PDF needs the same tool. The right choice depends on whether the text is secret and whether you want something to appear in its place.

| What you want | Tool in Gold PDF | Is the old text gone after saving? |
|---|---|---|
| Hide a name, number or address for good | Redact (**R**) | Yes, the page is rebuilt with a solid bar |
| Replace wording, such as a date or a typo | Edit text (**E**) | Yes, the page is rebuilt with the new wording |
| Hide something only on screen, nothing secret | Whiteout | No, Whiteout only covers the text |
| Remove text from a scanned page | OCR (**Ctrl+Shift+O**) then Redact (**R**) | Yes, the image is rebuilt with the bar burned in |

The simple rule: if it would matter that someone could read the old text, use Redact or Edit text, never Whiteout or a shape. Whiteout is fine for tidying a layout when nothing underneath is private.

## A worked example: removing a home address from a letter
Say you have a two-page PDF letter with your home address in the letterhead and again in the signature block on page two, and you want to send it to someone who should not have your address.

1. Open the letter in Gold PDF and use **Save as** to create a copy named something like "letter-shared.pdf". The original stays untouched.
2. Press **Ctrl+F** and search for the street name, the house number and the postal code separately. You find the address on page one and page two, plus the postal code alone in a footer you had not noticed.
3. Press **R** and drag a box over each of the three places, a little larger than the text.
4. Press **Ctrl+S**. Gold PDF rebuilds both pages.
5. Close the file and reopen it. Search again for the street name, the number and the postal code. There are no results.
6. Drag across each black bar and paste into Notepad. Nothing comes back.
7. Open the document properties and check that the title and subject do not contain the address.

If you only wanted to change the address to a new one, you would use **E** instead: click the line, retype it, and save. The page is rebuilt the same way, so the old address does not survive under the new one.

## Places text survives outside the page
Removing text from the visible page is only part of the job. The same words can appear in other parts of the file:

- **Bookmarks.** A bookmark titled with a person's name or a project code.
- **Document properties.** The title, subject, author and keywords fields.
- **Comments and annotations.** Sticky notes and markup that quote the text you removed.
- **Attachments.** Files embedded inside the PDF, such as the original spreadsheet.
- **The file name.** A name like "Smith-salary-2026.pdf" says it all.

Check each of these before you share. The steps for properties and other hidden information are in [how to remove metadata from a PDF before sharing](/articles/how-to-remove-metadata-from-a-pdf-before-sharing/), and a full test routine is in [how to check if a PDF redaction is secure](/articles/how-to-check-if-a-pdf-redaction-is-secure/).

> **Common mistakes**
> - Using Whiteout for confidential data.
> - Forgetting to search the saved file.
> - Sharing the original instead of the redacted copy.
> - Searching only for the full phrase and missing parts of it, such as a postal code on its own.
> - Leaving the removed text in a bookmark, comment or the file name.

Related: [Does drawing a black box redact a PDF](/articles/does-drawing-a-black-box-redact-a-pdf/) and [how to remove metadata from a PDF](/articles/how-to-remove-metadata-from-a-pdf-before-sharing/).
=====
title: How to Redact a PDF for Free on Windows
description: Redact a PDF for free on Windows with a tool that truly removes the text. Offline, no account, no watermark — step by step with Gold PDF.
topic: redaction
date: 2026-10-18
modified: 2026-10-24
faq: Is there a free PDF redaction tool for Windows? || Yes. Gold PDF is free, works offline and removes redacted content from the file when you save.
faq: Do I need an account? || No account, no upload and no watermark.
faq: Can I redact without A? || Yes. Gold PDF covers the common redaction workflow without A.
---
You can redact a PDF for free on Windows with Gold PDF: install it, open the file, mark the sensitive parts with the Redact tool and save. It works offline, adds no watermark and removes the redacted content from the saved file.

## Quick steps
1. Download and run the Gold PDF installer (no admin rights needed).
2. Double-click your PDF.
3. Press **R**, drag over each sensitive item.
4. Save as a new file with Ctrl+Shift+S.
5. Verify by searching the saved PDF.

## What "free" should mean
Some tools are free but add a watermark, limit pages, or require you to upload the file to a website. Uploading a confidential document just to redact it defeats the purpose. A local, offline tool keeps the file on your computer. Gold PDF has no account, no page limit and no watermark.

## Tips for accurate redaction
- Zoom in before dragging so the box covers every character.
- Use Ctrl+F first to find every occurrence of a name, then redact each one.
- Check headers, footers and stamps on every page.
- For scans, run Recognize text before searching.

## What stays and what goes
Redacted words, their pixels and the document metadata are removed on save. The rest of the page stays searchable through an invisible text layer. Open the saved file's properties and search again to confirm.

## Free ways to hide text on Windows, compared
Windows users usually reach for whatever is already installed. Not all of those options remove the text, and the difference only shows up after the file has been sent.

| Method | Cost | Is the text removed? | File leaves your PC? |
|---|---|---|---|
| Black rectangle or highlight in a PDF viewer | Free | No, the text is still underneath | No |
| Print to PDF after covering the text | Free | Usually, but the whole document becomes flat images and loses searchable text | No |
| Online redaction website | Often free with limits | Depends on the site | Yes, the file is uploaded |
| Paid desktop editor with a redaction feature | Subscription or licence | Yes, when the redaction is applied | No |
| Gold PDF Redact tool (**R**) | Free | Yes, redacted pages are rebuilt on save | No |

Covering text and then printing to PDF can work as a last resort, but it turns every page into a picture, so nobody can search or copy the parts that were never secret, and it is easy to forget that a layer or comment survived. A shape or highlight on its own never removes anything; the reasons are in [does drawing a black box redact a PDF](/articles/does-drawing-a-black-box-redact-a-pdf/).

## A worked example: a payslip for a rental application
Say a letting agent asks for your latest payslip, and you want them to see your salary but not your tax reference, your home address or your bank account number.

1. Open the payslip in Gold PDF and press **Ctrl+Shift+S** to save a copy named "payslip-for-agent.pdf". The original stays private.
2. If the payslip came as a scan or a phone photo, press **Ctrl+Shift+O** to run OCR so its text can be searched.
3. Press **Ctrl+F** and search for the last four digits of the account number, the tax reference and your street name. Note each page with a hit.
4. Press **R** and drag a box over each item, slightly larger than the text. Leave the salary, the employer and the pay date visible.
5. Press **Ctrl+S**. Only the page you redacted is rebuilt.
6. Close and reopen the copy, then search again for each item. There should be no results.
7. Rename the file if its name contains your name or an employee number you do not want to share.

The same routine works for bank statements; the details for account numbers are in [how to redact bank account numbers in a PDF](/articles/how-to-redact-bank-account-numbers-in-a-pdf/).

## How long does free redaction take?
For a short document, most of the time goes into finding things, not marking them. Pressing **R** and dragging takes seconds per item. Searching for every form of a name, reading headers and footers, and testing the saved copy is what makes a redaction reliable, so budget time for that part, especially on long or scanned files. The test steps are in [how to check if a PDF redaction is secure](/articles/how-to-check-if-a-pdf-redaction-is-secure/).

> **Common mistakes**
> - Redacting on the first page only.
> - Leaving the author name in the metadata.
> - Saving over the original.
> - Using a highlight or shape and assuming the text is gone.
> - Uploading a confidential file to a website just to redact it.

See also [how to redact a PDF so it cannot be undone](/articles/how-to-redact-a-pdf-so-it-cannot-be-undone/) and the overview page [Redact a PDF](/redact-pdf/).
=====
title: How to Check if a PDF Redaction Is Secure
description: Test whether a redacted PDF really hides the text: search, copy, inspect metadata and more. A simple checklist before you share a file.
topic: redaction
date: 2026-10-18
faq: What is the fastest test for a redacted PDF? || Open the saved file, press Ctrl+F and search for a redacted word; then select the area, copy and paste it into a text editor.
faq: Can metadata reveal redacted names? || Yes. Title, author and comments can contain names, so clear them as part of redaction.
faq: Should I test the original or the saved copy? || Always test the saved copy you intend to share.
---
To check that a PDF redaction is secure, test the saved file: search for each redacted word, select and copy the covered area, and inspect the document properties and metadata. If nothing appears in any of these tests, the redaction removed the content.

## Five-minute checklist
1. **Search.** Press Ctrl+F and search for every redacted word and number. Zero results is the goal.
2. **Copy.** Press Ctrl+A, copy, paste into Notepad, and read it. Redacted text must be missing.
3. **Select the box.** Drag across the black bars; nothing should highlight underneath.
4. **Properties.** Check title, author and subject. Empty or neutral is best.
5. **Open in another viewer.** A second program should show the same thing.

## What the tests reveal
- A found word means the text is still in the file (a cover-only box).
- Pasted text with fragments means partial removal.
- A name in the title or author means metadata remained.

## How Gold PDF helps
Gold PDF rebuilds redacted pages, restores only non-redacted words as invisible text and clears metadata on save. You can reopen the saved file in the same window and run the tests immediately. For the process see [how to redact a PDF so it cannot be undone](/articles/how-to-redact-a-pdf-so-it-cannot-be-undone/).

> **Common mistakes**
> - Testing the file before saving.
> - Checking only the first page.
> - Ignoring images that contain text — recognise and redact those as well.

Also read [does drawing a black box redact a PDF](/articles/does-drawing-a-black-box-redact-a-pdf/).
