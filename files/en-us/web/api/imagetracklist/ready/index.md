---
title: ImageTrackList.ready
slug: Web/API/ImageTrackList/ready
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - ready
  - ImageTrackList
  - Experimental
browser-compat: api.ImageTrackList.ready
---
{{APIRef("WebCodecs API")}}{{SeeCompatTable}}

The **`ready`** property of the {{domxref("ImageTrackList")}} interface returns a {{jsxref("Promise")}} that resolves when the `ImageTrackList` is populated with {{domxref("ImageTrack","tracks")}}.

## Value

A {{jsxref("Promise")}} that resolves with {{jsxref("undefined")}}.

## Examples

The following example prints the value of `ready` to the console, this will be `undefined` once the promise resolves.

```js
let tracks = imageDecoder.tracks;
let ready = await tracks.ready;
console.log(ready);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
