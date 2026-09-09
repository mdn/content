---
title: "Blob: textStream() method"
short-title: textStream()
slug: Web/API/Blob/textStream
page-type: web-api-instance-method
browser-compat: api.Blob.textStream
---

{{APIRef("File API")}}{{AvailableInWorkers}}

The **`textStream()`** method of the {{domxref("Blob")}} interface returns a {{domxref("ReadableStream")}} that can be used to read the contents of the `Blob` in chunks of UTF-8.

This provides an easier mechanism for streaming the content than piping a {{domxref("Blob.stream()")}} byte stream through a {{domxref("TextDecoderStream")}}.

> [!NOTE]
> The `textStream()` method differs from {{domxref("FileReader.readAsText()")}} in that it always uses UTF-8 encoding, whereas `readAsText()` has a parameter that sets the encoding.

## Syntax

```js-nolint
textStream()
```

### Parameters

None.

### Return value

A {{domxref("ReadableStream")}}.

## Examples

### Reading blob content as a text stream

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
- {{domxref("Blob.stream()")}}
