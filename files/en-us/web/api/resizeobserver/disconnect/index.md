---
title: ResizeObserver.disconnect()
slug: Web/API/ResizeObserver/disconnect
tags:
  - API
  - Method
  - Reference
  - Resize Observer API
  - ResizeObserver
  - disconnect()
  - observers
browser-compat: api.ResizeObserver.disconnect
---
{{APIRef("Resize Observer API")}}

The **`disconnect()`** method of the
{{domxref("ResizeObserver")}} interface unobserves all observed {{domxref('Element')}}
or {{domxref('SVGElement')}} targets.

## Syntax

```js
resizeObserver.disconnect();
```

### Parameters

None.

### Return value

Void.

### Exceptions

None.

## Examples

```js
btn.addEventListener('click', () => {
  resizeObserver.disconnect();
})
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
