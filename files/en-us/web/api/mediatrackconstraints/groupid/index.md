---
title: "MediaTrackConstraints: groupId property"
short-title: groupId
slug: Web/API/MediaTrackConstraints/groupId
page-type: web-api-instance-property
browser-compat: api.MediaStreamTrack.applyConstraints.groupId_constraint
---

{{APIRef("Media Capture and Streams")}}

The {{domxref("MediaTrackConstraints")}} dictionary's
**`groupId`** property is a [`ConstrainDOMString`](/en-US/docs/Web/API/MediaTrackConstraints#constraindomstring)
describing the requested or mandatory constraints placed upon the value of the
{{domxref("MediaTrackSettings.groupId", "groupId")}} constrainable property.

If needed, you can determine whether or not this constraint is supported by checking
the value of {{domxref("MediaTrackSupportedConstraints.groupId")}} as returned by a call
to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically this is
unnecessary since browsers will ignore any constraints they're unfamiliar with.

## Value

An object based on [`ConstrainDOMString`](/en-US/docs/Web/API/MediaTrackConstraints#constraindomstring) specifying one or more acceptable,
ideal, and/or exact (mandatory) group IDs which are acceptable as the source of media
content.

Group IDs are unique for a given origin for the duration of a single browsing session,
and are shared by all media sources that come from the same physical device. For
example, the microphone and speaker on the same headset would share a group ID. This
makes it possible to use the group ID to ensure that the audio and input devices are on
the same headset by retrieving the group ID of the input device and specifying it when
asking for an output device, perhaps.

However, the value of the `groupId` is determined by the source of the
track's content, and there's no particular format mandated by the specification
(although some kind of GUID is recommended). That means that a given track will only
return one value for the `groupId` when you call
{{domxref("MediaStreamTrack.getCapabilities", "getCapabilities()")}}, and keep in mind
that this value will change for each browsing session.

Because of this, there's no use for the group ID when calling
{{domxref("MediaStreamTrack.applyConstraints()")}}, since there is only one possible
value, and you can't use it to ensure the same group is used across multiple browsing
sessions when calling `getUserMedia()`.

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
