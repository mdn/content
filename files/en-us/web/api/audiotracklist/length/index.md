---
title: AudioTrackList.length
slug: Web/API/AudioTrackList/length
tags:
  - API
  - Audio
  - AudioTrackList
  - HTML DOM
  - Media
  - Property
  - Read-only
  - Reference
  - length
  - list
  - track
browser-compat: api.AudioTrackList.length
---
{{APIRef("HTML DOM")}}

The read-only **{{domxref("AudioTrackList")}}**
property **`length`** returns the number of entries in the
`AudioTrackList`, each of which is an {{domxref("AudioTrack")}}
representing one audio track in the media element. A value of 0 indicates that
there are no audio tracks in the media.

## Syntax

```js
var trackCount = AudioTrackList.length;
```

### Value

A number indicating how many audio tracks are included in the
`AudioTrackList`. Each track can be accessed by treating the
`AudioTrackList` as an array of objects of type {{domxref("AudioTrack")}}.

## Example

This snippet gets the number of audio tracks in the first {{HTMLElement("video")}}
element found in the {{Glossary("DOM")}} by {{domxref("Document.querySelector",
  "querySelector()")}}.

```js
var videoElem = document.querySelector("video");
var numAudioTracks = 0;

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
