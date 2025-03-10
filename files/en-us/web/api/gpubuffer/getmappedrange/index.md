---
title: "GPUBuffer: getMappedRange() method"
short-title: getMappedRange()
slug: Web/API/GPUBuffer/getMappedRange
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUBuffer.getMappedRange
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`getMappedRange()`** method of the
{{domxref("GPUBuffer")}} interface returns an {{jsxref("ArrayBuffer")}} containing the mapped contents of the `GPUBuffer` in the specified range.

This can only happen once the `GPUBuffer` has been successfully mapped with {{domxref("GPUBuffer.mapAsync()")}} (this can be checked via {{domxref("GPUBuffer.mapState")}}). While the `GPUBuffer` is mapped it cannot be used in any GPU commands.

When you have finished working with the `GPUBuffer` values, call {{domxref("GPUBuffer.unmap()")}} to unmap it, making it accessible to the GPU again.

## Syntax

```js-nolint
getMappedRange()
getMappedRange(offset)
getMappedRange(offset, size)
```

### Parameters

- `offset` {{optional_inline}}
  - : A number representing the offset, in bytes, from the start of the `GPUBuffer`'s mapped range to the start of the range to be returned in the {{jsxref("ArrayBuffer")}}. If `offset` is omitted, it defaults to 0.
- `size` {{optional_inline}}
  - : A number representing the size, in bytes, of the {{jsxref("ArrayBuffer")}} to return. If `size` is omitted, the range extends to the end of the `GPUBuffer`'s mapped range.

### Return value

An {{jsxref("ArrayBuffer")}}.

### Validation

The following criteria must be met when calling **`getMappedRange()`**, otherwise an `OperationError` {{domxref("DOMException")}} is thrown:

- `offset` is a multiple of 8.
- The total range to be mapped (`size` if specified, or mapped range length - `offset` if not) is a multiple of 4.
- The total range is inside the bounds of the mapped range and does not overlap with the {{jsxref("ArrayBuffer")}} ranges specified by any other active `getMappedRange()` calls.

### Exceptions

- `TypeError` {{domxref("DOMException")}}
  - : Thrown if an attempt is made to detach the {{jsxref("ArrayBuffer")}} in any way other than via {{domxref("GPUBuffer.unmap()")}}.

## Examples

See the [main `GPUBuffer` page](/en-US/docs/Web/API/GPUBuffer#examples) for an example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
