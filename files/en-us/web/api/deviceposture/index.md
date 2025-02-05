---
title: DevicePosture
slug: Web/API/DevicePosture
page-type: web-api-interface
status:
  - experimental
browser-compat: api.DevicePosture
---

{{APIRef("Device Posture API")}}{{SeeCompatTable}}

The **`DevicePosture`** interface of the {{domxref("Device Posture API", "Device Posture API", "", "nocode")}} represents the device's posture.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its parent, {{DOMxRef("EventTarget")}}._

- {{domxref("DevicePosture.type", "type")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the device's current posture.

## Events

- {{domxref("DevicePosture.change_event", "change")}} {{Experimental_Inline}}
  - : Fires when the device's posture changes.

## Examples

```js
const postureOutput = document.getElementById("currentPosture");

function reportPostureOutput() {
  postureOutput.textContent = `Device posture: ${navigator.devicePosture.type}`;
}

navigator.devicePosture.addEventListener("change", reportPostureOutput);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("@media/device-posture", "device-posture")}} media query feature
- [Device Posture API](/en-US/docs/Web/API/Device_Posture_API)
- [Origin trial for Foldable APIs](https://developer.chrome.com/blog/foldable-apis-ot) on developer.chrome.com (2024)
