---
title: GlobalEventHandlers.onpointerup
slug: Web/API/GlobalEventHandlers/onpointerup
tags:
- API
- Event Handler
- GlobalEventHandlers
- HTML DOM
- PointerEvent
- Property
- Reference
browser-compat: api.GlobalEventHandlers.onpointerup
---
<div>{{ApiRef("HTML DOM")}}</div>

<p>The <strong><code>onpointerup</code></strong> property of the
  {{domxref("GlobalEventHandlers")}} mixin is an <a href="/en-US/docs/Web/Events/Event_handlers">event handler</a> that
  processes {{event("pointerup")}} events.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><var>targetElement</var>.onpointerup = <var>upHandler</var>;

var <var>upHandler</var> = <var>targetElement</var>.onpointerup;
</pre>

<h3 id="Value">Value</h3>

<dl>
  <dt><code>upHandler</code></dt>
  <dd>The <code>pointerup</code> event handler for element <code>targetElement</code>.
  </dd>
</dl>

<h2 id="Example">Example</h2>

<p>This example shows two ways to use <code>onpointerup</code> to set an element's
  <code>pointerup</code> event handler.</p>

<pre class="brush: js">&lt;html&gt;
&lt;script&gt;
function upHandler(ev) {
  // Process the pointerup event
}
function init() {
  let el = document.getElementById('target1');
  el.onpointerup = upHandler;
}
&lt;/script&gt;

&lt;body onload="init();"&gt;
  &lt;div id="target1"&gt; Touch me ... &lt;/div&gt;
  &lt;div id="target2" onpointerup="upHandler(event)"&gt; Touch me ... &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>
    <code><a href="/en-US/docs/Web/API/Document/pointerup_event">Document: pointerup</a></code>
    event</li>
  <li>
    <code><a href="/en-US/docs/Web/API/HTMLElement/pointerup_event">HTMLElement: pointerup</a></code>
    event</li>
</ul>
