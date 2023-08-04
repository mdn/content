---
title: Detecting device orientation
slug: Web/API/Device_orientation_events/Detecting_device_orientation
page-type: guide
browser-compat:
  - api.DeviceMotionEvent
  - api.DeviceOrientationEvent
---

{{DefaultAPISidebar("Device Orientation Events")}} {{securecontext_header}}

Increasingly, web-enabled devices are capable of determining their **orientation**; that is, they can report data indicating changes to their orientation with relation to the pull of gravity. In particular, hand-held devices such as mobile phones can use this information to automatically rotate the display to remain upright, presenting a wide-screen view of the web content when the device is rotated so that its width is greater than its height.

There are two JavaScript events that handle orientation information. The first one is the {{domxref("DeviceOrientationEvent")}}, which is sent when the accelerometer detects a change to the orientation of the device. By receiving and processing the data reported by these orientation events, it's possible to interactively respond to rotation and elevation changes caused by the user moving the device.

The second event is the {{domxref("DeviceMotionEvent")}}, which is sent when a change in acceleration was added. It is different from the {{domxref("DeviceOrientationEvent")}} because it is listening for changes in acceleration as opposed to orientation. Sensors that are commonly capable of detecting {{domxref("DeviceMotionEvent")}} include sensors in laptops to protect moving storage devices. {{domxref("DeviceOrientationEvent")}} is more commonly found in mobile devices.

## Processing orientation events

All you need to do in order to begin receiving orientation change is to listen to the {{domxref("Window.deviceorientation_event", "deviceorientation")}} event:

> **Note:** [parallax](https://github.com/wagerfield/parallax) is a polyfill for normalizing the accelerometer and gyroscope data on mobile devices. This is useful for overcoming some of the differences in device support for device orientation.

```js
window.addEventListener("deviceorientation", handleOrientation, true);
```

After registering your event listener (in this case, a JavaScript function called handleOrientation()), your listener function periodically gets called with updated orientation data.

The orientation event contains four values:

- {{domxref("DeviceOrientationEvent.absolute")}}
- {{domxref("DeviceOrientationEvent.alpha")}}
- {{domxref("DeviceOrientationEvent.beta")}}
- {{domxref("DeviceOrientationEvent.gamma")}}

The event handler function can look something like this:

```js
function handleOrientation(event) {
  const absolute = event.absolute;
  const alpha = event.alpha;
  const beta = event.beta;
  const gamma = event.gamma;

  // Do stuff with the new orientation data
}
```

### Orientation values explained

The value reported for each axis indicates the amount of rotation around a given axis in reference to a standard coordinate frame. These are described in greater detail in the [Orientation and motion data explained](/en-US/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained) article which is summarized below.

- The {{domxref("DeviceOrientationEvent.alpha")}} value represents the motion of the device around the z axis, represented in degrees with values ranging from 0 (inclusive) to 360 (exclusive).
- The {{domxref("DeviceOrientationEvent.beta")}} value represents the motion of the device around the x axis, represented in degrees with values ranging from -180 (inclusive) to 180 (exclusive). This represents a front to back motion of the device.
- The {{domxref("DeviceOrientationEvent.gamma")}} value represents the motion of the device around the y axis, represented in degrees with values ranging from -90 (inclusive) to 90 (exclusive). This represents a left to right motion of the device.

### Orientation example

This example will work on any browser supporting the {{domxref("Window.deviceorientation_event", "deviceorientation")}} event and running on a device able to detect its orientation.

So let's imagine a ball in a garden:

```html
<div class="garden">
  <div class="ball"></div>
</div>

<pre class="output"></pre>
```

This garden is 200 pixel wide (yes, it's a tiny one), and the ball is in the center:

```css
.garden {
  position: relative;
  width: 200px;
  height: 200px;
  border: 5px solid #ccc;
  border-radius: 10px;
}

.ball {
  position: absolute;
  top: 90px;
  left: 90px;
  width: 20px;
  height: 20px;
  background: green;
  border-radius: 100%;
}
```

Now, if we move our device, the ball will move accordingly:

```js
const ball = document.querySelector(".ball");
const garden = document.querySelector(".garden");
const output = document.querySelector(".output");

const maxX = garden.clientWidth - ball.clientWidth;
const maxY = garden.clientHeight - ball.clientHeight;

function handleOrientation(event) {
  let x = event.beta; // In degree in the range [-180,180)
  let y = event.gamma; // In degree in the range [-90,90)

  output.textContent = `beta : ${x}\n`;
  output.textContent += `gamma: ${y}\n`;

  // Because we don't want to have the device upside down
  // We constrain the x value to the range [-90,90]
  if (x > 90) {
    x = 90;
  }
  if (x < -90) {
    x = -90;
  }

  // To make computation easier we shift the range of
  // x and y to [0,180]
  x += 90;
  y += 90;

  // 10 is half the size of the ball
  // It center the positioning point to the center of the ball
  ball.style.top = `${(maxY * y) / 180 - 10}px`;
  ball.style.left = `${(maxX * x) / 180 - 10}px`;
}

window.addEventListener("deviceorientation", handleOrientation);
```

{{LiveSampleLink("Orientation_example", "Click here")}} to open this example in a new window; because {{domxref("Window.deviceorientation_event", "deviceorientation")}} doesn't work in a cross-origin {{HTMLElement("iframe")}} in all browsers.

{{EmbedLiveSample('Orientation_example', '230', '260')}}

## Processing motion events

Motion events are handled the same way as the orientation events except that they have their own event's name: {{domxref("Window.devicemotion_event", "devicemotion")}}

```js
window.addEventListener("devicemotion", handleMotion, true);
```

What's really changed are the information provided within the {{domxref("DeviceMotionEvent")}} object passed as a parameter of the _HandleMotion_ function.

The motion event contains four properties:

- {{domxref("DeviceMotionEvent.acceleration")}}
- {{domxref("DeviceMotionEvent.accelerationIncludingGravity")}}
- {{domxref("DeviceMotionEvent.rotationRate")}}
- {{domxref("DeviceMotionEvent.interval")}}

### Motion values explained

The {{domxref("DeviceMotionEvent")}} objects provide web developers with information about the speed of changes for the device's position and orientation. The changes are provided along three axis (see [Orientation and motion data explained](/en-US/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained) for details).

For {{domxref("DeviceMotionEvent.acceleration","acceleration")}} and {{domxref("DeviceMotionEvent.accelerationIncludingGravity","accelerationIncludingGravity")}}, those axes correspond to the following:

- `x`: Represents the axis from West to East
- `y`: Represents the axis from South to North
- `z`: Represents the axis perpendicular to the ground

For {{domxref("DeviceMotionEvent.rotationRate","rotationRate")}}, the situation is a bit different; the information corresponds to the following in each case:

- `alpha`: Represents a rotation rate along the axis perpendicular to the screen (or keyboard for desktop).
- `beta`: Represents a rotation rate along the axis going from left to right of the plane of the screen (or keyboard for desktop).
- `gamma`: Represents a rotation rate along the axis going from bottom to top of the plane of the screen (or keyboard for desktop).

Finally, {{domxref("DeviceMotionEvent.interval","interval")}} represents the interval of time, in milliseconds, at which data are obtained from the device.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DeviceOrientationEvent")}}
- {{domxref("DeviceMotionEvent")}}
- [Orientation and motion data explained](/en-US/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained)
- [Using deviceorientation in 3D Transforms](/en-US/docs/Web/API/Device_orientation_events/Using_device_orientation_with_3D_transforms)
- [Cyber Orb: 2D maze game with device orientation](/en-US/docs/Games/Tutorials/HTML5_Gamedev_Phaser_Device_Orientation)
