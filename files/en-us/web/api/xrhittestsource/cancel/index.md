---
title: XRHitTestSource.cancel()
slug: Web/API/XRHitTestSource/cancel
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - AR
  - VR
  - XR
  - WebXR
  - Experimental
browser-compat: api.XRHitTestSource.cancel
---
{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The **`cancel()`** method of the {{domxref("XRHitTestSource")}} interface unsubscribes a hit test.

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

The `cancel()` method unsubscribes from a hit test source. Since the {{domxref("XRHitTestSource")}} object will no longer be usable, you can clean up and set it to [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null).

```js
hitTestSource.cancel();
hitTestSource = null;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
