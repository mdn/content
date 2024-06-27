---
title: "ClipboardItem: ClipboardItem() constructor"
short-title: ClipboardItem()
slug: Web/API/ClipboardItem/ClipboardItem
page-type: web-api-constructor
browser-compat: api.ClipboardItem.ClipboardItem
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

The **`ClipboardItem()`** constructor creates a new {{domxref("ClipboardItem")}} object, which represents data to be stored or retrieved via the [Clipboard API](/en-US/docs/Web/API/Clipboard_API) {{domxref("clipboard.write()")}} and {{domxref("clipboard.read()")}} methods, respectively.

> **Note:** Image format support varies by browser. See the browser compatibility table for the {{domxref("Clipboard")}} interface.

## Syntax

```js-nolint
new ClipboardItem(data)
new ClipboardItem(data, options)
```

### Parameters

- `data`
  - : An {{jsxref("Object")}} with the {{Glossary("MIME type")}} as the key and data as the value.
    The data can be represented as a {{domxref("Blob")}}, a {{jsxref("String")}} or a {{jsxref("Promise")}} which resolves to either a blob or string.
- `options` {{optional_inline}}
  - : An object with the following properties:
    - `presentationStyle` {{optional_inline}}
      - : One of the three strings: `unspecified`, `inline` or `attachment`.
        The default is `unspecified`.

> **Note:** You can also work with text via the {{domxref("Clipboard.readText()")}} and {{domxref("Clipboard.writeText()")}} methods of the {{domxref("Clipboard")}} interface.

## Examples

The below example requests a PNG image using the {{domxref("Fetch API")}}, and in turn, the {{domxref("Response.blob()", "responses' blob()")}} method, to create a new {{domxref("ClipboardItem")}}.
This item is then written to the clipboard, using the {{domxref("Clipboard.write()")}} method.

> **Note:** You can only pass in one clipboard item at a time.

```js
async function writeClipImg() {
  try {
    if (ClipboardItem.supports("image/png")) {
      const imgURL = "/myimage.png";
      const data = await fetch(imgURL);
      const blob = await data.blob();
      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob,
        }),
      ]);
      console.log("Fetched image copied.");
    } else {
      console.log("image png is not suported");
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
