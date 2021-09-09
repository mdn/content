---
title: Worker.prototype.postMessage()
slug: Web/API/Worker/postMessage
tags:
  - API
  - JavaScript
  - Method
  - Reference
  - Web Workers
  - Worker
  - postMessage
browser-compat: api.Worker.postMessage
---
<p>{{APIRef("Web Workers API")}}</p>

<p>The <code><strong>postMessage()</strong></code> method of the {{domxref("Worker")}} interface sends a message to the worker's inner scope. This accepts a single parameter, which is the data to send to the worker. The data may be any value or JavaScript object handled by the <a href="/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm">structured clone</a> algorithm, which includes cyclical references.</p>

<p>The {{domxref("Worker")}} <code>postMessage()</code> method delegates to the {{domxref("MessagePort")}} {{domxref("MessagePort.postMessage", "postMessage()")}} method, which adds a task on the event loop corresponding to the receiving {{domxref("MessagePort")}}.</p>

<p>The <code>Worker</code> can send back information to the thread that spawned it using the {{domxref("DedicatedWorkerGlobalScope.postMessage")}} method.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">worker.postMessage(message, [transfer]);</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><em>message</em></dt>
 <dd>
   <p>The object to deliver to the worker; this will be in the <code>data</code> field in the event delivered to the {{domxref("DedicatedWorkerGlobalScope.onmessage")}} handler. This may be any value or JavaScript object handled by the <a href="/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm">structured clone</a> algorithm, which includes cyclical references.</p>
   <p>If the <code>message</code> parameter is <em>not</em> provided, a <code>TypeError</code> will be thrown. If the data to be passed to the worker is unimportant, <code>null</code> or <code>undefined</code> can be passed explicitly.</p>
 </dd>
 <dt><em>transfer</em> {{optional_inline}}</dt>
 <dd>
   <p>An optional <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">array</a> of {{domxref("Transferable")}} objects to transfer ownership of. If the ownership of an object is transferred, it becomes unusable in the context it was sent from and becomes available only to the worker it was sent to.</p>
   <p>Transferable objects are instances of classes like {{jsxref("ArrayBuffer")}}, {{domxref("MessagePort")}} or {{domxref("ImageBitmap")}} objects that can be transferred. <code>null</code> is not an acceptable value for <code>transfer</code>.</p>
  </dd>
</dl>

<h3 id="Returns">Returns</h3>

<p>Void.</p>

<h2 id="Example">Example</h2>

<p>The following code snippet shows the creation of a {{domxref("Worker")}} object using the {{domxref("Worker.Worker", "Worker()")}} constructor. When either of two form inputs (<code>first</code> and <code>second</code>) have their values changed, {{event("change")}} events invoke <code>postMessage()</code> to send the value of both inputs to the current worker.</p>

<pre class="brush: js">var myWorker = new Worker('worker.js');

first.onchange = function() {
  myWorker.postMessage([first.value,second.value]);
  console.log('Message posted to worker');
}

second.onchange = function() {
  myWorker.postMessage([first.value,second.value]);
  console.log('Message posted to worker');
}
</pre>

<p>For a full example, see our <a class="external external-icon" href="https://github.com/mdn/simple-web-worker">simple worker example</a> (<a class="external external-icon" href="https://mdn.github.io/simple-web-worker/">run example</a>).</p>

<div class="note">
<p><strong>Note:</strong> <code>postMessage()</code> can only send a single object at once. As seen above, if you want to pass multiple values you can send an array.</p>
</div>

<h3 id="Transfer_Example">Transfer Example</h3>

<p>This minimum example has <code>main</code> create an <code>ArrayBuffer</code> and transfer it to <code>myWorker</code>, then has <code>myWorker</code> transfer it back to <code>main</code>, with the size logged at each step.</p>

<h4 id="main.js_code">main.js code:</h4>

<pre class="brush: js">
// create worker
var myWorker = new Worker("myWorker.js");

// listen for myWorker to transfer the buffer back to main
myWorker.addEventListener("message", function handleMessageFromWorker(msg) {
  console.log("message from worker received in main:", msg);

  var bufTransferredBackFromWorker = msg.data;

  console.log(
    "buf.byteLength in main AFTER transfer back from worker:",
    bufTransferredBackFromWorker.byteLength
  );
});

// create the buffer
var myBuf = new ArrayBuffer(8);

console.log(
  "buf.byteLength in main BEFORE transfer to worker:",
  myBuf.byteLength
);

// send myBuf to myWorker and transfer the underlying ArrayBuffer
myWorker.postMessage(myBuf, [myBuf]);

console.log(
  "buf.byteLength in main AFTER transfer to worker:",
  myBuf.byteLength
);
</pre>

<h4 id="myWorker.js_code">myWorker.js code</h4>

<pre class="brush: js">
// listen for main to transfer the buffer to myWorker
self.onmessage = function handleMessageFromMain(msg) {
  console.log("message from main received in worker:", msg);

  var bufTransferredFromMain = msg.data;

  console.log(
    "buf.byteLength in worker BEFORE transfer back to main:",
    bufTransferredFromMain.byteLength
  );

  // send buf back to main and transfer the underlying ArrayBuffer
  self.postMessage(bufTransferredFromMain, [bufTransferredFromMain]);

  console.log(
    "buf.byteLength in worker AFTER transfer back to main:",
    bufTransferredFromMain.byteLength
  );
};
</pre>

<h4 id="Output_logged">Output logged</h4>

<pre class="brush: bash">
buf.byteLength in main BEFORE transfer to worker:        8                     main.js:19
buf.byteLength in main AFTER transfer to worker:         0                     main.js:27

message from main received in worker:                    MessageEvent { ... }  myWorker.js:3
buf.byteLength in worker BEFORE transfer back to main:   8                     myWorker.js:7
buf.byteLength in worker AFTER transfer back to main:    0                     myWorker.js:15

message from worker received in main:                    MessageEvent { ... }  main.js:6
buf.byteLength in main AFTER transfer back from worker:  8                     main.js:10
</pre>

<p><code>byteLength</code> goes to 0 after the <code>ArrayBuffer</code> is transferred. For a more sophisticated full working example of <code>ArrayBuffer</code> transfer, see this Firefox demo add-on: <a href="https://github.com/Noitidart/ChromeWorker/tree/aca57d9cadc4e68af16201bdecbfb6f9a6f9ca6b">GitHub :: ChromeWorker - demo-transfer-arraybuffer</a></p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>The {{domxref("Worker")}} interface it belongs to.</li>
</ul>
