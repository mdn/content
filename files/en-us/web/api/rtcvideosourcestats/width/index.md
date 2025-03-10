---
title: "RTCVideoSourceStats: width property"
short-title: width
slug: Web/API/RTCVideoSourceStats/width
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_media-source.width
---

{{APIRef("WebRTC")}}

The **`width`** property of the {{domxref("RTCVideoSourceStats")}} dictionary indicates the width, in pixels, of the last frame originating from this source.

This property is not defined on the stats object until after the first frame has been produced.

## Value

A positive number indicating the width, in pixels.

## Examples

This example shows how you might iterate the stats object returned from `RTCRtpSender.getStats()` to get the video source stats, and then extract the `width`.

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
const height = videoSourceStats?.width;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
