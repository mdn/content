---
title: GPUOutOfMemoryError
slug: Web/API/GPUOutOfMemoryError
page-type: web-api-interface
status:
  - experimental
browser-compat: api.GPUOutOfMemoryError
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`GPUOutOfMemoryError`** interface of the {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} describes an out-of-memory (oom) error indicating that there was not enough free memory to complete the requested operation.

It represents one of the types of errors surfaced by {{domxref("GPUDevice.popErrorScope")}} and the {{domxref("GPUDevice.uncapturederror_event", "uncapturederror")}} event.

Out-of-memory errors should be relatively rare in a well-behaved app but are less predictable than {{domxref("GPUValidationError")}}s. This is because they are dependent on the device your app is running on as well as other apps that are using GPU resources at the time.

{{InheritanceDiagram}}

## Constructor

- {{domxref("GPUOutOfMemoryError.GPUOutOfMemoryError", "GPUOutOfMemoryError()")}} {{Experimental_Inline}}
  - : Creates a new `GPUOutOfMemoryError` object instance.

## Instance properties

The `message` property is inherited from its parent, {{domxref("GPUError")}}:

- {{domxref("GPUError.message", "message")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : A string providing a human-readable message that explains why the error occurred.

## Examples

The following example uses an error scope to capture an out-of-memory error, logging it to the console.

```js
device.pushErrorScope("out-of-memory");

let buffer = device.createBuffer({
  size: 100_000_000_000, // 100GB; far too big
  usage: GPUBufferUsage.COPY_SRC | GPUBufferUsage.MAP_WRITE,
});

device.popErrorScope().then((error) => {
  if (error) {
    // error is a GPUOutOfMemoryError object instance
    buffer = null;
    console.error(`Out of memory, buffer too large. Error: ${error.message}`);
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
- [WebGPU Error Handling best practices](https://toji.dev/webgpu-best-practices/error-handling)
