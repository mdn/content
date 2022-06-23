---
title: XRMediaBinding.createQuadLayer()
slug: Web/API/XRMediaBinding/createQuadLayer
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - AR
  - XR
  - WebXR
browser-compat: api.XRMediaBinding.createQuadLayer
---
{{APIRef("WebXR Device API")}}

The **`createQuadLayer()`** method of the {{domxref("XRMediaBinding")}} interface returns an {{domxref("XRQuadLayer")}} object which is a layer that takes up a flat rectangular space in the virtual environment.

## Syntax

```js
createQuadLayer(video, options)
```

### Parameters

- `video`
  - : An {{domxref("HTMLVideoElement")}} to display.
- `options`
  - : An object to configure the {{domxref("XRQuadLayer")}}. The object can have the following properties and `space` is required:
    - `height` {{optional_inline}}
      - : A number specifying the height of the layer.
    - `invertStereo` {{optional_inline}}
      - : A boolean specifying if the natural location of each view in the video should be inverted. By default `false`.
    - `layout` {{optional_inline}}
      - : A string indicating the layout of the video. Possible values:
        - `default`
          - : The layer accommodates all views of the session.
        - `mono`
          - : A single {{domxref("XRSubImage")}} is allocated and presented to both eyes.
        - `stereo`
          - : The user agent decides how it allocates the {{domxref("XRSubImage")}} (one or two) and the layout (top/bottom or left/right). It is recommended to use the `texture-array` texture type for `stereo` layouts.
        - `stereo-left-right`
          - : A single {{domxref("XRSubImage")}} is allocated. Left eye gets the left area of the texture, right eye the right. This layout is designed to minimize draw calls for content that is already in stereo (for example stereo videos or images).
        - `stereo-top-bottom`
          - : A single {{domxref("XRSubImage")}} is allocated. Left eye gets the top area of the texture, right eye the bottom. This layout is designed to minimize draw calls for content that is already in stereo (for example stereo videos or images).
        The default value is `mono`.
    - `space`  **Required**
      - : An {{domxref("XRSpace")}} object defining the layer's spatial relationship with the user's physical environment.
    - `transform` {{optional_inline}}
      - :  An {{domxref("XRRigidTransform")}} object defining the offset and orientation relative to `space`.
    - `width` {{optional_inline}}
      - : A number specifying the width of the layer.

### Return value

An {{domxref("XRQuadLayer")}} object.

## Examples

### Creating an `XRQuadLayer` to display a video

Create an {{domxref("XRMediaBinding")}} and use an {{domxref("HTMLVideoElement")}} that is passed into `createQuadLayer()`. Configure the quad layer using the options listed above and present the layer to the XR device by adding it to the `layers` render state in {{domxref("XRSession.updateRenderState()")}}.

```js
function onXRSessionStarted(xrSession) {
  const xrMediaBinding = new XRMediaBinding(xrSession);
  const video = document.createElement('video');
  video.src = 'just-fascination.mp4';

  const videoLayer = xrMediaBinding.createQuadLayer(video, {
    space: xrReferenceSpace
  });

  xrSession.updateRenderState({
    layers: [videoLayer]
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRQuadLayer")}}
