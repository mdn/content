---
title: "DeviceOrientationEvent: requestPermission() static method"
short-title: requestPermission()
slug: Web/API/DeviceOrientationEvent/requestPermission_static
page-type: web-api-static-method
status:
  - experimental
browser-compat: api.DeviceOrientationEvent.requestPermission_static
---

{{APIRef("Device Orientation Events")}}{{SeeCompatTable}}{{securecontext_header}}

The **`requestPermission()`** static method of the {{domxref("DeviceOrientationEvent")}} interface requests the user's permission to access device orientation data from the accelerometer and gyroscope sensors. It can also request permission to access magnetometer data when absolute orientation is needed. This method must be called from a user gesture such as a click handler.

## Syntax

```js-nolint
DeviceOrientationEvent.requestPermission()
DeviceOrientationEvent.requestPermission(absolute)
```

### Parameters

- `absolute` {{optional_inline}}
  - : A boolean indicating whether absolute orientation data is needed. When `true`, the permission request also includes the magnetometer sensor. Defaults to `false`.

### Return value

A {{jsxref("Promise")}} that resolves with a string which is either `"granted"` or `"denied"`.

### Exceptions

The returned promise rejects with the following exceptions:

- `NotAllowedError` {{domxref("DOMException")}}
  - : The permission state is `"prompt"` and the calling function does not have {{Glossary("transient activation")}}.

## Security

[Transient user activation](/en-US/docs/Web/Security/Defenses/User_activation) is required. The user has to interact with the page or a UI element in order for this feature to work.

## Examples

### Requesting device orientation permission on click

```js
document.querySelector("button").addEventListener("click", async () => {
  if (typeof DeviceOrientationEvent.requestPermission !== "function") {
    // The feature is not available, or does not need permission.
    return;
  }

  const permission = await DeviceOrientationEvent.requestPermission();
  if (permission === "granted") {
    window.addEventListener("deviceorientation", (event) => {
      console.log(`Alpha: ${event.alpha}`);
      console.log(`Beta: ${event.beta}`);
      console.log(`Gamma: ${event.gamma}`);
    });
  }
});
```

### Requesting absolute orientation permission

When absolute orientation data is needed (e.g., for compass-based applications), pass `true` as the `absolute` parameter. This additionally requests access to the magnetometer.

```js
document.querySelector("button").addEventListener("click", async () => {
  if (typeof DeviceOrientationEvent.requestPermission !== "function") {
    return;
  }

  const permission = await DeviceOrientationEvent.requestPermission(true);
  if (permission === "granted") {
    window.addEventListener("deviceorientationabsolute", (event) => {
      console.log(`Absolute alpha: ${event.alpha}`);
    });
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DeviceOrientationEvent")}}
- {{domxref("DeviceMotionEvent.requestPermission_static", "DeviceMotionEvent.requestPermission()")}}
- {{domxref("Window.deviceorientation_event", "deviceorientation")}} event
- {{domxref("Window.deviceorientationabsolute_event", "deviceorientationabsolute")}} event
- {{domxref("Device orientation events/Detecting device orientation", "Detecting device orientation", "", "nocode")}}
