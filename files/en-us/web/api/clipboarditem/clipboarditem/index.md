---
title: ClipboardItem()
slug: Web/API/ClipboardItem/ClipboardItem
page-type: web-api-instance-property
tags:
  - API
  - Clipboard
  - Clipboard API
  - ClipboardItem
  - Constructor
  - Cut
  - Reference
  - copy
  - paste
browser-compat: api.ClipboardItem.ClipboardItem
---
{{DefaultAPISidebar("Clipboard API")}}

The **`ClipboardItem()`** constructor of the {{domxref("Clipboard API")}} creates a new {{domxref("ClipboardItem")}} object which represents data to be stored or retrieved via the {{domxref("Clipboard API")}}, that is {{domxref("clipboard.write()")}} and {{domxref("clipboard.read()")}} respectively.

> **Note:** Image format support varies by browser. See the browser compatibility table for the {{domxref("Clipboard")}} interface.

## Syntax

```js
new ClipboardItem(data)
new ClipboardItem(data, options)
```

### Parameters

- `data`
  - : An {{jsxref("Object")}} with the {{Glossary("MIME type")}} as the key and data as the value. The data can be represented as a {{domxref("Blob")}}, a {{jsxref("String")}} or a {{jsxref("Promise")}} which resolves to either a blob or string.
- `options` {{optional_inline}}
  - : An object with the following properties:
    - `presentationStyle` {{optional_inline}}
      - : One of the three strings: `unspecified`, `inline` or `attachment`. The default is `unspecified`.

> **Note:** You can also work with text via the {{domxref("Clipboard.readText()")}} and {{domxref("Clipboard.writeText()")}} methods of the {{domxref("Clipboard")}}
> interface.

## Examples

The below example requests a png image using the {{domxref("Fetch API")}}, and in turn, the {{domxref("Response.blob()", "responses' blob()")}} method, to create a new {{domxref("ClipboardItem")}}. This item is then written to the clipboard, using the {{domxref("Clipboard.write()")}} method.

> **Note:** You can only pass in one clipboard item at a time.

```js
async function writeClipImg() {
  try {
    const imgURL = '/myimage.png';
    const data = await fetch(imgURL);
    const blob = await data.blob();

    await navigator.clipboard.write([
      new ClipboardItem({
        [blob.type]: blob
      })
    ]);
    console.log('Fetched image copied.');
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
