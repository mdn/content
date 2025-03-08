---
title: "RTCTransportStats: tlsVersion property"
short-title: tlsVersion
slug: Web/API/RTCTransportStats/tlsVersion
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_transport.tlsVersion
---

{{APIRef("WebRTC")}}

The **`tlsVersion`** property of the {{domxref("RTCTransportStats")}} dictionary indicates the negotiated TLS version of an underlying DTLS transport.

It is only present for DTLS transports, and only exists after DTLS has been negotiated.

The value comes from the DTLS handshake `ServerHello.version`, and is represented as four upper case hexadecimal digits, where the digits represent the two bytes of the version.
Note however that the bytes might not map directly to version numbers.
For example, DTLS represents version 1.2 as `'FEFD'` which numerically is `{254, 253}`.

## Value

A string that indicates the negotiated DTS transport.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
