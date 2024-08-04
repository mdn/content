---
title: "MediaMetadata: MediaMetadata() constructor"
short-title: MediaMetadata()
slug: Web/API/MediaMetadata/MediaMetadata
page-type: web-api-constructor
browser-compat: api.MediaMetadata.MediaMetadata
---

{{APIRef("Media Session API")}}

The **`MediaMetadata()`** constructor creates a new
{{domxref("MediaMetadata")}} object.

## Syntax

```js-nolint
new MediaMetadata()
new MediaMetadata(metadata)
```

### Parameters

- `metadata` {{optional_inline}}

  - : The metadata parameters are as follows:

    - `album` {{optional_inline}}
      - : The name of the album, or collection, containing the media to be played. It defaults to the empty string (`""`).
    - `artist` {{optional_inline}}
      - : The name of the artist, group, or creator, of the media to be played. It defaults to the empty string (`""`).
    - `artwork` {{optional_inline}}
      - : An {{jsxref("Array")}} of objects that represent images associated with the playing media that defaults to be an empty array. The object structure is:
        - `src`
          - : The URL from which the user agent fetches the image's data.
        - `sizes` {{optional_inline}}
          - : Specifies the resource in multiple sizes so the user agent doesn't have to scale a single image. It defaults to the empty string (`""`).
        - `type` {{optional_inline}}
          - : The {{Glossary("MIME type")}} hint for the user agent that allows it to ignore images of types that it doesn't support. However, the user agent may still use MIME type sniffing after downloading the image to determine its type. It defaults to the empty string (`""`).
    - `chapterInfo` {{optional_inline}}
      - : An array of {{domxref("ChapterInformation")}} object instances representing the chapter information metadata associated with the media. The object structure is:
        - `artwork` {{optional_inline}}
          - : An {{jsxref("Array")}} of `artwork` objects (see above) representing images associated with the chapter. If omitted, `artwork` defaults to an empty array.
        - `startTime` {{optional_inline}}
          - : A number representing the chapter's start time in seconds. If omitted, `startTime` defaults to `0`.
        - `title` {{optional_inline}}
          - : A string representing the title of the chapter. If omitted, `title` defaults to the empty string (`""`).
    - `title` {{optional_inline}}
      - : The title of the media to be played. It defaults to the empty string (`""`).

## Example

The following example creates a new {{domxref("MediaMetadata")}} object using the
correct format of metadata.

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
