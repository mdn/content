---
title: ImageTrack.repetitionCount
slug: Web/API/ImageTrack/repetitionCount
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - repetitionCount
  - ImageTrack
  - Experimental
browser-compat: api.ImageTrack.repetitionCount
---
{{APIRef("WebCodecs API")}}{{SeeCompatTable}}

The **`repetitionCount`**  property of the {{domxref("ImageTrack")}} interface returns the number of repetitions of this track.

## Value

An integer.

## Examples

The following example prints the value of `repetitionCount` to the console.

```js
let track = imageDecoder.tracks.selectedTrack;
console.log(track.repetitionCount);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
