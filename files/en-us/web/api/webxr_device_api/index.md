---
title: WebXR Device API
slug: Web/API/WebXR_Device_API
tags:
  - API
  - AR
  - Augmented Reality
  - Graphics
  - Overview
  - VR
  - Virtual Reality
  - WebXR
  - WebXR API
  - WebXR Device API
  - XR
---
{{DefaultAPISidebar("WebXR Device API")}} {{SecureContext_Header}}

**WebXR** is a group of standards which are used together to support rendering 3D scenes to hardware designed for presenting virtual worlds (**virtual reality**, or **VR**), or for adding graphical imagery to the real world, (**augmented reality**, or **AR**). The **WebXR Device API** implements the core of the WebXR feature set, managing the selection of output devices, render the 3D scene to the chosen device at the appropriate frame rate, and manage motion vectors created using input controllers.

WebXR-compatible devices include fully-immersive 3D headsets with motion and orientation tracking, eyeglasses which overlay graphics atop the real world scene passing through the frames, and handheld mobile phones which augment reality by capturing the world with a camera and augment that scene with computer-generated imagery.

To accomplish these things, the WebXR Device API provides the following key capabilities:

- Find compatible VR or AR output devices
- Render a 3D scene to the device at an appropriate frame rate
- (Optionally) mirror the output to a 2D display
- Create vectors representing the movements of input controls

At the most basic level, a scene is presented in 3D by computing the perspective to apply to the scene in order to render it from the viewpoint of each of the user's eyes by computing the position of each eye and rendering the scene from that position, looking in the direction the user is currently facing. Each of these two images is rendered into a single framebuffer, with the left eye's rendered image on the left and the right eye's viewpoint rendered into the right half of the buffer. Once both eyes' perspectives on the scene have been rendered, the resulting framebuffer is delivered to the WebXR device to be presented to the user through their headset or other appropriate display device.

## WebXR Device API concepts and usage

**Figure: Example WebXR hardware setup**
![Sketch of a person in a chair with wearing goggles labelled "Head mounted display (HMD)" facing a monitor with a webcam labeled "Position sensor"](hw-setup.png)

While the older [WebVR API](/en-US/docs/Web/API/WebVR_API) was designed solely to support Virtual Reality (VR), WebXR provides support for both VR and Augmented Reality (AR) on the web. Support for AR functionality is added by the WebXR Augmented Reality Module.

A typical XR device can have either 3 or 6 degrees of freedom and might or might not have an external positional sensor.

The equipment may also include an accelerometer, barometer, or other sensors which are used to sense when the user moves through space, rotates their head, or the like.

## Accessing the WebXR API

To gain access to the WebXR API within the context of a given window, use the {{domxref("navigator.xr")}} property, which returns an {{domxref("XRSystem")}} object through which the entire WebXR Device API is then exposed.

- {{domxref("navigator.xr")}} {{ReadOnlyInline}}
  - : This property, added to the {{domxref("Navigator")}} interface, returns the {{domxref("XRSystem")}} object through which the WebXR API is exposed. If this property is missing, WebXR is not available.

## WebXR interfaces

- {{DOMxRef("XRSystem")}}
  - : The {{domxref("Navigator.xr", "navigator.xr")}} property returns the window's instance of {{domxref("XRSystem")}}, which is the mechanism by which your code accesses the WebXR API. Using the `XRSystem` interface, you can create {{domxref("XRSession")}}s to represent actual AR and/or VR sessions.
- {{DOMxRef("XRFrame")}}
  - : While presenting an XR session, the state of all tracked objects which make up the session are represented by an `XRFrame`. To get an `XRFrame`, call the session's {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} method, providing a callback which will be called with the `XRFrame` once available. Events which communicate tracking states will also use `XRFrame` to contain that information.
- {{DOMxRef("XRRenderState")}}
  - : Provides a set of configurable properties which change how the imagery output by an `XRSession` is composited.
- {{DOMxRef("XRSession")}}
  - : Provides the interface for interacting with XR hardware. Once an `XRSession` is obtained from {{domxref("XRSystem.requestSession", "navigator.xr.requestSession()")}}, the session can be used to check the position and orientation of the viewer, query the device for environment information, and present the virtual or augmented world to the user.
- {{DOMxRef("XRSpace")}}
  - : `XRSpace` is an opaque base class on which all virtual coordinate system interfaces are based. Positions in WebXR are always expressed in relation to a particular `XRSpace` at the time at which a particular {{domxref("XRFrame")}} takes place. The space's coordinate system has its origin at a given physical position.
- {{DOMxRef("XRReferenceSpace")}}
  - : A subclass of {{domxref("XRSpace")}} which is used to identify a spatial relationship in relation to the user's physical environment. The `XRReferenceSpace` coordinate system is expected to remain unchanged through the lifespan of the {{domxref("XRSession")}}.The world has no boundaries and extends infinitely in every direction.
- {{DOMxRef("XRBoundedReferenceSpace")}}
  - : `XRBoundedReferenceSpace` extends the {{domxref("XRReferenceSpace")}} coordinate system to further include support for a finite world with set boundaries. Unlike `XRReferenceSpace`, the origin must be located on the floor (that is, *y* = 0 at the floor). The x and z components of the origin are typically presumed to be located at or near the center of the room or surface.
- {{DOMxRef("XRView")}}
  - : Represents a single view into the XR scene for a particular frame. Each `XRView` corresponds to the video display surface used to present the scene to the user. For example, a given XR device might have two views: one for the left eye and one for the right. Each view has an offset used to shift the position of the view relative to the camera, in order to allow for creating stereographic effects.
- {{DOMxRef("XRViewport")}}
  - : Describes a viewport. A viewport is a rectangular portion of a graphic surface. In WebXR, a viewport represents the area of a drawing surface corresponding to a particular {{domxref("XRView")}}, such as the portion of the WebGL framebuffer used to render one of the two eyes' perspectives on the scene.
- {{DOMxRef("XRRigidTransform")}}
  - : A transform defined using a position and orientation in the virtual space's coordinate system as described by the {{domxref("XRSpace")}}.
- {{DOMxRef("XRPose")}}
  - : Describes a position and orientation in space relative to an {{domxref("XRSpace")}}.
- {{DOMxRef("XRViewerPose")}}
  - : Based on {{domxref("XRPose")}}, `XRViewerPose` specifies the state of a viewer of the WebXR scene as indicated by the XR device. Included is an array of {{domxref("XRView")}} objects, each representing one perspective on the scene. For example, it takes two views to create the stereoscopic view as perceived by human vision—one for the left eye and a second for the right eye. One view is offset to the left slightly from the viewer's position, and the other view is offset to the right by the same distance. The view list can also be used to represent the perspectives of each of the spectators of a scene, in a multi-user environment.
- {{DOMxRef("XRInputSource")}}
  - : Represents any input device the user can use to perform targeted actions within the same virtual space as the viewer. Input sources may include devices such as hand controllers, optical tracking systems, and other devices which are explicitly associated with the XR device. Other input devices such as keyboards, mice, and gamepads are not presented as `XRInputSource` instances.
- {{DOMxRef("XRWebGLLayer")}}
  - : A layer which serves as a [WebGL](/en-US/docs/Web/API/WebGL_API) frame buffer into which a scene's view is rendered. Using WebGL to render the scene gains substantial performance benefits due to graphics acceleration.

### Event interfaces

The following interfaces are used to represent the events used by the WebXR API.

- {{domxref("XRInputSourceEvent")}}
  - : Sent when the state of an {{domxref("XRInputSource")}} changes. This can happen, for example, when the position and/or orientation of the device changes, or when buttons are pressed or released.
- {{domxref("XRInputSourcesChangeEvent")}}
  - : Sent to indicate that the set of available input sources has changed for the {{domxref("XRSession")}}.
- {{domxref("XRReferenceSpaceEvent")}}
  - : Sent when the state of an {{domxref("XRReferenceSpace")}} changes.
- {{domxref("XRSessionEvent")}}
  - : Sent to indicate that the state of an {{domxref("XRSession")}} has changed. For example, if the position and/or orient

## Extensions to the WebGL API

The WebGL API is extended by the WebXR specification to augment the WebGL context to allow it to be used to render views for display by a WebXR device.

- {{domxref("WebGLRenderingContext.makeXRCompatible()")}}
  - : Configures the WebGL context to be compatible with WebXR. If the context was not initially created with the {{domxref("HTMLCanvasElement.getContext", "xrCompatible")}} property set to `true`, you must call `makeXRCompatible()` prior to attempting to use the WebGL context for WebXR rendering. Returns a {{jsxref("Promise")}} which resolves once the context has been prepared, or is rejected if the context cannot be configured for use by WebXR.

## Guides and tutorials

The following guides and tutorials are a great resource to learn how to comprehend WebXR and the underlying 3D and VR/AR graphics concepts.

### Foundations and basics

- [Fundamentals of WebXR](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals)
  - : Before diving into the details of how to create content using WebXR, it may be helpful to read this overview of the technology, which includes introductions to terminology that may be unfamiliar to you, or which may be used in a new way.
- [Matrix math for the web](/en-US/docs/Web/API/WebGL_API/Matrix_math_for_the_web)
  - : A guide covering how matrices can be used on the web, including both for CSS transforms and for WebGL purposes, as well as to handle the positioning and orientation of objects in WebXR contexts.
- [WebXR application life cycle](/en-US/docs/Web/API/WebXR_Device_API/Lifecycle)
  - : An overview of the overall life cycle of a WebXR application, from startup to shutdown. This article serves as an introduction to the basics of what's involved in creating a WebXR experience without diving into the code in detail. It's a good way to prepare for the next steps.

### Creating a mixed reality experience

- [Starting up and shutting down a WebXR session](/en-US/docs/Web/API/WebXR_Device_API/Startup_and_shutdown)
  - : Before actually presenting a scene using an XR device such as a headset or goggles, you need to create a WebXR session bound to a rendering layer that draws the scene for presentation in each of the XR device's displays so that the 3D effect can be presented to the user. This guide covers how to create and stop WebXR sessions.
- [Geometry and reference spaces in WebXR](/en-US/docs/Web/API/WebXR_Device_API/Geometry)
  - : In this guide, the required concepts of 3D geometry are briefly reviewed, and the fundamentals of how that geometry is represented in WebXR are detailed. Learn how reference spaces are used to position objects—and the viewer—and the differences among the available types of reference space, as well as their use cases.
- [Spatial tracking in WebXR](/en-US/docs/Web/API/WebXR_Device_API/Spatial_tracking)
  - : This guide describes how objects—including the user's body and its parts—are located in space, and how their movement and orientation relative to one another is monitored and managed over time. This article explains the relationship between spaces, poses, viewers, and views.
- [Rendering and the WebXR frame animation callback](/en-US/docs/Web/API/WebXR_Device_API/Rendering)
  - : Starting with how you schedule frames to be rendered, this guide then continues to cover how to determine the placement of objects in the view and how to then render them into the WebGL buffer used for each of the two eyes' views of the scene.
- [Viewpoints and viewers: Simulating cameras in WebXR](/en-US/docs/Web/API/WebXR_Device_API/Cameras)
  - : WebGL (and therefore WebXR) doesn't really have a concept of a camera, which is the traditional concept used to represent a viewpoint in 3D graphics. In this article, we see how to simulate a camera and how to create the illusion of moving a viewer through a world in which the viewer doesn't really move.
- [Lighting a WebXR setting](/en-US/docs/Web/API/WebXR_Device_API/Lighting)
  - : Since WebXR rendering is based upon WebGL, the same lighting techniques used for any 3D application are applied to WebXR scenes. However, there are issues specific to creating augmented and virtual reality settings that need to be considered when writing your lighting code. This article discusses those issues.
- [Using bounded reference spaces](/en-US/docs/Web/API/WebXR_Device_API/Bounded_reference_spaces)
  - : In this article, we examine how to use a `bounded-floor` reference space to define the boundaries of where the viewer can safely move about without leaving the area tracked by their XR hardware or colliding with a physical obstacle. On devices which support it, `bounded-floor` can be a useful tool in your repertoire.

### Making it interactive

- [Movement, orientation, and motion: A WebXR example](/en-US/docs/Web/API/WebXR_Device_API/Movement_and_motion)
  - : In this example and tutorial, we use information learned throughout the WebXR documentation to create a scene containing a rotating cube which the user can move around using both VR headset and keyboard and mouse.
- [Inputs and input sources](/en-US/docs/Web/API/WebXR_Device_API/Inputs)
  - : A guide to input sources and how to efficiently manage the input devices being used to control the WebXR session, and how to receive and process user inputs from those devices.
- [Targeting and hit detection](/en-US/docs/Web/API/WebXR_Device_API/Targeting)
  - : How to use an input source's targeting ray mode and targeting ray space to display a targeting ray, identify targeted surfaces or objects, and perform related tasks.
- [Using WebXR input profiles](/en-US/docs/Web/API/WebXR_Device_API/Input_profiles)
  - : A guide to interpreting the {{Glossary("JSON")}} data provided by the [WebXR Input Profiles Registry](https://github.com/immersive-web/webxr-input-profiles/tree/master/packages/registry), which can be used to determine what options and controls are available on the user's available input devices.
- [Supporting advanced controllers and gamepads in WebXR applications](/en-US/docs/Web/WebXR_Device_API/Gamepads)
  - : WebXR uses the {{domxref("Gamepad")}} object to describe the controls available on complex input devices (such as hand controllers with multiple buttons and/or axes) and gamepad-like devices. In this guide, learn how to make use of these devices' controls.

### Performance and security

- [WebXR performance guide](/en-US/docs/Web/API/WebXR_Device_API/Performance)
  - : Recommendations and tips to help you optimize the performance of your WebXR application.
- [Permissions and security for WebXR](/en-US/docs/Web/API/WebXR_Device_API/Permissions_and_security)
  - : The WebXR Device API has several areas of security to contend with, from establishing feature-policy to ensuring the user intends to use the mixed reality presentation before activating it.

### Including other media

- [Positional audio in a 3D environment](/en-US/docs/Web/Media/3D_audio)
  - : In 3D environments, which may either be 3D scenes rendered to the screen or a mixed reality experience experienced using a headset, it's important for audio to be performed so that it sounds like it's coming from the direction of its source. This guide covers how to accomplish this.
- [Playing video in a 3D environment](/en-US/docs/Web/Media/3D_video)
  - : In this guide, we examine how to play video into a 3D scene. This technique can be used in both standard [WebGL](/en-US/docs/Web/API/WebGL_API) applications presented on a flat computer screen, or in a **WebXR**-generated virtual or augmented reality environment.

## Specifications

| Specification                                                                                                                                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**WebXR Device API**](https://immersive-web.github.io/webxr/) ([Source](https://github.com/immersive-web/webxr), [Issues](https://github.com/immersive-web/webxr/issues), [Explainer](https://github.com/immersive-web/webxr/blob/master/explainer.md))                                                                                          |
| [**WebXR Anchors Module**](https://immersive-web.github.io/anchors/) ([Source](https://github.com/immersive-web/anchors), [Issues](https://github.com/immersive-web/anchors/issues), [Explainer](https://github.com/immersive-web/anchors/blob/master/explainer.md))                                                                              |
| [**WebXR Augmented Reality Module**](https://immersive-web.github.io/webxr-ar-module/) ([Source](https://github.com/immersive-web/webxr-ar-module), [Issues](https://github.com/immersive-web/webxr-ar-module/issues), [Explainer](https://github.com/immersive-web/webxr-ar-module/blob/master/ar-module-explainer.md))                          |
| [**WebXR Depth Sensing Module**](https://immersive-web.github.io/depth-sensing/) ([Source](https://github.com/immersive-web/depth-sensing), [Issues](https://github.com/immersive-web/depth-sensing/issues), [Explainer](https://github.com/immersive-web/depth-sensing/blob/master/explainer.md))                                                |
| [**WebXR DOM Overlays Module**](https://immersive-web.github.io/dom-overlays) ([Source](https://github.com/immersive-web/dom-overlays), [Issues](https://github.com/immersive-web/dom-overlays/issues), [Explainer](https://github.com/immersive-web/dom-overlays/blob/master/explainer.md))                                                      |
| [**WebXR Gamepads Module**](https://immersive-web.github.io/webxr-gamepads-module/) ([Source](https://github.com/immersive-web/webxr-gamepads-module), [Issues](https://github.com/immersive-web/webxr-gamepads-module/issues), [Explainer](https://github.com/immersive-web/webxr-gamepads-module/blob/master/gamepads-module-explainer.md))     |
| [**WebXR Hand Input Module**](https://immersive-web.github.io/webxr-hand-input/) ([Source](https://github.com/immersive-web/webxr-hand-input), [Issues](https://github.com/immersive-web/webxr-hand-input/issues), [Explainer](https://github.com/immersive-web/webxr-hand-input/blob/master/explainer.md))                                       |
| [**WebXR Hit Test Module**](https://immersive-web.github.io/hit-test) ([Source](https://github.com/immersive-web/hit-test), [Issues](https://github.com/immersive-web/hit-test/issues), [Explainer](https://github.com/immersive-web/hit-test/blob/master/hit-testing-explainer.md))                                                              |
| [**WebXR Layers API**](https://immersive-web.github.io/layers/) ([Source](https://github.com/immersive-web/layers), [Issues](https://github.com/immersive-web/layers/issues), [Explainer](https://github.com/immersive-web/layers/blob/master/explainer.md))                                                                                      |
| [**WebXR Lighting Estimation API**](https://immersive-web.github.io/lighting-estimation/) ([Source](https://github.com/immersive-web/lighting-estimation), [Issues](https://github.com/immersive-web/lighting-estimation/issues), [Explainer](https://github.com/immersive-web/lighting-estimation/blob/master/lighting-estimation-explainer.md)) |

## Browser compatibility

{{Compat("api.Navigator.xr")}}

## See also

- [Graphics on the web](/en-US/docs/Web/Guide/Graphics)
- [Drawing graphics](/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics)
- [WebGL API](/en-US/docs/Web/API/WebGL_API): Accelerated 2D and 3D graphics on the web
- [Canvas API](/en-US/docs/Web/API/Canvas_API): 2D drawing for the web
- [Canvas tutorial](/en-US/docs/Web/API/Canvas_API/Tutorial)
