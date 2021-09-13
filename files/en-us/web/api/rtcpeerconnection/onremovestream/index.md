---
title: RTCPeerConnection.onremovestream
slug: Web/API/RTCPeerConnection/onremovestream
tags:
  - Event Handler
  - Property
  - RTCPeerConnection
  - Reference
  - WebRTC
  - Deprecated
browser-compat: api.RTCPeerConnection.onremovestream
---
<p>{{APIRef("WebRTC")}}{{deprecated_header}}</p>

<div class="warning">
<p><strong>Warning:</strong> The {{DOMxRef("RTCPeerConnection/removestream_event", "removestream")}} event has been removed from the WebRTC specification in favor of the existing {{DOMxRef("RTCPeerConnection/removetrack_event", "removetrack")}} event on the remote {{domxref("MediaStream")}} and the corresponding {{domxref("MediaStream.onremovetrack")}} event handler property of the remote {{domxref("MediaStream")}}. The {{domxref("RTCPeerConnection")}} API is now track-based, so having zero tracks in the remote stream is equivalent to the remote stream being removed and the old removestream event.</p>
</div>

<p>The <code><strong>RTCPeerConnection.onremovestream</strong></code> event handler is a property containing the code to execute when the {{DOMxRef("RTCPeerConnection/removestream_event", "removestream")}} event, of type {{domxref("MediaStreamEvent")}}, is received by this {{domxref("RTCPeerConnection")}}. Such an event is sent when a {{domxref("MediaStream")}} is removed from this connection.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="eval"><em>peerconnection</em>.onremovestream = <em>function</em>;
</pre>

<h3 id="Values">Values</h3>

<ul>
 <li><code>function</code> is the name of a user-defined function, without the <code>()</code> suffix or any parameters, or an anonymous function declaration, such as <code>function(event) {...}</code>. An event handler always has one single parameter, containing the event, here of type {{domxref("MediaStreamEvent")}}.</li>
</ul>

<h2 id="Example">Example</h2>

<pre class="brush: js">pc.onremovestream = function(ev) { alert("onremovestream event detected!"); };
</pre>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>The {{DOMxRef("RTCPeerConnection/removestream_event", "removestream")}} event and its type, {{domxref("MediaStreamEvent")}}.</li>
</ul>
