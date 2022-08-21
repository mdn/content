---
title: MediaDeviceInfo
slug: Web/API/MediaDeviceInfo
page-type: web-api-interface
tags:
  - API
  - Audio
  - Interface
  - Media
  - Media Device Info
  - Media Devices
  - MediaDevicesInfo
  - Reference
  - Video
  - WebRTC
  - WebRTC API
browser-compat: api.MediaDeviceInfo
---
{{APIRef("WebRTC")}}

The **`MediaDeviceInfo`** interface contains information that describes a single media input or output device.

The list of devices obtained by calling {{domxref("MediaDevices.enumerateDevices", "navigator.mediaDevices.enumerateDevices()")}} is an array of `MediaDeviceInfo` objects, one per media device.

## Properties

- {{domxref("MediaDeviceInfo.deviceId")}} {{ReadOnlyInline}}
  - : Returns a string that is an identifier for the represented device that is persisted across sessions. It is un-guessable by other applications and unique to the origin of the calling application. It is reset when the user clears cookies (for Private Browsing, a different identifier is used that is not persisted across sessions).
- {{domxref("MediaDeviceInfo.groupId")}} {{ReadOnlyInline}}
  - : Returns a string that is a group identifier. Two devices have the same group identifier if they belong to the same physical device — for example a monitor with both a built-in camera and a microphone.
- {{domxref("MediaDeviceInfo.kind")}} {{ReadOnlyInline}}
  - : Returns an enumerated value that is either `"videoinput"`, `"audioinput"` or `"audiooutput"`.
- {{domxref("MediaDeviceInfo.label")}} {{ReadOnlyInline}}
  - : Returns a string describing this device (for example "External USB Webcam").

> **Note:** For security reasons, the `label` field is always blank unless an active media stream exists _or_ the user has granted persistent permission for media device access. The set of device labels could otherwise be used as part of a fingerprinting mechanism to identify a user.

## Methods

None.

## Example

Here's an example that uses {{domxref("MediaDevices.enumerateDevices", "enumerateDevices()")}} to get a list of devices.

```js
if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
  console.log("enumerateDevices() not supported.");
} else {
  // List cameras and microphones.
  navigator.mediaDevices.enumerateDevices()
    .then((devices) => {
      devices.forEach((device) => {
        console.log(`${device.kind}: ${device.label} id = ${device.deviceId}`);
      });
    })
    .catch((err) => {
      console.log(`${err.name}: ${err.message}`);
    });
}
```

This might produce:

```bash
videoinput: id = csO9c0YpAf274OuCPUA53CNE0YHlIr2yXCi+SqfBZZ8=
audioinput: id = RKxXByjnabbADGQNNZqLVLdmXlS0YkETYCIbg+XxnvM=
audioinput: id = r2/xw1xUPIyZunfV1lGrKOma5wTOvCkWfZ368XCndm0=
```

or if one or more media streams are active, or if persistent permissions have been granted:

```bash
videoinput: FaceTime HD Camera (Built-in) id=csO9c0YpAf274OuCPUA53CNE0YHlIr2yXCi+SqfBZZ8=
audioinput: default (Built-in Microphone) id=RKxXByjnabbADGQNNZqLVLdmXlS0YkETYCIbg+XxnvM=
audioinput: Built-in Microphone id=r2/xw1xUPIyZunfV1lGrKOma5wTOvCkWfZ368XCndm0=
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- {{domxref("MediaDevices.enumerateDevices", "navigator.mediaDevices.enumerateDevices()")}}
- {{domxref("MediaDevices.getUserMedia", "navigator.mediaDevices.getUserMedia()")}}
