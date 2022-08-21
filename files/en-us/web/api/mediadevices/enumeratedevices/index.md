---
title: MediaDevices.enumerateDevices()
slug: Web/API/MediaDevices/enumerateDevices
page-type: web-api-instance-method
tags:
  - API
  - MediaDevices
  - Method
  - Reference
  - WebRTC
browser-compat: api.MediaDevices.enumerateDevices
---
{{APIRef("WebRTC")}}

The {{domxref("MediaDevices")}} method **`enumerateDevices()`** requests a list of the available media input and output devices, such as microphones, cameras, headsets, and so forth.
The returned {{jsxref("Promise")}} is resolved with a {{domxref("MediaDeviceInfo")}} array describing the devices.

Access to particular devices is gated by the [Permissions API](/en-US/docs/Web/API/Permissions_API).
The list of returned devices will omit any devices for which the corresponding permission has not been granted, including: `microphone`, `camera`, `speaker-selection` (for output devices), and so on.

## Syntax

```js
enumerateDevices()
```

### Parameters

None.

### Return value

A {{ jsxref("Promise") }} that receives an array of {{domxref("MediaDeviceInfo")}} objects when the promise is fulfilled.
Each object in the array describes one of the available media input and output devices (only device-types for which permission has been granted are "available").
The order is significant - the default capture devices will be listed first.

If enumeration fails, the promise is rejected.

## Examples

Here's an example of using `enumerateDevices()`. It outputs a list of the [device IDs](/en-US/docs/Web/API/MediaDeviceInfo/deviceId), with their labels if available.

```js
if (!navigator.mediaDevices?.enumerateDevices) {
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
      console.error(`${err.name}: ${err.message}`);
    });
}
```

This might produce:

```
videoinput: id = csO9c0YpAf274OuCPUA53CNE0YHlIr2yXCi+SqfBZZ8=
audioinput: id = RKxXByjnabbADGQNNZqLVLdmXlS0YkETYCIbg+XxnvM=
audioinput: id = r2/xw1xUPIyZunfV1lGrKOma5wTOvCkWfZ368XCndm0=
```

or if one or more {{domxref("MediaStream")}}s are active or persistent permissions are
granted:

```
videoinput: FaceTime HD Camera (Built-in) id=csO9c0YpAf274OuCPUA53CNE0YHlIr2yXCi+SqfBZZ8=
audioinput: default (Built-in Microphone) id=RKxXByjnabbADGQNNZqLVLdmXlS0YkETYCIbg+XxnvM=
audioinput: Built-in Microphone id=r2/xw1xUPIyZunfV1lGrKOma5wTOvCkWfZ368XCndm0=
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaDevices.getUserMedia")}}
- [WebRTC](/en-US/docs/Web/API/WebRTC_API) - the introductory page to the API
- [MediaStream API](/en-US/docs/Web/API/Media_Streams_API) - the API for the media stream objects
- [Taking webcam photos](/en-US/docs/Web/API/Media_Streams_API/Taking_still_photos) - a
  tutorial on using `getUserMedia()` for taking photos rather than video.
