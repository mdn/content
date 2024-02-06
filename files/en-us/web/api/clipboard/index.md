---
title: Clipboard
slug: Web/API/Clipboard
page-type: web-api-interface
browser-compat: api.Clipboard
---

{{APIRef("Clipboard API")}}{{SecureContext_Header}}

The **`Clipboard`** interface of the [Clipboard API](/en-US/docs/Web/API/Clipboard_API) provides read and write access to the contents of the system clipboard.
This allows a web application to implement cut, copy, and paste features.

{{InheritanceDiagram}}

The system clipboard is exposed through the global {{domxref("Navigator.clipboard")}} property.

All of the Clipboard API methods operate asynchronously; they return a {{jsxref("Promise")}} which is resolved once the clipboard access has been completed.
The promise is rejected if clipboard access is denied.

All the methods require a [secure context](/en-US/docs/Web/Security/Secure_Contexts).
Additional requirements for using the API are discussed in the [Security consideration](/en-US/docs/Web/API/Clipboard_API#security_considerations) section of the API overview topic.

## Instance methods

_`Clipboard` is based on the {{domxref("EventTarget")}} interface, and includes its methods._

- {{domxref("Clipboard.read()","read()")}}
  - : Requests arbitrary data (such as images) from the clipboard, returning a {{jsxref("Promise")}} that resolves with an array of {{domxref("ClipboardItem")}} objects containing the clipboard's contents.
- {{domxref("Clipboard.readText()","readText()")}}
  - : Requests text from the system clipboard, returning a {{jsxref("Promise")}} that is fulfilled with a string containing the clipboard's text once it's available.
- {{domxref("Clipboard.write()","write()")}}
  - : Writes arbitrary data to the system clipboard, returning a {{jsxref("Promise")}} that resolves when the operation completes.
- {{domxref("Clipboard.writeText()","writeText()")}}
  - : Writes text to the system clipboard, returning a {{jsxref("Promise")}} that is resolved once the text is fully copied into the clipboard.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.execCommand()")}}
