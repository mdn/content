---
title: "GPURenderPassEncoder: setBlendConstant() method"
short-title: setBlendConstant()
slug: Web/API/GPURenderPassEncoder/setBlendConstant
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPURenderPassEncoder.setBlendConstant
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`setBlendConstant()`** method of the
{{domxref("GPURenderPassEncoder")}} interface sets the constant blend color and alpha values used with `"constant"` and `"one-minus-constant"` blend factors (as set in the descriptor of the {{domxref("GPUDevice.createRenderPipeline()")}} method, in the `blend` property).

## Syntax

```js-nolint
setBlendConstant(color)
```

### Parameters

- `color`

  - : An object or array representing the color to use when blending — the `r`, `g`, `b`, and `a` components are represented as floating point numbers between 0.0 and 1.0.

    What follows is an object example:

    ```js
    const color = { r: 0.0, g: 0.5, b: 1.0, a: 1.0 };
    ```

    The array equivalent would look like this:

    ```js
    const color = [0.0, 0.5, 1.0, 1.0];
    ```

> [!NOTE]
> If a `setBlendConstant()` call is not made, the blend constant color value defaults to `(0, 0, 0, 0)` for each render pass.

### Return value

None ({{jsxref("Undefined")}}).

## Examples

```js
// ...

const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);

passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.setBlendConstant([1.0, 0.0, 0.0, 1.0]);
passEncoder.draw(3);

passEncoder.end();

// ...
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
