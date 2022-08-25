---
title: Using VR controllers with WebVR
slug: Web/API/WebVR_API/Using_VR_controllers_with_WebVR
page-type: guide
tags:
  - Experimental
  - Gamepad API
  - Guide
  - VR
  - Virtual Reality
  - WebGL
  - WebVR
  - controllers
---
{{APIRef("WebVR API")}}{{Deprecated_Header}}

Many WebVR hardware setups feature controllers that go along with the headset. These can be used in WebVR apps via the [Gamepad API](/en-US/docs/Web/API/Gamepad_API), and specifically the [Gamepad Extensions API](/en-US/docs/Web/API/Gamepad_API#experimental_gamepad_extensions) that adds API features for accessing [controller pose](/en-US/docs/Web/API/GamepadPose), [haptic actuators](/en-US/docs/Web/API/GamepadHapticActuator), and more. This article explains the basics.

> **Note:** WebVR API is replaced by [WebXR API](/en-US/docs/Web/API/WebXR_Device_API). WebVR was never ratified as a standard, was implemented and enabled by default in very few browsers and supported a small number of devices.

## The WebVR API

The [WebVR API](/en-US/docs/Web/API/WebVR_API) is a nascent, but very interesting new feature of the web platform that allows developers to create web-based virtual reality experiences. It does this by providing access to VR headsets connected to your computer as {{domxref("VRDisplay")}} objects, which can be manipulated to start and stop presentation to the display, queried for movement data (e.g. orientation and position) that can be used to update the display on each frame of the animation loop, and more.

Before you read this article, you should really be familiar with the basics of the WebVR API already — go and read [Using the WebVR API](/en-US/docs/Web/API/WebVR_API/Using_the_WebVR_API) first, if you haven't already done so, which also details browser support and required hardware setup.

## The Gamepad API

The [Gamepad API](/en-US/docs/Web/API/Gamepad_API) is a fairly well-supported API that allows developers to access gamepads/controllers connected to your computer and use them to control web apps. The basic Gamepad API provides access to connected controllers as {{domxref("Gamepad")}} objects, which can then be queried to find out what buttons are being pressed and thumbsticks (axes) are being moved at any point, etc.

You can find more about basic Gamepad API usage in [Using the Gamepad API](/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API), and [Implementing controls using the Gamepad API](/en-US/docs/Games/Techniques/Controls_Gamepad_API).

However, in this article we will mainly be concentrating on some of the new features provided by the [Gamepad Extensions](https://w3c.github.io/gamepad/extensions.html) API, which allows access to advanced controller information such as position and orientation data, control over haptic actuators (e.g. vibration hardware), and more. This API is very new, and currently is only supported and enabled by default in Firefox 55+ Beta/Nightly channels.

## Types of controller

There are two types of controller you'll encounter with VR hardware:

- 6DoF (six-degrees-of-freedom) controllers provide access to both positional and orientation data — they can manipulate a VR scene and the objects it contains with movement but also rotation. A good example is the HTC VIVE controllers.
- 3DoF (three-degrees-of-freedom) controllers provide orientation but not positional data. A good example is the Google Daydream controller, which can be rotated to point to different things in 3D space like a laser pointer, but can't be moved inside a 3D scene.

## Basic controller access

Now onto some code. Let's look first at the basics of how we get access to VR controllers with the Gamepad API. There are a few strange nuances to bear in mind here, so it is worth taking a look.

We've written up a simple example to demonstrate — see our [vr-controller-basic-info](https://github.com/mdn/webvr-tests/blob/master/vr-controller-basic-info/index.html) source code ([see it running live here also](https://mdn.github.io/webvr-tests/vr-controller-basic-info/)). This demo outputs information on the VR displays and gamepads connected to your computer.

### Getting the display information

The first notable code is as follows:

```js
let initialRun = true;

if (navigator.getVRDisplays && navigator.getGamepads) {
  info.textContent = 'WebVR API and Gamepad API supported.'
  reportDisplays();
} else {
  info.textContent = 'WebVR API and/or Gamepad API not supported by this browser.'
}
```

Here we first use a tracking variable, `initialRun`, to note that this is the first time we have loaded the page. You'll find out more about this later on. Next, we detect to see if the WebVR and Gamepad APIs are supported by checking for the existence of the {{domxref("Navigator.getVRDisplays()")}} and {{domxref("Navigator.getGamepads()")}} methods. If so, we run our `reportDisplays()` custom function to start the process off. This function looks like so:

```js
function reportDisplays() {
  navigator.getVRDisplays().then((displays) => {
    console.log(`${displays.length} displays`);
    displays.forEach((display, i) => {
      const cap = display.capabilities;
      // cap is a VRDisplayCapabilities object
      const listItem = document.createElement('li');
      listItem.innerHTML = `<strong>Display ${i + 1}</strong><br>` +
        `VR Display ID: ${display.displayId}<br>` +
        `VR Display Name: ${display.displayName}<br>` +
        `Display can present content: ${cap.canPresent}<br>` +
        `Display is separate from the computer's main display: ${cap.hasExternalDisplay}<br>` +
        `Display can return position info: ${cap.hasPosition}<br>` +
        `Display can return orientation info: ${cap.hasOrientation}<br>` +
        `Display max layers: ${cap.maxLayers}`;
      list.appendChild(listItem);
    });

    setTimeout(reportGamepads, 1000);
    // For VR, controllers will only be active after their corresponding headset is active
  });
}
```

This function first uses the promise-based {{domxref("Navigator.getVRDisplays()")}} method, which resolves with an array containing {{domxref("VRDisplay")}} objects representing the connected displays. Next, it prints out each display's {{domxref("VRDisplay.displayId")}} and {{domxref("VRDisplay.displayName")}} values, and a number of useful values contained in the display's associated {{domxref("VRCapabilities")}} object. The most useful of these are {{domxref("VRCapabilities.hasOrientation","hasOrientation")}} and {{domxref("VRCapabilities.hasPosition","hasPosition")}}, which allow you to detect whether the device can return orientation and position data and set up your app accordingly.

The last line contained in this function is a {{domxref("setTimeout()")}} call, which runs the `reportGamepads()` function after a 1 second delay. Why do we need to do this? First of all, VR controllers will only be ready after their associated VR headset is active, so we need to invoke this after `getVRDisplays()` has been called and returned the display information. Second, the Gamepad API is much older than the WebVR API, and not promise-based. As you'll see later, the `getGamepads()` method is synchronous, and just returns the `Gamepad` objects immediately — it doesn't wait for the controller to be ready to report information. Unless you wait for a little while, returned information may not be accurate (at least, this is what we found in our tests).

### Getting the Gamepad information

The `reportGamepads()` function looks like this:

```js
function reportGamepads() {
    const gamepads = navigator.getGamepads();
    console.log(`${gamepads.length} controllers`);
    for (const gp of gamepads) {
        const listItem = document.createElement('li');
        listItem.classList = 'gamepad';
        listItem.innerHTML = `<strong>Gamepad ${gp.index}</strong> (${gp.id})<br>` +
          `Associated with VR Display ID: ${gp.displayId}<br>` +
          `Gamepad associated with which hand: ${gp.hand}<br>` +
          `Available haptic actuators: ${gp.hapticActuators.length}<br>` +
          `Gamepad can return position info: ${gp.pose.hasPosition}<br>` +
          `Gamepad can return orientation info: ${gp.pose.hasOrientation}`;
        list.appendChild(listItem);
    }
    initialRun = false;
}
```

This works in a similar manner to `reportDisplays()` — we get an array of {{domxref("Gamepad")}} objects using the non-promise-based `getGamepads()` method, then cycle through each one and print out information on each:

- The {{domxref("Gamepad.displayId")}} property is the same as the `displayId` of the headset the controller is associated with, and therefore useful for tying controller and headset information together.
- The {{domxref("Gamepad.index")}} property is unique numerical index that identifies each connected controller.
- {{domxref("Gamepad.hand")}} returns which hand the controller is expected to be held in.
- {{domxref("Gamepad.hapticActuators")}} returns an array of the haptic actuators available in the controller. Here we are returning its length so we can see how many each has available.
- Finally, we return {{domxref("GamepadPose.hasPosition")}} and {{domxref("GamepadPose.hasOrientation")}} to show whether the controller can return position and orientation data. This works just the same as for the displays, except that in the case of gamepads these values are available on the pose object, not the capabilities object.

Note that we also gave each list item containing controller information a class name of `gamepad`. We'll explain what this is for later.

The last thing to do here is set the `initialRun` variable to `false`, as the initial run is now over.

### Gamepad events

To finish off this section, we'll look at the gamepad-associated events. There are two we need concern ourselves with — {{domxref("Window.gamepadconnected_event", "gamepadconnected")}} and {{domxref("Window.gamepaddisconnected_event", "gamepaddisconnected")}} — and it is fairly obvious what they do.

At the end of our example we first include the `removeGamepads()` function:

```js
function removeGamepads() {
  const gpLi = document.querySelectorAll('.gamepad');
  for (let i = 0; i < gpLi.length; i++) {
    list.removeChild(gpLi[i]);
  }
  reportGamepads();
}
```

This function grabs references to all list items with a class name of `gamepad`, and removes them from the DOM. Then it re-runs `reportGamepads()` to populate the list with the updated list of connected controllers.

`removeGamepads()` will be run each time a gamepad is connected or disconnected, via the following event handlers:

```js
window.addEventListener('gamepadconnected', (e) => {
  info.textContent = `Gamepad ${e.gamepad.index} connected.`;
  if (!initialRun) {
    setTimeout(removeGamepads, 1000);
  }
});

window.addEventListener('gamepaddisconnected', (e) => {
  info.textContent = `Gamepad ${e.gamepad.index} disconnected.`;
  setTimeout(removeGamepads, 1000);
});
```

We have `setTimeout()` calls in place here — like we did with the initialization code at the top of the script — to make sure that the gamepads are ready to report their information when `reportGamepads()` is called in each case.

But there's one more thing to note — you'll see that inside the `gamepadconnected` handler, the timeout is only run if `initialRun` is `false`. This is because if your gamepads are connected when the document first loads, `gamepadconnected` is fired once for each gamepad, therefore `removeGamepads()`/`reportGamepads()` will be run several times. This could lead to inaccurate results, therefore we only want to run `removeGamepads()` inside the `gamepadconnected` handler after the initial run, not during it. This is what `initialRun` is for.

## Introducing a real demo

Now let's look at the Gamepad API being used inside a real WebVR demo. You can find this demo at [raw-webgl-controller-example](https://github.com/mdn/webvr-tests/tree/master/raw-webgl-controller-example) ([see it live here also](https://mdn.github.io/webvr-tests/raw-webgl-controller-example/)).

In exactly the same way as our [raw-webgl-example](https://github.com/mdn/webvr-tests/tree/master/raw-webgl-example) (see [Using the WebVR API](/en-US/docs/Web/API/WebVR_API/Using_the_WebVR_API) for details), this renders a spinning 3D cube, which you can choose to present in a VR display. The only difference is that, while in VR presenting mode, this demo allows you to move the cube by moving a VR controller (the original demo moves the cube as you move your VR headset).

We'll explore the code differences in this version below — see [webgl-demo.js](https://github.com/mdn/webvr-tests/blob/master/raw-webgl-controller-example/webgl-demo.js).

### Accessing the gamepad data

Inside the `drawVRScene()` function, you'll find this bit of code:

```js
const gamepads = navigator.getGamepads();
const gp = gamepads[0];

if (gp) {
  const gpPose = gp.pose;
  const curPos = gpPose.position;
  const curOrient = gpPose.orientation;
  if (poseStatsDisplayed) {
    displayPoseStats(gpPose);
  }
}
```

Here we get the connected gamepads with {{domxref("Navigator.getGamepads")}}, then store the first gamepad detected in the `gp` variable. As we only need one gamepad for this demo, we'll just ignore the others.

The next thing we do is to get the {{domxref("GamepadPose")}} object for the controller stored in gpPose (by querying {{domxref("Gamepad.pose")}}), and also store the current gamepad position and orientation for this frame in variables so they are easy to access later. We also display the post stats for this frame in the DOM using the `displayPoseStats()` function. All of this is only done if `gp` actually has a value (if a gamepad is connected), which stops the demo erroring if we don't have our gamepad connected.

Slightly later in the code, you can find this block:

```js
if (gp && gpPose.hasPosition) {
  mvTranslate([
    0.0 + (curPos[0] * 15) - (curOrient[1] * 15),
    0.0 + (curPos[1] * 15) + (curOrient[0] * 15),
    -15.0 + (curPos[2] * 25)
  ]);
} else if (gp) {
  mvTranslate([
    0.0 + (curOrient[1] * 15),
    0.0 + (curOrient[0] * 15),
    -15.0
  ]);
} else {
  mvTranslate([
    0.0,
    0.0,
    -15.0
  ]);
}
```

Here we alter the position of the cube on the screen according to the {{domxref("GamepadPose.position","position")}} and {{domxref("GamepadPose.orientation","orientation")}} data received from the connected controller. These values (stored in `curPos` and `curOrient`) are {{jsxref("Float32Array")}}s containing the X, Y, and Z values (here we are just using \[0] which is X, and \[1] which is Y).

If the `gp` variable has a `Gamepad` object inside it and it can return position values (`gpPose.hasPosition`), indicating a 6DoF controller, we modify the cube position using position and orientation values. If only the former is true, indicating a 3DoF controller, we modify the cube position using the orientation values only. If there is no gamepad connected, we don't modify the cube position at all.

### Displaying the gamepad pose data

In the `displayPoseStats()` function, we grab all of the data we want to display out of the {{domxref("GamepadPose")}} object passed into it, then print them into the UI panel that exists in the demo for displaying such data:

```js
function displayPoseStats(pose) {
  const pos = pose.position;

  const formatCoords = ([x, y, z]) => `x ${x.toFixed(3)}, y ${y.toFixed(3)}, z ${z.toFixed(3)}`;

  posStats.textContent = pose.hasPosition
    ? `Position: ${formatCoords(pose.position)}`
    : 'Position not reported';

  orientStats.textContent = pose.hasOrientation
    ? `Orientation: ${formatCoords(pose.orientation)}`
    : 'Orientation not reported';

  linVelStats.textContent = `Linear velocity: ${formatCoords(pose.linearVelocity)}`;
  angVelStats.textContent = `Angular velocity: ${formatCoords(pose.angularVelocity)}`;

  linAccStats.textContent = pose.linearAcceleration
    ? `Linear acceleration: ${formatCoords(pose.linearAcceleration)}`
    : 'Linear acceleration not reported';

  angAccStats.textContent = pose.angularAcceleration
    ? `Angular acceleration: ${formatCoords(pose.angularAcceleration)}`
    : 'Angular acceleration not reported';
}
```

## Summary

This article has given you a very basic idea of how to use the Gamepad Extensions to use VR controllers inside WebVR apps. In a real app you'd probably have a much more complex control system in effect, with controls assigned to the buttons on the VR controllers, and the display being affected by both the display pose and the controller poses simultaneously. Here however, we just wanted to isolate the pure Gamepad Extensions parts of that.

## See also

- [WebVR API](/en-US/docs/Web/API/WebVR_API)
- [Gamepad API](/en-US/docs/Web/API/Gamepad_API)
- [Using the WebVR API](/en-US/docs/Web/API/WebVR_API/Using_the_WebVR_API)
- [Implementing controls using the Gamepad API](/en-US/docs/Games/Techniques/Controls_Gamepad_API)
