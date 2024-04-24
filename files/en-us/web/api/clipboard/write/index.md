---
title: "Clipboard: write() method"
short-title: write()
slug: Web/API/Clipboard/write
page-type: web-api-instance-method
browser-compat: api.Clipboard.write
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

The **`write()`** method of the {{domxref("Clipboard")}} interface writes arbitrary data to the clipboard, such as images, fulfilling the returned {{jsxref("Promise")}} on completion.
This can be used to implement cut and copy functionality.

The method can in theory write arbitrary data (unlike {{domxref("Clipboard.writeText", "writeText()")}}, which can only write text).
Browsers commonly support writing text, HTML, and PNG image data — see [browser compatibility](#browser_compatibility) for more information.

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
  if (ClipboardItem.supports("text/plain")) {
    const type = "text/plain";
    const blob = new Blob([text], { type });
    const data = [new ClipboardItem({ [type]: blob })];
    await navigator.clipboard.write(data);
  } else {
    console.log("text/plain is not supported");
  }
}
```

The `setClipboard()` method begins with an if statement that returns true or false based on whether the clipboard supports 'text/plain' MIME type. If the clipboard does support the MIME type, then a new {{domxref("Blob")}} object is created.
This object is required to construct a {{domxref("ClipboardItem")}} object which is sent to the clipboard.
The {{domxref("Blob")}} constructor takes in the content we want to copy and its type.
This {{domxref("Blob")}} object can be derived from many sources; for example, a [canvas](/en-US/docs/Web/API/HTMLCanvasElement).

Next, we create a new {{domxref("ClipboardItem")}} object into which the blob will be placed for sending to the clipboard.
The key of the object passed to the {{domxref("ClipboardItem")}} constructor indicates the content type, the value indicates the content.
Then `write()` is called with `await`.
A `try..catch` block could be used to catch any errors writing the data.

### Write canvas contents to the clipboard

This example draws a blue rectangle to the canvas and writes the canvas to a blob in the clipboard when you click the canvas.
An event listener is triggered on [`paste` events](/en-US/docs/Web/API/Element/paste_event) in an element where we want to display the clipboard contents as an image.

The [FileReader API](/en-US/docs/Web/API/FileReader) allows us to read the blob using the [`readAsDataUrl`](/en-US/docs/Web/API/FileReader/readAsDataURL) method and create an `<img>` element with the canvas contents:

```js
const target = document.getElementById("target");
const canvas = document.getElementById("canvas");

// Set up canvas
const ctx = canvas.getContext("2d");
ctx.fillStyle = "cornflowerblue";
ctx.fillRect(0, 0, 100, 100);

canvas.addEventListener("click", copyCanvasContentsToClipboard);

async function copyCanvasContentsToClipboard() {
  if (ClipboardItem.supports('image/png')) {
    // Copy canvas to blob
    const blob = await canvas.toBlob();
    // Create ClipboardItem with blob and it's type, and add to an array
    const data = [new ClipboardItem({ [blob.type]: blob })];
    // Write the data to the clipboard
    await navigator.clipboard.write(data);
  } else {
    console.log("image/png is not supported");
  }
}

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
```

```html
<canvas id="canvas" width="100" height="100"></canvas>

<div id="target">Paste here.</div>
```

{{embedlivesample("write_canvas_contents_to_the_clipboard", "", "300")}}

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
