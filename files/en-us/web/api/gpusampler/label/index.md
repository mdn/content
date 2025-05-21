---
title: "GPUSampler: label property"
short-title: label
slug: Web/API/GPUSampler/label
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GPUSampler.label
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`label`** property of the
{{domxref("GPUSampler")}} interface provides a label that can be used to identify the object, for example in {{domxref("GPUError")}} messages or console warnings.

This can be set by providing a `label` property in the descriptor object passed into the originating {{domxref("GPUDevice.createSampler()")}} call, or you can get and set it directly on the `GPUSampler` object.

## Value

A string. If this has not been previously set as described above, it will be an empty string.

## Examples

Setting and getting a label via `GPUSampler.label`:

```js
// …

const sampler = device.createSampler({
  compare: "less",
});

sampler.label = "my_sampler";

console.log(sampler.label); // "my_sampler"
```

Setting a label via the originating {{domxref("GPUDevice.createSampler()")}} call, and then getting it via `GPUSampler.label`:

```js
// …

const sampler = device.createSampler({
  compare: "less",
  label: "my_sampler",
});

console.log(sampler.label); // "my_sampler"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
