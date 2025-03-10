---
title: MediaMetadata
slug: Web/API/MediaMetadata
page-type: web-api-interface
browser-compat: api.MediaMetadata
---

{{APIRef("Media Session API")}}

The **`MediaMetadata`** interface of the {{domxref("Media Session API", "", "", "nocode")}} allows a web page to provide rich media metadata for display in a platform UI.

## Constructor

- {{domxref("MediaMetadata.MediaMetadata", "MediaMetadata()")}}
  - : Creates a new `MediaMetaData` object.

## Instance properties

- {{domxref("MediaMetadata.album")}}
  - : Returns or sets the name of the album or collection containing the media to be played.
- {{domxref("MediaMetadata.artist")}}
  - : Returns or sets the name of the artist, group, creator, etc. of the media to be played.
- {{domxref("MediaMetadata.artwork")}}
  - : Returns or sets an array of images associated with playing media.
- {{domxref("MediaMetadata.chapterInfo")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Returns an array of chapter information metadata associated with playing media, represented by {{domxref("ChapterInformation")}} object instances.
- {{domxref("MediaMetadata.title")}}
  - : Returns or sets the title of the media to be played.

## Examples

The following example checks for browser compatibility and sets the current metadata for the media session.

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
