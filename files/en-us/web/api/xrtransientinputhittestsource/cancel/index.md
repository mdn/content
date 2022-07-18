---
title: XRTransientInputHitTestSource.cancel()
slug: Web/API/XRTransientInputHitTestSource/cancel
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - AR
  - VR
  - XR
  - WebXR
browser-compat: api.XRTransientInputHitTestSource.cancel
---
{{APIRef("WebXR Device API")}}

The **`cancel()`** method of the {{domxref("XRTransientInputHitTestSource")}} interface unsubscribes a transient input hit test.

## Syntax

```js
cancel()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Unsubscribe from hit test

The `cancel()` method unsubscribes from a transient input hit test source. Since the {{domxref("XRTransientInputHitTestSource")}} object will no longer be usable, you can clean up and set it to {{jsxref("null")}}.

```js
transientHitTestSource.cancel();
transientHitTestSource = null;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
