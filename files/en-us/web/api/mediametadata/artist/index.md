---
title: MediaMetadata.artist
slug: Web/API/MediaMetadata/artist
page-type: web-api-instance-property
tags:
  - Audio
  - Media
  - Media Session API
  - MediaMetadata
  - Property
  - Reference
  - Video
  - artist
  - Property
browser-compat: api.MediaMetadata.artist
---
{{APIRef("Media Session API")}}

The **`artist`** property of the
{{domxref("MediaMetaData")}} interface returns or sets the name of the artist, group,
creator, etc., of the media to be played.

## Value

A {{jsxref("String")}} containing the name of the artist.

## Examples

The following example checks for browser compatibility and sets the current metadata
for the media session.

```js
if ('mediaSession' in navigator) {
  navigator.mediaSession.metadata = new MediaMetadata({
    title: 'Unforgettable',
    artist: 'Nat King Cole',
    album: 'The Ultimate Collection (Remastered)',
    artwork: [
      { src: 'https://dummyimage.com/96x96',   sizes: '96x96',   type: 'image/png' },
      { src: 'https://dummyimage.com/128x128', sizes: '128x128', type: 'image/png' },
      { src: 'https://dummyimage.com/192x192', sizes: '192x192', type: 'image/png' },
      { src: 'https://dummyimage.com/256x256', sizes: '256x256', type: 'image/png' },
      { src: 'https://dummyimage.com/384x384', sizes: '384x384', type: 'image/png' },
      { src: 'https://dummyimage.com/512x512', sizes: '512x512', type: 'image/png' },
    ]
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
