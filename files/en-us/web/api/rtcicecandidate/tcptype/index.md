---
title: RTCIceCandidate.tcpType
slug: Web/API/RTCIceCandidate/tcpType
tags:
- API
- Candidate
- ICE
- Media
- RTCIceCandidate
- Read-only
- Reference
- Property
- SDP
- WebRTC
- WebRTC API
- tcpType
browser-compat: api.RTCIceCandidate.tcpType
---
<div>{{APIRef("WebRTC")}}</div>

<p>The <strong>{{domxref("RTCIceCandidate")}}</strong> interface's read-only <strong><code>tcpType</code></strong> property is included on TCP candidates to provide additional details about the candidate type.</p>

<p>The <code>tcpType</code> field's value is set from the <code>candidateInfo</code> options object passed to the {{domxref("RTCIceCandidate.RTCIceCandidate", "RTCIceCandidate()")}} constructor.
  You can't specify the value of <code>tcpType</code> directly in the options object, but its value is automatically extracted from the object's <code>candidate</code> a-line, if it's formatted properly.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var <em>tcpType</em> = <em>RTCIceCandidate</em>.tcpType;</pre>

<h3 id="Value">Value</h3>

<p>If the {{domxref("RTCIceCandidate.protocol","protocol")}} is "tcp", <code>tcpType</code> has one of the following values:</p>

  <dl>
    <dt><code>"active"</code></dt>
    <dd>The transport will try to open an outbound connection but won't receive incoming connection requests.</dd>
    <dt><code>"passive"</code></dt>
    <dd>The transport will receive incoming connection requests but won't try to open an outbound connection.</dd>
    <dt><code>"so"</code></dt>
    <dd>The transport will try to open a connection simultaneously with its peer.</dd>
   </dl>

<p><code>tcpType</code> is <code>null</code> for {{Glossary("UDP")}} candidates.</p>

<h2 id="Example">Example</h2>

<p>In this example, the candidate's {{domxref("RTCIceCandidate.protocol", "protocol")}}
  and <code>tcpType</code> are used to adjust the user interface for simultaneous-open TCP candidates.</p>

<pre class="brush: js">if (candidate.protocol == "tcp" &amp;&amp; candidate.tcpType == "so") {
    adjustForSimultaneousOpen(candidate);
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/API/WebRTC_API">WebRTC API</a></li>
  <li><a href="/en-US/docs/Web/API/WebRTC_API/Protocols">Introduction to WebRTC protocols</a></li>
  <li><a href="/en-US/docs/Web/API/WebRTC_API/Connectivity">WebRTC connectivity</a></li>
  <li>{{domxref("RTCIceCandidate.protocol")}}</li>
  <li>{{domxref("RTCIceCandidate.type")}}</li>
</ul>
