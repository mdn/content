---
title: "ReadableByteStreamController: error() method"
short-title: error()
slug: Web/API/ReadableByteStreamController/error
page-type: web-api-instance-method
browser-compat: api.ReadableByteStreamController.error
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

The **`error()`** method of the {{domxref("ReadableByteStreamController")}} interface causes any future interactions with the associated stream to error with the specified reason.

This is commonly called by an underlying source to surface an error from the interface where it gets its data (such as a file-read or socket error).
It can also be called from elsewhere to trigger a stream error, for example if another part of the system that the stream relies on fails.

## Syntax

```js-nolint
error(errorObject)
```

### Parameters

- `errorObject`
  - : Any object that you want future interactions to fail with.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the source object is not a `ReadableByteStreamController`, or the stream is not readable for some other reason.

## Examples

The example in [Using readable byte streams > Creating a readable socket push byte stream](/en-US/docs/Web/API/Streams_API/Using_readable_byte_streams#creating_a_readable_socket_push_byte_stream) shows how you might use `error()` to manually trigger a stream error if another part of the system it relies on fails.

Specifically, the underlying source `start()` method calls `readRepeatedly()` to perform all setup operations and to make a request for data.
This returns a promise.
If there are any errors thrown when reading the data they will be caught by the chained `catch()` function.
In `catch()` we then call `error()` on the controller, passing the reason from the underlying source.

```js
function start(controller) {
  readRepeatedly().catch((e) => controller.error(e));
}

function readRepeatedly() {
  return socket.select2().then(() => {
    // …
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using readable byte streams](/en-US/docs/Web/API/Streams_API/Using_readable_byte_streams)
