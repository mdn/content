---
title: GlobalEventHandlers.onreset
slug: Web/API/GlobalEventHandlers/onreset
tags:
- API
- Event Handler
- GlobalEventHandlers
- HTML DOM
- Property
- Reference
browser-compat: api.GlobalEventHandlers.onreset
---
<div>{{ ApiRef() }}</div>

<p>The <code><strong>onreset</strong></code> property of the
  {{domxref("GlobalEventHandlers")}} mixin is an <a href="/en-US/docs/Web/Events/Event_handlers">event handler</a> that
  processes {{event("reset")}} events.</p>

<p>The <code>reset</code> event fires when the user clicks a reset button in a form
  (<code>{{HtmlElement('input/reset', '&lt;input type="reset"&gt;')}}</code>).</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>target</em>.onreset = <em>functionRef</em>;
</pre>

<h3 id="Value">Value</h3>

<p><code>functionRef</code> is a function name or a <a
    href="/en-US/docs/Web/JavaScript/Reference/Operators/function">function
    expression</a>. The function receives an {{domxref("Event")}} object as its sole
  argument.</p>

<h2 id="Example">Example</h2>

<p>This example logs the current {{domxref("Event.timeStamp")}} whenever you reset the
  form.</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;form id="form"&gt;
  &lt;label&gt;Test field: &lt;input type="text"&gt;&lt;/label&gt;
  &lt;br&gt;&lt;br&gt;
  &lt;button type="reset"&gt;Reset form&lt;/button&gt;
&lt;/form&gt;
&lt;p id="log"&gt;&lt;/p&gt;</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">function logReset(event) {
  log.textContent = `Form reset! Time stamp: ${event.timeStamp}`;
}

const form = document.getElementById('form');
const log = document.getElementById('log');
form.onreset = logReset;</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample("Example")}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{event("reset")}} event</li>
  <li>HTML {{htmlElement("form")}} element</li>
</ul>
