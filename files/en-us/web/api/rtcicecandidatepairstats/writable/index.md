---
title: RTCIceCandidatePairStats.writable
slug: Web/API/RTCIceCandidatePairStats/writable
page-type: web-api-instance-property
tags:
  - API
  - Candidate
  - ICE
  - Deprecated
  - Property
  - RTCIceCandidatePairStats
  - Reference
  - Statistics
  - Stats
  - WebRTC
  - WebRTC API
  - writable
  - Non-standard
browser-compat: api.RTCIceCandidatePairStats.writable
---
{{APIRef("WebRTC")}}{{Deprecated_Header}}{{Non-standard_Header}}

The _obsolete_ {{domxref("RTCIceCandidatePairStats")}}
property **`writable`** reports whether or not the connection
described by the candidate pair is writable.

## Value

A Boolean value which is `true` if the connection described by this
candidate pair has received acknowledgement of receipt (ACK) for at least one ICE
request _and_ that {{Glossary("STUN")}} consent hasn't expired.

> **Note:** This property was removed from the specification in early 2017
> because you can determine whether or not an incoming ICE request is available to read
> by checking to see if {{domxref("RTCIceCandidatePairStats.responsesReceived",
    "responsesReceived")}} is greater than 0 and that the time specified by
> {{domxref("RTCIceCandidatePairStats.consentExpiredTimestamp",
    "consentExpiredTimestamp")}} has not passed:
>
> ```js
> if (icpStats.responsesReceived > 0
>     && icpStats.consentExpiredTimestamp < performance.now()) {
>   /* at least one ICE response has been received */
> }
> ```

## Browser compatibility

{{Compat}}
