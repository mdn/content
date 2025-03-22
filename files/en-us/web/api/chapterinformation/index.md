---
title: ChapterInformation
slug: Web/API/ChapterInformation
page-type: web-api-interface
status:
  - experimental
browser-compat: api.ChapterInformation
---

{{APIRef("Media Session API")}}{{SeeCompatTable}}

The **`ChapterInformation`** interface of the {{domxref("Media Session API", "", "", "nocode")}} represents the metadata for an individual chapter of a media resource (i.e. a video or audio file).

The chapter information for a given media resource is set when it is first created, via the `chapterInfo` property of the {{domxref("MediaMetadata.MediaMetadata", "MediaMetadata()")}} constructor's initialization object. The property takes an array of `ChapterInformation` objects as its value.

You can access the chapter information for an existing {{domxref("MediaMetadata")}} object via its {{domxref("MediaMetadata.chapterInfo", "chapterInfo")}} property. This returns an array of `ChapterInformation` objects.

## Instance properties

- {{domxref("ChapterInformation.artwork")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Returns an {{jsxref("Array")}} of objects representing images associated with the chapter.
- {{domxref("ChapterInformation.startTime")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Returns a number, in seconds, representing the start time of the chapter.
- {{domxref("ChapterInformation.title")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Returns a string representing the title of the chapter.

## Examples

The sample code below from [Video / Media Session Sample](https://googlechrome.github.io/samples/media-session/video.html) shows a typical structure for the `ChapterInformation` object:

```js
const BASE_URL = "https://storage.googleapis.com/media-session/";

chapterInfo: [
  {
    title: "Chapter 1",
    startTime: 0,
    artwork: [
      {
        src: BASE_URL + "sintel/chapter1-128.png",
        sizes: "128x128",
        type: "image/png",
      },
      {
        src: BASE_URL + "sintel/chapter1-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  {
    title: "Chapter 2",
    startTime: 37,
    artwork: [
      {
        src: BASE_URL + "sintel/chapter2-128.png",
        sizes: "128x128",
        type: "image/png",
      },
      {
        src: BASE_URL + "sintel/chapter2-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
];
```

The following snippet shows how it can be used inside Media Session code (the above object property is part of the `playlist` object referenced below):

```js
function updateMetadata() {
  let track = playlist[index];

  log("Playing " + track.title + " track...");
  navigator.mediaSession.metadata = new MediaMetadata({
    title: track.title,
    artist: track.artist,
    artwork: track.artwork,
    chapterInfo: track.chapterInfo,
  });

  // ...
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaMetadata")}}
