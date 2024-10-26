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

A `MediaTrackCapabilities` object which specifies the accepted value or range of values supported for each of the user agent's constrainable properties. This can contain the following members:

- `deviceId`
  - : A [`ConstrainDOMString`](/en-US/docs/Web/API/MediaTrackConstraints#constraindomstring) object containing the device ID.
- `groupId`
  - : A [`ConstrainDOMString`](/en-US/docs/Web/API/MediaTrackConstraints#constraindomstring) object containing a group ID.
- `autoGainControl`
  - : A [`ConstrainBoolean`](/en-US/docs/Web/API/MediaTrackConstraints#constrainboolean) object reporting if the source can automatically control the input signal's gain.
    If the feature can be controlled by a script the source will report both true and false as possible values.
- `channelCount`
  - : A [`ConstrainULong`](/en-US/docs/Web/API/MediaTrackConstraints#constrainulong) containing the channel count or channel count range.
- `echoCancellation`
  - : A [`ConstrainBoolean`](/en-US/docs/Web/API/MediaTrackConstraints#constrainboolean) object reporting if the source can provide echo cancellation.
    If the feature can be controlled by a script the source will report both `true` and `false` as possible values.
- `latency`
  - : A [`ConstrainDouble`](/en-US/docs/Web/API/MediaTrackConstraints#constraindouble) containing the latency or latency range.
- `noiseSuppression`
  - : A [`ConstrainBoolean`](/en-US/docs/Web/API/MediaTrackConstraints#constrainboolean) object reporting if the source can provide noise suppression.
    If the feature can be controlled by a script the source will report both `true` and `false` as possible values.
- `sampleRate`
  - : A [`ConstrainULong`](/en-US/docs/Web/API/MediaTrackConstraints#constrainulong) containing the sample rate or sample rate range.
- `sampleSize`
  - : A [`ConstrainULong`](/en-US/docs/Web/API/MediaTrackConstraints#constrainulong) containing the sample size or sample size range.
- `aspectRatio`
  - : A [`ConstrainDouble`](/en-US/docs/Web/API/MediaTrackConstraints#constraindouble) containing the video {{glossary("aspect ratio")}} (width in pixels divided by height in pixels) or aspect ratio range.
- `facingMode`
  - : A [`ConstrainDOMString`](/en-US/docs/Web/API/MediaTrackConstraints#constraindomstring) object containing the camera facing mode. A camera may report multiple facings, for example "left" and "user".
- `frameRate`
  - : A [`ConstrainDouble`](/en-US/docs/Web/API/MediaTrackConstraints#constraindouble) containing the frame rate or range of frame rates which are acceptable.
- `height`
  - : A [`ConstrainULong`](/en-US/docs/Web/API/MediaTrackConstraints#constrainulong) containing the video height or height range, in pixels.
- `width`
  - : A [`ConstrainULong`](/en-US/docs/Web/API/MediaTrackConstraints#constrainulong) containing the video width or width range, in pixels.
- `resizeMode`
  - : A [`ConstrainDOMString`](/en-US/docs/Web/API/MediaTrackConstraints#constraindomstring) object containing the mode or an array of modes the UA can use to derive the resolution of the video track.

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

```js
{
  "autoGainControl": [
    true,
    false
  ],
  "channelCount": {
    "max": 1,
    "min": 1
  },
  "deviceId": "jjxEMqxIhGdryqbTjDrXPWrkjy55Vte70kWpMe3Lge8=",
  "echoCancellation": [
    true,
    false
  ],
  "groupId": "o2tZiEj4MwOdG/LW3HwkjpLm1D8URat4C5kt742xrVQ=",
  "noiseSuppression": [
    true,
    false
  ]
}
```

The exact contents of the object will depend on the browser and media hardware.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("InputDeviceInfo.getCapabilities()")}}, which also return a `MediaTrackCapabilities` object.
