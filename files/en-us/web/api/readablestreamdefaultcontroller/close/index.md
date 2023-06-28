---
title: "ReadableStreamDefaultController: close() method"
short-title: close()
slug: Web/API/ReadableStreamDefaultController/close
page-type: web-api-instance-method
browser-compat: api.ReadableStreamDefaultController.close
---

{{APIRef("Streams")}}

The **`close()`** method of the
{{domxref("ReadableStreamDefaultController")}} interface closes the associated stream.

Readers will still be able to read any previously-enqueued chunks from the stream,
but once those are read, the stream will become closed. If you want to completely get
rid of the stream and discard any enqueued chunks, you'd use
{{domxref("ReadableStream.cancel()")}} or
{{domxref("ReadableStreamDefaultReader.cancel()")}}.

## Syntax

```js-nolint
close()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the source object is not a `ReadableStreamDefaultController`.

## Examples

In the following simple example, a custom `ReadableStream` is created using
a constructor (see our [Simple random stream example](https://mdn.github.io/dom-examples/streams/simple-random-stream/) for the full code). The `start()` function generates a
random string of text every second and enqueues it into the stream. A
`cancel()` function is also provided to stop the generation if
{{domxref("ReadableStream.cancel()")}} is called for any reason.

When a button is pressed, the generation is stopped, the stream is closed using
{{domxref("ReadableStreamDefaultController.close()")}}, and another function is run,
which reads the data back out of the stream.

```js
let interval;
const stream = new ReadableStream({
  start(controller) {
    interval = setInterval(() => {
      let string = randomChars();

      // Add the string to the stream
      controller.enqueue(string);

      // show it on the screen
      let listItem = document.createElement("li");
      listItem.textContent = string;
      list1.appendChild(listItem);
    }, 1000);

    button.addEventListener("click", () => {
      clearInterval(interval);
      fetchStream();
      controller.close();
    });
  },
  pull(controller) {
    // We don't really need a pull in this example
  },
  cancel() {
    // This is called if the reader cancels,
    // so we should stop generating strings
    clearInterval(interval);
  },
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using readable streams](/en-US/docs/Web/API/Streams_API/Using_readable_streams)
- {{domxref("ReadableStreamDefaultController")}}
