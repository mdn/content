---
title: "XRSession: environmentBlendMode property"
short-title: environmentBlendMode
slug: Web/API/XRSession/environmentBlendMode
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.XRSession.environmentBlendMode
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The {{domxref("XRSession")}} interface's _read-only_ **`environmentBlendMode`**
property identifies if, and to what degree, the computer-generated imagery is overlaid atop the real world.

This is used to differentiate between fully-immersive VR sessions and AR sessions which render
over a pass-through image of the real world, possibly partially transparently.

## Value

A string defining if and how virtual, rendered content is overlaid atop the image of the real world.

Possible values are:

- `opaque`
  - : The rendered image is drawn without allowing any pass-through imagery. This is primarily used by fully-immersive VR headsets, which totally obscure the surrounding environment, with none of the real world shown to the user at all. The alpha values specified in the {{domxref("XRSession")}}'s {{domxref("XRSession.renderState", "renderState")}} property's `baseLayer` field are ignored since the alpha values for the rendered imagery are all treated as being 1.0 (fully opaque).
- `additive`
  - : Primarily used by AR devices with transparent lenses which directly allow reality to pass through to the user's eyes, the `additive` blending mode is designed to be used in a situation in which the device has no control over the background and its brightness, since that isn't being digitally controlled. All the device can do is add more light to the image; it can't make things get darker. Therefore, black is rendered as fully transparent, and there's no way to make a pixel fully opaque. As with the `opaque` setting, alpha values specified are ignored and treated as if they were 1.0.
- `alpha-blend`
  - : Used by headsets or goggles which use cameras to capture the real world and display it digitally on the screen or screens used to render the content for the user to see, this offers a way to create an AR presentation using a VR device. Alpha blending can also be used by non-wearable devices that provide AR modes, such as phones or tablets using cameras to capture the real world for use in AR apps. Since the real world is being digitally presented, the brightness of each pixel can be controlled, whether it's reality or the rendered XR image, the user's environment can be blended with the virtual environment with each pixel having its color and brightness precisely controlled.
    In this mode, the `XRSession`'s `renderState.baseLayer` property provides relative weights of the artificial layer during the compositing process. Pixels whose alpha value is 1.0 are rendered fully opaque, totally obscuring the real world, while pixels with an alpha of 0.0 are totally transparent, leaving the surrounding environment to pass through.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
