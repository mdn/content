---
title: GlobalEventHandlers.onmouseover
slug: Web/API/GlobalEventHandlers/onmouseover
tags:
- API
- Event Handler
- GlobalEventHandlers
- HTML DOM
- Property
- Reference
browser-compat: api.GlobalEventHandlers.onmouseover
---
<div>{{ApiRef("HTML DOM")}}</div>

<p>The <code><strong>onmouseover</strong></code> property of the
  {{domxref("GlobalEventHandlers")}} mixin is an <a href="/en-US/docs/Web/Events/Event_handlers">event handler</a> that
  processes {{event("mouseover")}} events.</p>

<p>The <code>mouseover</code> event fires when the user moves the mouse over a particular
  element.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>element</em>.onmouseover = <em>function</em>;
</pre>

<h2 id="Example">Example</h2>

<p>This example adds an <code>onmouseover</code> and an <code>onmouseout</code> event to a
  paragraph. Try moving your mouse over and out of the element.</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p&gt;Test your mouse on me!&lt;/p&gt;</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">const p = document.querySelector('p');
p.onmouseover = logMouseOver;
p.onmouseout = logMouseOut;

function logMouseOver() {
  p.textContent = 'MOUSE OVER detected';
}

function logMouseOut() {
  p.textContent = 'MOUSE OUT detected';
}</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample("Example")}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
