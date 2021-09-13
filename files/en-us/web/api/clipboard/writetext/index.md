---
title: Clipboard.writeText()
slug: Web/API/Clipboard/writeText
tags:
  - API
  - Clip
  - Clipboard
  - Clipboard API
  - Cut
  - Method
  - Pasteboard
  - Reference
  - Scrap
  - copy
  - paste
  - writeText
browser-compat: api.Clipboard.writeText
---
{{APIRef("Clipboard API")}}

The {{domxref("Clipboard")}} interface's **`writeText()`**
property writes the specified text string to the system clipboard. Text may be read back
using either {{domxref("Clipboard.read", "read()")}} or {{domxref("Clipboard.readText",
  "readText()")}}.

The `"clipboard-write"` permission of the [Permissions API](/en-US/docs/Web/API/Permissions_API), is granted
automatically to pages when they are in the active tab.

## Syntax

```js
var promise = navigator.clipboard.writeText(newClipText)
```

### Parameters

- `newClipText`
  - : The {{domxref("DOMString")}} to be written to the clipboard.

### Return value

A {{jsxref("Promise")}} which is resolved once the clipboard's contents have been
updated. The promise is rejected if the caller does not have permission to write to the
clipboard.

## Example

This example sets the clipboard's contents to the string "\<empty clipboard>".

```js
navigator.clipboard.writeText("<empty clipboard>").then(function() {
  /* clipboard successfully set */
}, function() {
  /* clipboard write failed */
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Clipboard API](/en-US/docs/Web/API/Clipboard_API)
- [Async Clipboard API demo on
  Glitch](https://async-clipboard-api.glitch.me/)
- [Image support for Async
  Clipboard article](https://web.dev/image-support-for-async-clipboard/)
