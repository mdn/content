---
title: UDP (User Datagram Protocol)
slug: Glossary/UDP
page-type: glossary-definition
---

{{GlossarySidebar}}

**UDP** (User Datagram Protocol) is a long standing {{glossary("protocol")}} used together with {{glossary("IPv6","IP")}} for sending data when transmission speed and efficiency matter more than security and reliability.

UDP uses a simple [connectionless communication](https://en.wikipedia.org/wiki/Connectionless_communication) model with a minimum of protocol mechanism. UDP provides [checksums](https://en.wikipedia.org/wiki/Checksum) for data integrity, and [port numbers](https://en.wikipedia.org/wiki/Port_numbers) for addressing different functions at the source and destination of the datagram. It has no [handshaking](https://en.wikipedia.org/wiki/Handshaking) dialogues, and thus exposes the user's program to any [unreliability](<https://en.wikipedia.org/wiki/Reliability_(computer_networking)>) of the underlying network; There is no guarantee of delivery, ordering, or duplicate protection. If error-correction facilities are needed at the network interface level, an application may use the [Transmission Control Protocol](https://en.wikipedia.org/wiki/Transmission_Control_Protocol) (TCP) or [Stream Control Transmission Protocol](https://en.wikipedia.org/wiki/Stream_Control_Transmission_Protocol) (SCTP) which are designed for this purpose.

UDP is suitable for purposes where error checking and correction are either not necessary or are performed in the application; UDP avoids the overhead of such processing in the [protocol stack](https://en.wikipedia.org/wiki/Protocol_stack). Time-sensitive applications often use UDP because dropping packets is preferable to waiting for packets delayed due to [retransmission](<https://en.wikipedia.org/wiki/Retransmission_(data_networks)>), which may not be an option in a [real-time system](https://en.wikipedia.org/wiki/Real-time_system).

## See also

- [User Datagram Protocol](https://en.wikipedia.org/wiki/User_Datagram_Protocol) on Wikipedia
- [Specification](https://datatracker.ietf.org/doc/html/rfc768)
