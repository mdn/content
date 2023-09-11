---
title: "ImageTrack: animated property"
short-title: animated
slug: Web/API/ImageTrack/animated
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.ImageTrack.animated
---

{{APIRef("WebCodecs API")}}{{SeeCompatTable}}

The **`animated`** property of the {{domxref("ImageTrack")}} interface returns `true` if the track is animated and therefore has multiple frames.

## Value

A {{jsxref("boolean")}}, if `true` this is an animated track.

## Examples

The following example prints the value of `animated` to the console.

```js
let track = imageDecoder.tracks.selectedTrack;
console.log(track.animated);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
