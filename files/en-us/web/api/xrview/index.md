---
title: XRView
slug: Web/API/XRView
page-type: web-api-interface
status:
  - experimental
browser-compat: api.XRView
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

The [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API)'s **`XRView`** interface describes a single view into the XR scene for a specific frame, providing orientation and position information for the viewpoint. You can think of it as a description of a specific eye or camera and how it views the world. A 3D frame will involve two views, one for each eye, separated by an appropriate distance which approximates the distance between the viewer's eyes. This allows the two views, when projected in isolation into the appropriate eyes, to simulate a 3D world.

## Instance properties

- {{domxref("XRView.eye", "eye")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Which of the two eyes (`left`) or (`right`) for which this `XRView` represents the perspective. This value is used to ensure that any content which is pre-rendered for presenting to a specific eye is distributed or positioned correctly. The value can also be `none` if the `XRView` is presenting monoscopic data (such as a 2D image, a fullscreen view of text, or a close-up view of something that doesn't need to appear in 3D).
- {{domxref("XRView.isFirstPersonObserver", "isFirstPersonObserver")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a boolean indicating if the `XRView` is a first-person observer view.
- {{domxref("XRView.projectionMatrix", "projectionMatrix")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : The projection matrix that will transform the scene to appear correctly given the point-of-view indicated by `eye`. This matrix should be used directly in order to avoid presentation distortions that may lead to potentially serious user discomfort.
- {{domxref("XRView.recommendedViewportScale", "recommendedViewportScale")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : The recommended viewport scale value that you can use for `requestViewportScale()` if the user agent has such a recommendation; [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) otherwise.
- {{domxref("XRView.transform", "transform")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : An {{domxref("XRRigidTransform")}} which describes the current position and orientation of the viewpoint in relation to the {{domxref("XRReferenceSpace")}} specified when {{domxref("XRFrame.getViewerPose", "getViewerPose()")}} was called on the {{domxref("XRFrame")}} being rendered.

## Instance methods

- {{domxref("XRView.requestViewportScale", "requestViewportScale()")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Requests that the user agent should set the requested viewport scale for this viewport to the requested value.

## Usage notes

### Positions and number of XRViews per frame

While rendering a scene, the set of views that are used to render the scene for the viewer as of the current frame are obtained by calling the {{domxref("XRFrame")}} object's {{domxref("XRFrame.getViewerPose", "getViewerPose()")}} method to get the {{domxref("XRViewerPose")}} representing (in essence) the position of the viewer's head. That object's {{domxref("XRViewerPose.views", "views")}} property is a list of all of the `XRView` objects representing the viewpoints which can be used to construct the scene for presentation to the user.

It's possible to have `XRView` objects which represent overlapping regions as well as entirely disparate regions; in a game, you might have views that can be presented to observe a remote site using a security camera or other device, for example. In other words, don't assume there are exactly two views on a given viewer; there can be as few as one (such as when rendering the scene in `inline` mode, and potentially many (especially if the field of view is very large). There might also be views representing observers watching the action, or other viewpoints not directly associated with a player's eye.

In addition, the number of views can change at any time, depending on the needs of the time. So you should process the view list every time without making assumptions based on previous frames.

All positions and orientations within the views for a given {{domxref("XRViewerPose")}} are specified in the reference space that was passed to {{domxref("XRFrame.getViewerPose()")}}; this is called the **viewer reference space**. The {{domxref("XRView.transform", "transform")}} property describes the position and orientation of the eye or camera represented by the `XRView`, given in that reference space.

### The destination rendering layer

To render a frame, you iterate over the `XRViewerPose`'s views, rendering each of them into the appropriate viewport within the frame's {{domxref("XRWebGLLayer")}}. Currently, the specification (and therefore all current implementations of WebXR) is designed around rendering every `XRView` into a single `XRWebGLLayer`, which is then presented on the XR device with half used for the left eye and half for the right eye. The {{domxref("XRViewport")}} for each view is used to position the rendering into the correct half of the layer.

If in the future it becomes possible for each view to render into a different layer, there would have to be changes made to the API, so it's safe for now to assume that all views will render into the same layer.

## Examples

### Preparing to render every view for a pose

To draw everything the user sees, each frame requires iterating over the list of views returned by the {{domxref("XRViewerPose")}} object's {{domxref("XRViewerPose.views", "views")}} list:

```js
for (const view of pose.views) {
  const viewport = glLayer.getViewport(view);

  gl.viewport(viewport.x, viewport.y, viewport.width, viewport.height);

  // Draw the scene; the eye being drawn is identified
  // by view.eye.
}
```

### Special view transforms

There are a few special transforms that are used on the view while rendering and lighting a scene.

#### Model view matrix

The **model view matrix** is a matrix which defines the position of an object relative to the space in which it's located: If `objectMatrix` is a transform applied to the object to provide its basic position and rotation, then the model view matrix can be computed by multiplying the object's matrix by the inverse of the view transform matrix, like this:

```js
mat4.multiply(modelViewMatrix, view.transform.inverse.matrix, objectMatrix);
```

#### Normal matrix

The model view's **normal matrix** is used when lighting the scene, in order to transform each surface's normal vectors to ensure that the light is reflected in the correct direction given the orientation and position of the surface relative to the light source or sources. It's computed by inverting then transposing the model view matrix:

```js
mat4.invert(normalMatrix, modelViewMatrix);
mat4.transpose(normalMatrix, normalMatrix);
```

### Teleporting an object

To programmatically move and/or rotate (often referred to as **teleporting**) an object, you need to create a new reference space for that object which applies a transform that encapsulates the desired changes. The `createTeleportTransform()` function returns the transform needed to move and rotate an object whose current situation is described by the reference space `refSpace` to a new position and orientation which is computed using previously recorded mouse and keyboard input data which has generated offsets for yaw, pitch, and position along all three axes.

```js
function applyMouseMovement(refSpace) {
  if (
    !mouseYaw &&
    !mousePitch &&
    !axialDistance &&
    !transverseDistance &&
    !verticalDistance
  ) {
    return refSpace;
  }

  // Compute the quaternion used to rotate the image based
  // on the pitch and yaw.

  quat.identity(inverseOrientation);
  quat.rotateX(inverseOrientation, inverseOrientation, -mousePitch);
  quat.rotateY(inverseOrientation, inverseOrientation, -mouseYaw);

  // Compute the true "up" vector for our object.

  vec3.cross(vecX, vecY, cubeOrientation);
  vec3.cross(vecY, cubeOrientation, vecX);

  // Now compute the transform that teleports the object to the
  // specified point and save a copy of it to display to the user
  // later; otherwise we probably wouldn't need to save mouseMatrix
  // at all.

  let newTransform = new XRRigidTransform(
    { x: transverseDistance, y: verticalDistance, z: axialDistance },
    {
      x: inverseOrientation[0],
      y: inverseOrientation[1],
      z: inverseOrientation[2],
      w: inverseOrientation[3],
    },
  );
  mat4.copy(mouseMatrix, newTransform.matrix);

  // Create a new reference space that transforms the object to the new
  // position and orientation, returning the new reference space.

  return refSpace.getOffsetReferenceSpace(newTransform);
}
```

This code is broken into four sections. In the first, the quaternion `inverseOrientation` is computed. This represents the rotation of the object given the values of `mousePitch` (rotation around the object's reference's space's X axis) and `mouseYaw` (rotation around the object's Y axis).

The second section computes the "up" vector for the object. This vector indicates the direction which is "up" in the scene overall, but in the object's reference space.

The third section creates the new {{domxref("XRRigidTransform")}}, specifying a point providing the offsets along the three axes as the first parameter, and the orientation quaternion as the second parameter. The returned object's {{domxref("XRRigidTransform.matrix", "matrix")}} property is the actual matrix that transforms points from the scene's reference space to the object's new position.

Finally, a new reference space is created to describe the relationship between the two reference spaces fully. That reference space is returned to the caller.

To use this function, we pass the returned reference space into {{domxref("XRFrame.getPose()")}} or {{domxref("XRFrame.getViewerPose", "getViewerPose()")}}, as appropriate for your needs. The returned {{domxref("XRPose")}} will then be used to render the scene for the current frame.

You can find a more extensive and complete example in our article [Movement, orientation, and motion](/en-US/docs/Web/API/WebXR_Device_API/Movement_and_motion).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
