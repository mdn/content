---
title: RTCIceCandidate.port
slug: Web/API/RTCIceCandidate/port
tags:
  - API
  - Candidate
  - ICE
  - Networking
  - Property
  - RTCIceCandidate
  - Read-only
  - Reference
  - SDP
  - WebRTC
  - WebRTC API
  - port
browser-compat: api.RTCIceCandidate.port
---
<div>{{APIRef("WebRTC")}}</div>

<p>The <strong>{{domxref("RTCIceCandidate")}}</strong> interface's read-only <strong><code>port</code></strong> property contains the port
    number on the device at the address given by {{domxref("RTCIceCandidate.address")}} at which the candidate's peer can be reached.</p>

<p>The <code>port</code> field's value is set from the <code>candidateInfo</code> options object passed to the {{domxref("RTCIceCandidate.RTCIceCandidate", "RTCIceCandidate()")}} constructor.
  You can't specify the value of <code>port</code> directly in the options object, but its value is automatically extracted from the object's <code>candidate</code> a-line, if it's formatted properly.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var <em>port</em> = <em>RTCIceCandidate</em>.port;</pre>

<h3 id="Value">Value</h3>

<p>A 16-bit number indicating the port number on the device at the address indicated by {{domxref("RTCIceCandidate/address", "address")}} at which the candidate's peer can be reached.
</p>

<p><code>port</code> is initialized to <code>null</code> if it is not specified in the
  <code>candidate</code>, or if the <code>candidate</code> string can't be parsed properly.</p>

<div class="notecard note">
  <p><strong>Note:</strong> If <code>port</code> is <code>null</code>, passing the candidate to {{domxref("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}}
    will fail, throwing an <code>OperationError</code> exception.
    This applies only if the candidate implements <code>port</code>.</p>
</div>

<h2 id="Usage_notes">Usage notes</h2>

<p>Consider this {{Glossary("SDP")}} attribute line (a-line) which describes an ICE
  candidate:</p>

<pre>a=candidate:4234997325 1 udp 2043278322 192.168.0.56 44323 typ host</pre>

<p>The port number is found in the sixth field, which is <code>"44323"</code>. In this case, the value of <code>port</code> will be 44323.</p>

<h2 id="Example">Example</h2>

<p>This code snippet fetches the IP address and port number of the candidate, storing them
  into an object for future use.</p>

<pre class="brush: js">var candidateLoc = {
  address: candidate.ip,
  port: candidate.port
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
