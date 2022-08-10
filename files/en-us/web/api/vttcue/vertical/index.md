---
title: VTTCue.vertical
slug: Web/API/VTTCue/vertical
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - vertical
  - VTTCue
browser-compat: api.VTTCue.vertical
---
{{APIRef("WebVTT")}}

The **`vertical`** property of the {{domxref("VTTCue")}} interface is a string representing the cue's writing direction.

## Value

A string containing one of the following values:

- `""` (an empty string)
  - : Represents a horizontal writing direction.
- `"rl"`
  - : Represents a vertical writing direction growing to the left.
- `"lr"`
  - : Represents a vertical writing direction growing to the right.

## Examples

In the following example a new {{domxref("VTTCue")}} is created, then the value of `vertical` is set to `"rl"`. The value is then printed to the console.

```js
let video = document.querySelector('video');
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";

let cue1 = new VTTCue(0, 0.9, 'Hildy!');
cue1.vertical = 'rl';
console.log(cue1.vertical);

track.addCue(cue1);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
