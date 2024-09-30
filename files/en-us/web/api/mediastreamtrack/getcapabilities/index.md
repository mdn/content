---
title: "MediaStreamTrack: getCapabilities() method"
short-title: getCapabilities()
slug: Web/API/MediaStreamTrack/getCapabilities
page-type: web-api-instance-method
browser-compat: api.MediaStreamTrack.getCapabilities
---

{{APIRef("Media Capture and Streams")}}

The **`getCapabilities()`** method of
the {{domxref("MediaStreamTrack")}} interface returns a
`MediaTrackCapabilities` object which specifies the values or range of
values which each constrainable property, based upon the platform and {{Glossary("user agent")}}.

Once you know what the browser's capabilities are, your script can use
{{domxref("MediaStreamTrack.applyConstraints", "applyConstraints()")}} to ask for the
track to be configured to match ideal or acceptable settings. See [Capabilities, constraints, and settings](/en-US/docs/Web/API/Media_Capture_and_Streams_API/Constraints) for details on how to work with constrainable properties.

## Syntax

```js-nolint
getCapabilities()
```

### Parameters

None.

### Return value

A `MediaTrackCapabilities` object which specifies the value or range of values which are supported for each of the user agent's supported constrainable properties, containing the following members:

- `deviceId`
  - : A [`ConstrainDOMString`](/en-US/docs/Web/API/MediaTrackConstraints#constraindomstring) object containing the device ID.
- `groupId`
  - : A [`ConstrainDOMString`](/en-US/docs/Web/API/MediaTrackConstraints#constraindomstring) object containing a group ID.
- `autoGainControl`
  - : A [`ConstrainBoolean`](/en-US/docs/Web/API/MediaTrackConstraints#constrainboolean) object reporting if the source can do auto gain control.
    If the feature can be controlled by a script the source will report both true and false as possible values.
- `channelCount`
  - : A [`ConstrainULong`](/en-US/docs/Web/API/MediaTrackConstraints#constrainulong) containing the channel count or range of channel counts.
- `echoCancellation`
  - : A [`ConstrainBoolean`](/en-US/docs/Web/API/MediaTrackConstraints#constrainboolean) object reporting if the source can do echo cancellation.
    If the feature can be controlled by a script the source will report both true and false as possible values.
- `latency`
  - : A [`ConstrainDouble`](/en-US/docs/Web/API/MediaTrackConstraints#constraindouble) containing the latency or range of latencies.
- `noiseSuppression`
  - : A [`ConstrainBoolean`](/en-US/docs/Web/API/MediaTrackConstraints#constrainboolean) object reporting if the source can do noise suppression.
    If the feature can be controlled by a script the source will report both true and false as possible values.
- `sampleRate`
  - : A [`ConstrainULong`](/en-US/docs/Web/API/MediaTrackConstraints#constrainulong) containing the sample rate or range of sample rates.
- `sampleSize`
  - : A [`ConstrainULong`](/en-US/docs/Web/API/MediaTrackConstraints#constrainulong) containing the sample size or range of sample sizes.
- `aspectRatio`
  - : A [`ConstrainDouble`](/en-US/docs/Web/API/MediaTrackConstraints#constraindouble) containing the video {{glossary("aspect ratio")}} (width in pixels divided by height in pixels) or range of aspect ratios.
- `facingMode`
  - : A [`ConstrainDOMString`](/en-US/docs/Web/API/MediaTrackConstraints#constraindomstring) object containing the camera facing mode. A camera may report multiple facings, for example "left" and "user".
- `frameRate`
  - : A [`ConstrainDouble`](/en-US/docs/Web/API/MediaTrackConstraints#constraindouble) containing the frame rate or range of frame rates which are acceptable.
- `height`
  - : A [`ConstrainULong`](/en-US/docs/Web/API/MediaTrackConstraints#constrainulong) containing the video height or range of heights in pixels.
- `width`
  - : A [`ConstrainULong`](/en-US/docs/Web/API/MediaTrackConstraints#constrainulong) containing the video width or range of widths in pixels.
- `resizeMode`
  - : A [`ConstrainDOMString`](/en-US/docs/Web/API/MediaTrackConstraints#constraindomstring) object containing the mode or an array of modes the UA can use to derive the resolution of the video track.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("InputDeviceInfo.getCapabilities()")}}, which also return a `MediaTrackCapabilities` object.
