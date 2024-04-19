---
title: "RTCVideoSourceStats: frames property"
short-title: frames
slug: Web/API/RTCVideoSourceStats/frames
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_media-source.frames
---

{{APIRef("WebRTC")}}

The **`frames`** property of the {{domxref("RTCVideoSourceStats")}} dictionary indicates the total number of frames originating from this video source over its lifetime.

## Value

A number indicating the total number of frames originating from this source.

## Examples

This example shows how you might iterate the stats object returned from `RTCRtpSender.getStats()` to get the video source stats, and then extract the `frames`.

```js
// where sender is an RTCRtpSender
const stats = await sender.getStats();
let videoSourceStats = null;

stats.forEach((report) => {
  if (report.type === "media-source" && report.kind==="video") {
    videoSourceStats = report;
    break;
  }
});

const frames = videoSourceStats?.frames;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
