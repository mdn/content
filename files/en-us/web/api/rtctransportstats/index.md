---
title: RTCTransportStats
slug: Web/API/RTCTransportStats
page-type: web-api-interface
browser-compat: api.RTCStatsReport.type_transport
---

{{APIRef("WebRTC")}}

The **`RTCTransportStats`** dictionary of the [WebRTC API](/en-US/docs/Web/API/WebRTC_API) provides information about the transport ({{domxref("RTCDtlsTransport")}} and its underlying {{domxref("RTCIceTransport")}}) used by a particular candidate pair.

The _BUNDLE_ feature is an SDP extension that allows negotiation to use a single transport for sending and receiving media described by multiple SDP media descriptions.
If the remote endpoint is aware of this feature, all {{domxref("MediaStreamTrack")}} and data channels are bundled onto a single transport at the completion of negotiation.
This is true for current browsers, but if connecting to an older endpoint that is not BUNDLE-aware, then separate transports might be used for different media.
The policy to use in the negotiation is configured in the [`RTCPeerConnection` constructor](/en-US/docs/Web/API/RTCPeerConnection/RTCPeerConnection).

These statistics can be obtained by iterating the {{domxref("RTCStatsReport")}} returned by {{domxref("RTCPeerConnection.getStats()")}} until you find a report with the [`type`](/en-US/docs/Web/API/RTCTransportStats/type) of `transport`.

## Instance properties

- {{domxref("RTCTransportStats.bytesReceived", "bytesReceived")}} {{optional_inline}}
  - : The total number of payload bytes received on this transport (bytes received, not including headers, padding or ICE connectivity checks).
- {{domxref("RTCTransportStats.bytesSent", "bytesSent")}} {{optional_inline}}
  - : The total number of payload bytes sent on this transport (bytes sent, not including headers, padding or ICE connectivity checks).
- {{domxref("RTCTransportStats.dtlsCipher", "dtlsCipher")}} {{optional_inline}}
  - : A string indicating the name of the cipher suite used for the DTLS transport, such as `TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256`.
- {{domxref("RTCTransportStats.dtlsRole", "dtlsRole")}} {{optional_inline}} {{experimental_inline}}
  - : A string indicating the DTLS role of the associated {{domxref("RTCPeerConnection")}}.
    This is one of: `client`, `server`, `unknown` (before the DTLS negotiation starts).
- {{domxref("RTCTransportStats.dtlsState", "dtlsState")}}
  - : A string indicating the current {{domxref("RTCDtlsTransport.state","state")}} of the underlying {{domxref("RTCDtlsTransport")}}.
    This is one of: `new`, `connecting`, `connected`, `closed`, `failed`.
- {{domxref("RTCTransportStats.iceLocalUsernameFragment", "iceLocalUsernameFragment")}} {{optional_inline}} {{experimental_inline}}
  - : A string indicating the local username fragment that uniquely identifies the ICE interaction session managed by this transport.
- {{domxref("RTCTransportStats.iceRole", "iceRole")}} {{optional_inline}} {{experimental_inline}}
  - : A string indicating the ICE [`role`](/en-US/docs/Web/API/RTCIceTransport/role) of the underlying {{domxref("RTCIceTransport")}}.
    This is one of: `controlled`, `controlling`, or `unknown`.
- {{domxref("RTCTransportStats.iceState", "iceState")}} {{optional_inline}} {{experimental_inline}}
  - : A string indicating the current {{domxref("RTCIceTransport.state","state")}} of the underlying {{domxref("RTCIceTransport")}}.
    This is one of: `new`, `checking`, `connected`, `completed`, `disconnected`, `failed`, or `closed`.
- {{domxref("RTCTransportStats.localCertificateId", "localCertificateId")}} {{optional_inline}}
  - : A string containing the id of the local certificate used by this transport.
    Only present for DTLS transports, and after DTLS has been negotiated.
- {{domxref("RTCTransportStats.packetsReceived", "packetsReceived")}} {{optional_inline}} {{experimental_inline}}
  - : The total number of packets received on this transport.
- {{domxref("RTCTransportStats.packetsSent", "packetsSent")}} {{optional_inline}} {{experimental_inline}}
  - : The total number of packets sent over this transport.
- {{domxref("RTCTransportStats.remoteCertificateId", "remoteCertificateId")}} {{optional_inline}}
  - : A string containing the id or the remote certificate used by this transport.
    Only present for DTLS transports, and after DTLS has been negotiated.
- {{domxref("RTCTransportStats.selectedCandidatePairChanges", "selectedCandidatePairChanges")}} {{optional_inline}}
  - : The number of times that the selected candidate pair of this transport has changed.
    The value is initially zero and increases whenever a candidate pair selected or lost.
- {{domxref("RTCTransportStats.selectedCandidatePairId", "selectedCandidatePairId")}} {{optional_inline}}
  - : A string containing the unique identifier for the object that was inspected to produce the {{domxref("RTCIceCandidatePairStats")}} associated with this transport.
- {{domxref("RTCTransportStats.srtpCipher", "srtpCipher")}} {{optional_inline}}
  - : A string indicating the descriptive name of the protection profile used for the [Secure Real-time Transport Protocol (SRTP)](/en-US/docs/Glossary/RTP) transport.
- {{domxref("RTCTransportStats.tlsVersion", "tlsVersion")}} {{optional_inline}}
  - : A string containing the negotiated TLS version.
    This is present for DTLS transports, and only exists after DTLS has been negotiated.

### Common instance properties

The following properties are common to all WebRTC statistics objects.

<!-- RTCStats -->

- {{domxref("RTCTransportStats.id", "id")}}
  - : A string that uniquely identifies the object that is being monitored to produce this set of statistics.
- {{domxref("RTCTransportStats.timestamp", "timestamp")}}
  - : A {{domxref("DOMHighResTimeStamp")}} object indicating the time at which the sample was taken for this statistics object.
- {{domxref("RTCTransportStats.type", "type")}}
  - : A string with the value `"transport"`, indicating the type of statistics that the object contains.

## Examples

This example shows a function to return the transport statistics, or `null` if no statistics are provided.

The function waits for the result of a call to {{domxref("RTCPeerConnection.getStats()")}} and then iterates the returned {{domxref("RTCStatsReport")}} to get just the stats of type `"transport"`.
It then returns the statistics, or `null`, using the data in the report.

```js
async function numberOpenConnections (peerConnection) {
  const stats = await peerConnection.getStats();
  let transportStats = null;

  stats.forEach((report) => {
    if (report.type === "transport") {
      transportStats = report;
      break;
    }
  });

return transportStats
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
