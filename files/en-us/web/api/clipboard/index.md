---
title: Clipboard
slug: Web/API/Clipboard
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

The system clipboard is exposed through the global {{domxref("Navigator.clipboard")}} property.

Calls to the methods of the `Clipboard` object will not succeed if the user hasn't granted the needed permissions using the [Permissions API](/en-US/docs/Web/API/Permissions_API) and the `"clipboard-read"` or `"clipboard-write"` permission as appropriate.

> **Note:** In reality, at this time browser requirements for access to the clipboard vary significantly. Please see the section {{anch("Clipboard availability")}} for details.

All of the Clipboard API methods operate asynchronously; they return a {{jsxref("Promise")}} which is resolved once the clipboard access has been completed. The promise is rejected if clipboard access is denied.

> **Note:** The **clipboard** is a data buffer that is used for short-term, data storage and/or data transfers, this can be between documents or applications
>  It is usually implemented as an anonymous, temporary [data buffer](https://en.wikipedia.org/wiki/Data_buffer "Data buffer"), sometimes called the paste buffer, that can be accessed from most or all programs within the environment via defined [programming interfaces](https://en.wikipedia.org/wiki/Application_programming_interface "Application programming interface").
>
> A typical application accesses clipboard functionality by mapping [user input](https://en.wikipedia.org/wiki/User_input "User input") such as [keybindings](https://en.wikipedia.org/wiki/Keybinding), [menu selections](<https://en.wikipedia.org/wiki/Menu_(computing)> "Menu (computing)"), etc. to these interfaces.

## Methods

_`Clipboard` is based on the {{domxref("EventTarget")}} interface, and includes its methods._

- {{domxref("Clipboard.read()","read()")}}
  - : Requests arbitrary data (such as images) from the clipboard, returning a {{jsxref("Promise")}}. When the data has been retrieved, the promise is resolved with a {{domxref("DataTransfer")}} object that provides the data.
- {{domxref("Clipboard.readText()","readText()")}}
  - : Requests text from the system clipboard; returns a `Promise` which is resolved with a {{domxref("DOMString")}} containing the clipboard's text once it's available.
- {{domxref("Clipboard.write()","write()")}}
  - : Writes arbitrary data to the system clipboard. This asynchronous operation signals that it's finished by resolving the returned `Promise`.
- {{domxref("Clipboard.writeText()","writeText()")}}
  - : Writes text to the system clipboard, returning a `Promise` which is resolved once the text is fully copied into the clipboard.

## Clipboard availability

The asynchronous clipboard API is a relatively recent addition, and the process of implementing it in browsers is not yet complete. Due to both potential security concerns and technical complexities, the process of integrating this API is happening gradually in most browsers.

For example, Firefox does not yet support the `"clipboard-read"` and `"clipboard-write"` permissions, so access to the methods that access and change the contents of the clipboard are restricted in other ways.

For WebExtensions, you can request the clipboardRead and clipboardWrite permissions to be able to use clipboard.readText() and clipboard.writeText(). Content scripts applied on HTTP sites do not have access to the clipboard object. See [extensions in Firefox 63](https://blog.mozilla.org/addons/2018/08/31/extensions-in-firefox-63/).

In addition, {{domxref("Clipboard.read", "read()")}} and {{domxref("Clipboard.write", "write()")}} are disabled by default and require changing a preference to enable them. Check the compatibility tables for each method before using it.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.execCommand()")}}
