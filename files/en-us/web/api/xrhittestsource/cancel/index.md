---
title: XRHitTestSource.cancel()
slug: Web/API/XRHitTestSource/cancel
tags:
  - API
  - Method
  - Reference
  - AR
  - VR
  - XR
  - WebXR
browser-compat: api.XRHitTestSource.cancel
---
{{APIRef("WebXR Device API")}}

The **`cancel()`** method of the {{domxref("XRHitTestSource")}} interface unsubscribes a hit test.

## Syntax

```js
cancel()
```

### Parameters

None.

### Return value

Returns {{jsxref("undefined")}}.

## Examples

### Unsubscribe from hit test

The `cancel()` method unsubscribes from a hit test source. Since the {{domxref("XRHitTestSource")}} object will no longer be usable, you can clean up and set it to {{jsxref("null")}}.

```js
hitTestSource.cancel();
hitTestSource = null;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
