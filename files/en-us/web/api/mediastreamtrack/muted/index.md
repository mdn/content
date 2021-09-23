---
title: MediaStreamTrack.muted
slug: Web/API/MediaStreamTrack/muted
tags:
  - API
  - Media Capture and Streams
  - MediaStreamTrack
  - Property
  - Read-only
  - Reference
  - muted
browser-compat: api.MediaStreamTrack.muted
---
{{APIRef("Media Capture and Streams")}}

The **`muted`** read-only property of the
{{domxref("MediaStreamTrack")}} interface returns a {{jsxref('Boolean')}} value
indicating whether or not the track is currently unable to provide media output.

> **Note:** To implement a way for users to mute and unmute a track, use the
> {{domxref("MediaStreamTrack.enabled", "enabled")}} property. When a track is disabled
> by setting `enabled` to `false`, it generates only empty frames
> (audio frames in which every sample is 0, or video frames in which every pixel is
> black).

## Syntax

```js
const mutedFlag = track.muted
```

### Value

A {{jsxref('Boolean')}} which is `true` if the track is currently muted, or
`false` if the track is currently unmuted.

> **Note:** When possible, avoid polling `muted` to monitor the track's muting status.
> Instead, add event listeners for the {{event("mute")}} and {{event("unmute")}} events.

## Example

This example counts the number of tracks in an array of {{domxref("MediaStreamTrack")}}
objects which are currently muted.

```js
let mutedCount = 0;

trackList.forEach((track) => {
  if (track.muted) {
    mutedCount += 1;
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
