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

Copy the butterfly image on the left using the "Copy image" context menu item, then click in the empty frame on the right.
The example will fetch the image data and display the image data in the empty frame.

> **Note:** Chromium browsers gate access to the `read()` method using the [Permissions API](/en-US/docs/Web/API/Permissions_API) `clipboard-read` permission (now removed from specification) and do not require transient activation.
> If prompted, you will need to grant permission in order to paste the image.

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

Chromium browsers gate access to the clipboard using the [Permissions API](/en-US/docs/Web/API/Permissions_API) permission `clipboard-read`, while other browsers use transient activation.
On Chromium browsers we can check the permission using {{domxref("Permissions.query()")}}, but this will raise a `TypeError` exception on browsers where the permission is not supported.
To cope with the different implementations, we define the following `checkPermission()` function that returns the permission value if the permission exists, `undefined` if it does not (or cannot be retrieved), and re-throws the exception if there is any other error.

```js
async function checkPermission() {
  // Check the clipboard-read permission.
  // Catch and log exception if permission is not defined (TypeError)
  // On Firefox and Safari returns `undefined`
  try {
    const permission = await navigator.permissions.query({
      name: "clipboard-read",
    });
    return permission.state;
  } catch (error) {
    if (error instanceof TypeError) {
      // Permission not defined or unavailable.
      console.error(error.message);
      //returns undefined
    } else {
      // Rethrow other errors, such as invalid state.
      throw error;
    }
  }
}
```

The remaining code reads the clipboard when the destination element is clicked and copies the image data into the element.
It checks the result of the `checkPermission()` method defined above, and throws an error if permission is explicitly denied.
Otherwise it attempts to read the clipboard and will paste PNG image data if found.

```js
const destinationImage = document.querySelector("#destination");
destinationImage.addEventListener("click", pasteImage);

async function pasteImage() {
  try {
    const permission = await checkPermission();
    if (permission === "denied") {
      throw new Error("Not allowed to read clipboard.");
    }

    // Read clipboard if not defined (or permission not supported).
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

{{EmbedLiveSample("Reading image data", "100%", "200")}}

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
