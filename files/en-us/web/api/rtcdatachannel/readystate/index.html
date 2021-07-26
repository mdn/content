---
title: RTCDataChannel.readyState
slug: Web/API/RTCDataChannel/readyState
tags:
  - Property
  - RTCDataChannel
  - Read-only
  - Reference
  - WebRTC
  - readyState
browser-compat: api.RTCDataChannel.readyState
---
<div>{{APIRef("WebRTC")}}</div>

<p>The read-only <code>RTCDataChannel</code> property <code><strong>readyState</strong></code> returns a string which indicates the state of the data channel's underlying data connection.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var <em>state</em> = <em>aDataChannel</em>.readyState;
</pre>

<h3 id="Values">Values</h3>

<p>A string indicating the current state of the underlying data transport, which is one of the following values:</p>

<dl>
  <dt><code>connecting</code></dt>
  <dd>
    The user agent (browser) is in the process of creating the underlying data transport;
    this is the state of a new {{domxref("RTCDataChannel")}} after being created by {{domxref("RTCPeerConnection.createDataChannel()")}},
    on the peer which started the connection process.
  </dd>

  <dt><code>open</code></dt>
  <dd>
    The underlying data transport has been established
    and data can be transferred bidirectionally across it.
    This is the default state of a new {{domxref("RTCDataChannel")}} created by the WebRTC layer
    when the remote peer created the channel
    and delivered it to the site or app
    in a {{DOMxRef("RTCPeerConnection.datachannel_event", "datachannel")}} event.
  </dd>

  <dt><code>closing</code></dt>
  <dd>
    The process of closing the underlying data transport has begun.
    It is no longer possible to queue new messages to be sent,
    but previously queued messages may still be send or received
    before entering the <code>closed</code> state.
  </dd>

  <dt><code>closed</code></dt>
  <dd>The underlying data transport has closed,
    or the attempt to make the connection failed.
  </dd>
</dl>

<h2 id="Example">Example</h2>

<pre class="brush: js">var dataChannel = peerConnection.createDataChannel("File Transfer");
var sendQueue = [];

function sendMessage(msg) {
  switch(dataChannel.readyState) {
    case "connecting":
      console.log("Connection not open; queueing: " + msg);
      sendQueue.push(msg);
      break;
    case "open":
      sendQueue.forEach((msg) =&gt; dataChannel.send(msg));
      break;
    case "closing":
      console.log("Attempted to send message while closing: " + msg);
      break;
    case "closed":
      console.log("Error! Attempt to send while connection closed.");
      break;
  }
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/WebRTC_API">WebRTC</a></li>
 <li><a href="/en-US/docs/Web/API/WebRTC_API/Using_data_channels">Using WebRTC data channels</a></li>
 <li>{{domxref("RTCDataChannel")}}</li>
 <li>{{domxref("RTCPeerConnection.createDataChannel()")}}</li>
</ul>
