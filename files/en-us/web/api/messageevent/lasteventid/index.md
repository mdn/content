---
title: MessageEvent.lastEventId
slug: Web/API/MessageEvent/lastEventId
tags:
- API
- DOM
- MessageEvent
- Property
- Reference
- lastEventID
- messaging
browser-compat: api.MessageEvent.lastEventId
---
<div>{{APIRef("HTML DOM")}}</div>

<p>The <code><strong>lastEventId</strong></code> read-only property of the
  {{domxref("MessageEvent")}} interface is a {{domxref("DOMString")}} representing a
  unique ID for the event.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var myId = messageEvent.lastEventId;</pre>

<h3 id="Value">Value</h3>

<p>A {{domxref("DOMString")}} representing the ID.</p>

<h2 id="Example">Example</h2>

<pre class="brush: js">myWorker.onmessage = function(e) {
  result.textContent = e.data;
  console.log('Message received from worker');
  console.log(e.lastEventId);
};
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("ExtendableMessageEvent")}} — similar to this interface but used in
    interfaces that needs to give more flexibility to authors.</li>
</ul>
