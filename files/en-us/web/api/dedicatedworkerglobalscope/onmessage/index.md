---
title: DedicatedWorkerGlobalScope.onmessage
slug: Web/API/DedicatedWorkerGlobalScope/onmessage
tags:
  - API
  - DedicatedWorkerGlobalScope
  - Property
  - Reference
  - Web Workers
  - onmessage
browser-compat: api.DedicatedWorkerGlobalScope.onmessage
---
<p>{{APIRef("Web Workers API")}}</p>

<p>The <strong><code>onmessage</code></strong> property of the {{domxref("DedicatedWorkerGlobalScope")}} interface represents an <a href="/en-US/docs/Web/Events/Event_handlers">event handler</a> to be called when the {{event("message")}} event occurs — i.e. when a message is sent to the worker using the {{domxref("Worker.postMessage")}} method.</p>

<h2 id="Syntax">Syntax</h2>

<pre>self.onmessage = function() { ... };</pre>

<h2 id="Example">Example</h2>

<p>The following code snippet shows creation of a {{domxref("Worker")}} object using the {{domxref("Worker.Worker", "Worker()")}} constructor. Messages are passed to the worker when the value inside the form input <code>first</code> changes. A {{domxref("Worker.onmessage")}} handler is also present, to deal with messages are passed back from the worker.</p>

<pre class="brush: js">var myWorker = new Worker("worker.js");

first.onchange = function() {
  myWorker.postMessage([first.value, second.value]);
  console.log('Message posted to worker');
}

myWorker.onmessage = function(e) {
  result.textContent = e.data;
  console.log('Message received from worker');
}
</pre>

<p>In the <code>worker.js</code> script, a <code>DedicatedWorkerGlobalScope.onmessage</code> handler is used to handle messages from the main script:</p>

<pre class="brush: js">onmessage = function(e) {
  console.log('Message received from main script');
  var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
  console.log('Posting message back to main script');
  postMessage(workerResult);
}</pre>

<p>Notice how in the main script, <code>onmessage</code> has to be called on <code>myWorker</code>, whereas inside the worker script you just need <code>onmessage</code> because the worker is effectively the global scope (the {{domxref("DedicatedWorkerGlobalScope")}}, in this case).</p>

<p>For a full example, see our<a class="external external-icon" href="https://github.com/mdn/simple-web-worker">Basic dedicated worker example</a> (<a class="external external-icon" href="https://mdn.github.io/simple-web-worker/">run dedicated worker</a>).</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>The {{domxref("DedicatedWorkerGlobalScope")}} interface it belongs to.</li>
 <li>{{domxref("WorkerGlobalScope")}}</li>
</ul>
