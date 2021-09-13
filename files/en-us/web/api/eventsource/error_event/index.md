---
title: 'EventSource: error event'
slug: Web/API/EventSource/error_event
tags:
  - API
  - Error
  - Event
  - EventSource
  - Reference
browser-compat: api.EventSource.error_event
---
<p>{{APIRef}}</p>

<p>The <code>error</code> event of the {{domxref("EventSource")}} API is fired when a connection with an event source fails to be opened.</p>

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
   <td>{{domxref("Event")}} or {{domxref("ErrorEvent")}}</td>
  </tr>
  <tr>
   <th scope="row">Event handler property</th>
   <td>{{domxref("EventSource.onerror")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">var evtSource = new EventSource('sse.php');

// addEventListener version
evtSource.addEventListener('error', (e) =&gt; {
  console.log("An error occurred while attempting to connect.");
});

// onerror version
evtSource.onerror = (e) =&gt; {
  console.log("An error occurred while attempting to connect.");
};</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events">Using server-sent events</a></li>
 <li><code><a href="/en-US/docs/Web/API/EventSource/open_event">open</a></code></li>
 <li><code><a href="/en-US/docs/Web/API/EventSource/message_event">message</a></code></li>
</ul>
