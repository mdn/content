---
title: TCP handshake
slug: Glossary/TCP_handshake
page-type: glossary-definition
---

{{glossary('Transmission Control Protocol (TCP)','TCP (Transmission Control Protocol)')}} uses a **three-way handshake** (aka TCP-handshake, three message handshake, and/or SYN-SYN-ACK) to set up a TCP/IP connection over an IP based network.

The three messages transmitted by TCP to negotiate and start a TCP session are nicknamed SYN, _SYN-ACK_, and ACK for **SYN**chronize, **SYN**chronize-**ACK**nowledgement, and **ACK**nowledge respectively. The three message mechanism is designed so that two computers that want to pass information back and forth to each other can negotiate the parameters of the connection before transmitting data such as HTTP browser requests.

The host, generally the browser, sends a TCP SYNchronize packet to the server. The server receives the SYN and sends back a SYNchronize-ACKnowledgement. The host receives the server's SYN-ACK and sends an ACKnowledge. The server receives ACK and the TCP socket connection is established.

This handshake step happens after a {{glossary('DNS', 'DNS lookup')}} and before the {{glossary('TLS')}} handshake, when creating a secure connection. The connection can be terminated independently by each side of the connection via a four-way handshake.
To terminate an established TCP connection, the following 4 TCP packets are needed to be exchanged. Which you can understand with the statements below:

1. Host A → Host B: FIN flag set.
2. Host B → Host A: ACK flag set.
3. Host B → Host A: FIN flag set.
4. Host A → Host B: ACK flag set.
These 4 steps are known as a TCP 4-way handshake, which is necessary to terminate a TCP connection. For the termination of the established TCP connection, the following steps are necessary for the process.
Firstly, from one side of the connection, either from the client or the server the FIN flag will be sent as the request for the termination of the connection.
 In the second step, whoever receives the FIN flag will then be sending an ACK flag as the acknowledgment for the closing request to the other side.
 And, at the Later step, the server will also send a FIN flag as the closing signal to the other side.
In the final step, the TCP, who received the final FIN flag, will be sending an ACK flag as the final Acknowledgement for the suggested connection closing.
Since the Four main steps are required to close an active connection, so, it is called a four-way handshake.

## See also

- [Transport Layer Security (TLS) protocol](/en-US/docs/Web/Security/Transport_Layer_Security)
- {{Glossary("HTTPS")}}
- [Transport Layer Security](https://en.wikipedia.org/wiki/Transport_Layer_Security) on Wikipedia
