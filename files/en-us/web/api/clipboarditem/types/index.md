---
title: "ClipboardItem: types property"
short-title: types
slug: Web/API/ClipboardItem/types
page-type: web-api-instance-property
browser-compat: api.ClipboardItem.types
---

{{DefaultAPISidebar("Clipboard API")}}

The read-only
**`types`** property of the {{domxref("ClipboardItem")}}
interface returns an {{jsxref("Array")}} of {{Glossary("MIME type", 'MIME types')}}
available within the {{domxref("ClipboardItem")}}

## Value

An {{jsxref("Array")}} of available {{Glossary("MIME type", 'MIME types')}}.

## Examples

In the below example, we're returning all items on the clipboard via the
{{domxref("clipboard.read()")}} method. Then checking the `types` property
for available types before utilizing the {{domxref("ClipboardItem.getType()")}} method
to return the {{domxref("Blob")}} object. If no clipboards contents is found for the
specified type, an error is returned.

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
- [Async Clipboard API demo on Glitch](https://async-clipboard-api.glitch.me/)
- [Image support for Async Clipboard article](https://web.dev/async-clipboard/)
