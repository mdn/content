---
title: "RTCCertificateStats: fingerprint property"
short-title: fingerprint
slug: Web/API/RTCCertificateStats/fingerprint
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_certificate.fingerprint
---

{{APIRef("WebRTC")}}

The **`fingerprint`** property of the {{domxref("RTCCertificateStats")}} dictionary is a string containing the fingerprint value of the associated {{domxref("RTCCertificate")}}.

## Value

A string containing the fingerprint of the associated certificate.

This is a lowercase hex string, calculated using the hash function specified in the {{domxref("RTCCertificateStats.fingerprintAlgorithm","fingerprintAlgorithm")}} property.
The format is more precisely defined in [RFC4572, Section 5](https://www.rfc-editor.org/rfc/rfc4572#section-5).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
