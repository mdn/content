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
<p><strong>SDP </strong>(Session Description {{glossary("Protocol")}}) is the standard describing a {{Glossary("P2P","peer-to-peer")}} connection. SDP contains the {{Glossary("codec")}}, source address, and timing information of audio and video.</p>

<p>Here is a typical SDP message:</p>

<pre>   v=0
   o=alice 2890844526 2890844526 IN IP4 host.anywhere.com
   s=
   c=IN IP4 host.anywhere.com
   t=0 0
   m=audio 49170 RTP/AVP 0
   a=rtpmap:0 PCMU/8000
   m=video 51372 RTP/AVP 31
   a=rtpmap:31 H261/90000
   m=video 53000 RTP/AVP 32
   a=rtpmap:32 MPV/90000</pre>

<p>SDP is never used alone, but by protocols like {{Glossary("RTP")}} and {{Glossary("RTSP")}}. SDP is also as component of {{Glossary("WebRTC")}}, which uses SDP as a way of describing a session.</p>

<h2 id="see_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/WebRTC_API/Protocols">WebRTC protocols</a></li>
 <li>{{Interwiki("wikipedia", "Session Description Protocol")}} on Wikipedia</li>
</ul>
