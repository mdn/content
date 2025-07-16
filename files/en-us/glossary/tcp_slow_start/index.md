---
title: TCP slow start
slug: Glossary/TCP_slow_start
page-type: glossary-definition
sidebar: glossarysidebar
---

{{glossary('TCP')}} slow start is an algorithm that detects the available network bandwidth for packet transfer and balances transmission speed according to the network's capabilities.
The slow start mechanism prevents congestion when a network's capabilities are initially unknown, and slowly increases the volume of information sent until the network's maximum capacity is found.

Network congestion occurs when more data is sent than the network is able to transfer between nodes at any given time.
When a network is congested, machines on the network experience degraded quality of service, including slow data transfers and dropped packets.

The slow start algorithm is a major part of TCP congestion control, as it ensures that new connections progressively increase data rates and that those rates don't overwhelm other nodes.

## See also

- [Populating the page: how browsers work](/en-US/docs/Web/Performance/Guides/How_browsers_work)
- [Overview of HTTP](/en-US/docs/Web/HTTP/Guides/Overview)
