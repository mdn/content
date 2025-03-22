---
title: GPUQueue
slug: Web/API/GPUQueue
page-type: web-api-interface
status:
  - experimental
browser-compat: api.GPUQueue
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`GPUQueue`** interface of the {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} controls execution of encoded commands on the GPU.

A device's primary queue is accessed via the {{domxref("GPUDevice.queue")}} property.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("GPUQueue.label", "label")}} {{Experimental_Inline}}
  - : A string providing a label that can be used to identify the object, for example in {{domxref("GPUError")}} messages or console warnings.

## Instance methods

- {{domxref("GPUQueue.copyExternalImageToTexture", "copyExternalImageToTexture()")}} {{Experimental_Inline}}
  - : Copies a snapshot taken from a source image, video, or canvas into a given {{domxref("GPUTexture")}}.
- {{domxref("GPUQueue.onSubmittedWorkDone", "onSubmittedWorkDone()")}} {{Experimental_Inline}}
  - : Returns a {{jsxref("Promise")}} that resolves when all the work submitted to the GPU via this `GPUQueue` at the point the method is called has been processed.
- {{domxref("GPUQueue.submit", "submit()")}} {{Experimental_Inline}}
  - : Schedules the execution of command buffers represented by one or more {{domxref("GPUCommandBuffer")}} objects by the GPU.
- {{domxref("GPUQueue.writeBuffer", "writeBuffer()")}} {{Experimental_Inline}}
  - : Writes a provided data source into a given {{domxref("GPUBuffer")}}.
- {{domxref("GPUQueue.writeTexture", "writeTexture()")}} {{Experimental_Inline}}
  - : Writes a provided data source into a given {{domxref("GPUTexture")}}.

## Examples

In our [basic render demo](https://mdn.github.io/dom-examples/webgpu-render-demo/), we define some vertex data in a {{jsxref("Float32Array")}} that we'll use to draw a triangle:

```js
const vertices = new Float32Array([
  0.0, 0.6, 0, 1, 1, 0, 0, 1, -0.5, -0.6, 0, 1, 0, 1, 0, 1, 0.5, -0.6, 0, 1, 0,
  0, 1, 1,
]);
```

To use this data in a render pipeline, we need to put it into a {{domxref("GPUBuffer")}}. First we'll create the buffer:

```js
const vertexBuffer = device.createBuffer({
  size: vertices.byteLength, // make it big enough to store vertices in
  usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
});
```

To get the data into the buffer we can use the {{domxref("GPUQueue.writeBuffer", "writeBuffer()")}} function, which lets the user agent determine most efficient way to copy the data over:

```js
device.queue.writeBuffer(vertexBuffer, 0, vertices, 0, vertices.length);
```

Later on, a set of commands is encoded into a {{domxref("GPUCommandBuffer")}} using the {{domxref("GPUCommandEncoder.finish()")}} method. The command buffer is then passed into the queue via a {{domxref("GPUQueue.submit", "submit()")}} call, ready to be processed by the GPU.

```js
device.queue.submit([commandEncoder.finish()]);
```

> [!NOTE]
> Study the [WebGPU samples](https://webgpu.github.io/webgpu-samples/) to find more queue examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
