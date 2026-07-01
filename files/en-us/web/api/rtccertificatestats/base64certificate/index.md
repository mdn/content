---
title: "RTCCertificateStats: base64Certificate property"
short-title: base64Certificate
slug: Web/API/RTCCertificateStats/base64Certificate
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_certificate.base64Certificate
---

{{APIRef("WebRTC")}}

The **`base64Certificate`** property of the {{domxref("RTCCertificateStats")}} dictionary is a string containing the base-64 representation of the DER-encoded certificate.

This is essentially an encoding of the original certificate as a string that can safely serialized and deserialized when sent over an IP network.

## Value

A {{glossary("Base64")}} representation of the DER-encoded certificate.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
