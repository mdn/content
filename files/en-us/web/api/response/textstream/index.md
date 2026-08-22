---
title: "Response: textStream() method"
short-title: textStream()
slug: Web/API/Response/textStream
page-type: web-api-instance-method
browser-compat: api.Response.textStream
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

The **`textStream()`** method of the {{domxref("Response")}} interface returns a {{domxref("ReadableStream")}}. Reading the stream returns UTF-8 text chunks containing the response body.

This provides an easier mechanism for streaming the response body than piping the {{domxref("Response.body")}} bytestream through a {{domxref("TextDecoderStream")}}.

> [!NOTE]
> If invoked on a `Response` with a null body, for example a {{httpstatus(204)}} response, `textStream()` will return a valid empty stream.

## Syntax

```js-nolint
textStream()
```

### Parameters

None.

### Return value

A {{domxref("ReadableStream")}}.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the response body is [disturbed or locked](/en-US/docs/Web/API/Fetch_API/Using_Fetch#locked_and_disturbed_streams).

## Examples

## Basic usage

This example shows how to read a response body's text stream.

We {{domxref("fetch()")}} a URL, obtain a `ReadableStream` of its response body using `textStream()`, then read the text via a reader created using {{domxref("ReadableStream.getReader()")}}.

```js
const pElem = document.querySelector("p");

async function streamResponseText(url) {
  const response = await fetch(url);
  const textStream = response.textStream();
  // instead of
  // const textStream = response.body.pipeThrough(new TextDecoderStream());

  const reader = textStream.getReader();

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    pElem.textContent += value;
  }
}

streamResponseText("https://www.example.com");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ReadableStream")}}
- {{domxref("ReadableStream.getReader()")}}
