---
title: ImageTrack.frameCount
slug: Web/API/ImageTrack/frameCount
tags:
  - API
  - Property
  - Reference
  - frameCount
  - ImageTrack
browser-compat: api.ImageTrack.frameCount
---
{{DefaultAPISidebar("WebCodecs API")}}

The **`frameCount`** property of the {{domxref("ImageTrack")}} interface returns the number of frames in the track.

### Value

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


