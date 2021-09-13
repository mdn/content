---
title: 'WebSocket: close event'
slug: Web/API/WebSocket/close_event
tags:
  - API
  - Event
  - Reference
  - Web
  - WebSocket
  - close
  - events
browser-compat: api.WebSocket.close_event
---
<div>{{APIRef}}</div>

<p>The <code>close</code> event is fired when a connection with a <code>WebSocket</code> is closed.</p>

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
   <td>{{domxref("CloseEvent")}}</td>
  </tr>
  <tr>
   <th scope="row">Event handler property</th>
   <td>{{ domxref("WebSocket.onclose","onclose")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples">Examples</h2>

<p>You might want to know when the connection has been closed so that you can update the UI or, perhaps, save data about the closed connection. Given that you have a variable called <code>exampleSocket</code> that refers to an opened <code>WebSocket</code>, this handler would handle the situation where the socket has been closed.</p>

<pre class="brush: js">exampleSocket.addEventListener('close', (event) =&gt; {
  console.log('The connection has been closed successfully.');
});</pre>

<p>You can perform the same actions using the event handler property, like this:</p>

<pre class="brush: js">exampleSocket.onclose = function (event) {
  console.log('The connection has been closed successfully.');
};</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/WebSocket/error_event">WebSocket: error event</a></li>
 <li><a href="/en-US/docs/Web/API/WebSocket/message_event">WebSocket: message event</a></li>
 <li><a href="/en-US/docs/Web/API/WebSocket/open_event">WebSocket: open event</a></li>
 <li><a href="/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications">Writing WebSocket client applications</a></li>
</ul>
