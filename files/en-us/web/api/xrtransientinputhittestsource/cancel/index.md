---
title: "XRTransientInputHitTestSource: cancel() method"
short-title: cancel()
slug: Web/API/XRTransientInputHitTestSource/cancel
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.XRTransientInputHitTestSource.cancel
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`cancel()`** method of the {{domxref("XRTransientInputHitTestSource")}} interface unsubscribes a transient input hit test.

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

The `cancel()` method unsubscribes from a transient input hit test source. Since the {{domxref("XRTransientInputHitTestSource")}} object will no longer be usable, you can clean up and set it to [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null).

```js
transientHitTestSource.cancel();
transientHitTestSource = null;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
