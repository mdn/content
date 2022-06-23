---
title: TextTrackCue.track
slug: Web/API/TextTrackCue/track
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - track
  - TextTrackCue
browser-compat: api.TextTrackCue.track
---
{{APIRef("WebVTT")}}

The **`track`** read-only property of the {{domxref("TextTrackCue")}} interface returns the {{domxref("TextTrack")}} object that this cue belongs to.

## Value

A {{domxref("TextTrack")}} object.

## Examples

In the following example a new {{domxref("VTTCue")}} (which inherits from `TextTrackCue`) is created, then added to a track. The value of `track` is printed to the console.

```js
let video = document.querySelector('video');
let captiontrack = video.addTextTrack("captions", "Captions", "en");
captiontrack.mode = "showing";

let cue1 = new VTTCue(0, 0.9, 'Hildy!');
captiontrack.addCue(cue1);
console.log(cue1.track); // a TextTrack object.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
