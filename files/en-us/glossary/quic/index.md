---
title: QUIC
slug: Glossary/QUIC
tags:
  - Glossary
  - HTTP
  - QUIC
  - Reference
  - Web Performance
---
**Quick UDP Internet Connection**, or **QUIC**, is an experimental multiplexed transport protocol implemented on UDP. It was developed by Google as a way to experiment with ways to improve TCP and web application delivery.

As TCP is built into the kernel of many operating systems being able to experiment with changes, test them and implement modifications is an extremely slow process. The creation of QUIC allows developers to conduct experiments and try new things faster.

QUIC was designed to support the semantics of HTTP/2. It provides multiplexing, flow control, security and congestion control.

Key features of QUIC include:

- Reduction in connection establishment time.
- Improved congestion control.
- Multiplexing without head-of-line blocking.
- Forward error correction.
- Connection migration.

There is limited browser and server support for QUIC today.

### Resources

- [Chromium Projects Documentation](https://www.chromium.org/quic/)
- [IETF Draft](https://datatracker.ietf.org/doc/html/draft-tsvwg-quic-protocol-02)

## See also

- [HTTP/2](/en-US/docs/Glossary/HTTP_2)
