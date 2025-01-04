---
title: "GPURenderBundle: label property"
short-title: label
slug: Web/API/GPURenderBundle/label
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GPURenderBundle.label
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`label`** read-only property of the
{{domxref("GPURenderBundle")}} interface is a string providing a label that can be used to identify the object, for example in {{domxref("GPUError")}} messages or console warnings.

This can be set by providing a `label` property in the descriptor object passed into the originating {{domxref("GPURenderBundleEncoder.finish()")}} call, or you can get and set it directly on the `GPURenderBundle` object.

## Value

A string. If no label value has previously been set, getting the label returns an empty string.

## Examples

Setting and getting a label via `GPURenderBundle.label`:

```js
const renderBundle = renderBundleEncoder.finish();

renderBundle.label = "my_render_bundle";
console.log(renderBundle.label); // "my_render_bundle"
```

Setting a label via the originating {{domxref("GPURenderBundleEncoder.finish()")}} call, and then getting it via `GPURenderBundle.label`:

```js
const renderBundle = renderBundleEncoder.finish({
  label: "my_render_bundle",
});

console.log(renderBundle.label); // "my_render_bundle"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
