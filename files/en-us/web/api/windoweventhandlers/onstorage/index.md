---
title: WindowEventHandlers.onstorage
slug: Web/API/WindowEventHandlers/onstorage
tags:
- API
- Event Handler
- Property
- Reference
- Web Storage
- WindowEventHandlers
browser-compat: api.WindowEventHandlers.onstorage
---
<div>{{ ApiRef() }}</div>

<p>The <strong><code>onstorage</code></strong> property of the
  {{domxref("WindowEventHandlers")}} mixin is an <a href="/en-US/docs/Web/Events/Event_handlers">event handler</a> for
  processing <code><a href="/en-US/docs/Web/API/Window/storage_event">storage</a></code>
  events.</p>

<p>The <code>storage</code> event fires when a storage area has been changed in the
  context of another document.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js"><em> window</em>.onstorage = <em>functionRef</em>;</pre>

<h3 id="Value">Value</h3>

<p><code>functionRef</code> is a function name or a <a
    href="/en-US/docs/Web/JavaScript/Reference/Operators/function">function
    expression</a>. This function receives a {{domxref("StorageEvent")}} as its sole
  argument.</p>

<h2 id="Example">Example</h2>

<p>This example logs the value for a storage key whenever it changes in another document.
</p>

<pre class="brush: js">window.onstorage = function(e) {
  console.log('The ' + e.key +
    ' key has been changed from ' + e.oldValue +
    ' to ' + e.newValue + '.');
};</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/API/Window/storage_event">Window: <code>storage</code>
      event</a></li>
</ul>
