---
title: GPUTexture
slug: Web/API/GPUTexture
page-type: web-api-interface
status:
  - experimental
browser-compat: api.GPUTexture
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`GPUTexture`** interface of the {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} represents a container used to store 1D, 2D, or 3D arrays of data, such as images, to use in GPU rendering operations.

A `GPUTexture` object instance is created using the {{domxref("GPUDevice.createTexture()")}} method.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("GPUTexture.depthOrArrayLayers", "depthOrArrayLayers")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : A number representing the depth or layer count of the `GPUTexture` (pixels, or number of layers).
- {{domxref("GPUTexture.dimension", "dimension")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : An enumerated value representing the dimension of the set of texels for each `GPUTexture` subresource.
- {{domxref("GPUTexture.format", "format")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : An enumerated value representing the format of the `GPUTexture`.
- {{domxref("GPUTexture.height", "height")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : A number representing the height of the `GPUTexture` in pixels.
- {{domxref("GPUTexture.label", "label")}} {{Experimental_Inline}}
  - : A string providing a label that can be used to identify the object, for example in {{domxref("GPUError")}} messages or console warnings.
- {{domxref("GPUTexture.mipLevelCount", "mipLevelCount")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : A number representing the number of mip levels of the `GPUTexture`.
- {{domxref("GPUTexture.sampleCount", "sampleCount")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : A number representing the sample count of the `GPUTexture`.
- {{domxref("GPUTexture.usage", "usage")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : The {{glossary("bitwise flags")}} representing the allowed usages of the `GPUTexture`.
- {{domxref("GPUTexture.width", "width")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : A number representing the width of the `GPUTexture` in pixels.

## Instance methods

- {{domxref("GPUTexture.createView", "createView()")}} {{Experimental_Inline}}
  - : Creates a {{domxref("GPUTextureView")}} representing a specific view of the `GPUTexture`.
- {{domxref("GPUTexture.destroy", "destroy()")}} {{Experimental_Inline}}
  - : Destroys the `GPUTexture`.

## Examples

In the WebGPU samples [Textured Cube sample](https://webgpu.github.io/webgpu-samples/samples/texturedCube), a texture to use on the faces of a cube is created by:

- Loading the image into an {{domxref("HTMLImageElement")}} and creating an image bitmap using {{domxref("createImageBitmap()")}}.
- Creating a new `GPUTexture` using `createTexture()`.
- Copying the image bitmap into the texture using {{domxref("GPUQueue.copyExternalImageToTexture()")}}.

```js
//...
let cubeTexture: GPUTexture; // Sample is written in TypeScript
{
  const img = document.createElement("img");

  img.src = new URL(
    "../../../assets/img/Di-3d.png",
    import.meta.url
  ).toString();

  await img.decode();

  const imageBitmap = await createImageBitmap(img);

  cubeTexture = device.createTexture({
    size: [imageBitmap.width, imageBitmap.height, 1],
    format: "rgba8unorm",
    usage:
      GPUTextureUsage.TEXTURE_BINDING |
      GPUTextureUsage.COPY_DST |
      GPUTextureUsage.RENDER_ATTACHMENT,
  });

  device.queue.copyExternalImageToTexture(
    { source: imageBitmap },
    { texture: cubeTexture },
    [imageBitmap.width, imageBitmap.height]
  );
}
//...
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
