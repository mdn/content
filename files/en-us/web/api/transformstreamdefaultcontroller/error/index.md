---
title: TransformStreamDefaultController.error()
slug: Web/API/TransformStreamDefaultController/error
tags:
  - API
  - Method
  - Reference
  - error
  - TransformStreamDefaultController
browser-compat: api.TransformStreamDefaultController.error
---
{{DefaultAPISidebar("Streams API")}}

The **`error()`** method of the {{domxref("TransformStreamDefaultController")}} interface errors both sides of the stream. Any further interactions with it will fail with the given error message, and any chunks in the queue will be discarded.

## Syntax

```js
TransformStreamDefaultController.error(reason);
```

### Parameters

- `reason`
  - : A string containing the error message to be returned on any further interaction with the stream.

## Examples

In this example the `error()` method is used when a chunk contains a symbol.

```js
case 'symbol':
  controller.error("Cannot send a symbol as a chunk part")
  break
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
