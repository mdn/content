---
title: MediaTrackConstraints.facingMode
slug: Web/API/MediaTrackConstraints/facingMode
tags:
  - API
  - Constraints
  - Media
  - Media Capture and Streams API
  - Media Streams API
  - MediaTrackConstraints
  - Property
  - Reference
  - Video
  - WebRTC
  - facingMode
  - getusermedia
browser-compat: api.MediaTrackConstraints.facingMode
---
{{APIRef("Media Capture and Streams")}}

The {{domxref("MediaTrackConstraints")}} dictionary's
**`facingMode`** property is a [`ConstrainDOMString`](/en-US/docs/Web/API/MediaTrackConstraints#ConstrainDOMString)
describing the requested or mandatory constraints placed upon the value of the
{{domxref("MediaTrackSettings.facingMode", "facingMode")}} constrainable property.

If needed, you can determine whether or not this constraint is supported by checking
the value of {{domxref("MediaTrackSupportedConstraints.facingMode")}} as returned by a
call to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically this
is unnecessary since browsers will ignore any constraints they're unfamiliar with.

Because {{Glossary("RTP")}} doesn't include this information, tracks associated with a
[WebRTC](/en-US/docs/Web/API/WebRTC_API) {{domxref("RTCPeerConnection")}}
will never include this property.

## Syntax

```js
var constraintsObject = { facingMode: constraint };

constraintsObject.facingMode = constraint;
```

### Value

An object based on [`ConstrainDOMString`](/en-US/docs/Web/API/MediaTrackConstraints#ConstrainDOMString) specifying one or more acceptable,
ideal, and/or exact (mandatory) facing modes are acceptable for a video track.

An `exact` value in this case indicates that the specified facing mode is
specifically required; for example:

```js
var constraints = {
  facingMode: { exact: "user" }
};
```

This indicates that only a user-facing camera is acceptable; if there is no user-facing
camera, or the user declines permission to use that camera, the media request will fail.

{{page("/en-US/docs/Web/API/MediaTrackSettings/facingMode", "VideoFacingModeEnum")}}

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
