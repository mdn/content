---
title: Clipboard
slug: Web/API/Clipboard
page-type: web-api-interface
browser-compat: api.Clipboard
---

{{APIRef("Clipboard API")}}{{SecureContext_Header}}

The **`Clipboard`** interface of the [Clipboard API](/en-US/docs/Web/API/Clipboard_API) provides read and read and write access to the contents of the system clipboard.

This allows a web application to implement cut, copy, and paste features providing the user grants permission.

{{InheritanceDiagram}}

The system clipboard is exposed through the global {{domxref("Navigator.clipboard")}} property.

Calls to the methods of the `Clipboard` object will not succeed if the user hasn't granted the needed permissions using the [Permissions API](/en-US/docs/Web/API/Permissions_API) and the `'clipboard-read'` or `'clipboard-write'` permission as appropriate.

All of the Clipboard API methods operate asynchronously; they return a {{jsxref("Promise")}} which is resolved once the clipboard access has been completed.
The promise is rejected if clipboard access is denied.

> **Note:** Browser extensions access the system clipboard using the [WebExtension `clipboard` API](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/clipboard).

## Instance methods

_`Clipboard` is based on the {{domxref("EventTarget")}} interface, and includes its methods._

- {{domxref("Clipboard.read()","read()")}}
  - : Requests arbitrary data (such as images) from the clipboard, returning a {{jsxref("Promise")}} that resolves with an array of {{domxref("ClipboardItem")}} objects containing the clipboard's contents.
- {{domxref("Clipboard.readText()","readText()")}}
  - : Requests text from the system clipboard, returning a `Promise` that if fulfilled with a string containing the clipboard's text once it's available.
- {{domxref("Clipboard.write()","write()")}}
  - : Writes arbitrary data to the system clipboard, returning a {{jsxref("Promise")}} that resolves when the operation completes.
- {{domxref("Clipboard.writeText()","writeText()")}}
  - : Writes text to the system clipboard, returning a `Promise` that is resolved once the text is fully copied into the clipboard.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.execCommand()")}}
