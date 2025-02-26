---
title: "MediaTrackSettings: deviceId property"
short-title: deviceId
slug: Web/API/MediaTrackSettings/deviceId
page-type: web-api-instance-property
browser-compat: api.MediaStreamTrack.applyConstraints.deviceId_constraint
---

{{APIRef("Media Capture and Streams")}}

The {{domxref("MediaTrackSettings")}} dictionary's
**`deviceId`** property is a string which
uniquely identifies the source for the corresponding {{domxref("MediaStreamTrack")}} for
the origin corresponding to the browsing session. This lets you determine what value was
selected to comply with your specified constraints for this property's value as
described in the {{domxref("MediaTrackConstraints.deviceId")}} property you provided
when calling either {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}.

If needed, you can determine whether or not this constraint is supported by checking
the value of {{domxref("MediaTrackSupportedConstraints.deviceId")}} as returned by a
call to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically this
is unnecessary since browsers will ignore any constraints they're unfamiliar with.

Because {{Glossary("RTP")}} doesn't include this information, tracks associated with a
[WebRTC](/en-US/docs/Web/API/WebRTC_API) {{domxref("RTCPeerConnection")}}
will never include this property.

## Value

A string whose value is an origin-unique identifier for the track's
source. This ID is valid across multiple browsing sessions for the same origin and is
guaranteed to be different for all other origins, so you can safely use it to request
the same source be used for multiple sessions, for example.

The actual value of the string, however, is determined by the source of the track, and
there is no guarantee what form it will take, although the specification does recommend
it be a GUID.

Since there is a one-to-one pairing of ID with each source, all tracks with the same
source will share the same ID for any given origin, so
{{domxref("MediaStreamTrack.getCapabilities()")}} will always return exactly one value
for `deviceId`. That makes the device ID not useful for any changes to
constraints when calling {{domxref("MediaStreamTrack.applyConstraints()")}}.

> [!NOTE]
> An exception to the rule that device IDs are the same across browsing sessions:
> private browsing mode will use a different ID, and will change it each browsing
> session.

## Examples

See the [Constraint exerciser](/en-US/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser) example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Capture_and_Streams_API)
- [Capabilities, constraints, and settings](/en-US/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- {{domxref("MediaTrackSettings.groupId")}}
- {{domxref("MediaTrackConstraints.deviceId")}}
- {{domxref("MediaTrackSettings")}}
