---
title: AudioConfiguration
slug: Web/API/AudioConfiguration
tags:
  - API
  - Audio
  - AudioConfiguration
  - Experimental
  - Interface
  - Media Capabilities API
  - Reference
  - Video
browser-compat: api.AudioConfiguration
---
{{APIRef("Media Capabilities API")}}

The **`AudioConfiguration`** dictionary of the [Media Capabilities API](/en-US/docs/Web/API/Media_Capabilities_API) defines the audio file being tested when calling {{domxref("MediaCapabilities.encodingInfo()")}} or {{domxref("MediaCapabilities.decodingInfo()")}} to query whether a specific audio configuration is supported, smooth, and/or power efficient.

## Properties

The `AudioConfiguration` dictionary is made up of four audio properties, including:

- **contentType**: A valid audio MIME type, For information on possible values and what they mean, see the [web audio codec guide](/en-US/docs/Web/Media/Formats/Audio_codecs).
- **channels**: the number of channels used by the audio track.
- **bitrate**: The number of bits used to encode one second of the audio file.
- **samplerate**: The number of audio samples making up one second of the audio file.

## Examples

```js
//Create media configuration to be tested
const mediaConfig = {
    type : 'file', // 'record', 'transmission', or 'media-source'
    audio : {
        contentType : "audio/ogg", // valid content type
        channels : 2,     // audio channels used by the track
        bitrate : 132700, // number of bits used to encode 1s of audio
        samplerate : 5200 // number of audio samples making up that 1s.
     }
};

// check support and performance
navigator.mediaCapabilities.decodingInfo(mediaConfig).then(result => {
    console.log('This configuration is ' +
        (result.supported ? '' : 'not ') + 'supported, ' +
        (result.smooth ? '' : 'not ') + 'smooth, and ' +
        (result.powerEfficient ? '' : 'not ') + 'power efficient.'
});
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
- {{domxref("VideoConfiguration")}}
