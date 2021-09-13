---
title: GlobalEventHandlers.onwheel
slug: Web/API/GlobalEventHandlers/onwheel
tags:
- API
- Event Handler
- GlobalEventHandlers
- HTML DOM
- Property
- Reference
- onwheel
browser-compat: api.GlobalEventHandlers.onwheel
---
<div>{{ ApiRef("DOM") }}</div>

<p>The <strong><code>onwheel</code></strong> property of the
  {{domxref("GlobalEventHandlers")}} mixin is an <a href="/en-US/docs/Web/Events/Event_handlers">event handler</a> that
  processes <code>wheel</code> events.</p>

<p>The <code>wheel</code> event fires when the user rotates the mouse (or other pointing
  device) wheel.</p>

<div class="notecard note">
  <p><strong>Note:</strong> Don't confuse <code>onwheel</code> with
    {{domxref("GlobalEventHandlers.onscroll", "onscroll")}}: <code>onwheel</code> handles
    general wheel rotation, while <code>onscroll</code> handles scrolling of an object's
    content.</p>
</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>target</em>.onwheel = <em>functionRef</em>;
</pre>

<h3 id="Value">Value</h3>

<p><code><var>functionRef</var></code> is a function name or a <a
    href="/en-US/docs/Web/JavaScript/Reference/Operators/function">function
    expression</a>. The function receives a {{domxref("WheelEvent")}} object as its sole
  argument.</p>

<h2 id="Examples">Examples</h2>

<p>This example shows how to scale an element using the mouse (or other pointing device)
  wheel.</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div&gt;Scale me with your mouse wheel.&lt;/div&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">body {
  min-height: 100vh;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

div {
  width: 80px;
  height: 80px;
  background: #cdf;
  padding: 5px;
  transition: transform .3s;
}</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">function zoom(event) {
  event.preventDefault();

  if (event.deltaY &lt; 0) {
    // Zoom in
    scale *= event.deltaY * -2;
  }
  else {
    // Zoom out
    scale /= event.deltaY * 2;
  }

  // Restrict scale
  scale = Math.min(Math.max(.125, scale), 4);

  // Apply scale transform
  el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector('div');
document.onwheel = zoom;</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample("Examples", 700, 400)}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/API/Document/wheel_event">Document: <code>wheel</code>
      event</a></li>
  <li><a href="/en-US/docs/Web/API/Element/wheel_event">Element: <code>wheel</code>
      event</a></li>
</ul>
