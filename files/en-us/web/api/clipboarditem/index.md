---
title: ClipboardItem
slug: Web/API/ClipboardItem
page-type: web-api-interface
browser-compat: api.ClipboardItem
---

{{APIRef("Clipboard API")}}{{SecureContext_Header}}

The **`ClipboardItem`** interface of the [Clipboard API](/en-US/docs/Web/API/Clipboard_API) represents a single item format, used when reading or writing clipboard data using {{domxref("clipboard.read()")}} and {{domxref("clipboard.write()")}} respectively.

The benefit of having the **`ClipboardItem`** interface to represent data, is that it enables developers to cope with the varying scope of file types and data.

> **Note:** To work with text see the {{domxref("Clipboard.readText()")}} and {{domxref("Clipboard.writeText()")}} methods of the {{domxref("Clipboard")}} interface.

## Constructor

- {{domxref("ClipboardItem.ClipboardItem", "ClipboardItem()")}}
  - : Creates a new **`ClipboardItem`** object, with the {{Glossary("MIME type")}} as the key and {{domxref("Blob")}} as the value.

## Instance properties

_This interface provides the following properties._

- {{domxref("ClipboardItem.types", "types")}} {{ReadOnlyInline}}
  - : Returns an {{jsxref("Array")}} of MIME types available within the **`ClipboardItem`**.
- {{domxref("ClipboardItem.presentationStyle", "presentationStyle")}} {{ReadOnlyInline}}
  - : Returns one of the following: `"unspecified"`, `"inline"` or `"attachment"`.

## Static methods

_This interface defines the following methods._

- {{domxref("ClipboardItem.supports_static", "ClipboardItem.supports()")}}
  - : Checks whether a given {{Glossary("MIME type")}} is supported by the clipboard. This enables a website to detect whether a MIME type is supported by the clipboard before attempting to write data.

## Instance methods

_This interface defines the following methods._

- {{domxref("ClipboardItem.getType", "getType()")}}
  - : Returns a {{jsxref("Promise")}} that resolves with a {{domxref("Blob")}} of the requested {{Glossary("MIME type")}}, or an error if the MIME type is not found.

## Examples

### Writing to the clipboard

Here we use {{domxref("ClipboardItem.supports_static", "supports()")}} to check whether the `image/svg+xml` MIME data type is supported.
If it is, we fetch the image with the ["Fetch API"](/en-US/docs/Web/API/Fetch_API), and then read it into a {{domxref("Blob")}}, which we can use to create a `ClipboardItem` that is written to the clipboard.

```js
async function writeClipImg() {
  try {
    if (ClipboardItem.supports("image/svg+xml")) {
      const imgURL = "/myimage.svg";
      const data = await fetch(imgURL);
      const blob = await data.blob();
      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob,
        }),
      ]);
      console.log("Fetched image copied.");
    } else {
      console.log("SVG images are not supported by the clipboard.");
    }
  } catch (err) {
    console.error(err.name, err.message);
  }
}
```

### Reading from the clipboard

Here we're returning all items on the clipboard via the {{domxref("clipboard.read()")}} method.
Then utilizing the {{domxref("ClipboardItem.types")}} property to set the {{domxref("ClipboardItem.getType", "getType()")}} argument and return the corresponding blob object.

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
