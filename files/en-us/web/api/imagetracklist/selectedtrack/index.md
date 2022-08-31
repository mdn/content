---
title: ImageTrackList.selectedTrack
slug: Web/API/ImageTrackList/selectedTrack
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - selectedTrack
  - ImageTrackList
  - Experimental
browser-compat: api.ImageTrackList.selectedTrack
---
{{APIRef("WebCodecs API")}}{{SeeCompatTable}}

The **`selectedTrack`** property of the {{domxref("ImageTrackList")}} interface returns an {{domxref("ImageTrack")}} object representing the currently selected track.

## Value

An {{domxref("ImageTrack")}} object.

## Examples

The following example returns the `selectedTrack` then prints it to the console.

```js
let track = imageDecoder.tracks.selectedTrack;
console.log(track);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
