---
title: "MediaTrackSettings: echoCancellation property"
short-title: echoCancellation
slug: Web/API/MediaTrackSettings/echoCancellation
page-type: web-api-instance-property
browser-compat: api.MediaTrackSettings.echoCancellation
---

{{APIRef("Media Capture and Streams")}}

The {{domxref("MediaTrackSettings")}} dictionary's
**`echoCancellation`** property is a Boolean value whose value
indicates whether or not echo cancellation is enabled on an audio track. This lets you
determine what value was selected to comply with your specified constraints for this
property's value as described in the
{{domxref("MediaTrackConstraints.echoCancellation")}} property you provided when calling
either {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} or
{{domxref("MediaStreamTrack.applyConstraints()")}}.

Echo cancellation is a feature which attempts to prevent echo effects on a two-way
audio connection by attempting to reduce or eliminate crosstalk between the user's
output device and their input device. For example, it might apply a filter that negates
the sound being produced on the speakers from being included in the input track
generated from the microphone.

If needed, you can determine whether or not this constraint is supported by checking
the value of {{domxref("MediaTrackSupportedConstraints.echoCancellation")}} as returned
by a call to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically
this is unnecessary since browsers will ignore any constraints they're unfamiliar with.

Because {{Glossary("RTP")}} doesn't include this information, tracks associated with a
[WebRTC](/en-US/docs/Web/API/WebRTC_API) {{domxref("RTCPeerConnection")}}
will never include this property.

## Value

A Boolean value which is `true` if the track has echo cancellation
functionality enabled or `false` if echo cancellation is disabled.

## Examples

See the [Constraint exerciser](/en-US/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser) example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Capture_and_Streams_API)
- [Capabilities, constraints, and settings](/en-US/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- {{domxref("MediaTrackConstraints.echoCancellation")}}
- {{domxref("MediaTrackSettings")}}
