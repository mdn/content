---
title: "MediaTrackSettings: restrictOwnAudio property"
short-title: restrictOwnAudio
slug: Web/API/MediaTrackSettings/restrictOwnAudio
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.MediaStreamTrack.applyConstraints.restrictOwnAudio_constraint
---

{{APIRef("Media Capture and Streams")}}{{SeeCompatTable}}

The {{domxref("MediaTrackSettings")}} dictionary's **`restrictOwnAudio`** property controls whether system audio originating from the capturing tab is filtered out of screen capture, allowing for cleaner screen recordings in some cases.

For example, if the capturing web page itself is playing embedded audio or video, the resulting audio would be included in the capture. This could lead to an undesirable echo or interfere with the intended audio sources from other tabs or applications, so removing it from the capture is desirable.

## Value

A boolean value, where `true` enables the capturing tab's system audio restriction and `false` disables it.

If the value is `true`, the user agent will attempt to remove audio originating from the captured audio produced by the tab that called {{domxref("MediaDevices.getDisplayMedia()")}} to initiate screen capture. If removal via processing fails, the user agent may exclude all audio originating from the capturing tab.

> [!NOTE]
> If the captured display surface doesn't include system audio, this setting will have no effect.

## Examples

The below function sets up a constraints object specifying the options for a call to {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}}. It adds the `restrictOwnAudio` constraint (requesting that system audio originating from the capturing tab is filtered out of the screen capture) only if it is known to be supported by the browser. Capture is then started by calling `getDisplayMedia()` and attaching the returned stream to the {{htmlelement("video")}} element referenced by the variable `videoElem`.

```js
async function capture() {
  const supportedConstraints = navigator.mediaDevices.getSupportedConstraints();
  const displayMediaOptions = {
    audio: {},
  };

  if (supportedConstraints.restrictOwnAudio) {
    displayMediaOptions.audio.restrictOwnAudio = true;
  }

  try {
    videoElem.srcObject =
      await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
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
