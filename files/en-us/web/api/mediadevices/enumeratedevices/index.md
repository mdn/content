---
title: "MediaDevices: enumerateDevices() method"
short-title: enumerateDevices()
slug: Web/API/MediaDevices/enumerateDevices
page-type: web-api-instance-method
browser-compat: api.MediaDevices.enumerateDevices
---

{{APIRef("Media Capture and Streams")}}{{SecureContext_Header}}

The **`enumerateDevices()`** method of the {{domxref("MediaDevices")}} interface requests a list of the currently available media input and output devices, such as microphones, cameras, headsets, and so forth.
The returned {{jsxref("Promise")}} is resolved with an array of {{domxref("MediaDeviceInfo")}} objects describing the devices.

The returned list will omit any devices that are blocked by the document [Permission Policy](/en-US/docs/Web/HTTP/Headers/Permissions-Policy): [`microphone`](/en-US/docs/Web/HTTP/Headers/Permissions-Policy/microphone), [`camera`](/en-US/docs/Web/HTTP/Headers/Permissions-Policy/camera), [`speaker-selection`](/en-US/docs/Web/HTTP/Headers/Permissions-Policy/speaker-selection) (for output devices), and so on.
Access to particular non-default devices is also gated by the [Permissions API](/en-US/docs/Web/API/Permissions_API), and the list will omit devices for which the user has not granted explicit permission.

## Syntax

```js-nolint
enumerateDevices()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that is fulfilled with an array of {{domxref("MediaDeviceInfo")}} objects.
Each object in the array describes one of the available media input and output devices.
The order is significant — the default capture devices will be listed first.

Other than default devices, only devices for which permission has been granted are "available".

If the media device is an input device, an {{domxref("InputDeviceInfo")}} object will be returned instead.

If enumeration fails, the promise is rejected.

## Security requirements

Access to the API is subject to the following constraints:

- The method must be called in a [secure context](/en-US/docs/Web/Security/Secure_Contexts).
- The document must be fully active and its visibility must be "visible".

## Examples

Here's an example of using `enumerateDevices()`. It outputs a list of the [device IDs](/en-US/docs/Web/API/MediaDeviceInfo/deviceId), with their labels if available.

```js
if (!navigator.mediaDevices?.enumerateDevices) {
  console.log("enumerateDevices() not supported.");
} else {
  // List cameras and microphones.
  navigator.mediaDevices
    .enumerateDevices()
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

```plain
videoinput: id = csO9c0YpAf274OuCPUA53CNE0YHlIr2yXCi+SqfBZZ8=
audioinput: id = RKxXByjnabbADGQNNZqLVLdmXlS0YkETYCIbg+XxnvM=
audioinput: id = r2/xw1xUPIyZunfV1lGrKOma5wTOvCkWfZ368XCndm0=
```

or if one or more {{domxref("MediaStream")}}s are active or persistent permissions are
granted:

```plain
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
- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Capture_and_Streams_API) - the API for the media stream objects
- [Taking webcam photos](/en-US/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos) - a
  tutorial on using `getUserMedia()` for taking photos rather than video.
