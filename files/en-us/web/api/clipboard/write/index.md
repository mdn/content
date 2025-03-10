---
title: "Clipboard: write() method"
short-title: write()
slug: Web/API/Clipboard/write
page-type: web-api-instance-method
browser-compat: api.Clipboard.write
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

The **`write()`** method of the {{domxref("Clipboard")}} interface writes arbitrary {{domxref("ClipboardItem")}} data such as images and text to the clipboard, fulfilling the returned {{jsxref("Promise")}} on completion.
This can be used to implement cut and copy functionality.

The method can in theory write arbitrary data (unlike {{domxref("Clipboard.writeText", "writeText()")}}, which can only write text).
Browsers commonly support writing text, HTML, and PNG image data.

## Syntax

```js-nolint
write(data)
```

### Parameters

- `data`
  - : An array of {{domxref("ClipboardItem")}} objects containing data to be written to the clipboard.

### Return value

A {{jsxref("Promise")}} which is resolved when the data has been written to the clipboard.
Note that if the underlying OS does not support multiple native clipboard items on the system clipboard, then only the first {{domxref("ClipboardItem")}} in the array is written.

The promise is rejected if the clipboard is unable to write to the clipboard.

### Exceptions

- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if writing to the clipboard is not allowed.

## Security considerations

Writing to the clipboard can only be done in a [secure context](/en-US/docs/Web/Security/Secure_Contexts).

Additional security requirements are covered in the [Security consideration](/en-US/docs/Web/API/Clipboard_API#security_considerations) section of the API overview topic.

## Examples

### Write text to the clipboard

This example function replaces the current contents of the clipboard with a specified string when a button is pressed.
Note that for this particular case, you could just as readily use `Clipboard.writeText()`.

```js
button.addEventListener("click", () => setClipboard("<empty clipboard>"));

async function setClipboard(text) {
  const type = "text/plain";
  const clipboardItemData = {
    [type]: text,
  };
  const clipboardItem = new ClipboardItem(clipboardItemData);
  await navigator.clipboard.write([clipboardItem]);
}
```

The `setClipboard()` function specifies a `"text/plain"` MIME type in the `type` constant, then specifies a `clipboardItemData` object with a single property — its key is the MIME type, and its value is the passed in text that we want to write to the clipboard. We then construct a new {{domxref("ClipboardItem")}} object into which the `clipboardItemData` object is passed.

Finally, `write()` is called with `await` to write the data to the clipboard.

### Write canvas contents to the clipboard

This example draws a blue rectangle to the canvas.
You can click the rectangle to copy the content of the canvas into the clipboard as an image, and then select another element and paste in the content from the clipboard.

#### HTML

The HTML just defines our `<canvas>` element and the `<div>` element with id `target` where the canvas image will be pasted.

```html
<canvas id="canvas" width="100" height="100"></canvas>

<div id="target">Paste here.</div>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 60px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

#### JavaScript

First we define an `async` function to copy a canvas to a blob.
This wraps the old callback-style {{domxref("HTMLCanvasElement.toBlob()")}} method into the more intuitive `Promise` based function.

```js
// Async/await method replacing toBlob() callback
async function getBlobFromCanvas(canvas) {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) {
        resolve(blob);
      } else {
        reject(new Error("Canvas toBlob failed"));
      }
    });
  });
}
```

Next we set up our canvas and add an event listener for the `click` event.

When you click the blue rectangle the code first checks if the clipboard supports data of type `"image/png"`.
If so, the canvas displaying the rectangle is copied into a blob, and then the blob is added to a `ClipboardItem` and then written to the clipboard.

```js
const canvas = document.getElementById("canvas");

// Set up canvas
const ctx = canvas.getContext("2d");
ctx.fillStyle = "cornflowerblue";
ctx.fillRect(0, 0, 100, 100);

canvas.addEventListener("click", copyCanvasContentsToClipboard);
const target = document.getElementById("target");

async function copyCanvasContentsToClipboard() {
  if (ClipboardItem.supports("image/png")) {
    // Copy canvas to blob
    try {
      const blob = await getBlobFromCanvas(canvas);
      // Create ClipboardItem with blob and it's type, and add to an array
      const data = [new ClipboardItem({ [blob.type]: blob })];
      // Write the data to the clipboard
      await navigator.clipboard.write(data);
      log("Copied");
    } catch (error) {
      log(error);
    }
  } else {
    log("image/png is not supported");
  }
}
```

Note that clipboard support for PNG files is a mandatory part of the specification, so we don't actually need the check using {{domxref("ClipboardItem.supports_static", "ClipboardItem.supports()")}} above (it always returns `true`).
The check would be more useful in cases where we're fetching an optional file type, or a resource where we don't know the type in advance.

We then define an event listener for [`paste` events](/en-US/docs/Web/API/Element/paste_event) on then element where we want to display the clipboard contents as an image.
The [FileReader API](/en-US/docs/Web/API/FileReader) allows us to read the blob using the [`readAsDataUrl`](/en-US/docs/Web/API/FileReader/readAsDataURL) method and create an `<img>` element with the canvas contents:

```js
target.addEventListener("paste", (event) => {
  const items = (event.clipboardData || window.clipboardData).items;
  const blob = items[0].getAsFile();
  const reader = new FileReader();

  reader.addEventListener("load", (event) => {
    const img = new Image();
    img.src = event.target.result;
    target.appendChild(img);
  });

  reader.readAsDataURL(blob);
});
```

```css hidden
body {
  font-family: sans-serif;
}
#target {
  border: 2px solid;
  padding: 1rem;
  height: 150px;
}
img {
  margin: 0.5rem;
}
```

#### Result

The result is shown below.
First click on the blue square, and then select the text "Paste here" and use your OS-specific keyboard combinations to paste from the clipboard (such as `Ctrl+V` on Windows).

{{embedlivesample("write_canvas_contents_to_the_clipboard", "", "420", "", "", "", "clipboard-write")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Clipboard API](/en-US/docs/Web/API/Clipboard_API)
- [Image support for Async Clipboard article](https://web.dev/articles/async-clipboard)
- {{domxref("Clipboard.writeText()")}}
- {{domxref("Clipboard.read()")}}
- {{domxref("Clipboard.readText()")}}
