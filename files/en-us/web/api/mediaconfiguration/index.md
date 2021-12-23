---
title: MediaConfiguration
slug: Web/API/MediaConfiguration
tags:
  - API
  - Audio
  - Experimental
  - Interface
  - Media Capabilities API
  - MediaConfiguration
  - Reference
  - Video
browser-compat: api.MediaConfiguration
---
{{APIRef("Media Capabilities API")}}

The **`MediaConfiguration`** [`MediaCapabilities`](/en-US/docs/Web/API/MediaCapabilities "The MediaCapabilities interface of the Media Capabilities API provides information about the decoding abilities of the device, system and browser. The API can be used to query the browser about the decoding abilities of the device based on codecs, profile, resolution, and bitrates. The  information can be used to serve optimal media streams to the user and determine if  playback should be smooth and power efficient.") dictionary of the [Media Capabilities API](/en-US/docs/Web/API/MediaCapabilities) describes how media and audio files must be configured, or defined, to be passed as a parameter of the {{domxref("MediaCapabilities.encodingInfo()")}} and {{domxref("MediaCapabilities.encodingInfo()")}} methods.

## Properties

A valid configuration includes a valid encoding configuration type or decoding configuration type and a valid [audio configuration](/en-US/docs/Web/API/AudioConfiguration) or [video configuration](/en-US/docs/Web/API/VideoConfiguration). If you plan on querying [encoding](/en-US/docs/Web/API/MediaEncodingConfiguration) information, set the media type to record or transmission.

For [decoding](/en-US/docs/Web/API/MediaDecodingConfiguration), set the type to `file` or `media-source`.

If the media is an audio file, the [audio configuration](/en-US/docs/Web/API/AudioConfiguration) must include a valid audio MIME type as `contentType`, the number of channels, the bitrate, and the sample rate. [Video configurations](/en-US/docs/Web/API/VideoConfiguration) mush include a valid video MIME type as contentType, the bitrate, and framerate, along with the width and the height of the video file. All of these must be present, as in the examples below, or a TypeError will occur.

A valid media decoding configuration, to be submitted as the parameter for {{domxref("mediaCapabilities.decodingInfo", "mediaCapabilities.decodingInfo()")}} method, has it's \`type\` set as:

- **file**: For plain playback file.
- **media-source**: For [media source](/en-US/docs/Web/API/MediaSource) files.

A valid media encoding configuration, to be submitted as the parameter for {{domxref("mediaCapabilities.encodingInfo", "mediaCapabilities.encodingInfo()")}} method, has it's \`type\` set as:

- **record**: For [recording media](/en-US/docs/Web/API/MediaRecorder).
- **transmission**: For media to be electronically transmitted.

A valid [audio configuration](/en-US/docs/Web/API/AudioConfiguration) includes:

- **contentType**: Valid audio MIME type.
- **channels**:  Number of channels used by the audio track.
- **bitrate**: Number of bits used to encode one second of the audio file.
- **samplerate**: Number of audio samples making up one second of the audio file.

A valid [video configuration](/en-US/docs/Web/API/VideoConfiguration) includes:

- **contentType**: Valid video MIME type.
- **width**: Width of the video.
- **height**: Height of the video.
- **bitrate**: Number of bits used to encode one second of the video file.
- **framerate**: Number of frames making up one second of video playback.

## Example

```js
//Create a video configuration to be tested
const videoDecoderConfig = {
  type : 'file', // 'record', 'transmission', or 'media-source'
  video : {
    contentType : "video/webm;codecs=vp8", // valid content type
    width : 800,     // width of the video
    height : 600,    // height of the video
    bitrate : 10000, // number of bits used to encode 1s of video
    framerate : 30   // number of frames making up that 1s.
  }
};

const audioEncoderConfig = {
  type : 'file', // 'record', 'transmission', or 'media-source'
  audio : {
    contentType : "audio/ogg", // valid content type
    channels : 2,     // audio channels used by the track
    bitrate : 132700, // number of bits used to encode 1s of audio
    samplerate : 5200 // number of audio samples making up that 1s.
  }
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaDecodingConfiguration")}}
- {{domxref("MediaEncodingConfiguration")}}
