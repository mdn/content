---
title: "Navigator: audioSession property"
short-title: audioSession
slug: Web/API/Navigator/audioSession
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Navigator.audioSession
---

{{APIRef("Audio Session API")}}{{SeeCompatTable}}

The **`audioSession`** read-only property of the {{domxref("Navigator")}} interface returns the {{domxref("AudioSession")}} object for the current document.

The {{domxref("AudioSession")}} interface can be used to control how audio from a web application interacts with other audio playing on a device, for example, allowing developers to specify whether their application's audio should play on its own, or along with other device audio.

## Value

An {{domxref("AudioSession")}} object.

## Examples

### Setting the audio session type

The following example sets the audio session type to `"play-and-record"` before starting a video call:

```js
navigator.audioSession.type = "play-and-record";

// Start video call
const stream = await navigator.mediaDevices.getUserMedia({
  audio: true,
  video: true,
});
localVideo.srcObject = stream;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("AudioSession")}}
- {{domxref("AudioSession.type")}}
- [Audio Session API](/en-US/docs/Web/API/Audio_Session_API)
