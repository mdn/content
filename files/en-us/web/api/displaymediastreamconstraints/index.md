---
title: DisplayMediaStreamConstraints
slug: Web/API/DisplayMediaStreamConstraints
tags:
  - API
  - Audio
  - Capture
  - Constraints
  - Dictionary
  - DisplayMediaStreamConstraints
  - Media
  - Reference
  - Screen Capture
  - Screen Capture API
  - Video
  - display
  - getDisplayMedia
  - screen
browser-compat: api.DisplayMediaStreamConstraints
---
{{APIRef("Screen Capture API")}}

The **`DisplayMediaStreamConstraints`** dictionary is used to specify whether or not to include video and/or audio tracks in the {{domxref("MediaStream")}} to be returned by {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}}, as well as what type of processing must be applied to the tracks.

Processing information is specified using {{domxref("MediaTrackConstraints")}} objects providing options which are applied to the track after the media data is received but before it is made available on the {{domxref("MediaStream")}}.

## Properties

- {{domxref("DisplayMediaStreamConstraints.audio", "audio")}}
  - : A Boolean or {{domxref("MediaTrackConstraints")}} value; if a Boolean, this value indicates whether or not to include an audio track in the {{domxref("MediaStream")}} returned by {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}}. If a `MediaTrackConstraints` object is provided here, an audio track is included in the stream, but the audio is processed to match the specified constraints after being retrieved from the hardware but before being added to the {{domxref("MediaStream")}}. The default value is `false`.
- {{domxref("DisplayMediaStreamConstraints.video", "video")}}
  - : If `true` (the default), the display contents are included in a {{domxref("MediaStreamTrack")}} within the stream provided by `getDisplayMedia()`. Optionally, a {{domxref("MediaTrackConstraints")}} object may be given, providing options specifying processing to be performed on the video data before adding it to the stream. A value of `false` is not permitted, and results in a `TypeError` being thrown.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API)
- [Using the Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [Capabilities, constraints, and settings](/en-US/docs/Web/API/Media_Streams_API/Constraints)
