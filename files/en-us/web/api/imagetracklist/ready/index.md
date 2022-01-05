---
title: ImageTrackList.ready
slug: Web/API/ImageTrackList/ready
tags:
  - API
  - Property
  - Reference
  - ready
  - ImageTrackList
browser-compat: api.ImageTrackList.ready
---
{{DefaultAPISidebar("WebCodecs API")}}

The **`ready`** property of the {{domxref("ImageTrackList")}} interface returns a {{jsxref("Promise")}} that resolves when the `ImageTrackList` is populated with {{domxref("ImageTrack","tracks")}}.

### Value

A {{jsxref("Promise")}} that resolves with {{jsxref("Undefined")}}.

## Examples

The following example prints the value of `ready` to the console, this will be `Undefined` once the promise resolves.

```js
let tracks = imageDecoder.tracks;
let ready = await tracks.ready;
console.log(ready);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}


