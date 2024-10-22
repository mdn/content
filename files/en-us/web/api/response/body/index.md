---
title: "Response: body property"
short-title: body
slug: Web/API/Response/body
page-type: web-api-instance-property
browser-compat: api.Response.body
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

The **`body`** read-only property of the {{domxref("Response")}} interface is a {{domxref("ReadableStream")}} of the body contents.

## Value

A {{domxref("ReadableStream")}}, or else [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) for any `Response` object [constructed](/en-US/docs/Web/API/Response/Response) with a null [`body`](/en-US/docs/Web/API/Response/Response#body) property, or for any actual [HTTP response](/en-US/docs/Web/HTTP/Messages#http_responses) that has no [body](/en-US/docs/Web/HTTP/Messages#response_body).

The stream is a [readable byte stream](/en-US/docs/Web/API/Streams_API/Using_readable_byte_streams), which supports zero-copy reading using a {{domxref("ReadableStreamBYOBReader")}}.

> [!NOTE]
> Current browsers don't actually conform to the spec requirement to set the `body` property to `null` for responses with no body (for example, responses to [`HEAD`](/en-US/docs/Web/HTTP/Methods/HEAD) requests, or [`204 No Content`](/en-US/docs/Web/HTTP/Status/204) responses).

## Examples

### Copying an image

In our [simple stream pump](https://mdn.github.io/dom-examples/streams/simple-pump/) example we fetch an image,
expose the response's stream using `response.body`, create a reader using {{domxref("ReadableStream.getReader()", "ReadableStream.getReader()")}},
then enqueue that stream's chunks into a second, custom readable stream — effectively creating an identical copy of the image.

```js
const image = document.getElementById("target");

// Fetch the original image
fetch("./tortoise.png")
  // Retrieve its body as ReadableStream
  .then((response) => response.body)
  .then((body) => {
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
      },
    });
  })
  .then((stream) => new Response(stream))
  .then((response) => response.blob())
  .then((blob) => URL.createObjectURL(blob))
  .then((url) => console.log((image.src = url)))
  .catch((err) => console.error(err));
```

### Creating a BYOB reader

In this example we construct a {{domxref("ReadableStreamBYOBReader")}} from the body using {{domxref("ReadableStream.getReader()", "ReadableStream.getReader({mode: 'byob'})")}}. We can then use this reader to implement zero copy transfer of the response data.

```js
async function getProducts(url) {
  const response = await fetch(url);
  const reader = response.body.getReader({ mode: "byob" });
  // read the response
}

getProducts(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Fetch API](/en-US/docs/Web/API/Fetch_API)
- [Streams API](/en-US/docs/Web/API/Streams_API)
- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
