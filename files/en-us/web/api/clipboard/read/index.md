---
title: "Clipboard: read() method"
short-title: read()
slug: Web/API/Clipboard/read
page-type: web-api-instance-method
browser-compat: api.Clipboard.read
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

The **`read()`** method of the {{domxref("Clipboard")}} interface requests a copy of the clipboard's contents, fulfilling the returned {{jsxref("Promise")}} with the data.

The method can in theory return arbitrary data (unlike {{domxref("Clipboard.readText", "readText()")}}, which can only return text).
Browsers commonly support reading text, HTML, and PNG image data — see [browser compatibility](#browser_compatibility) for more information.

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
  - : Thrown if the reading from the clipboard is not allowed.

## Security considerations

[Transient user activation](/en-US/docs/Web/Security/User_activation) is required.
The user has to interact with the page or a UI element in order for this feature to work.

## Examples

### Reading image data

This example uses the `read()` method to read image data from the clipboard.

#### HTML

```html
<img id="source" src="butterfly.jpg" alt="A butterfly" />
<img id="destination" />
<button id="reload" type="button">Reload</button>
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
#reload {
  display: block;
  margin: 0 1rem;
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

We also add code to reload and clear the example when the "Reload" button is pressed.

```js
const reload = document.querySelector("#reload");

reload.addEventListener("click", () => {
  window.location.reload(true);
});
```

The remaining code reads the clipboard when the destination element is clicked and copies the image data into the `destinationImage` element.
It logs an error it is unable to use the `read()` method, or if the clipboard does not contain data in PNG format.

```js
const destinationImage = document.querySelector("#destination");
destinationImage.addEventListener("click", pasteImage);

async function pasteImage() {
  try {
    const clipboardContents = await navigator.clipboard.read();
    for (const item of clipboardContents) {
      if (!item.types.includes("image/png")) {
        throw new Error("Clipboard does not contain PNG image data.");
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

Copy the butterfly image on the left by right-clicking the image and selecting "Copy image" from the context menu.
Then click on the empty frame on the right.
The example will fetch the image data from the clipboard and display the image in the empty frame.

{{EmbedLiveSample("Reading image data", "100%", "200")}}

> **Note:** Chromium browsers gate access to the `read()` method using the [Permissions API](/en-US/docs/Web/API/Permissions_API) `clipboard-read` permission API.
> If prompted, you will need to grant permission in order to paste the image.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Clipboard API](/en-US/docs/Web/API/Clipboard_API)
- [Image support for Async Clipboard article](https://web.dev/articles/async-clipboard)
- {{domxref("Clipboard.readText()")}}
- {{domxref("Clipboard.writeText()")}}
- {{domxref("Clipboard.write()")}}
