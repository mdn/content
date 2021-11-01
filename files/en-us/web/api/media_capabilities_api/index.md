---
title: Media Capabilities API
slug: Web/API/Media_Capabilities_API
tags:
  - API
  - Experimental
  - Media Capabilities
  - Overview
  - Reference
---
{{DefaultAPISidebar("Media Capabilities API")}}

The **Media Capabilities API** allows developers to determine decoding and encoding abilities of the device, exposing information such as whether media is supported and whether playback should be smooth and power efficient, with real time feedback about playback to better enable adaptive streaming, and access to display property information.

## Examples

### Detect audio file support and expected performance

This example defines a audio configuration then checks to see if the user agent supports decoding that media configuration, and whether it will perform well in terms of smoothness and power efficiency.

```js
if ('mediaCapabilities' in navigator) {
  const audioFileConfiguration = {
    type : 'file',
    audio : {
        contentType: "audio/mp3",
        channels: 2,
        bitrate: 132700,
        samplerate: 5200
    }
  };

  navigator.mediaCapabilities.decodingInfo(audioFileConfiguration).then(result => {
    console.log('This configuration is ' +
        (result.supported ? '' : 'not ') + 'supported, ' +
        (result.smooth ? '' : 'not ') + 'smooth, and ' +
        (result.powerEfficient ? '' : 'not ') + 'power efficient.')
    })
    .catch(() => {
      console.log("decodingInfo error: " + contentType)
    });
}
```

## Media Capabilities API concepts and usage

There are a myriad of video and audio codecs. Different browsers support different media types and new media types are always being developed. With the Media Capabilities API, developers can ensure each user is getting the best bitrate and storage savings for their browser, device, and OS capabilities.

Whether a device uses hardware or software decoding impacts how smooth and power efficient the video decoding is and how efficient the playback will be. The Media Capabilities API enables determining which codecs are supported and how performant a media file will be both in terms of smoothness and power efficiency.

The Media Capabilities API provide more powerful features than say {{DOMxRef("MediaRecorder.isTypeSupported()")}} or {{DOMxRef("HTMLMediaElement.canPlayType()")}}, which only address general browser support, not performance. The API also provides abilities to access display property information such as  supported color gamut, dynamic range abilities, and real-time feedback about the playback.

To test support, smoothness and power efficiency of a video or audio file, you define the [media configuration](/en-US/docs/Web/API/MediaConfiguration) you want to test, and then pass the audio or video configuration as the parameter of the {{DOMxRef("MediaCapabilities")}} interface's `encodingInfo()` and `decodingInfo()` methods.

Media capabilities information enables websites to enable adaptative streaming to alter the quality of content based on actual user-perceived quality, and react to a pick of CPU/GPU usage in real time.

## Media Capabilities Interfaces

- {{DOMxRef("MediaCapabilities")}}
  - : Provides information about the decoding abilities of the device, system and browser based on codecs, profile, resolution, and bitrates. The  information can be used to serve optimal media streams to the user and determine if playback should be smooth and power efficient .
- ScreenColorGamut
  - : Will describe the color gamut, or the range of color, the screen can display (not currently supported anywhere).
- ScreenLuminance
  - : Will describe the known luminance characteristics of the screen (not currently supported anywhere).

## Media Capabilities dictionaries

- {{DOMxRef("MediaConfiguration")}}
  - : Describes how video and audio configuration dictionaries must be configured, or defined, to be passed as a parameter of the {{DOMxRef("MediaCapabilities.encodingInfo()")}} and {{DOMxRef("MediaCapabilities.decodingInfo()")}} methods. It is inherited by the {{DOMxRef("MediaDecodingConfiguration")}} and {{DOMxRef("MediaEncodingConfiguration")}} dictionaries.
- {{DOMxRef("MediaDecodingConfiguration")}}
  - : Defines the valid values for allowed types of media when the media configuration is submitted as the parameter for {{DOMxRef("MediaCapabilities.decodingInfo()")}}. Consists of a media decoding type and a {{DOMxRef("VideoConfiguration")}} or {{DOMxRef("AudioConfiguration")}} dictionary.
- {{DOMxRef("MediaEncodingConfiguration")}}
  - : Defines the valid values for allowed types of media when the media configuration is submitted as the parameter for {{DOMxRef("mediaCapabilities.encodingInfo()")}}. Consists of a media encoding type and a {{DOMxRef("VideoConfiguration")}} or {{DOMxRef("AudioConfiguration")}} dictionary.
- {{DOMxRef("VideoConfiguration")}}
  - : Describes the required video properties that must be configured when querying a video configuration to be passed as part of a {{DOMxRef("MediaConfiguration")}} parameter to the {{DOMxRef("MediaCapabilities.encodingInfo()")}} and {{DOMxRef("MediaCapabilities.decodingInfo()")}} methods.
- {{DOMxRef("AudioConfiguration")}}
  - : Describes the required audio properties that must be configured when querying an audio configuration to be passed as part of a {{DOMxRef("MediaConfiguration")}} parameter to the {{DOMxRef("MediaCapabilities.encodingInfo()")}} and {{DOMxRef("MediaCapabilities.decodingInfo()")}} methods.

## Specifications

| Specification                                | Status                                   | Comment            |
| -------------------------------------------- | ---------------------------------------- | ------------------ |
| {{SpecName('Media Capabilities')}} | {{Spec2('Media Capabilities')}} | Initial definition |

## Browser compatibility

{{Compat("api.MediaCapabilities")}}

## See also

- [HTMLMediaElement](/en-US/docs/Web/API/HTMLMediaElement)'s method [canPlayType()](/en-US/docs/Web/API/HTMLMediaElement/canPlayType)
- [MediaSource](/en-US/docs/Web/API/MediaSource)'s method [isTypeSupported()](/en-US/docs/Web/API/MediaSource/isTypeSupported)
- {{DOMxRef("Navigator")}} interface
- [Using the Media Capabilities API](/en-US/docs/Web/API/Media_Capabilities_API/Using_the_Media_Capabilities_API)
