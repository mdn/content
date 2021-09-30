---
title: TCP handshake
slug: Glossary/TCP_handshake
tags:
  - Glossary
  - Networking
  - SSL
  - Security
  - TCP
  - TCP handshake
  - TLS
  - Web Performance
---
<p>{{glossary('Transmission Control Protocol (TCP)','TCP (Transmission Control Protocol)')}} uses a <strong>three-way handshake </strong>(aka TCP-handshake, three message handshake, and/or SYN-SYN-ACK) to set up a TCP/IP connection over an IP based network.<p>

<p>The three messages transmitted by TCP to negotiate and start a TCP session are nicknamed SYN, <em>SYN-ACK</em>, and ACK for <strong>SYN</strong>chronize, <strong>SYN</strong>chronize-<strong>ACK</strong>nowledgement, and <strong>ACK</strong>nowledge respectively. The three message mechanism is designed so that two computers that want to pass information back and forth to each other can negotiate the parameters of the connection before transmitting data such as HTTP browser requests.</p>

<p>The host, generally the browser, sends a TCP SYNchronize packet to the server. The server receives the SYN and sends back a SYNchronize-ACKnowledgement. The host receives the server's SYN-ACK and sends an ACKnowledge. The server receives ACK and the TCP socket connection is established.</p>

<p>This handshake step happens after a {{glossary('DNS', 'DNS lookup')}} and before the {{glossary('TLS')}} handshake, when creating a secure connection. The connection can be terminated independently by each side of the connection via a four-way handshake.</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/Security/Transport_Layer_Security">Transport Layer Security (TLS) protocol</a></li>
 <li>{{Glossary("HTTPS")}}</li>
 <li>{{Interwiki("wikipedia", "Transport Layer Security")}} on Wikipedia</li>
</ul>
