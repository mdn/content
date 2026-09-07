---
title: "Request: textStream() method"
short-title: textStream()
slug: Web/API/Request/textStream
page-type: web-api-instance-method
browser-compat: api.Request.textStream
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

The **`textStream()`** method of the {{domxref("Request")}} interface returns a {{domxref("ReadableStream")}} that can be used to read the contents of the request body in chunks of UTF-8.

This provides an easier mechanism for streaming the request body than piping the {{domxref("Request.body")}} byte stream through a {{domxref("TextDecoderStream")}}.

> [!NOTE]
> If invoked on a `Request` with a null body, for example a {{httpmethod("GET")}} request, `textStream()` will return a valid empty stream.

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
  - : Thrown if the request body is [disturbed or locked](/en-US/docs/Web/API/Fetch_API/Using_Fetch#locked_and_disturbed_streams).

## Examples

### Reading request body content as a text stream

This example shows how to read a request body as a text stream.

We create a sample `Request`, obtain a `ReadableStream` of its body using `textStream()`, then read the text via a reader created using {{domxref("ReadableStream.getReader()")}}.

```js
const pElem = document.querySelector("p");

const req = new Request("https://example.com", {
  method: "POST",
  body: '{"hello": "world"}',
});

async function streamRequestText(request) {
  const textStream = request.textStream();
  // instead of
  // const textStream = request.body.pipeThrough(new TextDecoderStream());

  const reader = textStream.getReader();

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    pElem.textContent += value;
  }
}

streamRequestText(req);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ReadableStream")}}
- {{domxref("ReadableStream.getReader()")}}
- {{domxref("Response.body")}}
- {{domxref("Response.textStream()")}}
