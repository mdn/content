---
title: "XRView: transform property"
short-title: transform
slug: Web/API/XRView/transform
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.XRView.transform
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The read-only **`transform`** property of the
{{domxref("XRView")}} interface is an {{domxref("XRRigidTransform")}} object which
provides the position and orientation of the viewpoint relative to the
{{domxref("XRReferenceSpace")}} specified when the
{{domxref("XRFrame.getViewerPose()")}} method was called to obtain the view object.

With the `transform`, you can then position the view as a camera within the
3D scene. If you instead need the more traditional view matrix, you can get using
`view.transform.inverse.matrix`; this gets the underlying
{{domxref("XRRigidTransform.matrix", "matrix")}} of the transform's
{{domxref("XRRigidTransform.inverse", "inverse")}}.

## Value

A {{domxref("XRRigidTransform")}} object specifying the position and orientation of the
viewpoint represented by the `XRView`.

## Examples

For each view making up the presented scene, the view's `transform`
represents the position and orientation of the viewer or camera relative to the
reference space's origin. You can then use the inverse of this matrix to transform the
objects in your scene to adjust their placement and orientation to simulate the viewer's
movement through space.

In this example, we see an outline of a code fragment used while rendering an
{{domxref("XRFrame")}}, which makes use of the view transform to place objects in the
world during rendering.

```js
const modelViewMatrix = mat4.create();
const normalMatrix = mat4.create();

for (const view of pose.views) {
  const viewport = glLayer.getViewport(view);
  gl.viewport(viewport.x, viewport.y, viewport.width, viewport.height);

  for (const obj of world.objects) {
    mat4.multiply(modelViewMatrix, view.transform.inverse.matrix, obj.matrix);
    mat4.invert(normalMatrix, modelViewMatrix);
    mat4.transpose(normalMatrix, normalMatrix);

    obj.render(modelViewMatrix, normalMatrix);
  }
}
```

Two matrices are created outside the rendering loop; this avoids repeatedly allocating
and deallocating the matrices, and generally reduces overhead by reusing the same matrix
for each object rendered.

Then we iterate over each {{domxref("XRView")}} found in the
{{domxref("XRViewerPose")}}'s list of {{domxref("XRViewerPose.views", "views")}}. There
will usually be two: one for the left eye and one for the right, but there may be only
one if in monoscopic mode. Currently, WebXR doesn't support more than two views per
pose, although room has been left to extend the specification to support that in the
future with some additions to the API.

For each view, we obtain its viewport and pass that to WebGL using
{{domxref("WebGLRenderingContext.viewport", "gl.viewport()")}}. For the left eye, this
will be the left half of the canvas, while the right eye will use the right half.

Then we iterate over each object that makes up the scene. Each object's model view
matrix is computed by multiplying its own matrix which describes the object's own
position and orientation by the additional position and orientation adjustments needed
to match the camera's movement. To convert the "camera focused" transform matrix into an
"object focused" transform, we use the transform's inverse, thus taking the matrix
returned by {{domxref("XRRigidTransform.matrix", "view.transform.inverse.matrix")}}. The
resulting model view matrix will apply all the transforms needed to move and rotate the
object based on the relative positions of the object and the camera. This will simulate
the movement of the camera even though we're actually moving the object.

We then compute the normals for the model view matrix by inverting it, then transposing
it.

Finally, we call the object's `render()` routine, passing along the
`modelViewMatrix` and `normalMatrix` so the renderer can place and
light the object properly.

> [!NOTE]
> This example is derived from a larger example…
> **<<<--- finish and add link --->>>**

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
