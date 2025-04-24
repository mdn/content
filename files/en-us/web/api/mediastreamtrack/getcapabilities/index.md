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

- `deviceId` (audio and video tracks)
  - : A string that identifies the capture device.
- `groupId` (audio and video tracks)
  - : A string that groups related devices.
- `autoGainControl` (audio track only)
  - : A boolean or an array of booleans. If the device supports script-controlled toggling, you may see both `true` and `false`.
- `channelCount` (audio track only)
  - : A range object describing the supported number of channels. For example:
`{ min: 1, max: 2 }`
- `echoCancellation` (audio track only)
  - : A boolean or an array of booleans indicating if echo cancellation is supported.
- `latency` (audio track only)
  - : Either a fixed numeric value or a range object (with `{ min, max [, step] }`) representing the latency in seconds. This value could be an integer or, in some cases, a floating-point number depending on measurement precision
- `noiseSuppression` (audio track only)
  - : A boolean or an array indicating whether noise suppression is available.
    If the feature can be controlled by a script the source will report both `true` and `false` as possible values.
- `sampleRate` (audio track only)
  - : A range object indicating the supported audio sample rates (for example: `{ min: 22050, max: 48000 }`).
- `sampleSize` (audio track only)
  - : A range object describing the supported audio sample sizes in bits.
- `aspectRatio` (video track only)
  - : Either a single number or a range object that represents the ratio (width divided by height) the video device can output.
- `facingMode` (video track only)
  - : A string or an array of strings (such as "user", "environment", or even "left"/"right") which indicate the camera orientation. On some devices, more than one facing mode may be reported.
- `frameRate` (video track only)
  - : A number (if fixed) or a range object giving the supported frames per second.
- `height` (video track only)
  - : A numeric value or range object (with pixel dimensions) representing the video track’s height.
- `width` (video track only)
  - : A numeric value or range object (with pixel dimensions) representing the video track’s width in pixels.
- `resizeMode` (video track only)
  - : A string or an array of strings that indicates how the user agent may derive the desired resolution (for example, modes like "none" or "crop-and-scale").

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
