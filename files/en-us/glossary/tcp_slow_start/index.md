---
title: TCP slow start
slug: Glossary/TCP_slow_start
page-type: glossary-definition
sidebar: glossarysidebar
---

{{glossary('TCP')}} slow start is an algorithm that detects the available network bandwidth for packet transmission and balances transmission speed according to the network's capabilities.
The slow start mechanism prevents congestion when a network's capabilities are initially unknown, and slowly increases the volume of information sent and received until the network's maximum capacity is found.

To implement TCP slow start, the congestion window (_cwnd_) sets an upper limit on the amount of data a source can transmit over the network before receiving an acknowledgment (ACK). The slow start threshold (_ssthresh_) determines the (de)activation of slow start. When a new connection is made, cwnd is initialized to one TCP data or acknowledgment packet, and waits for an ACK. When that ACK is received, the congestion window is incremented until the _cwnd_ is greater than _ssthresh_. Slow start also terminates when congestion is experienced.

## Congestion control

Network congestion occurs when more data is sent than the network is able to transfer between nodes at a particular time.
When a network is congested, machines on the network experience degraded quality of service, including slow data transfers and dropped packets.
The slow start algorithm is one major part of TCP congestion control, as it ensures that new connections progressively increase data rates and that those rates do not exceed configured congestion limits.

## See also

- [Populating the page: how browsers work](/en-US/docs/Web/Performance/Guides/How_browsers_work)
- [Overview of HTTP](/en-US/docs/Web/HTTP/Guides/Overview)
