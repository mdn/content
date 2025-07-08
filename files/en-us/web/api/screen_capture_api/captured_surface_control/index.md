---
title: Using the Captured Surface Control API
slug: Web/API/Screen_Capture_API/Captured_Surface_Control
page-type: guide
---

{{DefaultAPISidebar("Screen Capture API")}}

This guide explains how to use the features provided by the Captured Surface Control API to control a display surface (browser tab, window, or screen) captured by the [Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API).

## Background

The Screen Capture API is most commonly used to share another open tab or window on your device with other conference participants in a conferencing app, for example to demo a new feature or present a report.

A significant issue with this is that, when you want to interact with the captured display surface, for example to scroll the display or zoom it in, you can't do so without switching to the captured display surface. This creates several issues and makes the app more frustrating than it needs to be. Screen sharing users will find themselves having to jump back and forth between the conferencing app and the captured display surface to handle adjusting the media display, letting late users in, reading chat messages, and so on.

The Captured Surface Control API tackles these problems by allowing app developers to implement a limited set of features that can be used by conference participants to control the captured display surface from directly within the app, without compromising security.

Currently these are:

1. Zooming the captured display surface.
2. Using mouse wheel/touchpad gestures (and other equivalents) to scroll the captured display surface.

This functionality is all accessed via the {{domxref("CaptureController")}} object. To control a captured display surface, a capture controller must be passed into a {{domxref("MediaDevices.getDisplayMedia()")}} call inside its options object:

```js
controller = new CaptureController();

const displayMediaOptions = {
  controller,
};

videoElem.srcObject =
  await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
```

The controller can then be used to, for example, zoom the captured display surface in:

```js
controller.increaseZoomLevel();
```

In this article we will walk through the code for a basic screen sharing app that shows how to implement such features.

## A note on permissions

A website can control access to the Captured Surface Control API using the {{HTTPHeader("Permissions-Policy")}} {{HTTPHeader("Permissions-Policy/captured-surface-control", "captured-surface-control")}} directive, or the equivalent {{HTMLElement("iframe")}} [`allow`](/en-US/docs/Web/HTML/Reference/Elements/iframe#allow) attribute value:

```html
<iframe allow="captured-surface-control" src="/some-other-document.html">
  ...
</iframe>
```

Specifically, the {{domxref("CaptureController.forwardWheel", "forwardWheel()")}}, {{domxref("CaptureController.increaseZoomLevel", "increaseZoomLevel()")}}, {{domxref("CaptureController.decreaseZoomLevel", "decreaseZoomLevel()")}}, and {{domxref("CaptureController.resetZoomLevel", "resetZoomLevel()")}} methods are controlled by this directive.

The default allowlist for `captured-surface-control` is `self`, which lets any content within the same origin use Captured Surface Control.

In addition, if permission is granted by the policy, the user must also grant permission. This can either be explicit permission, granted by responding to a prompt, or implicit permission granted by interacting with a control that calls one of the methods ([transient activation](/en-US/docs/Glossary/Transient_activation)) when user permission has not been explicitly denied.

See also [Screen Capture API > Security considerations](/en-US/docs/Web/API/Screen_Capture_API#security_considerations).

## App HTML

The markup for our sample app is as follows:

```html live-sample___surface-control-demo
<h1>Captured Surface Control API demo</h1>

<p>
  <button id="start">Start Capture</button>
  <button id="stop">Stop Capture</button>
</p>
<p id="zoom-controls">
  <button id="dec">Zoom -</button>
  <output>100%</output>
  <button id="inc">Zoom +</button>
  <button id="reset">Reset zoom</button>
</p>

<video autoplay></video>
```

This contains two sets of {{htmlelement("button")}} elements — one to start and stop screen capture, and one to control zooming the captured display surface. The latter also includes an {{htmlelement("output")}} element to print the current zoom level into.

Finally, we include a {{htmlelement("video")}} element to display the captured display surface into.

## App CSS

The app CSS is minimal; it is worth noting that we have given the `<video>` a {{cssxref("max-width")}} of `100%`, so that it is constrained inside the `<body>`. The `<video>` could grow dramatically when the captured display surface is embedded inside it (its size is the capture's intrisic size), which could cause overflow issues if we didn't constrain it.

```css live-sample___surface-control-demo
body {
  max-width: 640px;
  margin: 0 auto;
}

video {
  max-width: 100%;
}
```

## Initial setup

In our first section of script, we define the variables we need to set up the app:

```js live-sample___surface-control-demo
// Grab references to the <video> element and zoom controls
const videoElem = document.querySelector("video");
const zoomControls = document.getElementById("zoom-controls");

// Grab references to the start and stop capture buttons
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");

// Grab references to the zoom out, in, and reset buttons,
// and the zoom level output
const decBtn = document.getElementById("dec");
const outputElem = document.querySelector("output");
const incBtn = document.getElementById("inc");
const resetBtn = document.getElementById("reset");

// Define variables to store the controller and the zoom levels
// in, when we later create them
let controller = undefined;
let zoomLevels = undefined;
```

We then initially hide the surface controls bar by setting its {{cssxref("display")}} CSS property to `none`, and disable the stop button by setting its [`disabled`](/en-US/docs/Web/HTML/Reference/Attributes/disabled) attribute to `true`. These controls are not relevant until we have started capture, so we don't want to confuse the user by showing them at the start.

```js live-sample___surface-control-demo
zoomControls.style.display = "none";
stopBtn.disabled = true;
```

## Controlling screen capture

Next up, we add `click` event listeners (using {{domxref("EventTarget.addEventListener()")}}) to the start and stop buttons, to start and stop screen capture when they are pressed.

```js live-sample___surface-control-demo
startBtn.addEventListener("click", startCapture);
stopBtn.addEventListener("click", stopCapture);
```

The `startCapture()` function, which starts screen capture, looks like so. We first create a new `CaptureController`, and pass it into our [`MediaDisplayOptions`](/en-US/docs/Web/API/MediaDevices/getDisplayMedia#options) object, along with a [`displaysurface`](/en-US/docs/Web/API/MediaTrackConstraints/displaySurface) constraint that causes the app to recommend sharing browser tabs.

Now it's time to capture our media; we do so using a {{domxref("MediaDevices.getDisplayMedia()")}} call, to which we pass our options, and set the resulting promise as the value of the `<video>` element's {{domxref("HTMLMediaElement.srcObject", "srcObject")}} property. When it resolves, we continue the function by calling {{domxref("CaptureController.resetZoomLevel()")}} and setting the `<output>` element's contents to `100%`. This is not strictly necessary, but it can be a bit confusing when you capture a tab to find it is already zoomed out or in. Setting the zoom level to `100%` on capture feels a bit more logical. These lines of code deal with the case where the app is refreshed without pressing "Stop Capture", then capture is started again.

Our next step is to call {{domxref("CaptureController.getSupportedZoomLevels()")}} to retrieve the zoom levels the captured display surface supports, and store the resulting array in the `zoomLevels` variable.

Next, we use the controller's {{domxref("CaptureController.zoomlevelchange_event", "zoomlevelchange")}} event to detect when the zoom level is changed, print the current {{domxref("CaptureController.zoomlevel", "zoomlevel")}} to the `<output>` element, and call the user-defined `updateZoomButtonState()` function. This function will query the `zoomLevels` array to check whether the user can zoom in or out any further after each zoom change. We'll explain `updateZoomButtonState()` later on.

We next unhide our zoom controls with `display: block`, enable our stop button, and disable our start button, so that the state of the controls makes sense after capture has bene started.

To finish off our function, we call {{domxref("CaptureController.setFocusBehavior()")}} to stop the focus shifting to the captured display surface when the capture starts, and call our user-defined `startForwarding()` function to enable scrolling the captured display surface with wheel/touchpad gestures. We'll explain this function later on.

```js live-sample___surface-control-demo
async function startCapture() {
  try {
    // Create a new CaptureController instance
    controller = new CaptureController();

    // Options for getDisplayMedia()
    const displayMediaOptions = {
      controller,
      video: {
        displaySurface: "browser",
      },
    };

    // Capture a tab and display it inside the video element
    videoElem.srcObject =
      await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);

    // Reset the zoom level when capture starts
    controller.resetZoomLevel();
    outputElem.textContent = `100%`;

    // Get zoom levels for the current captured display surface
    zoomLevels = controller.getSupportedZoomLevels();

    // Report zoom level when it changes
    controller.addEventListener("zoomlevelchange", () => {
      outputElem.textContent = `${controller.zoomLevel}%`;
      updateZoomButtonState();
    });

    zoomControls.style.display = "block";
    stopBtn.disabled = false;
    startBtn.disabled = true;

    // Stop the focus from jumping to the captured tab, if you are self-sharing
    controller.setFocusBehavior("focus-capturing-application");

    // Start forwarding wheel events
    startForwarding();
  } catch (e) {
    console.error(e);
  }
}
```

Now on to the definition of our `stopCapture()` function, which stops screen capture. We start this function by again calling {{domxref("CaptureController.resetZoomLevel()")}} and setting the `<output>` element's contents to `100%` so the zoom level is reset. This deals with the case where you stop the capture by pressing "Stop Capture" and then start it again.

We then loop through all of the {{domxref("MediaStreamTrack")}} objects associated with the {{domxref("MediaStream")}} and {{domxref("MediaStreamTrack.stop", "stop()")}} them all. We then call the `resetApp()` function, which sets the `<video>` element's `srcObject` back to `null`, hides the zoom controls, disables the stop button, and enables the start button.

```js live-sample___surface-control-demo
function stopCapture() {
  let tracks = videoElem.srcObject.getTracks();
  tracks.forEach((track) => track.stop());
  resetApp();
}

function resetApp() {
  videoElem.srcObject = null;
  zoomControls.style.display = "none";
  stopBtn.disabled = true;
  startBtn.disabled = false;
}
```

## Implementing zoom controls

In the next section of our script, we wire up our zoom buttons to appropriate `click` handler functions so we can zoom the captured display surface in and out. The functions they run when clicked are as follows:

- "Zoom out" button: `decreaseZoom()`. This calls the {{domxref("CaptureController.decreaseZoomLevel()")}} method, zooming the captured surface out.
- "Zoom in" button: `increaseZoom()`. This calls the {{domxref("CaptureController.increaseZoomLevel()")}} method, zooming the captured surface in.
- "Reset zoom" button: `resetZoom()`. This calls the {{domxref("CaptureController.resetZoomLevel()")}} method, resetting the captured surface to its starting zoom factor, which is `100`.

```js live-sample___surface-control-demo
decBtn.addEventListener("click", decreaseZoom);
incBtn.addEventListener("click", increaseZoom);
resetBtn.addEventListener("click", resetZoom);

async function decreaseZoom() {
  try {
    await controller.decreaseZoomLevel();
  } catch (e) {
    console.log(e);
  }
}

async function increaseZoom() {
  try {
    await controller.increaseZoomLevel();
  } catch (e) {
    console.log(e);
  }
}

async function resetZoom() {
  await controller.resetZoomLevel();
}
```

> [!NOTE]
> It is generally a best practice to call `decreaseZoomLevel()` and `increaseZoomLevel()` from within a [`try...catch`](/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) block because the zoom level could be changed asynchronously by an entity other than the application, which might lead to an error being thrown. For example, the user might directly interact with the captured surface to zoom in or out.

When the zoom changes, the controller's {{domxref("CaptureController.zoomlevelchange_event", "zoomlevelchange")}} event fires, which causes the code we saw earlier in the `startCapture()` function to run, writing the updated zoom level to the `<output>` element and running the `updateZoomButtonState()` function to stop the user from zooming in and out too far.

```js
controller.addEventListener("zoomlevelchange", () => {
  outputElem.textContent = `${controller.zoomLevel}%`;
  updateZoomButtonState();
});
```

## Forwarding wheel events to the captured display surface

Earlier on, at bottom of the `startCapture()` function, we ran the `startForwarding()` function, which allows the captured display surface to be scrolled from the capturing app. This runs the {{domxref("CaptureController.forwardWheel()")}} method, to which we pass a reference to the `<video>` element. When the resulting promise resolves, the browser starts to forward all {{domxref("Element.wheel_event", "wheel")}} events fired on the `<video>` to the captured tab or window, so it will scroll.

```js live-sample___surface-control-demo
async function startForwarding() {
  try {
    await controller.forwardWheel(videoElem);
  } catch (e) {
    console.log(e);
  }
}
```

## Stopping the user from zooming in and out too far

Finally, it's time to define the `updateZoomButtonState()` function, which is run inside the `zoomlevelchange` event handler function you saw earlier. The problem this solves is that, if you try to zoom out below the minimum supported zoom level, or zoom in above the maximum supported zoom level, `decreaseZoomLevel()`/`increaseZoomLevel()` will throw an `InvalidStateError` {{domxref("DOMException")}}.

The `updateZoomButtonState()` function avoids this issue by first making sure both the "Zoom out" and "Zoom in" buttons are enabled. It then does two checks:

- If the current zoom level (returned by the `CaptureController.zoomLevel` property) is equal to the minimum supported zoom level (stored in the first value of the `zoomLevels` array), we disable the "Zoom out" button so the user can't zoom out any further.
- If the current zoom level is equal to the maximum supported zoom level (stored in the last value of the `zoomLevels` array), we disable the "Zoom in" button so the user can't zoom in any further.

```js live-sample___surface-control-demo
function updateZoomButtonState() {
  decBtn.disabled = false;
  incBtn.disabled = false;
  if (controller.zoomLevel === zoomLevels[0]) {
    decBtn.disabled = true;
  } else if (controller.zoomLevel === zoomLevels[zoomLevels.length - 1]) {
    incBtn.disabled = true;
  }
}
```

## Finished demo

The finished demo renders like this:

{{EmbedLiveSample("surface-control-demo", , "500px", , , , "display-capture; captured-surface-control")}}
