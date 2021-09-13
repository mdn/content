---
title: RTCIceTransport.ongatheringstatechange
slug: Web/API/RTCIceTransport/ongatheringstatechange
tags:
  - API
  - Candidates
  - Connectivity
  - Event Handler
  - Gathering
  - ICE
  - Negotiation
  - Property
  - RTCIceTransport
  - Reference
  - WebRTC
  - WebRTC API
  - ongatheringstatechange
browser-compat: api.RTCIceTransport.ongatheringstatechange
---
<div>{{APIRef("WebRTC")}}</div>

<p>The <code><strong>ongatheringstatechange</strong></code> event handler for the {{domxref("RTCIceTransport")}} interface specifies an event handler that is to be called when the {{event("gatheringstatechange")}} event occurs on the transport.</p>
    
<p>This event is delivered whenever the transport's {{domxref("RTCIceTransport.gatheringState", "gatheringState")}} property changes.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>RTCIceTransport</em>.ongatheringstatechange = <em>stateChangeHandler</em>;
</pre>

<h3 id="Value">Value</h3>

<p>A function to be called when the {{domxref("RTCIceTransport")}} object's gathering
  state changes. To determine the new state, examine the value of
  {{domxref("RTCIceTransport.gatheringState", "gatheringState")}}.</p>

<p>The gathering state indicates whether or not the ICE agent has begun gathering
  candidates, and if so, whether or not gathering has finished. Its possible values are:</p>

  <dl>
    <dt><code>"new"</code></dt>
    <dd>The {{domxref("RTCIceTransport")}} is newly created and has not yet started to gather ICE candidates.</dd>
    <dt><code>"gathering"</code></dt>
    <dd>The transport is in the process of gathering candidates.</dd>
    <dt><code>"complete"</code></dt>
    <dd>The transport has finished gathering ICE candidates and has sent the end-of-candidates indicator to the remote device. The transport won't gather any further candidates unless an <a href="/en-US/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart">ICE restart</a> occurs, at which point the gathering process starts over from scratch.</dd>
   </dl>
   

<h2 id="Example">Example</h2>

<p>This snippet establishes a handler for the {{event("gatheringstatechange")}} event that
  checks to see if the state has changed to <code>"complete"</code>, indicating that all
  ICE candidates from both the local and remote peers have been received and processed.
</p>

<pre class="brush: js">var iceTransport = pc.getSenders()[0].transport.transport;

iceTransport.ongatheringstatechange = function(event) {
  if (iceTransport.gatheringState == "complete") {
    allCandidatesReceived(pc);
  }
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>The {{event("gatheringstatechange")}} event and its type, {{domxref("Event")}}.</li>
  <li>The other event handlers for <code>RTCIceTransport</code>:
    {{domxref("RTCIceTransport.onstatechange", "onstatechange")}} and
    {{domxref("RTCIceTransport.onselectedcandidatepairchange",
    "onselectedcandidatepairchange")}}</li>
</ul>
