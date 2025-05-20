---
title: "GPUShaderModule: label property"
short-title: label
slug: Web/API/GPUShaderModule/label
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GPUShaderModule.label
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`label`** property of the
{{domxref("GPUShaderModule")}} interface provides a label that can be used to identify the object, for example in {{domxref("GPUError")}} messages or console warnings.

This can be set by providing a `label` property in the descriptor object passed into the originating {{domxref("GPUDevice.createShaderModule()")}} call, or you can get and set it directly on the `GPUShaderModule` object.

## Value

A string. If this has not been previously set as described above, it will be an empty string.

## Examples

Setting and getting a label via `GPUShaderModule.label`:

```js
// …

const shaderModule = device.createShaderModule({
  code: shaders,
});

shaderModule.label = "my_shader";

console.log(shaderModule.label); // "my_shader"
```

Setting a label via the originating {{domxref("GPUDevice.createShaderModule()")}} call, and then getting it via `GPUShaderModule.label`:

```js
// …

const shaderModule = device.createShaderModule({
  code: shaders,
  label: "my_shader",
});

console.log(shaderModule.label); // "my_shader"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
