---
title: "TransformStreamDefaultController: error() method"
short-title: error()
slug: Web/API/TransformStreamDefaultController/error
page-type: web-api-instance-method
browser-compat: api.TransformStreamDefaultController.error
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

The **`error()`** method of the {{domxref("TransformStreamDefaultController")}} interface errors both sides of the stream. Any further interactions with it will fail with the given error message, and any chunks in the queue will be discarded.

## Syntax

```js-nolint
error(reason)
```

### Parameters

- `reason`
  - : A string containing the error message to be returned on any further interaction with the stream.

### Return value

None ({{jsxref("undefined")}}).

## Examples

In this example the `error()` method is used when a chunk could not be transformed.

```js
const transformContent = {
  start() {
    /* … */
  },
  async transform(chunk, controller) {
    try {
      chunk = await applyMyTransformation(chunk);
    } catch (err) {
      controller.error(`Unable to transform chunk: ${err}`);
    }
    // …
  },
  // …
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
