---
title: TCP handshake
slug: Glossary/TCP_handshake
page-type: glossary-definition
---

{{GlossarySidebar}}

{{glossary('TCP','TCP (Transmission Control Protocol)')}} uses a **three-way handshake** (aka TCP-handshake, three message handshake, and/or SYN-SYN-ACK) to set up a TCP/IP connection over an IP based network. Similarly, a **four-way handshake** is used to terminate the connection.

The three messages transmitted by TCP to negotiate and start a TCP session are nicknamed SYN, _SYN-ACK_, and ACK for **SYN**chronize, **SYN**chronize-**ACK**nowledgement, and **ACK**nowledge respectively. The three message mechanism is designed so that two computers that want to pass information back and forth to each other can negotiate the parameters of the connection before transmitting data such as HTTP browser requests.

1. The initiator, generally the browser, sends a TCP SYNchronize packet to the other host, generally the server.
2. The server receives the SYN and sends back a SYNchronize-ACKnowledgement.
3. The initiator receives the server's SYN-ACK and sends an ACKnowledge. The server receives ACK and the TCP socket connection is established.

This handshake step happens after a {{glossary('DNS', 'DNS lookup')}} and before the {{glossary('TLS')}} handshake, when creating a secure connection. The connection can be terminated independently by each side of the connection via a four-way handshake, where a pair of FIN (finish) and ACK messages are sent and received independently by each side.

1. The initiator sends a FIN packet to the other host.
2. The other host sends an ACK packet back to the initiator.
3. Now, the connection is half-closed, and the other host can still send data. (For example, the server can finish off sending data to the client when the client has closed its connection to the server.)
4. The other host sends a FIN packet to the initiator.
5. The initiator sends an ACK packet back to the other host.

## See also

- [Transport Layer Security (TLS) protocol](/en-US/docs/Web/Security/Transport_Layer_Security)
- Related glossary terms:
  - {{Glossary("HTTPS")}}
- [Transport Layer Security](https://en.wikipedia.org/wiki/Transport_Layer_Security) on Wikipedia
