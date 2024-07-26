---
title: Media Capabilities API
slug: Web/API/Media_Capabilities_API
page-type: web-api-overview
browser-compat: api.MediaCapabilities
---

{{DefaultAPISidebar("Media Capabilities API")}}

The **Media Capabilities API** allows developers to determine decoding and encoding abilities of the device, exposing information such as whether media is supported and whether playback should be smooth and power efficient, with real time feedback about playback to better enable adaptive streaming, and access to display property information.

## Concepts

There are a myriad of video and audio codecs. Different browsers support different media types and new media types are always being developed. With the Media Capabilities API, developers can ensure each user is getting the best bitrate and storage savings for their browser, device, and OS capabilities.

Whether a device uses hardware or software decoding impacts how smooth and power efficient the video decoding is and how efficient the playback will be. The Media Capabilities API enables determining which codecs are supported and how performant a media file will be both in terms of smoothness and power efficiency.

The Media Capabilities API provide more powerful features than say {{DOMxref("MediaRecorder.isTypeSupported_static", "MediaRecorder.isTypeSupported()")}} or {{DOMxRef("HTMLMediaElement.canPlayType()")}}, which only address general browser support, not performance. The API also provides abilities to access display property information such as supported color {{glossary("gamut")}}, dynamic range abilities, and real-time feedback about the playback.

To test support, smoothness, and power efficiency for encoding and decoding video or audio content, you use the {{DOMxRef("MediaCapabilities")}} interface's {{DOMxRef("MediaCapabilities.encodingInfo()","encodingInfo()")}} and {{DOMxRef("MediaCapabilities.decodingInfo()","decodingInfo()")}} methods.

Media capabilities information enables websites to enable adaptive streaming to alter the quality of content based on actual user-perceived quality, and react to a pick of CPU/GPU usage in real time.

## Interfaces

- {{DOMxRef("MediaCapabilities")}}
  - : Provides information about the decoding abilities of the device, system and browser based on codecs, profile, resolution, and bitrates. The information can be used to serve optimal media streams to the user and determine if playback should be smooth and power efficient.

### Extensions to other interfaces

- {{domxref("Navigator.mediaCapabilities")}} {{readonlyinline}}
  - : A {{domxref("MediaCapabilities")}} object that can expose information about the decoding and encoding capabilities for a given media format and output capabilities.
- {{DOMxRef("WorkerNavigator.mediaCapabilities")}} {{readonlyinline}}
  - : A {{domxref("MediaCapabilities")}} object that can expose information about the decoding and encoding capabilities for a given media format and output capabilities.

## Examples

### Detect audio file support and expected performance

This example defines an audio configuration then checks to see if the user agent supports decoding that media configuration, and whether it will perform well in terms of smoothness and power efficiency.

```js
if ("mediaCapabilities" in navigator) {
  const audioFileConfiguration = {
    type: "file",
    audio: {
      contentType: "audio/mp3",
      channels: 2,
      bitrate: 132700,
      samplerate: 5200,
    },
  };

  navigator.mediaCapabilities
    .decodingInfo(audioFileConfiguration)
    .then((result) => {
      console.log(
        `This configuration is ${result.supported ? "" : "not "}supported,`,
      );
      console.log(`${result.smooth ? "" : "not "}smooth, and`);
      console.log(`${result.powerEfficient ? "" : "not "}power efficient.`);
    })
    .catch(() => {
      console.log(`decodingInfo error: ${contentType}`);
    });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTMLMediaElement](/en-US/docs/Web/API/HTMLMediaElement)'s method [canPlayType()](/en-US/docs/Web/API/HTMLMediaElement/canPlayType)
- [MediaSource](/en-US/docs/Web/API/MediaSource)'s method [isTypeSupported()](/en-US/docs/Web/API/MediaSource/isTypeSupported_static)
- [Using the Media Capabilities API](/en-US/docs/Web/API/Media_Capabilities_API/Using_the_Media_Capabilities_API)
