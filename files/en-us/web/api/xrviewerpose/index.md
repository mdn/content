---
title: XRViewerPose
slug: Web/API/XRViewerPose
page-type: web-api-interface
tags:
  - 3D
  - API
  - AR
  - Graphics
  - Mixed Reality
  - Overview
  - Reality
  - Reference
  - VR
  - Virtual
  - WebXR
  - WebXR API
  - WebXR Device API
  - XR
  - augmented
browser-compat: api.XRViewerPose
---
{{APIRef("WebXR Device API")}}

The WebXR Device API interface **`XRViewerPose`** represents the pose (the position and orientation) of a viewer's point of view on the scene. Each `XRViewerPose` can have multiple views to represent, for example, the slight separation between the left and right eye.

This view can represent anything from the point-of-view of a user's XR headset to the viewpoint represented by a player's movement of an avatar using mouse and keyboard, presented on the screen, to a virtual camera capturing the scene for a spectator.

{{InheritanceDiagram}}

## Properties

_In addition to the properties inherited from {{domxref("XRPose")}}, `XRViewerPose` includes the following:_

- {{domxref("XRViewerPose.views", "views")}} {{ReadOnlyInline}}
  - : An array of {{domxref("XRView")}} objects, one for each viewpoint on the scene which is needed to represent the scene to the user. A typical headset provides a viewer pose with two views whose {{domxref("XRView.eye", "eye")}} property is either `left` or `right`, indicating which eye that view represents. Taken together, these views can reproduce the 3D effect when displayed on the XR device.

## Usage notes

The `XRViewerPose` object is used to describe the state of a viewer of a WebXR scene as it's tracked by the user's XR hardware. The viewer may be the virtual representation of the user, or it may represent another device or interface which may serve as the source of a position and orientation that make up a view upon the scene. For example, every player in a MMORPG might have an instance of `XRViewerPose` to provide a way to calculate what they can see; if the game provides a mechanism that tells the player if another player sees them, or that they see another player, this information becomes crucial.

An `XRViewerPose` is always obtained and referenced relative to an existing {{domxref("XRReferenceSpace")}}. This ensures that positions and orientations are reported using the expected relative coordinate system.

To render a scene using the `XRViewerPose` representing the user's head, one would iterate over the views in the {{domxref("XRViewerPose.views", "views")}} array, rendering them one after another. By calling {{domxref("WebGLRenderingContext.viewport", "viewport()")}} on the WebGL context, specifying the `XRView` as input, you can get the viewport to use when rendering in order to draw the frame for that eye into the correct part of the drawing surface.

Also, when rendering the scene for spectators or other players in a multiplayer game, the {{domxref("XRPose.transform", "transform")}} of the `XRViewerPose` can be used to determine both placement and facing direction of the other players in the game, so that they can be drawn in the correct place with the correct facing.

The viewer's pose for the animation frame represented by {{domxref("XRFrame")}} can be obtained by calling the frame's {{domxref("XRFrame.getViewerPose", "getViewerPose()")}} method, specifying the reference space in which the origin's position should be computed. The returned `XRViewerPose` tells you where the viewer is and what direction they're facing at the time at which the frame takes place.

## Examples

In this example—part of the code to render an {{domxref("XRFrame")}},
`getViewerPose()` is called to get an `XRViewerPose` using the
same reference space the code is using as its base reference space. If a valid pose is
returned, the frame is rendered by clearing the backbuffer and then rendering each of
the views in the pose; these are most likely the views for the left and right eyes.

```js
const pose = frame.getViewerPose(xrReferenceSpace);

if (pose) {
  const glLayer = xrSession.renderState.baseLayer;

  gl.bindFrameBuffer(gl.FRAMEBUFFER, glLayer.framebuffer);
  gl.clearColor(0, 0, 0, 1);
  gl.clearDepth(1);
  gl.clear(gl.COLOR_BUFFER_BIT, gl.DEPTH_BUFFER_BIT);

  for (const view of pose.views) {
    const viewport = glLayer.getViewport(view);
    gl.viewport(viewport.x, viewport.y, viewport.width, viewport.height);

    /* render the scene for the eye view.eye */
  }
}
```

Passing each `view` to {{domxref("XRWebGLLayer.getViewport", "getViewport()")}} returns the WebGL viewport to apply in order to cause the rendered
output to be positioned correctly in the framebuffer for rendering to the corresponding eye on the output device.

This code is derived from {{SectionOnPage("/en-US/docs/Web/API/WebXR_Device_API/Movement_and_motion", "Drawing a
  frame")}}. You can see more context and see much more on that page.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API)
- [Movement, orientation, and motion](/en-US/docs/Web/API/WebXR_Device_API/Movement_and_motion)
- {{domxref("XRPose")}} and {{domxref("XRView")}}
