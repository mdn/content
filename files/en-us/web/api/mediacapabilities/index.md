---
title: MediaCapabilities
slug: Web/API/MediaCapabilities
page-type: web-api-interface
browser-compat: api.MediaCapabilities
---

{{APIRef("Media Capabilities API")}}

The **`MediaCapabilities`** interface of the [Media Capabilities API](/en-US/docs/Web/API/Media_Capabilities_API) provides information about the decoding abilities of the device, system and browser. The API can be used to query the browser about the decoding abilities of the device based on codecs, profile, resolution, and bitrates. The information can be used to serve optimal media streams to the user and determine if playback should be smooth and power efficient.

The information is accessed through the **`mediaCapabilities`** property of the {{domxref("Navigator")}} interface.

## Instance methods

- {{domxref("MediaCapabilities.encodingInfo()")}}
  - : When passed a valid media configuration, it returns a promise with information as to whether the media type is supported, and whether encoding such media would be smooth and power efficient.
- {{domxref("MediaCapabilities.decodingInfo()")}}
  - : When passed a valid media configuration, it returns a promise with information as to whether the media type is supported, and whether decoding such media would be smooth and power efficient.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTMLMediaElement](/en-US/docs/Web/API/HTMLMediaElement)'s method [canPlayType()](/en-US/docs/Web/API/HTMLMediaElement/canPlayType)
- [MediaSource](/en-US/docs/Web/API/MediaSource)'s method [isTypeSupported()](/en-US/docs/Web/API/MediaSource/isTypeSupported_static)
- {{domxref("Navigator")}} interface
