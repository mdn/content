---
title: GlobalEventHandlers.ontouchcancel
slug: Web/API/GlobalEventHandlers/ontouchcancel
tags:
- API
- Event Handler
- Experimental
- GlobalEventHandlers
- HTML DOM
- Property
- Reference
browser-compat: api.GlobalEventHandlers.ontouchcancel
---
<div>{{ApiRef("HTML DOM")}} {{SeeCompatTable}}</div>

<p>The <strong><code>ontouchcancel</code></strong> property of the
  {{domxref("GlobalEventHandlers")}} mixin is an <a href="/en-US/docs/Web/Events/Event_handlers">event handler</a> that
  processes {{event("touchcancel")}} events.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var <var>cancelHandler</var> = <var>someElement</var>.ontouchcancel;
</pre>

<h3 id="Return_value">Return value</h3>

<dl>
  <dt><code><var>cancelHandler</var></code></dt>
  <dd>The <code>touchcancel</code> event handler for element
    <code><var>someElement</var></code>.</dd>
</dl>

<h2 id="Example">Example</h2>

<p>This example shows two ways to use <code>ontouchcancel</code> to set an element's
  <code>touchcancel</code> event handler.</p>

<pre class="brush: js">&lt;html&gt;
&lt;script&gt;
function cancelTouch(ev) {
  // Process the event
}
function init() {
  let el = document.getElementById('target1');
  el.ontouchcancel = cancelTouch;
}
&lt;/script&gt;

&lt;body onload="init();"&gt;
  &lt;div id="target1"&gt; Touch me ... &lt;/div&gt;
  &lt;div id="target2" ontouchcancel="cancelTouch(event)"&gt; Touch me ... &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{ event("touchcancel") }}</li>
</ul>
