---
title: "VideoTrackGenerator: muted property"
short-title: muted
slug: Web/API/VideoTrackGenerator/muted
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.VideoTrackGenerator.muted
---

{{APIRef("Insertable Streams for MediaStreamTrack API")}}{{SeeCompatTable}}

The **`muted`** Boolean property of the {{domxref("VideoTrackGenerator")}} interface can be used to temporarily halt or resume the generation of video frames in the output track.

## Value

A boolean.

## Examples

To pause production of video frames:

```js
videoTrackGenerator.muted = true;
```

To resume production of video frames:

```js
videoTrackGenerator.muted = false;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
