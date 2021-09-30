---
title: ImageTrackList.selectedTrack
slug: Web/API/ImageTrackList/selectedTrack
tags:
  - API
  - Property
  - Reference
  - selectedTrack
  - ImageTrackList
browser-compat: api.ImageTrackList.selectedTrack
---
{{DefaultAPISidebar("WebCodecs API")}}

The **`selectedTrack`** property of the {{domxref("ImageTrackList")}} interface returns an {{domxref("ImageTrack")}} object representing the currently selected track.

### Value

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


