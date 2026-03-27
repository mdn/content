---
title: "MediaStreamTrack: getCapabilities() method"
short-title: getCapabilities()
slug: Web/API/MediaStreamTrack/getCapabilities
page-type: web-api-instance-method
browser-compat: api.MediaStreamTrack.getCapabilities
---

{{APIRef("Media Capture and Streams")}}

The **`getCapabilities()`** method of
the {{domxref("MediaStreamTrack")}} interface returns an object detailing the accepted values or value range for each constrainable property of the associated `MediaStreamTrack`, based upon the platform and {{Glossary("user agent")}}.

Once you know what the browser's capabilities are, your script can use
{{domxref("MediaStreamTrack.applyConstraints", "applyConstraints()")}} to ask for the
track to be configured to match ideal or acceptable settings. See [Capabilities, constraints, and settings](/en-US/docs/Web/API/Media_Capture_and_Streams_API/Constraints) for details of how to work with constrainable properties.

## Syntax

```js-nolint
getCapabilities()
```

### Parameters

None.

### Return value

A `MediaTrackCapabilities` object which specifies the accepted value or range of values supported for each of the user agent's constrainable properties. Note that not every property appears on every track, the available members depend on whether the track is audio or video. This can contain the following members:

For both audio and video tracks:

- `deviceId`
  - : A string that identifies the capture device.
- `groupId`
  - : A string that groups related devices.

> [!NOTE]
> For historical reasons, these two properties are strings instead of an array of strings like all other capabilities.

For audio tracks only:

- `autoGainControl`
  - : An array of booleans. If the source cannot do auto gain control, a single `false` is reported. If auto gain control cannot be turned off, a single `true` is reported. If the script can control the feature, the source reports both `true` and `false`.
- `channelCount`
  - : A range object, containing a `min` and a `max` property (both containing a non-negative integer), describing the supported number of channels.
- `echoCancellation`
  - : An array of booleans or strings indicating if echo cancellation is supported. If the source cannot do echo cancellation, a single `false` is reported. If the source can do echo cancellation, then the array starts with `true`. If the script can control the feature, then the array starts with `true, false`. Additionally, if the source allows controlling which audio sources will be cancelled, the array also includes the values `"all"` and/or `"remote-only"`.
- `latency`
  - : A range object, containing a `min` and a `max` property (both containing a number), describing the expected amount of latency in seconds from when the sound starts to when data becomes available.
- `noiseSuppression`
  - : An array of booleans indicating whether noise suppression is available. If the source cannot do noise suppression, a single `false` is reported. If noise suppression cannot be turned off, a single `true` is reported. If the script can control the feature, the source reports both `true` and `false`.
- `sampleRate`
  - : A range object, containing a `min` and a `max` property (both containing a non-negative integer), describing the supported audio sample rate range.
- `sampleSize`
  - : A range object, containing a `min` and a `max` property (both containing a non-negative integer), describing the supported linear sample size range in bits.

For video tracks only:

- `aspectRatio`
  - : A range object, containing a `min` and a `max` property (both containing a number), describing the supported video aspect ratio range (width divided by height).
- `facingMode`
  - : An array of strings indicating the camera orientation. See {{domxref("MediaTrackConstraints.facingMode")}} for supported values. On some devices, more than one facing mode may be reported; for example, in a high-end telepresence solution with several cameras facing the user, a camera to the left of the user can report both `"left"` and `"user"`.
- `frameRate`
  - : A range object, containing a `min` and a `max` property (both containing a number), describing the supported frames per second range.
- `height`
  - : A range object, containing a `min` and a `max` property (both containing a non-negative integer), describing the supported height range in pixels.
- `width`
  - : A range object, containing a `min` and a `max` property (both containing a non-negative integer), describing the supported width range in pixels.
- `resizeMode`
  - : An array of strings that indicates how the user agent may derive the desired resolution from the camera resolution.See {{domxref("MediaTrackConstraints.resizeMode")}} for supported values. The value `"none"` is always included.

For more information about what each property means, see {{domxref("MediaTrackConstraints")}}.

## Examples

The following snippet will result in the user being asked for permission to access their local camera and microphone. Once permission is granted, `MediaTrackCapabilities` objects will be logged to the console that detail the capabilities of each {{domxref("MediaStreamTrack")}}:

```js
navigator.mediaDevices
  .getUserMedia({ video: true, audio: true })
  .then((stream) => {
    const tracks = stream.getTracks();
    tracks.map((t) => console.log(t.getCapabilities()));
  });
```

An example capabilities object looks like this:

```json
{
  "autoGainControl": [true, false],
  "channelCount": {
    "max": 1,
    "min": 1
  },
  "deviceId": "jjxEMqxIhGdryqbTjDrXPWrkjy55Vte70kWpMe3Lge8=",
  "echoCancellation": [true, false],
  "groupId": "o2tZiEj4MwOdG/LW3HwkjpLm1D8URat4C5kt742xrVQ=",
  "noiseSuppression": [true, false]
}
```

The exact contents of the object will depend on the browser and media hardware.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("InputDeviceInfo.getCapabilities()")}}, which also return a `MediaTrackCapabilities` object.
