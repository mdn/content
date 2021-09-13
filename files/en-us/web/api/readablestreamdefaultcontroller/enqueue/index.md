---
title: ReadableStreamDefaultController.enqueue()
slug: Web/API/ReadableStreamDefaultController/enqueue
tags:
  - API
  - Method
  - ReadableStreamDefaultController
  - Reference
  - Streams
  - enqueue
browser-compat: api.ReadableStreamDefaultController.enqueue
---
{{APIRef("Streams")}}

The **`enqueue()`** method of the
{{domxref("ReadableStreamDefaultController")}} interface enqueues a given chunk in the
associated stream.

## Syntax

```js
readableStreamDefaultController.enqueue(chunk);
```

### Parameters

- _chunk_
  - : The chunk to enqueue.

### Return value

`undefined`.

### Exceptions

- TypeError
  - : The source object is not a `ReadableStreamDefaultController`.

## Examples

In the following simple example, a custom `ReadableStream` is created using
a constructor (see our [Simple random
stream example](https://mdn.github.io/dom-examples/streams/simple-random-stream/) for the full code). The `start()` function generates a
random string of text every second and enqueues it into the stream — see
`controller.enqueue(string)`. A `cancel()` function is also
provided to stop the generation if {{domxref("ReadableStream.cancel()")}} is called for
any reason.

When a button is pressed, the generation is stopped, the stream is closed using
{{domxref("ReadableStreamDefaultController.close()")}}, and another function is run,
which reads the data back out of the stream.

```js
const stream = new ReadableStream({
  start(controller) {
    interval = setInterval(() => {
      let string = randomChars();

      // Add the string to the stream
      controller.enqueue(string);

      // show it on the screen
      let listItem = document.createElement('li');
      listItem.textContent = string;
      list1.appendChild(listItem);
    }, 1000);

    button.addEventListener('click', function() {
      clearInterval(interval);
      fetchStream();
      controller.close();
    })
  },
  pull(controller) {
    // We don't really need a pull in this example
  },
  cancel() {
    // This is called if the reader cancels,
    // so we should stop generating strings
    clearInterval(interval);
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
