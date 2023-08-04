---
title: TCP slow start
slug: Glossary/TCP_slow_start
page-type: glossary-definition
---

{{GlossarySidebar}}

{{glossary('TCP')}} slow start helps buildup transmission speeds to the network's capabilities. It does this without initially knowing what those capabilities are and without creating congestion. {{glossary('TCP')}} slow start is an algorithm used to detect the available bandwidth for packet transmission, and balances the speed of a network connection. It prevents the appearance of network congestion whose capabilities are initially unknown, and slowly increases the volume of information diffused until the network's maximum capacity is found.

To implement TCP slow start, the congestion window (_cwnd_) sets an upper limit on the amount of data a source can transmit over the network before receiving an acknowledgment (ACK). The slow start threshold (_ssthresh_) determines the (de)activation of slow start. When a new connection is made, cwnd is initialized to one TCP data or acknowledgment packet, and waits for an acknowledgement, or ACK. When that ACK is received, the congestion window is incremented until the _cwnd_ is greater than _ssthresh_. Slow start also terminates when congestion is experienced.

## Congestion control

Congestion itself is a state that happens within a network layer when the message traffic is too busy it slows the network response time. The server sends data in TCP packets, the user's client then confirms delivery by returning acknowledgements, or ACKs. The connection has a limited capacity depending on hardware and network conditions. If the server sends too many packets too quickly, they will be dropped. Meaning, there will be no acknowledgement. The server registers this as missing ACKs. Congestion control algorithms use this flow of sent packets and ACKs to determine a send rate.

## See also

- [Populating the page: how browsers work](/en-US/docs/Web/Performance/How_browsers_work)
- [http overview](/en-US/docs/Web/HTTP/Overview)
