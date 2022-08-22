---
title: HTMLMediaElement.canPlayType()
slug: Web/API/HTMLMediaElement/canPlayType
page-type: web-api-instance-method
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

The {{domxref("HTMLMediaElement")}} method **`canPlayType()`** reports how likely it is that the current browser will be able to play media of a given MIME type.

> **Note:** This feature is not available in [Web Workers](/en-US/docs/Web/API/Web_Workers_API).

## Syntax

```js
canPlayType(type)
```

### Parameters

- `type`
  - : A string specifying the MIME type of the media and (optionally) a [`codecs` parameter](/en-US/docs/Web/Media/Formats/codecs_parameter) containing a comma-separated list of the supported codecs.

### Return value

A string indicating how likely it is that the media can be played.
The string will be one of the following values:

- `""` (empty string)
  - : The media cannot be played on the current device.
- `probably`
  - : The media is probably playable on this device.
- `maybe`
  - : There is not enough information to determine whether the media can play (until playback is actually attempted).

## Examples

```js
let obj = document.createElement('video');
console.log(obj.canPlayType('video/mp4')); // "maybe"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining it, {{domxref("HTMLMediaElement")}}.
- {{domxref("MediaCapabilities")}} in the Media Capabilities API
- [Handling media support issues in web content](/en-US/docs/Web/Media/Formats/Support_issues)
- [Guide to media types and formats on the web](/en-US/docs/Web/Media/Formats)
- [The `codecs` parameter](/en-US/docs/Web/Media/Formats/codecs_parameter)
