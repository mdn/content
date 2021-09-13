---
title: RTCSessionDescription.type
slug: Web/API/RTCSessionDescription/type
tags:
- Experimental
- Property
- RTCSessionDescription
- Reference
- SDP
- Type
- WebRTC
browser-compat: api.RTCSessionDescription.type
---
<p>{{APIRef("WebRTC")}}{{SeeCompatTable}}</p>

<p>The property <strong><code>RTCSessionDescription.type</code></strong> is a read-only
  value of type <code>RTCSdpType</code> which describes the description's type.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var <em>value</em> = <em>sessionDescription</em>.type;
<em>sessionDescription</em>.type = value;
</pre>

<h3 id="Value">Value</h3>

<p>The possible values are defined by an enum of type RTCSdpType.</p>

<p>The allowed values are those of an enum of type <code>RTCSdpType</code>:</p>

<ul>
  <li><code>"offer"</code>, the description is the initial proposal in an offer/answer
    exchange.</li>
  <li><code>"answer"</code>, the description is the definitive choice in an offer/answer
    exchange.</li>
  <li><code>"pranswer"</code>, the description is a provisional answer and may be changed
    when the definitive choice will be given.</li>
  <li>"<code>rollback</code>", the description rolls back to offer/answer state to the
    last stable state.</li>
</ul>

<h2 id="Example">Example</h2>

<pre class="brush: js">// The remote description has been set previously on pc, a RTCPeerconnection

alert(pc.remoteDescription.type);
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/Guide/API/WebRTC">WebRTC</a></li>
</ul>
