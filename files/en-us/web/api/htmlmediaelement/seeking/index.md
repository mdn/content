---
title: "HTMLMediaElement: seeking property"
short-title: seeking
slug: Web/API/HTMLMediaElement/seeking
page-type: web-api-instance-property
browser-compat: api.HTMLMediaElement.seeking
---

{{APIRef("HTML DOM")}}

The readonly **`seeking`** property of the {{domxref("HTMLMediaElement")}} interface is a boolean indicating whether the media, the {{htmlelement("audio")}} or {{htmlelement("audio")}}, is in the process of seeking to a new position.

## Value

A boolean value.

## Examples

```js
const el = document.querySelector("video");
console.log(el.seeking); // true or false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLMediaElement.seeking_event", "seeking")}} event
- {{domxref("HTMLMediaElement.seeked_event", "seeked")}} event
- {{domxref("HTMLMediaElement")}}
- {{domxref("HTMLVideoElement")}}
- {{domxref("HTMLAudioElement")}}
