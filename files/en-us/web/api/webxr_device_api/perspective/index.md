---
title: A perspective retrospective for WebXR developers
slug: Web/API/WebXR_Device_API/Perspective
page-type: guide
---

{{DefaultAPISidebar("WebXR Device API")}}

Because [WebXR](/en-US/docs/Web/API/WebXR_Device_API) uses [WebGL](/en-US/docs/Web/API/WebGL_API) to render the views that form the 3D environment displayed using the XR hardware, it's easy to think that the perspective-related matters are identical to those found in any WebGL project. This is largely true, but there are a few specific topics that need to be revisited and some minor additional guidelines considered in order to ensure that your app looks right and, more importantly, that your 3D world doesn't cause people to become ill from vertigo or other effects that can be caused when what's being seen doesn't match what the brain expects from reality.

In this article, we examine scenarios in which the way your project calculates, applies, and thinks about perspective may differ from code written for non-XR applications.

## Viewing frustum frustrations

Every WebXR session, represented by an {{domxref("XRSession")}} object, offers a set of options that can be configured by creating a new {{domxref("XRRenderState")}} object and activating the updated state by calling the session's {{domxref("XRSession.updateRenderState", "updateRenderState()")}} method to replace the current configuration.

The majority of these values define the XR device's [viewing frustum](/en-US/docs/Web/API/WebGL_API/WebGL_model_view_projection#the_viewing_frustum); that is, the subset of the device's visual field that should be rendered. The viewing frustum can be represented using four key data points: the field of view angle, the aspect ratio of the rendered image, and the distances to the near and far clipping planes.

### Welcome to the projection matrix

Most of the time, the projection model you'll use is the perspective projection model, so its projection matrix is called the **[perspective projection matrix](/en-US/docs/Web/API/WebGL_API/WebGL_model_view_projection#perspective_projection_matrix)**. This matrix is used to map each pixel from the 3D virtual world to a point in the 2D backbuffer for the view being rendered.

Under typical circumstances, you can and should get the perspective projection matrix directly from the view you're rendering. The {{domxref("XRView")}} object's {{domxref("XRView.projectionMatrix", "projectionMatrix")}} property holds the projection matrix representing the view's perspective, and should almost always be used without alteration. Changes made to the projection matrix provided by the `XRView` are likely to result in distortion or poor alignment of the rendered content relative to the real-world scenery; this could be significant enough to cause [virtual reality sickness](https://en.wikipedia.org/wiki/Virtual_reality_sickness) in at least some of your users.

For example, if your app uses a WebGL uniform named `uProjectionMatrix` to pass the projection matrix to your shaders, you might use code like this to pass the projection matrix for the `view` currently being rendered:

```js
gl.uniformMatrix4fv(uProjectionMatrix, false, view.projectionMatrix);
```

### Customizing the projection matrix

Although normally you should avoid manually building or altering the projection matrix provided by the view, you can do so in some situations. The most common reason it may make sense to do this is to alter the near and far clipping plane distances to increase or reduce the number of polygons to be rendered, for performance reasons. When games offer preferences to adjust the viewing distance, that is done by changing these plane distance values.

In immersive mode, the WebXR system obtains the default [viewing frustum](/en-US/docs/Web/API/WebGL_API/WebGL_model_view_projection#the_viewing_frustum) from the software provided by the hardware vendor. This viewing frustum is based on some combination of the device's lenses, display hardware, and cameras. Everything from the size of the imaging sensor to the focal length of the lens is involved in this calculation.

Immersive experiences use hardware-defined fields of view, focal lengths, and so forth, so when using an immersive session, you can only change the near and far clipping distances. This is done by setting the values of the `XRRenderState` properties {{domxref("XRRenderState.depthNear", "depthNear")}} and {{domxref("XRRenderState.depthFar", "depthFar")}}.

In inline mode, you can also change the field of view directly by setting the value of the {{domxref("XRSession.renderState", "renderState")}}'s {{domxref("XRRenderState.inlineVerticalFieldOfView", "inlineVerticalFieldOfView")}} property. This property needs to be set to `null` for any immersive session.

Once you have the viewing frustum, you can compute the perspective projection matrix that WebGL uses when rendering the scene using a function like this:

```js
function makePerspectiveMatrix(fieldOfViewInRadians, aspectRatio, near, far) {
  const f = 1.0 / Math.tan(fieldOfViewInRadians / 2);
  const rangeInv = 1 / (near - far);

  return [
    f / aspectRatio,
    0,
    0,
    0,
    0,
    f,
    0,
    0,
    0,
    0,
    (near + far) * rangeInv,
    -1,
    0,
    0,
    near * far * rangeInv * 2,
    0,
  ];
}
```

The values of `near` and `far` are obtained directly from the frustum; they're the distance from the origin to the closest point on the near clipping plane and the far clipping plane, respectively. The aspect ratio is the value obtained by dividing the width of the field of view by its height. If the target display uses a 16:9 aspect ratio, the value used for `aspectRatio` should be `16/9`, or 1.7777777778.

If you're using a library or framework that provides matrix math functions, it will almost certainly have a similar function include. For example, in the popular [glMatrix](https://glmatrix.net/) library, you'll find this in the function [`mat4.perspective()`](https://glmatrix.net/docs/module-mat4.html#.perspective).

Regardless of where it comes from, once you have the projection matrix, you can use it when calling WebGL to render your scene.

## Aligning with reality

In augmented reality (AR) applications, the contents you render are overlaid atop the real world. To do this well, your perspective calculations need to match the viewer's perspective of the world around them. If you don't, your objects won't correctly align with reality.

If your virtual camera's perspective projection matrix doesn't result in virtual objects having the same apparent perspective as the real world, the disjunction between the virtual and physical worlds could be jarring or, even worse, induce vertigo, motion sickness, or other forms of discomfort in your app's users.

A related issue is that if you use your perspective matrix to determine where to place objects, a mismatch between your perspective projection matrix and the user's physical perspective on the world could result in the objects not being positioned accurately. If your app lets the user hang virtual paintings on their walls, for example, but the perspective matrix doesn't match up, the placed paintings could wind up not actually up against the wall, partially intersecting the wall, or with one end closer to the wall than the other instead of being properly parallel to the wall.

## See also

- [WebGL model view projection](/en-US/docs/Web/API/WebGL_API/WebGL_model_view_projection)
- [Viewpoints and viewers: Simulating cameras in WebXR](/en-US/docs/Web/API/WebXR_Device_API/Cameras)
