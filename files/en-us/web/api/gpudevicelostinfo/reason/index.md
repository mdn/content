---
title: "GPUDeviceLostInfo: reason property"
short-title: reason
slug: Web/API/GPUDeviceLostInfo/reason
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GPUDeviceLostInfo.reason
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`reason`** read-only property of the
{{domxref("GPUDeviceLostInfo")}} interface defines the reason the device was lost in a machine-readable way.

## Value

An enumerated value. At the moment the only value defined in the spec is `"destroyed"`, which indicates that the device was destroyed by a call to {{domxref("GPUDevice.destroy()")}}.

If the device was lost because of an unknown reason not covered in the available enumerated values, `reason` returns `undefined`.

## Examples

See the main [`GPUDevice.lost` page](/en-US/docs/Web/API/GPUDevice/lost#examples) for an example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
