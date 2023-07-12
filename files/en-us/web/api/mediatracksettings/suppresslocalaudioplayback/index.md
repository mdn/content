---
title: "MediaTrackSettings: suppressLocalAudioPlayback property"
short-title: suppressLocalAudioPlayback
slug: Web/API/MediaTrackSettings/suppressLocalAudioPlayback
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.MediaTrackSettings.suppressLocalAudioPlayback
---

{{APIRef("Media Capture and Streams")}}{{SeeCompatTable}}

The {{domxref("MediaTrackSettings")}} dictionary's **`suppressLocalAudioPlayback`** property controls whether the audio playing in a tab will continue to be played out of a user's local speakers when the tab is captured.

For example, in cases where you broadcast a video call to an external AV system in a conference room, you will want the audio to play out of the AV system, and not the local speakers. This way, the audio will be louder and clearer, and also in sync with the conference video.

## Value

The value of `suppressLocalAudioPlayback` is a boolean — `true` enables local audio playback suppression, and `false` disables it.

## Examples

The below function sets up the constraints object specifying the options for the call to {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}}. It adds the `suppressLocalAudioPlayback` constraint (requesting that captured audio is not played out of the user's local speakers) only if it is known to be supported by the browser. Capturing is then started by calling `getDisplayMedia()` and attaching the returned stream to the video element referenced by the variable `videoElem`.

```js
async function capture() {
  const supportedConstraints = navigator.mediaDevices.getSupportedConstraints();
  const displayMediaOptions = {
    audio: {},
  };

  if (supportedConstraints.suppressLocalAudioPlayback) {
    displayMediaOptions.audio.suppressLocalAudioPlayback = true;
  }

  try {
    videoElem.srcObject = await navigator.mediaDevices.getDisplayMedia(
      displayMediaOptions,
    );
  } catch (err) {
    /* handle the error */
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API)
- [Using the screen capture API](/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [Capabilities, constraints, and settings](/en-US/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- {{domxref("MediaDevices.getDisplayMedia()")}}
- {{domxref("MediaStreamTrack.getConstraints()")}}
- {{domxref("MediaStreamTrack.applyConstraints()")}}
- {{domxref("MediaStreamTrack.getSettings()")}}
