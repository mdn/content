---
title: "ReadableStream: from() static method"
short-title: from()
slug: Web/API/ReadableStream/from_static
page-type: web-api-static-method
status:
  - experimental
browser-compat: api.ReadableStream.from_static
---

{{APIRef("Streams")}}{{AvailableInWorkers}}{{SeeCompatTable}}

The **`ReadableStream.from()`** static method returns a {{domxref("ReadableStream")}} from a provided iterable or async iterable object.

The method can be used to wrap iterable and async iterable objects as readable streams, including arrays, sets, arrays of promises, async generators, `ReadableStreams`, Node.js `readable` streams, and so on.

## Syntax

```js-nolint
ReadableStream.from(anyIterable)
```

### Parameters

- `anyIterable`
  - : An [iterable](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) or [async iterable](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) object.

### Return value

A {{domxref("ReadableStream")}}.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the passed parameter is not an iterable or async iterable (does not define the `[Symbol.iterator]()` or `[Symbol.asyncIterator]()` method).
    Also thrown if, during iteration, the result of the next step is not an object or is a promise that does not resolve to an object.

## Examples

### Convert an async iterator to a ReadableStream

This live example demonstrates how you can convert an async iterable to a `ReadableStream`, and then how this stream might be consumed.

#### HTML

The HTML is consists of single `<pre>` element, which is used for logging.

```html
<pre id="log"></pre>
```

#### JavaScript

The example code creates a `log()` function to write to the log HTML element.

```js
const logElement = document.getElementById("log");
function log(text) {
  logElement.innerText += `${text}\n`;
}
```

It then checks if the static method is supported, and if not, logs the result.

```js
if (!ReadableStream.from) {
  log("ReadableStream.from() is not supported");
}
```

The async iterable is an anonymous generator function that yields the values of 1, 2 and 3 when it is called three times.
This is passed to `ReadableStream.from()` to create the `ReadableStream`.

```js
// Define an asynchronous iterator
const asyncIterator = (async function* () {
  yield 1;
  yield 2;
  yield 3;
})();

// Create ReadableStream from iterator
const myReadableStream = ReadableStream.from(asyncIterator);
```

[Using readable streams](/en-US/docs/Web/API/Streams_API/Using_readable_streams) demonstrates several ways to consume a stream.
The code below uses a `for ...await` loop, as this method is the simplest.
Each iteration of the loop logs the current chunk from the stream.

```js
consumeStream(myReadableStream);

// Iterate a ReadableStream asynchronously
async function consumeStream(readableStream) {
  for await (const chunk of myReadableStream) {
    // Do something with each chunk
    // Here we just log the values
    log(`chunk: ${chunk}`);
  }
}
```

#### Result

The output of consuming the stream is shown below (if `ReadableStream.from()` is supported).

{{EmbedLiveSample("Convert an async iterator to a ReadableStream","100%", "80")}}

### Convert an Array to a ReadableStream

This example demonstrates how you can convert an `Array` to a `ReadableStream`.

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.getElementById("log");
function log(text) {
  logElement.innerText += `${text}\n`;
}

if (!ReadableStream.from) {
  log("ReadableStream.from() is not supported");
}
```

#### JavaScript

The iterable is just an array of strings that is passed to `ReadableStream.from()` to create the `ReadableStream`.

```js
// An Array of vegetable names
const vegetables = ["Carrot", "Broccoli", "Tomato", "Spinach"];

// Create ReadableStream from the Array
const myReadableStream = ReadableStream.from(vegetables);
```

```js hidden
consumeStream(myReadableStream);

// Iterate a ReadableStream asynchronously
async function consumeStream(readableStream) {
  for await (const chunk of myReadableStream) {
    // Do something with each chunk
    // Here we just log the values
    log(`chunk: ${chunk}`);
  }
}
```

We use the same approach as in the previous example log and to consume the stream, so that is not shown here.

#### Result

The output is shown below.

{{EmbedLiveSample("Convert an Array to a ReadableStream","100%", "100")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ReadableStream")}}
- [Using readable streams](/en-US/docs/Web/API/Streams_API/Using_readable_streams)
