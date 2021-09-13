---
title: RTCRtpSender.setStreams()
slug: Web/API/RTCRtpSender/setStreams
tags:
- API
- Audio
- Media
- MediaStream
- Method
- RTCRtpSender
- RTP
- Reference
- Streams
- Video
- WebRTC
- WebRTC API
- WebRTC API Reference
- setStreams
browser-compat: api.RTCRtpSender.setStreams
---
<p>{{DefaultAPISidebar("WebRTC API")}}</p>

<p>The {{domxref("RTCRtpSender")}} method <code><strong>setStreams()</strong></code>
  associates the sender's {{domxref("RTCRtpSender.track", "track")}} with the specified
  {{domxref("MediaStream")}} or array of <code>MediaStream</code> objects.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">rtcRtpSender.setStreams(<em>mediaStream</em>);
rtcRtpSender.setStreams([<em>mediaStream...</em>]);
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>mediaStream</code> or <code>[mediaStream...]</code> {{optional_inline}}</dt>
  <dd>An {{domxref("MediaStream")}} object—or an array of multiple
    <code>MediaStream</code> objects—identifying the streams to which the
    <code>RTCRtpSender</code>'s {{domxref("RTCRtpSender.track", "track")}} belongs. If
    this parameter isn't specified, no new streams will be associated with the track.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>None.</p>

<h3 id="Exceptions">Exceptions</h3>

<dl>
  <dt><code>InvalidStateError</code></dt>
  <dd>The sender's connection is closed.</dd>
</dl>

<h2 id="Description">Description</h2>

<p><code>setStreams()</code> is purely additive. It doesn't remove the track from any
  streams; it adds it to new ones. If you specify streams to which the track already
  belongs, that stream is unaffected.</p>

<p>Once the track has been added to all of the streams, renegotiation of the connection
  will be triggered by the {{domxref("RTCPeerConnection.negotiationneeded_event",
  "negotiationneeded")}} event being dispatched to the {{domxref("RTCPeerConnection")}} to
  which the sender belongs.</p>

<h2 id="Example">Example</h2>

<p>This example adds all of an {{domxref("RTCPeerConnection")}}'s tracks to the specified
  stream.</p>

<pre class="brush: js">function addTracksToStream(stream) {
  let senders = pc.getSenders();

  senders.forEach((sender) =&gt; {
    if (sender.track &amp;&amp; (sender.transport.state === connected)) {
      sender.setStreams(stream);
    }
  });
}
</pre>

<p>After calling the {{domxref("RTCPeerConnection")}} method
  {{domxref("RTCPeerConnection.getSenders", "getSenders()")}} to get the list of the
  connection's senders, the <code>addTracksToStream()</code> function iterates over the
  list. For each sender, if the sender's track is non-null and its transport's state is
  <code>connected</code>, we call <code>setStreams()</code> to add the track to the
  <code>stream</code> specified.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
