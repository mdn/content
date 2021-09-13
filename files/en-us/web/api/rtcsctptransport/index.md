---
title: RTCSctpTransport
slug: Web/API/RTCSctpTransport
tags:
  - Experimental
  - Interface
  - NeedsExample
  - RTCSctpTransport
  - Reference
  - Unimplemented
  - WebRTC
browser-compat: api.RTCSctpTransport
---
<p>{{APIRef("WebRTC")}}{{SeeCompatTable}}</p>

<p>The <strong><code>RTCSctpTransport</code></strong> interface provides information which describes a Stream Control Transmission Protocol (<strong>{{Glossary("SCTP")}}</strong>) transport. This provides information about limitations of the transport, but also provides a way to access the underlying Datagram Transport Layer Security (<strong>{{Glossary("DTLS")}}</strong>) transport over which SCTP packets for all of an {{DOMxRef("RTCPeerConnection")}}'s data channels are sent and received.</p>

<p>You don't create {{DOMxRef("RTCSctpTransport")}} objects yourself; instead, you get access to the <code>RTCSctpTransport</code> for a given <code>RTCPeerConnection</code> through its <strong>{{DOMxRef("RTCPeerConnection.sctp", "sctp")}}</strong> property.</p>

<p>Possibly the most useful property on this interface is its {{DOMxRef("RTCSctpTransport.maxMessageSize", "maxMessageSize")}} property, which you can use to determine the upper limit on the size of messages you can send over a data channel on the peer connection.</p>

<h2 id="Properties">Properties</h2>

<p><em>Also inherits properties from: {{DOMxRef("EventTarget")}}</em></p>

<dl>
	<dt>{{DOMxRef("RTCSctpTransport.maxChannels")}}{{ReadOnlyInline}}</dt>
	<dd>An integer value indicating the maximum number of {{DOMxRef("RTCDataChannel", "<code>RTCDataChannel</code>s", "", 1)}} that can be open simultaneously.</dd>
	<dt>{{DOMxRef("RTCSctpTransport.maxMessageSize")}}{{ReadOnlyInline}}</dt>
	<dd>An integer value indicating the maximum size, in bytes, of a message which can be sent using the {{DOMxRef("RTCDataChannel.send()")}} method.</dd>
	<dt>{{DOMxRef("RTCSctpTransport.state")}}{{ReadOnlyInline}}</dt>
	<dd>A {{DOMxRef("DOMString")}} enumerated value indicating the state of the SCTP transport.</dd>
	<dt>{{DOMxRef("RTCSctpTransport.transport")}}{{ReadOnlyInline}}</dt>
	<dd>An {{DOMxRef("RTCDtlsTransport")}} object representing the {{Glossary("DTLS")}} transport used for the transmission and receipt of data packets.</dd>
</dl>

<h3 id="Event_handlers">Event handlers</h3>

<dl>
	<dt>{{DOMxRef("RTCSctpTransport.onstatechange")}}</dt>
	<dd>Fired when the {{DOMxRef("RTCSctpTransport.state")}} changes.</dd>
</dl>

<h2 id="Methods">Methods</h2>

<p><em>This interface has no methods, but inherits methods from: {{DOMxRef("EventTarget")}}</em></p>

<h2 id="Example">Example</h2>

<p>TBD</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
	<li><a href="/en-US/docs/Web/API/WebRTC_API">WebRTC</a></li>
	<li>{{DOMxRef("RTCPeerConnection")}}</li>
	<li>{{DOMxRef("RTCPeerConnection.sctp")}}</li>
</ul>
