---
title: "RTCIceCandidatePairStats: readable property"
short-title: readable
slug: Web/API/RTCIceCandidatePairStats/readable
page-type: web-api-instance-property
status:
  - deprecated
  - non-standard
browser-compat: api.RTCStatsReport.type_candidate-pair.readable
---

{{APIRef("WebRTC")}}{{Deprecated_Header}}{{Non-standard_Header}}

The **`readable`** property of the {{domxref("RTCIceCandidatePairStats")}} dictionary reports whether or not the connection described by the candidate pair has received at least one valid incoming ICE request.

## Value

A Boolean value which is `true` if the connection described by this candidate pair has received at least one valid ICE request, and is therefore ready to be read from.

> [!NOTE]
> Instead of using this value you should determine whether or not the connection is readable by checking to see if {{domxref("RTCIceCandidatePairStats.requestsReceived", "requestsReceived")}} is greater than 0:
>
> ```js
> if (icpStats.requestsReceived > 0) {
>   /* at least one ICE request has been received */
> }
> ```

## Specifications

This property was removed from the specification in early 2017.

## Browser compatibility

{{Compat}}
