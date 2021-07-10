---
title: RTCSessionDescription
slug: Web/API/RTCSessionDescription
tags:
  - API
  - Audio
  - Experimental
  - Interface
  - Media
  - Reference
  - Video
  - Web
  - WebRTC
browser-compat: api.RTCSessionDescription
---
<p>{{APIRef("WebRTC")}}{{SeeCompatTable}}</p>

<p>The <strong><code>RTCSessionDescription</code></strong> interface describes one end of a connection—or potential connection—and how it's configured. Each <code>RTCSessionDescription</code> consists of a description {{domxref("RTCSessionDescription.type", "type")}} indicating which part of the offer/answer negotiation process it describes and of the {{Glossary("SDP")}} descriptor of the session.</p>

<p>The process of negotiating a connection between two peers involves exchanging <code>RTCSessionDescription</code> objects back and forth, with each description suggesting one combination of connection configuration options that the sender of the description supports. Once the two peers agree upon a configuration for the connection, negotiation is complete.</p>

<h2 id="Properties">Properties</h2>

<p><em>The <code>RTCSessionDescription</code> interface doesn't inherit any properties.</em></p>

<dl>
	<dt>{{domxref("RTCSessionDescription.type")}} {{ReadOnlyInline}}</dt>
	<dd>An enum of type <code>{{anch("RTCSdpType")}}</code> describing the session description's type.</dd>
	<dt>{{domxref("RTCSessionDescription.sdp")}} {{ReadOnlyInline}}</dt>
	<dd>A {{domxref("DOMString")}} containing the {{Glossary("SDP")}} describing the session.</dd>
</dl>

<h2 id="Constants">Constants</h2>

<h3 id="RTCSdpType">RTCSdpType</h3>

<p>This enum defines strings that describe the current state of the session description, as used in the {{domxref("RTCSessionDescription.type", "type")}} property. The session description's type will be specified using one of these values.</p>

<table class="standard-table">
	<thead>
		<tr>
			<th scope="col">Value</th>
			<th scope="col">Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>answer</code></td>
			<td>The SDP contained in the {{domxref("RTCSessionDescription.sdp", "sdp")}} property is the definitive choice in the exchange. In other words, this session description describes the agreed-upon configuration, and is being sent to finalize negotiation.</td>
		</tr>
		<tr>
			<td><code>offer</code></td>
			<td>The session description object describes the initial proposal in an offer/answer exchange. The session negotiation process begins with an offer being sent from the caller to the callee.</td>
		</tr>
		<tr>
			<td><code>pranswer</code></td>
			<td>The session description object describes a provisional answer; that is, a response to a previous offer that is not the final answer. It is usually employed by legacy hardware.</td>
		</tr>
		<tr>
			<td><code>rollback</code></td>
			<td>This special type with an empty session description is used to roll back to the previous stable state.</td>
		</tr>
	</tbody>
</table>

<h2 id="Methods">Methods</h2>

<p><em>The <code>RTCSessionDescription</code> doesn't inherit any methods.</em></p>

<dl>
	<dt>{{domxref("RTCSessionDescription.RTCSessionDescription", "RTCSessionDescription()")}} {{deprecated_inline}}</dt>
	<dd>This constructor returns a new <code>RTCSessionDescription</code>. The parameter is a <code>RTCSessionDescriptionInit</code> dictionary containing the values to assign the two properties.</dd>
	<dt>{{domxref("RTCSessionDescription.toJSON()")}}</dt>
	<dd>Returns a {{Glossary("JSON")}} description of the object. The values of both properties, {{domxref("RTCSessionDescription.type", "type")}} and {{domxref("RTCSessionDescription.sdp", "sdp")}}, are contained in the generated JSON.</dd>
</dl>

<h2 id="Example">Example</h2>

<pre class="brush: js">signalingChannel.onmessage = function (evt) {
    if (!pc)
        start(false);

    var message = JSON.parse(evt.data);
    if (message.sdp)
        pc.setRemoteDescription(new RTCSessionDescription(message), function () {
            // if we received an offer, we need to answer
            if (pc.remoteDescription.type == "offer")
                pc.createAnswer(localDescCreated, logError);
        }, logError);
    else
        pc.addIceCandidate(new RTCIceCandidate(message.candidate),
            function () {}, logError);
};
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
	<li><a href="/en-US/docs/Web/Guide/API/WebRTC">WebRTC</a></li>
	<li>{{domxref("RTCPeerConnection.setLocalDescription()")}} and {{domxref("RTCPeerConnection.setRemoteDescription()")}}</li>
</ul>
