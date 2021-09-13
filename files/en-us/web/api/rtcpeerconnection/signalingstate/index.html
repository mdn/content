---
title: RTCPeerConnection.signalingState
slug: Web/API/RTCPeerConnection/signalingState
tags:
  - API
  - ICE
  - Media
  - Negotiation
  - Property
  - RTCPeerConnection
  - Read-only
  - Reference
  - Signaling
  - WebRTC
  - WebRTC API
  - signalingState
  - state
browser-compat: api.RTCPeerConnection.signalingState
---
<p>{{APIRef("WebRTC")}}</p>

<p>The read-only <strong><code>signalingState</code></strong> property on the
  {{domxref("RTCPeerConnection")}} interface returns a string value
  describing the state of the signaling process
  on the local end of the connection
  while connecting or reconnecting to another peer.
  See {{SectionOnPage("/en-US/docs/Web/API/WebRTC_API/Session_lifetime",
  "Signaling")}} for more details about the signaling process.</p>

<p>Because the signaling process is a state machine, being able to verify that your code
  is in the expected state when messages arrive can help avoid unexpected and avoidable
  failures. For example, if you receive an answer while the <code>signalingState</code>
  isn't <code>"have-local-offer"</code>, you know that something is wrong, since you
  should only receive answers after creating an offer but before an answer has been
  received and passed into {{domxref("RTCPeerConnection.setLocalDescription()")}}. Your
  code will be more reliable if you watch for mismatched states like this and handle them
  gracefully.</p>

<p>This value may also be useful during debugging, for example.</p>

<p>In addition, when the value of this property changes, a
  {{DOMxRef("RTCPeerConnection/signalingstatechange_event", "signalingstatechange")}} event is sent to the {{domxref("RTCPeerConnection")}}
  instance.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js"> var <em>state</em> = <em>RTCPeerConnection</em>.signalingState;</pre>

<h3 id="Value">Value</h3>

<p>The allowed string values are:</p>

<dl>
  <dt><code>stable</code></dt>
  <dd>
    There is no ongoing exchange of offer and answer underway.
    This may mean that the {{domxref("RTCPeerConnection")}} object is new,
    in which case
    both the {{domxref("RTCPeerConnection.localDescription", "localDescription")}}
    and {{domxref("RTCPeerConnection.remoteDescription", "remoteDescription")}}
    are <code>null</code>;
    it may also mean that negotiation is complete
    and a connection has been established.
  </dd>

  <dt><code>have-local-offer</code></dt>
  <dd>
    The local peer has called {{domxref("RTCPeerConnection.setLocalDescription()")}},
    passing in SDP representing an offer
    (usually created by calling {{domxref("RTCPeerConnection.createOffer()")}}),
    and the offer has been applied successfully.
  </dd>

  <dt><code>have-remote-offer</code></dt>
  <dd>
    The remote peer has created an offer
    and used the signaling server
    to deliver it to the local peer,
    which has set the offer
    as the remote description
    by calling {{domxref("RTCPeerConnection.setRemoteDescription()")}}.
  </dd>

  <dt><code>have-local-pranswer</code></dt>
  <dd>
    The offer sent by the remote peer has been applied
    and an answer has been created
    (usually by calling {{domxref("RTCPeerConnection.createAnswer()")}})
    and applied by calling {{domxref("RTCPeerConnection.setLocalDescription()")}}.
    This provisional answer describes the supported media formats and so forth,
    but may not have a complete set of ICE candidates included.
    Further candidates will be delivered separately later.
  </dd>

  <dt><code>have-remote-pranswer</code></dt>
  <dd>
    A provisional answer has been received
    and successfully applied
    in response to an offer previously sent
    and established by calling <code>setLocalDescription()</code>.
  </dd>
  <dt><code>closed</code></dt>
  <dd>
    The {{domxref("RTCPeerConnection")}} has been closed.
  </dd>
</dl>

<h2 id="Example">Example</h2>

<pre class="brush: js">var pc = new RTCPeerConnection(configuration);
var state = pc.signalingState;</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/API/WebRTC_API/Session_lifetime">Lifetime of a WebRTC
      session</a></li>
  <li>{{domxref("RTCPeerConnection")}}</li>
  <li>{{DOMxRef("RTCPeerConnection/signalingstatechange_event", "signalingstatechange")}}</li>
  <li><a href="/en-US/docs/Web/API/WebRTC_API">WebRTC</a></li>
</ul>
