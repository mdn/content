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

The **`Navigator.devicePosture`** read-only property returns the browser's {{domxref("DevicePosture")}} object, which allows developers to query the device's current posture and run code in response to posture changes.

## Value

A {{domxref("DevicePosture")}} object.

## Examples

```js
const postureOutput = document.querySelector("p");

function reportPostureOutput() {
  postureOutput.textContent = `Device posture: ${navigator.devicePosture.type}`;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Device Posture API](/en-US/docs/Web/API/Device_Posture_API)
- The [`device-posture`](/en-US/docs/Web/CSS/@media/device-posture) [media query](/en-US/docs/Web/CSS/CSS_media_queries) feature
