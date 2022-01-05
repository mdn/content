---
title: VideoConfiguration
slug: Web/API/VideoConfiguration
tags:
  - API
  - Audio
  - Experimental
  - Interface
  - Media Capabilities API
  - Reference
  - Video
  - VideoConfiguration
browser-compat: api.VideoConfiguration
---
{{APIRef("Media Capabilities API")}}

The **`VideoConfiguration`** dictionary of the [Media Capabilities API](/en-US/docs/Web/API/Media_Capabilities_API) is used to define the video file being tested when calling the {{domxref("MediaCapabilities")}} methods {{domxref("MediaCapabilities.encodingInfo", "encodingInfo()")}} and {{domxref("MediaCapabilities.decodingInfo", "decodingInfo()")}} to determine whether or not the described video configuration is supported, and how smoothly and how smoooth and power-efficient it can be handled.

## Properties

The `VideoConfiguration` dictionary is made up of five video properties, including:

- **contentType**: A valid video MIME type. See our [web video codec guide](/en-US/docs/Web/Media/Formats/Video_codecs) for types which may be supported.
- **width**: The width of the video.
- **height**: The height of the video.
- **bitrate**: The number of bits used to encode one second of the video file.
- **framerate**: The number of frames making up one second of video playback.

## Examples

```js
// Create media configuration to be tested
const mediaConfig = {
    type : 'file',  // see {{domxref("MediaDecodingConfiguration")}} and {{domxref("MediaEncodingConfiguration")}}
    video : {
        contentType : "video/webm;codecs=vp8", // valid content type
        width : 800,     // width of the video
        height : 600,    // height of the video
        bitrate : 10000, // number of bits used to encode 1s of video
        framerate : 30   // number of frames making up that 1s.
     }
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web media technologies](/en-US/docs/Web/Media)
- [Guide to media types and formats on the web](/en-US/docs/Web/Media/Formats)
- [Media Capabilities API](/en-US/docs/Web/API/Media_Capabilities_API)
- [Using the Media Capabilities API](/en-US/docs/Web/API/Media_Capabilities_API/Using_the_Media_Capabilities_API)
- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Streams_API)
- [MediaStream Recording API](/en-US/docs/Web/API/MediaStream_Recording_API)
- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
- {{domxref("MediaDecodingConfiguration")}}
- {{domxref("MediaEncodingConfiguration")}}
- {{domxref("AudioConfiguration")}}
