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

These statistics can be obtained by iterating the {{domxref("RTCStatsReport")}} returned by {{domxref("RTCPeerConnection.getStats()")}} until you find a report with the [`type`](#type) of `transport`.

## Instance properties

- `bytesReceived` {{optional_inline}}
  - : The total number of payload bytes received on this transport (bytes received, not including headers, padding or ICE connectivity checks).
- `bytesSent` {{optional_inline}}
  - : The total number of payload bytes sent on this transport (bytes sent, not including headers, padding or ICE connectivity checks).
- `dtlsCipher` {{optional_inline}}
  - : A string indicating the name of the cipher suite used for the DTLS transport, as defined in the "Description" column of the [TLS Cipher Suites](https://www.iana.org/assignments/tls-parameters/tls-parameters.xhtml#tls-parameters-4) section in the _IANA cipher suite registry_.
    For example `"TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256"`.
- `dtlsRole` {{optional_inline}} {{experimental_inline}}

  - : The DTLS role of the associated {{domxref("RTCPeerConnection")}}.
    This is one of:

    - `client`
    - `server`
    - `unknown` (before the DTLS negotiation starts).

- `dtlsState`

  - : A string indicating the current {{domxref("RTCDtlsTransport.state","state")}} of the underlying {{domxref("RTCDtlsTransport")}}.
    This is one of:

    - [`new`](/en-US/docs/Web/API/RTCDtlsTransport/state#new)
    - [`connecting`](/en-US/docs/Web/API/RTCDtlsTransport/state#connecting)
    - [`connected`](/en-US/docs/Web/API/RTCDtlsTransport/state#connected)
    - [`closed`](/en-US/docs/Web/API/RTCDtlsTransport/state#closed)
    - [`failed`](/en-US/docs/Web/API/RTCDtlsTransport/state#failed)

- `iceLocalUsernameFragment` {{optional_inline}} {{experimental_inline}}
  - : A string indicating the local username fragment used in message validation procedures for this transport.
    This is the same value as the local {{domxref("RTCIceCandidate.usernameFragment")}}, and will change if the connection is renegotiated.
- `iceRole` {{optional_inline}} {{experimental_inline}}

  - : A string indicating the [ICE `role`](/en-US/docs/Web/API/RTCIceTransport/role) of the underlying {{domxref("RTCDtlsTransport.iceTransport")}}.
    This is one of:

    - [`controlled`](/en-US/docs/Web/API/RTCIceTransport/role#controlled)
    - [`controlling`](/en-US/docs/Web/API/RTCIceTransport/role#controlling)
    - [`unknown`](/en-US/docs/Web/API/RTCIceTransport/role#unknown)

- `iceState` {{optional_inline}} {{experimental_inline}}

  - : A string indicating the current {{domxref("RTCIceTransport.state","state")}} of the underlying {{domxref("RTCIceTransport")}}.
    This is one of:

    - [`new`](/en-US/docs/Web/API/RTCIceTransport/state#new)
    - [`checking`](/en-US/docs/Web/API/RTCIceTransport/state#checking)
    - [`connected`](/en-US/docs/Web/API/RTCIceTransport/state#connected)
    - [`completed`](/en-US/docs/Web/API/RTCIceTransport/state#completed)
    - [`disconnected`](/en-US/docs/Web/API/RTCIceTransport/state#disconnected)
    - [`failed`](/en-US/docs/Web/API/RTCIceTransport/state#failed)
    - [`closed`](/en-US/docs/Web/API/RTCIceTransport/state#closed)

- `selectedCandidatePairId` {{optional_inline}}
  - : A string containing the unique identifier for the object that was inspected to produce the {{domxref("RTCIceCandidatePairStats")}} associated with this transport.
- `localCertificateId` {{optional_inline}}
  - : A string containing the id of the local certificate used by this transport.
    Only present for DTLS transports, and after DTLS has been negotiated.
- `packetsSent` {{optional_inline}} {{experimental_inline}}
  - : The total number of packets sent over this transport.
- `packetsReceived` {{optional_inline}} {{experimental_inline}}
  - : The total number of packets received on this transport.
- `remoteCertificateId` {{optional_inline}}
  - : A string containing the id or the remote certificate used by this transport.
    Only present for DTLS transports, and after DTLS has been negotiated.
- `selectedCandidatePairChanges` {{optional_inline}}
  - : The number of times that the selected candidate pair of this transport has changed.
    The value is initially zero and increases whenever a candidate pair selected or lost.
- `srtpCipher` {{optional_inline}}

  - : A string indicating the descriptive name of the protection profile used for the [Secure Real-time Transport Protocol (SRTP)](/en-US/docs/Glossary/RTP) transport, as defined in the "Profile" column of the [IANA DTLS-SRTP protection profile registry](https://www.iana.org/assignments/srtp-protection/srtp-protection.xhtml#srtp-protection-1) and [RFC5764](https://www.rfc-editor.org/rfc/rfc5764.html#section-4.1.2).

    For example `"AES_CM_128_HMAC_SHA1_80"` specifies the following profile, where `maximum_lifetime` is the maximum number of packets that can be protected by a single set of keys.

    ```plain
    SRTP_AES128_CM_HMAC_SHA1_80
     cipher: AES_128_CM
     cipher_key_length: 128
     cipher_salt_length: 112
     maximum_lifetime: 2^31
     auth_function: HMAC-SHA1
     auth_key_length: 160
     auth_tag_length: 80
    ```

- `tlsVersion` {{optional_inline}}

  - : A string containing the negotiated TLS version.
    This is present for DTLS transports, and only exists after DTLS has been negotiated.

    The value comes from the DTLS handshake `ServerHello.version`, and is represented as four upper case hexadecimal digits, where the digits represent the two bytes of the version.
    Note however that the bytes might not map directly to version numbers.
    For example, DTLS represents version 1.2 as `'FEFD'` which numerically is `{254, 253}`.

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
