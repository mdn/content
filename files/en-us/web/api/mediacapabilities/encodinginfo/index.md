---
title: "MediaCapabilities: encodingInfo() method"
short-title: encodingInfo()
slug: Web/API/MediaCapabilities/encodingInfo
page-type: web-api-instance-method
browser-compat: api.MediaCapabilities.encodingInfo
---

{{APIRef("Media Capabilities API")}}{{AvailableInWorkers}}

The **`encodingInfo()`** method of the {{domxref("MediaCapabilities")}} interface returns a promise that fulfills with the tested media configuration's capabilities for encoding media.
This contains the three boolean properties `supported`, `smooth`, and `powerefficient`, which describe how compatible the device is with the type of media.

## Syntax

```js-nolint
encodingInfo(configuration)
```

### Parameters

- `configuration`

  - : An object with a property `type` and _either_ a `video` or `audio` property containing a configuration of the appropriate type: <!-- MediaEncodingConfiguration in the spec -->

    - `type`

      - : The type of media being tested. This takes one of two values:

        - `record`
          - : Represents a configuration for recording of media, e.g. using {{domxref("MediaRecorder")}}.
        - `webrtc`
          - : Represents a configuration meant to be transmitted over electronic means (e.g. using {{domxref("RTCPeerConnection")}}). **Note:** Firefox uses `transmission` for this type, and `webrtc` does not work.
        - `transmission` {{non-standard_inline}}
          - : The synonym of `webrtc` to be used in Firefox.

    - `video`

      - : Configuration object for a video media source.
        This has the following properties: <!-- VideoConfiguration in the spec -->

        - `contentType`
          - : String containing a valid video MIME type, and (optionally) a [`codecs` parameter](/en-US/docs/Web/Media/Guides/Formats/codecs_parameter).
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
          - : String containing a valid audio MIME type, and (optionally) a [`codecs` parameter](/en-US/docs/Web/Media/Guides/Formats/codecs_parameter).
        - `channels`
          - : The number of channels used by the audio track.
        - `bitrate`
          - : The number of bits used to encode one second of the audio file.
        - `samplerate`
          - : The number of audio samples making up one second of the audio file.

### Return value

A {{jsxref('Promise')}} fulfilling with an object containing three Boolean attributes:

- `supported`
  - : `true` if the media content can be encoded at all. Otherwise, it is `false`.
- `smooth`
  - : `true` if playback of the media will be smooth (of high quality). Otherwise it is `false`.
- `powerEfficient`
  - : `true` if playback of the media will be power efficient. Otherwise, it is `false`.

Browsers will report a supported media configuration as `smooth` and `powerEfficient` until stats on this device have been recorded.
All supported audio codecs are reported to be power efficient.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the `configuration` passed to the `encodingInfo()` method is invalid, which may be for any of the following reasons:
    - the type is not video or audio,
    - the `contentType` is not a valid codec MIME type,
    - there is some other error in the media configuration passed to the method, including omitting any of the `configuration` elements.

## Examples

```js
//Create media configuration to be tested
const mediaConfig = {
  type: "record", // or 'transmission'
  video: {
    contentType: "video/webm;codecs=vp8.0", // valid content type
    width: 1920, // width of the video
    height: 1080, // height of the video
    bitrate: 120000, // number of bits used to encode 1s of video
    framerate: 48, // number of frames making up that 1s.
  },
};

// check support and performance
navigator.mediaCapabilities.encodingInfo(mediaConfig).then((result) => {
  console.log(
    `This configuration is ${result.supported ? "" : "not "}supported,`,
  );
  console.log(`${result.smooth ? "" : "not "}smooth, and`);
  console.log(`${result.powerEfficient ? "" : "not "}power efficient.`);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaCapabilities.decodingInfo()")}}
