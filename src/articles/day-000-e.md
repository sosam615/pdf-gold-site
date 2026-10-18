=====
title: Is Online PDF Editor Safe for Confidential Documents
description: Is it safe to edit confidential PDFs on a website? What gets uploaded, what can go wrong, and safer offline options for private files.
topic: compare
date: 2026-10-18
faq: Is an online PDF editor safe for contracts? || It depends on the provider's retention, encryption and policies; uploading always adds a third party. For highly confidential files an offline editor avoids the risk.
faq: What should I check on an online tool? || Retention period, encryption, where files are stored, whether files are used for training, and who can access them.
faq: What is the safest alternative? || Edit locally with an offline tool such as Gold PDF so the file never leaves your computer.
---
An online PDF editor can be safe for low-risk documents, but for confidential files it adds risk, because your document is uploaded to someone else's server. For contracts, IDs, medical or financial papers, an offline editor such as Gold PDF avoids that exposure entirely.

## What happens when you upload
Your file travels to a server, is processed, and may be stored for a period. Even with good security, you rely on the provider's policies, staff access, backups and legal requests.

## Questions to ask any online tool
1. How long are files kept, and can I delete them?
2. Is the file encrypted in transit and at rest?
3. Where is it stored (country)?
4. Is it used for analytics or AI training?
5. Does the free plan watermark or limit the output?

## Safer habits
- Use offline tools for confidential files.
- Redact before uploading anywhere.
- Remove metadata: [how to remove metadata from a PDF](/articles/how-to-remove-metadata-from-a-pdf-before-sharing/).
- Password protect when you email: [how to password protect a PDF](/articles/how-to-password-protect-a-pdf-for-free/).

## Offline option
Gold PDF edits, redacts and recognises text on your PC. Only its optional AI assistant sends the document text to the provider you choose, and only when you press Run.

> **Common mistakes**
> - Uploading first, redacting later.
> - Assuming "secure" on a website means "private".
=====
title: Best Free PDF Redaction Tool for Windows
description: What makes a good free PDF redaction tool: real content removal, metadata cleaning, OCR and offline use — and how Gold PDF measures up.
topic: compare
date: 2026-10-18
faq: What makes a redaction tool trustworthy? || It must remove the underlying text and image data, clear metadata and let you verify the saved file.
faq: Is Gold PDF's redaction real? || Redacted pages are rebuilt on save so the original content is not in the file; verify by searching the saved PDF.
faq: Can it redact scans? || Yes, run OCR first so words can be found and redacted.
---
The best free PDF redaction tool for Windows is one that truly removes the covered content, clears metadata and runs offline. Gold PDF does this: redacted pages are rebuilt on save, metadata is cleared, and everything happens on your PC at no cost.

## Checklist for any redaction tool
| Requirement | Why |
|---|---|
| Removes underlying text | Boxes alone leak |
| Handles scans (OCR) | Images hide words too |
| Clears metadata | Names hide in properties |
| Works offline | No upload of secrets |
| Lets you verify | Trust, but test |

## Gold PDF's method
Draw Redact boxes (R), save, and each affected page is rebuilt as a high-resolution image with an invisible text layer for the rest; orphaned objects and metadata are removed. Test it with [how to check if a PDF redaction is secure](/articles/how-to-check-if-a-pdf-redaction-is-secure/).

## Limits
Rebuilt pages are images with a text layer, so file sizes can grow. It does not provide court-specific templates, redaction logs or batch automation.

> **Common mistakes**
> - Picking a tool because it has a "redact" button without testing.
> - Not redacting the metadata.
=====
title: How to Edit a PDF Using AI
description: Edit a PDF with AI by describing the change. Gold PDF proposes line-by-line edits with your own API key and applies only what you approve.
topic: ai
date: 2026-10-18
faq: Can AI edit a PDF? || Yes. Gold AI reads the document's text lines, proposes changes from your instruction and lets you approve each one before applying.
faq: Which AI providers work? || Google Gemini, Claude, OpenAI, OpenRouter, Groq, Mistral and others, using your own API key.
faq: Is my document uploaded? || Only the text lines and your instruction go to the provider you choose, and only when you press Run.
---
To edit a PDF using AI, connect your own API key in Gold PDF's **Gold AI** panel, type what you want changed — for example "change every date to April" — and press Run. Gold AI shows each proposed line, old and new; you tick the ones you want and apply.

## Quick steps
1. Open the PDF and click **Gold AI** (Ctrl+J).
2. Pick a provider and model, paste your API key, press **Test connection**.
3. Choose **Edit**, type the instruction and press **Run**.
4. Review the list of changes, untick any you do not want and press **Apply**.
5. Save.

## Good instructions
- "Change every date in March to April."
- "Fix spelling mistakes but do not change names."
- "Make the tone more formal."
- "Replace the company name Acme with Beta Ltd."

## How it works
Gold PDF sends the text lines of the open document and your instruction to the provider, asks for a small list of line edits, and applies approved edits like manual Edit text changes, so formatting stays consistent. Scanned pages need OCR first.

## Privacy
Nothing is sent until you press Run, and only to the provider you configured. If a document is highly confidential, redact first or skip AI.

> **Common mistakes**
> - Accepting every change without reading it.
> - Using AI on scanned pages without OCR.
> - Sending sensitive text to an unfamiliar provider.

Next: [how to use your own API key with a PDF editor](/articles/how-to-use-your-own-api-key-with-a-pdf-editor/).
=====
title: How to Use Your Own API Key With a PDF Editor
description: Bring your own AI key to a PDF editor: where to get it, how to connect it in Gold PDF, how to test it, and how your key is stored.
topic: ai
date: 2026-10-18
faq: Where is my API key stored? || In a small JSON config file on your PC that you can open and edit from the Gold AI panel.
faq: Which providers are supported? || Google Gemini, Anthropic Claude, OpenAI, OpenRouter, Groq, Mistral, Cerebras, GitHub Models, Cohere, NVIDIA, Hugging Face, Cloudflare, Alibaba, Z.ai and SiliconFlow.
faq: Who pays for AI usage? || You do, directly with your provider; Gold PDF itself is free.
---
To use your own API key with a PDF editor, create a key with your AI provider, paste it into Gold PDF's **Gold AI** panel, choose a model and press **Test connection**. Your key stays in a local config file, and Gold PDF sends requests straight to the provider.

## Quick steps
1. Create an API key in your provider's console (many offer a free tier).
2. In Gold PDF press Ctrl+J to open Gold AI.
3. Choose the provider and model, paste the key (and account ID for Cloudflare).
4. Press **OK**, then **Test connection**. A green check with the response time means it works.
5. Use Edit or Ask on your document.

## Where the key lives
The panel saves the key to a small JSON file on your computer. **Open config file** lets you edit it by hand. Treat it like a password; do not share it.

## Cost and limits
You pay the provider by usage, or use their free tier if available. Rate limits depend on the provider. Pick a cheaper model for simple corrections.

## What gets sent
Only the document's text lines and your instruction, when you press Run. See [how to edit a PDF using AI](/articles/how-to-edit-a-pdf-using-ai/).

> **Common mistakes**
> - Pasting the key into the wrong provider.
> - Sharing screenshots that show the key.
> - Forgetting that usage is billed by the provider.
