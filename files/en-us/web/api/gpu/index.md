---
title: GPU
slug: Web/API/GPU
page-type: web-api-interface
status:
  - experimental
browser-compat: api.GPU
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`GPU`** interface of the {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} is the starting point for using WebGPU. It can be used to return a {{domxref("GPUAdapter")}} from which you can request devices, configure features and limits, and more.

The `GPU` object for the current context is accessed via the {{domxref("Navigator.gpu")}} or {{domxref("WorkerNavigator.gpu")}} properties.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("GPU.wgslLanguageFeatures", "wgslLanguageFeatures")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : A {{domxref("WGSLLanguageFeatures")}} object that reports the [WGSL language extensions](https://gpuweb.github.io/gpuweb/wgsl/#language-extension) supported by the WebGPU implementation.

## Instance methods

- {{domxref("GPU.requestAdapter", "requestAdapter()")}} {{Experimental_Inline}}
  - : Returns a {{jsxref("Promise")}} that fulfills with a {{domxref("GPUAdapter")}} object instance. From this you can request a {{domxref("GPUDevice")}}, which is the primary interface for using WebGPU functionality.
- {{domxref("GPU.getPreferredCanvasFormat", "getPreferredCanvasFormat()")}} {{Experimental_Inline}}
  - : Returns the optimal canvas texture format for displaying 8-bit depth, standard dynamic range content on the current system.

## Examples

### Requesting an adapter and a device

```js
async function init() {
  if (!navigator.gpu) {
    throw Error("WebGPU not supported.");
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw Error("Couldn't request WebGPU adapter.");
  }

  const device = await adapter.requestDevice();

  //...
}
```

### Configuring a GPUCanvasContext with the optimal texture format

```js
const canvas = document.querySelector("#gpuCanvas");
const context = canvas.getContext("webgpu");

context.configure({
  device: device,
  format: navigator.gpu.getPreferredCanvasFormat(),
  alphaMode: "premultiplied",
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
