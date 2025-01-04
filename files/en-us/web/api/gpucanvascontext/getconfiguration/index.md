---
title: "GPUCanvasContext: getConfiguration() method"
short-title: getConfiguration()
slug: Web/API/GPUCanvasContext/getConfiguration
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUCanvasContext.getConfiguration
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`getConfiguration()`** method of the
{{domxref("GPUCanvasContext")}} interface returns the current configuration set for the context.

## Syntax

```js-nolint
getConfiguration()
```

### Parameters

None.

### Return value

An object containing the configuration options set on the context (i.e., via the {{domxref("GPUCanvasContext.configure()")}} method), or `null` if no configuration is set (either no configuration was previously set, or a configuration was set and then {{domxref("GPUCanvasContext.unconfigure()")}} was called on the context).

## Examples

```js
const canvas = document.querySelector("canvas");
const context = canvas.getContext("webgpu");

if (!navigator.gpu) {
  throw Error("WebGPU not supported.");
}

const adapter = await navigator.gpu.requestAdapter();
if (!adapter) {
  throw Error("Couldn't request WebGPU adapter.");
}

const device = await adapter.requestDevice();

context.configure({
  device: device,
  format: navigator.gpu.getPreferredCanvasFormat(),
  alphaMode: "premultiplied",
});

console.log(context.getConfiguration());
/* Logs something like:

{
  "alphaMode": "premultiplied",
  "colorSpace": "srgb",
  "device": { ... },
  "format": "bgra8unorm",
  "toneMapping": {
      "mode": "standard"
  },
  "usage": 16,
  "viewFormats": []
}
*/
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("GPUCanvasContext.configure()")}}
- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
