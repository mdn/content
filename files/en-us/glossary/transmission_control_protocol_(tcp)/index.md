---
title: Transmission Control Protocol (TCP)
slug: Glossary/Transmission_Control_Protocol_(TCP)
tags:
  - Glossary
  - Networking
  - SSL
  - Security
  - TCP
  - TLS
  - Web Performance
---
TCP (Transmission Control Protocol) is a Transport Layer host-to-host protocol for connection-oriented communication between two computers on an IP network. TCP uses virtual ports to create a virtual end-to-end connection that can reuse the physical connections between two computers. TCP encapsulates higher level protocol data such as {{glossary('HTTP')}} and, {{glossary('SMTP')}} (email) .

## TCP Handshake

The **TCP three-way handshake,** also called the TCP-handshake, three message handshake, and/or SYN-SYN-ACK, is the method used by TCP to set up a TCP/IP connection over an IP-based network. The three messages transmitted by TCP to negotiate and start a TCP session are nicknamed SYN, _SYN-ACK_, ACK for **SYN**chronize, **SYN**chronize-**ACK**nowledgement, and **ACK**nowledge. The three message mechanism is designed for the two computers that want to pass information back and forth and can negotiate the parameters of the connection before transmitting data such as HTTP browser requests.

## See also

- [Transport Layer Security (TLS) protocol](/en-US/docs/Web/Security/Transport_Layer_Security)
- {{Glossary("HTTPS")}}
- [How browsers work](/en-US/docs/Web/Performance/How_browsers_work)
- {{Interwiki("wikipedia", "Transport Layer Security")}} on Wikipedia
