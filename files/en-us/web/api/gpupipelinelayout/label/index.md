---
title: "GPUPipelineLayout: label property"
short-title: label
slug: Web/API/GPUPipelineLayout/label
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GPUPipelineLayout.label
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`label`** property of the
{{domxref("GPUPipelineLayout")}} interface provides a label that can be used to identify the object, for example in {{domxref("GPUError")}} messages or console warnings.

This can be set by providing a `label` property in the descriptor object passed into the originating {{domxref("GPUDevice.createPipelineLayout()")}} call, or you can get and set it directly on the `GPUPipelineLayout` object.

## Value

A string. If this has not been previously set as described above, it will be an empty string.

## Examples

Setting and getting a label via `GPUPipelineLayout.label`:

```js
// ...

const pipelineLayout = device.createPipelineLayout({
  bindGroupLayouts: [bindGroupLayout],
});

pipelineLayout.label = "my_pipeline_layout";

console.log(pipelineLayout.label); // "my_pipeline_layout"
```

Setting a label via the originating {{domxref("GPUDevice.createPipelineLayout()")}} call, and then getting it via `GPUPipelineLayout.label`:

```js
// ...

const pipelineLayout = device.createPipelineLayout({
  bindGroupLayouts: [bindGroupLayout],
  label: "my_pipeline_layout",
});

console.log(pipelineLayout.label); // "my_pipeline_layout"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
