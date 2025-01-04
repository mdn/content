---
title: "PositionSensorVRDevice: resetSensor() method"
short-title: resetSensor()
slug: Web/API/PositionSensorVRDevice/resetSensor
page-type: web-api-instance-method
status:
  - deprecated
  - non-standard
browser-compat: api.PositionSensorVRDevice.resetSensor
---

{{deprecated_header}}{{APIRef("WebVR API")}}{{Non-standard_header}}

The **`resetSensor()`** method of the {{domxref("VRDisplay")}} interface _can be used to reset the sensor if desired, returning the_ position and orientation values to zero.

## Syntax

```js-nolint
resetSensor()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

The following demo uses the WebVR API to update the view of a simple {{domxref("CanvasRenderingContext2D")}} scene on each frame of a {{domxref("window.requestAnimationFrame()","requestAnimationFrame")}} loop. It features, among other things, a "Reset Sensor" button in the UI, which when pressed runs the `resetSensor()` function on the position sensor. The JavaScript looks like this:

```js
document.querySelector("button").onclick = () => {
  gPositionSensor.resetSensor();
};
```

When the button is pressed, the current position, orientation, etc. of the sensor/head mounted display is set to be 0 — this makes the method useful for calibration when an app is first loaded.

## Browser compatibility

{{Compat}}

## See also

- [WebVR API](/en-US/docs/Web/API/WebVR_API)
