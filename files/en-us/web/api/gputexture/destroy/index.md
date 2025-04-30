---
title: "GPUTexture: destroy() method"
short-title: destroy()
slug: Web/API/GPUTexture/destroy
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUTexture.destroy
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`destroy()`** method of the
{{domxref("GPUTexture")}} interface destroys the `GPUTexture`.

## Syntax

```js-nolint
destroy()
```

### Parameters

None.

### Return value

None ({{jsxref("Undefined")}}).

## Examples

```js
// …

const depthTexture = device.createTexture({
  size: [canvas.width, canvas.height],
  format: "depth24plus",
  usage: GPUTextureUsage.RENDER_ATTACHMENT,
});

// some time later

depthTexture.destroy();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
