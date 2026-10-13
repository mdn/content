---
title: "GPUComputePassEncoder: setImmediates() method"
short-title: setImmediates()
slug: Web/API/GPUComputePassEncoder/setImmediates
page-type: web-api-instance-method
browser-compat: api.GPUComputePassEncoder.setImmediates
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`setImmediates()`** method of the
{{domxref("GPUComputePassEncoder")}} interface sets immediate data for subsequent compute commands, sending it straight to the program's shader and avoiding the need to create additional {{domxref("GPUBuffer")}}s and manage {{domxref("GPUBindGroup")}}s.

Immediates are stored in a dedicated **immediate data address space**, which by default can hold up to 64 bytes.

## Syntax

```js-nolint
setImmediates(rangeOffset, data, dataOffset, dataSize)
```

### Parameters

- `rangeOffset`
  - : A number representing the offset in bytes into immediate data address space to start writing the `data`.
- `data`
  - : An {{jsxref("ArrayBuffer")}}, {{jsxref("SharedArrayBuffer")}}, {{jsxref("TypedArray")}}, or {{domxref("DataView")}} representing the data to pass into the immediate data address space.
- `dataOffset` {{optional_inline}}
  - : A number representing the offset into the `data` to begin writing from. The specified `dataOffset` is a number of elements if `data` is a `TypedArray`, and a number of bytes otherwise. Defaults to `0` if omitted.
- `dataSize` {{optional_inline}}
  - : A number representing the size of content to write from `data`. The specified `dataSize` is a number of elements if `data` is a `TypedArray`, and a number of bytes otherwise. Defaults to `dataElementCount` - `dataOffset` if omitted. The `dataElementCount` is the number of `TypedArray` elements in `data` in the case of a `TypedArray`, or the number of bytes in `data` otherwise.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `OperationError` {{domxref("DOMException")}}
  - : Thrown if:
    - The sum of `dataOffset` + `dataSize` is greater than `dataElementCount`.
    - The `dataSize` in bytes is not a multiple of `4`.

### Validation

The following criteria must be met when calling **`setImmediates()`**, otherwise a {{domxref("GPUValidationError")}} is generated and the {{domxref("GPUComputePassEncoder")}} is invalidated:

- The `rangeOffset` is a multiple of `4`.
- The `rangeOffset` + `dataSize` in bytes is less than or equal to the `maxImmediateSize` [limit](/en-US/docs/Web/API/GPUSupportedLimits).

## Examples

### Basic usage

This example demonstrates basic usage of `GPUComputePassEncoder.setImmediates()`.

#### JavaScript

Our script begins with a feature detection check — we check whether the browser has the `immediate_address_space` WGSL language feature available (see {{domxref("WGSLLanguageFeatures")}}). If not, we print a message to the `<body>` to inform the user, and throw an error to stop the rest of the program running.

```js
if (!navigator.gpu.wgslLanguageFeatures.has("immediate_address_space")) {
  document.body.textContent = "Your browser doesn't support immediates!";
  throw new Error(`WGSL immediate address space is not available`);
}
```

Moving on to the main program, we first create a {{domxref("GPUAdapter")}} and a {{domxref("GPUDevice")}}. We then create a basic {{domxref("GPUShaderModule")}} that declares that it will use immediates via `requires immediate_address_space`. It then declares that immediate data passed into the module (via `setImmediates()`) will be stored in a variable called `params`, and will be a `vec2f` type. Note how the immediates value is marked with `var<immediate>`. The last part of the module defines a function called `main()` that outputs the immediate `params` value in the output buffer.

```js
const adapter = await navigator.gpu.requestAdapter();
const device = await adapter.requestDevice();

const module = device.createShaderModule({
  code: /* wgsl */ `
      requires immediate_address_space;

      var<immediate> params: vec2f;

      @group(0) @binding(0) var<storage, read_write> out: vec2f;

      @compute @workgroup_size(1)
      fn main() {
        out = params; // copy the immediate data into the output buffer
      }
    `,
});
```

Next, we create a {{domxref("GPUComputePipeline")}}, two {{domxref("GPUBuffer")}}s, and a {{domxref("GPUBindGroup")}}. We set one buffer as the bind group's resource entry, and the other will be used later on hold values copied out of the first buffer.

```js
const pipeline = device.createComputePipeline({
  layout: "auto",
  compute: { module, entryPoint: "main" },
});

const buffer = device.createBuffer({
  size: 8,
  usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC,
});
const readback = device.createBuffer({
  size: 8,
  usage: GPUBufferUsage.MAP_READ | GPUBufferUsage.COPY_DST,
});
const bindGroup = device.createBindGroup({
  layout: pipeline.getBindGroupLayout(0),
  entries: [{ binding: 0, resource: { buffer } }],
});
```

Next, we create a {{domxref("GPUCommandEncoder")}} and start a compute pass by setting the previously-defined pipeline and bind group into the created {{domxref("GPUComputePassEncoder")}}. Crucially for this demo, we then pass data into the shader module using `setImmediates()`. Recall how the `buffer` included in the bind group earlier was empty. The `setImmediates()` method can be used to pass data into the module without any additional buffers or bind groups. We then invoke {{domxref("GPUComputePassEncoder.dispatchWorkgroups()")}} and {{domxref("GPUComputePassEncoder.end()")}} to run the shader module.

```js
const encoder = device.createCommandEncoder();
const pass = encoder.beginComputePass();
pass.setPipeline(pipeline);
pass.setBindGroup(0, bindGroup);
pass.setImmediates(0, new Float32Array([2.0, 10.0]));
pass.dispatchWorkgroups(1);
pass.end();
```

To prove that the immediates made it through to the shader module, we use the {{domxref("GPUCommandEncoder.copyBufferToBuffer()")}} method to copy the contents of `buffer` to the `readback` buffer before submitting the queue. We then get the buffer contents in a web-readable form by invoking {{domxref("GPUBuffer.mapAsync()")}} and {{domxref("GPUBuffer.getMappedRange()")}} and putting the result in a new {{jsxref("Float32Array")}}. Last up, we print the array contents to the page.

```js
encoder.copyBufferToBuffer(buffer, 0, readback, 0, 8);
device.queue.submit([encoder.finish()]);

await readback.mapAsync(GPUMapMode.READ);
document.body.textContent = new Float32Array(readback.getMappedRange()); // Float32Array [2, 10]
readback.unmap();
```

#### Result

```js hidden live-sample___immediates
if (!navigator.gpu.wgslLanguageFeatures.has("immediate_address_space")) {
  document.body.textContent = "Your browser doesn't support immediates!";
  throw new Error(`WGSL immediate address space is not available`);
}

async function init() {
  const adapter = await navigator.gpu.requestAdapter();
  const device = await adapter.requestDevice();

  const module = device.createShaderModule({
    code: /* wgsl */ `
      requires immediate_address_space;

      var<immediate> params: vec2f;

      @group(0) @binding(0) var<storage, read_write> out: vec2f;

      @compute @workgroup_size(1)
      fn main() {
        out = params;
      }
    `,
  });

  const pipeline = device.createComputePipeline({
    layout: "auto",
    compute: { module, entryPoint: "main" },
  });

  const buffer = device.createBuffer({
    size: 8,
    usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC,
  });
  const readback = device.createBuffer({
    size: 8,
    usage: GPUBufferUsage.MAP_READ | GPUBufferUsage.COPY_DST,
  });
  const bindGroup = device.createBindGroup({
    layout: pipeline.getBindGroupLayout(0),
    entries: [{ binding: 0, resource: { buffer } }],
  });

  const encoder = device.createCommandEncoder();
  const pass = encoder.beginComputePass();
  if (!pass.setImmediates) {
    document.body.textContent = "Your browser doesn't support immediates!";
    return;
  }
  pass.setPipeline(pipeline);
  pass.setBindGroup(0, bindGroup);
  pass.setImmediates(0, new Float32Array([2.0, 10.0]));
  pass.dispatchWorkgroups(1);
  pass.end();

  encoder.copyBufferToBuffer(buffer, 0, readback, 0, 8);
  device.queue.submit([encoder.finish()]);

  await readback.mapAsync(GPUMapMode.READ);
  document.body.textContent = new Float32Array(readback.getMappedRange());
  readback.unmap();
}

init();
```

{{embedlivesample("immediates", "100%", "60")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("GPUComputePassEncoder.setImmediates()")}}
- {{domxref("GPURenderBundleEncoder.setImmediates()")}}
- [Immediates](https://developer.chrome.com/blog/new-in-webgpu-149-150#immediates) on developer.chrome.com (2026)
- [WebGPU Immediates](https://webgpufundamentals.org/webgpu/lessons/webgpu-immediates.html) on webgpufundamentals.org (2026)
