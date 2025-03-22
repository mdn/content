---
title: "ClipboardItem: supports() static method"
short-title: supports()
slug: Web/API/ClipboardItem/supports_static
page-type: web-api-static-method
browser-compat: api.ClipboardItem.supports_static
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

The **`supports()`** static method of the {{domxref("ClipboardItem")}} interface returns `true` if the given {{Glossary("MIME type")}} is supported by the clipboard, and `false` otherwise.

Note that the [Clipboard API](/en-US/docs/Web/API/Clipboard_API) mandates support for plain text, HTML and PNG files.
The `supports()` method will always return `true` for these MIME types, so testing them is unnecessary.

## Syntax

```js-nolint
supports(type)
```

### Parameters

- `type`

  - : A string indicating the {{Glossary("MIME type")}} to test.

    These MIME types are always supported:

    - `text/plain`
    - `text/html`
    - `image/png`

    These MIME types may be supported:

    - `image/svg+xml`
    - Custom MIME-type formats starting with `"web "`.
      The custom type (without the `"web "` prefix), must have the correct formatting for a MIME type.

### Return value

`true` if the given {{Glossary("MIME type")}} is supported by the clipboard, `false` otherwise.

## Examples

### Writing an image to the clipboard

The following example fetches an SVG image, represents it as a {{domxref("Blob")}}, and then writes it to the clipboard.

We use `supports()` to check whether the `"image/svg+xml"` MIME type is supported by the clipboard before fetching the image and writing it using {{domxref("clipboard.write()")}}.
We also wrap the whole function body in a [`try...catch`](/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) statement to catch any other errors, such as `ClipboardItem` itself not being supported.

```js
async function writeClipImg() {
  try {
    if (ClipboardItem.supports("image/svg+xml")) {
      const imgURL = "/my-image.svg";
      const data = await fetch(imgURL);
      const blob = await data.blob();
      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob,
        }),
      ]);
      console.log("Fetched image copied to clipboard.");
    } else {
      console.log("SVG image not supported by clipboard");
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
