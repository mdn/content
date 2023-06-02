---
title: DTLS (Datagram Transport Layer Security)
slug: Glossary/DTLS
page-type: glossary-definition
---

{{GlossarySidebar}}

**Datagram Transport Layer Security** (**DTLS**) is a protocol used to secure datagram-based communications. It's based on the stream-focused Transport Layer Security ({{Glossary("TLS")}}), providing a similar level of security. As a datagram protocol, DTLS doesn't guarantee the order of message delivery, or even that messages will be delivered at all. However, DTLS gains the benefits of datagram protocols, too; in particular, the lower overhead and reduced latency.

These features are especially useful for one of the most common areas in which DTLS comes into play: {{Glossary("WebRTC")}}. All of the WebRTC related protocols are required to encrypt their communications using DTLS; this includes {{Glossary("SCTP")}}, {{Glossary("RTP", "SRTP")}}, and {{Glossary("STUN")}}.

## See also

- [Datagram Transport Layer Security](https://en.wikipedia.org/wiki/Datagram_Transport_Layer_Security) on Wikipedia
- Specifications:

  - {{RFC(9147, "The Datagram Transport Layer Security (DTLS) Protocol Version 1.3")}}
  - {{RFC(6347, "Datagram Transport Layer Security Version 1.2")}}

- Related specification

  - {{RFC(5763, "Framework for Establishing a Secure Real-time Transport Protocol (SRTP) Security Context Using DTLS")}}
  - {{RFC(5764, "DTLS Extension to Establish Keys for the Secure Real-time Transport Protocol (SRTP)")}}
  - {{RFC(6083, "DTLS for Stream Control Transmission Protocol (SCTP)")}}
  - {{RFC(8261, "Datagram Transport Layer Security (DTLS) Encapsulation of SCTP Packets")}}
  - {{RFC(7350, "Datagram Transport Layer Security (DTLS) as Transport for Session Traversal Utilities for NAT (STUN)")}}
  - {{RFC(7925, "TLS / DTLS Profiles for the Internet of Things")}}
