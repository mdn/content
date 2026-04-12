---
title: "RTCIceCandidatePairStats: writable property"
short-title: writable
slug: Web/API/RTCIceCandidatePairStats/writable
page-type: web-api-instance-property
status:
  - deprecated
  - non-standard
browser-compat: api.RTCStatsReport.type_candidate-pair.writable
---

{{APIRef("WebRTC")}}{{Deprecated_Header}}{{Non-standard_Header}}

The **`writable`** property of the {{domxref("RTCIceCandidatePairStats")}} dictionary indicates whether or not the connection described by the candidate pair is writable.

## Value

`true` if the connection described by this candidate pair has received acknowledgement of receipt (ACK) for at least one ICE request _and_ that {{Glossary("STUN")}} consent hasn't expired.

> [!NOTE]
> This property is deprecated.
> You can instead determine whether or not an incoming ICE request is available to read by checking to see if {{domxref("RTCIceCandidatePairStats.responsesReceived", "responsesReceived")}} is greater than 0, and that the time specified by {{domxref("RTCIceCandidatePairStats.consentExpiredTimestamp", "consentExpiredTimestamp")}} has not passed:
>
> ```js
> if (
>   icpStats.responsesReceived > 0 &&
>   icpStats.consentExpiredTimestamp < performance.now()
> ) {
>   /* at least one ICE response has been received */
> }
> ```

## Specifications

This property was removed from the specification in early 2017.

## Browser compatibility

{{Compat}}
