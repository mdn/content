---
title: Starting up and shutting down a WebXR session
slug: Web/API/WebXR_Device_API/Startup_and_shutdown
page-type: guide
---

{{DefaultAPISidebar("WebXR Device API")}}{{SecureContext_header}}

Assuming you're already familiar with 3D graphics in general and WebGL in particular, taking that next bold step into mixed reality—the idea of presenting artificial scenery or objects in addition to or in place of the real world—is not overly complicated. Before you can begin to render your augmented or virtual reality scenario, you need to create and set up the WebXR session, and you should know how to shut it down properly as well. You will learn how to do these things in this article.

## Accessing the WebXR API

Your app's access to the WebXR API begins with the {{domxref("XRSystem")}} object. This object represents the overall WebXR device suite available to you through the hardware and drivers available on the user's equipment. There is a global `XRSystem` object available for use by your document through the {{domxref("Navigator")}} property {{domxref("Navigator.xr", "xr")}}, which returns the `XRSystem` object if suitable XR hardware is available for your use given the hardware available and your document's environment.

Thus the simplest code that fetches the `XRSystem` object is:

```js
const xr = navigator.xr;
```

The value of `xr` will be `null` or `undefined` if WebXR isn't available.

### WebXR availability

As a new and still in development API, WebXR support is limited to specific devices and browsers; and even on those, it may not be enabled by default. There may be options available to allow you to experiment with WebXR even if you don't have a compatible system, however.

#### WebXR polyfill

The team designing the WebXR specification has published a [WebXR polyfill](https://github.com/immersive-web/webxr-polyfill) which you can use to simulate WebXR on browsers which don't have support for the WebXR APIs. If the browser supports the older [WebVR API](/en-US/docs/Web/API/WebVR_API), that is used. Otherwise, the polyfill falls back to an implementation which uses Google's Cardboard VR API.

The polyfill is maintained alongside the specification, and is kept up to date with the specification. Additionally, it is updated to maintain compatibility with browsers as their support for WebXR and other technologies related to it and to the implementation of the polyfill change over time.

Be sure to read the readme carefully; the polyfill comes in several versions depending on what degree of compatibility with newer JavaScript features your target browsers include.

##### Emulator usage

While somewhat awkward compared to using an actual headset, this makes it possible to experiment with and developer WebXR code on a desktop computer, where WebXR isn't normally available. It also lets you perform some basic testing before taking your code to a real device. Be aware, however, that the emulator does not yet completely emulate all of the WebXR API, so you may run into problems you're not expecting. Again, carefully read the readme file and make sure you're aware of the limitations before you begin.

**Important:** You should _always_ test your code on actual AR and/or VR hardware before releasing or shipping a product! Emulated, simulated, or polyfilled environments are _not_ an adequate substitute for actual testing on physical devices.

##### Getting the extension

Download the WebXR API Emulator for your supported browser below:

- [Google Chrome](https://chromewebstore.google.com/detail/webxr-api-emulator/mjddjgeghkdijejnciaefnkjmkafnnje)
- [Mozilla Firefox](https://addons.mozilla.org/en-US/firefox/addon/webxr-api-emulator/)

The [source code for the extension](https://github.com/MozillaReality/WebXR-emulator-extension) is also available on GitHub.

##### Emulator issues and notes

While this isn't the place for a full article about the extension, there are some specific things worth mentioning.

Version 0.4.0 of the extension was announced on March 26, 2020. It introduced support for augmented reality (AR) through the [WebXR AR Module](https://www.w3.org/TR/webxr-ar-module-1/), which has is approaching a stable state. Documentation for AR is forthcoming shortly here on MDN.

Other improvements include updating the emulator to rename the `XR` interface to {{domxref("XRSystem")}}, introduce support for squeeze (grip) input sources, and add support for the {{domxref("XRInputSource")}} property {{domxref("XRInputSource.profiles", "profiles")}}.

### Context requirements

A WebXR compatible environment starts with a securely-loaded document. Your document needs to either have been loaded from the local drive (such as by using a URL such as `http://localhost/…`), or using {{Glossary("HTTPS")}} when loading the page. The JavaScript code must, likewise, have been loaded securely.

If the document wasn't loaded securely, you won't get very far. The {{domxref("navigator.xr")}} property doesn't even exist if the document wasn't loaded securely. This may also be the case if there is no compatible XR hardware available. Either way, you need to be prepared for the lack of an `xr` property and either gracefully handle the error or provide some form of fallback.

### Falling back to the WebXR polyfill

One fallback option is the [WebXR polyfill](https://github.com/immersive-web/webxr-polyfill/), provided by the [Immersive Web Working Group](https://www.w3.org/immersive-web/) that's in charge of the WebXR standardization process. The {{Glossary("polyfill")}} brings support for WebXR to browsers that don't have native WebXR support, and smooths out the inconsistencies among implementations in the browsers that do have it, so it can sometimes also be useful even if WebXR is natively available.

Here we define a `getXR()` function, which returns the {{domxref("XRSystem")}} object after optionally installing the polyfill, assuming that the polyfill has been included or loaded using a prior {{HTMLElement("script")}} tag.

```js
let webxrPolyfill = null;

function getXR(usePolyfill) {
  let tempXR;

  switch (usePolyfill) {
    case "if-needed":
      tempXR = navigator.xr;
      if (!tempXR) {
        webxrPolyfill = new WebXRPolyfill();
        tempXR = webxrPolyfill;
      }
      break;
    case "yes":
      webxrPolyfill = new WebXRPolyfill();
      tempXR = webxrPolyfill;
      break;
    case "no":
    default:
      tempXR = navigator.xr;
      break;
  }

  return tempXR;
}

const nativeXr = getXR("no"); // Get the native XRSystem object
const polyfilledXr = getXR("yes"); // Always returns an XRSystem from the polyfill
const xr = getXR("if-needed"); // Use the polyfill only if navigator.xr missing
```

The returned `XRSystem` object can then be used according to the documentation provided here on MDN. The global variable `webxrPolyfill` is used only to retain a reference to the polyfill in order to ensure that it remains available until you no longer need it. Setting it to `null` signals that the polyfill can be garbage collected when no objects depending on it are using it anymore.

Of course, you can simplify this depending on your needs; since your app is probably not going to go back and forth much on whether or not to use the polyfill, you can simplify this to just the specific case you need.

### Permissions and security

There are a number of security measures in place revolving around WebXR. First among these is that use of `immersive-vr` mode—which entirely replaces the user's view of the world—requires that the `xr-spatial-tracking` [permission policy](/en-US/docs/Web/HTTP/Permissions_Policy) be in place. On top of that, the document needs to be secure and currently focused. Finally, you must call {{domxref("XRSystem.requestSession", "requestSession()")}} from a user event handler, such as the handler for the {{domxref("Element.click_event", "click")}} event.

For more specifics about securing WebXR activities and usage, see the article [Permissions and security for WebXR](/en-US/docs/Web/API/WebXR_Device_API/Permissions_and_security).

### Confirming the session type you need is available

Before trying to create a new WebXR session, it's often wise to first check to see if the user's hardware and software support the presentation mode you wish to use. This can also be used to determine whether to use an immersive or an inline presentation, for example.

To find out if a given mode is supported, call the {{domxref("XRSystem")}} method {{domxref("XRSystem.isSessionSupported", "isSessionSupported()")}}. This returns a promise which resolves to `true` if the given type of session is available for use or `false` otherwise.

```js
const immersiveOK = await navigator.xr.isSessionSupported("immersive-vr");
if (immersiveOK) {
  // Create and use an immersive VR session
} else {
  // Create an inline session instead, or tell the user about the
  // incompatibility if inline is required
}
```

## Creating and starting the session

A WebXR session is represented by an {{domxref("XRSession")}} object. To obtain an `XRSession`, you call your {{domxref("XRSystem")}}'s {{domxref("XRSystem.requestSession", "requestSession()")}} method, which returns a promise that resolves with an `XRSession` if it's able to establish one successfully. Fundamentally, that looks like this:

```js
xr.requestSession("immersive-vr").then((session) => {
  xrSession = session;
  /* continue to set up the session */
});
```

Note the parameter passed into `requestSession()` in this code snippet: `immersive-vr`. This string specifies the type of WebXR session you want to establish—in this case, a fully-immersive virtual reality experience. There are three options:

- `immersive-vr`
  - : A fully-immersive virtual reality session using a headset or similar device that fully replaces the world around the user with the images you present.
- `immersive-ar`
  - : An augmented reality session in which images are added to the real world using a headset or similar apparatus. _This option is not yet widely supported, as the AR specification is in flux._
- `inline`
  - : An on-screen presentation of the XR imagery within the context of the document window.

If the session couldn't be created for some reason—such as feature policy disallowing its use or the user declining to grant permission to use the headset—the promise gets rejected. So a more complete function that starts up and returns a WebXR session could look like this:

```js
async function createImmersiveSession(xr) {
  session = await xr.requestSession("immersive-vr");
  return session;
}
```

This function returns the new {{domxref("XRSession")}} or throws an exception if an error occurs while creating the session.

### Customizing the session

In addition to the display mode, the {{domxref("XRSystem.requestSession", "requestSession()")}} method can take an optional object with initialization parameters to customize the session. Currently, the only configurable aspect of the session is which of the reference spaces should be used to represent the world's coordinate system. You can specify either required or optional reference spaces in order to obtain a session compatible with the reference spaces you need or prefer to use.

For example, if you need an `unbounded` reference space, you can specify that as a required feature in order to ensure that the session you get can use unbounded spaces:

```js
async function createImmersiveSession(xr) {
  session = await xr.requestSession("immersive-vr", {
    requiredFeatures: ["unbounded"],
  });
  return session;
}
```

On the other hand, if you need an _inline_ session and would prefer a `local` reference space, you can do this:

```js
async function createInlineSession(xr) {
  session = await xr.requestSession("inline", {
    optionalFeatures: ["local"],
  });
  return session;
}
```

This `createInlineSession()` function will try to create an inline session that's compatible with the `local` reference space. When you're ready to create your reference space, you can try for a local space, and if that fails, fall back to a `viewer` reference space, which all devices are required to support.

### Preparing the new session for use

Once the {{domxref("XRSystem.requestSession", "requestSession()")}} method's returned promise successfully resolves, you know you have a usable WebXR session in hand. You can then proceed to prepare the session for use and begin your animations.

The key things you need (or may need) to do in order to finish the configuration of your session include:

- Add handlers for the events you need to watch. This most likely includes the {{domxref("XRSession.end_event", "end")}} at a minimum, so you can detect when the session is over.
- If you use XR input controllers, watch the {{domxref("XRSession.inputsourceschange_event", "inputsourceschange")}} event to detect the addition or removal of XR input controllers, and the various [select and squeeze action events](/en-US/docs/Web/API/WebXR_Device_API/Inputs#actions).
- You may want to watch for the {{domxref("XRSystem")}} event {{domxref("XRSystem.devicechange_event", "devicechange")}} so you can be advised when the set of available immersive devices changes.
- Obtain a WebGL context for the canvas into which you intend to render your frames by calling the {{domxref("HTMLCanvasElement")}} method {{domxref("HTMLCanvasElement.getContext", "getContext()")}} on the target context.
- Set up your WebGL data and models and prepare to render the scene.
- Set the WebGL context as the source for the XR system by creating an {{domxref("XRWebGLLayer")}} and passing set the value of the session's {{domxref("XRRenderState", "renderState")}} property {{domxref("XRRenderState.baseLayer", "baseLayer")}}.
- Perform calculations for the initial position and scale of your objects as needed.
- Begin the [frame rendering cycle](/en-US/docs/Web/API/WebXR_Device_API/Rendering).

In basic form, code to do this final setup might look something like this:

```js
async function runSession(session) {
  session.addEventListener("end", onSessionEnd);

  const canvas = document.querySelector("canvas");
  const gl = canvas.getContext("webgl", { xrCompatible: true });

  // Set up WebGL data and such

  const worldData = loadGLPrograms(session, "world-data.xml");
  if (!worldData) {
    return null;
  }

  // Finish configuring WebGL

  worldData.session.updateRenderState({
    baseLayer: new XRWebGLLayer(worldData.session, gl),
  });

  // Start rendering the scene

  referenceSpace = await worldData.session.requestReferenceSpace("unbounded");
  worldData.referenceSpace = referenceSpace.getOffsetReferenceSpace(
    new XRRigidTransform(
      worldData.playerSpawnPosition,
      worldData.playerSpawnOrientation,
    ),
  );
  worldData.animationFrameRequestID =
    worldData.session.requestAnimationFrame(onDrawFrame);

  return worldData;
}
```

For the purposes of this example, an object named `worldData` gets created to encapsulate data about the world and rendering environment. This includes the {{domxref("XRSession")}} itself, all of the data used to render the scene in WebGL, the world reference space, and the ID returned by {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}}.

First, a handler for the {{domxref("XRSession.end_event", "end")}} event is set up. Then the rendering canvas is obtained and a reference to its WebGL context is retrieved, specifying the `xrCompatible` option when calling {{domxref("HTMLCanvasElement.getContext", "getContext()")}}.

Next, any data and setup needed for the WebGL renderer is performed before then configuring WebGL to use the framebuffer of the WebGL context as its own framebuffer. This is done using the {{domxref("XRSession")}} method {{domxref("XRSession.updateRenderState", "updateRenderState()")}} to set the render state's {{domxref("XRRenderState.baseLayer", "baseLayer")}} to a newly-created {{domxref("XRWebGLLayer")}} encapsulating the WebGL context.

### Preparing to render the scene

At this point, the `XRSession` itself has been fully configured, so we can begin rendering. First, we need a reference space within which coordinates for the world will be stated. We can get the initial reference space for the session by calling the `XRSession`'s {{domxref("XRSession.requestReferenceSpace", "requestReferenceSpace()")}} method. We specify when calling `requestReferenceSpace()` the name of the type of reference space we want; in this case, `unbounded`. You might just as easily specify `local` or `viewer`, depending on your needs.

> [!NOTE]
> To understand how to select the right reference space for your needs, see [Selecting the reference space type](/en-US/docs/Web/API/WebXR_Device_API/Geometry#selecting_the_reference_space_type).

The reference space returned by `requestReferenceSpace()` places the origin (0, 0, 0) in the center of the space. This is great—if your player's viewpoint starts in the exact center of the world. But most likely, that's not the case at all. If that's so, you call {{domxref("XRReferenceSpace.getOffsetReferenceSpace", "getOffsetReferenceSpace()")}} on the initial reference space to create a _new_ reference space [which offsets the coordinate system](/en-US/docs/Web/API/WebXR_Device_API/Geometry#establishing_the_reference_space) so that (0, 0, 0) is located at the position of the viewer, with the orientation likewise shifted to face in the desired direction. The input value into `getOffsetReferenceSpace()` is an {{domxref("XRRigidTransform")}} encapsulating the player's position and orientation as specified in the default world coordinates.

With the new reference space in hand and stored into the `worldData` object for safe-keeping, we call the session's {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} method to schedule a callback to be executed when it's time to render the next frame of animation for the WebXR session. The returned value is an ID we can use later to cancel the request if need be, so we save that into `worldData` as well.

In the end, the `worldData` object is returned to the caller to allow the main code to reference the data it needs later. At this point, the setup process is complete and we've entered the rendering stage of our application. To learn more about rendering, see the article [Rendering and the WebXR frame animation callback](/en-US/docs/Web/API/WebXR_Device_API/Rendering).

### On operational details

Obviously, this was a just an example. You don't need a `worldData` object to store everything; you can store the information you need to maintain any way you want to. You may need different information or have different specific requirements that cause you to do things differently, or in a different order.

Similarly, the specific methodology you use for loading models and other information and setting up your WebGL data—textures, vertex buffers, shaders, and so on—will vary a great deal depending on your needs, what if any frameworks you're using, and the like.

## Important session maintenance events

Over the course of your WebXR session, you may receive any of a number of events which indicate changes to the state of the session, or which let you know about things you need to do to keep the session operating properly.

### Detecting changes to session's visibility state

When the state of the `XRSession`'s visibility changes—such as when the session is hidden or displayed, or when the user has focused another context—the session receives an {{domxref("XRSession.visibilitychange_event", "visibilitychange")}} event.

```js
session.onvisibilitychange = (event) => {
  switch (event.session.visibilityState) {
    case "hidden":
      myFrameRate = 10;
      break;
    case "blurred-visible":
      myFrameRate = 30;
      break;
    case "visible":
    default:
      myFrameRate = 60;
      break;
  }
};
```

This example changes a variable `myFrameRate` depending on the visibility state as it changes. Presumably the renderer uses this value to compute how often to render new frames as the animation loop progresses, thus rendering less frequently the more "blurred" the scene becomes.

### Detecting reference space resets

Occasionally, discontinuities or jumps in the [native origin](/en-US/docs/Web/API/WebXR_Device_API/Geometry#on_the_origins_of_spaces) may occur while tracking the user's position in the world. The most common scenarios in which this happens are when the user requests a recalibration of their XR device or when a hiccup or glitch occurs in the flow of tracking data received from the XR hardware. These situations cause the native origin to jump abruptly by the distance and directional angle necessary to bring the native origin back into alignment with the user's position and facing direction.

When this happens, a {{domxref("XRReferenceSpace.reset_event", "reset")}} event is sent to the session's {{domxref("XRReferenceSpace")}}. The event's {{domxref("XRReferenceSpaceEvent.transform", "transform")}} property is an {{domxref("XRRigidTransform")}} detailing the transform needed to realign the native origin.

> [!NOTE]
> The `reset` event is fired at the {{domxref("XRReferenceSpace")}}, not the {{domxref("XRSession")}}!

Another common cause for `reset` events is when a bounded reference space (`bounded-floor`) has its geometry as specified by the {{domxref("XRBoundedReferenceSpace")}}'s property {{domxref("XRBoundedReferenceSpace.boundsGeometry", "boundsGeometry")}} change.

For more common causes of reference space resets and more details and sample code, see the documentation for the {{domxref("XRReferenceSpace.reset_event", "reset")}} event.

### Detecting when the available set of WebXR input controls changes

WebXR maintains a list of input controls which is specific to the WebXR system. These devices include things such as the handheld controllers, motion-sensing cameras, motion-sensitive gloves and other feedback devices. When the user connects or disconnects a WebXR controller device, the {{domxref("XRSession.inputsourceschange_event", "inputsourceschange")}} event is dispatched to the `XRSession`. This is an opportunity to notify the user of the device's availability, begin to monitor it for inputs, offer configuration options, or whatever you need to do with it.

## Ending the WebXR session

When the user's VR or AR session draws to a close, the session ends. The shutdown of an {{domxref("XRSession")}} can happen either due to the session itself deciding it's time to shut down (such as if the user turns off their XR device), because the user has clicked a button to end the session, or some other situation as appropriate for your application.

Here we discuss both how to request a shutdown of the WebXR session and how to detect when the session has ended, whether by your request or otherwise.

### Shutting down the session

To cleanly shut down the WebXR session when you're done with it, you should call the session's {{domxref("XRSession.end", "end()")}} method. This returns a [promise](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) you can use to know when the shutdown is complete.

```js
async function shutdownXR(session) {
  if (session) {
    await session.end();

    /* At this point, WebXR is fully shut down */
  }
}
```

When `shutdownXR()` returns to its caller, the WebXR session is fully and safely shut down.

If you have work that must be done when the session ends, such as releasing resources and the like, you should do that work in your {{domxref("XRSession.end_event", "end")}} event handler rather than in your main code body. That way, you handle the cleanup regardless of whether the shutdown was automatically or manually triggered.

### Detecting when the session has ended

As previously established, you can detect when the WebXR session has ended—whether because you've called its {{domxref("XRSession.end", "end()")}} method, the user turned off their headset, or some sort of irresolvable error occurred in the XR system—by watching for the {{domxref("XRSession.end_event", "end")}} event to be sent to the {{domxref("XRSession")}}.

```js
session.onend = (event) => {
  /* the session has shut down */

  freeResources();
};
```

Here, when the session has ended and the `end` event is received, a `freeResources()` function is called to release the resources previously allocated and/or loaded to handle the XR presentation. By calling `freeResources()` in the `end` event handler, we call it both when the user clicks a button that triggers a shutdown such as by calling the `shutdownXR()` function shown above _and_ when the session ends automatically, whether due to an error or some other reason.

## See also

- [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API)
- [Fundamentals of WebXR](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals)
- [Spatial tracking in WebXR](/en-US/docs/Web/API/WebXR_Device_API/Spatial_tracking)
- [Viewpoints and viewers: Simulating cameras in WebXR](/en-US/docs/Web/API/WebXR_Device_API/Cameras)
- [Using bounded reference spaces](/en-US/docs/Web/API/WebXR_Device_API/Bounded_reference_spaces)
- [Inputs and input sources](/en-US/docs/Web/API/WebXR_Device_API/Inputs)
