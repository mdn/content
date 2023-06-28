---
title: Packet
slug: Glossary/Packet
page-type: glossary-definition
---

{{GlossarySidebar}}

A packet, or network packet, is a formatted chunk of data sent over a network. The main components of a network packet are the user data and control information. The user data is known as the _payload_. The control information is the information for delivering the payload. It consists of network addresses for the source and destination, sequencing information, and error detection codes and is generally found in packet headers and footer.

## What a packet contains

### Hop limit

A hop occurs when a packet is passed from one network to the next network. It is a field that decreases by one each time a packet goes through; once the hop limit reaches 0, the send operation has failed and the packet is discarded.

Over time the number packets can cause traversing within closed circuits, the number of packets circulating would build up and then ultimately lead to the networking in failing.

### Error detection and correction

Error detection and correction are codes that are used to detect and apply corrections to the errors that occur when data is transmitted to the receiver. There are two types of error corrections backward and forward error correction. Backward error correction is when the receiver requests the sender to retransmit the entire data unit. Forward error correction is when the receiver uses the error-correcting code which automatically corrects the errors

At the transmitter, the calculation is performed before the packet is sent. When received at the destination, the checksum is recalculated, and compared with the one in the packet.

### Priority

This field indicates which packet should have higher priority over the others. The high priority queue is emptied more quickly than lower priority queues when the network is congested.

### Addresses

When routing network packets it requires two network addresses the source address of the sending host, and the destination address of the receiving host.

### User Data - Payload

Payload is the data that is carried on behalf of an application. It is usually of variable length, up to a maximum that is set by the network protocol and sometimes the equipment on the route.

## References used

- [Network packet](https://en.wikipedia.org/wiki/Network_packet)
- [Hop (networking)](<https://en.wikipedia.org/wiki/Hop_(networking)>)
- [How error detection and correction works](https://www.techradar.com/news/computing/how-error-detection-and-correction-works-1080736)
