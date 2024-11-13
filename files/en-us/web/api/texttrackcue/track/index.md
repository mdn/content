---
title: "TextTrackCue: track property"
short-title: track
slug: Web/API/TextTrackCue/track
page-type: web-api-instance-property
browser-compat: api.TextTrackCue.track
---

{{APIRef("WebVTT")}}

The **`track`** read-only property of the {{domxref("TextTrackCue")}} interface returns the {{domxref("TextTrack")}} object that this cue belongs to.

## Value

A {{domxref("TextTrack")}} object.

## Examples

In the following example a new {{domxref("VTTCue")}} (which inherits from `TextTrackCue`) is created, then added to a track. The value of `track` is printed to the console.

```js
const video = document.querySelector("video");
const captionTrack = video.addTextTrack("captions", "Captions", "en");
captionTrack.mode = "showing";

const cue1 = new VTTCue(0, 0.9, "Hildy!");
captionTrack.addCue(cue1);
console.log(cue1.track); // a TextTrack object.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
