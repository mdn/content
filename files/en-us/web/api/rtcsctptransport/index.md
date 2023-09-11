---
title: RTCSctpTransport
slug: Web/API/RTCSctpTransport
page-type: web-api-interface
browser-compat: api.RTCSctpTransport
---

{{APIRef("WebRTC")}}

The **`RTCSctpTransport`** interface provides information which describes a Stream Control Transmission Protocol (**{{Glossary("SCTP")}}**) transport. This provides information about limitations of the transport, but also provides a way to access the underlying Datagram Transport Layer Security (**{{Glossary("DTLS")}}**) transport over which SCTP packets for all of an {{DOMxRef("RTCPeerConnection")}}'s data channels are sent and received.

You don't create {{DOMxRef("RTCSctpTransport")}} objects yourself; instead, you get access to the `RTCSctpTransport` for a given `RTCPeerConnection` through its **{{DOMxRef("RTCPeerConnection.sctp", "sctp")}}** property.

Possibly the most useful property on this interface is its [`maxMessageSize`](#rtcsctptransport.maxmessagesize) property, which you can use to determine the upper limit on the size of messages you can send over a data channel on the peer connection.

{{InheritanceDiagram}}

## Instance properties

_Also inherits properties from: {{DOMxRef("EventTarget")}}_.

- {{DOMxRef("RTCSctpTransport.maxChannels")}} {{ReadOnlyInline}}
  - : An integer value indicating the maximum number of [`RTCDataChannel`](/en-US/docs/Web/API/RTCDataChannel) objects that can be opened simultaneously.
- {{DOMxRef("RTCSctpTransport.maxMessageSize")}} {{ReadOnlyInline}}
  - : An integer value indicating the maximum size, in bytes, of a message which can be sent using the {{DOMxRef("RTCDataChannel.send()")}} method.
- {{DOMxRef("RTCSctpTransport.state")}} {{ReadOnlyInline}}
  - : A string enumerated value indicating the state of the SCTP transport.
- {{DOMxRef("RTCSctpTransport.transport")}} {{ReadOnlyInline}}
  - : An {{DOMxRef("RTCDtlsTransport")}} object representing the {{Glossary("DTLS")}} transport used for the transmission and receipt of data packets.

## Events

Listen to these events using {{domxref("EventTarget.addEventListener", "addEventListener()")}} or by assigning an event listener to the `oneventname` property of this interface.

- {{domxref("RTCSctpTransport.statechange_event", "statechange")}}
  - : Sent when the {{DOMxRef("RTCSctpTransport.state")}} changes.

## Instance methods

_This interface has no methods, but inherits methods from: {{DOMxRef("EventTarget")}}._

## Example

TBD

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
- {{DOMxRef("RTCPeerConnection")}}
- {{DOMxRef("RTCPeerConnection.sctp")}}
