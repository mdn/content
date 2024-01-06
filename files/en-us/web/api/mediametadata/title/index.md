---
title: "MediaMetadata: title property"
short-title: title
slug: Web/API/MediaMetadata/title
page-type: web-api-instance-property
browser-compat: api.MediaMetadata.title
---

{{APIRef("Media Session API")}}

The **`title`** property of the
{{domxref("MediaMetaData")}} interface returns or sets the title of the media to be
played.

## Value

A {{jsxref("String")}} containing the title of the media.

## Examples

The following example checks for browser compatibility and sets the current metadata
for the media session.

```js
if ("mediaSession" in navigator) {
  navigator.mediaSession.metadata = new MediaMetadata({
    title: "Unforgettable",
    artist: "Nat King Cole",
    album: "The Ultimate Collection (Remastered)",
    artwork: [
      {
        src: "https://dummyimage.com/96x96",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "https://dummyimage.com/128x128",
        sizes: "128x128",
        type: "image/png",
      },
      {
        src: "https://dummyimage.com/192x192",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "https://dummyimage.com/256x256",
        sizes: "256x256",
        type: "image/png",
      },
      {
        src: "https://dummyimage.com/384x384",
        sizes: "384x384",
        type: "image/png",
      },
      {
        src: "https://dummyimage.com/512x512",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
