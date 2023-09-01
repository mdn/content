---
title: RTCDtlsTransport
slug: Web/API/RTCDtlsTransport
page-type: web-api-interface
browser-compat: api.RTCDtlsTransport
---

{{APIRef("WebRTC")}}

The **`RTCDtlsTransport`** interface provides access to information about the Datagram Transport Layer Security (**{{Glossary("DTLS")}}**) transport over which a {{domxref("RTCPeerConnection")}}'s {{Glossary("RTP")}} and {{Glossary("RTCP")}} packets are sent and received by its {{domxref("RTCRtpSender")}} and {{domxref("RTCRtpReceiver")}} objects.

A `RTCDtlsTransport` object is also used to provide information about {{Glossary("SCTP")}} packets transmitted and received by an connection's [data channels](/en-US/docs/Web/API/RTCDataChannel).

Features of the DTLS transport include the addition of security to the underlying transport; the `RTCDtlsTransport` interface can be used to obtain information about the underlying transport and the security added to it by the DTLS layer.

{{InheritanceDiagram}}

## Instance properties

_Also inherits properties from {{DOMxRef("EventTarget")}}._

- {{DOMxRef("RTCDtlsTransport.iceTransport", "iceTransport")}} {{ReadOnlyInline}}
  - : Returns a reference to the underlying {{DOMxRef("RTCIceTransport")}} object.
- {{DOMxRef("RTCDtlsTransport.state", "state")}} {{ReadOnlyInline}}
  - : Returns a string
    which describes the underlying Datagram Transport Layer Security (**{{Glossary("DTLS")}}**) transport state.
    It can be one of the following values:
    `new`, `connecting`, `connected`, `closed`, or `failed`.

### Event handlers

- {{DOMxRef("RTCDtlsTransport.onerror", "onerror")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers)
    which specifies a function the browser calls
    when the {{DOMxRef("RTCDtlsTransport.error_event", "error")}} event is received.
- {{DOMxRef("RTCDtlsTransport.onstatechange", "onstatechange")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers)
    which specifies a function the browser calls
    when the {{DOMxRef("RTCDtlsTransport.statechange_event", "statechange")}} event is received.

## Instance methods

_Also inherits methods from {{DOMxRef("EventTarget")}}._

- {{DOMxRef("RTCDtlsTransport.getRemoteCertificates", "getRemoteCertificates()")}}
  - : Returns an array of {{jsxref("ArrayBuffer")}} containing the certificates of the remote peer of the connection.

## Events

- {{DOMxRef("RTCDtlsTransport.error_event", "error")}}

  - : Sent when a transport-level error occurs on the {{domxref("RTCPeerConnection")}}.

- {{DOMxRef("RTCDtlsTransport.statechange_event", "statechange")}}
  - : Sent when the {{DOMxRef("RTCDtlsTransport.state", "state")}} of the DTLS transport changes.

## Description

### Allocation of DTLS transports

`RTCDtlsTransport` objects are created when an app calls either {{domxref("RTCPeerConnection.setLocalDescription", "setLocalDescription()")}} or {{domxref("RTCPeerConnection.setRemoteDescription", "setRemoteDescription()")}}. The number of DTLS transports created and how they're used depends on the bundling mode used when creating the {{domxref("RTCPeerConnection")}}.

Whether bundling is used depends on what the other endpoint is able to negotiate. All browsers support bundling, so when both endpoints are browsers, you can rest assured that bundling will be used.

Some non-browser legacy endpoints, however, may not support bundle. To be able to negotiate with such endpoints (or to exclude them entirely), the `bundlePolicy` property may be provided when creating the connection. The `bundlePolicy` [lets you control](/en-US/docs/Web/API/RTCPeerConnection#rtcbundlepolicy_enum) how to negotiate with these legacy endpoints. The default policy is `"balanced"`, which provides a balance between performance and compatibility.

For example, to create the connection using the highest level of bundling:

```js
const rtcConfig = {
  bundlePolicy: "max-bundle",
};

const pc = new RTCPeerConnection(rtcConfig);
```

[Bundling](https://webrtcstandards.info/sdp-bundle/) lets you use one `RTCDtlsTransport` to carry the data for multiple higher-level transports, such as multiple {{domxref("RTCRtpTransceiver")}}s.

#### When not using BUNDLE

When the connection is created without using BUNDLE, each RTP or RTCP component of each {{domxref("RTCRtpTransceiver")}} has its own `RTCDtlsTransport`; that is, every {{domxref("RTCRtpSender")}} and {{domxref("RTCRtpReceiver")}}, has its own transport, and all {{domxref("RTCDataChannel")}} objects share a transport dedicated to SCTP.

#### When using BUNDLE

When the connection is using BUNDLE, each `RTCDtlsTransport` object represents a group of {{domxref("RTCRtpTransceiver")}} objects. If the connection was created using `max-compat` mode, each transport is responsible for handling all of the communications for a given type of media (audio, video, or data channel). Thus, a connection that has any number of audio and video channels will always have exactly one DTLS transport for audio and one for video communications.

Because transports are established early in the negotiation process, it's likely that it won't be known until after they're created whether or not the remote peer supports bundling or not. For this reason, you'll sometimes see separate transports created at first, one for each track, then see them get bundled up once it's known that bundling is possible. If your code accesses {{domxref("RTCRtpSender")}}s and/or {{domxref("RTCRtpReceiver")}}s directly, you may encounter situations where they're initially separate, then half or more of them get closed and the senders and receivers updated to refer to the appropriate remaining `RTCDtlsTransport` objects.

### Data channels

{{domxref("RTCDataChannel")}}s use {{Glossary("SCTP")}} to communicate. All of a peer connection's data channels share a single {{domxref("RTCSctpTransport")}}, found in the connection's {{domxref("RTCPeerConnection.sctp", "sctp")}} property.

You can, in turn, identify the `RTCDtlsTransport` used to securely encapsulate the data channels' SCTP communications by looking at the `RTCSctpTransport` object's {{domxref("RTCSctpTransport.transport", "transport")}} property.

## Examples

This example presents a function, `tallySenders()`, which iterates over an `RTCPeerConnection`'s {{domxref("RTCRtpSender")}}s, tallying up how many of them are in various states. The function returns an object containing properties whose values indicate how many of the senders are in each state.

```js
let pc = new RTCPeerConnection({ bundlePolicy: "max-bundle" });

// …

function tallySenders(pc) {
  let results = {
    transportMissing: 0,
    connectionPending: 0,
    connected: 0,
    closed: 0,
    failed: 0,
    unknown: 0,
  };

  let senderList = pc.getSenders();
  senderList.forEach((sender) => {
    let transport = sender.transport;

    if (!transport) {
      results.transportMissing++;
    } else {
      switch (transport.state) {
        case "new":
        case "connecting":
          results.connectionPending++;
          break;
        case "connected":
          results.connected++;
          break;
        case "closed":
          results.closed++;
          break;
        case "failed":
          results.failed++;
          break;
        default:
          results.unknown++;
          break;
      }
    }
  });
  return results;
}
```

Note that in this code, the `new` and `connecting` states are being treated as a single `connectionPending` status in the returned object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCRtpSender.transport")}} and {{domxref("RTCRtpReceiver.transport")}}
- {{DOMxRef("RTCSctpTransport.transport")}}
