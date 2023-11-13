---
title: RTCTransportStats
slug: Web/API/RTCTransportStats
page-type: web-api-interface
browser-compat: api.RTCStatsReport.type_transport
---

{{APIRef("WebRTC")}}

The **`RTCTransportStats`** dictionary of the [WebRTC API](/en-US/docs/Web/API/WebRTC_API) provides information about the transport ({{domxref("RTCDtlsTransport")}} and its underlying {{domxref("RTCIceTransport")}}) used by a particular candidate pair.

Note that if remote endpoint is aware of the BUNDLE SDP feature, all {{domxref("MediaStreamTrack")}} and data channels are bundled onto a single transport at the completion of negotiation.
This is true for current browsers, but if connecting to an older endpoint that is not BUNDLE-aware, then separate transports might be used for different media.
The policy to use in the negotiation is configured in the [`RTCPeerConnection` constructor](/en-US/docs/Web/API/RTCPeerConnection/RTCPeerConnection).

These statistics can be obtained by iterating the {{domxref("RTCStatsReport")}} returned by {{domxref("RTCPeerConnection.getStats()")}} until you find a report with the [`type`](#type) of `transport`.

## Instance properties

- `packetsSent` {{optional_inline}}
  - : The total number of packets sent over this transport.
- `packetsReceived` {{optional_inline}}
  - : The total number of packets received on this transport.
- `bytesSent` {{optional_inline}}
  - : The total number of payload bytes sent on this transport (bytes sent, not including headers, padding or ICE connectivity checks).
- `bytesReceived` {{optional_inline}}
  - : The total number of payload bytes received on this transport (bytes received, not including headers, padding or ICE connectivity checks).
- `iceRole` {{optional_inline}}
  - : A string indicating the [ICE `role`](/en-US/docs/Web/API/RTCIceTransport/role) of the underlying {{domxref("RTCDtlsTransport.iceTransport")}}.
- `iceLocalUsernameFragment` {{optional_inline}}
  - : A string indicating the local username fragment used in message validation procedures for this transport, as sent in the `ice-ufrag` attribute of the {{glossary("SDP")}} offer when negotiating the ICE connection.
    The value will change if the connection is renegotiated: on ICE restart or following {{domxref("RTCPeerConnection.setLocalDescription()")}}.
- `dtlsState`
  - : A string indicating the current {{domxref("RTCDtlsTransport.state","state")}} of the underlying {{domxref("RTCDtlsTransport")}}: `new`, `connecting`, `connected`, `closed`, and `failed`.
- `iceState` {{optional_inline}}
  - : {{domxref("RTCIceTransportState")}}
    Xxx Set to the current value of the state attribute of the underlying RTCIceTransport.
- `selectedCandidatePairId` {{optional_inline}}
  - : A string containing the unique identifier for the object that was inspected to produce the {{domxref("RTCIceCandidatePairStats")}} associated with this transport.
- `localCertificateId` {{optional_inline}}
  - : A string containing the local certification <!-- For components where DTLS is negotiated -->
- `remoteCertificateId` {{optional_inline}}
  - : A string containing the remote certification. <!-- For components where DTLS is negotiated -->
- `tlsVersion` {{optional_inline}}
  - : A string containing the negotiated TLS versions.
    Only exists after DTLS negotiation is complete.
    <!-- For components where DTLS is negotiated, the TLS version agreed -->
- `dtlsCipher` {{optional_inline}}
  - : A string Xxxx
    Xxx The value comes from ServerHello.supported_versions if present, otherwise from ServerHello.version. It is represented as four upper case hexadecimal digits, representing the two bytes of the version.
- `dtlsRole` {{optional_inline}}
  - : {{domxref("RTCDtlsRole")}}
    "client" or "server" depending on the DTLS role. "unknown" before the DTLS negotiation starts.
- `srtpCipher` {{optional_inline}}
  - : Xxxx A string indicating the descriptive name of the protection profile used for the SRTP transport, as defined in the "Profile" column of the IANA DTLS-SRTP protection profile registry [IANA-DTLS-SRTP] and described further in [RFC5764].
- `selectedCandidatePairChanges` {{optional_inline}}
  - : Xxxx The number of times that the selected candidate pair of this transport has changed.
    Going from not having a selected candidate pair to having a selected candidate pair, or the other way around, also increases this counter. It is initially zero and becomes one when an initial candidate pair is selected.

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
