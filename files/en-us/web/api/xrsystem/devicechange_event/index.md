---
title: 'XRSystem: devicechange event'
slug: Web/API/XRSystem/devicechange_event
tags:
  - API
  - AR
  - Augmented Reality
  - Reference
  - Virtual Reality
  - WebXR
  - WebXR Device API
  - XR
  - XRSystem
  - devicechange
browser-compat: api.XRSystem.devicechange_event
---
{{APIRef("WebXR Device API")}}

A **`devicechange`** event is fired on an {{DOMxRef("XRSystem")}} object whenever the availability of immersive XR devices has changed; for example, a VR headset or AR goggles have been connected or disconnected. It's a generic {{DOMxRef("Event")}} with no added properties.

> **Note:** Not to be confused with the {{domxref("MediaDevices")}} {{DOMxRef("MediaDevices.devicechange_event", "devicechange")}} event.

<table class="properties">
  <tbody>
    <tr>
      <th>Bubbles</th>
      <td>No</td>
    </tr>
    <tr>
      <th>Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th>Interface</th>
      <td>{{DOMxRef("Event")}}</td>
    </tr>
    <tr>
      <th>Event handler</th>
      <td>{{DOMxRef("XRSystem.ondevicechange")}}</td>
    </tr>
  </tbody>
</table>

## Usage notes

`devicechange` events are not delivered if the document which owns the **{{domxref("XRSystem")}}** object has been granted permission to do so through the [`xr-spatial-tracking`](/en-US/docs/Web/HTTP/Headers/Feature-Policy/xr-spatial-tracking) feature policy.

You can use this event to, for example, monitor for the availability of a WebXR-compatible device so that you can enable a UI element which the user can use to activate immersive mode. This is shown in the {{anch("Example", "example")}} below.

## Example

The example shown here handles the `devicechange` event by toggling the availability of the "Enter XR" button based on whether or not any immersive devices are currently available.

```js
if (navigator.xr) {
  navigator.xr.addEventListener("devicechange", event => {
    navigator.xr.isSessionSupported("immersive-vr")
    .then(immersiveOK) => {
      if (immersiveOK) {
        enableXRButton.disabled = false;
      } else {
        enableXRButton.disabled = true;
      }
    });
  });
}
```

When `devicechange` is received, the handler set up in this code calls the `XR` method {{domxref("XRSystem.isSessionSupported", "isSessionSupported()")}} to find out if there's a device available that can handle immersive VR presentations. If there is, the button to enter XR mode is enabled; otherwise it's disabled.

You can also use the {{domxref("XRSystem.ondevicechange", "ondevicechange")}} event handler property to set a single handler for `devicechange` events:

```js
if (navigator.xr) {
  navigator.xr.ondevicechange = event => {
    /* ... etc ... */
  };
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("XRSystem.ondevicechange")}}
