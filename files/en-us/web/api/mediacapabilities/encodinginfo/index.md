---
title: MediaCapabilities.encodingInfo()
slug: Web/API/MediaCapabilities/encodingInfo
tags:
  - API
  - Audio
  - Experimental
  - Media Capabilities API
  - MediaCapabilities
  - Method
  - Reference
  - Video
  - encodingInfo
browser-compat: api.MediaCapabilities.encodingInfo
---
{{APIRef("MediaCapabilities")}}

The **`MediaCapabilities.encodingInfo()`** method, part of
the {{domxref("MediaCapabilities")}} interface of the [Media Capabilities API](/en-US/docs/Web/API/MediaCapabilities), returns a
promise with the tested media configuration's {{domxref("MediaCapabilitiesInfo")}}; this
contains the three Boolean properties `supported`, `smooth`, and
`powerefficient`, which describe how compatible the device is with the type
of media.

## Syntax

```js
mediaCapabilities.encodingInfo(mediaEncodingConfiguration)
```

### Parameters

- {{domxref("mediaEncodingConfiguration")}}
  - : A valid {{domxref("MediaEncodingConfiguration")}} dictionary containing a valid
    media encoding type of `record` or `transmission` and a valid
    media configuration: either an {{domxref("AudioConfiguration")}} or
    {{domxref("VideoConfiguration")}} dictionary.

### Return value

A {{jsxref("Promise")}} fulfilling with a {{domxref("MediaCapabilitiesInfo")}}
interface containing three Boolean attributes:

- `supported`
- `smooth`
- `powerEfficient`

### Exceptions

A `TypeError` is raised if the `MediaConfiguration` passed to the
`encodingInfo()` method is invalid, either because the type is not video or
audio, the `contentType` is not a valid codec MIME type, or any other error
in the media configuration passed to the method, including omitting any of the [media encoding configuration](/en-US/docs/Web/API/MediaEncodingConfiguration)
elements.

## Example

```js
//Create media configuration to be tested
const mediaConfig = {
    type : 'record', // or 'transmission'
    video : {
        contentType : "video/webm;codecs=vp8.0", // valid content type
        width : 1920,     // width of the video
        height : 1080,    // height of the video
        bitrate : 120000, // number of bits used to encode 1s of video
        framerate : 48   // number of frames making up that 1s.
     }
};

// check support and performance
navigator.mediaCapabilities.encodingInfo(mediaConfig).then(result => {
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

- {{domxref("MediaEncodingConfiguration")}}
- {{domxref("VideoConfiguration")}}
- {{domxref("AudioConfiguration")}}
- {{domxref("MediaCapabilities.decodingInfo()")}}
