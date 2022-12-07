---
title: MediaTrackConstraints.suppressLocalAudioPlayback
slug: Web/API/MediaTrackConstraints/suppressLocalAudioPlayback
page-type: web-api-instance-property
tags:
  - API
  - Audio
  - Experimental
  - Media
  - Media Capture and Streams API
  - Media Streams API
  - MediaTrackConstraints
  - Property
  - Web
  - suppressLocalAudioPlayback
browser-compat: api.MediaTrackConstraints.suppressLocalAudioPlayback
---

{{APIRef("Media Capture and Streams")}}{{seecompattable}}

The {{domxref("MediaTrackConstraints")}} dictionary's **`suppressLocalAudioPlayback`** property is a [`ConstrainBoolean`](/en-US/docs/Web/API/MediaTrackConstraints#constrainboolean) describing the requested or mandatory constraints placed upon the value of the {{domxref("MediaTrackSettings.suppressLocalAudioPlayback","suppressLocalAudioPlayback")}} constrainable property. This property controls whether the audio playing in a tab will continue to be played out of a user's local speakers when the tab is captured.

If needed, you can determine whether or not this constraint is supported by checking
the value of {{domxref("MediaTrackSupportedConstraints.suppressLocalAudioPlayback")}} as returned
by a call to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically
this is unnecessary since browsers will ignore any constraints they're unfamiliar with.

## Value

`true`/`false`, or a [`ConstrainBoolean`](/en-US/docs/Web/API/MediaTrackConstraints#constrainboolean) object.

If this value is a simple `true` or `false`, the user agent will
attempt to obtain media with local audio playback enabled or disabled as specified, if
possible, but will not fail if this can't be done.

If, instead, the value is given as a [`ConstrainBoolean`](/en-US/docs/Web/API/MediaTrackConstraints#constrainboolean) object
object with an `ideal` field, that field's Boolean value indicates an ideal
setting for the local audio playback suppression feature; if it can't be met, then the request will
result in an error.

`exact` values are not permitted in constraints used in {{domxref("MediaDevices.getDisplayMedia()")}} calls, but they are in constraints used in {{domxref("MediaStreamTrack.applyConstraints()")}} calls.

## Examples

See {{SectionOnPage("/en-US/docs/Web/API/Media_Capture_and_Streams_API/Constraints", "Example: Constraint exerciser")}} for an example.

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
