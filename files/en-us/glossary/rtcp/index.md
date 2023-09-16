---
title: RTCP (RTP Control Protocol)
slug: Glossary/RTCP
page-type: glossary-definition
---

{{GlossarySidebar}}

The **RTP Control Protocol** (**RTCP**) is a partner to the {{Glossary("RTP")}} protocol. RTCP is used to provide control and statistical information about an RTP media streaming session.

This lets control and statistics packets be separated logically and functionally from the media streaming while using the underlying packet delivery layer to transmit the RTCP signals as well as the RTP and media contents.

RTCP periodically transmits control packets to all of an RTP session's participants, using the same mechanism that is being used to transmit the data packets. That underlying protocol handles the multiplexing of the data and control packets and may use separate network ports for each type of packet.

## See also

- [Introduction to the Real-time Transport Protocol](/en-US/docs/Web/API/WebRTC_API/Intro_to_RTP)
- [RTP Control Protocol](https://en.wikipedia.org/wiki/RTP_Control_Protocol)
- {{RFC(3550, "RFC 3550 Section 6", 6)}}
