---
title: ICE
slug: Glossary/ICE
page-type: glossary-definition
---

{{GlossarySidebar}}

**ICE** (_Interactive Connectivity Establishment_) is a framework used by {{glossary("WebRTC")}} (among other technologies) for connecting two peers, regardless of network topology (usually for audio and video chat). This protocol lets two peers find and establish a connection with one another even though they may both be using Network Address Translator ({{glossary("NAT")}}) to share a global IP address with other devices on their respective local networks.

The framework algorithm looks for the lowest-latency path for connecting the two peers, trying these options in order:

1. Direct UDP connection (In this case—and only this case—a {{glossary("STUN")}} server is used to find the network-facing address of a peer)
2. Direct TCP connection, via the HTTP port
3. Direct TCP connection, via the HTTPS port
4. Indirect connection via a relay/{{glossary("TURN")}} server (if a direct connection fails, e.g., if one peer is behind a firewall that blocks NAT traversal)

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API), the principal web-related protocol which uses ICE
- [WebRTC protocols](/en-US/docs/Web/API/WebRTC_API/Protocols)
- {{rfc("8445")}}, the IETF specification for ICE
- {{domxref("RTCIceCandidate")}}, the interface representing an ICE candidate
