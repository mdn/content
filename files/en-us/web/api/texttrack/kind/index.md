---
title: "TextTrack: kind property"
short-title: kind
slug: Web/API/TextTrack/kind
page-type: web-api-instance-property
browser-compat: api.TextTrack.kind
---

{{APIRef("WebVTT")}}

The **`kind`** read-only property of the {{domxref("TextTrack")}} interface returns the kind of text track this object represents. This decides how the track will be handled by a user agent.

## Value

A string. One of:

- `"subtitles"`
  - : The cues are overlaid on the video. Positioning of the cues is controlled using the properties of an object that inherits from {{domxref("TextTrackCue")}}, for example {{domxref("VTTCue")}}.
- `"captions"`
  - : The cues are overlaid on the video. Positioning of the cues is controlled using the properties of an object that inherits from {{domxref("TextTrackCue")}}, for example {{domxref("VTTCue")}}.
- `"descriptions"`
  - : The cues are made available in a non-visual fashion.
- `"chapters"`
  - : The user agent will make available a mechanism to navigate by selecting a cue.
- `"metadata"`
  - : Additional data related to the media data, which could be used for interactive views.

## Examples

In the following example the value of `kind` is printed to the console.

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";
console.log(track.kind);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
