---
title: "GPUDevice: importExternalTexture() method"
short-title: importExternalTexture()
slug: Web/API/GPUDevice/importExternalTexture
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUDevice.importExternalTexture
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`importExternalTexture()`** method of the
{{domxref("GPUDevice")}} interface takes an {{domxref("HTMLVideoElement")}} or a {{domxref("VideoFrame")}} object as an input and returns a {{domxref("GPUExternalTexture")}} wrapper object containing a snapshot of the video that can be used as a frame in GPU rendering operations.

## Syntax

```js-nolint
importExternalTexture(descriptor)
```

### Parameters

- `descriptor`
  - : An object containing the following properties:
    - `colorSpace` {{optional_inline}}
      - : An enumerated value specifying the color space to use for the video frame. Possible values are `"srgb"` and `"display-p3"`. If omitted, `colorSpace` defaults to `"srgb"`.
    - `label` {{optional_inline}}
      - : A string providing a label that can be used to identify the object, for example in {{domxref("GPUError")}} messages or console warnings.
    - `source`
      - : The {{domxref("HTMLVideoElement")}} or {{domxref("VideoFrame")}} source of the video snapshot.

### Return value

A {{domxref("GPUExternalTexture")}} object instance.

Note that the moment when the {{domxref("GPUExternalTexture")}} object expires (is destroyed) depends on what its source is:

- {{domxref("GPUExternalTexture")}} objects with an {{domxref("HTMLVideoElement")}} source expire as soon as they are used (for example in a bind group).
- {{domxref("GPUExternalTexture")}} objects with an {{domxref("VideoFrame")}} source expire only when the `VideoFrame` is closed, for example via a {{domxref("VideoFrame.close()")}} call.

### Validation

The following criteria must be met when calling **`importExternalTexture()`**, otherwise a {{domxref("GPUValidationError")}} is generated and an invalid {{domxref("GPUExternalTexture")}} object is returned:

- The video snapshot is usable (e.g. the video source is loaded properly, and doesn't have a width or height of 0).

### Exceptions

- `SecurityError` {{domxref("DOMException")}}
  - : Thrown if the video source data is cross-origin.

## Examples

In the WebGPU samples [Video Uploading sample](https://webgpu.github.io/webgpu-samples/samples/videoUploading), an `importExternalTexture()` call is used as the value of a bind group entry `resource`, specified when creating a {{domxref("GPUBindGroup")}} via a {{domxref("GPUDevice.createBindGroup()")}} call:

```js
//...

const uniformBindGroup = device.createBindGroup({
  layout: pipeline.getBindGroupLayout(0),
  entries: [
    {
      binding: 1,
      resource: sampler,
    },
    {
      binding: 2,
      resource: device.importExternalTexture({
        source: video,
      }),
    },
  ],
});

//...
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
