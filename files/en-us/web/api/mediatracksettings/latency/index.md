---
title: MediaTrackSettings.latency
slug: Web/API/MediaTrackSettings/latency
tags:
  - API
  - Audio
  - Media
  - Media Capture and Streams API
  - Media Streams API
  - MediaTrackSettings
  - Property
  - Reference
  - Settings
  - WebRTC
  - latency
browser-compat: api.MediaTrackSettings.latency
---
{{APIRef("Media Capture and Streams")}}

The {{domxref("MediaTrackSettings")}} dictionary's
**`latency`** property is a double-precision floating-point
number indicating the estimated latency (specified in seconds) of the
{{domxref("MediaStreamTrack")}} as currently configured. This lets you determine what
value was selected to comply with your specified constraints for this property's value
as described in the {{domxref("MediaTrackConstraints.latency")}} property you provided
when calling either {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} or
{{domxref("MediaStreamTrack.applyConstraints()")}}.

This is, of course, an approximation, since latency can vary for many reasons including
CPU, transmission, and storage overhead.

If needed, you can determine whether or not this constraint is supported by checking
the value of {{domxref("MediaTrackSupportedConstraints.latency")}} as returned by a call
to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically this is
unnecessary since browsers will ignore any constraints they're unfamiliar with.

Because {{Glossary("RTP")}} doesn't include this information, tracks associated with a
[WebRTC](/en-US/docs/Web/API/WebRTC_API) {{domxref("RTCPeerConnection")}}
will never include this property.

## Syntax

```js
var latency = MediaTrackSettings.latency;
```

### Value

A double-precision floating-point number indicating the estimated latency, in seconds,
of the audio track as currently configured.

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
- {{domxref("MediaTrackConstraints.latency")}}
- {{domxref("MediaTrackSettings")}}
