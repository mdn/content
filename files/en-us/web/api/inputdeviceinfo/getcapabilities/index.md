---
title: InputDeviceInfo.getCapabilities()
slug: Web/API/InputDeviceInfo/getCapabilities
tags:
  - API
  - Method
  - Reference
  - getCapabilities
  - InputDeviceInfo
browser-compat: api.InputDeviceInfo.getCapabilities
---
{{DefaultAPISidebar("Media Capture and Streams")}}

The **`getCapabilities()`** method of the {{domxref("InputDeviceInfo")}} interface returns a `MediaTrackCapabilities` object describing the primary audio or video track of the device's {{domxref("MediaStream")}}.

## Syntax

```js
InputDeviceInfo.getCapabilities();
```

### Parameters

None.

### Return value

A `MediaTrackCapabilities` object containing the following members:

- `deviceId`
  - : A [`ConstrainDOMString`](/en-US/docs/Web/API/MediaTrackConstraints#ConstrainDOMString) object containing the device ID.
- `groudId`
  - : A [`ConstrainDOMString`](/en-US/docs/Web/API/MediaTrackConstraints#ConstrainDOMString) object containing a group ID.
- `autoGainControl`>
  - : A [`ConstrainBoolean`](/en-US/docs/Web/API/MediaTrackConstraints#ConstrainBoolean) object reporting if the source can do auto gain control.
    If the feature can be controlled by a script the source will report both true and false as possible values.
- `channelCount`
  - : A [`ConstrainULong`](/en-US/docs/Web/API/MediaTrackConstraints#ConstrainULong) containing the channel count or range of channel counts.
- `echoCancellation`
  - : A [`ConstrainBoolean`](/en-US/docs/Web/API/MediaTrackConstraints#ConstrainBoolean) object reporting if the source can do echo cancellation.
    If the feature can be controlled by a script the source will report both true and false as possible values.
- `latency`
  - : A [`ConstrainDouble`](/en-US/docs/Web/API/MediaTrackConstraints#ConstrainDouble) containing the latency or range of latencies.
- `noiseSuppression`
  - : A [`ConstrainBoolean`](/en-US/docs/Web/API/MediaTrackConstraints#ConstrainBoolean) object reporting if the source can do noise suppression.
    If the feature can be controlled by a script the source will report both true and false as possible values.
- `sampleRate`
  - : A [`ConstrainULong`](/en-US/docs/Web/API/MediaTrackConstraints#ConstrainULong) containing the sample rate or range of sample rates.
- `sampleSize`
  - : A [`ConstrainULong`](/en-US/docs/Web/API/MediaTrackConstraints#ConstrainULong) containing the sample size or range of sample sizes.
- `aspectRatio`
  - : A [`ConstrainDouble`](/en-US/docs/Web/API/MediaTrackConstraints#ConstrainDouble) containing the video aspect ratio (width in pixels divided by height in pixels) or range of aspect ratios.
- `facingMode`
  - : A [`ConstrainDOMString`](/en-US/docs/Web/API/MediaTrackConstraints#ConstrainDOMString) object containing the camera facing mode. A camera may report multiple facings, for example "left" and "user".
- `frameRate`
  - : A [`ConstrainDouble`](/en-US/docs/Web/API/MediaTrackConstraints#ConstrainDouble) containing the frame rate or range of frame rates which are acceptable.
- `height`
  - : A [`ConstrainULong`](/en-US/docs/Web/API/MediaTrackConstraints#ConstrainULong) containing the video height or range of heights in pixels.
- `width`
  - : A [`ConstrainULong`](/en-US/docs/Web/API/MediaTrackConstraints#ConstrainULong) containing the video width or range of widths in pixels.
- `resizeMode`
  - : A [`ConstrainDOMString`](/en-US/docs/Web/API/MediaTrackConstraints#ConstrainDOMString) object containing the mode or an array of modes the UA can use to derive the resolution of the video track.

> **Note:** If the user has not granted permission to access the input device an empty object will be returned.

## Examples

In the following example we ask for permission to access audio and video devices with {{domxref("mediaDevices.getUserMedia()")}}, as to use `getCapabilities()` we need permission to access the devices.

If `device` is an `InputDeviceInfo` object, then `getCapabilities()` will return an object with members representing its capbilities. A video stream will not include auto properties such as `noiseSuppression`, for example.

```js
// Get permission to access audio or video devices
navigator.mediaDevices.getUserMedia({ audio: true, video: true });

navigator.mediaDevices.enumerateDevices()
  .then(function(devices) {
    devices.forEach(function(device) {
      console.log(device.getCapabilities()); // a MediaTrackCapabilities object.
    });
  })
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
