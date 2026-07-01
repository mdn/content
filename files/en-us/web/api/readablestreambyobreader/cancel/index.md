---
title: "ReadableStreamBYOBReader: cancel() method"
short-title: cancel()
slug: Web/API/ReadableStreamBYOBReader/cancel
page-type: web-api-instance-method
browser-compat: api.ReadableStreamBYOBReader.cancel
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

The **`cancel()`** method of the {{domxref("ReadableStreamBYOBReader")}} interface returns a {{jsxref("Promise")}} that resolves when the stream is canceled.
Calling this method signals a loss of interest in the stream by a consumer.

> [!NOTE]
> If the reader is active, the `cancel()` method behaves the same as that for the associated stream ({{domxref("ReadableStream.cancel()")}}).

## Syntax

```js-nolint
cancel()
cancel(reason)
```

### Parameters

- `reason` {{optional_inline}}
  - : A human-readable reason for the cancellation. The underlying source may or may not use it.

### Return value

A {{jsxref("Promise")}}, which fulfills with the value given in the `reason` parameter.

### Exceptions

- {{jsxref("TypeError")}}
  - : The source object is not a `ReadableStreamBYOBReader`, or the stream has no owner.

## Examples

This example code calls the `cancel()` method when a button is pressed, passing the string "user choice" as a reason.
The promise resolves when cancellation completes.

```js
button.addEventListener("click", () => {
  reader.cancel("user choice").then(() => console.log(`cancel complete`));
});
```

Note that this code can be seen running in the [Using readable byte streams](/en-US/docs/Web/API/Streams_API/Using_readable_byte_streams#result) example code (press the **Cancel stream** button).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ReadableStreamBYOBReader.ReadableStreamBYOBReader", "ReadableStreamBYOBReader()")}} constructor
- [Using readable byte stream](/en-US/docs/Web/API/Streams_API/Using_readable_byte_streams)
