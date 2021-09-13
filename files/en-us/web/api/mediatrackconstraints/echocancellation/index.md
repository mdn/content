---
title: MediaTrackConstraints.echoCancellation
slug: Web/API/MediaTrackConstraints/echoCancellation
tags:
  - API
  - Constraints
  - Media
  - Media Capture and Streams API
  - Media Streams API
  - MediaTrackConstraints
  - Property
  - Reference
  - WebRTC
  - echoCancellation
browser-compat: api.MediaTrackConstraints.echoCancellation
---
{{APIRef("Media Capture and Streams")}}

The {{domxref("MediaTrackConstraints")}} dictionary's
**`echoCancellation`** property is a
[`ConstrainBoolean`](/en-US/docs/Web/API/MediaTrackConstraints#ConstrainBoolean) describing the requested or mandatory constraints placed
upon the value of the {{domxref("MediaTrackSettings.echoCancellation",
  "echoCancellation")}} constrainable property.

If needed, you can determine whether or not this constraint is supported by checking
the value of {{domxref("MediaTrackSupportedConstraints.echoCancellation")}} as returned
by a call to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically
this is unnecessary since browsers will ignore any constraints they're unfamiliar with.

Because {{Glossary("RTP")}} doesn't include this information, tracks associated with a
[WebRTC](/en-US/docs/Web/API/WebRTC_API) {{domxref("RTCPeerConnection")}}
will never include this property.

## Syntax

```js
var constraintsObject = { echoCancellation: constraint };

constraintsObject.echoCancellation = constraint;
```

### Value

If this value is a simple `true` or `false`, the user agent will
attempt to obtain media with echo cancellation enabled or disabled as specified, if
possible, but will not fail if this can't be done. If, instead, the value is given as an
object with an `exact` field, that field's Boolean value indicates a required
setting for the echo cancellation feature; if it can't be met, then the request will
result in an error.

## Example

See {{SectionOnPage("/en-US/docs/Web/API/Media_Streams_API/Constraints", "Example:
  Constraint exerciser")}} for an example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Streams_API)
- [Capabilities,
  constraints, and settings](/en-US/docs/Web/API/Media_Streams_API/Constraints)
- {{domxref("MediaTrackConstraints")}}
- {{domxref("MediaDevices.getSupportedConstraints()")}}
- {{domxref("MediaTrackSupportedConstraints")}}
- {{domxref("MediaStreamTrack")}}
