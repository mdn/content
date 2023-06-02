---
title: RTCCertificateStats
slug: Web/API/RTCCertificateStats
page-type: web-api-interface
browser-compat: api.RTCStatsReport.type_certificate
---

{{DefaultAPISidebar("WebRTC")}}

The **`RTCCertificateStats`** dictionary of the [WebRTC API](/en-US/docs/Web/API/WebRTC_API) is used to report information about a certificate used by an {{domxref("RTCIceTransport")}}.

The report can be obtained by iterating the {{domxref("RTCStatsReport")}} returned by {{domxref("RTCPeerConnection.getStats()")}} until you find an entry with the [`type`](#type) of `certificate`.

## Instance properties

- {{domxref("RTCCertificateStats.fingerprint", "fingerprint")}}
  - : A string containing the certificate fingerprint.
    Only use the fingerprint value as defined in Section 5 of [RFC4572].
- {{domxref("RTCCertificateStats.fingerprintAlgorithm", "fingerprintAlgorithm")}}
  - : A string containing the hash function used to compute the certificate fingerprint.
    For instance, "sha-256".
- {{domxref("RTCCertificateStats.base64Certificate", "base64Certificate")}}
  - : A string containing the DER-encoded base-64 representation of the certificate.
- {{domxref("RTCCertificateStats.issuerCertificateId", "issuerCertificateId")}}
  - : A string containing the `id` of the stats object that contains the next certificate in the certificate chain.
    If the current certificate is at the end of the chain (i.e. a self-signed certificate), this will not be set.

### Common instance properties

The following properties are common to all WebRTC statistics objects.

<!-- RTCStats -->

- {{domxref("RTCCertificateStats.id", "id")}}
  - : A string that uniquely identifies the object that is being monitored to produce this set of statistics.
- {{domxref("RTCCertificateStats.timestamp", "timestamp")}}
  - : A {{domxref("DOMHighResTimeStamp")}} object indicating the time at which the sample was taken for this statistics object.
- {{domxref("RTCCertificateStats.type", "type")}}
  - : A string with the value `"certificate"`, indicating the type of statistics that the object contains.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
