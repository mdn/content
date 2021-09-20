---
title: MediaStreamConstraints
slug: Web/API/MediaStreamConstraints
tags:
  - API
  - Audio
  - Constraints
  - Dictionary
  - Interface
  - Media
  - Media Capture and Streams API
  - Media Streams API
  - MediaStreamConstraints
  - Reference
  - Video
  - WebRTC
  - getusermedia
browser-compat: api.MediaStreamConstraints
---
{{APIRef("Media Capture and Streams")}}

The **`MediaStreamConstraints`** dictionary is used when calling {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} to specify what kinds of tracks should be included in the returned {{domxref("MediaStream")}}, and, optionally, to establish constraints for those tracks' settings.

To learn more about how constraints work, see [Capabilities, constraints, and settings](/en-US/docs/Web/API/Media_Streams_API/Constraints).

## Properties

Some combination—but not necessarily all—of the following properties will exist on the object.

### Track constraints

- {{domxref("MediaStreamConstraints.audio", "audio")}}
  - : Either a Boolean (which indicates whether or not an audio track is requested) or a {{domxref("MediaTrackConstraints")}} object providing the constraints which must be met by the audio track included in the returned {{domxref("MediaStream")}}. If constraints are specified, an audio track is inherently requested.
- {{domxref("MediaStreamConstraints.video", "video")}}
  - : Either a Boolean (which indicates whether or not a video track is requested) or a {{domxref("MediaTrackConstraints")}} object providing the constraints which must be met by the video track included in the returned {{domxref("MediaStream")}}. If constraints are specified, a video track is inherently requested.

### Security

- {{domxref("MediaStreamConstraints.peerIdentity", "peerIdentity")}}
  - : A {{domxref("DOMString")}} identifying the peer who has sole access to the stream. If this property is specified, only the indicated peer can receive and use the stream. Streams isolated in this way can only be displayed in a media element ({{HTMLElement("audio")}} or {{HTMLElement("video")}}) where the content is protected just as if {{Glossary("CORS")}} cross-origin rules were in effect.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaDevices.getUserMedia()")}}
- {{domxref("MediaStreamTrack.getConstraints()")}}
- {{domxref("MediaStreamTrack.applyConstraints()")}}
- {{domxref("MediaDevices.getSupportedConstraints()")}}
- {{domxref("MediaTrackSupportedConstraints")}}
- {{domxref("MediaStreamTrack.getSettings()")}}
