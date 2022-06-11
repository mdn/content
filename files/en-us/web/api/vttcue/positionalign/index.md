---
title: VTTCue.positionAlign
slug: Web/API/VTTCue/positionAlign
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - positionAlign
  - VTTCue
browser-compat: api.VTTCue.positionAlign
---
{{APIRef("WebVTT")}}

The **`positionAlign`** property of the {{domxref("VTTCue")}} interface is used to determine what {{domxref("VTTCue.position")}} is anchored to.

## Value

A string containing one of the following values:

- `"line-left"`
  - : Line-left alignment.
- `"center"`
  - : Center alignment.
- `"line-right"`
  - : Line-right alignment.
- `"auto"`

  - : Automatic alignment, which depends on the text alignment of the cue, interpreted as follows:

    - **line-left:** if the text alignment is left, the cue is using a LTR language and the text alignment is start, or the cue is using a RTL language and the text alignment is end.
    - **line-right:** if the text alignment is right, the cue is using a RTL language and the text alignment is start, or the cue is using a LTR language and the text-alignment is end.
    - **center:** if there is no text alignment position set.

## Examples

In the following example a new {{domxref("VTTCue")}} is created, then the value of `positionAlign` is set to `"line-right"`. The value is then printed to the console.

```js
let video = document.querySelector('video');
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";

let cue1 = new VTTCue(0, 0.9, 'Hildy!');
cue1.positionAlign = 'line-right';
console.log(cue1.positionAlign);

track.addCue(cue1);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
