---
title: ImageTrack.frameCount
slug: Web/API/ImageTrack/frameCount
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - frameCount
  - ImageTrack
  - Experimental
browser-compat: api.ImageTrack.frameCount
---
{{APIRef("WebCodecs API")}}{{SeeCompatTable}}

The **`frameCount`** property of the {{domxref("ImageTrack")}} interface returns the number of frames in the track.

## Value

An integer.

## Examples

The following example prints the value of `frameCount` to the console.

```js
let track = imageDecoder.tracks.selectedTrack;
console.log(track.frameCount);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
