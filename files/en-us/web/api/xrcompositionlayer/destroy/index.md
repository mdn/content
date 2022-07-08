---
title: XRCompositionLayer.destroy()
slug: Web/API/XRCompositionLayer/destroy
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - AR
  - VR
  - XR
  - WebXR
browser-compat: api.XRCompositionLayer.destroy
---
{{APIRef("WebXR Device API")}}

The **`destroy()`** method of the {{domxref("XRCompositionLayer")}} interface deletes the references to the underlying graphics library for the layer. It also sets the color textures and depth stencil texture arrays to an empty array.

## Syntax

```js
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
