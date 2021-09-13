---
title: RTCSessionDescription.sdp
slug: Web/API/RTCSessionDescription/sdp
tags:
- Experimental
- Property
- RTCSessionDescription
- Reference
- SDP
- WebRTC
browser-compat: api.RTCSessionDescription.sdp
---
<p>{{APIRef("WebRTC")}}{{SeeCompatTable}}</p>

<p>The property <strong><code>RTCSessionDescription.sdp</code></strong> is a read-only
  {{domxref("DOMString")}} containing the {{Glossary("SDP")}} which describes the session.
</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var <em>value</em> = <em>sessionDescription</em>.sdp;
<em>sessionDescription</em>.sdp = value;
</pre>

<h3 id="Value">Value</h3>

<p>The value is a {{domxref("DOMString")}} containing an SDP message like this one:</p>

<pre> v=0
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

<h2 id="Example">Example</h2>

<pre class="brush: js">// The remote description has been set previously on pc, an RTCPeerConnection

alert(pc.remoteDescription.sdp);
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/Guide/API/WebRTC">WebRTC</a></li>
  <li>The standard for using SDP in an offer/answer protocol {{rfc("3264")}}.</li>
</ul>
