---
title: "VTTCue: lineAlign property"
short-title: lineAlign
slug: Web/API/VTTCue/lineAlign
page-type: web-api-instance-property
browser-compat: api.VTTCue.lineAlign
---

{{APIRef("WebVTT")}}

The **`lineAlign`** property of the {{domxref("VTTCue")}} interface represents the alignment of this VTT cue.

## Value

A string containing one of the following values:

- `"start"`
  - : Start alignment.
- `"center"`
  - : Center alignment.
- `"end"`
  - : End alignment.

## Examples

In the following example a new {{domxref("VTTCue")}} is created, then the value of `lineAlign` is set to `"center"`. The value is then printed to the console.

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";

let cue1 = new VTTCue(0, 0.9, "Hildy!");
cue1.lineAlign = "center";
console.log(cue1.lineAlign);

track.addCue(cue1);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
