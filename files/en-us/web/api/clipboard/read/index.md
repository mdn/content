---
title: "Clipboard: read() method"
short-title: read()
slug: Web/API/Clipboard/read
page-type: web-api-instance-method
browser-compat: api.Clipboard.read
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

The **`read()`** method of the {{domxref("Clipboard")}} interface requests a copy of the clipboard's contents, fulfilling the returned {{jsxref("Promise")}} with the data.
The method can return arbitrary data, such as images, HTML markup, or plain text (unlike {{domxref("Clipboard.readText", "readText()")}}, which can only return text).

## Syntax

```js-nolint
read()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves with an array of {{domxref("ClipboardItem")}} objects containing the clipboard's contents.

### Exceptions

- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if the access to read the clipboard is not allowed.

## Security considerations

[Transient user activation](/en-US/docs/Web/Security/User_activation) is required.
The user has to interact with the page or a UI element in order for this feature to work.

## Examples

### Reading image data

This example uses the `read()` method to read image data from the clipboard.

Copy the butterfly image on the left using the "Copy image" context menu item, then click in the empty frame on the right.
The example will fetch the image data and display the image data in the empty frame.

> **Note:** Browsers that gate access to the method using the [Permissions API](/en-US/docs/Web/API/Permissions_API) `clipboard-read` permission (now removed from specification) may require you to grant permission in order to paste the image.

#### HTML

```html
<p>
  Right-click on the butterfly image and then select "Copy Image". Click on the
  right-side placeholder to paste.
</p>
<img id="source" src="butterfly.jpg" alt="A butterfly" />
<img id="destination" />
<p id="log"></p>
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

This code provides a mechanism to log any errors to the element with id `log`.

```js
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `Error: ${text}`;
}
```

This code reads the clipboard when the destination element is clicked and copies the image data into the element.

```js
const destinationImage = document.querySelector("#destination");
destinationImage.addEventListener("click", pasteImage);

async function pasteImage() {
  try {
    const clipboardContents = await navigator.clipboard.read();
    for (const item of clipboardContents) {
      if (!item.types.includes("image/png")) {
        throw new Error("Clipboard does not contain image data.");
      }
      const blob = await item.getType("image/png");
      destinationImage.src = URL.createObjectURL(blob);
    }
  } catch (error) {
    log(error.message);
  }
}
```

#### Result

{{EmbedLiveSample("Reading image data", "100%", "200")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Clipboard API](/en-US/docs/Web/API/Clipboard_API)
- [Image support for Async Clipboard article](https://web.dev/articles/async-clipboard)
