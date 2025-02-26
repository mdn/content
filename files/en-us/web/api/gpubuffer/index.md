---
title: GPUBuffer
slug: Web/API/GPUBuffer
page-type: web-api-interface
status:
  - experimental
browser-compat: api.GPUBuffer
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`GPUBuffer`** interface of the {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} represents a block of memory that can be used to store raw data to use in GPU operations.

A `GPUBuffer` object instance is created using the {{domxref("GPUDevice.createBuffer()")}} method.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("GPUBuffer.label", "label")}} {{Experimental_Inline}}
  - : A string providing a label that can be used to identify the object, for example in
    {{domxref("GPUError")}} messages or console warnings.
- {{domxref("GPUBuffer.mapState", "mapState")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : An enumerated value representing the mapped state of the `GPUBuffer`.
- {{domxref("GPUBuffer.size", "size")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : A number representing the length of the `GPUBuffer`'s memory allocation, in bytes.
- {{domxref("GPUBuffer.usage", "usage")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : The {{glossary("bitwise flags")}} representing the allowed usages of the `GPUBuffer`.

## Instance methods

- {{domxref("GPUBuffer.destroy", "destroy()")}} {{Experimental_Inline}}
  - : Destroys the `GPUBuffer`.
- {{domxref("GPUBuffer.getMappedRange", "getMappedRange()")}} {{Experimental_Inline}}
  - : Returns an {{jsxref("ArrayBuffer")}} containing the mapped contents of the `GPUBuffer` in the specified range.
- {{domxref("GPUBuffer.mapAsync", "mapAsync()")}} {{Experimental_Inline}}
  - : Maps the specified range of the `GPUBuffer`. Returns a {{jsxref("Promise")}} that resolves when the `GPUBuffer`'s content is ready to be accessed with {{domxref("GPUBuffer.getMappedRange()")}}.
- {{domxref("GPUBuffer.unmap", "unmap()")}} {{Experimental_Inline}}
  - : Unmaps the mapped range of the `GPUBuffer`, making its contents available for use by the GPU again.

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

Later on, once the `stagingBuffer` contains the results of the GPU computation, a combination of `GPUBuffer` methods are used to read the data back to JavaScript so that it can then be logged to the console:

- {{domxref("GPUBuffer.mapAsync()")}} is used to map the `GPUBuffer` for reading.
- {{domxref("GPUBuffer.getMappedRange()")}} is used to return an {{jsxref("ArrayBuffer")}} containing the `GPUBuffer`'s contents.
- {{domxref("GPUBuffer.unmap()")}} is used to unmap the `GPUBuffer` again, once we have read the content into JavaScript as needed.

```js
// map staging buffer to read results back to JS
await stagingBuffer.mapAsync(
  GPUMapMode.READ,
  0, // Offset
  BUFFER_SIZE, // Length
);

const copyArrayBuffer = stagingBuffer.getMappedRange(0, BUFFER_SIZE);
const data = copyArrayBuffer.slice(0);
stagingBuffer.unmap();
console.log(new Float32Array(data));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
