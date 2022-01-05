---
title: Response.body
slug: Web/API/Response/body
tags:
  - API
  - Fetch
  - Property
  - Reference
  - Streams
  - Response
browser-compat: api.Response.body
---
{{APIRef("Fetch")}}

The **`body`** read-only property of the {{domxref("Response")}} interface is a {{domxref("ReadableStream")}} of the body contents.

## Value

A {{domxref("ReadableStream")}}.

## Example

In our [simple stream pump](https://mdn.github.io/dom-examples/streams/simple-pump/) example we fetch an image,
expose the response's stream using `response.body`, create a reader using {{domxref("ReadableStream.getReader()", "ReadableStream.getReader()")}},
then enqueue that stream's chunks into a second, custom readable stream — effectively creating an identical copy of the image.

```js
const image = document.getElementById('target');

// Fetch the original image
fetch('./tortoise.png')
// Retrieve its body as ReadableStream
.then(response => response.body)
.then(body => {
  const reader = body.getReader();

  return new ReadableStream({
    start(controller) {
      return pump();

      function pump() {
        return reader.read().then(({ done, value }) => {
          // When no more data needs to be consumed, close the stream
          if (done) {
            controller.close();
            return;
          }

          // Enqueue the next data chunk into our target stream
          controller.enqueue(value);
          return pump();
        });
      }
    }
  })
})
.then(stream => new Response(stream))
.then(response => response.blob())
.then(blob => URL.createObjectURL(blob))
.then(url => console.log(image.src = url))
.catch(err => console.error(err));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Fetch API](/en-US/docs/Web/API/Fetch_API)
- [Streams API](/en-US/docs/Web/API/Streams_API)
- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
