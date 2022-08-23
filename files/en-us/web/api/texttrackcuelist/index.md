---
title: TextTrackCueList
slug: Web/API/TextTrackCueList
page-type: web-api-interface
tags:
  - API
  - Interface
  - Reference
  - TextTrackCueList
  - WebVTT
  - Media
browser-compat: api.TextTrackCueList
---
{{APIRef("WebVTT")}}

The **`TextTrackCueList`** array-like object represents a dynamically updating list of {{domxref("TextTrackCue")}} objects.

This interface has no constructor. Retrieve an instance of this object with {{domxref('TextTrack.cues')}} which returns all of the cues in a {{domxref("TextTrack")}} object.

## Properties

- {{domxref('TextTrackCueList.length')}} {{ReadOnlyInline}}
  - : An `unsigned long` that is the number of cues in the list.

## Methods

- {{domxref('TextTrackCueList.getCueById()')}}
  - : Returns the first {{domxref('TextTrackCue')}} object with the identifier passed to it.

## Examples

The {{domxref("HTMLMediaElement.textTracks")}} property returns a {{domxref("TextTrackList")}} object listing all of the {{domxref("TextTrack")}} objects, one for each text track linked to the media. The {{domxref("TextTrack.cues")}} property then returns a `TextTrackCueList` containing the cues for that particular track.

```js
const video = document.getElementById("video");
video.onplay = () => {
  console.log(video.textTracks[0].cues);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
