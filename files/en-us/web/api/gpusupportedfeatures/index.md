---
title: GPUSupportedFeatures
slug: Web/API/GPUSupportedFeatures
page-type: web-api-interface
status:
  - experimental
browser-compat: api.GPUSupportedFeatures
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`GPUSupportedFeatures`** interface of the {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} is a [`Set`-like object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis) that describes additional functionality supported by a {{domxref("GPUAdapter")}}.

The `GPUSupportedFeatures` object for the current adapter is accessed via the {{domxref("GPUAdapter.features")}} property — use this to test what features your current setup supports. To create a {{domxref("GPUDevice")}} with a specific feature enabled, you need to specify it in the [`requiredFeatures`](/en-US/docs/Web/API/GPUAdapter/requestDevice#requiredfeatures) array of the {{domxref("GPUAdapter.requestDevice()")}} descriptor.

You should note that not all features will be available to WebGPU in all browsers that support it, even if the features are supported by the underlying hardware. This could be due to constraints in the underlying system, browser, or adapter. For example:

- The underlying system might not be able to guarantee exposure of a feature in a way that is compatible with a certain browser.
- The browser vendor might not have found a secure way to implement support for that feature, or might just not have gotten round to it yet.

If you are hoping to take advantage of a specific additional feature in a WebGPU app, thorough testing is advised.

{{InheritanceDiagram}}

## Available features

The following additional features are defined in WebGPU. Bear in mind that the exact set of features available will vary across implementations and physical devices, and will change over time.

| Feature name                         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `bgra8unorm-storage`                 | When enabled, allows `STORAGE_BINDING` [`usage`](/en-US/docs/Web/API/GPUDevice/createTexture#usage) of `bgra8unorm`-[`format`](/en-US/docs/Web/API/GPUDevice/createTexture#format) {{domxref("GPUTexture")}}s.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `clip-distances`                     | When enabled, allows the use of [`clip_distances`](https://gpuweb.github.io/gpuweb/wgsl/#built-in-values-clip_distances) in WGSL.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `depth-clip-control`                 | Allows [depth-clipping](https://gpuweb.github.io/gpuweb/#depth-clipping) to be disabled. If `depth-clip-control` is enabled, the [`unclippedDepth`](/en-US/docs/Web/API/GPUDevice/createRenderPipeline#unclippeddepth) property is available on the `primitive` object included as part of the {{domxref("GPUDevice.createRenderPipeline", "createRenderPipeline()")}} or {{domxref("GPUDevice.createRenderPipelineAsync", "createRenderPipelineAsync()")}} descriptor when creating a {{domxref("GPURenderPipeline")}}. `primitive` describes how a pipeline constructs and rasterizes primitives from its vertex inputs. Set `unclipped-depth` to `true` to disable depth-clipping.                                                                                                                                                                                                                                                                            |
| `depth32float-stencil8`              | Allows creation of textures with the format `depth32float-stencil8`. If `depth32float-stencil8` is enabled, the `depth32float-stencil8` value can be used for the [`format`](/en-US/docs/Web/API/GPUDevice/createTexture#format) property of the {{domxref("GPUDevice.createTexture", "createTexture()")}} descriptor when creating a {{domxref("GPUTexture")}}.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `dual-source-blending`               | When enabled, allows the use of [`dual_source_blending`](https://gpuweb.github.io/gpuweb/wgsl/#extension-dual_source_blending) in WGSL, which uses both pixel shader outputs (`@blend_src(0)` and `@blend_src(1)`) as inputs to a blending operation with the single color attachment at `@location(0)`. Over in WebGPU, `dual-source-blending` enables the following blend factor operations (specified in the [`dstFactor`](/en-US/docs/Web/API/GPUDevice/createRenderPipeline#dstfactor) and [`srcFactor`](/en-US/docs/Web/API/GPUDevice/createRenderPipeline#srcfactor) properties of {{domxref("GPUDevice.createRenderPipeline", "createRenderPipeline()")}} and {{domxref("GPUDevice.createRenderPipelineAsync", "createRenderPipelineAsync()")}} descriptors): `src1`, `one-minus-src1`, `src1-alpha`, and `one-minus-src1-alpha`.                                                                                                                        |
| `float32-blendable`                  | When enabled, allows blending of `r32float`-, `rg32float`-, and `rgba32float`-[`format`](/en-US/docs/Web/API/GPUDevice/createTexture#format) {{domxref("GPUTexture")}}s.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `float32-filterable`                 | When enabled, allows [filtering](/en-US/docs/Web/API/GPUDevice/createSampler#magfilter) of `r32float`-, `rg32float`-, and `rgba32float`-[`format`](/en-US/docs/Web/API/GPUDevice/createTexture#format) {{domxref("GPUTexture")}}s.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `indirect-first-instance`            | When enabled, allows the use of non-zero `firstInstance` values in the `indirectBuffer` property of the `drawIndirect()` and `drawIndexedIndirect()` methods available on {{domxref("GPURenderPassEncoder")}} and {{domxref("GPURenderBundleEncoder")}} instances.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `rg11b10ufloat-renderable`           | When enabled, allows `RENDER_ATTACHMENT` [`usage`](/en-US/docs/Web/API/GPUDevice/createTexture#usage) of `rg11b10ufloat`-[`format`](/en-US/docs/Web/API/GPUDevice/createTexture#format) {{domxref("GPUTexture")}}s, as well as their blending and multisampling.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `shader-f16`                         | When enabled, allows the use of the half-precision floating-point type [`f16`](https://gpuweb.github.io/gpuweb/wgsl/#extension-f16) in WGSL.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `texture-compression-bc`             | Allows creation of two-dimensional BC compressed textures. If `texture-compression-bc` is enabled, the following values can be used for the [`format`](/en-US/docs/Web/API/GPUDevice/createTexture#format) property of the {{domxref("GPUDevice.createTexture", "createTexture()")}} descriptor when creating a {{domxref("GPUTexture")}}: `bc1-rgba-unorm`, `bc1-rgba-unorm-srgb`, `bc2-rgba-unorm`, `bc2-rgba-unorm-srgb`, `bc3-rgba-unorm`, `bc3-rgba-unorm-srgb`, `bc4-r-unorm`, `bc4-r-snorm`, `bc5-rg-unorm`, `bc5-rg-snorm`, `bc6h-rgb-ufloat`, `bc6h-rgb-float`, `bc7-rgba-unorm`, and `bc7-rgba-unorm-srgb`.                                                                                                                                                                                                                                                                                                                                            |
| `texture-compression-bc-sliced-3d`   | Allows creation of three-dimensional BC compressed textures. If `texture-compression-bc-sliced-3d` is enabled, `texture-compression-bc` must also be enabled, as it enables the BC texture formats to be used (see `texture-compression-bc`, above) in the first two dimensions. `texture-compression-bc-sliced-3d` enables those same textures to be used in the third dimension. Adapters that support `texture-compression-bc` always support `texture-compression-bc-sliced-3d`. **Note that this feature is not currently supported in any browser.**                                                                                                                                                                                                                                                                                                                                                                                                       |
| `texture-compression-astc`           | Allows creation of two-dimensional ASTC compressed textures. If `texture-compression-astc` is enabled, the following values can be used for the [`format`](/en-US/docs/Web/API/GPUDevice/createTexture#format) property of the {{domxref("GPUDevice.createTexture", "createTexture()")}} descriptor when creating a {{domxref("GPUTexture")}}: `astc-4x4-unorm`, `astc-4x4-unorm-srgb`, `astc-5x4-unorm`, `astc-5x4-unorm-srgb`, `astc-5x5-unorm`, `astc-5x5-unorm-srgb`, `astc-6x5-unorm`, `astc-6x5-unorm-srgb`, `astc-6x6-unorm`, `astc-6x6-unorm-srgb`, `astc-8x5-unorm`, `astc-8x5-unorm-srgb`, `astc-8x6-unorm`, `astc-8x6-unorm-srgb`, `astc-8x8-unorm`, `astc-8x8-unorm-srgb`, `astc-10x5-unorm`, `astc-10x5-unorm-srgb`, `astc-10x6-unorm`, `astc-10x6-unorm-srgb`, `astc-10x8-unorm`, `astc-10x8-unorm-srgb`, `astc-10x10-unorm`, `astc-10x10-unorm-srgb`, `astc-12x10-unorm`, `astc-12x10-unorm-srgb`, and `astc-12x12-unorm``astc-12x12-unorm-srgb`. |
| `texture-compression-astc-sliced-3d` | Allows creation of three-dimensional ASTC compressed textures. If `texture-compression-astc-sliced-3d` is enabled, `texture-compression-astc` must also be enabled, as it enables the ASTC texture formats to be used (see `texture-compression-astc`, above) in the first two dimensions. `texture-compression-astc-sliced-3d` enables those same textures to be used in the third dimension. Adapters that support `texture-compression-astc` do not always support `texture-compression-astc-sliced-3d`. **Note that this feature is not currently supported in any browser.**                                                                                                                                                                                                                                                                                                                                                                                |
| `texture-compression-etc2`           | Allows creation of two-dimensional ETC2 compressed textures. If `texture-compression-etc2` is enabled, the following values can be used for the [`format`](/en-US/docs/Web/API/GPUDevice/createTexture#format) property of the {{domxref("GPUDevice.createTexture", "createTexture()")}} descriptor when creating a {{domxref("GPUTexture")}}: `etc2-rgb8unorm`, `etc2-rgb8unorm-srgb`, `etc2-rgb8a1unorm`, `etc2-rgb8a1unorm-srgb`, `etc2-rgba8unorm`, `etc2-rgba8unorm-srgb`, `eac-r11unorm`, `eac-r11snorm`, `eac-rg11unorm`, and `eac-rg11snorm`.                                                                                                                                                                                                                                                                                                                                                                                                            |
| `timestamp-query`                    | Allows timestamp queries to be run, which measure the time taken to run compute and render passes. If `timestamp-query` is enabled, the `timestamp` value can be set for the [`type`](/en-US/docs/Web/API/GPUDevice/createQuerySet#type) property of the {{domxref("GPUDevice.createQuerySet", "createQuerySet()")}} descriptor when creating a {{domxref("GPUQuerySet")}}. In addition, the `timestampWrites` property can be set on the {{domxref("GPUCommandEncoder.beginComputePass", "beginComputePass()")}} and {{domxref("GPUCommandEncoder.beginRenderPass", "beginRenderPass()")}} descriptor when creating a {{domxref("GPUComputePassEncoder")}} and {{domxref("GPURenderPassEncoder")}}, respectively. `GPUQuerySet` objects are referenced within the objects included in the `timestampWrites` property, to specify where timestamps should be written to.                                                                                         |

## Instance properties

The following properties are available to all read-only [`Set`-like objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis) (the links below are to the {{jsxref("Set")}} global object reference page).

- {{jsxref("Set.prototype.size", "size")}} {{Experimental_Inline}}
  - : Returns the number of values in the set.

## Instance methods

The following methods are available to all read-only [`Set`-like objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis) (the below links are to the {{jsxref("Set")}} global object reference page).

- {{jsxref("Set.prototype.has()", "has()")}} {{Experimental_Inline}}
  - : Returns a boolean asserting whether an element is present with the given value in the set or not.
- {{jsxref("Set.prototype.values()", "values()")}} {{Experimental_Inline}}
  - : Returns a new iterator object that yields the **values** for each element in the set in insertion order.
- {{jsxref("Set.prototype.keys()", "keys()")}} {{Experimental_Inline}}
  - : An alias for {{jsxref("Set.prototype.values()", "values()")}}.
- {{jsxref("Set.prototype.entries()", "entries()")}} {{Experimental_Inline}}
  - : Returns a new iterator object that contains **an array of `[value, value]`** for each element in the set, in insertion order.
- {{jsxref("Set.prototype.forEach()", "forEach()")}} {{Experimental_Inline}}
  - : Calls a provided callback function once for each value present in the set, in insertion order.

## Examples

```js
async function init() {
  if (!navigator.gpu) {
    throw Error("WebGPU not supported.");
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw Error("Couldn't request WebGPU adapter.");
  }

  const adapterFeatures = adapter.features;

  // Return the size of the set
  console.log(adapterFeatures.size);

  // Check whether a feature is supported by the adapter
  console.log(adapterFeatures.has("texture-compression-astc"));

  // Iterate through all the set values using values()
  const valueIterator = adapterFeatures.values();
  for (const value of valueIterator) {
    console.log(value);
  }

  // Iterate through all the set values using keys()
  const keyIterator = adapterFeatures.keys();
  for (const value of keyIterator) {
    console.log(value);
  }

  // Iterate through all the set values using entries()
  const entryIterator = adapterFeatures.entries();
  for (const entry of entryIterator) {
    console.log(entry[0]);
  }

  // Iterate through all the set values using forEach()
  adapterFeatures.forEach((value) => {
    console.log(value);
  });

  //...
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
- The specification [Feature Index](https://gpuweb.github.io/gpuweb/#feature-index)
