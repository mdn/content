---
title: TextTrack.activeCues
slug: Web/API/TextTrack/activeCues
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - activeCues
  - TextTrack
browser-compat: api.TextTrack.activeCues
---
{{APIRef("WebVTT")}}

The **`activeCues`** read-only property of the {{domxref("TextTrack")}} interface returns a {{domxref("TextTrackCueList")}} object listing the currently active cues.

## Value

A {{domxref("TextTrackCueList")}} object.

## Examples

The following example adds a new `TextTrack` to a video. The `activeCues` are printed to the console.

```js
let video = document.querySelector('video');
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";
console.log(track.activeCues);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
