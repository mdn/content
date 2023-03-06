---
title: GPUDevice.createRenderBundleEncoder()
slug: Web/API/GPUDevice/createRenderBundleEncoder
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUDevice.createRenderBundleEncoder
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`createRenderBundleEncoder()`** method of the
{{domxref("GPUDevice")}} interface creates a {{domxref("GPURenderBundleEncoder")}} that can be used to pre-record bundles of commands. These can be reused in {{domxref("GPURenderPassEncoder")}}s via the {{domxref("GPURenderPassEncoder.executeBundles", "executeBundles()")}} method, as many times as required.

## Syntax

```js-nolint
createRenderBundleEncoder(descriptor)
```

### Parameters

- `descriptor`
  - : An object containing the following properties:
    - `colorFormats`
      - : An array of enumerated values specifying the expected color formats for render targets. For possible values, see the [`GPUTextureFormat` definition](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format) in the spec.
    - `depthReadOnly` {{optional_inline}}
      - : A boolean. If `true`, specifies that executing any {{domxref("GPURenderBundle")}} created by the {{domxref("GPURenderBundleEncoder")}} will not modify the depth component of the `depthStencilFormat` when executed. If omitted, `depthReadOnly` will default to `false`.
    - `depthStencilFormat` {{optional_inline}}
      - : An enumerated value that specifies the expected depth-or-stencil format for render targets. For possible values, see the [Depth-stencil formats](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format) section of the spec.
    - `label` {{optional_inline}}
      - : A string providing a label that can be used to identify the object, for example in {{domxref("GPUError")}} messages or console warnings.
    - `sampleCount` {{optional_inline}}
      - : A number representing the expected sample count for render targets.
    - `stencilReadOnly` {{optional_inline}}
      - : A boolean. If `true`, specifies that executing any {{domxref("GPURenderBundle")}} created by the {{domxref("GPURenderBundleEncoder")}} will not modify the stencil component of the `depthStencilFormat` when executed. If omitted, `stencilReadOnly` will default to `false`.

### Return value

A {{domxref("GPURenderBundleEncoder")}} object instance.

## Examples

```js
device.createRenderBundleEncoder({
  colorFormats: ["r16float"],
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
