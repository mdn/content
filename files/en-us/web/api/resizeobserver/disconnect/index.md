---
title: ResizeObserver.disconnect()
slug: Web/API/ResizeObserver/disconnect
page-type: web-api-instance-method
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
disconnect()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

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
