---
title: "AudioTrackList: length property"
short-title: length
slug: Web/API/AudioTrackList/length
page-type: web-api-instance-property
browser-compat: api.AudioTrackList.length
---

{{APIRef("HTML DOM")}}

The read-only **{{domxref("AudioTrackList")}}**
property **`length`** returns the number of entries in the
`AudioTrackList`, each of which is an {{domxref("AudioTrack")}}
representing one audio track in the media element. A value of 0 indicates that
there are no audio tracks in the media.

## Value

A number indicating how many audio tracks are included in the
`AudioTrackList`. Each track can be accessed by treating the
`AudioTrackList` as an array of objects of type {{domxref("AudioTrack")}}.

## Examples

This snippet gets the number of audio tracks in the first {{HTMLElement("video")}}
element found in the {{Glossary("DOM")}} by {{domxref("Document.querySelector",
  "querySelector()")}}.

```js
const videoElem = document.querySelector("video");
let numAudioTracks = 0;

if (videoElem.audioTracks) {
  numAudioTracks = videoElem.audioTracks.length;
}
```

Note that this sample checks to be sure {{domxref("HTMLMediaElement.audioTracks")}} is
defined, to avoid failing on browsers without support for {{domxref("AudioTrack")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
