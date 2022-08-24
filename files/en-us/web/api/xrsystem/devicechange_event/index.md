---
title: 'XRSystem: devicechange event'
slug: Web/API/XRSystem/devicechange_event
page-type: web-api-event
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
  - Experimental
browser-compat: api.XRSystem.devicechange_event
---
{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

A **`devicechange`** event is fired on an {{DOMxRef("XRSystem")}} object whenever the availability of immersive XR devices has changed; for example, a VR headset or AR goggles have been connected or disconnected. It's a generic {{DOMxRef("Event")}} with no added properties.

> **Note:** Not to be confused with the {{domxref("MediaDevices")}} {{DOMxRef("MediaDevices.devicechange_event", "devicechange")}} event.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('devicechange', (event) => { })

ondevicechange = (event) => { }
```

## Event type

A generic {{DOMxRef("Event")}} with no added properties.

## Description

### Trigger

Triggered whenever the availability of immersive XR devices has changed. For example, when a VR headset or AR goggles have been connected or disconnected.

### Use cases

You can use this event to, for example, monitor for the availability of a WebXR-compatible device so that you can enable a UI element which the user can use to activate immersive mode. This is shown in the [example](#examples) below.

## Examples

The example shown here handles the `devicechange` event by toggling the availability of the "Enter XR" button based on whether or not any immersive devices are currently available.

```js
if (navigator.xr) {
  navigator.xr.addEventListener("devicechange", (event) => {
    navigator.xr.isSessionSupported("immersive-vr")
    .then((immersiveOK) => {
      enableXRButton.disabled = !immersiveOK;
    });
  });
}
```

When `devicechange` is received, the handler set up in this code calls the `XR` method {{domxref("XRSystem.isSessionSupported", "isSessionSupported()")}} to find out if there's a device available that can handle immersive VR presentations. If there is, the button to enter XR mode is enabled; otherwise it's disabled.

You can also use the `ondevicechange` event handler property to set a single handler for `devicechange` events:

```js
if (navigator.xr) {
  navigator.xr.ondevicechange = (event) => {
    // …
  };
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
