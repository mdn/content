---
title: "TextTrack: inBandMetadataTrackDispatchType property"
short-title: inBandMetadataTrackDispatchType
slug: Web/API/TextTrack/inBandMetadataTrackDispatchType
page-type: web-api-instance-property
browser-compat: api.TextTrack.label
---

{{APIRef("WebVTT")}}

The **`inBandMetadataTrackDispatchType`** read-only property of the {{domxref("TextTrack")}} interface returns the text track's in-band metadata dispatch type of the text track represented by the {{domxref("TextTrack")}} object.

An in-band metadata dispatch type is a string extracted from a media resource specifically for in-band metadata tracks. An example of a media resource that might have such tracks is a TV station streaming a broadcast on the web. Text Tracks may be used to include metadata for ad targeting, additional information such as recipe data during a cooking show, or trivia game data during a game show.

The value of this attribute could be used to attach these tracks to dedicated script modules as they are loaded.

## Value

A string containing the `inBandMetadataTrackDispatchType`, or an empty string.

## Examples

In the following example the value of `inBandMetadataTrackDispatchType` is printed to the console.

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";
console.log(track.inBandMetadataTrackDispatchType);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
