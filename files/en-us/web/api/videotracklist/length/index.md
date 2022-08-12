---
title: VideoTrackList.length
slug: Web/API/VideoTrackList/length
page-type: web-api-instance-property
tags:
  - API
  - HTML DOM
  - Media
  - Property
  - Read-only
  - Reference
  - Video
  - VideoTrackList
  - length
  - list
  - track
browser-compat: api.VideoTrackList.length
---
{{APIRef("HTML DOM")}}

The read-only **{{domxref("VideoTrackList")}}**
property **`length`** returns the number of entries in the
`VideoTrackList`, each of which is a {{domxref("VideoTrack")}} representing
one video track in the media element.

A value of 0 indicates that there are no
video tracks in the media.

## Value

A number indicating how many video tracks are included in the
`VideoTrackList`. Each track can be accessed by treating the
`VideoTrackList` as an array of objects of type {{domxref("VideoTrack")}}.

## Examples

This snippet gets the number of video tracks in the first {{HTMLElement("video")}}
element found in the {{Glossary("DOM")}} by {{domxref("Document.querySelector",
  "querySelector()")}}.

```js
const videoElem = document.querySelector("video");
let numVideoTracks = 0;

if (videoElem.videoTracks) {
  numVideoTracks = videoElem.videoTracks.length;
}
```

Note that this sample checks to be sure {{domxref("HTMLMediaElement.videoTracks")}} is
defined, to avoid failing on browsers without support for {{domxref("VideoTrack")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
