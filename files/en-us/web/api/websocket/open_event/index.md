---
title: 'WebSocket: open event'
slug: Web/API/WebSocket/open_event
tags:
  - API
  - Event
  - WebSocket
  - events
  - open
browser-compat: api.WebSocket.open_event
---
<div>{{APIRef}}</div>

<p>The <code>open</code> event is fired when a connection with a <code>WebSocket</code> is opened.</p>

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
   <td>{{domxref("Event")}}</td>
  </tr>
  <tr>
   <th scope="row">Event handler property</th>
   <td>{{ domxref("WebSocket.onopen","onopen")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">// Create WebSocket connection.
const socket = new WebSocket('ws://localhost:8080');

// Connection opened
socket.addEventListener('open', (event) =&gt; {
  socket.send('Hello Server!');
});</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/WebSocket/close_event">WebSocket: close event</a></li>
 <li><a href="/en-US/docs/Web/API/WebSocket/error_event">WebSocket: error event</a></li>
 <li><a href="/en-US/docs/Web/API/WebSocket/message_event">WebSocket: message event</a></li>
 <li><a href="/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications">Writing WebSocket client applications</a></li>
</ul>
