---
title: RTCIceCandidate.protocol
slug: Web/API/RTCIceCandidate/protocol
tags:
- API
- ICE
- Property
- Protocol
- RTCIceCandidate
- Read-only
- Reference
- SDP
- WebRTC
- WebRTC API
browser-compat: api.RTCIceCandidate.protocol
---
<div>{{APIRef("WebRTC")}}</div>

<p>The <strong>{{domxref("RTCIceCandidate")}}</strong> interface's read-only <strong><code>protocol</code></strong> property is a string
    which indicates whether the candidate uses {{Glossary("UDP")}} or {{Glossary("TCP")}} as its transport protocol.</p>

<p>The <code>protocol</code> field's value is set from the <code>candidateInfo</code> options object passed to the {{domxref("RTCIceCandidate.RTCIceCandidate", "RTCIceCandidate()")}} constructor.
  You can't specify the value of <code>protocol</code> directly in the options object, but its value is automatically extracted from the object's <code>candidate</code> a-line, if it's formatted properly.</p>
    
<p><code>protocol</code> is <code>null</code> by default if not specified properly in the SDP, but this is an error condition and will result in a thrown exception when you call {{domxref("RTCPeerConnection.addIceCandidate()")}}.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var <em>protocol</em> = <em>RTCIceCandidate</em>.protocol;</pre>

<h3 id="Value">Value</h3>

<p>A {{domxref("DOMString")}} that indicates what network protocol the candidate uses:</p>

  <dl>
    <dt><code>tcp</code></dt>
    <dd>The candidate, if selected, would use {{Glossary("TCP")}} as the transport protocol for its data. The {{domxref("RTCIceCandidate.tcpType", "tcpType")}} property provides additional information about the kind of TCP candidate represented by the object.</dd>
    <dt><code>udp</code></dt>
    <dd>The candidate will use the {{Glossary("UDP")}} transport protocol for its data. This is the preferred protocol for media interactions because of its better performance profile.</dd>
   </dl>

<div class="notecard note">
  <p><strong>Note:</strong> If <code>protocol</code> is <code>null</code> — and <code>protocol</code> is supported by the {{Glossary("user agent")}} — passing the
    candidate to {{domxref("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}} will fail, throwing an <code>OperationError</code> exception.</p>
</div>

<h2 id="Usage_notes">Usage notes</h2>

<p>Here's an example candidate a-line from an ICE transaction:</p>

<pre>a=candidate:4234997325 1 udp 2043278322 192.168.0.56 44323 typ host</pre>

<p>The third field, <code>"udp"</code>, is the protocol type, indicating that the
  candidate would use the UDP transport protocol.</p>

<h2 id="Example">Example</h2>

<p>This code snippet examines the value of <code>protocol</code> to decide if it should
  look at the value of {{domxref("RTCIceCandidate.tcpType", "tcpType")}} to see if it's a
  <strong>simultaneous-open</strong> (<strong>S-O</strong>) candidate.</p>

<pre class="brush: js">if (candidate.protocol == "tcp") {
  if (candidate.tcpType == "so") {
    adjustForSimultaneousOpen(candidate);
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
