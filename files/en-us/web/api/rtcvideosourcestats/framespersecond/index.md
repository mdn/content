---
title: "RTCVideoSourceStats: framesPerSecond property"
short-title: framesPerSecond
slug: Web/API/RTCVideoSourceStats/framesPerSecond
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_media-source.framesPerSecond
---

{{APIRef("WebRTC")}}

The **`framesPerSecond`** property of the {{domxref("RTCVideoSourceStats")}} dictionary indicates the number of frames originating from this video source in the last second.

The property is not defined on the stats object for the first second of its lifetime.

## Value

A number indicating the frames originating from this source in the last second.

## Examples

This example shows how you might iterate the stats object returned from `RTCRtpSender.getStats()` to get the video source stats, and then extract the `framesPerSecond`.

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

// Note, test is conditional in case the stats object
// does not include video source stats
const fps = videoSourceStats?.framesPerSecond;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
