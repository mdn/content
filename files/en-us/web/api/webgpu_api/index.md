---
title: WebGPU API
slug: Web/API/WebGPU_API
page-type: web-api-overview
tags:
  - API
  - Experimental
  - Landing
  - Overview
  - Reference
browser-compat:
  - api.GPU
---

{{SeeCompatTable}}{{DefaultAPISidebar("WebGPU API")}}

The **WebGPU API** enables web developers to use the underlying operating system's GPU (Graphics Processing Unit) to perform high-performance computations and draw complex images that can be rendered in the browser. It is the successor to {{domxref("WebGL_API", "WebGL", "", "nocode")}}, enabling better compatibility with modern GPUs, faster operations, and access to more advanced GPU features. In addition, WebGPU has first-class support for performing general computations on the GPU.

## Concepts and usage

It is fair to say that {{domxref("WebGL_API", "WebGL", "", "nocode")}} revolutionized the web in terms of graphical capabilities after it first appeared around 2011. WebGL is a JavaScript port of the [OpenGL ES 2.0](https://registry.khronos.org/OpenGL-Refpages/es2.0/) graphics library, allowing web pages to pass rendering computations directly to the device's GPU to be processed at very high speeds, and render the result inside a {{htmlelement("canvas")}} element.

WebGL and the [GLSL](https://www.khronos.org/opengl/wiki/Core_Language_(GLSL)) language used to write WebGL shader code are complex, so several WebGL libraries were created to make WebGL apps easier to write. Popular examples include [Three.js](https://threejs.org/), [Babylon.js](https://www.babylonjs.com/), and [PlayCanvas](https://playcanvas.com/). Developers have used these tools to build impressive web-based 3D games, music videos, training and modeling tools, VR and AR experiences, and more.

However, WebGL still has some fundamental issues that need addressing:

- Since WebGL's release, a new generation of native GPU APIs have appeared — the most common being [Microsoft's Direct3D 12](https://docs.microsoft.com/en-us/windows/win32/direct3d12/direct3d-12-graphics), [Apple's Metal](https://developer.apple.com/metal/), and [The Khronos Group's Vulkan](https://www.vulkan.org/) — which provide a multitude of new features. WebGL is not able to access many of these due to being based on an old-fashioned Open GL architecture.
- WebGL is based wholly around the use case of drawing graphics and rendering them to a canvas. It does not handle general-purpose GPU (GPGPU) computations very well. GPGPU computations are becoming more and more important for many different use cases, for example those based on machine learning models.
- 3D graphics apps are becoming increasingly demanding, both in terms of the number of objects to be rendered simultaneously, and usage of new rendering features.

WebGPU addresses these issues, providing a general-purpose architecture compatible with modern GPU APIs, which feels more "webby". It supports graphic rendering, but also has first-class support for GPGPU computations. Rendering of individual objects is significantly cheaper and it supports modern GPU rendering features such as compute-based particles and post-processing filters like color effects, sharpening, and depth-of-field simulation. In addition, it can handle expensive computations such as culling and skinned model transformation that previously were often done on the CPU.

## General model

There are several layers of abstraction between the device GPU and the web browser running the WebGPU API. It is useful to understand these as you begin to learn WebGPU:

![A basic stack diagram showing the position of the different elements of a WebGPU architecture on a device](basic-webgpu-stack.svg)

- A physical device has GPUs. Most devices only have one GPU, but some have more than one. GPUs are broken down into two types: Integrated GPUs (which live on the same board as the CPU and share its memory) and discrete GPUs (which live on their own board, separate from the CPU).
- A software driver allows a GPU to talk to the device OS — it is responsible for sending instructions to the GPU and receiving responses.
- The native OS GPU API, which is part of the OS (e.g. Metal on macOS) is a programming interface allowing native applications to use the capabilities of the GPU. API instructions are sent to the GPU (and responses received) via the driver.
- An adapter translates instructions between the native OS GPU API and WebGPU.
- A logical device is an abstraction via which a single web app can access GPU capabilities in a compartmentalized way. Logical devices are required to provide multiplexing capabilities. A physical device's GPU is used by many applications and processes concurrently, including potentially many web apps. Each web app needs to be able to access WebGPU in isolation for security and logic reasons.

## Accessing a device

A logical device — represented by a {{domxref("GPUDevice")}} object instance — is the basis from which a web app accesses all WebGPU functionality. Accessing a device is done as follows:

1. The {{domxref("Navigator.gpu")}} property (or {{domxref("WorkerNavigator.gpu")}} if you are using WebGPU functionality from inside a worker) returns the {{domxref("GPU")}} object for the current context.
2. You access an adapter via the {{domxref("GPU.requestAdapter", "GPU.requestAdapter()")}} method. This method accepts an optional settings object allowing you to request for example a high-performance or low-energy adapter. If this is not included, the device will provide access to the default adapter, which is good enough for most purposes.
3. A device can be requested via {{domxref("GPUAdapter.requestDevice()")}}. This method also accepts an options object (referred to as a descriptor), which can be used to specify the exact features and limits you want the logical device to have. If this is not included, the supplied device will have a reasonable general-purpose spec that is good enough for most purposes.

Putting this together with some feature detection checks, the above process could be achieved as follows:

```js
async function init() {
  if (!navigator.gpu) {
    throw Error('WebGPU not supported.');
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw Error('Couldn\'t request WebGPU adapter.');
  }

  const device = await adapter.requestDevice();
  if (!device) {
    throw Error('Couldn\'t request WebGPU logical device.');
  }

  //...

}
```

## Pipelines and shaders: WebGPU app structure

A pipeline is a logical structure containing programmable stages that are completed to get your program's work done. WebGPU is currently able to handle two types of pipeline:

- A render pipeline renders graphics, typically into a {{htmlelement("canvas")}} element, but it could also render graphics offscreen. It has two main stages:
  - A vertex stage, in which a vertex shader takes positioning data fed into the GPU and uses it to position the vertices of triangles (the basic building block of rendered graphics) in 3D space by applying specified effects like rotation, translation, or perspective. The vertices are then assembled into triangles and rasterized by the GPU to figure out what pixels each one should cover on the drawing canvas.
  - A fragment stage, in which a fragment shader computes the color for each pixel covered by the triangles produced by the vertex shader. These computations frequently use inputs such as images (in the form of textures) that provide surface details and the position and color of virtual lights.
- A compute pipeline is for general computation. A compute pipeline contains a single compute stage, in which a compute shader takes general data, processes it in parallel across a specified number of workgroups, then returns the result in a buffer. The buffer can contain any kind of data.

The shaders mentioned above are sets of instructions processed by the GPU. WebGPU shaders are written in a low-level Rust-like language called [WebGPU Shader Language](https://gpuweb.github.io/gpuweb/wgsl/) (WGSL).

There are several different ways in which you could architect a WebGPU app, but the process will contain the following steps:

1. [Create shader modules](#create_shader_modules): Write your shader code in WGSL and package it into one or more shader modules.
2. [Get and configure the canvas context](#get_and_configure_the_canvas_context): Get the `webgpu` context of a `<canvas>` element and configure it to receive information on what graphics to render from your GPU logical device. This step is not necessary if your app has no graphical output, such as one which only uses compute pipelines.
3. [Create buffers containing your data](#create_a_buffer_and_write_our_triangle_data_into_it): The data that you want processed by your pipelines needs to be stored in GPU buffers so the app can access it.
4. [Create a pipeline](#define_and_create_the_rendering_pipeline): Define a pipeline descriptor that describes the desired pipeline in detail, including the required data structure, shaders, and resource layout, then create a pipeline from it.
5. [Run a compute/rendering pass](#running_a_rendering_pass): This involves a number of substeps:
   1. Create a command encoder that can encode a set of commands to be passed to the GPU to execute.
   2. Create a pass encoder object on which commands can be directly issued.
   3. Run commands to specify which pipeline to use, what buffer(s) to get the required data from, how many drawing operations to run (in the case of a render pipeline), etc.
   4. Finalize the command list and encapsulate it in a command buffer.
   5. Submit the command buffer to the GPU via the logical device's command queue.

In the sections below, we will examine a basic render pipeline demo, to allow you to explore what a pipeline requires. Later on, we'll also examine a [basic compute pipeline](#basic_compute_pipeline) example, looking at how it differs from the rendering pipeline.

## Basic render pipeline

In our [basic render demo](https://webgpu-basic-render.glitch.me/) we give a `<canvas>` element a solid blue background and draw a triangle onto it.

### Create shader modules

We are using the following shader code. The vertex shader (`@vertex` block, which will be the entry point for the vertex pipeline stage) accepts a chunk of data containing a position and a color, positions the vertex according to the given position, then passes the data along to the fragment shader. The fragment shader (`@fragment` block, which will be the entry point for the fragment pipeline stage) accepts the data from the vertex shader and colors the vertex according to the given color.

```js
const shaders = `
struct VertexOut {
    @builtin(position) position : vec4<f32>,
    @location(0) color : vec4<f32>
}

@vertex
fn vertex_main(@location(0) position: vec4<f32>,
                 @location(1) color: vec4<f32>) -> VertexOut
{
  var output : VertexOut;
  output.position = position;
  output.color = color;
  return output;
}

@fragment
fn fragment_main(fragData: VertexOut) -> @location(0) vec4<f32>
{
  return fragData.color;
}
`;
```

> **Note:** In our demos we are storing our shader code inside a template literal, but you can store it anywhere from which it can easily be retrieved as text to be fed into your WebGPU program. For example, another common practice is to store shaders inside a {{htmlelement("script")}} element with a `type` attribute set to a custom value to designate it as a data block, and then retrieve the contents using {{domxref("Node.textContent")}}.

To make your shader code available to WebGPU, you have to put it inside a {{domxref("GPUShaderModule")}} via a {{domxref("GPUDevice.createShaderModule()")}} call, passing your shader code as an property inside a descriptor object. For example:

```js
const shaderModule = device.createShaderModule({
  code: shaders
});
```

### Get and configure the canvas context

In a render pipeline, we need to specify somewhere to render the graphics to. In this case we are getting a reference to an onscreen `<canvas>` element then calling {{domxref("HTMLCanvasElement.getContext()")}} with a parameter of `webgpu` to return its GPU context (a {{domxref("GPUCanvasContext")}} instance).

From there, we configure the context's swap chain, which supplies the textures that will receive the graphical information to be rendered. This is done with a call to {{domxref("GPUCanvasContext.configure()")}}, passing it an options object containing the {{domxref("GPUDevice")}} that the rendering information will come from, the format the textures will have, and the alpha mode to use when rendering semi-transparent textures.

```js
const canvas = document.querySelector('#gpuCanvas');
const context = canvas.getContext('webgpu');

// Configure swap chain, link the GPU to the canvas
context.configure({
    device: device,
    format: 'bgra8unorm',
    alphaMode: 'premultiplied'
});
```

> **Note:** Traditionally a swap chain is a series of buffers containing the information for the frames of an animation, which are swapped each time a new frame is displayed. In our basic demo there is no animation — we are only displaying a single frame.

### Create a buffer and write our triangle data into it

Next we will provide our WebGPU program with our data, in a form it can use. Our data is initially provided in a {{jsxref("Float32Array")}}, which contains 8 data points for each triangle vertex — X, Y, Z, W for position, and R, G, B, A for color.

```js
const vertices = new Float32Array([
    0.0,  0.6, 0, 1, 1, 0, 0, 1,
   -0.5, -0.6, 0, 1, 0, 1, 0, 1,
    0.5, -0.6, 0, 1, 0, 0, 1, 1
]);
```

However, we've got an issue here. We need to get our data into a {{domxref("GPUBuffer")}}. Behind the scenes, this type of buffer is stored in memory very tightly integrated with the GPU's cores to allow for the high performance required for processing. As a side effect, this memory can't be accessed by processes running on the host system, like the browser.

The {{domxref("GPUBuffer")}} is created via a call to {{domxref("GPUDevice.createBuffer()")}}. We give it a size equal to the length of the `vertices` array so it can contain all the data, `VERTEX` and `COPY_DST` flags to indicate that the buffer will be used as a vertex buffer and the destination of copy operations, and we also specify that it should be mapped at creation.

```js
const vertexBuffer = device.createBuffer({
    size: vertices.byteLength, // make it big enough to store vertices in
    usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
    mappedAtCreation: true // mapped at creation
});
```

The third option parameter, `mappedAtCreation: true`, is key here — this causes the buffer to be immediately mapped to an intermediate memory block that is not as performant, but can be accessed by the host system to be written to. If you don't map the buffer at creation, you can still map it later using {{domxref("GPUBuffer.mapAsync()")}}.

With the buffer unlocked so it can be modified, we return a range of data that has been mapped using {{domxref("GPUBuffer.getMappedRange()")}} (which returns all the mapped data by default), put it into another {{jsxref("Float32Array")}}, then set its contents to the contents of the `vertices` array, using {{domxref("TypedArray.set()")}}.

```js
new Float32Array(vertexBuffer.getMappedRange()).set(vertices);
```

Now we have finished modifying the buffer contents, we need to unmap the buffer, which copies the updated data back to the GPU. This is done using {{domxref("GPUBuffer.unmap()")}}

```js
vertexBuffer.unmap();
```

### Define and create the rendering pipeline

Now we've got our data into a buffer, the next part of the setup is to actually create our pipeline, ready to be used for rendering.

First of all, we create an object that describes the required layout of our vertex data. This perfectly describes what we saw earlier on in our `vertices` array and vertex shader — each vertex has position and color data. Both are formatted in `float32x4` format (which maps to the WGSL `vec4<f32>` type), and the color data starts at an offset of 16 bytes into each vertex. `arrayStride` specifies the stride, meaning the number of bytes making up each vertex, and `stepMode` specifies that the data should be fetched per-vertex.

```js
const vertexBuffers = [{
    attributes: [{
        shaderLocation: 0, // position
        offset: 0,
        format: 'float32x4'
    }, {
        shaderLocation: 1, // color
        offset: 16,
        format: 'float32x4'
    }],
    arrayStride: 32,
    stepMode: 'vertex'
}];
```

Next, we create a descriptor object that specifies the configuration of our render pipeline stages. For both the shader types, we specify that the {{domxref("GPUShaderModule")}} the required shaders can be found in is `shaderModule`, and the name of the function that acts as the entry point for each shader.

In addition, in the case of the vertex shader we provide our `vertexBuffers` object to provide the expected state of our vertex data. And in the case of our fragment shader, we provide an array of color target states that indicate the specified rendering format (this matches the format specified in our canvas context config earlier).

We also specify a `primitive` state, which in this case just states the type of primitive we will be drawing, and a `layout` of `auto`. The `layout` property defines the layout (structure, purpose, and type) of all the GPU resources (buffers, textures, etc.) used during the execution of the pipeline. In more complex apps, this would take the form of a {{domxref("GPUBindGroupLayout")}} object, created using {{domxref("GPUDevice.createBindGroupLayout()")}} (you can see an example in our [Basic compute pipeline](#basic_compute_pipeline)), which allows the GPU to figure out how to run the pipeline most efficiently ahead of time. Here however we are specifying the `auto` value, which will cause the pipeline to use a default layout.

```js
const pipelineDescriptor = {
    vertex: {
        module: shaderModule,
        entryPoint: 'vertex_main',
        buffers: vertexBuffers
    },
    fragment: {
        module: shaderModule,
        entryPoint: 'fragment_main',
        targets: [{
        format: 'bgra8unorm'
        }]
    },
    primitive: {
        topology: 'triangle-list'
    },
    layout: 'auto'
};
```

Finally, we can create a {{domxref("GPURenderPipeline")}} based on our `pipelineDescriptor` object, by passing it in as a parameter to a {{domxref("GPUDevice.createRenderPipeline()")}} method call.

```js
const renderPipeline = device.createRenderPipeline(pipelineDescriptor);
```

### Running a rendering pass

Now that all the setup is done, we can actually run a rendering pass and draw something onto our `<canvas>`. To encode any commands to be later issued to the GPU, you need to create a {{domxref("GPUCommandEncoder")}} instance, which is done using a {{domxref("GPUDevice.createCommandEncoder()")}} call.

```js
const commandEncoder = device.createCommandEncoder();
```

Next up we start the rendering pass running by creating a {{domxref("GPURenderPassEncoder")}} instance with a {{domxref("GPUCommandEncoder.beginRenderPass()")}} call. This method takes a descriptor object as a parameter, the only mandatory property of which is a `colorAttachments` array. In this case, we specify:

1. A texture view to render into; we create a new view from the `<canvas>` via {{domxref("GPUTexture.createView", "context.getCurrentTexture().createView()")}}.
2. That the view should be "cleared" to a specified color once loaded and before any drawing takes place. This is what causes the blue background behind the triangle.
3. That the value of the current rendering pass should be stored for this color attachment.

```js
const clearColor = { r: 0.0, g: 0.5, b: 1.0, a: 1.0 };

const renderPassDescriptor = {
    colorAttachments: [{
        clearValue: clearColor,
        loadOp: 'clear',
        storeOp: 'store',
        view: context.getCurrentTexture().createView()
    }]
};

const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
```

Now we can invoke methods of the rendering pass encoder to draw our triangle:

1. {{domxref("GPURenderPassEncoder.setPipeline()")}} is called with our `renderPipeline` object as a parameter to specify the pipeline to use for the rendering pass.
2. {{domxref("GPURenderPassEncoder.setVertexBuffer()")}} is called with our `vertexBuffer` object as a parameter to act as the data source to pass to the pipeline to render. The first parameter is the slot to set the vertex buffer for, and is a reference to the index of the element in the `vertexBuffers` array which describes this buffer's layout.
3. {{domxref("GPURenderPassEncoder.draw()")}} sets the drawing in motion. There is data for three vertices inside our `vertexBuffer`, so we set a vertex count value of `3` to draw them all.

```js
passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.draw(3);
```

To finish encoding the sequence of commands and issue them to the GPU, three more steps are needed.

1. We invoke the {{domxref("GPURenderPassEncoder.end()")}} method to signal the end of the render pass command list.
2. We invoke the {{domxref("GPUCommandEncoder.finish()")}} method to complete recording of the issued command sequence and encapsulate it into a {{domxref("GPUCommandBuffer")}} object instance.
3. We submit the {{domxref("GPUCommandBuffer")}} to the device's command queue (represented by a {{domxref("GPUQueue")}} instance) to be sent to the GPU. The device's queue is available via the {{domxref("GPUDevice.queue")}} property, and an array of {{domxref("GPUCommandBuffer")}} instances can be added to the queue via a {{domxref("GPUQueue.submit()")}} call.

These three steps can be achieved via the following two lines:

```js
passEncoder.end();

device.queue.submit([commandEncoder.finish()]);
```

## Basic compute pipeline

In our [basic compute demo](https://webgpu-basic-compute.glitch.me/), we get the GPU to calculate some values, store them in an output buffer, copy the data across to a staging buffer, then map that staging buffer so that the data can be read out to JavaScript and logged to the console.

The app follows a similar structure to the basic rendering demo. We create a {{domxref("GPUDevice")}} reference in the same way as before, and encapsulate our shader code into a {{domxref("GPUShaderModule")}} via a {{domxref("GPUDevice.createShaderModule()")}} call. The difference here is that our shader code only has one shader stage, a compute shader:

```js
const shader = `
@group(0) @binding(1)
var<storage, read_write> output: array<f32>;

@compute @workgroup_size(64)
fn main(

  @builtin(global_invocation_id)
  global_id : vec3<u32>,

  @builtin(local_invocation_id)
  local_id : vec3<u32>,

) {
  output[global_id.x] =
    f32(global_id.x) * 1000. + f32(local_id.x);
}
`;
```

### Create buffers to handle our data

In this example we create two {{domxref("GPUBuffer")}} instances to handle our data, an `output` buffer to write the GPU calculation results directly to at high speed, and a `stagingBuffer` that we'll copy the `output` contents to, which can be mapped to allow JavaScript to access the values.

- `output` is specified as a storage buffer that will be the source of a copy operation.
- `stagingBuffer` is specified as a buffer that can be mapped for reading by JavaScript, and will be the destination of a copy operation.

```js
const BUFFER_SIZE = 1000;

const output = device.createBuffer({
    size: BUFFER_SIZE,
    usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC
});

const stagingBuffer = device.createBuffer({
    size: BUFFER_SIZE,
    usage: GPUBufferUsage.MAP_READ | GPUBufferUsage.COPY_DST,
});
```

### Create a bind group layout

When the pipeline is created, instead of using a `layout` of `auto`, we specify a bind group to use for the pipeline. This involves first creating a {{domxref("GPUBindGroupLayout")}} (via a call to {{domxref("GPUDevice.createBindGroupLayout()")}}) that defines the structure and purpose of GPU resources such as buffers that will be used in this pipeline. This layout is used as a template for bind groups to adhere to. In this case we give the pipeline access to a single memory buffer, tied to binding slot 1 (this matches the relevant binding number in our shader code — `@binding(1)`), usable in the compute stage of the pipeline, and with the buffer's purpose defined as `storage`.

```js
const bindGroupLayout =
device.createBindGroupLayout({
    entries: [{
        binding: 1,
        visibility: GPUShaderStage.COMPUTE,
        buffer: {
            type: "storage",
        }
    }]
});
```

Next we create a {{domxref("GPUBindGroup")}} by calling {{domxref("GPUDevice.createBindGroup()")}}. We pass this method call a descriptor object that specifies the bind group layout to base this bind group on, and the details of the variable to bind to the slot defined in the layout. In this case, we are declaring binding 1, and specifying that it should be written to the `output` buffer we defined earlier).

```js
const bindGroup = device.createBindGroup({
    layout: bindGroupLayout,
    entries: [{
        binding: 1,
        resource: {
        buffer: output,
        },
    }],
});
```

### Create a compute pipeline

With the above all in place, we can now create a compute pipeline by calling {{domxref("GPUDevice.createComputePipeline()")}}, passing it a pipeline descriptor object. This works in a similar way to creating a render pipeline. We describe the compute shader, specifying what module to find the code in and what the entry point is. We also specify a `layout` for the pipeline, in this case creating a layout based on the `bindGroupLayout` we defined earlier via a {{domxref("GPUDevice.createPipelineLayout()")}} call.

```js
const computePipeline = device.createComputePipeline({
    layout: device.createPipelineLayout({
        bindGroupLayouts: [bindGroupLayout]
    }),
    compute: {
      module: shaderModule,
      entryPoint: 'main'
    },
});
```

One difference here from the render pipeline layout is that we are not specifying a primitive type, as we are not drawing anything.

### Running a compute pass

Running a compute pass is similar in structure to running a rendering pass, with some different commands. For a start, the pass encoder is created using {{domxref("GPUCommandEncoder.beginComputePass()")}}.

When issuing the commands, we specify the pipeline to use in the same way as before, using {{domxref("GPURenderPassEncoder.setPipeline()")}}. We then however use {{domxref("GPURenderPassEncoder.setBindGroup()")}} to specify that we want to use our `bindGroup` to specify the data to use in the calculation, and {{domxref("GPURenderPassEncoder.dispatchWorkgroups()")}} to specify the number of GPU workgroups to use to run the calculations.

We then signal the end of the render pass command list using {{domxref("GPURenderPassEncoder.end()")}}.

```js
passEncoder.setPipeline(computePipeline);
passEncoder.setBindGroup(0, bindGroup);
passEncoder.dispatchWorkgroups(Math.ceil(BUFFER_SIZE / 64));

passEncoder.end();
```

### Reading the results back to JavaScript

Before submitting the encoded commands to the GPU for execution using {{domxref("GPUQueue.submit()")}}, we copy the contents of the `output` buffer to the `stagingBuffer` buffer using {{domxref("GPUCommandEncoder.copyBufferToBuffer()")}}.

```js
// Copy output buffer to staging buffer
commandEncoder.copyBufferToBuffer(
    output,
    0, // Source offset
    stagingBuffer,
    0, // Destination offset
    BUFFER_SIZE
);

// End frame by passing array of command buffers to command queue for execution
device.queue.submit([commandEncoder.finish()]);
```

Once the output data is available in the `stagingBuffer`, we use the {{domxref("GPUBuffer.mapAsync()")}} method to map the data to intermediate memory, grab a reference to the mapped range using {{domxref("GPUBuffer.getMappedRange()")}}, copy the data into JavaScript, and then log it to the console. We also unmap the `stagingBuffer` once we are finished with it.

```js
// map staging buffer to read results back to JS
await stagingBuffer.mapAsync(
    GPUMapMode.READ,
    0, // Offset
    BUFFER_SIZE // Length
);

const copyArrayBuffer = stagingBuffer.getMappedRange(0, BUFFER_SIZE);
const data = copyArrayBuffer.slice();
stagingBuffer.unmap();
console.log(new Float32Array(data));
```

## GPU error handling

WebGPU calls are validated asynchronously on the GPU. If errors are found, the problem call is marked as invalid on the GPU side. If another call is made that relies on the return value of an invalidated call, that object will also be marked as invalid, and so on. For this reason, errors in WebGPU are referred to as "contagious".

Now for a brief history lesson. WebGL provides a {{domxref("WebGLRenderingContext.getError", "getError()")}} method to return error information. This is problematic in that it returns errors synchronously, which is bad for performance — each call requires a round-trip to the GPU and requires all previously issued operations to be finished. Its state model is also flat, meaning that errors can leak between unrelated code.

WebGPU improves on this with an asynchronous approach. Each {{domxref("GPUDevice")}} instance maintains its own error scope stack. This stack is initially empty, but you can start pushing an error scope to the stack by invoking {{domxref("GPUDevice.pushErrorScope()")}} to capture errors of a particular type.

Once you are done capturing errors, you can end capture by invoking {{domxref("GPUDevice.popErrorScope()")}}. This pops the scope from the stack and returns a {{jsxref("Promise")}} that resolves to an object instance ({{domxref("GPUValidationError")}} or {{domxref("GPUOutOfMemoryError")}}) describing the first error captured in the scope, or `null` if no errors were captured.

You can find more information about WebGPU error handling in the explainer — see [Object validity and destroyed-ness](https://gpuweb.github.io/gpuweb/explainer/#invalid-and-destroyed) and [Errors](https://gpuweb.github.io/gpuweb/explainer/#errors)

## Interfaces

- {{domxref("GPU")}}
  - : xxx
- {{domxref("GPUAdapter")}}
  - : xxx
- {{domxref("GPUAdapterInfo")}}
  - : xxx
- {{domxref("GPUBindGroup")}}
  - : xxx
- {{domxref("GPUBindGroupLayout")}}
  - : xxx
- {{domxref("GPUBuffer")}}
  - : xxx
- {{domxref("GPUCanvasContext")}}
  - : xxx
- {{domxref("GPUCommandBuffer")}}
  - : xxx
- {{domxref("GPUCommandEncoder")}}
  - : xxx
- {{domxref("GPUCompilationInfo")}}
  - : xxx
- {{domxref("GPUCompilationMessage")}}
  - : xxx
- {{domxref("GPUComputePassEncoder")}}
  - : xxx
- {{domxref("GPUComputePipeline")}}
  - : xxx
- {{domxref("GPUDevice")}}
  - : xxx
- {{domxref("GPUDeviceLostInfo")}}
  - : xxx
- {{domxref("GPUError")}}
  - : xxx
- {{domxref("GPUExternalTexture")}}
  - : xxx
- {{domxref("GPUInternalError")}}
  - : xxx
- {{domxref("GPUOutOfMemoryError")}}
  - : xxx
- {{domxref("GPUPipelineError")}}
  - : xxx
- {{domxref("GPUPipelineLayout")}}
  - : xxx
- {{domxref("GPUQuerySet")}}
  - : xxx
- {{domxref("GPUQueue")}}
  - : xxx
- {{domxref("GPURenderBundle")}}
  - : xxx
- {{domxref("GPURenderBundleEncoder")}}
  - : xxx
- {{domxref("GPURenderPassEncoder")}}
  - : xxx
- {{domxref("GPURenderPipeline")}}
  - : xxx
- {{domxref("GPUSampler")}}
  - : xxx
- {{domxref("GPUShaderModule")}}
  - : xxx
- {{domxref("GPUSupportedFeatures")}}
  - : xxx
- {{domxref("GPUSupportedLimits")}}
  - : xxx
- {{domxref("GPUTexture")}}
  - : xxx
- {{domxref("GPUTextureView")}}
  - : xxx
- {{domxref("GPUUncapturedErrorEvent")}}
  - : xxx
- {{domxref("GPUValidationError")}}
  - : xxx

## Extensions to other interfaces

- {{domxref("HTMLCanvasElement.getContext()")}}
  - : xxx
- {{domxref("Navigator.gpu")}} / {{domxref("WorkerNavigator.gpu")}}
  - : xxx

## Examples

- [Basic compute demo](https://webgpu-basic-compute.glitch.me/)
- [Basic render demo](https://webgpu-basic-render.glitch.me/)
- [WebGPU samples](https://austin-eng.com/webgpu-samples/)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebGPU best practices](https://toji.github.io/webgpu-best-practices/)
- [WebGPU explainer](https://gpuweb.github.io/gpuweb/explainer)
- [WebGPU — All of the cores, none of the canvas](https://surma.dev/things/webgpu/)
