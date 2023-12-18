---
title: "RTCCertificateStats: issuerCertificateId property"
short-title: issuerCertificateId
slug: Web/API/RTCCertificateStats/issuerCertificateId
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_certificate.issuerCertificateId
---

{{APIRef("WebRTC")}}

The **`issuerCertificateId`** property of the {{domxref("RTCCertificateStats")}} dictionary is a string containing the {{domxref("RTCCertificateStats.id", "id")}} of the `RTCCertificateStats` object that contains the next certificate in the certificate chain.

## Value

A string containing the `id` of the next certificate in the chain.

If the current certificate is at the end of the chain (i.e. a self-signed certificate), this will not be set.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
