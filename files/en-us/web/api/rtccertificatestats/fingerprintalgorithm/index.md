---
title: "RTCCertificateStats: fingerprintAlgorithm property"
short-title: fingerprintAlgorithm
slug: Web/API/RTCCertificateStats/fingerprintAlgorithm
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_certificate.fingerprintAlgorithm
---

{{APIRef("WebRTC")}}

The **`fingerprintAlgorithm`** property of the {{domxref("RTCCertificateStats")}} dictionary is a string containing the name of the hash function used to generate the {{domxref("RTCCertificateStats.fingerprint", "fingerprint")}} value in the associated {{domxref("RTCCertificate")}}.

## Value

A string containing the name of the hash function used to create the fingerprint of the associated certificate.

Allowed values are: `"sha-1"`, `"sha-224"`, `"sha-256"`, `"sha-384"`, `"sha-512"`, `"md5"`, `"md2"`. <!-- from [RFC4572, Section 5](https://www.rfc-editor.org/rfc/rfc4572#section-5) -->

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
