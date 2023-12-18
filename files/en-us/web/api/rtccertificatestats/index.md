---
title: RTCCertificateStats
slug: Web/API/RTCCertificateStats
page-type: web-api-interface
browser-compat: api.RTCStatsReport.type_certificate
---

{{DefaultAPISidebar("WebRTC")}}

The **`RTCCertificateStats`** dictionary of the [WebRTC API](/en-US/docs/Web/API/WebRTC_API) is used to report information about a certificate used by an {{domxref("RTCDtlsTransport")}} and its underlying {{domxref("RTCIceTransport")}}.

The report can be obtained by iterating the {{domxref("RTCStatsReport")}} returned by {{domxref("RTCPeerConnection.getStats()")}} until you find an entry with the [`type`](#type) of `certificate`.

## Instance properties

- {{domxref("RTCCertificateStats.fingerprint", "fingerprint")}}
  - : A string containing the certificate fingerprint, which is calculated using the hash function specified in [`fingerprintAlgorithm`](#fingerprintalgorithm).
- {{domxref("RTCCertificateStats.fingerprintAlgorithm", "fingerprintAlgorithm")}}
  - : A string containing the hash function used to compute the certificate [`fingerprint`](#fingerprint), such as "sha-256".
- {{domxref("RTCCertificateStats.base64Certificate", "base64Certificate")}}
  - : A string containing the base-64 representation of the DER-encoded certificate.

### Common instance properties

The following properties are common to all WebRTC statistics objects (See [`RTCStatsReport`](/en-US/docs/Web/API/RTCStatsReport#common_instance_properties) for more information).

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
