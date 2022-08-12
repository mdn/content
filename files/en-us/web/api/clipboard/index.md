---
title: Clipboard
slug: Web/API/Clipboard
page-type: web-api-interface
tags:
  - API
  - Clip
  - Clipboard
  - Clipboard API
  - Cut
  - Editing
  - Interface
  - Pasteboard
  - Reference
  - copy
  - paste
browser-compat: api.Clipboard
---
{{APIRef("Clipboard API")}} {{SecureContext_Header}}

The **`Clipboard`** interface implements the [Clipboard API](/en-US/docs/Web/API/Clipboard_API), providing—if the user grants permission—both read and write access to the contents of the system clipboard. The Clipboard API can be used to implement cut, copy, and paste features within a web application.

{{InheritanceDiagram}}

The system clipboard is exposed through the global {{domxref("Navigator.clipboard")}} property.

Calls to the methods of the `Clipboard` object will not succeed if the user hasn't granted the needed permissions using the [Permissions API](/en-US/docs/Web/API/Permissions_API) and the `'clipboard-read'` or `'clipboard-write'` permission as appropriate.

> **Note:** In reality, at this time browser requirements for access to the clipboard vary significantly. Please see the section [Clipboard availability](#clipboard_availability) for details.

All of the Clipboard API methods operate asynchronously; they return a {{jsxref("Promise")}} which is resolved once the clipboard access has been completed. The promise is rejected if clipboard access is denied.

## Methods

_`Clipboard` is based on the {{domxref("EventTarget")}} interface, and includes its methods._

- {{domxref("Clipboard.read()","read()")}}
  - : Requests arbitrary data (such as images) from the clipboard, returning a {{jsxref("Promise")}} that resolves with an array of {{domxref("ClipboardItem")}} objects containing the clipboard's contents.
- {{domxref("Clipboard.readText()","readText()")}}
  - : Requests text from the system clipboard; returns a `Promise` which is resolved with a string containing the clipboard's text once it's available.
- {{domxref("Clipboard.write()","write()")}}
  - : Writes arbitrary data to the system clipboard. This asynchronous operation signals that it's finished by resolving the returned `Promise`.
- {{domxref("Clipboard.writeText()","writeText()")}}
  - : Writes text to the system clipboard, returning a `Promise` which is resolved once the text is fully copied into the clipboard.

## Clipboard availability

The asynchronous clipboard API is a relatively recent addition, and the process of implementing it in browsers is not yet complete. Due to both potential security concerns and technical complexities, the process of integrating this API is happening gradually in most browsers. See the [browser compatibility](#browser_compatibility) section below for more information.

In browser extensions, you can access the system clipboard using the WebExtension [`clipboard`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/clipboard) API.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.execCommand()")}}
