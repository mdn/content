---
title: "MediaTrackSupportedConstraints: suppressLocalAudioPlayback property"
short-title: suppressLocalAudioPlayback
slug: Web/API/MediaTrackSupportedConstraints/suppressLocalAudioPlayback
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.MediaTrackSupportedConstraints.suppressLocalAudioPlayback
---

{{APIRef("Media Capture and Streams")}}{{SeeCompatTable}}

The {{domxref("MediaTrackSupportedConstraints")}} dictionary's **`suppressLocalAudioPlayback`** property indicates whether or not the {{domxref("MediaTrackConstraints.suppressLocalAudioPlayback", "suppressLocalAudioPlayback")}} constraint is supported by the user agent and the device on which the content is being used.

The supported constraints list is obtained by calling {{domxref("MediaDevices.getSupportedConstraints","navigator.mediaDevices.getSupportedConstraints()")}}.

## Value

A boolean value which is `true` if the {{domxref("MediaTrackConstraints.suppressLocalAudioPlayback", "suppressLocalAudioPlayback")}} constraint is supported by the device and user agent.

## Examples

The function below sets up the options object for the call to {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}}. It adds the `suppressLocalAudioPlayback` constraint (requesting that captured audio is not played out of the user's local speakers) only if it is known to be supported by the browser. Capturing is then started by calling `getDisplayMedia()` and attaching the returned stream to the video element referenced by the variable `videoElem`.

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
