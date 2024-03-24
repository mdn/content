---
title: InputDeviceInfo
slug: Web/API/InputDeviceInfo
page-type: web-api-interface
browser-compat: api.InputDeviceInfo
---

{{APIRef("Media Capture and Streams")}}{{securecontext_header}}

The **`InputDeviceInfo`** interface of the {{domxref("Media Capture and Streams API", "", "", "nocode")}} gives access to the capabilities of the input device that it represents.

`InputDeviceInfo` objects are returned by {{domxref("MediaDevices.enumerateDevices()")}} if the returned device is an audio or video input device.

{{InheritanceDiagram}}

## Instance properties

_Also inherits properties from its parent interface, {{DOMxRef("MediaDeviceInfo")}}._

## Instance methods

_Also inherits methods from its parent interface, {{DOMxRef("MediaDeviceInfo")}}._

- {{domxref("InputDeviceInfo.getCapabilities()")}}
  - : Returns a `MediaTrackCapabilities` object describing the primary audio or video track of a device's `MediaStream`.

## Examples

The following example gets all media devices with {{domxref("MediaDevices.enumerateDevices()")}}. If any of the devices are input devices then `console.log(device)` will print an `InputDeviceInfo` object to the console.

```js
navigator.mediaDevices.enumerateDevices().then((devices) => {
  devices.forEach((device) => {
    console.log(device); // an InputDeviceInfo object if the device is an input device, otherwise a MediaDeviceInfo object.
  });
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
