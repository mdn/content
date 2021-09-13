---
title: DisplayMediaStreamConstraints.audio
slug: Web/API/DisplayMediaStreamConstraints/audio
tags:
  - API
  - Audio
  - Capture
  - Constraints
  - DisplayMediaStreamTrack
  - Options
  - Property
  - Reference
  - Screen Capture
  - Screen Capture API
  - Screen Sharing
  - Settings
  - Sharing
  - screen
  - track
browser-compat: api.DisplayMediaStreamConstraints.audio
---
{{APIRef("Screen Capture API")}}

The {{domxref("DisplayMediaStreamConstraints")}} dictionary's
**`audio`** property is used to specify whether or not to
request that the {{domxref("MediaStream")}} containing screen display contents also
include an audio track. This value may be a Boolean, where `true` indicates
that an audio track should be included an `false` (the default) indicates
that no audio should be included in the stream.

More precise control over the audio data may be exercised by instead providing a
{{domxref("MediaTrackConstraints")}} object, which is used to process the audio prior to
adding it to the stream.

> **Note:** The specification for the Screen Capture API does not define
> what the contents of the audio track should be. This is left up to the
> {{Glossary("user agent")}} to decide. Likely sources are the computer's system audio
> output and the user's microphone, but there is no way to specify which source to use.

## Syntax

```js
displayMediaStreamConstraints.audio = allowAudioFlag;
displayMediaStreamConstraints.audio = mediaTrackConstraints;

displayMediaStreamConstraints = {
  audio: allowAudioFlag|mediaTrackConstraints;
}
```

### Value

The value may be either a Boolean or a {{domxref("MediaTrackConstraints")}} object.

If a Boolean is specified, a value of `true` indicates that an audio track
should be included in the stream returned by {{domxref("MediaDevices.getDisplayMedia",
  "getDisplayMedia()")}}, if an appropriate audio source exists and the user agent
supports audio on display media. A value of `false`—the default—indicates
that no audio track is to be included in the stream.

If a `MediaTrackConstraints` object is given, and an audio source is
available, an audio track matching the settings given in the constraints object is
included in the {{domxref("MediaStream")}} returned by `getDisplayMedia()`.

If no audio source is available, or the user agent doesn't support audio tracks with
`getDisplayMedia()`, the returned `MediaStream` has no audio
track, but no error occurs. The audio track is always considered optional.

## Example

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API)
- [Using the
  Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [Capabilities,
  constraints, and settings](/en-US/docs/Web/API/Media_Streams_API/Constraints)
