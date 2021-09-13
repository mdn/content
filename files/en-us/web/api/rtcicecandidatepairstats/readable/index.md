---
title: RTCIceCandidatePairStats.readable
slug: Web/API/RTCIceCandidatePairStats/readable
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
  - readable
browser-compat: api.RTCIceCandidatePairStats.readable
---
{{APIRef("WebRTC")}}{{deprecated_header}}

The _obsolete_ {{domxref("RTCIceCandidatePairStats")}}
property **`readable`** reports whether or not the connection
described by the candidate pair has received at least one valid incoming ICE
request.

## Syntax

```js
isReadable = rtcIceCandidatePairStats.readable;
```

### Value

A Boolean value which is `true` if the connection described by this
candidate pair has received at least one valid ICE request, and is therefore ready to be
read from.

> **Note:** This property was removed from the specification in early 2017
> because you can determine whether or not the connection is readable by checking to see
> if {{domxref("RTCIceCandidatePairStats.requestsReceived", "requestsReceived")}} is
> greater than 0:
>
> ```js
> if (icpStats.requestsReceived > 0) {
>   /* at least one ICE request has been received */
> }
> ```

## Browser compatibility

{{Compat}}
