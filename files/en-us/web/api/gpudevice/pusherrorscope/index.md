---
title: "GPUDevice: pushErrorScope() method"
short-title: pushErrorScope()
slug: Web/API/GPUDevice/pushErrorScope
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUDevice.pushErrorScope
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`pushErrorScope()`** method of the
{{domxref("GPUDevice")}} interface pushes a new GPU error scope onto the device's error scope stack, allowing you to capture errors of a particular type.

Once you are done capturing errors, you can end capture by invoking {{domxref("GPUDevice.popErrorScope()")}}. This pops the scope from the stack and returns a {{jsxref("Promise")}} that resolves to an object describing the first error captured in the scope, or `null` if no errors were captured.

## Syntax

```js-nolint
pushErrorScope(filter)
```

### Parameters

- `filter`
  - : An enumerated value that specifies what type of error will be caught in this particular error scope. Possible values are:
    - `"internal"`
      - : The error scope will catch a {{domxref("GPUInternalError")}}.
    - `"out-of-memory"`
      - : The error scope will catch a {{domxref("GPUOutOfMemoryError")}}.
    - `"validation"`
      - : The error scope will catch a {{domxref("GPUValidationError")}}.

### Return value

None ({{jsxref("Undefined")}}).

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
