---
title: "ClipboardItem: presentationStyle property"
short-title: presentationStyle
slug: Web/API/ClipboardItem/presentationStyle
page-type: web-api-instance-property
browser-compat: api.ClipboardItem.presentationStyle
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

The read-only **`presentationStyle`** property of the {{domxref("ClipboardItem")}} interface returns a string indicating how an item should be presented.

For example, in some contexts an image might be displayed inline, while in others it might be represented as an attachment.

## Value

One of either `"unspecified"`, `"inline"` or `"attachment"`.

## Examples

In the below example, we're returning all items on the clipboard via the {{domxref("clipboard.read()")}} method, then logging the `presentationStyle` property.

```js
async function getClipboardContents() {
  try {
    const clipboardItems = await navigator.clipboard.read();

    for (const clipboardItem of clipboardItems) {
      console.log(clipboardItem.presentationStyle);
    }
  } catch (err) {
    console.error(err.name, err.message);
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Clipboard API](/en-US/docs/Web/API/Clipboard_API)
- [Image support for Async Clipboard article](https://web.dev/articles/async-clipboard)
