---
title: XRProjectionLayer.fixedFoveation
slug: Web/API/XRProjectionLayer/fixedFoveation
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - VR
  - WebXR
  - WebXR API
  - WebXR Device API
  - XR
browser-compat: api.XRProjectionLayer.fixedFoveation
---
{{APIRef("WebXR Device API")}}

The **`fixedFoveation`** property of the {{domxref("XRProjectionLayer")}} interface is a number indicating the amount of foveation used by the XR compositor for the layer. Fixed Foveated Rendering (FFR) renders the edges of the eye textures at a lower resolution than the center and reduces the GPU load.

It is most useful for low-contrast textures such as background images, but less for high-contrast ones such as text or detailed images. Authors can adjust the level on a per-frame basis to achieve the best tradeoff between performance and visual quality.

## Value

A number between 0 and 1.

- The minimum amount of foveation is indicated by 0 (full resolution).
- The maximum amount of foveation is indicated by 1 (the edges render at lower resolution).

It's up to the user agent how to interpret the numbers in this range. When changing the foveation level, the effect will visible in the next {{domxref("XRFrame")}}.

Note that some user agents might implement certain levels of foveation, so you might need to adjust the foveation level in large increments to see an effect. Example levels:

- `0`: no foveation
- `1/3`: low foveation
- `2/3`: medium foveation
- `1.0`: maximum foveation

Some devices don't support foveated rendering. In that case `fixedFoveation` is [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) and setting it will not do anything.

## Examples

### Dynamically setting the level of fixed foveation rendering

The `fixedFoveation` property allows you to set the level of foveation at runtime and for each frame. To set the maximum foveation for a given {{domxref("XRProjectionLayer")}}, use a value of `1`.

```js
let glProjectionLayer = glBinding.createProjectionLayer(/* … */);
glProjectionLayer.fixedFoveation = 1; // maximum foveation
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Foveated rendering](https://en.wikipedia.org/wiki/Foveated_rendering)
