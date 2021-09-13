---
title: DedicatedWorkerGlobalScope.name
slug: Web/API/DedicatedWorkerGlobalScope/name
tags:
- API
- DOM
- DedicatedWorkerGlobalScope
- Property
- Reference
- Worker
- name
browser-compat: api.DedicatedWorkerGlobalScope.name
---
<div>{{APIRef("Web Workers API")}}</div>

<p>The <code><strong>name</strong></code> read-only property of the
  {{domxref("DedicatedWorkerGlobalScope")}} interface returns the name that the
  {{domxref("Worker")}} was (optionally) given when it was created. This is the name that
  the {{domxref("Worker.Worker", "Worker()")}} constructor can pass to get a reference to
  the {{domxref("DedicatedWorkerGlobalScope")}}.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var nameObj = self.name;</pre>

<h3 id="Value">Value</h3>

<p>A {{domxref("DOMString")}}.</p>

<h2 id="Example">Example</h2>

<p>If a worker is created using a constructor with a <code>name</code> option:</p>

<pre
  class="brush: js">var myWorker = new Worker("worker.js", { name : "myWorker" });</pre>

<p>the {{domxref("DedicatedWorkerGlobalScope")}} will now have a name of "myWorker",
  returnable by running</p>

<pre class="brush: js">self.name</pre>

<p>from inside the worker.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("DedicatedWorkerGlobalScope")}}</li>
</ul>
