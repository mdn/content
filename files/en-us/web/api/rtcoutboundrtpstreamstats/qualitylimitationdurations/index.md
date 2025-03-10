---
title: "RTCOutboundRtpStreamStats: qualityLimitationDurations property"
short-title: qualityLimitationDurations
slug: Web/API/RTCOutboundRtpStreamStats/qualityLimitationDurations
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.RTCStatsReport.type_outbound-rtp.qualityLimitationDurations
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

The **`qualityLimitationDurations`** property of the {{domxref("RTCOutboundRtpStreamStats")}} dictionary is a map of the reasons that a media stream's quality has been reduced by a codec during encoding, and the time during which the quality was reduced for each reason.

This quality reduction may include changes such as reduced frame rate or resolution, or an increase in compression factor.
The information can be used to diagnose throughput issues and optimize performance.

> [!NOTE]
> This property only exists for video media.

## Value

A {{jsxref("Map")}} of quality limitation reasons to a number which represents the time in seconds that the stream has been quality limited for that reason.

The allowed quality limitation reason values are the strings:

- `none`
  - : The quality is not limited.
- `cpu`
  - : The quality is primarily limited due to CPU load.
- `bandwidth`
  - : The quality is primarily limited due to congestion cues during bandwidth estimation, such as inter-arrival time and round-trip time.
- `other`
  - : The quality is primarily limited for a reason other than the above.

## Examples

### Get total time the stream has been quality limited

The sum of all entries except `qualityLimitationDurations["none"]` gives the total time that the stream has been limited.

```js
// Get the outbound RTP stream stats
pc.getStats().then((stats) => {
  stats.forEach((report) => {
    if (report.type === "outbound-rtp") {
      const qualityLimitations = report.qualityLimitationDurations;
      if (qualityLimitations) {
        let totalTimeLimited = 0;

        console.log("Quality Limitations:");
        qualityLimitations.forEach((duration, reason) => {
          console.log(`- ${reason}: ${duration} seconds`);
          if (reason !== "none") {
            totalTimeLimited += duration;
          }
        });
        console.log(`Total time limited: ${totalTimeLimited}`);
      }
    }
  });
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCOutboundRtpStreamStats.qualityLimitationDurations")}}
