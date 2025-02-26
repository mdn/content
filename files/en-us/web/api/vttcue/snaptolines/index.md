---
title: "VTTCue: snapToLines property"
short-title: snapToLines
slug: Web/API/VTTCue/snapToLines
page-type: web-api-instance-property
browser-compat: api.VTTCue.snapToLines
---

{{APIRef("WebVTT")}}

The **`snapToLines`** property of the {{domxref("VTTCue")}} interface is a {{jsxref("Boolean")}} indicating if the {{domxref("VTTCue.line")}} property is an integer number of lines, or a percentage of the video size.

## Value

A {{jsxref("Boolean")}}.

## Examples

In the following example a new {{domxref("VTTCue")}} is created, then the value of `snapToLines` is set to `true`. The value is then printed to the console.

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";

let cue1 = new VTTCue(0, 0.9, "Hildy!");
cue1.snapToLines = true;
console.log(cue1.snapToLines);

track.addCue(cue1);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
