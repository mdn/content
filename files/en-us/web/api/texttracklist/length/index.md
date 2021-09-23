---
title: TextTrackList.length
slug: Web/API/TextTrackList/length
tags:
  - API
  - HTML DOM
  - Media
  - Property
  - Read-only
  - Reference
  - TextTrackList
  - length
  - list
  - track
browser-compat: api.TextTrackList.length
---
{{APIRef("HTML DOM")}}

The read-only **{{domxref("TextTrackList")}}**
property **`length`** returns the number of entries in the
`TextTrackList`, each of which is a {{domxref("TextTrack")}} representing
one track in the media element.

A value of 0 indicates that there are no text
tracks in the media.

## Syntax

```js
var trackCount = TextTrackList.length;
```

### Value

A number indicating how many text tracks are included in the
`TextTrackList`. Each track can be accessed by treating the
`TextTrackList` as an array of objects of type {{domxref("TextTrack")}}.

## Example

This snippet gets the number of text tracks in the first media element found in the
{{Glossary("DOM")}} by {{domxref("Document.querySelector", "querySelector()")}}.

```js
var mediaElem = document.querySelector("video, audio");
var numTextTracks = 0;

if (mediaElem.textTracks) {
  numTextTracks = mediaElem.textTracks.length;
}
```

Note that this sample checks to be sure {{domxref("HTMLMediaElement.textTracks")}} is
defined, to avoid failing on browsers without support for {{domxref("TextTrack")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
