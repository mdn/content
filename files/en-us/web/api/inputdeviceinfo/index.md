---
title: InputDeviceInfo
slug: Web/API/InputDeviceInfo
tags:
  - API
  - Media Streams API
  - Interface
  - Reference
  - InputDeviceInfo
browser-compat: api.InputDeviceInfo
---
{{DefaultAPISidebar("Media Capture and Streams")}}

The **`InputDeviceInfo`** interface of the {{domxref('Media Streams API','','',' ')}} gives access to the capabilities of the input device that it represents.

`InputDeviceInfo` objects are returned by {{domxref("MediaDevices.enumerateDevices()")}} if the returned device is an audio or video input device.

## Methods

- {{domxref("InputDeviceInfo.getCapabilities()")}}
  - : Returns a `MediaTrackCapabilities` object describing the primary audio or video track of a device's `MediaStream`.

## Examples

The following example gets all media devices with {{domxref("MediaDevices.enumerateDevices()")}}. If any of the devices are input devices then `console.log(device)` will print an `InputDeviceInfo` object to the console.

```js
navigator.mediaDevices.enumerateDevices()
  .then(function(devices) {
    devices.forEach(function(device) {
      console.log(device); // an InputDeviceInfo object if the device is an input device, otherwise a MediaDeviceInfo object.
    });
  })
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
