---
title: VTTCue.text
slug: Web/API/VTTCue/text
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - text
  - VTTCue
browser-compat: api.VTTCue.text
---
{{APIRef("WebVTT")}}

The **`text`** property of the {{domxref("VTTCue")}} interface represents the text contents of the cue.

## Value

A string containing the raw text of the cue.

## Examples

In the following example a new {{domxref("VTTCue")}} is created, then the value of `size` is set to the string `"new cue value"`. The value is then printed to the console.

```js
let video = document.querySelector('video');
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";

let cue1 = new VTTCue(0, 0.9, 'Hildy!');
cue1.text = 'new cue value';
console.log(cue1.text) // 'new cue value';

track.addCue(cue1);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
