---
title: "MediaTrackConstraints: facingMode property"
short-title: facingMode
slug: Web/API/MediaTrackConstraints/facingMode
page-type: web-api-instance-property
browser-compat: api.MediaStreamTrack.applyConstraints.facingMode_constraint
---

{{APIRef("Media Capture and Streams")}}

The {{domxref("MediaTrackConstraints")}} dictionary's
**`facingMode`** property is a [`ConstrainDOMString`](/en-US/docs/Web/API/MediaTrackConstraints#constraindomstring)
describing the requested or mandatory constraints placed upon the value of the
{{domxref("MediaTrackSettings.facingMode", "facingMode")}} constrainable property.

If needed, you can determine whether or not this constraint is supported by checking
the value of {{domxref("MediaTrackSupportedConstraints.facingMode")}} as returned by a
call to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically this
is unnecessary since browsers will ignore any constraints they're unfamiliar with.

Because {{Glossary("RTP")}} doesn't include this information, tracks associated with a
[WebRTC](/en-US/docs/Web/API/WebRTC_API) {{domxref("RTCPeerConnection")}}
will never include this property.

## Value

An object based on [`ConstrainDOMString`](/en-US/docs/Web/API/MediaTrackConstraints#constraindomstring) specifying one or more acceptable,
ideal, and/or exact (mandatory) facing modes are acceptable for a video track.

An `exact` value in this case indicates that the specified facing mode is
specifically required; for example:

```js
const constraints = {
  facingMode: { exact: "user" },
};
```

This indicates that only a user-facing camera is acceptable; if there is no user-facing
camera, or the user declines permission to use that camera, the media request will fail.

The following strings are permitted values for the facing mode. These may represent
separate cameras, or they may represent directions in which an adjustable camera can be
pointed.

- `"user"`
  - : The video source is facing toward the user; this includes, for example, the
    front-facing camera on a smartphone.
- `"environment"`
  - : The video source is facing away from the user, thereby viewing their environment.
    This is the back camera on a smartphone.
- `"left"`
  - : The video source is facing toward the user but to their left, such as a camera aimed
    toward the user but over their left shoulder.
- `"right"`
  - : The video source is facing toward the user but to their right, such as a camera
    aimed toward the user but over their right shoulder.

## Examples

See the [Constraint exerciser](/en-US/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser) example.

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
