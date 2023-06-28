---
title: "GPUBuffer: unmap() method"
short-title: unmap()
slug: Web/API/GPUBuffer/unmap
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUBuffer.unmap
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`unmap()`** method of the
{{domxref("GPUBuffer")}} interface unmaps the mapped range of the `GPUBuffer`, making its contents available for use by the GPU again after it has previously been mapped with {{domxref("GPUBuffer.mapAsync()")}} (the GPU cannot access a mapped `GPUBuffer`).

When `unmap()` is called, any {{jsxref("ArrayBuffer")}}s created via {{domxref("GPUBuffer.getMappedRange()")}} are detached.

## Syntax

```js-nolint
unmap()
```

### Parameters

None.

### Return value

None ({{jsxref("Undefined")}}).

## Examples

See the [main `GPUBuffer` page](/en-US/docs/Web/API/GPUBuffer#examples) for an example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
