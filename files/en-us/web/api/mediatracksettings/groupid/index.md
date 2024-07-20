---
title: "MediaTrackSettings: groupId property"
short-title: groupId
slug: Web/API/MediaTrackSettings/groupId
page-type: web-api-instance-property
browser-compat: api.MediaStreamTrack.applyConstraints.groupId_constraint
---

{{APIRef("Media Capture and Streams")}}

The {{domxref("MediaTrackSettings")}} dictionary's
**`groupId`** property is a browsing-session unique
string which identifies the group of devices which includes the source
for the {{domxref("MediaStreamTrack")}}. This lets you determine what value was selected
to comply with your specified constraints for this property's value as described in the
{{domxref("MediaTrackConstraints.groupId")}} property you provided when calling either
{{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}.

If needed, you can determine whether or not this constraint is supported by checking
the value of {{domxref("MediaTrackSupportedConstraints.groupId")}} as returned by a call
to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically this is
unnecessary since browsers will ignore any constraints they're unfamiliar with.

Because {{Glossary("RTP")}} doesn't include this information, tracks associated with a
[WebRTC](/en-US/docs/Web/API/WebRTC_API) {{domxref("RTCPeerConnection")}}
will never include this property.

## Value

A string whose value is a browsing-session unique identifier for a
group of devices which includes the source of the track's contents. Two devices share
the same group ID if they belong to the same physical hardware device. For example, a
headset has two devices on it: a microphone which can serve as a source for audio tracks
and a speaker which can serve as an output for audio.

The group ID is not usable across multiple browsing sessions. However, it can be used
to ensure that audio input and output are both being performed on the same headset, for
example, or to ensure that the built-in camera and microphone on a phone are being used
for video conferencing purposes.

The actual value of the string, however, is determined by the source of the track, and
there is no guarantee what form it will take, although the specification does recommend
it be a GUID.

Since this property isn't stable across browsing sessions, its usefulness when calling
{{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} is generally limited to
ensuring that tasks performed during the same browsing session use devices from the same
group (or that they don't use devices from the same group). There is no situation in
which the groupId is useful when calling `applyConstraints()`, since the
value can't be changed.

## Examples

See the [Constraint exerciser](/en-US/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser) example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Capture_and_Streams_API)
- [Capabilities, constraints, and settings](/en-US/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- {{domxref("MediaTrackSettings.deviceId")}}
- {{domxref("MediaTrackConstraints.groupId")}}
- {{domxref("MediaTrackSettings")}}
