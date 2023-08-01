---
title: "ReadableStream: from() static method"
short-title: from()
slug: Web/API/ReadableStream/from_static
page-type: web-api-static-method
status:
  - experimental
browser-compat: api.ReadableStream.from_static
---

{{APIRef("Streams")}}{{SeeCompatTable}}

The **`ReadableStream.from()`** static method returns a {{domxref("ReadableStream")}} from a provided iterable or async iterable object.

The method can be used to wrap iterable and async iterable objects as readable streams, including arrays, sets, async generators, `ReadableStreams`, Node.js `readable` streams, and so on.

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
  - : Thrown if the passed parameter is not an iterable or async iterable (does not define the `@@iterator` or `@@asyncIterator` method).
    Also thrown if, during iteration, the result of the next step is not an object or is a promise that does not resolve to an object.

### Examples

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.getElementById("log");
function log(text) {
  logElement.innerText += `${text}\n`;
}
```

```js
const asyncIterator = (async function* () {
  yield 1;
  yield 2;
  yield 3;
})();

let myReadableStream = ReadableStream.from(asyncIterator);
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

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ReadableStream")}}
- [Using readable streams](/en-US/docs/Web/API/Streams_API/Using_readable_streams)
