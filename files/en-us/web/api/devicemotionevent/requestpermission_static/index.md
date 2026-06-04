---
title: "DeviceMotionEvent: requestPermission() static method"
short-title: requestPermission()
slug: Web/API/DeviceMotionEvent/requestPermission_static
page-type: web-api-static-method
status:
  - experimental
browser-compat: api.DeviceMotionEvent.requestPermission_static
---

{{APIRef("Device Orientation Events")}}{{SeeCompatTable}}{{securecontext_header}}

The **`requestPermission()`** static method of the {{domxref("DeviceMotionEvent")}} interface requests the user's permission to access device motion data from the accelerometer and gyroscope sensors. This method requires {{Glossary("transient activation")}}, meaning that it must be triggered by a UI event such as a button click.

## Syntax

```js-nolint
DeviceMotionEvent.requestPermission()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves with a string which is either `"granted"` or `"denied"`.

### Exceptions

The returned promise rejects with the following exceptions:

- `NotAllowedError` {{domxref("DOMException")}}
  - : The permission state is `"prompt"` and the calling function does not have {{Glossary("transient activation")}}.

## Security

[Transient user activation](/en-US/docs/Web/Security/Defenses/User_activation) is required. The user has to interact with the page or a UI element in order for this feature to work.

## Examples

### Requesting device motion permission on click

```js
document.querySelector("button").addEventListener("click", async () => {
  if (typeof DeviceMotionEvent.requestPermission !== "function") {
    // The feature is not available, or does not need permission.
    return;
  }

  const permission = await DeviceMotionEvent.requestPermission();
  if (permission === "granted") {
    window.addEventListener("devicemotion", (event) => {
      console.log(`Acceleration X: ${event.acceleration.x}`);
      console.log(`Acceleration Y: ${event.acceleration.y}`);
      console.log(`Acceleration Z: ${event.acceleration.z}`);
    });
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DeviceMotionEvent")}}
- {{domxref("DeviceOrientationEvent.requestPermission_static", "DeviceOrientationEvent.requestPermission()")}}
- {{domxref("Window.devicemotion_event", "devicemotion")}} event
- {{domxref("Device orientation events/Detecting device orientation", "Detecting device orientation", "", "nocode")}}
