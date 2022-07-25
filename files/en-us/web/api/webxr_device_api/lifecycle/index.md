---
title: WebXR application life cycle
slug: Web/API/WebXR_Device_API/Lifecycle
page-type: guide
tags:
  - API
  - Application
  - Draft
  - Guide
  - Life Cycle
  - Lifecycle
  - NeedsContent
  - Outline
  - Plan
  - Web
  - WebXR
  - WebXR API
  - WebXR Device API
---
{{DefaultAPISidebar("WebXR Device API")}}

In this guide, we'll get a birds-eye view of what's involved in creating and driving a WebXR application, without diving down to the code level in detail. This serves as preparation for the next few articles in these WebXR guides, which cover [starting up and shutting down](/en-US/docs/Web/API/WebXR_Device_API/Startup_and_shutdown) a WebXR session, [geometry](/en-US/docs/Web/API/WebXR_Device_API/Geometry), [simulating cameras](/en-US/docs/Web/API/WebXR_Device_API/Cameras), [spatial tracking](/en-US/docs/Web/API/WebXR_Device_API/Spatial_tracking), and more.

## Life cycle outline

Most applications using WebXR will follow a similar overall design pattern:

1. Check to see if the user's device and browser are both capable of presenting the XR experience you want to provide.

    1. Make sure the WebXR API is available; if {{domxref("navigator.xr")}} is undefined, you can assume the user's browser and/or device doesn't support WebXR. If it's not supported, disable any user interface used to activate XR features and abort any attempts to enter XR mode.
    2. Call {{DOMxRef("XRSystem/isSessionSupported","navigator.xr.isSessionSupported()")}}, specifying the WebXR experience mode you want to provide: `inline`, `immersive-vr`, or `immersive-ar`, in order to determine whether or not the type of session you wish to provide is available.
    3. If the session type you want to use is available, provide the appropriate interface to the user to allow them to activate it.

2. When the user requests the activation of WebXR functionality by engaging with the user interface enabled above, request an {{DOMxRef("XRSession")}} using the desired mode. This is done by calling {{DOMxRef("XRSystem/requestSession","navigator.xr.requestSession()")}}, again specifying the string indicating the mode you want to enable: `inline`, `immersive-vr`, or `immersive-ar`.
3. If the promise returned by `requestSession()` resolves, use the new {{domxref("XRSession")}} to manage the WebXR session for the duration of the WebXR experience. This will involve managing inputs, animations, and rendering.

    1. Call the {{domxref("XRSession")}} method {{DOMxRef("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} to schedule the first frame render for the XR device.
    2. If your scene is complex, you should consider creating a {{domxref("Worker")}}—or using one that you've previously created for this purpose—to perform the computations needed for each frame to be rendered. This will reduce the chance that the rendering process will noticeably stall the app.
    3. Each `requestAnimationFrame()` callback should use the information provided about the objects located in the 3D world to render the frame using WebGL.
    4. Each time the callback is invoked, it should call {{DOMxRef("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} again in order to let the browser know that the callback needs to be run again when it's time to render the next frame.

4. When the time comes  (such as when the user exits your app or navigates away from your site), end the XR session; otherwise, continue the loop until the user chooses to exit XR mode.

    1. To end the XR session yourself, call {{DOMxRef("XRSession.end", "XRSession.end()")}}.
    2. Include a handler for the {{domxref("XRSession")}} event {{domxref("XRSession.end_event", "end")}} event to be informed when the session is ending, regardless of whether your code, the user, or the browser initiated the termination of the session.
