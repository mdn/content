---
title: MediaMetadata()
slug: Web/API/MediaMetadata/MediaMetadata
page-type: web-api-constructor
tags:
  - Audio
  - Media
  - Media Session API
  - MediaMetadata
  - MediaSession
  - Property
  - Reference
  - Video
  - artwork
browser-compat: api.MediaMetadata.MediaMetadata
---
{{APIRef("Media Session API")}}

The **`MediaMetadata()`** constructor creates a new
{{domxref("MediaMetadata")}} object.

## Syntax

```js
new MediaMetadata()
new MediaMetadata(metadata)
```

### Parameters

- `metadata` {{optional_inline}}

  - : The metadata parameters are as follows:

    - `title`: The title of the media to be played.
    - `artist`: The name of the artist, group, creator, etc. of the media
      to be played.
    - `album`: The name of the album, or collection, containing the media
      to be played.
    - `artwork`: An array of images associated with the playing media.

## Example

The following example creates a new {{domxref("MediaMetadata")}} object using the
correct format of metadata.

```js
if ('mediaSession' in navigator){
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
