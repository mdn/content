---
title: "MediaTrackConstraints: suppressLocalAudioPlayback property"
short-title: suppressLocalAudioPlayback
slug: Web/API/MediaTrackConstraints/suppressLocalAudioPlayback
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.MediaStreamTrack.applyConstraints.suppressLocalAudioPlayback_constraint
---

{{APIRef("Media Capture and Streams")}}{{SeeCompatTable}}

The {{domxref("MediaTrackConstraints")}} dictionary's **`suppressLocalAudioPlayback`** property is a [`ConstrainBoolean`](/en-US/docs/Web/API/MediaTrackConstraints#constrainboolean) describing the requested or mandatory constraints placed upon the value of the {{domxref("MediaTrackSettings.suppressLocalAudioPlayback","suppressLocalAudioPlayback")}} constrainable property. This property controls whether the audio playing in a tab will continue to be played out of a user's local speakers when the tab is captured.

If needed, you can determine whether or not this constraint is supported by checking
the value of {{domxref("MediaTrackSupportedConstraints.suppressLocalAudioPlayback")}} as returned
by a call to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically
this is unnecessary since browsers will ignore any constraints they're unfamiliar with.

## Value

A [`ConstrainBoolean`](/en-US/docs/Web/API/MediaTrackConstraints#constrainboolean) value.

If this value is a simple `true` or `false`, the user agent will
attempt to obtain media with local audio playback enabled or disabled as specified, if
possible, but will not fail if this can't be done.

If the value is given as `ideal`, that field's boolean value indicates an ideal
setting for the local audio playback suppression feature; if it can't be met, then the request will
result in an error.

## Examples

```js
let isLocalAudioSuppressed = displayStream
  .getVideoTracks()[0]
  .getSettings().suppressLocalAudioPlayback;
```

The [Constraint exerciser](/en-US/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser) example shows how to use media track constraints.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Capture_and_Streams_API)
- [Capabilities, constraints, and settings](/en-US/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- {{domxref("MediaTrackConstraints")}}
- {{domxref("MediaDevices.getSupportedConstraints()")}}
- {{domxref("MediaTrackSupportedConstraints")}}
- {{domxref("MediaStreamTrack")}}
