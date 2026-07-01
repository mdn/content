---
title: "Navigator: clipboard property"
short-title: clipboard
slug: Web/API/Navigator/clipboard
page-type: web-api-instance-property
browser-compat: api.Navigator.clipboard
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

The **`clipboard`** read-only property of the {{domxref("Navigator")}} interface returns a {{domxref("Clipboard")}} object used to read and write the clipboard's contents.

This is the entry point to the [Clipboard API](/en-US/docs/Web/API/Clipboard_API), which can be used to implement cut, copy, and paste features within a web application.

## Value

The {{domxref("Clipboard")}} object used to access the system clipboard.

## Examples

The following code uses `navigator.clipboard` to access the system clipboard in order to read text contents from the clipboard.

```js
navigator.clipboard
  .readText()
  .then(
    (clipText) => (document.querySelector(".clip-text").innerText = clipText),
  );
```

This snippet replaces the contents of the element whose class is `"clip-text"` with the text contents of the clipboard.
Perhaps this code is being used in a browser extension that displays the current clipboard contents, automatically updating periodically or when specific events fire.

If the clipboard is empty or doesn't contain text, the `"clip-text"` element's contents are cleared.
This happens because {{domxref("Clipboard.readText", "readText()")}} returns an empty string if the clipboard is empty or doesn't contain text.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
