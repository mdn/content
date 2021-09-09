---
title: RTCPeerConnection.getStreamById()
slug: Web/API/RTCPeerConnection/getStreamById
tags:
  - Method
  - RTCPeerConnection
  - Reference
  - Deprecated
  - WebRTC
browser-compat: api.RTCPeerConnection.getStreamById
---
<p>{{APIRef("WebRTC")}}</p>

<p>{{deprecated_header}}</p>

<p>The <code><strong>RTCPeerConnection.getStreamById()</strong></code> method returns the
  {{DOMxRef("MediaStream")}}</a>
  with the given id that is associated with local or remote end of the connection. If no
  stream matches, it returns <code>null</code>.</p>

<div class="warning">
  <p><strong>Warning:</strong> This property has been replaced with the
    {{domxref("RTCPeerConnection.getLocalStreams")}} and
    {{domxref("RTCPeerConnection.getRemoteStreams")}} properties. If you have code that
    uses <code>stream</code>, you will need to update, since browsers have begun to remove
    support for <code>stream</code>.</p>
</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var mediaStream = pc.getStream(id);</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><em>id</em></dt>
  <dd>Is a {{domxref("DOMString")}} corresponding to the stream to return.</dd>
</dl>

<h2 id="Example">Example</h2>

<pre class="brush: js">var stream = pc.getStreamById(myTrackId);
if (stream) {
  console.log("Found stream: " + stream.id);
}</pre>

<h2 id="Polyfill">Polyfill</h2>

<p>Running the following code before any other code will create
  <code>RTCPeerConnection.prototype.getStreamById()</code> if it's not natively available.
</p>

<pre class="brush: js">// from: https://bugs.chromium.org/p/chromium/issues/detail?id=698163&amp;desc=5#c10
RTCPeerConnection.prototype.getStreamById = function(id) {
  try {
    var localStreams = this.getLocalStreams();
    var remoteStreams = this.getRemoteStreams();
    var i;
    for (i = 0; i &lt; localStreams.length; i++) {
     if (localStreams[i].id == id)
       return localStreams[i];
    }
    for (i = 0; i &lt; remoteStreams.length; i++) {
     if (remoteStreams[i].id == id)
       return remoteStreams[i];
    }
  } catch(e) {}
  return null;
}
</pre>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/API/WebRTC_API">WebRTC</a></li>
</ul>
