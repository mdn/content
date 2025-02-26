---
title: "GPUDevice: createBuffer() method"
short-title: createBuffer()
slug: Web/API/GPUDevice/createBuffer
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUDevice.createBuffer
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`createBuffer()`** method of the
{{domxref("GPUDevice")}} interface creates a {{domxref("GPUBuffer")}} in which to store raw data to use in GPU operations.

## Syntax

```js-nolint
createBuffer(descriptor)
```

### Parameters

- `descriptor`

  - : An object containing the following properties:

    - `label` {{optional_inline}}
      - : A string providing a label that can be used to identify the object, for example in {{domxref("GPUError")}} messages or console warnings.
    - `mappedAtCreation` {{optional_inline}}

      - : A boolean. If set to `true`, the buffer will be mapped upon creation, meaning that you can set the values inside the buffer immediately by calling {{domxref("GPUBuffer.getMappedRange()")}}. The default value is `false`.

        Note that it is valid to set `mappedAtCreation: true` so you can set the buffer's initial data, even if the `GPUBufferUsage.MAP_READ` or `GPUBufferUsage.MAP_WRITE` usage flags are not set.

    - `size`
      - : A number representing the size of the buffer, in bytes.
    - `usage`

      - : The {{glossary("Bitwise flags", "bitwise flags")}} representing the allowed usages for the `GPUBuffer`. The possible values are in the [`GPUBuffer.usage` value table](/en-US/docs/Web/API/GPUBuffer/usage#value).

        Note that multiple possible usages can be specified by separating values with pipe symbols, for example:

        ```js
        usage: GPUBufferUsage.COPY_SRC | GPUBufferUsage.MAP_WRITE;
        ```

### Return value

A {{domxref("GPUBuffer")}} object instance.

### Validation

The following criteria must be met when calling **`createBuffer()`**, otherwise a {{domxref("GPUValidationError")}} is generated and an invalid {{domxref("GPUBuffer")}} object is returned:

- A valid `usage` is specified.
- `GPUBufferUsage.MAP_READ` is specified, and no additional flags are specified other than `GPUBufferUsage.COPY_DST`.
- `GPUBufferUsage.MAP_WRITE` is specified, and no additional flags are specified other than `GPUBufferUsage.COPY_SRC`.
- `mappedAtCreation: true` is specified, and the specified `size` is a multiple of 4.

> [!NOTE]
> If the buffer allocation fails without any specific side-effects, a {{domxref("GPUOutOfMemoryError")}} object is generated.

## Examples

In our [basic compute demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/), we create an output buffer to read GPU calculations to, and a staging buffer to be mapped for JavaScript access.

```js
const output = device.createBuffer({
  size: BUFFER_SIZE,
  usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC,
});

const stagingBuffer = device.createBuffer({
  size: BUFFER_SIZE,
  usage: GPUBufferUsage.MAP_READ | GPUBufferUsage.COPY_DST,
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
