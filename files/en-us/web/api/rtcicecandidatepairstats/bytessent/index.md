---
title: "RTCIceCandidatePairStats: bytesSent property"
short-title: bytesSent
slug: Web/API/RTCIceCandidatePairStats/bytesSent
page-type: web-api-instance-property
browser-compat: api.RTCIceCandidatePairStats.bytesSent
---

{{APIRef("WebRTC")}}

The {{domxref("RTCIceCandidatePairStats")}} property
**`bytesSent`** indicates the total number of payload
bytes—that is, bytes which aren't overhead such as headers or padding—that have been
sent so far on the connection described by the candidate pair.

The {{domxref("RTCIceCandidatePairStats.bytesReceived", "bytesReceived")}} property
reports the number of bytes received so far on the described connection.

## Syntax

```js-nolint
sent = rtcIceCandidatePairStats.bytesSent
```

### Value

An integer value indicating the total number of bytes sent so far on the connection
described by this candidate pair. Only data bytes are counted; overhead such as padding,
headers, and the like are not included in this count.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
