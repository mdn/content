---
title: "Blob: textStream() method"
short-title: textStream()
slug: Web/API/Blob/textStream
page-type: web-api-instance-method
browser-compat: api.Blob.textStream
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

The **`textStream()`** method of the {{domxref("Blob")}} interface returns a {{domxref("ReadableStream")}}. Reading the stream returns UTF-8 text chunks containing the blob's content.

This provides an easier mechanism for streaming the content than piping a {{domxref("Blob.stream()")}} bytestream through a {{domxref("TextDecoderStream")}}.

## Syntax

```js-nolint
textStream()
```

### Parameters

None.

### Return value

A {{domxref("ReadableStream")}}.

## Examples

## Basic usage

This example shows how to read blob content as a text stream.

We create a sample `Blob`, obtain a `ReadableStream` of its content using `textStream()`, then read the text via a reader created using {{domxref("ReadableStream.getReader()")}}.

```js
const pElem = document.querySelector("p");

const obj = { hello: "world" };
const myBlob = new Blob([JSON.stringify(obj, null, 2)], {
  type: "application/json",
});

async function streamBlobText(blob) {
  const textStream = blob.textStream();
  // instead of
  // const textStream = blob.stream().pipeThrough(new TextDecoderStream());

  const reader = textStream.getReader();

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    pElem.textContent += value;
  }
}

streamBlobText(myBlob);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ReadableStream")}}
- {{domxref("ReadableStream.getReader()")}}
