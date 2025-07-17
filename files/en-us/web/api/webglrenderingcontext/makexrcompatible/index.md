---
title: "WebGLRenderingContext: makeXRCompatible() method"
short-title: makeXRCompatible()
slug: Web/API/WebGLRenderingContext/makeXRCompatible
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.makeXRCompatible
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The {{domxref("WebGLRenderingContext")}} method
**`makeXRCompatible()`** ensures that the rendering context
described by the `WebGLRenderingContext` is ready to render the scene for the
immersive [WebXR](/en-US/docs/Web/API/WebXR_Device_API) device on which it
will be displayed. If necessary, the [WebGL](/en-US/docs/Web/API/WebGL_API)
layer may reconfigure the context to be ready to render to a different device than it
originally was.

This is useful if you have an application which can start out being presented on a
standard 2D display but can then be transitioned to a 3D immersion system.

## Syntax

```js-nolint
makeXRCompatible()
```

### Parameters

None.

### Return value

A
[`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
which successfully resolves once the WebGL context is ready to be used for rendering [WebXR](/en-US/docs/Web/API/WebXR_Device_API) content.

### Exceptions

This method doesn't throw traditional exceptions; instead, the promise rejects with one
of the following errors as the value passed into the rejection handler:

- `AbortError` {{domxref("DOMException")}}
  - : Returned if switching the context over to the WebXR-compatible context failed.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Returned if the WebGL context has been lost or there is no available WebXR device.

## Usage notes

Because `makeXRCompatible()` may involve replacing the underlying WebGL
context with a new one that uses the new rendering hardware, the existing contents of
the context may be lost and, therefore, would need to be re-rendered. This is why the
[`webglcontextlost`](/en-US/docs/Web/API/HTMLCanvasElement/webglcontextlost_event)
and
[`webglcontextrestored`](/en-US/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event)
events are used: the first gives you the opportunity to discard anything you won't need
anymore, while the second gives you the opportunity to load resources and prepare to
render the scene in its new context.

While this method is available through the {{domxref("WebGLRenderingContext")}}
interface, it's actually defined by the [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API) rather than by WebGL.

## Examples

This example demonstrates code logic you might find in a game that starts up using
WebGL to display menus and other UI, and uses WebGL to render gameplay, but has a button
on its main menu that offers an option to start the game in WebXR mode.

### HTML

The HTML for the buttons looks like this:

```html
<button class="green button" type="button">Start Game</button>
<button class="blue button use-webxr" type="button">
  Start Game (VR mode)
</button>
```

The first button starts the game, continuing to present the game onscreen as usual. The
second button will be used to start the game in `immersive-vr` mode. Note the
inclusion of a `use-webxr` class on the VR mode button. This is important,
which we'll explore shortly.

### JavaScript

The code that handles starting up graphics, switching to VR mode, and so forth looks
like this:

```js
const outputCanvas = document.querySelector(".output-canvas");
const gl = outputCanvas.getContext("webgl");
let xrSession = null;
let usingXR = false;
let currentScene = "scene1";
let glStartButton;
let xrStartButton;

window.addEventListener("load", (event) => {
  loadSceneResources(currentScene);

  glStartButton.addEventListener("click", handleStartButtonClick);
  xrStartButton.addEventListener("click", handleStartButtonClick);
});

outputCanvas.addEventListener("webglcontextlost", (event) => {
  /* The context has been lost but can be restored */
  event.canceled = true;
});

/* When the GL context is reconnected, reload the resources for the
   current scene. */
outputCanvas.addEventListener("webglcontextrestored", (event) => {
  loadSceneResources(currentScene);
});

async function onStartedXRSession(xrSession) {
  try {
    await gl.makeXRCompatible();
  } catch (err) {
    switch (err) {
      case AbortError:
        showSimpleMessageBox(
          "Unable to transfer the game to your XR headset.",
          "Cancel",
        );
        break;
      case InvalidStateError:
        showSimpleMessageBox(
          "You don't appear to have a compatible XR headset available.",
          "Cancel",
        );
        break;
      default:
        handleFatalError(err);
        break;
    }
    xrSession.end();
  }
}

async function handleStartButtonClick(event) {
  if (event.target.classList.contains("use-webxr") && navigator.xr) {
    try {
      xrSession = await navigator.xr.requestSession("immersive-vr");
      usingXR = true;
    } catch (err) {
      xrSession = NULL;
      usingXR = false;
    }
  }
  startGame();
}

function startGame() {
  currentScene = "scene1";
  loadSceneResources(currentScene);

  /* and so on */
}
```

This works by having two buttons, one which starts the game normally and the other
which starts the game in VR mode. These both use the
`handleStartButtonClick()` function as their event handler. The function
determines that the button clicked was the one requesting `immersive-vr` mode
by checking to see if the button has the `use-webxr` class on it. If the
button clicked by the user has that class (and we've confirmed that WebXR is available
by ensuring that the {{domxref("navigator.xr")}} property exists), we use
{{domxref("XRSystem.requestSession", "requestSession()")}} to request a new WebXR
session and set the `usingXR` flag to `true`.

If the other button was clicked, we ensure that `xrSession` is
`NULL` and clear `usingXR` to `false`.

Then the `startGame()` function is called to trigger the beginning of
gameplay.

Handlers are provided for both
[`webglcontextlost`](/en-US/docs/Web/API/HTMLCanvasElement/webglcontextlost_event)
and
[`webglcontextrestored`](/en-US/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event);
in the first case, we make sure we're aware that the state can be recovered, while in
the latter we actually reload the scene to ensure we have the correct resources for the
current screen or headset configuration.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
