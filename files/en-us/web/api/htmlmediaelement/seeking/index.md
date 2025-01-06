---
title: "HTMLMediaElement: seeking property"
short-title: seeking
slug: Web/API/HTMLMediaElement/seeking
page-type: web-api-instance-property
browser-compat: api.HTMLMediaElement.seeking
---

{{APIRef("HTML DOM")}}

The **`seeking`** read-only property of the {{domxref("HTMLMediaElement")}} interface is a Boolean indicating whether the resource, the {{htmlelement("audio")}} or {{htmlelement("video")}}, is in the process of seeking to a new position.

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
- {{domxref("HTMLVideoElement")}}
- {{domxref("HTMLAudioElement")}}
