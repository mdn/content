---
title: "Navigator: devicePosture property"
short-title: devicePosture
slug: Web/API/Navigator/devicePosture
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Navigator.devicePosture
---

{{APIRef("WebdevicePosture API")}}{{SeeCompatTable}}

The **`Navigator.devicePosture`** read-only property returns the browser's {{domxref("DevicePosture")}} object, which allows developers to query the device's current posture (that is, whether the viewport is in a flat or folded state) and run code in response to posture changes.

## Value

A {{domxref("DevicePosture")}} object.

## Examples

```js
const postureOutput = document.getElementById("currentPosture");

function reportPostureOutput() {
  // type property returns "continuous" or "folded"
  postureOutput.textContent = `Device posture: ${navigator.devicePosture.type}`;
}

navigator.devicePosture.addEventListener("change", reportPostureOutput);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DevicePosture")}}
- {{domxref("devicePosture.type")}}
- [Device Posture API](/en-US/docs/Web/API/Device_Posture_API)
- CSS {{cssxref("@media/device-posture", "device-posture")}} `@media` feature
