---
title: WritableStreamDefaultController
slug: Web/API/WritableStreamDefaultController
page-type: web-api-interface
tags:
  - API
  - Fetch
  - Interface
  - Reference
  - Streams
  - WritableStreamDefaultController
browser-compat: api.WritableStreamDefaultController
---
{{APIRef("Streams")}}

The **`WritableStreamDefaultController`** interface of the [Streams API](/en-US/docs/Web/API/Streams_API) represents a controller allowing control of a {{domxref("WritableStream")}}'s state. When constructing a `WritableStream`, the underlying sink is given a corresponding `WritableStreamDefaultController` instance to manipulate.

## Constructor

None. `WritableStreamDefaultController` instances are created automatically during `WritableStream` construction.

## Properties

None.

## Methods

- {{domxref("WritableStreamDefaultController.error()")}}
  - : Causes any future interactions with the associated stream to error.

## Examples

```js
const writableStream = new WritableStream({
  start(controller) {
    // do stuff with controller

    // error stream if necessary
    controller.error('My stream is broken');
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
