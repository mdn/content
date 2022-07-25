---
title: VTTCue.align
slug: Web/API/VTTCue/align
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - align
  - VTTCue
browser-compat: api.VTTCue.align
---
{{APIRef("WebVTT")}}

The **`align`** property of the {{domxref("VTTCue")}} interface represents the alignment of all of the lines of text in the text box.

## Value

A string containing one of the following values:

- `"start"`
  - : Start alignment.
- `"center"`
  - : Center alignment.
- `"end"`
  - : End alignment.
- `"left"`
  - : Left alignment.
- `"right"`
  - : Right alignment.

## Examples

In the following example a new {{domxref("VTTCue")}} is created, then the value of `align` is set to `"start"`. The value is then printed to the console.

```js
let video = document.querySelector('video');
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";

let cue1 = new VTTCue(0, 0.9, 'Hildy!');
cue1.align = 'start';
console.log(cue1.align);

track.addCue(cue1);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
