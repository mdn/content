---
title: "GPURenderPassEncoder: setViewport() method"
short-title: setViewport()
slug: Web/API/GPURenderPassEncoder/setViewport
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPURenderPassEncoder.setViewport
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`setViewport()`** method of the
{{domxref("GPURenderPassEncoder")}} interface sets the viewport used during the rasterization stage to linearly map from normalized device coordinates to viewport coordinates.

## Syntax

```js-nolint
setViewport(x, y, width, height, minDepth, maxDepth)
```

### Parameters

- `x`
  - : A number representing the minimum X value of the viewport, in pixels.
- `y`
  - : A number representing the minimum Y value of the viewport, in pixels.
- `width`
  - : A number representing the width of the viewport, in pixels.
- `height`
  - : A number representing the height of the viewport, in pixels.
- `minDepth`
  - : A number representing the minimum depth value of the viewport.
- `maxDepth`
  - : A number representing the maximum depth value of the viewport.

> [!NOTE]
> If a `setViewport()` call is not made, the default values are `(0, 0, attachment width, attachment height, 0, 1)` for each render pass.

### Return value

None ({{jsxref("Undefined")}}).

### Validation

The following criteria must be met when calling **`setViewport()`**, otherwise a {{domxref("GPUValidationError")}} is generated and the {{domxref("GPURenderPassEncoder")}} becomes invalid:

- `x`, `y`, `width`, and `height` are all greater than or equal to 0.
- `x` + `width` is less than or equal to the width of the render pass's render attachments (see note below).
- `y` + `height` is less than or equal to the height of the render pass's render attachments (see note below).
- `minDepth` and `maxDepth` are both inside the range 0.0–1.0 inclusive.
- `minDepth` is less than `maxDepth`.

> [!NOTE]
> See the color and depth/stencil attachments specified in the descriptor of {{domxref("GPUCommandEncoder.beginRenderPass()")}}; the width and height are based on that of the {{domxref("GPUTexture")}} that their `view`s originate from.

## Examples

### Basic snippet

In a typical canvas render, the following could be used to halve the width and height of the rendered graphics:

```js
passEncoder.setViewport(0, 0, canvas.width / 2, canvas.height / 2, 0, 1);
```

### In context

In the WebGPU Samples [reversedZ example](https://webgpu.github.io/webgpu-samples/samples/reversedZ/), `setViewport` is used several times to set the viewport for the different render passes. Study the example code listing for the full context.

For example:

```js
// …

colorPass.setViewport(
  (canvas.width * m) / 2,
  0,
  canvas.width / 2,
  canvas.height,
  0,
  1,
);

// …
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
