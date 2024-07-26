---
title: "RTCCertificateStats: type property"
short-title: type
slug: Web/API/RTCCertificateStats/type
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_certificate.type
---

{{APIRef("WebRTC")}}

The **`type`** property of the {{domxref("RTCCertificateStats")}} dictionary is a string with the value `"certificate"`.

Different statistics are obtained by iterating the {{domxref("RTCStatsReport")}} object returned by a call to {{domxref("RTCPeerConnection.getStats()")}}.
The type indicates the set of statistics available through the object in a particular iteration step.
A value of `"certificate"` indicates that the statistics available in the current step are those defined in {{domxref("RTCCertificateStats")}}.

## Value

A string with the value `"certificate"`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
