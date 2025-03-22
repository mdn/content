---
title: TextTrackCueList
slug: Web/API/TextTrackCueList
page-type: web-api-interface
browser-compat: api.TextTrackCueList
---

{{APIRef("WebVTT")}}

The **`TextTrackCueList`** interface of the [WebVTT API](/en-US/docs/Web/API/WebVTT_API) is an array-like object that represents a dynamically updating list of {{domxref("TextTrackCue")}} objects.

An instance of this type is obtained from {{domxref('TextTrack.cues')}} in order to get all the cues in the {{domxref("TextTrack")}} object.
This interface has no constructor.

## Instance properties

- {{domxref('TextTrackCueList.length')}} {{ReadOnlyInline}}
  - : An `unsigned long` that is the number of cues in the list.

## Instance methods

- {{domxref('TextTrackCueList.getCueById()')}}
  - : Returns the first {{domxref('TextTrackCue')}} object with the identifier passed to it.

## Examples

The {{domxref("HTMLMediaElement.textTracks")}} property returns a {{domxref("TextTrackList")}} object listing all of the {{domxref("TextTrack")}} objects, one for each text track linked to the media. The {{domxref("TextTrack.cues")}} property then returns a `TextTrackCueList` containing the cues for that particular track.

```js
const video = document.getElementById("video");
video.onplay = () => {
  console.log(video.textTracks[0].cues);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
