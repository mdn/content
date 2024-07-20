---
title: Sending and Receiving Binary Data
slug: Web/API/XMLHttpRequest_API/Sending_and_Receiving_Binary_Data
page-type: guide
---

{{DefaultAPISidebar("XMLHttpRequest API")}}

The `responseType` property of the XMLHttpRequest object can be set to change the expected response type from the server. Possible values are the empty string (default), `"arraybuffer"`, `"blob"`, `"document"`, `"json"`, and `"text"`. The `response` property will contain the entity body according to `responseType`, as an `ArrayBuffer`, `Blob`, `Document`, `JSON`, or string. This is `null` if the request is not complete or was not successful.

This example reads an image as a binary file and creates an 8-bit unsigned integer array from the raw bytes. Note that this will not decode the image and read the pixels. You will need a [png decoding library](https://github.com/foliojs/png.js) for that.

```js
const req = new XMLHttpRequest();
req.open("GET", "/myfile.png", true);
req.responseType = "arraybuffer";

req.onload = (event) => {
  const arrayBuffer = req.response; // Note: not req.responseText
  if (arrayBuffer) {
    const byteArray = new Uint8Array(arrayBuffer);
    byteArray.forEach((element, index) => {
      // do something with each byte in the array
    });
  }
};

req.send(null);
```

You can also read a binary file as a {{domxref("Blob")}} by setting the string `"blob"` to the `responseType` property.

```js
const req = new XMLHttpRequest();
req.open("GET", "/myfile.png", true);
req.responseType = "blob";

req.onload = (event) => {
  const blob = req.response;
  // ...
};

req.send();
```

## Receiving binary data in older browsers

The `loadBinaryResource()` function shown below loads binary data from the specified URL, returning it to the caller.

```js
function loadBinaryResource(url) {
  const req = new XMLHttpRequest();
  req.open("GET", url, false);

  // XHR binary charset opt by Marcus Granado 2006 [http://mgran.blogspot.com]
  req.overrideMimeType("text/plain; charset=x-user-defined");
  req.send(null);
  return req.status === 200 ? req.responseText : "";
}
```

The magic happens in the `overrideMimeType` function, which forces the browser to treat it as plain text, using a user-defined character set. This tells the browser not to parse it, and to let the bytes pass through unprocessed.

```js
const filestream = loadBinaryResource(url);
const abyte = filestream.charCodeAt(x) & 0xff; // throw away high-order byte (f7)
```

The example above fetches the byte at offset `x` within the loaded binary data. The valid range for `x` is from 0 to `filestream.length-1`.

See [downloading binary streams with XMLHttpRequest](https://web.archive.org/web/20071103070418/http://mgran.blogspot.com/2006/08/downloading-binary-streams-with.html) for a detailed explanation.

## Sending binary data

The `send` method of the XMLHttpRequest has been extended to enable easy transmission of binary data by accepting an [`ArrayBuffer`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer), {{domxref("Blob")}}, or {{domxref("File")}} object.

The following example creates a text file on-the-fly and uses the `POST` method to send the "file" to the server. This example uses plain text, but you can imagine the data being a binary file instead.

```js
const req = new XMLHttpRequest();
req.open("POST", url, true);
req.onload = (event) => {
  // Uploaded
};

const blob = new Blob(["abc123"], { type: "text/plain" });

req.send(blob);
```

## Sending typed arrays as binary data

You can send JavaScript typed arrays as binary data as well.

```js
// Create a new array with fake data (Consecutive numbers (0 - 255), looping back to 0)
const array = new Uint8Array(512).map((v, i) => i);

const xhr = new XMLHttpRequest();
xhr.open("POST", url, false);
xhr.send(array);
```

This is building a 512-byte array of 8-bit integers and sending it; you can use any binary data you'd like, of course.

## Submitting forms and uploading files

See [`FormData`](/en-US/docs/Web/API/FormData).
