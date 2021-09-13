---
title: TextTrackCue.id
slug: Web/API/TextTrackCue/id
tags:
  - API
  - Property
  - Reference
  - id
  - TextTrackCue
browser-compat: api.TextTrackCue.id
---
{{APIRef("WebVTT")}}

The **`id`** property of the {{domxref("TextTrackCue")}} interface returns and sets the identifier for this cue.

## Syntax

```js
let id = TextTrackCue.id;
TextTrackCue.id = a;
```

### Value

A {{domxref("DOMString","string")}} containing the ID of this cue.

## Examples

In the following example a new {{domxref("VTTCue")}} (which inherits from `TextTrackCue`) is created. The `id` property is then set to "first", before the cue is added.

```js
let video = document.querySelector('video');
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";

let cue1 = new VTTCue(0, 0.9, 'Hildy!');
cue1.id = "first";
track.addCue(cue1);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
