---
title: "TextTrackCueList: getCueById() method"
short-title: getCueById()
slug: Web/API/TextTrackCueList/getCueById
page-type: web-api-instance-method
browser-compat: api.TextTrackCueList.getCueById
---

{{APIRef("WebVTT")}}

The **`getCueById()`** method of the {{domxref("TextTrackCueList")}} interface returns the first {{domxref("VTTCue")}} in the list represented by the `TextTrackCueList` object whose identifier matches the value of `id`.

## Syntax

```js-nolint
getCueById(id)
```

### Parameters

- `id`
  - : A string which is an identifier for the cue.

### Return value

A {{domxref("VTTCue")}} object.

## Examples

The {{domxref("TextTrack.cues")}} property returns a {{domxref("TextTrackCueList")}} containing the current cues for that particular track. Calling `cues.getCueById("second")` returns the {{domxref("VTTCue")}} with an ID of "second".

```
WEBVTT

first
00:00:00.000 --> 00:00:00.999 line:80%
Hildy!

second
00:00:01.000 --> 00:00:01.499 line:80%
How are you?
```

```js
const video = document.getElementById("video");
video.onplay = () => {
  console.log(video.textTracks[0].cues.getCueById("second")); // a VTTCue object;
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
