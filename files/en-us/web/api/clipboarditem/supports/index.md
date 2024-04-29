---
title: "ClipboardItem: supports() static method"
short-title: supports()
slug: Web/API/ClipboardItem/supports
page-type: web-api-static-method
browser-compat: api.ClipboardItem.supports_static
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

The **`supports()`** static method of the {{domxref("ClipboardItem")}} interface indicates whether or not the given {{Glossary("MIME type")}} is supported by the clipboard.

## Syntax

```js-nolint
supports(type)
```

### Parameters

- `type`
  - : A string representing a {{Glossary("MIME type")}}.

### Return value

A boolean: `true` if the given {{Glossary("MIME type")}} is supported by the clipboard, `false` otherwise.

## Examples

### Writing an image to the clipboard

In the following example, we're writing an image to the clipboard.

We use `supports()` to check whether the `"image/png"` MIME type is supported by the clipboard before fetching the image and writing it using {{domxref("clipboard.write()")}}.

We also use a [`try..catch`](/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) statement to catch any errors while writing the data to the clipboard.

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
