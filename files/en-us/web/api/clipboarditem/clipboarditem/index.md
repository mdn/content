---
title: "ClipboardItem: ClipboardItem() constructor"
short-title: ClipboardItem()
slug: Web/API/ClipboardItem/ClipboardItem
page-type: web-api-constructor
browser-compat: api.ClipboardItem.ClipboardItem
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

The **`ClipboardItem()`** constructor creates a new {{domxref("ClipboardItem")}} object, which represents data to be stored or retrieved via the [Clipboard API](/en-US/docs/Web/API/Clipboard_API) {{domxref("clipboard.write()")}} and {{domxref("clipboard.read()")}} methods, respectively.

> [!NOTE]
> The `read()` and `write()` methods can be used to work with text strings and arbitrary data items represented by {{domxref("Blob")}} instances. However, if you are solely working with text, it is more convenient to use the {{domxref("Clipboard.readText()")}} and {{domxref("Clipboard.writeText()")}} methods.

> [!NOTE]
> Image format support varies by browser. See the [browser compatibility table](/en-US/docs/Web/API/Clipboard#browser_compatibility) for the `Clipboard` interface.

## Syntax

```js-nolint
new ClipboardItem(data)
new ClipboardItem(data, options)
```

### Parameters

- `data`
  - : An {{jsxref("Object")}} with one or more properties, each representing a different format of the same clipboard entry.
    The key of each property is a {{Glossary("MIME type")}}, such as `"text/plain"` or `"text/html"`, and its value is the data for that format.

    Each value can be represented as one of the following:
    - a {{domxref("Blob")}}
    - a string
    - a {{jsxref("Promise")}} that resolves to either a `Blob` or string.
- `options` {{optional_inline}}
  - : An object with the following properties:
    - `presentationStyle` {{optional_inline}}
      - : One of the three strings: `unspecified`, `inline` or `attachment`.
        The default is `unspecified`.

        `inline` signifies to apps that receive the paste that the `ClipboardItem` should be inserted inline at the point of paste. `attachment` signifies to apps that receive the paste that the `ClipboardItem` should be added as an attachment. `unspecified` doesn't signify any information to apps that receive the paste.

## Examples

The following example requests a PNG image using {{domxref("Window/fetch", "fetch()")}} uses it, via the {{domxref("Response.blob()")}} method, to create a new {{domxref("ClipboardItem")}}.
This item is then written to the clipboard, using the {{domxref("Clipboard.write()")}} method.

For an example that writes and reads back several MIME-type representations in one `ClipboardItem`, see [Reading multiple formats from the clipboard](/en-US/docs/Web/API/Clipboard/read#reading_multiple_formats_from_the_clipboard).

> [!NOTE]
> {{domxref("Clipboard.write()")}} takes an array of `ClipboardItem` objects, but only the first item in the array is guaranteed to be used.
> To give a single clipboard entry multiple formats, add more MIME-type keys to the `data` object passed into one `ClipboardItem()` call, rather than adding more items to the array.

```js
async function writeClipImg() {
  try {
    if (ClipboardItem.supports("image/png")) {
      const imgURL = "/my-image.png";
      const data = await fetch(imgURL);
      const blob = await data.blob();
      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob,
        }),
      ]);
      console.log("Fetched image copied.");
    } else {
      console.log("image png is not supported");
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
