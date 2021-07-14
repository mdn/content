---
title: 'SharedWorkerGlobalScope: connect event'
slug: Web/API/SharedWorkerGlobalScope/connect_event
tags:
  - API
  - Event
  - Reference
  - SharedWorkerGlobalScope
  - connect
  - events
browser-compat: api.SharedWorkerGlobalScope.connect_event
---
<div>{{APIRef}}</div>

<p>The <strong><code>connect</code></strong> event is fired in shared workers at their {{domxref("SharedWorkerGlobalScope")}} when a new client connects.</p>

<table class="properties">
 <tbody>
  <tr>
   <th>Bubbles</th>
   <td>No</td>
  </tr>
  <tr>
   <th>Cancelable</th>
   <td>No</td>
  </tr>
  <tr>
   <th>Interface</th>
   <td>{{DOMxRef("MessageEvent")}}</td>
  </tr>
  <tr>
   <th>Event handler property</th>
   <td>{{domxref("SharedWorkerGlobalScope.onconnect")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples">Examples</h2>

<p>This example shows a shared worker file — when a connection to the worker occurs from a main thread via a {{domxref("MessagePort")}}, the <code>onconnect</code> event handler fires. The event object is a {{domxref("MessageEvent")}}.</p>

<p>The connecting port can be referenced through the event object's <code>ports</code> parameter; this reference can have an <code>onmessage</code> handler attached to it to handle messages coming in through the port, and its <code>postMessage()</code> method can be used to send messages back to the main thread using the worker.</p>

<pre class="brush: js">self.onconnect = function(e) {
    var port = e.ports[0];

    port.onmessage = function(e) {
      var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
      port.postMessage(workerResult);
    }

    port.start();
}</pre>

<p>For a complete running example, see our <a class="external-icon external" href="https://github.com/mdn/simple-shared-worker">Basic shared worker example</a> (<a class="external-icon external" href="https://mdn.github.io/simple-shared-worker/">run shared worker</a>.)</p>

<h3 id="addEventListener_equivalent">addEventListener equivalent</h3>

<p>You could also set up an event handler using the {{domxref("EventTarget/addEventListener", "addEventListener()")}} method:</p>

<pre class="brush: js">self.addEventListener('connect', function(e) {
  var port = e.ports[0];

  port.onmessage = function(e) {
    var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
    port.postMessage(workerResult);
  }

});</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/Web_Workers_API/Using_web_workers">Using web workers</a></li>
 <li>{{domxref("SharedWorkerGlobalScope")}}</li>
</ul>
