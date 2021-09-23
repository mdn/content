---
title: MediaCapabilitiesInfo
slug: Web/API/MediaCapabilitiesInfo
tags:
  - API
  - Audio
  - Experimental
  - Interface
  - Media Capabilities API
  - MediaCapabilitiesInfo
  - Reference
  - Video
browser-compat: api.MediaCapabilitiesInfo
---
{{APIRef("Media Capabilities API")}}

The **`MediaCapabilitiesInfo`** dictionary of the [Media Capabilities API](/en-US/docs/Web/API/Media_Capabilities_API) is made available when the promise returned by the {{domxref("MediaCapabilities.encodingInfo()")}} or {{domxref("MediaCapabilities.decodingInfo()")}} methods of the {{domxref("MediaCapabilities")}} interface fulfills, providing information as to whether the media type is supported, and whether encoding or decoding such media would be smooth and power efficient.

## Properties

The `MediaCapabilitiesInfo` dictionary contains three Boolean attributes:

- `supported`: Given the properties defined in the {{domxref("MediaConfiguration")}}, can the specified piece of media content be encoded (if {{domxref("MediaEncodingConfiguration")}} is set) or decode (if {{domxref("MediaDecodingConfiguration")}} is set) at all? If yes, `supported` is _true_. Otherwise, it is _false_.
- `smooth`: Given the properties defined in the {{domxref("MediaConfiguration")}}, will the playback of the specified piece of media be high quality? Will it be smooth?  If `supported` is `true`, and playback will be smooth, `smooth` is _true_, Otherwise, is it _false._
- `powerEfficient`: Given the properties defined in the {{domxref("MediaConfiguration")}}, will the playback of the specified piece of media be power efficient? If `supported` is `true`, and playback will be power efficient, `powerEfficient` is _true_, Otherwise, is it _false._

Browsers will report a supported media configuration as `smooth` and `powerEfficient` until stats on this device have been recorded. All supported audio codecs are reported to be power efficient.

## Example

```js
const mediaConfig = {
    type : 'file',
    audio : {
        contentType : "audio/ogg",
        channels : 2,
        bitrate : 132700,
        samplerate : 5200¨
     },
};

// check support and performance
navigator.mediaCapabilities.decodingInfo(mediaConfig).then(result => { // result contains the media capabilities information
    console.log('This configuration is ' +
        (result.supported ? '' : 'not ') + 'supported, ' +             // Can the media, as configured, be decoded by the user agent
        (result.smooth ? '' : 'not ') + 'smooth, and ' +               // is it smooth?
        (result.powerEfficient ? '' : 'not ') + 'power efficient.')    // is it power efficient?
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaConfiguration")}}
- {{domxref("MediaCapabilities.encodingInfo()")}}
- {{domxref("MediaCapabilities.decodingInfo()")}}
