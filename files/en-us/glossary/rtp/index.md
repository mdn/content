---
title: RTP (Real-time Transport Protocol) and SRTP (Secure RTP)
slug: Glossary/RTP
tags:
  - Glossary
  - Network
  - Protocol
  - RTP
---
The **Real-time Transport Protocol** (**RTP**) is a network protocol which described how to transmit various media (audio, video) from one endpoint to another in a real-time fashion. RTP is suitable for video-streaming application, telephony over {{glossary("IP")}} like Skype and conference technologies.

The secure version of RTP, **SRTP**, is used by [WebRTC](/en-US/docs/Web/API/WebRTC_API), and uses encryption and authentication to minimize the risk of denial-of-service attacks and security breaches.

RTP is rarely used alone; instead, it is used in conjunction with other protocols like {{glossary("RTSP")}} and {{glossary("SDP")}}.

## See also

- [Introduction to the Real-time Transport Protocol](/en-US/docs/Web/API/WebRTC_API/Intro_to_RTP)
- [RTP](https://en.wikipedia.org/wiki/Real-time_Transport_Protocol) on Wikipedia
- {{RFC(3550)}} (one of the documents that specify precisely how the protocol works)
