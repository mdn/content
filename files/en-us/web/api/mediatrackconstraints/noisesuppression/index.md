---
title: MediaTrackConstraints.noiseSuppression
slug: Web/API/MediaTrackConstraints/noiseSuppression
page-type: web-api-instance-property
tags:
  - API
  - Audio
  - Media
  - Media Capture and Streams API
  - Media Streams API
  - MediaTrackConstraints
  - Property
  - Web
  - noiseSuppression
browser-compat: api.MediaTrackConstraints.noiseSuppression
---
{{APIRef("Media Capture and Streams")}}

The {{domxref("MediaTrackConstraints")}} dictionary's **`noiseSuppression`** property is a [`ConstrainBoolean`](/en-US/docs/Web/API/MediaTrackConstraints#constrainboolean) describing the requested or mandatory constraints placed upon the value of the {{domxref("MediaTrackSettings.noiseSuppression","noiseSuppression")}} constrainable property.

If needed, you can determine whether or not this constraint is supported by checking
the value of {{domxref("MediaTrackSupportedConstraints.noiseSuppression")}} as returned
by a call to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically
this is unnecessary since browsers will ignore any constraints they're unfamiliar with.

Noise suppression is typically provided by microphones, although it can be provided by
other input sources as well.

## Value

If this value is a simple `true` or `false`, the user agent will
attempt to obtain media with noise suppression enabled or disabled as specified, if
possible, but will not fail if this can't be done. If, instead, the value is given as an
object with an `exact` field, that field's Boolean value indicates a required
setting for the noise suppression feature; if it can't be met, then the request will
result in an error.

## Examples

See {{SectionOnPage("/en-US/docs/Web/API/Media_Streams_API/Constraints", "Example: Constraint exerciser")}} for an example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Streams_API)
- [Capabilities, constraints, and settings](/en-US/docs/Web/API/Media_Streams_API/Constraints)
- {{domxref("MediaTrackConstraints")}}
- {{domxref("MediaDevices.getSupportedConstraints()")}}
- {{domxref("MediaTrackSupportedConstraints")}}
- {{domxref("MediaStreamTrack")}}
