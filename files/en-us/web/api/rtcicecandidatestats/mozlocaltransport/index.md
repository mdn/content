---
title: RTCIceCandidateStats.mozLocalTransport
slug: Web/API/RTCIceCandidateStats/mozLocalTransport
tags:
- API
- Candidate
- ICE
- Media
- Non-standard
- Deprecated
- Property
- Protocol
- RTCIceCandidate
- RTCIceCandidateStats
- Relay
- Statistics
- Stats
- Transport
- WebRTC
- WebRTC API
- mozLocalTransport
---
<div>{{APIRef("WebRTC")}}{{deprecated_header}}{{non-standard_header}}</div>

<p>The non-standard Mozilla extension to the {{domxref("RTCIceCandidateStats")}}
  dictionary, <code><strong>mozLocalTransport</strong></code>, has been supplanted by the
  standard {{domxref("RTCIceCandidateStats.relayProtocol", "relayProtocol")}} property.
</p>

<h2 id="Syntax">Syntax</h2>

<p>Instead of using <code>mozLocalTransport</code>, you should use code like this:</p>

<pre
  class="brush: js"><em>localTransport</em> = <em>rtcIceCandidateStats</em>.relayProtocol;</pre>

<h2 id="Specifications">Specifications</h2>

<p>Not part of any specification.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat("api.RTCIceCandidateStats.relayProtocol")}}</p>
