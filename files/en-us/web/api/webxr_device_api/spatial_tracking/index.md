---
title: "Spaces and reference spaces: Spatial tracking in WebXR"
slug: Web/API/WebXR_Device_API/Spatial_tracking
page-type: guide
---

{{DefaultAPISidebar("WebXR Device API")}}

The WebXR APIs used for implementing augmented and virtual reality is designed specifically to provide the ability to insert a human into a virtual environment. To accomplish this, software needs the ability to not only track the locations, orientation, and movements of objects in the virtual world, but the user's location, orientation, and movement as well. But WebXR goes beyond that by adding the ability to track the location, orientation, and motion of the input devices which generate data used to determine the position and movement of individual parts of the viewer's body (with appropriate equipment).

The location and movement of the user's headset represent their head's position and orientation in the virtual environment. Hand controllers represent their hands in the same manner. Other hardware elements can be used similarly to represent other parts of the body, providing additional data to use when simulating the user's actions in their environment.

In this guide, we'll explore how WebXR uses **spaces** and, more specifically, **reference spaces**, to track the positions, orientations, and movements of objects and of the user's body in the virtual world.

> **Note:** This article presumes that you are familiar with the concepts introduced in [Geometry and reference spaces in WebXR](/en-US/docs/Web/API/WebXR_Device_API/Geometry): that is, the basics of 3D coordinate systems, as well as WebXR spaces, reference spaces, and how reference spaces are used to create local coordinate systems for individual objects or movable components within a scene.

## Representing a position using a reference space

As covered in [Defining spatial relationships with reference spaces](/en-US/docs/Web/API/WebXR_Device_API/Geometry#defining_spatial_relationships_with_reference_spaces), reference spaces establish a local coordinate system which is offset from another coordinate system that is itself defined by some other space. Thus, a reference space can be used to define the position and orientation of a point and by extension the entire object for which that point is the origin. While this is a little heavy-handed to be used for every single object in a scene, it can be very useful for a few specific objects to have their own coordinate system in this manner.

- **The world space**; the origin of this space is the origin of the [WebGL coordinate system](/en-US/docs/Web/API/WebGL_API/WebGL_model_view_projection) underlying the entire 3D canvas.
- The player, avatar, or camera; the origin of this space is used as the camera position for rendering the scene to be displayed to the user.
- The hand and/or hand controller; each of these represents one of the user's hands, either in the form of the hand itself or a controller (or both). The origin is generally the center of the user's fisted hand.
- **The target ray**; each controller or other handheld device may have a targeting ray associated with it, which is represented by a space whose origin is at the point on the controller at which the ray is emitted, and is oriented so that -Z extends in the direction of the target it's pointing at.

Because each of these is defined using a reference space as its foundation, the WebXR Device API can easily be used to convert among the coordinate systems, perform operations affecting these spaces and their corresponding objects, and so forth.

## Describing a position relative to a space

There are two scenarios in which you may need to describe a position and/or orientation relative to a space. The first is [described above](#offsetting_or_moving_reference_spaces): applying a reference space to an offset (or vice versa, since the result is the same) to determine the transform matrix that represents the resulting location in the space's coordinate system.

### Poses

Once your reference space or spaces are established for the various key objects in the scene, you will have times when you need to describe another position relative to the origin of a particular reference space. This is done using poses. A pose, put, describes a position and orientation relative to the origin of the reference space from which it was created.

In WebXR, a pose is represented by an {{domxref("XRPose")}} object, whose {{domxref("XRPose.transform", "transform")}} property is an {{domxref("XRRigidTransform")}} defining the transform matrix that, applied to any coordinate, vector, or matrix in the original space, converts it to the target space. Thus a pose can be used to not only convert and determine positions, but also rotational information.

There is only one way to create an {{domxref("XRPose")}}, and that's using the {{domxref("XRFrame.getPose", "getPose()")}} method on an animation frame as given using an {{domxref("XRFrame")}} object. This means that most frequently, you'll be using poses within your frame rendering code, which is executed as a callback from the {{domxref("XRFrame")}} method {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}}.

`getPose()` computes the position of an {{domxref("XRReferenceSpace")}} relative to the origin of a specified {{domxref("XRSpace")}} and then creates a pose representing the resulting position and orientation.

For example, if you wish to draw a hand controller's representation using the controller's {{domxref("XRInputSource.gripSpace", "gripSpace")}}, you can get the pose needed like this:

```js
let controlPose = frame.getPose(inputSource.gripSpace, worldRefSpace);
```

This converts the position and orientation of the input's grip space to use the world's coordinate system, then generates the corresponding `XRPose`, storing it in `controlPose`. You can then apply `controlPose`'s {{domxref("XRPose.transform", "transform")}} to the vertices in the object model representing the controller to calculate the WebGL coordinates to use when rendering the controller's representation to the framebuffer.

### Viewer poses

A specialized type of pose, the **viewer pose**, is the pose that represents the perspective of the viewer of the scene. A viewer pose is represented by WebXR's {{domxref("XRViewerPose")}} interface. When rendering a frame, you'll use the viewer pose to determine the position and facing direction of the viewer in order to [place the virtual camera](/en-US/docs/Web/API/WebXR_Device_API/Cameras) and [render the scene](/en-US/docs/Web/API/WebXR_Device_API/Rendering).

The only way to obtain a pose that adapts positional information from one space to another is through the {{domxref("XRFrame")}} object received by your frame rendering callback function specified when you called the {{domxref("XRSession")}} method {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}}.

For example, given an {{domxref("XRSession")}} whose reference space is `worldRefSpace`, the following line of code would request the first frame of animation to be scheduled:

```js
animationFrameRequestID = xrSession.requestAnimationFrame(myDrawFrame);
```

Then, the `myDrawFrame()` function—the callback executed when it's time to draw the frame—might be something like this:

```js
function myDrawFrame(currentFrameTime, frame) {
  let session = frame.session;
  let viewerPose = frame.getViewerPose(viewerRefSpace);

  animationFrameRequestID = session.requestAnimationFrame(myDrawFrame);

  if (viewerPose) {
    // render the frame
  }
}
```

The `frame` parameter is the {{domxref("XRFrame")}} representing the animation frame information provided by WebXR. When called, this function begins by getting the {{domxref("XRSession")}} from the frame object, then uses the frame's {{domxref("XRFrame.getViewerPose", "getViewerPose()")}} method to compute the {{domxref("XRViewerPose")}} for the viewer, given `viewerRefSpace`, which describes the current facing direction and position of the viewer.

The returned viewer pose, `viewerPose`, can in turn be used to [compute positions and orientations to properly render](/en-US/docs/Web/API/WebXR_Device_API/Cameras) the objects in the scene given the user's point of view.

## Offsetting or moving reference spaces

While you can't change a reference space since both {{domxref("XRReferenceSpace")}} and {{domxref("XRBoundedReferenceSpace")}} are read-only, you can easily create new reference spaces by applying an offset transform to them. This is done by calling the reference space's {{domxref("XRReferenceSpace.getOffsetReferenceSpace", "getOffsetReferenceSpace()")}} method.

### Offsetting positions within a reference space

The simplest case for using `getOffsetReferenceSpace()` is to transform a point or matrix within the context of the same space. For example, to create a new reference space that moves the reference space `aRefSpace` a half meter in each direction, you can do something like this:

```js
let halfMeterTransform = new XRRigidTransform({
  x: 0.5,
  y: 0.5,
  z: 0.5,
  w: 1.0,
});
aRefSpace = aRefSpace.getOffsetReferenceSpace(halfMeterTransform);
```

This replaces the existing reference space `aRefSpace` with one whose coordinates and orientation have had the transform `halfMeterTransform` applied. With no orientation data included in the transform, the orientation of `aRefSpace` is unaffected.

### Converting between WebXR session types

Another common reason you may need to convert positional information from one reference space to another is when it's necessary to change the session type from `inline` to `immersive-vr` or back. This commonly happens when your user interface provides a way to preview the scene inline within the context of a web page, with a button or other control to switch to immersive mode.

Since most users would prefer that you maintain the same viewer position and facing direction while performing this transition, you can use the {{domxref("XRFrame")}} method {{domxref("XRFrame.getViewerPose", "getViewerPose()")}} to obtain the current {{domxref("XRViewerPose")}}, switch the session, then use the saved viewer pose to restore the viewer's position and facing.

```js
let viewerPose = frame.getViewerPose(worldReferenceSpace);
let newSession = navigator.xr.requestSession("immersive-vr", {
  requiredFeatures: "unbounded",
});
worldReferenceSpace = await newSession.requestReferenceSpace("unbounded");
viewerPose = worldReferenceSpace.getOffsetReferenceSpace(viewerPose.transform);
```

Here, the viewer pose is obtained, with its transform defined relative to `worldReferenceSpace`, the current session's global reference space. Then a new session is established and a reference space created to become the new world reference space.

Finally, the saved `viewerPose` is converted to the new world space's coordinate system by calling the new reference system's {{domxref("XRReferenceSpace.getOffsetReferenceSpace", "getOffsetReferenceSpace()")}} method. With this in hand, we can resume rendering the scene as usual, with the viewer's perspective unaffected.

### Converting between bounded and unbounded spaces

Sometimes when your primary experience uses an unbounded space, you may have a need to temporarily transition the user's experience to a bounded space. For instance, it may be easier to implement the interactions with the objects in a single room in a house by switching to a bounded space representing the single room. This might make it easier to do things like implement support for customizing the walls, placing furniture on the floor, and so forth.

In cases like this, where you need to begin tracking using a different reference space than the one you've been using, you can use a combination of {{domxref("XRFrame.getViewerPose", "getViewerPose()")}} and some matrix computations to transition everything in your scene to be based at the new reference frame's origin.

Because `getViewerPose()` is only available in an {{domxref("XRFrame")}}, you will need to begin this process in your rendering callback, possibly using a worker to do the computations in order to reduce frame dropping.

```js
let previousViewerPose = null;

function myDrawFrame(currentFrameTime, frame) {
  let session = frame.session;
  let viewerPose = frame.getViewerPose(viewerRefSpace);

  animationFrameRequestID = session.requestAnimationFrame(myDrawFrame);

  if (viewerPose) {
    if (!previousViewerPose) {
      previousViewerPose = viewerPose;
    }

    let offsetMatrix = mat4.create();
    mat4.sub(
      offsetMatrix,
      previousViewerPose.transform.matrix,
      viewerPose.transform.matrix,
    );

    previousViewerPose = viewerPose;
  }
}
```

## Continuity and recovery after tracking loss

Sometimes, while the user is actively using their XR hardware with your app, the flow of data containing updates as to the user's position and orientation might be lost for a period of time. Not only does your app need to determine what to show the user during these periods, but it needs to cleanly recover when tracking resumes.

Once the XR hardware begins providing tracking information, it will continue to do so until the XR session is closed. This data is obtained during each frame by calling the {{domxref("XRFrame")}} method {{domxref("XRFrame.getViewerPose", "getViewerPose()")}} to get the position and facing direction of the viewer (defining what the user should see), and {{domxref("XRFrame.getPose", "getPose()")}} to get any other poses, such as the positions of the hand controllers and any other parts of the XR system.

### Detecting and functioning after tracking loss

If tracking fails, such as due to a temporary loss of connectivity between the headset and the user's device, the XR layer will continue to return poses, but those poses' {{domxref("XRPose.emulatedPosition", "emulatedPosition")}} property will be `true`, indicating that the computation of the pose is based on a guess of the current position of the user.

Some XR hardware uses algorithms to compute the estimated position of the user based on the movement currently ongoing, while other hardware will report no movement at all, but with `emulatedPosition` set to `true`. In either case, you may wish to adjust your rendering to compensate for the loss, depending on your specific needs.

### When tracking resumes

You can detect when tracking has resumed after being lost when the user position jumps while at the same time the value of `emulatedPosition` changes from `true` to `false`. How you handle this depends on your application. If your app provides a way for the user to move through the virtual world without physically moving in the real world (a so-called **teleportation** mechanic), you can accept the new position and continue, allowing the jump from your previously-assumed position to be immediately corrected with the new position.

On the other hand, if your app involves the user physically moving in real space to move around through your virtual world, adopting the new tracking position and jumping there can be unsettling to the user, and should be avoided if possible. Instead, use the difference between the current position and the new tracking position to compute the new teleportation offset; that is, a transform applied to everything to adapt the position and orientation data from WebXR to your needs.

You can do this by creating a new reference space that incorporates into its effective origin the distance the viewer's position jumped since the previous frame, using the {{domxref("XRReferenceSpace")}} method {{domxref("XRReferenceSpace.getOffsetReferenceSpace", "getOffsetReferenceSpace()")}}.

### The reset event

**_<<<--- this section probably has problems still; corrections are appreciated --->>>_**

When a discontinuity or break in the native or effective origin of a reference space occurs, the {{Glossary("user agent")}} will send the {{domxref("XRReferenceSpace")}} a {{domxref("XRReferenceSpace.reset_event", "reset")}} event. This event indicates that a significant change to the origin's position has taken place relative to the user's environment.

A `reset` may occur because the XR hardware lost connectivity for a time, resulting in the user's movements not being properly tracked for a while. Upon recovery of tracking, a `reset` means tracking has been restored and the new position information represents the actual position information provided by the XR hardware, rather than cached or "best-guess" data.

Another reason `reset` may be sent is because the user has exited the bounds of a reference space and entered another reference space, or because the user has been transitioned programmatically from one reference space to another. Any time the bounds geometry of the user's space changes, a `reset` is sent.

`reset` is only used for significant jumps or transitions; minor things will just be absorbed automatically. The event is always sent to every affected reference space, including those created using `getOffsetReferenceSpace()`, so if you listen for `reset` events, you need to be sure you retain a strong reference to any spaces you're still using.

## See also

- [Matrix math for the web](/en-US/docs/Web/API/WebGL_API/Matrix_math_for_the_web)
- [Geometry and reference spaces in WebXR](/en-US/docs/Web/API/WebXR_Device_API/Geometry)
- [Rendering and the WebXR frame animation callback](/en-US/docs/Web/API/WebXR_Device_API/Rendering)
- [Viewpoints and viewers: Simulating cameras in WebXR](/en-US/docs/Web/API/WebXR_Device_API/Cameras)
- [Movement, orientation, and motion: A WebXR example](/en-US/docs/Web/API/WebXR_Device_API/Movement_and_motion)
- [Using bounded reference spaces](/en-US/docs/Web/API/WebXR_Device_API/Bounded_reference_spaces)
