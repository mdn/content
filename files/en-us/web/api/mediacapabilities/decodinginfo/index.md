---
title: MediaCapabilities.decodingInfo()
slug: Web/API/MediaCapabilities/decodingInfo
tags:
  - API
  - Audio
  - Experimental
  - Media Capabilities API
  - MediaCapabilities
  - Method
  - Reference
  - Video
  - decodingInfo()
browser-compat: api.MediaCapabilities.decodingInfo
---
{{APIRef("MediaCapabilities")}}

The **`MediaCapabilities.decodingInfo()`** method, part of the [Media Capabilities API](/en-US/docs/Web/API/MediaCapabilities), returns a promise with the tested media configuration's [mediaCapabilitiesInfo](/en-US/docs/Web/API/MediaCapabilities/MediaCapabilitiesInfo); this contains the three Boolean properties `supported`, `smooth`, and `powerefficient`, which describe whether decoding the media described would be supported, smooth, and powerefficient.

## Syntax

```js
mediaCapabilities.decodingInfo(MediaDecodingConfiguration)
```

### Parameters

- MediaDecodingConfiguration
  - : A valid {{domxref("MediaDecodingConfiguration")}} dictionary containing a valid media decoding `type` of `file` or `media-source` and a valid media configuration: either an {{domxref("AudioConfiguration")}} or a {{domxref("VideoConfiguration")}}.

### Return value

A {{jsxref('Promise')}} fulfilling with a {{domxref("MediaCapabilitiesInfo")}} interface containing three Boolean attributes:

- `supported`
- `smooth`
- `powerEfficient`

### Exceptions

A `TypeError` is raised if the `MediaConfiguration` passed to the `decodingInfo()` method is invalid, either because the type is not video or audio, the `contentType` is not a valid codec MIME type, the media decoding configuration is not a valid value for the [media decoding type](/en-US/docs/Web/API/MediaDecodingType), or any other error in the media configuration passed to the method, including omitting values required in the [media decoding configuration](/en-US/docs/Web/API/MediaDecodingConfiguration).

## Example

```js
//Create media configuration to be tested
const mediaConfig = {
    type : 'file', // or 'media-source'
    audio : {
        contentType : "audio/ogg; codecs=vorbis", // valid content type
        channels : 2,     // audio channels used by the track
        bitrate : 132700, // number of bits used to encode 1s of audio
        samplerate : 5200 // number of audio samples making up that 1s.
     },
};

// check support and performance
navigator.mediaCapabilities.decodingInfo(mediaConfig).then(result => {
    console.log('This configuration is ' +
        (result.supported ? '' : 'not ') + 'supported, ' +
        (result.smooth ? '' : 'not ') + 'smooth, and ' +
        (result.powerEfficient ? '' : 'not ') + 'power efficient.')
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaDecodingConfiguration")}}
- {{domxref("VideoConfiguration")}}
- {{domxref("AudioConfiguration")}}
- {{domxref("MediaCapabilities.encodingInfo()")}}
