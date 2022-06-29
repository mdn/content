---
title: HTMLMediaElement.ended
slug: Web/API/HTMLMediaElement/ended
page-type: web-api-instance-property
tags:
  - API
  - HTML DOM
  - HTMLMediaElement
  - Property
  - Read-only
  - Web
  - ended
browser-compat: api.HTMLMediaElement.ended
---
{{APIRef("HTML DOM")}}

The **`HTMLMediaElement.ended`** indicates whether the media
element has ended playback.

## Value

A boolean value which is `true` if the media contained in the
element has finished playing.

If the source of the media is a {{domxref("MediaStream")}}, this value is
`true` if the value of the stream's {{domxref("MediaStream.active",
  "active")}} property is `false`.

## Examples

```js
const obj = document.createElement('video');
console.log(obj.ended); // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining it, {{domxref("HTMLMediaElement")}}.
- {{domxref("MediaStream")}}
- {{domxref("MediaStream.active")}}
