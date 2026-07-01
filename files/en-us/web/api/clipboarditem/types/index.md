---
title: "ClipboardItem: types property"
short-title: types
slug: Web/API/ClipboardItem/types
page-type: web-api-instance-property
browser-compat: api.ClipboardItem.types
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

The read-only **`types`** property of the {{domxref("ClipboardItem")}} interface returns an {{jsxref("Array")}} of {{Glossary("MIME type", 'MIME types')}} available within the {{domxref("ClipboardItem")}}.

## Value

An {{jsxref("Array")}} of available {{Glossary("MIME type", 'MIME types')}}.

## Examples

In the below example, we're returning all items on the clipboard via the {{domxref("Clipboard.read()")}} method, then checking the `types` property for available types before utilizing the {{domxref("ClipboardItem.getType()")}} method to return each data item as a {{domxref("Blob")}}. If no clipboard contents is found for the specified type, an error is returned.

```js
async function getClipboardContents() {
  try {
    const clipboardItems = await navigator.clipboard.read();

    for (const clipboardItem of clipboardItems) {
      for (const type of clipboardItem.types) {
        const blob = await clipboardItem.getType(type);
        // we can now use blob here
      }
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
