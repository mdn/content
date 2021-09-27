---
title: ClipboardItem.presentationStyle
slug: Web/API/ClipboardItem/presentationStyle
tags:
  - API
  - Clipboard
  - Clipboard API
  - ClipboardItem
  - Cut
  - Property
  - Read-only
  - Reference
  - presentationStyle
  - copy
  - paste
browser-compat: api.ClipboardItem.presentationStyle
---
{{DefaultAPISidebar("Clipboard API")}}

The read-only
**`presentationStyle`** property of the {{domxref("ClipboardItem")}}
interface returns a {{jsxref("String")}} indicating how an item should be presented.

## Syntax

```js
var presentationStyle = clipboardItem.presentationStyle;
```

### Value

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
- [Async Clipboard API demo on
  Glitch](https://async-clipboard-api.glitch.me/)
- [Image support for Async
  Clipboard article](https://web.dev/image-support-for-async-clipboard/)
