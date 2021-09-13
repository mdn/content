---
title: VTTCue.position
slug: Web/API/VTTCue/position
tags:
  - API
  - Property
  - Reference
  - position
  - VTTCue
browser-compat: api.VTTCue.position
---
{{APIRef("WebVTT")}}

The **`position`** property of the {{domxref("VTTCue")}} interface represents the indentation of the cue within the line.

## Syntax

```js
let position = VTTCue.position;
VTTCue.position = "auto";
```

### Value

A number, or `"auto"` representing the identation of the cue within the line.

## Examples

In the following example a new {{domxref("VTTCue")}} is created, then the value of `position` is set to `2`. The value is then printed to the console.

```js
let video = document.querySelector('video');
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";

let cue1 = new VTTCue(0, 0.9, 'Hildy!');
cue1.position = '2';
console.log(cue1.position);

track.addCue(cue1);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
