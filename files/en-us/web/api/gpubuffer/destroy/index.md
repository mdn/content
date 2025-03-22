---
title: "GPUBuffer: destroy() method"
short-title: destroy()
slug: Web/API/GPUBuffer/destroy
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUBuffer.destroy
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`destroy()`** method of the
{{domxref("GPUBuffer")}} interface destroys the `GPUBuffer`.

## Syntax

```js-nolint
destroy()
```

### Parameters

None.

### Return value

None ({{jsxref("Undefined")}}).

## Examples

```js
const output = device.createBuffer({
  size: 1000,
  usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC,
});

// some time later

output.destroy();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
