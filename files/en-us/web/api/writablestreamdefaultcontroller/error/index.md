---
title: WritableStreamDefaultController.error()
slug: Web/API/WritableStreamDefaultController/error
page-type: web-api-instance-method
tags:
  - API
  - Error
  - Method
  - Reference
  - Streams
  - WritableStreamDefaultController
browser-compat: api.WritableStreamDefaultController.error
---
{{APIRef("Streams")}}

The **`error()`** method of the
{{domxref("WritableStreamDefaultController")}} interface causes any future interactions
with the associated stream to error.

This method is rarely used, since usually it suffices to return a rejected promise from
one of the underlying sink's methods. However, it can be useful for suddenly shutting
down a stream in response to an event outside the normal lifecycle of interactions with
the underlying sink.

## Syntax

```js
error(message)
```

### Parameters

- `message`
  - : A string representing the error you want future interactions to
    fail with.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- {{jsxref("TypeError")}}
  - : The stream you are trying to error is not a {{domxref("WritableStream")}}.

## Examples

```js
const writableStream = new WritableStream({
  start(controller) {
    // do stuff with controller

    // error stream if necessary
    controller.error('My error is broken');
  },
  write(chunk, controller) {
    // ...
  },
  close(controller) {
    // ...
  },
  abort(err) {
    // ...
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
