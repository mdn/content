---
title: "GPURenderBundleEncoder: finish() method"
short-title: finish()
slug: Web/API/GPURenderBundleEncoder/finish
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPURenderBundleEncoder.finish
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`finish()`** method of the
{{domxref("GPURenderBundleEncoder")}} interface completes recording of the current render bundle command sequence, returning a {{domxref("GPURenderBundle")}} object that can be passed into a {{domxref("GPURenderPassEncoder.executeBundles()")}} call to execute those commands in a specific render pass.

## Syntax

```js-nolint
finish(descriptor)
```

### Parameters

- `descriptor` {{optional_inline}}
  - : An object containing the following properties:
    - `label` {{optional_inline}}
      - : A string providing a label that can be used to identify the object, for example in {{domxref("GPUError")}} messages or console warnings.

### Return value

A {{domxref("GPURenderBundle")}} object instance.

### Validation

The following criteria must be met when calling **`finish()`**, otherwise a {{domxref("GPUValidationError")}} is generated and the {{domxref("GPURenderBundleEncoder")}} becomes invalid:

- The {{domxref("GPURenderBundleEncoder")}} is open (i.e. not already ended via a `finish()` call).
- The debug stack for the current render pass is empty (i.e. no render pass debug group is currently open, as opened by {{domxref("GPURenderBundleEncoder.pushDebugGroup", "pushDebugGroup()")}}).

## Examples

```js
const renderBundleEncoder = device.createRenderBundleEncoder({
  colorFormats: [presentationFormat],
});
recordRenderPass(renderBundleEncoder);
const renderBundle = renderBundleEncoder.finish();
```

The above snippet is taken from the WebGPU Samples [Animometer example](https://webgpu.github.io/webgpu-samples/samples/animometer).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
