---
title: ImageTrack.selected
slug: Web/API/ImageTrack/selected
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - selected
  - ImageTrack
  - Experimental
browser-compat: api.ImageTrack.selected
---
{{APIRef("WebCodecs API")}}{{SeeCompatTable}}

The **`selected`** property of the {{domxref("ImageTrack")}} interface returns `true` if the track is selected for decoding.

## Value

A {{jsxref("boolean")}}, if `true` the track is selected for decoding.

## Examples

The following example prints the value of `selected` to the console.

```js
let track = imageDecoder.tracks.selectedTrack;
console.log(track.selected); // this is the selected track so should return true.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
