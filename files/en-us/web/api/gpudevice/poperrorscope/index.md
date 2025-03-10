---
title: "GPUDevice: popErrorScope() method"
short-title: popErrorScope()
slug: Web/API/GPUDevice/popErrorScope
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUDevice.popErrorScope
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`popErrorScope()`** method of the
{{domxref("GPUDevice")}} interface pops an existing GPU error scope from the error scope stack (originally pushed using {{domxref("GPUDevice.pushErrorScope()")}}) and returns a {{jsxref("Promise")}} that resolves to an object describing the first error captured in the scope, or `null` if no error occurred.

## Syntax

```js-nolint
popErrorScope()
```

### Parameters

None.

### Return value

a {{jsxref("Promise")}} that resolves to an object describing the first error captured in the scope. This can be of type:

- {{domxref("GPUInternalError")}}
- {{domxref("GPUOutOfMemoryError")}}
- {{domxref("GPUValidationError")}}

If no error occurred, it resolves to `null`.

## Examples

The following example uses an error scope to capture a suspected validation error, logging it to the console.

```js
device.pushErrorScope("validation");

let sampler = device.createSampler({
  maxAnisotropy: 0, // Invalid, maxAnisotropy must be at least 1.
});

device.popErrorScope().then((error) => {
  if (error) {
    sampler = null;
    console.error(`An error occurred while creating sampler: ${error.message}`);
  }
});
```

See [WebGPU Error Handling best practices](https://toji.dev/webgpu-best-practices/error-handling) for a lot more examples and information.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
