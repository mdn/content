---
title: Clipboard.readText()
slug: Web/API/Clipboard/readText
page-type: web-api-instance-method
tags:
  - API
  - Async Clipboard API
  - Clip
  - Clipboard
  - Clipboard API
  - Cut
  - Editing
  - Method
  - Pasteboard
  - Reference
  - Text
  - copy
  - paste
  - readText
browser-compat: api.Clipboard.readText
---
{{APIRef("Clipboard API")}}

The **{{domxref("Clipboard")}}** interface's
**`readText()`** method returns a {{jsxref("Promise")}} which
resolves with a copy of the textual contents of the system clipboard.

The
`"clipboard-read"` permission of the [Permissions API](/en-US/docs/Web/API/Permissions_API) must be granted before
you can read data from the clipboard.

## Syntax

```js
readText()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves with a string containing the
textual contents of the clipboard. Returns an empty string if the clipboard is empty,
does not contain text, or does not include a textual representation among the
{{domxref("DataTransfer")}} objects representing the clipboard's contents.

To read non-text contents from the clipboard, use the {{domxref("Clipboard.read",
  "read()")}} method instead. You can write text to the clipboard using
{{domxref("Clipboard.writeText", "writeText()")}}.

## Examples

This example retrieves the textual contents of the clipboard and inserts the returned
text into an element's contents.

```js
navigator.clipboard.readText().then(
  (clipText) => document.getElementById("outbox").innerText = clipText);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Clipboard API](/en-US/docs/Web/API/Clipboard_API)
- [Async Clipboard API demo on Glitch](https://async-clipboard-api.glitch.me/)
- [Image support for Async Clipboard article](https://web.dev/async-clipboard/)
- {{domxref("Clipboard.writeText()")}}
- {{domxref("Clipboard.write()")}}
