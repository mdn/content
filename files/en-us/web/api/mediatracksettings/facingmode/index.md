---
title: "MediaTrackSettings: facingMode property"
short-title: facingMode
slug: Web/API/MediaTrackSettings/facingMode
page-type: web-api-instance-property
browser-compat: api.MediaTrackSettings.facingMode
---

{{APIRef("Media Capture and Streams")}}

The {{domxref("MediaTrackSettings")}} dictionary's
**`facingMode`** property is a string
indicating the direction in which the camera producing the video track represented by
the {{domxref("MediaStreamTrack")}} is currently facing. This lets you determine what
value was selected to comply with your specified constraints for this property's value
as described in the {{domxref("MediaTrackConstraints.facingMode")}} property you
provided when calling either {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}
or {{domxref("MediaStreamTrack.applyConstraints()")}}.

If needed, you can determine whether or not this constraint is supported by checking
the value of {{domxref("MediaTrackSupportedConstraints.facingMode")}} as returned by a
call to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically this
is unnecessary since browsers will ignore any constraints they're unfamiliar with.

Because {{Glossary("RTP")}} doesn't include this information, tracks associated with a
[WebRTC](/en-US/docs/Web/API/WebRTC_API) {{domxref("RTCPeerConnection")}}
will never include this property.

## Value

A string whose value is one of the strings in
[`VideoFacingModeEnum`](#videofacingmodeenum).

### VideoFacingModeEnum

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
- {{domxref("MediaTrackConstraints.facingMode")}}
- {{domxref("MediaTrackSettings")}}
