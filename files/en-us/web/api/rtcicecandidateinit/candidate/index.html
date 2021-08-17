---
title: RTCIceCandidateInit.candidate
slug: Web/API/RTCIceCandidateInit/candidate
tags:
  - API
  - Candidate
  - ICE
  - Media
  - Property
  - RTCIceCandidateInit
  - SDP
  - Signaling
  - WebRTC
  - WebRTC API
  - candidate-attribute
browser-compat: api.RTCIceCandidateInit.candidate
---
<div>{{APIRef("WebRTC")}}</div>

<p>The optional property <code><strong>candidate</strong></code> in the <strong>{{domxref("RTCIceCandidateInit")}}</strong> dictionary specifies the value of the {{domxref("RTCIceCandidate")}} object's {{domxref("RTCIceCandidate.candidate", "candidate")}} property.</p>

<h2 id="Value">Value</h2>

<!-- this is the value that would have been set in /en-US/docs/Web/API/RTCIceCandidate/candidate-->

<p>A {{domxref("DOMString")}} describing the properties of the candidate, taken directly
  from the {{Glossary("SDP")}} attribute <code>"candidate"</code>. The candidate string
  specifies the network connectivity information for the candidate. If the
  <code>candidate</code> is an empty string (<code>""</code>), the end of the candidate
  list has been reached; this candidate is known as the "end-of-candidates" marker.</p>

<p>The syntax of the candidate string is described in {{RFC(5245, "", 15.1)}}. For an
  a-line (attribute line) that looks like this:</p>

<pre>a=candidate:4234997325 1 udp 2043278322 192.168.0.56 44323 typ host</pre>

<p>the corresponding <code>candidate</code> string's value will be
  <code>"candidate:4234997325 1 udp 2043278322 192.168.0.56 44323 typ host"</code>.</p>

<p>The {{Glossary("user agent")}} always prefers candidates with the highest
  {{domxref("RTCIceCandidate.priority", "priority")}}, all else being equal. In the
  example above, the priority is <code>2043278322</code>. The attributes are all separated
  by a single space character, and are in a specific order. The complete list of
  attributes for this example candidate is:</p>

<ul>
  <li>{{domxref("RTCIceCandidate.foundation", "foundation")}} = 4234997325</li>
  <li>{{domxref("RTCIceCandidate.component", "component")}} = <code>"rtp"</code> (the
    number 1 is encoded to this string; 2 becomes <code>"rtcp"</code>)</li>
  <li>{{domxref("RTCIceCandidate.protocol", "protocol")}} = <code>"udp"</code></li>
  <li>{{domxref("RTCIceCandidate.priority", "priority")}} = 2043278322</li>
  <li>{{domxref("RTCIceCandidate/address", "ip")}} = <code>"192.168.0.56"</code></li>
  <li>{{domxref("RTCIceCandidate.port", "port")}} = 44323</li>
  <li>{{domxref("RTCIceCandidate.type", "type")}} = <code>"host"</code></li>
</ul>


<h2 id="Example">Example</h2>

<p>When a new ICE candidate is received by your signaling code from the remote peer, you need to construct the <code>RTCIceCandidate</code> object that encapsulates it. This is done in the event handler for the {{event("icecandidate")}} event. If your client-side signaling layer builds and transmits a JSON string including the candidate to the remote peer, the remote peer might handle receiving that JSON message like this:</p>

<pre class="brush: js">function gotICECandidateMessage(msg) {
  var iceCandidate = new RTCIceCandidate({
        candidate: msg.candidate;
  });

  pc.addIceCandidate(iceCandidate).catch({
    /* handle error */
  });
}
</pre>

<p>It's helpful to note that for backward compatibility with older versions of the WebRTC specification, the {{domxref("RTCIceCandidate.RTCIceCandidate", "RTCIceCandidate()")}} constructor accepts the value of <code>candidate</code> as its only input, in place of the <code>RTCIceCandidateInit</code> dictionary. That usage would change the above sample to look like this:</p>

<pre class="brush: js">function gotICECandidateMessage(msg) {
  var iceCandidate = new RTCIceCandidate(msg.candidate);

  pc.addIceCandidate(iceCandidate).catch({
    /* handle error */
  });
}</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/WebRTC_API">WebRTC API</a></li>
 <li>{{domxref("RTCIceCandidate.candidate")}}</li>
 <li>{{domxref("RTCPeerConnection.addIceCandidate()")}}</li>
 <li>{{event("icecandidate")}}</li>
 <li><a href="/en-US/docs/Web/API/WebRTC_API/Session_lifetime">Lifetime of a WebRTC session</a></li>
</ul>
