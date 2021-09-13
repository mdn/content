---
title: 'RTCIceTransport: statechange event'
slug: Web/API/RTCIceTransport/statechange_event
tags:
  - ICE
  - Negotiation
  - RTCIceTransport
  - Reference
  - SDP
  - Transport
  - WebRTC
  - WebRTC API
  - events
  - rtc
  - state
  - statechange
browser-compat: api.RTCIceTransport.statechange_event
---
<div>{{WebRTCSidebar}}</div>

<p>A <strong><code>statechange</code></strong> event occurs when the {{domxref("RTCIceTransport")}} changes state. The {{domxref("RTCIceTransport.state", "state")}} can be used to determine how far through the process of examining, verifying, and selecting a valid candidate pair is prior to successfully connecting the two peers for WebRTC communications.</p>

<table class="properties">
	<tbody>
		<tr>
			<th scope="row">Bubbles</th>
			<td>No</td>
		</tr>
		<tr>
			<th scope="row">Cancelable</th>
			<td>No</td>
		</tr>
		<tr>
			<th scope="row">Interface</th>
			<td>{{DOMxRef("Event")}}</td>
		</tr>
		<tr>
			<th scope="row">Event handler property</th>
			<td>{{DOMxRef("RTCIceTransport.onstatechange")}}</td>
		</tr>
	</tbody>
</table>

<h2 id="Examples">Examples</h2>

<p>Given an {{domxref("RTCPeerConnection")}}, <code>pc</code>, the following code creates an event handler that calls a function named <code>handleFailure()</code> if the ICE transport enters a failure state.</p>

<pre class="brush: js">let iceTransport = pc.getSenders()[0].transport.iceTransport;

iceTransport.addEventListener("statechange", ev =&gt; {
  if (iceTransport.state === "failed") {
    handleFailure(pc);
  }
}, false);
</pre>

<p>The same code, using the {{domxref("RTCIceTransport.onstatechange", "onstatechange")}} event handler property, looks like this:</p>

<pre class="brush: js">let iceTransport = pc.getSenders()[0].transport.iceTransport;

iceTransport.onstatechange = ev =&gt; {
  if (iceTransport.state === "failed") {
    handleFailure(pc);
  }
};
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
	<li><a href="/en-US/docs/Web/API/WebRTC_API">WebRTC API</a></li>
	<li><a href="/en-US/docs/Web/API/WebRTC_API/Connectivity">WebRTC connectivity</a></li>
	<li>{{domxref("RTCIceTransport.onstatechange")}} event handler</li>
</ul>

<h3 id="Related_RTCIceTransport_events">Related RTCIceTransport events</h3>

<ul>
	<li>{{event("gatheringstatechange")}}</li>
	<li>{{event("selectedcandidatepairchange")}}</li>
</ul>

<h3 id="Related_RTCPeerConnection_events">Related RTCPeerConnection events</h3>

<ul>
	<li>{{event("negotiationneeded")}}</li>
	<li>{{event("signalingstatechange")}}</li>
	<li>{{event("iceconnectionstatechange")}}</li>
	<li>{{event("icegatheringstatechange")}}</li>
	<li>{{event("connectionstatechange")}}</li>
</ul>
