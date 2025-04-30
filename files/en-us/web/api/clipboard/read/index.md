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
Browsers commonly support reading text, HTML, and PNG image data.

## Syntax

```js-nolint
read()
read(formats)
```

### Parameters

- `formats` {{optional_inline}}

  - : An optional object with the following properties:

    - `unsanitized` {{optional_inline}}

      - : An {{jsxref("Array")}} of strings containing MIME types of data formats that should not be sanitized when reading from the clipboard.

        Certain browsers may sanitize the clipboard data when it is read, to prevent malicious content from being pasted into the document. For example, Chrome (and other Chromium-based browsers) sanitizes HTML data by stripping `<script>` tags and other potentially dangerous content. Use the `unsanitized` array to specify a list of MIME types that should not be sanitized.

### Return value

A {{jsxref("Promise")}} that resolves with an array of {{domxref("ClipboardItem")}} objects containing the clipboard's contents.

### Exceptions

- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if the reading from the clipboard is not allowed.

## Security considerations

Reading from the clipboard can only be done in a [secure context](/en-US/docs/Web/Security/Secure_Contexts).

Additional security requirements are covered in the [Security consideration](/en-US/docs/Web/API/Clipboard_API#security_considerations) section of the API overview topic.

## Examples

### Reading image data from clipboard

This example uses the `read()` method to read image data from the clipboard and paste it into an {{HTMLElement("img")}} element.

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
It logs an error if it is unable to use the `read()` method, or if the clipboard does not contain data in PNG format.

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

{{EmbedLiveSample("Reading image data from clipboard", "100%", "250", "", "", "", "clipboard-read")}}

> [!NOTE]
> If prompted, grant permission in order to paste the image.

### Reading data from the clipboard

This example uses the `read()` method to read data from the clipboard and log whatever data is stored in the clipboard.

This differs from the previous version in that it will display text, HTML, and image {{domxref("ClipboardItem")}} objects (rather than just images).

#### HTML

```html
<img id="source_jpg" src="butterfly.jpg" alt="JPG butterfly image" />
<div id="destination">Click here to copy clipboard data.</div>
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

#destination {
  min-height: 300px;
  min-width: 90%;
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

The remaining code reads the clipboard when the destination element is clicked and displays each {{domxref("ClipboardItem")}} element along with its MIME type.
It logs an error it is unable to use the `read()` method, or if the clipboard contains any other MIME type.

```js
const destinationDiv = document.querySelector("#destination");
destinationDiv.addEventListener("click", pasteData);

async function pasteData() {
  destinationDiv.innerText = ""; // Clear inner text
  try {
    const clipboardContents = await navigator.clipboard.read();
    for (const item of clipboardContents) {
      for (const mimeType of item.types) {
        const mimeTypeElement = document.createElement("p");
        mimeTypeElement.innerText = `MIME type: ${mimeType}`;
        destinationDiv.appendChild(mimeTypeElement);
        if (mimeType === "image/png") {
          const pngImage = new Image(); // Image constructor
          pngImage.src = "image1.png";
          pngImage.alt = "PNG image from clipboard";
          const blob = await item.getType("image/png");
          pngImage.src = URL.createObjectURL(blob);
          destinationDiv.appendChild(pngImage);
        } else if (mimeType === "text/html") {
          const blob = await item.getType("text/html");
          const blobText = await blob.text();
          const clipHTML = document.createElement("pre");
          clipHTML.innerText = blobText;
          destinationDiv.appendChild(clipHTML);
        } else if (mimeType === "text/plain") {
          const blob = await item.getType("text/plain");
          const blobText = await blob.text();
          const clipPlain = document.createElement("pre");
          clipPlain.innerText = blobText;
          destinationDiv.appendChild(clipPlain);
        } else {
          throw new Error(`${mimeType} not supported.`);
        }
      }
    }
  } catch (error) {
    log(error.message);
  }
}
```

#### Result

Copy some text or the butterfly (JPG) image below (to copy images right-click on them and then select "Copy image" from the context menu).
Select the indicated frame below to paste this information from the clipboard into the frame.

{{EmbedLiveSample("Reading data from the clipboard", "100%", "500", "", "", "", "clipboard-read")}}

Notes:

- Even though the butterfly image is a JPG file, when read from the clipboard it is a PNG.
- If prompted, you will need to grant permission in order to paste the image.
- This may not work on chromium browsers as the sample frame is not granted the [Permissions-Policy](/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy) `clipboard-read` and `clipboard-write` permissions ([required by Chromium browsers](/en-US/docs/Web/API/Clipboard_API#security_considerations)).

### Reading unsanitized HTML from the clipboard

This example uses the `formats` parameter to read HTML data from the clipboard and get the code in its original form, without the browser sanitizing it first.

#### HTML

```html
<textarea id="source" rows="5">
  <style>h1 {color: red;} p {color: blue;}</style>
  <h1>Hello world!</h1>
  <p>This is a test.</p>
  <script>alert('Hello world!');</script>
</textarea>
<button id="copy">Copy HTML</button>
<button id="paste_normal">Paste HTML</button>
<button id="paste_unsanitized">Paste unsanitized HTML</button>
<textarea id="destination" rows="5"></textarea>
```

#### CSS

```css
body {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
}

textarea {
  grid-column: 1 / span 3;
}
```

#### JavaScript

```js
const copyButton = document.getElementById("copy");
const pasteButton = document.getElementById("paste_normal");
const pasteUnsanitizedButton = document.getElementById("paste_unsanitized");
const sourceTextarea = document.getElementById("source");
const destinationTextarea = document.getElementById("destination");

copyButton.addEventListener("click", async () => {
  const text = sourceTextarea.value;
  const type = "text/html";
  const blob = new Blob([text], { type });
  const data = [new ClipboardItem({ [type]: blob })];

  try {
    await navigator.clipboard.write(data);
  } catch (error) {
    destinationTextarea.value = `Clipboard write failed: ${error}`;
  }
});

async function getHTMLFromClipboardContents(clipboardContents) {
  for (const item of clipboardContents) {
    if (item.types.includes("text/html")) {
      const blob = await item.getType("text/html");
      const blobText = await blob.text();
      return blobText;
    }
  }

  return null;
}

pasteButton.addEventListener("click", async () => {
  try {
    const clipboardContents = await navigator.clipboard.read();
    const html = await getHTMLFromClipboardContents(clipboardContents);
    destinationTextarea.value =
      html || "Could not find HTML data in the clipboard.";
  } catch (error) {
    destinationTextarea.value = `Clipboard read failed: ${error}`;
  }
});

pasteUnsanitizedButton.addEventListener("click", async () => {
  try {
    const clipboardContents = await navigator.clipboard.read({
      unsanitized: ["text/html"],
    });
    const html = await getHTMLFromClipboardContents(clipboardContents);
    destinationTextarea.value =
      html || "Could not find HTML data in the clipboard.";
  } catch (error) {
    destinationTextarea.value = `Clipboard read failed: ${error}`;
  }
});
```

#### Result

First click the "Copy HTML" button to write the HTML code from the first textarea to the clipboard. Then either click the "Paste HTML" button or the "Paste unsanitized HTML" button to paste the sanitized or unsanitized HTML code into the second textarea.

{{EmbedLiveSample("Reading unsanitized HTML from the clipboard", "100%", "250", "", "", "", "clipboard-read; clipboard-write")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Clipboard API](/en-US/docs/Web/API/Clipboard_API)
- [Unblocking clipboard access](https://web.dev/articles/async-clipboard) on web.dev
- [Unsanitized HTML in the Async Clipboard API](https://developer.chrome.com/docs/web-platform/unsanitized-html-async-clipboard) on developer.chrome.com
- {{domxref("Clipboard.readText()")}}
- {{domxref("Clipboard.writeText()")}}
- {{domxref("Clipboard.write()")}}
