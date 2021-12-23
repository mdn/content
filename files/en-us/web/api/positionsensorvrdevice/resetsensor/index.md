---
title: PositionSensorVRDevice.resetSensor()
slug: Web/API/PositionSensorVRDevice/resetSensor
tags:
  - API
  - Experimental
  - Method
  - Deprecated
  - PositionSensorVRDevice
  - Reference
  - VR
  - Virtual Reality
  - WebVR
  - resetSensor
browser-compat: api.PositionSensorVRDevice.resetSensor
---
{{deprecated_header}}{{APIRef("WebVR API")}}{{SeeCompatTable}}

The **`resetSensor()`** method of the {{domxref("VRDisplay")}} interface _can be used to reset the sensor if desired, returning the_ position and orientation values to zero.

## Syntax

```js
PositionSensorVRDevice.resetSensor();
```

### Parameters

None.

### Returns

{{jsxref('undefined')}}.

## Examples

Our [positionsensorvrdevice](https://mdn.github.io/webvr-tests/positionsensorvrdevice/) demo uses the WebVR API to update the view of a simple {{domxref("CanvasRenderingContext2D","2D canvas")}} scene on each frame of a {{domxref("window.requestAnimationFrame()","requestAnimationFrame")}} loop. It features, among other things, a "Reset Sensor" button in the UI, which when pressed runs the `resetSensor()` function on the position sensor. The JavaScript looks like this:

```js
document.querySelector('button').onclick = function() {
  gPositionSensor.resetSensor();
}
```

When the button is pressed, the current position, orientation, etc. of the sensor/head mounted display is set to be 0 — this makes the method useful for calibration when an app is first loaded.

## Browser compatibility

{{Compat}}

## See also

- [WebVR API homepage](/en-US/docs/Web/API/WebVR_API).
- <https://mixedreality.mozilla.org/> — demos, downloads, and other resources from the Mozilla VR team.
