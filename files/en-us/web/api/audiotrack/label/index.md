---
title: AudioTrack.label
slug: Web/API/AudioTrack/label
tags:
  - API
  - Audio
  - Audio Track
  - AudioTrack
  - HTML DOM
  - Media
  - Property
  - Read-only
  - Reference
  - label
  - metadata
  - track
browser-compat: api.AudioTrack.label
---
{{APIRef("HTML DOM")}}

The read-only **{{domxref("AudioTrack")}}**
property **`label`** returns a string specifying the audio
track's human-readable label, if one is available; otherwise, it returns an empty
string.

## Syntax

```js
var audioTrackLabel = AudioTrack.label;
```

### Value

A {{domxref("DOMString")}} specifying the track's human-readable label, if one is
available in the track metadata. Otherwise, an empty string (`""`) is
returned.

For example, a track whose {{domxref("AudioTrack.kind", "kind")}} is
`"commentary"` might have a `label` such as
`"Commentary with director Mark Markmarkimark and star Donna Donnalidon"`.

## Example

This example returns an array of track kinds and labels for potential use in a user
interface to select audio tracks for a specified media element. The list is filtered to
only allow certain track kinds through.

```js
function getTrackList(el) {
  var trackList = [];
  const wantedKinds = [
    "main", "alternative", "main-desc", "translation", "commentary"
  ];

  el.audioTracks.forEach(function(track) {
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

The resulting `trackList` contains an array of audio tracks whose
`kind` is one of those in the array `wantedKinds`, with each entry
providing the track's {{domxref("AudioTrack.id", "id")}}, {{domxref("AudioTrack.kind",
  "kind")}}, and {{domxref("AudioTrack.label", "label")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
