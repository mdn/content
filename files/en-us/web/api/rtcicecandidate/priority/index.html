---
title: RTCIceCandidate.priority
slug: Web/API/RTCIceCandidate/priority
tags:
- API
- Candidate
- ICE
- Property
- RTCIceCandidate
- Read-only
- Reference
- SDP
- WebRTC
- WebRTC API
- priority
browser-compat: api.RTCIceCandidate.priority
---
<div>{{APIRef("WebRTC")}}</div>

<p>The <strong>{{domxref("RTCIceCandidate")}}</strong> interface's read-only <strong><code>priority</code></strong> property specifies the candidate's priority according to the remote peer; the higher this value is, the better the remote peer considers the candidate to be.</p>

<p>The <code>priority</code> field's value is set from the <code>candidateInfo</code> options object passed to the {{domxref("RTCIceCandidate.RTCIceCandidate", "RTCIceCandidate()")}} constructor.
  You can't specify the value of <code>priority</code> directly in the options object, but its value is automatically extracted from the object's <code>candidate</code> a-line, if it's formatted properly.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var <em>priority</em> = <em>RTCIceCandidate</em>.priority;</pre>

<h3 id="Value">Value</h3>

<p>A long, unsigned integer value indicating the priority of the candidate according to the remote peer.
  The larger this value is, the more preferable the remote peer considers this candidate to be.</p>

<p><code>priority</code> is initialized to <code>null</code> if it is not specified in the <code>candidate</code>, or if the <code>candidate</code> string can't be parsed properly.</p>

<div class="note">
  <p><strong>Note:</strong> If <code>priority</code> is <code>null</code>, passing the
    candidate to {{domxref("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}}
    will fail, throwing an <code>OperationError</code> exception. This applies only if the
    candidate implements the <code>priority</code> property.</p>
</div>

<h2 id="Usage_notes">Usage notes</h2>

<p>Consider this {{Glossary("SDP")}} attribute line (a-line) which describes an ICE candidate:</p>

<pre>a=candidate:4234997325 1 udp 2043278322 192.168.0.56 44323 typ host</pre>

<p>The priority is the number after the protocol, so it's the fourth field in the candidate string.
  In this example, the priority is 2043278322.</p>

<h2 id="Example">Example</h2>

<p>This candidate examines the <code>priority</code> of the candidate and, if it's greater
  than the priority of a previously-seen candidate, remembers the candidate for later use.
</p>

<pre class="brush: js">var bestCandidate = {
  candidate: "",
  sdpMid: null,
  sdpMLineIndex: null,
  priority: 0
};

function handleCandidate(candidateString) {
  var candidate = new RTCIceCandidate(candidateString);

  if (candidate.priority &gt; bestCandidate.priority) {
    bestCandidate = candidate;
  }
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
