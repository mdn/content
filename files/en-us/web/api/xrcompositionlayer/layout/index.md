---
title: XRCompositionLayer.layout
slug: Web/API/XRCompositionLayer/layout
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

browser-compat: api.XRCompositionLayer.layout
---
{{APIRef("WebXR Device API")}}

The read-only **`layout`** property of the {{domxref("XRCompositionLayer")}} interface is the layout type of the layer.

To specify the layout type of a layer, use one of the layer creation methods and their `layout` option:

- {{domxref("XRWebGLBinding.createQuadLayer()")}}
- {{domxref("XRWebGLBinding.createCylinderLayer()")}}
- {{domxref("XRWebGLBinding.createEquirectLayer()")}}
- {{domxref("XRWebGLBinding.createCubeLayer()")}}

## Value

A string. Possible values:

- `default`
  - : The layer accommodates all views of the session. It is recommended to use the `texture-array` texture type for `default` layouts.
- `mono`
  - : A single {{domxref("XRSubImage")}} is allocated and presented to both eyes.
- `stereo`
  - : The user agent decides how it allocates the {{domxref("XRSubImage")}} (one or two) and the layout (top/bottom or left/right). It is recommended to use the `texture-array` texture type for `stereo` layouts.
- `stereo-left-right`
  - : A single {{domxref("XRSubImage")}} is allocated. Left eye gets the left area of the texture, right eye the right. This layout is designed to minimize draw calls for content that is already in stereo (for example stereo videos or images).
- `stereo-top-bottom`
  - : A single {{domxref("XRSubImage")}} is allocated. Left eye gets the top area of the texture, right eye the bottom. This layout is designed to minimize draw calls for content that is already in stereo (for example stereo videos or images).

## Examples

### Setting and getting a layer's layout

To specify a layer's layout, use a layer creation method (like {{domxref("XRWebGLBinding.createQuadLayer()")}}) and its `layout` option. To retrieve the type of layer layout, use the `layout` property:

```js
const layer = xrGlBinding.createQuadLayer({
   pixelWidth: 1024,
   pixelHeight: 768,
   layout: "stereo"
});

layer.layout; // "stereo"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRSubImage")}}
- {{domxref("XRWebGLBinding.createQuadLayer()")}}
- {{domxref("XRWebGLBinding.createCylinderLayer()")}}
- {{domxref("XRWebGLBinding.createEquirectLayer()")}}
- {{domxref("XRWebGLBinding.createCubeLayer()")}}
