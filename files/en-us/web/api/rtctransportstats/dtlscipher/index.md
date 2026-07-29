---
title: "RTCTransportStats: dtlsCipher property"
short-title: dtlsCipher
slug: Web/API/RTCTransportStats/dtlsCipher
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_transport.dtlsCipher
---

{{APIRef("WebRTC")}}

The **`dtlsCipher`** property of the {{domxref("RTCTransportStats")}} dictionary is a string that indicates the descriptive name of the cipher suite used for the DTLS transport.

Allowed names are defined in the "Description" column of the [TLS Cipher Suites](https://www.iana.org/assignments/tls-parameters/tls-parameters.xhtml#table-tls-parameters-4) section in the _IANA cipher suite registry_.
For example `"TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256"`.

## Value

A string indicating the name of the DTLS cipher.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
