---
title: SDP
slug: Glossary/SDP
page-type: glossary-definition
sidebar: glossarysidebar
---

**SDP** (Session Description {{glossary("Protocol")}}) is a standard for describing multimedia sessions. It contains information such as media types, transport addresses, timing, and {{Glossary("codec","codecs")}}.

Here is a typical SDP message:

```plain
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

SDP is used together with protocols such as {{Glossary("RTP")}} and {{Glossary("RTSP")}}. It is also used by {{Glossary("WebRTC")}} to describe multimedia sessions.

During WebRTC [session negotiation](/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling#session_negotiation), peers exchange offers and answers through a signaling channel. Each offer or answer is a session description containing SDP that describes the proposed connection configuration, as represented by {{domxref("RTCSessionDescription")}}. An application uses {{domxref("RTCPeerConnection.setLocalDescription()")}} to apply its own description and {{domxref("RTCPeerConnection.setRemoteDescription()")}} to apply a description received from the other peer.

## See also

- {{domxref("RTCSessionDescription")}}
- {{RFC(8866, "Session Description Protocol")}}
- [WebRTC protocols](/en-US/docs/Web/API/WebRTC_API/Protocols)
- [Session Description Protocol](https://en.wikipedia.org/wiki/Session_Description_Protocol) on Wikipedia
