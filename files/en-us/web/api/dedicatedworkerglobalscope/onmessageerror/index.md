---
title: DedicatedWorkerGlobalScope.onmessageerror
slug: Web/API/DedicatedWorkerGlobalScope/onmessageerror
tags:
- API
- DedicatedWorkerGlobalScope
- Event Handler
- Property
- Reference
- onmessageerror
browser-compat: api.DedicatedWorkerGlobalScope.onmessageerror
---
<div>{{APIRef("HTML DOM")}}</div>

<p>The <code><strong>onmessageerror</strong></code> event handler of the
  {{domxref("DedicatedWorkerGlobalScope")}} interface is an {{domxref("EventListener")}},
  called whenever an {{domxref("MessageEvent")}} of type <code>messageerror</code> is
  fired on the worker—that is, when it receives a message that cannot be
  {{glossary("Deserialization", "deserialized")}}.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">onmessageerror = function() { ... };</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/API/Channel_Messaging_API/Using_channel_messaging">Using
      channel messaging</a></li>
</ul>
