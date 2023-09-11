---
title: "RTCInboundRtpStreamStats: packetsFailedDecryption property"
short-title: packetsFailedDecryption
slug: Web/API/RTCInboundRtpStreamStats/packetsFailedDecryption
page-type: web-api-instance-property
browser-compat: api.RTCInboundRtpStreamStats.packetsFailedDecryption
---

{{APIRef("WebRTC")}}

The **`packetsFailedDecryption`**
property of the {{domxref("RTCInboundRtpStreamStats")}} dictionary indicates the total
number of {{Glossary("RTP")}} packets which failed to be decrypted successfully after
being received by the local end of the connection during this session.

## Value

An integer value which indicates how many packets the local end of the RTP connection
could not be successfully decrypted.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{RFC(3711, "", "3.3")}}: Description of the decryption process for secure RTP packets
