---
title: Jitter
slug: Glossary/Jitter
page-type: glossary-definition
sidebar: glossarysidebar
---

**Jitter** is the term used in computer networking to refer to [packet delay variation](https://en.wikipedia.org/wiki/Packet_delay_variation) — the variance in the rate at which packets arrive at a destination (the average of the squared difference from the mean packet arrival rate).

"High jitter" indicates that packets are arriving at significantly varying rates, possibly due to network congestion, packet loss, and routing of packets in a stream through different paths.
High jitter can significantly degrade the performance of real-time web applications, including voice/video streaming and online gaming.

## Jitter buffer

Network protocols and applications, such as WebRTC, use a "jitter buffer" to mitigate the effects of packet delay variation.
Jitter buffers temporarily store incoming packets and then release them at a steady, synchronized rate.
They may also use forward error correction to fix corrupted packets, re-request missing packets, [insert audio samples to conceal missing packets](https://en.wikipedia.org/wiki/Packet_loss_concealment), slow down or speed up sample playout, and so on.
This process smooths out the arrival times of packets and ensures a more consistent playout of real-time audio and video.

## See also

- [How WebRTC's NetEQ Jitter Buffer Provides Smooth Audio](https://webrtchacks.com/how-webrtcs-neteq-jitter-buffer-provides-smooth-audio/#post-4560-_mv3ivinthkf5) (webrtchacks.com, June 2025)
