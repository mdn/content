---
title: "Clipboard: read() method"
short-title: read()
slug: Web/API/Clipboard/read
page-type: web-api-instance-method
browser-compat: api.Clipboard.read
---

{{APIRef("Clipboard API")}}

The **`read()`** method of the
{{domxref("Clipboard")}} interface requests a copy of the clipboard's contents,
delivering the data to the returned {{jsxref("Promise")}} when the promise is
resolved. Unlike {{domxref("Clipboard.readText", "readText()")}}, the
`read()` method can return arbitrary data, such as images. This method can
also return text.

> **Note:** The asynchronous Clipboard and [Permissions APIs](/en-US/docs/Web/API/Permissions_API) are still in the
> process of being integrated into most browsers, so they often deviate from the
> official rules for permissions and the like. Be sure to review the [compatibility table](#browser_compatibility) before using these methods.

## Syntax

```js-nolint
read()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves with an array of {{domxref("ClipboardItem")}} objects
containing the clipboard's contents. The promise is rejected if permission to access the
clipboard is not granted.

## Security

[Transient user activation](/en-US/docs/Web/Security/User_activation) is required. The user has to interact with the page or a UI element in order for this feature to work.

To read from the clipboard, you must first have the `"clipboard-read"`
permission.

## Examples

### Reading image data

This example uses the `read()` method to read image data from the clipboard.

Try copying the butterfly image on the left using the "Copy image" context menu item, then click in the empty frame on the right.

The example will check or ask for permission to read the clipboard, then fetch the image data and display the image data in the empty frame.

> **Note:** At this time, while Firefox does implement
> `read()`, it does not recognize the `"clipboard-read"`
> permission, so attempting to use the [Permissions API](/en-US/docs/Web/API/Permissions_API) to manage access to
> the API will not work.

#### HTML

```html
<img id="source" src="butterfly.jpg" alt="A butterfly" />
<img id="destination" />
```

#### CSS

```css
img {
  height: 100px;
  width: 100px;
  margin: 0 1rem;
  border: 1px solid black;
}
```

#### JavaScript

```js
const destinationImage = document.querySelector("#destination");
destinationImage.addEventListener("click", pasteImage);

async function pasteImage() {
  try {
    const permission = await navigator.permissions.query({
      name: "clipboard-read",
    });
    if (permission.state === "denied") {
      throw new Error("Not allowed to read clipboard.");
    }
    const clipboardContents = await navigator.clipboard.read();
    for (const item of clipboardContents) {
      if (!item.types.includes("image/png")) {
        throw new Error("Clipboard contains non-image data.");
      }
      const blob = await item.getType("image/png");
      destinationImage.src = URL.createObjectURL(blob);
    }
  } catch (error) {
    console.error(error.message);
  }
}
```

#### Result

{{EmbedLiveSample("Reading image data")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Clipboard API](/en-US/docs/Web/API/Clipboard_API)
- [Async Clipboard API demo on Glitch](https://async-clipboard-api.glitch.me/)
- [Image support for Async Clipboard article](https://web.dev/async-clipboard/)
