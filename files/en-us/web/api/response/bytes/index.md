---
title: "Response: bytes() method"
short-title: bytes()
slug: Web/API/Response/bytes
page-type: web-api-instance-method
browser-compat: api.Response.bytes
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

The **`bytes()`** method of the {{domxref("Response")}} interface takes a {{domxref("Response")}} stream and reads it to completion.
It returns a promise that resolves with a {{jsxref("Uint8Array")}}.

## Syntax

```js-nolint
bytes()
```

### Parameters

None.

### Return value

A promise that resolves with an {{jsxref("Uint8Array")}}.

### Exceptions

- {{domxref("DOMException")}} `AbortError`
  - : The request was [aborted](/en-US/docs/Web/API/Fetch_API/Using_Fetch#canceling_a_request).
- {{jsxref("TypeError")}}
  - : Thrown for one of the following reasons:
    - The response body is [disturbed or locked](/en-US/docs/Web/API/Fetch_API/Using_Fetch#locked_and_disturbed_streams).
    - There was an error decoding the body content (for example, because the {{httpheader("Content-Encoding")}} header is incorrect).
- {{jsxref("RangeError")}}
  - : There was a problem creating the associated `ArrayBuffer`.
    For example, if the data size is more than [`Number.MAX_SAFE_INTEGER`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER).

## Examples

### Fetching and decoding a file

The code below shows how you might fetch a text file, return the body as a {{jsxref("Uint8Array")}}, and then decode this into a string.

```js
const response = await fetch("https://www.example.com/textfile.txt");
const textFile = await response.bytes();
const string = new TextDecoder().decode(textFile);
console.log(string);
```

### Getting an image file signature

This example demonstrates how you can use `bytes()` to read the signature bytes of a number of image files, and identify the type.

#### HTML

First we define a {{htmlelement("select")}} element for choosing the file type, with corresponding values that indicate the specific file on WikiMedia commons to fetch.

```html
<label for="file-select">Choose a file:</label>

<select name="Files" id="file-select">
  <option value="">--Select an image type--</option>
  <option
    value="https://upload.wikimedia.org/wikipedia/commons/7/70/Example.png">
    PNG
  </option>
  <option
    value="https://upload.wikimedia.org/wikipedia/commons/a/a9/Example.jpg">
    JPG
  </option>
  <option
    value="https://upload.wikimedia.org/wikipedia/commons/8/8f/Example.gif">
    GIF89a
  </option>
</select>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

The code first checks if the `bytes()` method is supported.
If the method is supported it adds an event handler for the [`change` event](/en-US/docs/Web/API/HTMLElement/change_event) event on the `<select>` element.
When the value changes, it passes the value of the selection (a URL for an image file) to the `checkSignature()` method defined below.
If the method is not supported it logs this information.

```js
if ("bytes" in Response.prototype) {
  const selectFileElement = document.getElementById("file-select");
  selectFileElement.addEventListener("change", (event) => {
    try {
      checkSignature(event.target.value);
    } catch (e) {
      log(e);
    }
  });
} else {
  log("Response.bytes() not supported");
}
```

The `checkSignature()` method is defined below.
This fetches a file at the given `url`, and uses `response.bytes()` to get its contents as a byte array.
The initial bytes are then compared to the initial signature bytes of a number of common file types.
The file name and the file type are then logged.

```js
async function checkSignature(url) {
  if (url == "") return;
  log(`File: ${url}`);
  const response = await fetch(url);
  const image = await response.bytes();

  // File signatures from: https://en.wikipedia.org/wiki/List_of_file_signatures
  const jpgSignature = [0xff, 0xd8, 0xff, 0xe0];
  const pngSignature = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
  const gif89aSignature = [0x47, 0x49, 0x46, 0x38, 0x39, 0x61];

  if (
    image
      .slice(0, jpgSignature.length)
      .every((byte, index) => byte === jpgSignature[index])
  ) {
    log(`JPG signature: FF D8 FF E0`);
  } else if (
    image
      .slice(0, pngSignature.length)
      .every((byte, index) => byte === pngSignature[index])
  ) {
    log(`PNG signature: 89 50 4E 47 0D 0A 1A 0A`);
  } else if (
    image
      .slice(0, gif89aSignature.length)
      .every((byte, index) => byte === gif89aSignature[index])
  ) {
    log(`GIF (GIF89a) signature: 47 49 46 38 39 61`);
  } else {
    log("Unknown format");
  }
}
```

#### Result

Choose an image type using the selection list.
The log should then display the file name, along with the file type that was determined from the file's signature.

{{EmbedLiveSample("Getting an image file signature", "100", "200px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
