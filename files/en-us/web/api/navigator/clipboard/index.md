---
title: "Navigator: clipboard property"
short-title: clipboard
slug: Web/API/Navigator/clipboard
page-type: web-api-instance-property
browser-compat: api.Navigator.clipboard
---

{{APIRef("Clipboard API")}}

The [Clipboard API](/en-US/docs/Web/API/Clipboard_API) adds to the **{{domxref("Navigator")}}** interface the
read-only **`clipboard`** property, which returns the
{{domxref("Clipboard")}} object used to read and write the clipboard's
contents.

The Clipboard API can be used to implement cut, copy, and paste
features within a web application.

Use of the asynchronous clipboard read and write methods requires that the user grant
the website or app permission to access the clipboard. This permission must be obtained
from the [Permissions API](/en-US/docs/Web/API/Permissions_API) using the
`"clipboard-read"` and/or `"clipboard-write"` permissions.

## Value

The {{domxref("Clipboard")}} object used to access the system clipboard.

## Examples

The following code uses `navigator.clipboard` to access the system clipboard
in order to read the contents of the clipboard.

```js
navigator.clipboard
  .readText()
  .then(
    (clipText) => (document.querySelector(".cliptext").innerText = clipText),
  );
```

This snippet replaces the contents of the element whose class is
`"cliptext"` with the text contents of the clipboard. Perhaps this code is
being used in a browser extension that displays the current clipboard contents,
automatically updating periodically or when specific events fire.

If the clipboard is empty or doesn't contain text, the `"cliptext"`
element's contents are cleared. This happens because {{domxref("Clipboard.readText",
  "readText()")}} returns an empty string if the clipboard is empty or doesn't contain
text.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
