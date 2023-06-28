---
title: QUIC
slug: Glossary/QUIC
page-type: glossary-definition
---

{{GlossarySidebar}}

**QUIC** is a multiplexed transport protocol implemented on UDP. It is used instead of {{Glossary("TCP")}} as the transport layer in HTTP/3.

QUIC was designed to provide quicker setup and lower latency for HTTP connections. In particular:

- In TCP, the initial TCP handshake is optionally followed by a TLS handshake, which must complete before data can be transmitted. Since TLS is almost ubiquitous now, QUIC integrates the TLS handshake into the initial QUIC handshake, reducing the number of messages that must be exchanged during setup.

- HTTP/2 is a multiplexed protocol, allowing multiple simultaneous HTTP transactions. However, the transactions are multiplexed over a single TCP connection, meaning that packet loss and subsequent retransmissions at the TCP layer can block all transactions. QUIC avoids this by running over UDP and implementing packet loss detection and retransmission separately for each stream, meaning that packet loss only blocks the particular stream whose packets were lost.

## See also

- {{rfc("9000", "the QUIC specification")}}
- {{rfc("9114", "the HTTP/3 specification")}}
