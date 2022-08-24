---
title: XRView.eye
slug: Web/API/XRView/eye
page-type: web-api-instance-property
tags:
  - API
  - AR
  - Eye
  - Property
  - Read-only
  - Reality
  - Reference
  - VR
  - Virtual
  - WebXR
  - WebXR API
  - WebXR Device API
  - XR
  - XRView
  - augmented
  - Experimental
browser-compat: api.XRView.eye
---
{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The {{domxref("XRView")}} interface's read-only **`eye`**
property is a string indicating which eye's viewpoint the `XRView` represents: `left` or
`right`. For views which represent neither eye, such as monoscopic views,
this property's value is `none`.

## Value

A string that can be one of the following values:

- `left`
  - : The {{domxref("XRView")}} represents the point-of-view of the viewer's left eye.
- `right`
  - : The view represents the viewer's right eye.
- `none`
  - : The `XRView` describes a monoscopic view, or the view otherwise doesn't represent a particular eye's point-of-view.

## Usage notes

The primary purpose of this property is to allow the correct area of any pre-rendered
stereo content to be presented to the correct eye. For dynamically-rendered 3D content,
you can usually ignore this and render each of the viewer's views, one after another.

## Examples

This code, from the viewer pose's renderer, iterates over the pose's views and renders
them. _However_, we have flags which, if `true`, indicate that a
particular eye has been injured during gameplay. When rendering that eye, if the flag is
`true`, that view is skipped instead of being rendered.

```js
glLayer = xrSession.renderState.baseLayer;
gl.bindFramebuffer(gl.FRAMEBUFFER, glLayer.framebuffer);
gl.clearColor(0,0, 0, 1.0);
gl.clearDepth(1.0);
gl.clear(gl.COLOR_BUFFER_BIT, gl.DEPTH_BUFFER_BIT);

for (const view of xrPose.views) {
  let skipView = false;

  if (view.eye === "left" && body.leftEye.injured) {
    skipView = updateInjury(body.leftEye);
  } else if (view.eye === "right" && body.rightEye.injured) {
    skipView = updateInjury(body.rightEye);
  }

  if (!skipView) {
    let viewport = glLayer.getViewport(view);
    gl.viewport(viewport.x, viewport.y, viewport.width, viewport.height);
    renderScene(gl, view);
  }
}
```

For each of the views, the value of `eye` is checked and if it's either
`left` or `right`, we check to see if the
`body.leftEye.injured` or `body.rightEye.injured` property is
`true`; if so, we call a function `updateInjury()` on that eye to
do things such as allow a bit of healing to occur, track the progress of a poison
effect, or the like, as appropriate for the game's needs.

`updateInjury()` returns `true` if the eye is still injured or
`false` if the eye has been restored to health by the function. If the
result is `false`, indicating that the eye is now healthy, we render the
scene for that eye. Otherwise, we don't.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
