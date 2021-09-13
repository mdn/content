---
title: MediaDecodingConfiguration
slug: Web/API/MediaDecodingConfiguration
tags:
  - API
  - Audio
  - Experimental
  - Interface
  - Media Capabilities API
  - MediaDecodingConfiguration
  - Reference
  - Video
browser-compat: api.MediaDecodingConfiguration
---
The **`MediaDecodingConfiguration`** dictionary of the [Media Capabilities API](/en-US/docs/Web/API/Media_Capabilities_API) is used to define the type of media being tested when calling {{domxref("MediaCapabilities.decodingInfo()")}} to query whether a specific media configuration is supported, smooth, and/or power efficient.

## Properties

A `MediaDecodingConfiguration` dictionary takes two properties:

- `type` — the type of media being tested. This takes one of two values:

  - `file`: Represents a configuration that is meant to be used for a plain file playback.
  - `media-source`: Represents a configuration that is meant to be used for playback of a {{domxref("MediaSource")}}.

- A media configuration — a {{domxref("VideoConfiguration")}} or {{domxref("AudioConfiguration")}} dictionary.

## Examples

```js
//Create media configuration to be tested
const mediaConfig = {
    type : 'file', // or 'media-source'
    video : {
        contentType : "video/webm;codecs=vp8", // valid content type
        width : 800,     // width of the video
        height : 600,    // height of the video
        bitrate : 10000, // number of bits used to encode 1s of video
        framerate : 30   // number of frames making up that 1s.
     }
};

// check support and performance
navigator.mediaCapabilities.decodingInfo(mediaConfig).then(result => {
    console.log('This configuration is ' +  (result.supported ? '' : 'not ') + 'supported.')
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaConfiguration")}}
- {{domxref("MediaEncodingConfiguration")}}
- {{domxref("HTMLMediaElement.canPlayType()")}} for file
- {{domxref("MediaSource.isTypeSupported()")}} for media-source
