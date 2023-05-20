---
title: "ImageTrackList: selectedIndex property"
short-title: selectedIndex
slug: Web/API/ImageTrackList/selectedIndex
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.ImageTrackList.selectedIndex
---

{{APIRef("WebCodecs API")}}{{SeeCompatTable}}

The **`selectedIndex`** property of the {{domxref("ImageTrackList")}} interface returns the `index` of the selected track.

## Value

An integer.

## Examples

The following example prints the value of `selectedIndex` to the console.

```js
let tracks = imageDecoder.tracks;
console.log(tracks.selectedIndex);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
