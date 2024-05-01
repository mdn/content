---
title: "XRHitTestSource: cancel() method"
short-title: cancel()
slug: Web/API/XRHitTestSource/cancel
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.XRHitTestSource.cancel
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`cancel()`** method of the {{domxref("XRHitTestSource")}} interface unsubscribes a hit test.

## Syntax

```js-nolint
cancel()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Unsubscribe from hit test

The `cancel()` method unsubscribes from a hit test source. Since the {{domxref("XRHitTestSource")}} object will no longer be usable, you can clean up and set it to [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null).

```js
hitTestSource.cancel();
hitTestSource = null;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
