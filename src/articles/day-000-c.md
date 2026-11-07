=====
title: How to OCR a PDF Offline Without Uploading
description: Run OCR on a PDF without uploading it to a website. Gold PDF recognises text on your own Windows PC, offline, free.
topic: ocr
date: 2026-10-18
modified: 2026-10-31
faq: Can OCR work without internet? || Yes. Gold PDF bundles English and Hebrew, and other languages work offline after a one-time model download.
faq: Why avoid online OCR for private documents? || Uploading sends your file to someone else's server; local OCR keeps it on your computer.
faq: Is offline OCR slower? || It depends on your computer; a typical page takes several seconds.
---
To OCR a PDF offline without uploading it, use an editor that runs recognition on your own computer. Gold PDF does: open the scan, press Ctrl+Shift+O and the text is recognised locally, with English and Hebrew working fully offline.

## Quick steps
1. Open the PDF in Gold PDF.
2. Press Ctrl+Shift+O.
3. Save the result.

## Why offline matters
Contracts, medical letters, tax forms and IDs are exactly the files people scan. Online OCR sites require an upload, and you rarely know how long the file is kept. Local OCR avoids that exposure entirely.

## Offline details
- English and Hebrew models ship with the app.
- Other languages download a model once from a public package host; after that they work offline.
- Nothing from your document is sent during OCR.

## Speed and quality
Speed depends on page size and your CPU. For best accuracy, use 300 dpi scans. Review numbers after recognition.

## How to tell whether a tool really works offline
Some tools say "offline" but still send pages away for the hard work. A simple test is to turn off Wi-Fi or unplug the network cable, open a scan and run recognition. If it finishes and the text is searchable, the work happened on your computer. If it stalls, shows an error or asks you to sign in, something depended on a server. Gold PDF passes this test for English and Hebrew because both models are bundled with the app. Other languages need a one-time model download, and only that download uses the internet; your documents are never part of it.

## Steps for a clean result
Good recognition starts before you press the shortcut.

1. **Check the scan quality.** Zoom to 100% and read a line of small text. If you can barely read it, the software will struggle too. Rescan at 300 dpi where you can.
2. **Straighten and crop first.** A page photographed at an angle, with a shadow across it, gives worse results than a flat scan.
3. **Choose the right language.** Recognising Hebrew text with an English setting produces nonsense. Match the setting to the page, especially for mixed documents.
4. **Run OCR with Ctrl+Shift+O.** Wait for the progress to finish before you save.
5. **Test the output.** Press **Ctrl+F**, search for a name or number you can see on the page, and confirm that it is found. Then select a paragraph and paste it into Notepad to read what was recognised.
6. **Save a new copy.** Keep the original scan in case you need to run it again with other settings.

## What to expect from different documents
| Document | Typical result | What to check |
|---|---|---|
| Clean printed letter | Very good | Numbers and dates |
| Invoice or receipt | Good, tables may be uneven | Amounts, account and reference numbers |
| Photo of a page | Variable | Shadows, curved lines at the edge |
| Handwriting | Poor | Usually needs retyping |
| Old or faded print | Variable | Rescan at higher contrast |

OCR is a best-effort reading of pixels, not a guarantee. It is most likely to slip on similar-looking characters, such as zero and the letter O, or the digit one and a lowercase L. When a document matters, proofread names, amounts and identifiers against the image.

## Privacy beyond the upload
Avoiding an upload removes the largest risk, but it is not the only one. Once the text is recognised it can be copied and searched, so a confidential file becomes easier to search by anyone who opens it. If you need to share a document, remove or hide the private parts first with a real redaction tool, not a black box, and consider adding a password. See [how to password protect a PDF for free](/articles/how-to-password-protect-a-pdf-for-free/) for the encryption step. Keep the working copy in a folder only you can open, and delete temporary exports you no longer need.

## What Gold PDF does and does not do here
Gold PDF is a free Windows editor that works offline, needs no account and does not upload your document during recognition. It bundles English and Hebrew, and it adds an invisible text layer so the page keeps its look while becoming searchable. It does not read handwriting reliably, it cannot fix a badly distorted photo, and it is available for Windows only, so check the result on any page where accuracy matters.

> **Common mistakes**
> - Using an online tool "just once" for a confidential page.
> - Forgetting the language setting for non-Latin scripts.

See [how to OCR a scanned PDF for free](/articles/how-to-ocr-a-scanned-pdf-for-free/) and [is an online PDF editor safe for confidential documents](/articles/is-online-pdf-editor-safe-for-confidential-documents/).
=====
title: How to Fill Out a PDF Form for Free
description: Fill out a PDF form for free on Windows: text boxes, check boxes and drop-downs, then sign and save. Offline, no account, no printing.
topic: forms
date: 2026-10-18
modified: 2026-11-03
faq: How do I know a PDF is fillable? || Gold PDF highlights the fields softly in blue when you open the file.
faq: What if the form is not fillable? || Use the Text tool (T) to type anywhere on the page.
faq: Are my entries saved in the file? || Yes. Values are saved as real form data when you save.
---
To fill out a PDF form for free, open it in Gold PDF. Fillable fields are highlighted automatically — click each one and type, tick boxes, choose from lists, add your signature and press Ctrl+S.

## Quick steps
1. Open the form (Ctrl+O).
2. Click a field and type; Tab moves on. Tick boxes and choose drop-down values.
3. Place your saved signature (Signatures button).
4. Save with Ctrl+S.

## Non-fillable forms
Some PDFs are just pictures of forms. Press **T** for the Text tool and click where text belongs; set the size in the ribbon. For checkmarks, type an "X" or use the Pen. For scans, run [Recognize text](/articles/how-to-ocr-a-scanned-pdf-for-free/) first if you also need to search.

## Different languages
Type in Hebrew, Arabic, Chinese, Japanese, Korean, Hindi, Thai and more — Gold PDF uses Windows fonts for the right script.

## A worked example: a rental application
Say a landlord sends a three-page rental application as a fillable PDF. Open it and the fields glow softly in blue. Click the first one, type your full name, and press Tab to move to the date of birth, then the address, and so on. Tick the "employed" box and pick your income range from the drop-down. On page two there is a line that is not a field, only a printed rule; press **T**, click above it and type the previous address, then set the size so it matches the other entries.

Before you save, scroll through every page once. Look for required fields you skipped, a box ticked by accident, and text that runs past the edge of a line. Then open the Signatures button, click your saved signature and click the signature line on page three. Finally use Save as, name the copy "application-filled.pdf", and keep the blank original in case you need to start again.

## A checklist before you send a filled form
| Check | Why it matters |
|---|---|
| Every required field has a value | Offices often reject incomplete forms |
| Names, dates and numbers match your ID | Small typos cause delays |
| Drop-downs show the right choice | A wrong default is easy to miss |
| Signature is on every signature line | Forms often have several |
| File saved under a new name | You keep a clean blank copy |
| Password added if the form holds sensitive data | Email is not private by default |

## Fillable versus non-fillable: how to tell
Open the form and look for the soft blue highlight. If clicking a field puts a cursor in it, the form is fillable and your entries are saved as real form data. If nothing is highlighted, the PDF is a flat page. In that case use the Text tool, zoom in so you can place the cursor accurately, and keep a consistent font size. A flat form that came from a scan may also benefit from [recognising the text](/articles/how-to-ocr-a-scanned-pdf-for-free/) so it is searchable afterwards.

If you handle many forms, remember that your answers are personal data. Save them in a folder only you can open, avoid editing on shared computers, and delete temporary copies when you are finished. Gold PDF works offline, so nothing you type is uploaded while you fill the form.

## Keep your data safe
Forms contain personal data. Fill them offline, save to a safe place and password protect the file before emailing: [how to password protect a PDF for free](/articles/how-to-password-protect-a-pdf-for-free/).

> **Common mistakes**
> - Printing to paper to fill a form that is already fillable.
> - Forgetting to save before closing.
> - Emailing a filled form without protection.

Overview: [Fill a PDF form](/fill-pdf-form/).
=====
title: How to Sign a PDF Without Printing
description: Sign a PDF on screen without printing or scanning: draw or import a signature, place it and save. Free on Windows with Gold PDF.
topic: forms
date: 2026-10-18
modified: 2026-11-04
faq: Can I sign a PDF without printing it? || Yes. Draw or import a signature image and place it on the page.
faq: Is that a legally binding signature? || Rules vary by country and document type; many agreements accept simple electronic signatures, but some need qualified signatures. Check the requirements.
faq: Can I reuse my signature? || Yes. Gold PDF saves signatures in a library for reuse.
---
To sign a PDF without printing, open it in Gold PDF, click **Signatures**, draw a new signature (or import an image), click the saved signature and then click the page where it should go. Resize it and save.

## Quick steps
1. Open the document.
2. Click **Signatures** in the ribbon.
3. Draw your signature on the pad, or import a PNG/JPG, and press Save signature.
4. Click the saved signature, then click the page at the signature line.
5. Drag to position, drag the corner to resize, then Ctrl+S.

## Tips for a clean signature
- Draw slowly with a mouse, or sign on white paper, photograph it and import the picture.
- Use a transparent PNG for the neatest result.
- Keep the signature the same size as typed text beside it.

## A worked example: signing a tenancy agreement
Say a landlord emails a four-page tenancy agreement as a PDF and asks you to return it signed by tonight. Open the file and use Save as to create "tenancy-signed.pdf", so the original stays clean. Scroll to page four, where there is a line labelled "Tenant". Click **Signatures**, choose your saved signature and click just above the line. Drag the signature until its baseline sits on the line, then drag the corner handle until it is about the same height as the typed name beside it.

Many agreements also ask for initials on each page. Save your initials as a separate small signature, then place them in the bottom corner of pages one to three. Finally add the date: press **T**, click next to the word "Date" and type it. Press Ctrl+S, reopen the saved file, and scroll through it once to confirm every signature line is filled and nothing overlaps printed text.

## Signing on a laptop, a tablet or a phone photo
You do not need a touch screen. With a mouse, draw slowly and redo it until it looks natural; the pad lets you clear and try again. If you prefer your real handwriting, sign a sheet of white paper with a dark pen, photograph it in good light, crop close to the ink and import the picture. A transparent PNG is neatest, because a photo with a grey or yellow background leaves a visible box on the page. Gold PDF itself runs on Windows, so do the final placing on your Windows computer.

## What to do before and after you sign
| Step | Why it matters |
|---|---|
| Read the whole document first | A signature is hard to take back once the file is sent |
| Fill in all fields before signing | Nobody can add text above your signature later by accident |
| Use Save as | You keep the unsigned original |
| Add a password if the file holds personal data | Email is not private by default |
| Send the final file, not a screenshot | The recipient needs the real PDF |

To lock the file after signing, see [how to password protect a PDF for free](/articles/how-to-password-protect-a-pdf-for-free/). A password stops strangers from opening the file, but it is not a certified digital signature and does not prove who signed. If your document is a form with fields, fill those first: [how to fill out a PDF form for free](/articles/how-to-fill-out-a-pdf-form-for-free/).

## Common questions about signing on screen
- **Can the other side tell it is an image?** Yes, a pasted signature is an image of your handwriting. That is normal for simple electronic signatures.
- **Can someone copy my signature from the file?** Anyone who receives a PDF can in principle extract an image from it. Only send signed files to people you trust, and keep a separate copy without the signature for your own records.
- **Should I use the same signature everywhere?** Keep one for formal documents and another, simpler one for everyday forms. Reusing them is easy: [how to save a signature for reuse in PDFs](/articles/how-to-save-a-signature-for-reuse-in-pdfs/).

## About legality
A pasted signature image is a simple electronic signature. Many contracts accept it; some situations (notarised documents, certain government forms, some financial products) require a qualified or certified signature. Confirm what the recipient needs.

> **Common mistakes**
> - Signing outside the signature line.
> - Importing a photo with a coloured background.
> - Sending an unprotected signed contract.

Next: [how to save a signature for reuse in PDFs](/articles/how-to-save-a-signature-for-reuse-in-pdfs/).
=====
title: How to Save a Signature for Reuse in PDFs
description: Save your signature once and reuse it in any PDF. Draw or import it, keep it in a library, and place it in seconds with Gold PDF.
topic: forms
date: 2026-10-18
modified: 2026-11-06
faq: Where is my saved signature stored? || In Gold PDF's local storage on your computer; it is not uploaded.
faq: Can I keep several signatures? || Yes. The library holds as many as you like, and each can be deleted.
faq: Can I import a signature from a photo? || Yes, import a PNG or JPG; a transparent PNG looks best.
---
To save a signature for reuse in PDFs, open **Signatures** in Gold PDF, draw it on the pad or import an image, and press **Save signature**. It stays in your library, and one click places it on any document.

## Quick steps
1. Click **Signatures**.
2. Draw on the pad (or **Import image**).
3. Press **Save signature**.
4. In any PDF, open Signatures and click the one you want, then click the page.

## Managing the library
Each saved signature appears as a card. Click the × to delete. You can keep a formal signature, initials and a company stamp.

## Privacy
Signatures are stored locally in the app and never uploaded. If you share the computer, delete signatures you do not want others to use.

## Good habits
- Keep a transparent PNG of your signature for the cleanest look.
- Keep initials as a separate entry.
- Combine with form filling: [how to fill out a PDF form for free](/articles/how-to-fill-out-a-pdf-form-for-free/).

## Drawn, imported or photographed: which signature to save
The way you create a signature decides how good it looks on the page. Each option has a place:

| Source | Best for | Watch out for |
|---|---|---|
| Drawn on the pad with a mouse or touchscreen | A quick signature when you have nothing else | A mouse gives a stiff line; a touchscreen or pen looks more natural |
| Transparent PNG | The cleanest result on any background | You need to prepare it once in an image editor |
| Photo of a signature on white paper (JPG) | Matching your real handwriting | A white box around the signature unless the background is removed |
| Initials as a separate entry | Pages that only need initialling | Easy to forget to create them |

## A worked example: preparing a signature from paper
Say you sign contracts rarely and want your real handwriting rather than a mouse drawing.

1. Sign a clean white sheet with a dark pen, in a size a little larger than you normally write.
2. Photograph it in even daylight, straight from above, or scan it at 300 dpi. Shadows and creases will show up as grey marks later.
3. Crop the picture tightly around the signature and, if you have an image editor, make the white background transparent and save as PNG.
4. In Gold PDF, click **Signatures**, choose **Import image**, select the file and press **Save signature**.
5. Open a test PDF, pick the signature from your library, click the page and check the result at 100% zoom. If you see a white rectangle, go back to step 3.

Do this once, and every later document takes seconds. The placement steps for a real document are in [how to sign a PDF without printing](/articles/how-to-sign-a-pdf-without-printing/).

## What a saved signature is, and is not
An image of your signature placed on a page is a visual mark. It shows who agreed, but it does not by itself prove anything about the document. Whether an image signature is accepted depends on the recipient, the type of document and the rules where you live, and some contracts require a certified digital signature or a witnessed one. When in doubt, ask the person who requested the signature what they accept. Gold PDF places your signature image; it does not issue certificates or act as a trust service.

## Where to place it and when to lock the file
Put the signature on the line provided and keep it inside the margins so that it is not cropped when the page is printed. When the document is final, save a copy, and consider [password protecting the PDF](/articles/how-to-password-protect-a-pdf-for-free/) before you send it. If the form also has fields to complete, fill them in first: see [how to fill out a PDF form for free](/articles/how-to-fill-out-a-pdf-form-for-free/).

> **Common mistakes**
> - Saving a signature with a white box around it.
> - Leaving the library on a shared computer.
> - Photographing a signature in poor light, so shadows end up on the page.
> - Signing the working file and overwriting the unsigned original; use Save as.
=====
title: How to Password Protect a PDF for Free
description: Add a password to a PDF for free with AES-256 encryption on Windows. Offline, no upload, no account. Step by step with Gold PDF.
topic: security
date: 2026-10-18
modified: 2026-11-07
faq: What encryption does Gold PDF use? || AES-256 password encryption when you save a protected PDF.
faq: Can Gold PDF open a PDF if I forgot the password? || No. It opens protected files only when you enter the correct password.
faq: How do I remove the password? || Open the file, choose Password, click Remove password and save a new copy.
---
To password protect a PDF for free, open it in Gold PDF, click **Password** in the Protect tab, type a password and save. The saved file is encrypted with AES-256 and anyone opening it must enter the password.

## Quick steps
1. Open the PDF and finish your edits.
2. Choose **Protect → Password** and enter the password.
3. Press Save as. Keep your working copy unprotected if you wish.
4. Reopen the saved file to test the password prompt.

## Choosing a strong password
Use at least 12 characters, ideally a passphrase of several unrelated words. Do not reuse passwords from email or banking, and do not send the password in the same message as the file.

## What the password does and does not do
It encrypts the content so the file cannot be opened without the password. It does not hide the existence of the file, and it cannot protect against someone you gave the password to.

## A worked example: sending payslips to an accountant
Say you need to email three payslips to your accountant. The PDFs contain your salary, your tax number and your bank details, and email is not private by default: messages sit in several mailboxes and backups, and attachments are easy to forward by mistake.

1. Open the first payslip in Gold PDF.
2. Choose **Protect → Password** and type a passphrase, such as four unrelated words with a number between two of them.
3. Press Ctrl+Shift+S and save the protected copy as "payslip-august-protected.pdf". Your unprotected file stays in your own folder.
4. Repeat for the other two payslips with the same passphrase, so your accountant only needs one.
5. Close the files and open one protected copy again. Gold PDF should ask for the password before it shows anything. Type it to confirm it works.
6. Email the protected files. Then send the password by text message, or tell it to your accountant by phone.

If the accountant later sends a file back with questions, you will both need the same password to open it, so store it in a password manager rather than on a sticky note.

## What a password protects, and what it does not
A password is one layer of protection. It is useful, but it solves a specific problem, so it helps to know where it stops.

| Situation | Does a PDF password help? |
|---|---|
| The email is sent to the wrong person | Yes, if they do not also get the password |
| A laptop or USB stick with the file is lost | Yes, the file cannot be opened without the password |
| The recipient forwards the file and the password | No, anyone with both can open it |
| You want to hide part of the page from the recipient | No, use redaction instead |
| You need proof of who signed the document | No, a password is not a digital signature |
| The password is short or a common word | Only weakly, short passwords can be guessed |

If the recipient should not see certain details at all, a password is the wrong tool. Remove those details with the Redact tool before you protect the file: [how to redact a PDF so it cannot be undone](/articles/how-to-redact-a-pdf-so-it-cannot-be-undone/). Redaction removes content from the file; a password only controls who can open it.

## Opening, changing and removing a password
Gold PDF opens protected PDFs when you type the correct password, so you can edit, sign or fill a locked file and save it again. It cannot open a file if you do not know the password, and it does not try to guess or crack passwords.

To change a password, open the file with the old one, choose **Protect → Password**, remove the old password, set the new one and save a new copy. To remove protection completely, choose **Remove password** and save. Do this only on your own computer, and delete unprotected copies you no longer need.

All of this happens on your PC. Gold PDF works offline, so neither the file nor the password is sent to a server, which matters when the document is confidential. If you sign a document before sending it, sign first and add the password last: [how to sign a PDF without printing](/articles/how-to-sign-a-pdf-without-printing/).

## Sharing securely
Send the file and the password by different channels. For sensitive data also clear metadata first: [how to remove metadata from a PDF](/articles/how-to-remove-metadata-from-a-pdf-before-sharing/).

> **Common mistakes**
> - Writing the password in the email body.
> - Losing the only copy of the password.
> - Forgetting to test the protected file.
> - Using a password to hide details the recipient should never see, instead of redacting them.
> - Keeping old unprotected copies in a shared or synced folder.

Gold PDF is free, runs on Windows only and encrypts protected files with AES-256. It does not recover forgotten passwords, so keep yours somewhere safe.

Overview: [Password protect a PDF](/password-protect-pdf/).
