---
title: "GPURenderPassEncoder: setScissorRect() method"
short-title: setScissorRect()
slug: Web/API/GPURenderPassEncoder/setScissorRect
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPURenderPassEncoder.setScissorRect
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`setScissorRect()`** method of the
{{domxref("GPURenderPassEncoder")}} interface sets the scissor rectangle used during the rasterization stage. After transformation into viewport coordinates any fragments that fall outside the scissor rectangle will be discarded.

## Syntax

```js-nolint
setScissorRect(x, y, width, height)
```

### Parameters

- `x`
  - : A number representing the minimum X value of the scissor rectangle, in pixels.
- `y`
  - : A number representing the minimum Y value of the scissor rectangle, in pixels.
- `width`
  - : A number representing the width of the scissor rectangle, in pixels.
- `height`
  - : A number representing the height of the scissor rectangle, in pixels.

> **Note:** If a `setScissorRect()` call is not made, the default values are `(0, 0, attachment width, attachment height)` for each render pass.

### Return value

None ({{jsxref("Undefined")}}).

### Validation

The following criteria must be met when calling **`setViewport()`**, otherwise a {{domxref("GPUValidationError")}} is generated and the {{domxref("GPURenderPassEncoder")}} becomes invalid:

- `x` + `width` is less than or equal to the width of the render pass's render attachments (see note below).
- `y` + `height` is less than or equal to the height of the render pass's render attachments (see note below).

> **Note:** See the color and depth/stencil attachments specified in the descriptor of {{domxref("GPUCommandEncoder.beginRenderPass()")}}; the width and height are based on that of the {{domxref("GPUTexture")}} that their `view`s originate from.

## Examples

### Basic snippet

In a typical canvas render, the following could be used to discard any rendering outside of the top-left quarter of the canvas:

```js
passEncoder.setScissorRect(0, 0, canvas.width / 2, canvas.height / 2);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
