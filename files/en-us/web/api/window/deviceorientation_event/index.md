---
title: 'Window: deviceorientation event'
slug: Web/API/Window/deviceorientation_event
tags:
  - Device Orientation API
  - Sensors
  - Window Event
  - events
browser-compat: api.Window.deviceorientation_event
---
{{APIRef}}

The `deviceorientation` event is fired when fresh data is available from an orientation sensor about the current orientation of the device as compared to the Earth coordinate frame. This data is gathered from a magnetometer inside the device.

See [Orientation and motion data explained](/en-US/docs/Web/Guide/Events/Orientation_and_motion_data_explained) for details.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("DeviceOrientationEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>{{domxref("window.ondeviceorientation")}}</td>
    </tr>
  </tbody>
</table>

## Examples

```js
if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", function(event) {
        // alpha: rotation around z-axis
        var rotateDegrees = event.alpha;
        // gamma: left to right
        var leftToRight = event.gamma;
        // beta: front back motion
        var frontToBack = event.beta;

        handleOrientationEvent(frontToBack, leftToRight, rotateDegrees);
    }, true);
}

var handleOrientationEvent = function(frontToBack, leftToRight, rotateDegrees) {
    // do something amazing
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`devicemotion`](/en-US/docs/Web/API/Window/devicemotion_event)
- [Detecting device orientation](/en-US/docs/Web/API/Detecting_device_orientation)
- [Orientation and motion data explained](/en-US/docs/Web/Guide/Events/Orientation_and_motion_data_explained)
- Simulating orientation events on desktop browsers with the [orientation-devtool](https://louisremi.github.com/orientation-devtool/)
