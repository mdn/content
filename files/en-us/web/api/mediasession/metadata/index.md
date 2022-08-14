---
title: MediaSession.metadata
slug: Web/API/MediaSession/metadata
page-type: web-api-instance-property
tags:
  - Audio
  - Media
  - Media Session API
  - MediaSession
  - Property
  - Reference
  - Video
  - metadata
browser-compat: api.MediaSession.metadata
---
{{APIRef("Media Session API")}}

The **`metadata`** property of the {{domxref("MediaSession")}}
interface contains a {{domxref("MediaMetadata")}} object providing descriptive
information about the currently playing media, or `null` if the metadata has
not been set. This metadata is provided by the browser to the device for presentation in
any standard media control user interface the device might offer.

## Value

An instance of {{domxref("MediaMetadata")}} containing information about the media
currently being played.

## Example

The following example checks for compatibility and creates a new media session with the
relevant metadata:

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
