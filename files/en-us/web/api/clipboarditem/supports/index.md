---
title: "ClipboardItem: supports() static method"
short-title: supports()
slug: Web/API/ClipboardItem/supports
page-type: web-api-static-method
browser-compat: api.ClipboardItem.supports
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

The **`supports()`** method of the {{domxref("ClipboardItem")}} interface returns true or false based on whether the specific {{Glossary("MIME type")}} type parameter is supprted by the clipboard.

## Syntax

```js-nolint
supports(type)
```

### Parameters

- `type`
  - : A valid {{Glossary("MIME type")}}.

### Return value

True or false value based on whether that {{Glossary("MIME type")}} is supported by the clipboard.

## Examples

In the following example, we're writing data to the clipboard via the {{domxref("clipboard.write()")}} method. Then we utilize {{domxref("ClipboardItem.supports", "supports()")}} to see if the {{Glossary("MIME type")}} is supported by the clipboard before attempting to write it to the clipboard. Using {{domxref("ClipboardItem.supports", "supports()")}} saves us from costly and unesseary CPU cycles from attempting to write unsupported formats to the clipboard. A `try..catch` block can be used to catch any errors while writing the data to the clipboard.

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
