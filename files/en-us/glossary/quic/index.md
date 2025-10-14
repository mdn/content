---
title: QUIC
slug: Glossary/QUIC
page-type: glossary-definition
sidebar: glossarysidebar
---

**QUIC** is a multiplexed transport protocol implemented on {{glossary("UDP")}}. It is used instead of {{Glossary("TCP")}} as the transport layer in {{glossary("HTTP 3", "HTTP/3")}}.

QUIC was designed to provide quicker setup and lower {{glossary("latency")}} for {{glossary("HTTP")}} connections. In particular:

- In TCP, the initial TCP handshake is optionally followed by a TLS handshake, which must complete before data can be transmitted. Since TLS is almost ubiquitous now, QUIC integrates the TLS handshake into the initial QUIC handshake, reducing the number of messages that must be exchanged during setup.

- HTTP/2 is a multiplexed protocol, allowing multiple simultaneous HTTP transactions. However, the transactions are multiplexed over a single TCP connection, meaning that packet loss and subsequent retransmissions at the TCP layer can block all transactions. QUIC avoids this by running over UDP and implementing packet loss detection and retransmission separately for each stream, meaning that packet loss only blocks the particular stream whose packets were lost.

In addition, QUIC help to resolve the {{glossary("HTTP 2", "HTTP/2")}} transport-layer {{glossary("head of line blocking", "head-of-line blocking")}} problem in HTTP/3, since it now runs over UDP instead of TCP, and thus HOL problem on HTTP no longer exists.

## See also

- Related glossary terms
  - {{glossary("HTTP")}}, {{glossary("HTTP 2", "HTTP/2")}}, {{glossary("HTTP 3", "HTTP/3")}}
  - {{glossary("TCP")}}, {{glossary("UDP")}}
  - {{glossary("Latency")}}, {{glossary("head of line blocking", "Head-of-line blocking")}}
- {{rfc("9000", "the QUIC specification")}}
- {{rfc("9114", "the HTTP/3 specification")}}
