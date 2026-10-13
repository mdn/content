---
title: "GPURenderBundleEncoder: setImmediates() method"
short-title: setImmediates()
slug: Web/API/GPURenderBundleEncoder/setImmediates
page-type: web-api-instance-method
browser-compat: api.GPURenderBundleEncoder.setImmediates
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`setImmediates()`** method of the
{{domxref("GPURenderBundleEncoder")}} interface sets immediate data for subsequent render commands, sending it straight to the program's shader and avoiding the need to create additional {{domxref("GPUBuffer")}}s and manage {{domxref("GPUBindGroup")}}s.

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

The following criteria must be met when calling **`setImmediates()`**, otherwise a {{domxref("GPUValidationError")}} is generated and the {{domxref("GPURenderBundleEncoder")}} is invalidated:

- The `rangeOffset` is a multiple of `4`.
- The `rangeOffset` + `dataSize` in bytes is less than or equal to the `maxImmediateSize` [limit](/en-US/docs/Web/API/GPUSupportedLimits).

## Examples

### Basic usage

This example demonstrates basic usage of `GPURenderBundleEncoder.setImmediates()` by drawing three triangles on a {{htmlelement("canvas")}}.

#### JavaScript

Our script begins with a feature detection check — we check whether the browser has the `immediate_address_space` WGSL language feature available (see {{domxref("WGSLLanguageFeatures")}}). If not, we print a message to the `<body>` to inform the user, and throw an error to stop the rest of the program running.

```js
if (!navigator.gpu.wgslLanguageFeatures.has("immediate_address_space")) {
  document.body.textContent = "Your browser doesn't support immediates!";
  throw new Error(`WGSL immediate address space is not available`);
}
```

Moving on to the main program, we first define a `clearColor` — a background color to set for the `<canvas>` that we will draw on. Next, we define an array of {{jsxref("Float32Array")}}s, each of which defines the color, position, and size data for a triangle.

```js
// Clear color for GPURenderPassDescriptor
const clearColor = { r: 0.0, g: 0.5, b: 1.0, a: 1.0 };

// Per-triangle data, sent via immediates: R G B A, offsetX offsetY, scale
const triangles = [
  new Float32Array([1, 0, 0, 1, -0.6, 0.2, 0.4]),
  new Float32Array([0, 1, 0, 1, 0.0, -0.2, 0.4]),
  new Float32Array([0, 0, 1, 1, 0.6, 0.2, 0.4]),
];
```

Next, we define the shaders that will do the rendering work in our program. It first declares that it will use immediates via `requires immediate_address_space`. It then defines a `Params` struct that represents a triangle's data inside the shader, and declares that immediate data passed into the module (via `setImmediates()`) will be stored in a variable called `params`, and will be a `Params` type. Note how the immediates value is marked with `var<immediate>`.

The last part of the module defines a vertex shader that hardcodes a triangle's basic shape and then sets the final triangle position using the data provided in `params`, and a fragment shader that sets the color for the triangle.

```js
const shaders = `
requires immediate_address_space;

struct Params {
  color : vec4f,
  offset : vec2f,
  scale : f32,
}

var<immediate> params : Params;

struct VertexOut {
  @builtin(position) position : vec4f,
  @location(0) color : vec4f
}

@vertex
fn vertex_main(@builtin(vertex_index) i : u32) -> VertexOut
{
  // The triangle's shape is hard-coded; no vertex buffer needed
  var corners = array<vec2f, 3>(
    vec2f(0.0, 0.6),
    vec2f(-0.5, -0.6),
    vec2f(0.5, -0.6)
  );

  var output : VertexOut;
  output.position = vec4f(corners[i] * params.scale + params.offset, 0, 1);
  output.color = params.color;
  return output;
}

@fragment
fn fragment_main(fragData: VertexOut) -> @location(0) vec4f
{
  return fragData.color;
}
`;
```

Next, we start to define an `init()` function that will hold most of our JavaScript functionality. We create a {{domxref("GPUAdapter")}}, {{domxref("GPUDevice")}}, and {{domxref("GPUShaderModule")}}.

```js
async function init() {
  const adapter = await navigator.gpu.requestAdapter();
  const device = await adapter.requestDevice();
  const shaderModule = device.createShaderModule({
    code: shaders,
  });
```

Next, we get a reference to the `<canvas>` that we will render our triangles in, and configure its context using {{domxref("GPUCanvasContext.configure()")}}.

```js-nolint
  const canvas = document.querySelector("#gpuCanvas");
  const context = canvas.getContext("webgpu");

  context.configure({
    device: device,
    format: navigator.gpu.getPreferredCanvasFormat(),
    alphaMode: "premultiplied",
  });
```

Next, we create a {{domxref("GPURenderPipeline")}} that references our `shaderModule` as the provider of its [`vertex`](/en-US/docs/Web/API/GPUDevice/createRenderPipeline#vertex_object_structure) and [`fragment`](/en-US/docs/Web/API/GPUDevice/createRenderPipeline#fragment_object_structure) shader definitions. It also specifies a `triangle-list` for its [`topology`](/en-US/docs/Web/API/GPUDevice/createRenderPipeline#topology), and an automatic [`layout`](/en-US/docs/Web/API/GPUDevice/createRenderPipeline#layout).

```js-nolint
  const renderPipeline = device.createRenderPipeline({
    vertex: {
      module: shaderModule,
      entryPoint: "vertex_main",
    },
    fragment: {
      module: shaderModule,
      entryPoint: "fragment_main",
      targets: [
        {
          format: navigator.gpu.getPreferredCanvasFormat(),
        },
      ],
    },
    primitive: {
      topology: "triangle-list",
    },
    layout: "auto",
  });
```

Next, we create a {{domxref("GPURenderBundleEncoder")}} and set its pipeline. Note that the [`colorFormats`](/en-US/docs/Web/API/GPUDevice/createRenderBundleEncoder#colorformats) must be compatible with the render pass it's executed in, and with the pipeline. We've specified {{domxref("GPU.getPreferredCanvasFormat()")}} for consistency with the pipeline defined earlier.

```js-nolint
  const bundleEncoder = device.createRenderBundleEncoder({
    colorFormats: [navigator.gpu.getPreferredCanvasFormat()],
  });
  bundleEncoder.setPipeline(renderPipeline);
```

Crucially for this demo, we loop through the `Float32Array`s in the `triangles` array. For each one, we record two commands in the bundle — one to pass the triangle data into the shader module using `setImmediates()`, and one to run the module and {{domxref("GPURenderBundleEncoder.draw", "draw()")}} the triangle. When the bundle is executed, all the commands will be run in recorded order. Note that no buffers or bind groups are needed. Once the loop is finished, we run {{domxref("GPURenderBundleEncoder.finish()")}} to create a bundle of our commands.

```js-nolint
  for (const data of triangles) {
    bundleEncoder.setImmediates(0, data);
    bundleEncoder.draw(3);
  }

  const renderBundle = bundleEncoder.finish();
```

Next, we create a {{domxref("GPUCommandEncoder")}} and begin a render pass. We invoke {{domxref("GPURenderPassEncoder.executeBundles()")}}, passing our bundle as an argument to include our commands in the pass.

```js-nolint
  const commandEncoder = device.createCommandEncoder();

  const renderPassDescriptor = {
    colorAttachments: [
      {
        clearValue: clearColor,
        loadOp: "clear",
        storeOp: "store",
        view: context.getCurrentTexture().createView(),
      },
    ],
  };

  const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
  passEncoder.executeBundles([renderBundle]);
```

Finally, we invoke {{domxref("GPURenderPassEncoder.end()")}} and {{domxref("GPUQueue.submit()")}} to end the render pass and submit the command buffer returned by {{domxref("GPUCommandEncoder.finish()")}}, close the `init()` function definition, and run it to start the program.

```js-nolint
  passEncoder.end();
  device.queue.submit([commandEncoder.finish()]);
}

init();
```

#### Result

```html hidden live-sample___immediates
<canvas id="gpuCanvas" width="400" height="300"></canvas>
```

```js hidden live-sample___immediates
if (!navigator.gpu.wgslLanguageFeatures.has("immediate_address_space")) {
  document.body.textContent = "Your browser doesn't support immediates!";
  throw new Error(`WGSL immediate address space is not available`);
}

const clearColor = { r: 0.0, g: 0.5, b: 1.0, a: 1.0 };

const triangles = [
  new Float32Array([1, 0, 0, 1, -0.6, 0.2, 0.4]),
  new Float32Array([0, 1, 0, 1, 0.0, -0.2, 0.4]),
  new Float32Array([0, 0, 1, 1, 0.6, 0.2, 0.4]),
];

const shaders = `
requires immediate_address_space;

struct Params {
  color : vec4f,
  offset : vec2f,
  scale : f32,
}

var<immediate> params : Params;

struct VertexOut {
  @builtin(position) position : vec4f,
  @location(0) color : vec4f
}

@vertex
fn vertex_main(@builtin(vertex_index) i : u32) -> VertexOut
{
  // The triangle's shape is hard-coded; no vertex buffer needed
  var corners = array<vec2f, 3>(
    vec2f(0.0, 0.6),
    vec2f(-0.5, -0.6),
    vec2f(0.5, -0.6)
  );

  var output : VertexOut;
  output.position = vec4f(corners[i] * params.scale + params.offset, 0, 1);
  output.color = params.color;
  return output;
}

@fragment
fn fragment_main(fragData: VertexOut) -> @location(0) vec4f
{
  return fragData.color;
}
`;

async function init() {
  const adapter = await navigator.gpu.requestAdapter();
  const device = await adapter.requestDevice();
  const shaderModule = device.createShaderModule({
    code: shaders,
  });

  const canvas = document.querySelector("#gpuCanvas");
  const context = canvas.getContext("webgpu");

  context.configure({
    device: device,
    format: navigator.gpu.getPreferredCanvasFormat(),
    alphaMode: "premultiplied",
  });

  const renderPipeline = device.createRenderPipeline({
    vertex: {
      module: shaderModule,
      entryPoint: "vertex_main",
    },
    fragment: {
      module: shaderModule,
      entryPoint: "fragment_main",
      targets: [
        {
          format: navigator.gpu.getPreferredCanvasFormat(),
        },
      ],
    },
    primitive: {
      topology: "triangle-list",
    },
    layout: "auto",
  });

  const bundleEncoder = device.createRenderBundleEncoder({
    colorFormats: [navigator.gpu.getPreferredCanvasFormat()],
  });
  bundleEncoder.setPipeline(renderPipeline);

  for (const data of triangles) {
    bundleEncoder.setImmediates(0, data);
    bundleEncoder.draw(3);
  }

  const renderBundle = bundleEncoder.finish();
  const commandEncoder = device.createCommandEncoder();

  const renderPassDescriptor = {
    colorAttachments: [
      {
        clearValue: clearColor,
        loadOp: "clear",
        storeOp: "store",
        view: context.getCurrentTexture().createView(),
      },
    ],
  };

  const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
  passEncoder.executeBundles([renderBundle]);
  passEncoder.end();

  device.queue.submit([commandEncoder.finish()]);
}

init();
```

{{embedlivesample("immediates", "100%", "320")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("GPUComputePassEncoder.setImmediates()")}}
- {{domxref("GPURenderPassEncoder.setImmediates()")}}
- [Immediates](https://developer.chrome.com/blog/new-in-webgpu-149-150#immediates) on developer.chrome.com (2026)
- [WebGPU Immediates](https://webgpufundamentals.org/webgpu/lessons/webgpu-immediates.html) on webgpufundamentals.org (2026)
