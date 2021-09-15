---
title: 'Window: devicemotion event'
slug: Web/API/Window/devicemotion_event
tags:
  - API
  - Device Orientation API
  - Sensors
  - events
browser-compat: api.Window.devicemotion_event
---
{{APIRef}}

The `devicemotion` event is fired at a regular interval and indicates the amount of physical force of acceleration the device is receiving at that time. It also provides information about the rate of rotation, if available.

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
      <td>{{domxref("DeviceMotionEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>{{domxref("Window.ondevicemotion")}}</td>
    </tr>
  </tbody>
</table>

## Examples

```js
function handleMotionEvent(event) {

    var x = event.accelerationIncludingGravity.x;
    var y = event.accelerationIncludingGravity.y;
    var z = event.accelerationIncludingGravity.z;

    // Do something awesome.
}

window.addEventListener("devicemotion", handleMotionEvent, true);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Window/deviceorientation_event", "deviceorientation")}}
- [DeviceOrientation Event](https://www.w3.org/TR/orientation-event/#devicemotion)
