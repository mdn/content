---
title: Sending and Receiving Binary Data
slug: Web/API/XMLHttpRequest/Sending_and_Receiving_Binary_Data
page-type: guide
tags:
  - AJAX
  - FileReader
  - MIME
  - XMLHttpRequest
---
## Receiving binary data using JavaScript typed arrays

The `responseType` property of the XMLHttpRequest object can be set to change the expected response type from the server. Possible values are the empty string (default), `"arraybuffer"`, `"blob"`, `"document"`, `"json"`, and `"text"`. The `response` property will contain the entity body according to `responseType`, as an `ArrayBuffer`, `Blob`, `Document`, `JSON`, or string. This is `null` if the request is not complete or was not successful.

This example reads an image as a binary file and creates an 8-bit unsigned integer array from the raw bytes. Note that this will not decode the image and read the pixels. You will need a [png decoding library](https://github.com/foliojs/png.js) for that.

```js
const oReq = new XMLHttpRequest();
oReq.open("GET", "/myfile.png", true);
oReq.responseType = "arraybuffer";

oReq.onload = function (oEvent) {
  const arrayBuffer = oReq.response; // Note: not oReq.responseText
  if (arrayBuffer) {
    const byteArray = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteArray.byteLength; i++) {
      // do something with each byte in the array
    }
  }
};

oReq.send(null);
```

You can also read a binary file as a {{domxref("Blob")}} by setting the string `"blob"` to the `responseType` property.

```js
const oReq = new XMLHttpRequest();
oReq.open("GET", "/myfile.png", true);
oReq.responseType = "blob";

oReq.onload = function(oEvent) {
  const blob = oReq.response;
  // ...
};

oReq.send();
```

## Receiving binary data in older browsers

The `load_binary_resource()` function shown below loads binary data from the specified URL, returning it to the caller.

```js
function load_binary_resource(url) {
  const req = new XMLHttpRequest();
  req.open('GET', url, false);
  //XHR binary charset opt by Marcus Granado 2006 [http://mgran.blogspot.com]
  req.overrideMimeType('text\/plain; charset=x-user-defined');
  req.send(null);
  if (req.status != 200) return '';
  return req.responseText;
}
```

The magic happens in line 5, which overrides the MIME type, forcing the browser to treat it as plain text, using a user-defined character set. This tells the browser not to parse it, and to let the bytes pass through unprocessed.

```js
const filestream = load_binary_resource(url);
const abyte = filestream.charCodeAt(x) & 0xff; // throw away high-order byte (f7)
```

The example above fetches the byte at offset `x` within the loaded binary data. The valid range for `x` is from 0 to `filestream.length-1`.

See [downloading binary streams with XMLHttpRequest](https://web.archive.org/web/20071103070418/http://mgran.blogspot.com/2006/08/downloading-binary-streams-with.html) for a detailed explanation. See also [downloading files](/en-US/docs/Code_snippets/Downloading_Files).

## Sending binary data

The `send` method of the XMLHttpRequest has been extended to enable easy transmission of binary data by accepting an [`ArrayBuffer`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer), {{domxref("Blob")}}, or {{domxref("File")}} object.

The following example creates a text file on-the-fly and uses the `POST` method to send the "file" to the server. This example uses plain text, but you can imagine the data being a binary file instead.

```js
const oReq = new XMLHttpRequest();
oReq.open("POST", url, true);
oReq.onload = function (oEvent) {
  // Uploaded.
};

const blob = new Blob(['abc123'], {type: 'text/plain'});

oReq.send(blob);
```

## Sending typed arrays as binary data

You can send JavaScript typed arrays as binary data as well.

```js
const myArray = new ArrayBuffer(512);
const longInt8View = new Uint8Array(myArray);

// generate some data
for (let i=0; i< longInt8View.length; i++) {
  longInt8View[i] = i % 256;
}

const xhr = new XMLHttpRequest;
xhr.open("POST", url, false);
xhr.send(myArray);
```

This is building a 512-byte array of 8-bit integers and sending it; you can use any binary data you'd like, of course.

> **Note:** Support for sending [`ArrayBuffer`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) objects using XMLHttpRequest was added to Gecko 9.0 {{geckoRelease("9.0")}}. **Add information about other browsers' support here.**

## Submitting forms and uploading files

Please, read [this paragraph](/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#submitting_forms_and_uploading_files).

{{APIRef("XMLHttpRequest")}}
