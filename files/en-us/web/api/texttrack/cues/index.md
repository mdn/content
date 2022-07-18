---
title: TextTrack.cues
slug: Web/API/TextTrack/cues
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - cues
  - TextTrack
browser-compat: api.TextTrack.cues
---
{{APIRef("WebVTT")}}

The **`cues`** read-only property of the {{domxref("TextTrack")}} interface returns a {{domxref("TextTrackCueList")}} object containing all of the track's cues.

## Value

A {{domxref("TextTrackCueList")}} object.

## Examples

In the following example two cues are added to a video text track using `addCue()`. The value of `cues` is printed to the console. The returned {{domxref("TextTrackCueList")}} object contains the two cues.

```js
let video = document.querySelector('video');
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";
track.addCue(new VTTCue(0, 0.9, 'Hildy!'));
track.addCue(new VTTCue(1, 1.4, 'How are you?'));
console.log(track.cues);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
