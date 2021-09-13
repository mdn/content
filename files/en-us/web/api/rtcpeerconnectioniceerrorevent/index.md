---
title: RTCPeerConnectionIceErrorEvent
slug: Web/API/RTCPeerConnectionIceErrorEvent
tags:
  - API
  - Communication
  - Error
  - Interface
  - Media
  - Networking
  - RTCPeerConnectionIceErrorEvent
  - Reference
  - STUN
  - TURN
  - WebRTC
  - WebRTC API
  - WebRTC Device API
  - rtc
browser-compat: api.RTCPeerConnectionIceErrorEvent
---
<p>{{DefaultAPISidebar("WebRTC API")}}</p>

<p>The <code><strong>RTCPeerConnectionIceErrorEvent</strong></code> interface—based upon the {{domxref("Event")}} interface—provides details pertaining to an {{Glossary("ICE")}} error announced by sending an {{domxref("RTCPeerConnection.icecandidateerror_event", "icecandidateerror")}} event to the {{domxref("RTCPeerConnection")}} object.</p>

<h2 id="Constructor">Constructor</h2>

<dl>
	<dt>{{domxref("RTCPeerConnectionIceErrorEvent.RTCPeerConnectionIceErrorEvent", "RTCPeerConnectionIceErrorEvent()")}}</dt>
	<dd>Creates and returns a new <code>RTCPeerConnectionIceErrorEvent</code> object, with its <code>type</code> and other properties initialized as specified in the parameters. You will not normally create an object of this type yourself.</dd>
</dl>

<h2 id="Properties">Properties</h2>

<p><em>The <code>RTCPeerConnectionIceErrorEvent</code> interface includes the properties found on the {{domxref("Event")}} interface, as well as the following properties:</em></p>

<dl>
	<dt>{{domxref("RTCPeerConnectionIceErrorEvent.address", "address")}} {{ReadOnlyInline}}</dt>
	<dd>A {{domxref("DOMString")}} providing the local IP address used to communicate with the {{Glossary("STUN")}} or {{Glossary("TURN")}} server being used to negotiate the connection, or <code>null</code> if the local IP address has not yet been exposed as part of a local ICE candidate.</dd>
	<dt>{{domxref("RTCPeerConnectionIceErrorEvent.errorCode", "errorCode")}} {{ReadOnlyInline}}</dt>
	<dd>An unsigned integer value stating the numeric <a href="https://www.iana.org/assignments/stun-parameters/stun-parameters.xhtml#stun-parameters-6">STUN error code</a> returned by the STUN or TURN server. If no host candidate can reach the server, this property is set to the number 701, which is outside the range of valid STUN error codes. The 701 error is fired only once per server URL, and only while the is {{domxref("RTCPeerConnection.icegatheringstate", "icegatheringstate")}} is <code>gathering</code>.</dd>
	<dt>{{domxref("RTCPeerConnectionIceErrorEvent.errorText", "errorText")}} {{ReadOnlyInline}}</dt>
	<dd>A {{domxref("DOMString")}} containing the STUN reason text returned by the STUN or TURN server. If communication with the STUN or TURN server couldn't be established at all, this string will be a browser-specific string explaining the error.</dd>
	<dt>{{domxref("RTCPeerConnectionIceErrorEvent.port", "port")}} {{ReadOnlyInline}}</dt>
	<dd>An unsigned integer value giving the port number over which communication with the STUN or TURN server is taking place, using the IP address given in <code>address</code>. <code>null</code> if the connection hasn't been established (that is, if <code>address</code> is <code>null</code>).</dd>
	<dt>{{domxref("RTCPeerConnectionIceErrorEvent.url", "url")}} {{ReadOnlyInline}}</dt>
	<dd>A {{domxref("DOMString")}} indicating the URL of the STUN or TURN server with which the error occurred.</dd>
</dl>

<h2 id="Methods">Methods</h2>

<p><em><code>RTCPeerConnectionIceErrorEvent</code> has no methods other than any provided by the parent interface, {{domxref("Event")}}.</em></p>

<h2 id="Examples">Examples</h2>

<p>TBD</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
