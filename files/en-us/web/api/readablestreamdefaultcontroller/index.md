---
title: ReadableStreamDefaultController
slug: Web/API/ReadableStreamDefaultController
page-type: web-api-interface
browser-compat: api.ReadableStreamDefaultController
---

{{APIRef("Streams")}}

The **`ReadableStreamDefaultController`** interface of the [Streams API](/en-US/docs/Web/API/Streams_API) represents a controller allowing control of a {{domxref("ReadableStream")}}'s state and internal queue. Default controllers are for streams that are not byte streams.

## Constructor

None. `ReadableStreamDefaultController` instances are created automatically during `ReadableStream` construction.

## Instance properties

- {{domxref("ReadableStreamDefaultController.desiredSize")}} {{ReadOnlyInline}}
  - : Returns the desired size required to fill the stream's internal queue.

## Instance methods

- {{domxref("ReadableStreamDefaultController.close()")}}
  - : Closes the associated stream.
- {{domxref("ReadableStreamDefaultController.enqueue()")}}
  - : Enqueues a given chunk in the associated stream.
- {{domxref("ReadableStreamDefaultController.error()")}}
  - : Causes any future interactions with the associated stream to error.

## Examples

In the following simple example, a custom `ReadableStream` is created using a constructor (see our [Simple random stream example](https://mdn.github.io/dom-examples/streams/simple-random-stream/) for the full code). The `start()` function generates a random string of text every second and enqueues it into the stream. A `cancel()` function is also provided to stop the generation if {{domxref("ReadableStream.cancel()")}} is called for any reason.

Note that a {{domxref("ReadableStreamDefaultController")}} object is provided as the parameter of the `start()` and `pull()` functions.

When a button is pressed, the generation is stopped, the stream is closed using {{domxref("ReadableStreamDefaultController.close()")}}, and another function is run, which reads the data back out of the stream.

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

- [Streams API concepts](/en-US/docs/Web/API/Streams_API)
- [Using readable streams](/en-US/docs/Web/API/Streams_API/Using_readable_streams)
- {{domxref("ReadableStream")}}
- [WHATWG Stream Visualizer](https://whatwg-stream-visualizer.glitch.me/), for a basic visualization of readable, writable, and transform streams.
- [Web-streams-polyfill](https://github.com/MattiasBuelens/web-streams-polyfill) or [sd-streams](https://github.com/stardazed/sd-streams) - polyfills
