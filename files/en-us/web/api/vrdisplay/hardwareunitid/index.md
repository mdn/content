---
title: VRDisplay.hardwareUnitId
slug: Web/API/VRDisplay/hardwareUnitId
tags:
  - API
  - Experimental
  - Deprecated
  - Property
  - Reference
  - VR
  - VRDevice
  - Virtual Reality
  - WebVR
  - hardwareUnitId
browser-compat: api.VRDisplay.hardwareUnitId
---
{{deprecated_header}}{{APIRef("WebVR API")}}{{SeeCompatTable}}

The **`hardwareUnitId`** read-only property of the {{domxref("VRDisplay")}} interface returns the distinct hardware ID for the overall hardware unit that this `VRDevice` is a part of. All devices that are part of the same physical piece of hardware will have the same `hardwareUnitId`.

> **Note:** This property was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). It has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/).

## Syntax

```js
var hardwareID = VRDevice.hardwareUnitId;
```

### Value

A {{domxref("DOMString")}} containing the ID of the overall hardware unit.

## Examples

The following snippet (see our [VRDevice example](https://mdn.github.io/webvr-tests/vrdevice/)) returns an array of all the {{domxref("VRDisplay")}}s connected to your computer via {{domxref("Navigator.getVRDisplays")}}. For each connected device it then prints out the `hardwareUnitId`, {{domxref("VRDisplay.displayId")}}, and {{domxref("VRDisplay.displayName")}}.

```js
var list = document.querySelector('ul');
var info = document.querySelector('p');
if(navigator.getVRDevices) {
  navigator.getVRDevices().then(function(myDevices) {
    reportDevices(myDevices);
  });
} else {
  info.textContent = 'WebVR API not supported by this browser.'
}

function reportDevices(devices) {
  for(i = 0; i < devices.length; i++) {
    var listItem = document.createElement('li');
    listItem.innerHTML = 'Device ' + (i+1)
                 + ': <strong>Hardware ID</strong>: ' + devices[i].hardwareUnitId
                 + ', <strong>VD Device ID</strong>: ' + devices[i].deviceId
                 + ', <strong>VR Device Name</strong>: ' + devices[i].deviceName
                 + '.';
    list.appendChild(listItem);
  }
}
```

## Specifications

This property was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) that has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/). It is no longer on track to becoming a standard.

Until all browsers have implemented the new [WebXR APIs](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals), it is recommended to rely on frameworks, like [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), or [Three.js](https://threejs.org/), or a [polyfill](https://github.com/immersive-web/webxr-polyfill), to develop WebXR applications that will work across all browsers [\[1\]](https://developer.oculus.com/documentation/oculus-browser/browser-vr-xr/).

## Browser compatibility

{{Compat}}

## See also

- [WebVR API homepage](/en-US/docs/Web/API/WebVR_API).
- <https://mixedreality.mozilla.org/> — demos, downloads, and other resources from the Mozilla VR team.
