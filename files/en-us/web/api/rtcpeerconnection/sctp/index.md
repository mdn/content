---
title: RTCPeerConnection.sctp
slug: Web/API/RTCPeerConnection/sctp
page-type: web-api-instance-property
tags:
  - Property
  - RTCPeerConnection
  - Reference
  - SCTP
  - WebRTC
browser-compat: api.RTCPeerConnection.sctp
---

{{APIRef("WebRTC")}}

The read-only **`sctp`** property on the
{{domxref("RTCPeerConnection")}} interface returns an {{domxref("RTCSctpTransport")}}
describing the {{Glossary("SCTP")}} transport over which SCTP data is being sent and
received. If SCTP hasn't been negotiated, this value is `null`.

The SCTP transport is used for transmitting and receiving data for any and all
{{domxref("RTCDataChannel")}}s on the peer connection.

## Value

A {{domxref("RTCSctpTransport")}} object describing the SCTP transport being used by
the {{domxref("RTCPeerConnection")}} for transmitting and receiving on its data
channels, or `null` if SCTP negotiation hasn't happened.

## Example

```js
const pc = new RTCPeerConnection();

const channel = pc.createDataChannel("Mydata");
channel.onopen = (event) => {
  channel.send("sending a message");
};
channel.onmessage = (event) => {
  console.log(event.data);
};

// Determine the largest message size that can be sent

const sctp = pc.sctp;
const maxMessageSize = sctp.maxMessageSize;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
- {{domxref("RTCPeerConnection")}}
- {{domxref("RTCDataChannel")}}
- {{Glossary("SCTP")}}
