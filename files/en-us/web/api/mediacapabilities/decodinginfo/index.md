---
title: "MediaCapabilities: decodingInfo() method"
short-title: decodingInfo()
slug: Web/API/MediaCapabilities/decodingInfo
page-type: web-api-instance-method
browser-compat: api.MediaCapabilities.decodingInfo
---

{{APIRef("MediaCapabilities")}}

The **`MediaCapabilities.decodingInfo()`** method, part of the [Media Capabilities API](/en-US/docs/Web/API/MediaCapabilities), returns a promise with the tested media configuration's capabilities info.
This contains the three boolean properties `supported`, `smooth`, and `powerefficient`, which describe whether decoding the media described would be supported, smooth, and powerefficient.

## Syntax

```js-nolint
decodingInfo(configuration)
```

### Parameters

- `configuration`

  - : An object with a property `type` and _either_ a `video` or `audio` property containing a configuration of the appropriate type: <!-- MediaDecodingConfiguration in the spec -->

    - `type`

      - : The type of media being tested. This takes one of three values:

        - `file`
          - : Represents a configuration that is meant to be used for a plain file playback.
        - `media-source`
          - : Represents a configuration that is meant to be used for playback of a {{domxref("MediaSource")}}.
        - `webrtc`
          - : Represents a configuration that is meant to be received using {{domxref("RTCPeerConnection")}}.

    - `video`

      - : Configuration object for a video media source.
        This has the following properties: <!-- VideoConfiguration in the spec -->

        - `contentType`
          - : String containing a valid video MIME type, and (optionally) a [`codecs` parameter](/en-US/docs/Web/Media/Formats/codecs_parameter).
        - `width`
          - : The width of the video.
        - `height`
          - : The height of the video.
        - `bitrate`
          - : The number of bits used to encode one second of the video file.
        - `framerate`
          - : The number of frames making up one second of video playback.

    - `audio`

      - : Configuration object for an audio media source.
        This has the following properties: <!-- AudioConfiguration in the spec -->

        - `contentType`
          - : String containing a valid audio MIME type, and (optionally) a [`codecs` parameter](/en-US/docs/Web/Media/Formats/codecs_parameter).
        - `channels`
          - : The number of channels used by the audio track.
        - `bitrate`
          - : The number of bits used to encode one second of the audio file.
        - `samplerate`
          - : The number of audio samples making up one second of the audio file.

### Return value

A {{jsxref('Promise')}} fulfilling with an object containing three Boolean attributes:

- `supported`
  - : `true` if the media content can be decoded at all. Otherwise, it is `false`.
- `smooth`
  - : `true` if playback of the media will be smooth (of high quality). Otherwise it is `false`.
- `powerEfficient`
  - : `true` if playback of the media will be power efficient. Otherwise, it is `false`.

Browsers will report a supported media configuration as `smooth` and `powerEfficient` until stats on this device have been recorded.
All supported audio codecs are reported to be power efficient.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the `configuration` passed to the `decodingInfo()` method is invalid, either because the type is not video or audio, the `contentType` is not a valid codec MIME type, the media decoding configuration is not a valid value for the `type` (file, media-source, or webrtc), or any other error in the media configuration passed to the method, including omitting any values.

## Examples

This example shows how to create a media configuration for an audio file and then use it in `MediaCapabilities.decodingInfo()`.

```js
//Create media configuration to be tested
const mediaConfig = {
  type: "file", // or 'media-source' or 'webrtc'
  audio: {
    contentType: "audio/ogg; codecs=vorbis", // valid content type
    channels: 2, // audio channels used by the track
    bitrate: 132700, // number of bits used to encode 1s of audio
    samplerate: 5200, // number of audio samples making up that 1s.
  },
};

// check support and performance
navigator.mediaCapabilities.decodingInfo(mediaConfig).then((result) => {
  console.log(
    `This configuration is ${result.supported ? "" : "not "}supported,`,
  );
  console.log(`${result.smooth ? "" : "not "}smooth, and`);
  console.log(`${result.powerEfficient ? "" : "not "}power efficient.`);
});
```

Similarly, the code below shows the configuration for a video file.

```js
const mediaConfig = {
  type: "file",
  video: {
    contentType: "video/webm;codecs=vp8", // valid content type
    width: 800, // width of the video
    height: 600, // height of the video
    bitrate: 10000, // number of bits used to encode 1s of video
    framerate: 30, // number of frames making up that 1s.
  },
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaCapabilities.encodingInfo()")}}
- {{domxref("HTMLMediaElement.canPlayType()")}} for file
- {{domxref("MediaSource.isTypeSupported()")}} for media-source
