---
title: MediaTrackConstraints.deviceId
slug: Web/API/MediaTrackConstraints/deviceId
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
  - deviceId
  - getusermedia
browser-compat: api.MediaTrackConstraints.deviceId
---
{{APIRef("Media Capture and Streams")}}

The {{domxref("MediaTrackConstraints")}} dictionary's
**`deviceId`** property is a [`ConstrainDOMString`](/en-US/docs/Web/API/MediaTrackConstraints#ConstrainDOMString)
describing the requested or mandatory constraints placed upon the value of the
{{domxref("MediaTrackSettings.deviceId", "deviceId")}} constrainable property.

If needed, you can determine whether or not this constraint is supported by checking
the value of {{domxref("MediaTrackSupportedConstraints.deviceId")}} as returned by a
call to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically this
is unnecessary since browsers will ignore any constraints they're unfamiliar with.

Because {{Glossary("RTP")}} doesn't include this information, tracks associated with a
[WebRTC](/en-US/docs/Web/API/WebRTC_API) {{domxref("RTCPeerConnection")}}
will never include this property.

## Syntax

```js
var constraintsObject = { deviceId: constraint };

constraintsObject.deviceId = constraint;
```

### Value

An object based on [`ConstrainDOMString`](/en-US/docs/Web/API/MediaTrackConstraints#ConstrainDOMString) specifying one or more acceptable,
ideal, and/or exact (mandatory) device IDs which are acceptable as the source of media
content.

Device IDs are unique for a given origin, and are guaranteed to be the same across
browsing sessions on the same origin. However, the value of the `deviceId` is
determined by the source of the track's content, and there's no particular format
mandated by the specification (although some kind of GUID is recommended). That means
that a given track will only return one value for the `deviceId` when you
call {{domxref("MediaStreamTrack.getCapabilities", "getCapabilities()")}}.

Because of this, there's no use for the device ID when calling
{{domxref("MediaStreamTrack.applyConstraints()")}}, since there is only one possible
value; however, you can record a `deviceId` and use it to ensure that you get
the same source for multiple calls to {{domxref("MediaDevices.getUserMedia",
  "getUserMedia()")}}.

> **Note:** An exception to the rule that device IDs are the same across browsing sessions:
> private browsing mode will use a different ID, and will change it each browsing
> session.

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
