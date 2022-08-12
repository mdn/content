---
title: SDP
slug: Glossary/SDP
tags:
  - Advanced
  - Collaborating
  - Glossary
  - Infrastructure
  - Protocol
  - WebRTC
---
**SDP** (Session Description {{glossary("Protocol")}}) is the standard describing a {{Glossary("P2P","peer-to-peer")}} connection. SDP contains the {{Glossary("codec")}}, source address, and timing information of audio and video.

Here is a typical SDP message:

```
v=0
o=alice 2890844526 2890844526 IN IP4 host.anywhere.com
s=
c=IN IP4 host.anywhere.com
t=0 0
m=audio 49170 RTP/AVP 0
a=rtpmap:0 PCMU/8000
m=video 51372 RTP/AVP 31
a=rtpmap:31 H261/90000
m=video 53000 RTP/AVP 32
a=rtpmap:32 MPV/90000
```

SDP is never used alone, but by protocols like {{Glossary("RTP")}} and {{Glossary("RTSP")}}. SDP is also a component of {{Glossary("WebRTC")}}, which uses SDP as a way of describing a session.

## See also

- [WebRTC protocols](/en-US/docs/Web/API/WebRTC_API/Protocols)
- [Session Description Protocol](https://en.wikipedia.org/wiki/Session_Description_Protocol) on Wikipedia
