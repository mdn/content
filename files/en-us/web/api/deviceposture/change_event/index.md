---
title: "DevicePosture: change event"
short-title: change
slug: Web/API/DevicePosture/change_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.DevicePosture.change_event
---

{{APIRef}}{{SeeCompatTable}}

The **`change`** event of the {{domxref("DevicePosture")}} interface fires when the device's posture changes, for example when a foldable device goes from `folded` to `continuous` posture.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("change", (event) => {});

onchange = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

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
