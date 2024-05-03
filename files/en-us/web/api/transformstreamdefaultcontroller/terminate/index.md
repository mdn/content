---
title: "TransformStreamDefaultController: terminate() method"
short-title: terminate()
slug: Web/API/TransformStreamDefaultController/terminate
page-type: web-api-instance-method
browser-compat: api.TransformStreamDefaultController.terminate
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

The **`terminate()`** method of the {{domxref("TransformStreamDefaultController")}} interface closes the readable side and errors the writable side of the stream.

## Syntax

```js-nolint
terminate()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

In the below example the `terminate()` method is called on a {{domxref("TransformStreamDefaultController")}}.

```js
controller.terminate();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
