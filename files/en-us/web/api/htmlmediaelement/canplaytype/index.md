---
title: HTMLMediaElement.canPlayType()
slug: Web/API/HTMLMediaElement/canPlayType
tags:
  - API
  - Audio
  - Capability
  - Compatibility
  - Format
  - HTML DOM
  - HTMLMediaElement
  - MIME Types
  - Media
  - Media Types
  - Method
  - Reference
  - Type
  - Video
  - Web
  - canPlayType
  - support
browser-compat: api.HTMLMediaElement.canPlayType
---
{{APIRef("HTML DOM")}}

The {{domxref("HTMLMediaElement")}} method
**`canPlayType()`** reports how likely it is that the current
browser will be able to play media of a given MIME type.

> **Note:** This feature is not available in [Web Workers](/en-US/docs/Web/API/Web_Workers_API).

## Syntax

```js
canPlayResponse = audioOrVideo.canPlayType(mediaType);
```

### Parameters

- `mediaType`
  - : A {{domxref("DOMString")}} containing the MIME type of the media.

### Return value

A {{domxref("DOMString")}} indicating how likely it is that the media can be played.
The string will be one of the following values:

- `probably`
  - : Media of the type indicated by the `mediaType` parameter is probably
    playable on this device.
- `maybe`
  - : Not enough information is available to determine for sure whether or not the media
    will play until playback is actually attempted.
- `""` (empty string)
  - : Media of the given type definitely can't be played on the current device.

## Example

```js
var obj = document.createElement('video');
console.log(obj.canPlayType('video/mp4')); // "maybe"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining it, {{domxref("HTMLMediaElement")}}.
- {{domxref("MediaCapabilities")}} in the Media Capabilities API
- [Handling media support
  issues in web content](/en-US/docs/Web/Media/Formats/Support_issues)
- [Guide to media types and formats on the
  web](/en-US/docs/Web/Media/Formats)
