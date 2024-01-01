---
title: "XRCompositionLayer: destroy() method"
short-title: destroy()
slug: Web/API/XRCompositionLayer/destroy
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.XRCompositionLayer.destroy
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The **`destroy()`** method of the {{domxref("XRCompositionLayer")}} interface deletes the references to the underlying graphics library for the layer. It also sets the color textures and depth stencil texture arrays to an empty array.

## Syntax

```js-nolint
destroy()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Deleting a layer

Call `destroy()` to delete a layer.

```js
myLayer.destroy();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
