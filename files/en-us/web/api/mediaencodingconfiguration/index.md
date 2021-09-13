---
title: MediaEncodingConfiguration
slug: Web/API/MediaEncodingConfiguration
tags:
  - API
  - Audio
  - Experimental
  - Interface
  - Media Capabilities API
  - MediaEncodingConfiguration
  - Reference
  - Video
browser-compat: api.MediaEncodingConfiguration
---
The **`MediaEncodingConfiguration`** dictionary of the [Media Capabilities API](/en-US/docs/Web/API/Media_Capabilities_API) is used to define the type of media being tested when calling {{domxref("MediaCapabilities.encodingInfo()")}} to query whether a specific media configuration is supported, smooth, and/or power efficient.

## Properties

A `MediaEncodingConfiguration` dictionary takes two properties:

- `type` — the type of media being tested; takes one of two values:

  - `record` — Represents a configuration for recording of media, e.g. using {{domxref("MediaRecorder")}}.
  - `transmission` — Represents a configuration meant to be transmitted over electronic means (e.g. using {{domxref("RTCPeerConnection")}}).

- A media configuration — a {{domxref("VideoConfiguration")}} {{domxref("AudioConfiguration")}} dictionary.

## Examples

```js
//Create media configuration to be tested
const mediaConfig = {
    type : 'record', // or 'transmission'
    video : {
        contentType : "video/webm;codecs=vp8", // valid content type
        width : 800,     // width of the video
        height : 600,    // height of the video
        bitrate : 10000, // number of bits used to encode 1s of video
        framerate : 30   // number of frames making up that 1s.
     }
};

// check support and performance
navigator.mediaCapabilities.encodingInfo(mediaConfig).then(result => {
    console.log('This configuration is ' +  (result.supported ? '' : 'not ') + 'supported.')
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaConfiguration")}}
- {{domxref("MediaDecodingConfiguration")}}
- {{domxref("MediaRecorder.isTypeSupported()")}}
