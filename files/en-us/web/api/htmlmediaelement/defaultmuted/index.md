---
title: HTMLMediaElement.defaultMuted
slug: Web/API/HTMLMediaElement/defaultMuted
page-type: web-api-instance-property
tags:
  - API
  - HTML DOM
  - HTMLMediaElement
  - Property
  - Web
browser-compat: api.HTMLMediaElement.defaultMuted
---
{{APIRef("HTML DOM")}}

The **`HTMLMediaElement.defaultMuted`** property reflects the {{htmlattrxref("muted", "video")}} HTML attribute, which indicates whether the media element's audio output should be muted by default. This property has no dynamic effect. To mute and unmute the audio output, use the {{domxref("HTMLMediaElement.muted", "muted")}} property.

## Value

A boolean value. A value of `true` means that the audio output will be muted by default.

## Examples

```js
const videoEle = document.createElement('video');
videoEle.defaultMuted = true;
console.log(videoEle.outerHTML); // <video muted=""></video>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining it, {{domxref("HTMLMediaElement")}}.
- {{domxref("HTMLMediaElement.muted")}}
- {{domxref("HTMLMediaElement.volume")}}
