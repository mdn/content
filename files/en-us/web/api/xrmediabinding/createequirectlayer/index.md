---
title: XRMediaBinding.createEquirectLayer()
slug: Web/API/XRMediaBinding/createEquirectLayer
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - AR
  - XR
  - WebXR
browser-compat: api.XRMediaBinding.createEquirectLayer
---
{{APIRef("WebXR Device API")}}

The **`createEquirectLayer()`** method of the {{domxref("XRMediaBinding")}} interface returns an {{domxref("XREquirectLayer")}} object which is a layer that maps an equirectangular coded data onto the inside of a sphere.

## Syntax

```js
createEquirectLayer(video, options)
```

### Parameters

- `video`
  - : An {{domxref("HTMLVideoElement")}} to display.
- `options`
  - : An object to configure the {{domxref("XREquirectLayer")}}. The object can have the following properties and `space` is required:
    - `centralHorizontalAngle` {{optional_inline}}
      - : A number indicating the central horizontal angle in radians for the sphere. Default value: `6.28318` (2π).
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
    - `lowerVerticalAngle` {{optional_inline}}
      - : A number indicating the lower vertical angle in radians for the sphere. Default value: `-1.570795` (-π/2).
    - `radius` {{optional_inline}}
      - : A number indicating the radius of the sphere. Default value `0.0`.
    - `space` **Required**
      - : An {{domxref("XRSpace")}} object defining the layer's spatial relationship with the user's physical environment.
    - `transform` {{optional_inline}}
      - : An {{domxref("XRRigidTransform")}} object defining the offset and orientation relative to `space`.
    - `upperVerticalAngle` {{optional_inline}}
      - : A number indicating the upper vertical angle in radians for the sphere. Default value: `1.570795` (π/2).

### Return value

An {{domxref("XREquirectLayer")}} object.

## Examples

### Creating an `XREquirectLayer` to display a video

Create an {{domxref("XRMediaBinding")}} and use an {{domxref("HTMLVideoElement")}} that is passed into `createEquirectLayer()`. Configure the quad layer using the options listed above and present the layer to the XR device by adding it to the `layers` render state in {{domxref("XRSession.updateRenderState()")}}.

```js
function onXRSessionStarted(xrSession) {
  const xrMediaBinding = new XRMediaBinding(xrSession);
  const video = document.createElement('video');
  video.src = 'just-fascination.mp4';

  const videoLayer = xrMediaBinding.createEquirectLayer(video, {
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

- {{domxref("XREquirectLayer")}}
