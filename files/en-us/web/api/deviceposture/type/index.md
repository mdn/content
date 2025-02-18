---
title: "DevicePosture: type property"
short-title: type
slug: Web/API/DevicePosture/type
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.DevicePosture.type
---

{{APIRef("Device Posture API")}}{{SeeCompatTable}}

The **`type`** read-only property of the {{domxref("DevicePosture")}} interface returns the device's current posture.

## Value

A string representing the device's current posture. The value can be one of:

- `continuous`
  - : Indicates a flat screen posture — this can include a foldable device while it is being used flat, a seamless curved display, or a standard desktop, laptop, tablet or mobile screen.
- `folded`
  - : Indicates a folded screen posture — this can include a foldable device being used in a book or laptop posture.

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

- CSS {{cssxref("@media/device-posture", "device-posture")}} `@media` feature
- [Device Posture API](/en-US/docs/Web/API/Device_Posture_API)
- [Origin trial for Foldable APIs](https://developer.chrome.com/blog/foldable-apis-ot) on developer.chrome.com (2024)
