---
title: XRSession
slug: Web/API/XRSession
page-type: web-api-interface
status:
  - experimental
browser-compat: api.XRSession
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

The **`XRSession`** interface of the [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API) represents an ongoing XR session, providing methods and properties used to interact with and control the session. To open a WebXR session, use the {{domxref("XRSystem")}} interface's {{domxref("XRSystem.requestSession", "requestSession()")}} method.

With `XRSession` methods, you can poll the viewer's position and orientation (the {{domxref("XRViewerPose")}}), gather information about the user's environment, and present imagery to the user. `XRSession` supports both inline and immersive virtual and augmented reality modes.

{{InheritanceDiagram}}

## Instance properties

_In addition to the properties listed below, `XRSession` inherits properties from its parent interface, {{domxref("EventTarget")}}._

- {{DOMxRef("XRSession.depthDataFormat", "depthDataFormat")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Returns the depth-sensing data format with which the session was configured.
- {{DOMxRef("XRSession.depthUsage", "depthUsage")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Returns the depth-sensing usage with which the session was configured.
- {{DOMxRef("XRSession.domOverlayState", "domOverlayState")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Provides information about the DOM overlay, if the feature is enabled.
- {{DOMxRef("XRSession.environmentBlendMode", "environmentBlendMode")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Returns this session's blend mode which denotes how much of the real-world environment is visible through the XR device and how the device will blend the device imagery with it.
- {{DOMxRef("XRSession.inputSources", "inputSources")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Returns a list of this session's {{DOMxRef("XRInputSource")}}s, each representing an input device used to control the camera and/or scene.
- {{DOMxRef("XRSession.interactionMode", "interactionMode")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Returns this session's interaction mode, which describes the best space (according to the user agent) for the application to draw interactive UI for the current session.
- {{DOMxRef("XRSession.preferredReflectionFormat", "preferredReflectionFormat")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Returns this session's preferred reflection format used for lighting estimation texture data.
- {{DOMxRef("XRSession.renderState", "renderState")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : An {{domxref("XRRenderState")}} object which contains options affecting how the imagery is rendered. This includes things such as the near and far clipping planes (distances defining how close and how far away objects can be and still get rendered), as well as field of view information.
- {{DOMxRef("XRSession.visibilityState", "visibilityState")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : A string indicating whether or not the session's imagery is visible to the user, and if so, if it's being visible but not currently the target for user events.

## Instance methods

_`XRSession` provides the following methods in addition to those inherited from its parent interface, {{domxref("EventTarget")}}._

- {{DOMxRef("XRSession.cancelAnimationFrame", "cancelAnimationFrame()")}} {{Experimental_Inline}}
  - : Removes a callback from the animation frame painting callback from `XRSession`'s set of animation frame rendering callbacks, given the identifying handle returned by a previous call to {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}}.
- {{DOMxRef("XRSession.end", "end()")}} {{Experimental_Inline}}
  - : Ends the WebXR session. Returns a {{jsxref("promise")}} which resolves when the session has been shut down.
- {{DOMxRef("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} {{Experimental_Inline}}
  - : Schedules the specified method to be called the next time the {{glossary("user agent")}} is working on rendering an animation frame for the WebXR device. Returns an integer value which can be used to identify the request for the purposes of canceling the callback using `cancelAnimationFrame()`. This method is comparable to the {{domxref("Window.requestAnimationFrame()")}} method.
- {{DOMxRef("XRSession.requestHitTestSource", "requestHitTestSource()")}} {{Experimental_Inline}}
  - : Requests an {{domxref("XRHitTestSource")}} object that handles hit test subscription.
- {{DOMxRef("XRSession.requestHitTestSourceForTransientInput", "requestHitTestSourceForTransientInput()")}} {{Experimental_Inline}}
  - : Requests an {{domxref("XRTransientInputHitTestSource")}} object that handles hit test subscription for a transient input source.
- {{DOMxRef("XRSession.requestLightProbe", "requestLightProbe()")}} {{Experimental_Inline}}
  - : Requests an {{domxref("XRLightProbe")}} that estimates lighting information at a given point in the user's environment.
- {{DOMxRef("XRSession.requestReferenceSpace", "requestReferenceSpace()")}} {{Experimental_Inline}}
  - : Requests that a new {{domxref("XRReferenceSpace")}} of the specified type be created. Returns a promise which resolves with the `XRReferenceSpace` or {{domxref("XRBoundedReferenceSpace")}} which was requested, or throws a `NotSupportedError` {{domxref("DOMException")}} if the requested space type isn't supported by the device.
- {{DOMxRef("XRSession.updateRenderState", "updateRenderState()")}} {{Experimental_Inline}}
  - : Updates the properties of the session's render state.

## Events

_The following events are delivered to `XRSession` objects._

- {{domxref("XRSession.end_event", "end")}} {{Experimental_Inline}}
  - : Sent to the `XRSession` object after the WebXR session has ended and all hardware-related functions have completed. The event is represented by an object of type {{domxref("XRSessionEvent")}}. Also available through the `onend` event handler property.
- {{domxref("XRSession.inputsourceschange_event", "inputsourceschange")}} {{Experimental_Inline}}
  - : An event of type {{domxref("XRInputSourcesChangeEvent")}} sent to the `XRSession` when the list of active XR input sources has changed. Also available through the `oninputsourceschange` event handler property.
- {{domxref("XRSession.select_event", "select")}} {{Experimental_Inline}}
  - : An event of type {{domxref("XRInputSourceEvent")}} which is sent to the session when one of the session's input sources has successfully completed a [primary action](/en-US/docs/Web/API/WebXR_Device_API/Inputs#primary_action). This generally corresponds to the user pressing a trigger, touchpad, or button, speaks a command, or performs a recognizable gesture. The `select` event is sent after the `selectstart` event is sent and immediately before the `selectend` event is sent. If `select` is _not_ sent, then the select action was aborted before being completed. Also available through the `onselect` event handler property.
- {{domxref("XRSession.selectend_event", "selectend")}} {{Experimental_Inline}}
  - : An event of type {{domxref("XRInputSourceEvent")}} which gets sent to the session object when one of its input devices finishes its primary action or gets disconnected while in the process of handling a primary action. For example: for button or trigger actions, this means the button has been released; for spoken commands, it means the user has finished speaking. This is the last of the three `select*` events to be sent. Also available through the `onselectend` event handler property.
- {{domxref("XRSession.selectstart_event", "selectstart")}} {{Experimental_Inline}}
  - : An event of type {{domxref("XRInputSourceEvent")}} which is sent to the session object when one of its input devices is first engaged by the user in such a way as to cause the primary action to begin. This is the first of the `session*` event to be sent. Also available through the `onselectstart` event handler property.
- {{domxref("XRSession.squeeze_event", "squeeze")}} {{Experimental_Inline}}
  - : An {{domxref("XRInputSourceEvent")}} sent to indicate that a [primary squeeze action](/en-US/docs/Web/API/WebXR_Device_API/Inputs#primary_squeeze_action) has successfully completed. This indicates that the device being squeezed has been released, and may represent dropping a grabbed object, for example. It is sent immediately before the `squeezeend` event is sent to indicate that the squeeze action is over. Also available through the `onsqueeze` event handler property.
- {{domxref("XRSession.squeezeend_event", "squeezeend")}} {{Experimental_Inline}}
  - : An {{domxref("XRInputSourceEvent")}} sent to the `XRSession` when the [primary squeeze action](/en-US/docs/Web/API/WebXR_Device_API/Inputs#primary_squeeze_action) ends, whether or not the action was successful. Also available using the `onsqueezeend` event handler property.
- {{domxref("XRSession.squeezestart_event", "squeezestart")}} {{Experimental_Inline}}
  - : An event of type {{domxref("XRInputSourceEvent")}} which is sent to the `XRSession` when the user initially squeezes a squeezable controller. This may be, for example, a trigger which is used to represent grabbing objects, or might represent actual squeezing when wearing a haptic glove. Also available through the `onsqueezestart` event handler property.
- {{domxref("XRSession.visibilitychange_event", "visibilitychange")}} {{Experimental_Inline}}
  - : An {{domxref("XRSessionEvent")}} which is sent to the session when its visibility state as indicated by the {{domxref("XRSession.visibilityState", "visibilityState")}} changes. Also available through the `onvisibilitychange` event handler property.

## Example

This example establishes a new `XRSession` in `inline` mode so that it can be displayed within an HTML element, avoiding the need for a dedicated AR or VR viewing device such as a headset.

```js
const XR = navigator.xr;

if (XR) {
  XR.requestSession("inline").then((xrSession) => {
    xrSession.requestReferenceSpace("local").then((xrReferenceSpace) => {
      xrSession.requestAnimationFrame((time, xrFrame) => {
        const viewer = xrFrame.getViewerPose(xrReferenceSpace);

        gl.bindFramebuffer(xrWebGLLayer.framebuffer);

        for (const xrView of viewer.views) {
          const xrViewport = xrWebGLLayer.getViewport(xrView);
          gl.viewport(
            xrViewport.x,
            xrViewport.y,
            xrViewport.width,
            xrViewport.height,
          );
        }
      });
    });
  });
} else {
  /* WebXR is not available */
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
