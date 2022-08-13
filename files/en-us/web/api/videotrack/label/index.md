---
title: VideoTrack.label
slug: Web/API/VideoTrack/label
page-type: web-api-instance-property
tags:
  - API
  - HTML DOM
  - Media
  - Property
  - Read-only
  - Reference
  - Video
  - Video Track
  - VideoTrack
  - label
  - metadata
  - track
browser-compat: api.VideoTrack.label
---
{{APIRef("HTML DOM")}}

The read-only **{{domxref("VideoTrack")}}**
property **`label`** returns a string specifying the video
track's human-readable label, if one is available; otherwise, it returns an empty
string.

## Value

A string specifying the track's human-readable label, if one is
available in the track metadata. Otherwise, an empty string (`""`) is
returned.

For example, a track whose {{domxref("VideoTrack.kind", "kind")}} is
`"sign"` might have a `label` such as
`"A sign-language interpretation."`.

## Examples

This example returns an array of track kinds and labels for potential use in a user
interface to select video tracks for a specified media element. The list is filtered to
only allow certain track kinds through.

```js
function getTrackList(el) {
  const trackList = [];
  const wantedKinds = [
    "main", "alternative", "commentary"
  ];

  el.videoTracks.forEach((track) => {
    if (wantedKinds.includes(track.kind)) {
      trackList.push({
        id: track.id,
        kind: track.kind,
        label: track.label
      });
    }
  });
  return trackList;
}
```

The resulting `trackList` contains an array of video tracks whose
`kind` is one of those in the array `wantedKinds`, with each entry
providing the track's {{domxref("VideoTrack.id", "id")}}, {{domxref("VideoTrack.kind",
  "kind")}}, and {{domxref("VideoTrack.label", "label")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
