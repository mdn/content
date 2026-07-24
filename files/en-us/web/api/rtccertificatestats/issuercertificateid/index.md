---
title: "RTCCertificateStats: issuerCertificateId property"
short-title: issuerCertificateId
slug: Web/API/RTCCertificateStats/issuerCertificateId
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_certificate.issuerCertificateId
---

{{APIRef("WebRTC")}}

The **`issuerCertificateId`** property of the {{domxref("RTCCertificateStats")}} dictionary is a string containing the {{domxref("RTCCertificateStats.id", "id")}} of the {{domxref("RTCCertificateStats")}} object in this report that contains the next certificate in the certificate chain.

If there are no further certificates in the chain, such as if this is the root certificate or a self-signed certificate, the value is `undefined`.

Note that WebRTC uses certificates when establishing a DTLS connection.
By default connections use self-signed certificates, but in enterprise or WebRTC gateway setups signed certificate chains from intermediate and root certificate authorities (CAs) may be used instead.
This property allows you to walk the chain of certificates if needed.

## Value

A string, or `undefined` if the current certificate is at the end of the certificate chain.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
