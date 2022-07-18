---
title: RTCIceCandidatePairStats.bytesReceived
slug: Web/API/RTCIceCandidatePairStats/bytesReceived
page-type: web-api-instance-property
tags:
  - API
  - Candidate
  - Candidate Pair
  - ICE
  - Network
  - Networking
  - Property
  - RTCIceCandidatePairStats
  - Statistics
  - Stats
  - WebRTC
  - WebRTC API
  - bytesReceived
  - data
browser-compat: api.RTCIceCandidatePairStats.bytesReceived
---
{{APIRef("WebRTC")}}

The {{domxref("RTCIceCandidatePairStats")}} property
**`bytesReceived`** indicates the total number of payload
bytes—that is, bytes which aren't overhead such as headers or padding—that hve been
received to date on the connection described by the candidate pair.

The {{domxref("RTCIceCandidatePairStats.bytesSent", "bytesSent")}} property reports the
number of bytes sent so far on the described connection.

## Value

An integer value indicating the total number of bytes received so far on the connection
described by this candidate pair. Only data bytes are counted; overhead such as padding,
headers, and the like are not included in this count.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
