---
title: GlobalEventHandlers.oncancel
slug: Web/API/GlobalEventHandlers/oncancel
tags:
- API
- Dialog
- Event Handler
- GlobalEventHandlers
- HTML DOM
- NeedsExample
- Property
- Reference
browser-compat: api.GlobalEventHandlers.oncancel
---
<div>{{ApiRef("HTML DOM")}}</div>

<p>The <code><strong>oncancel</strong></code> property of the
  {{domxref("GlobalEventHandlers")}} mixin is an <a href="/en-US/docs/Web/Events/Event_handlers">event handler</a> for
  processing {{event("cancel")}} events sent to a {{HTMLElement("dialog")}} element.</p>

<p>The <code>cancel</code> event fires when the user indicates a wish to dismiss a
  <code>&lt;dialog&gt;</code>. This event handler prevents the event from bubbling, so any
  parent handlers are not notified of the event.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>target</em>.oncancel = <em>functionRef</em>;
</pre>

<h3 id="Value">Value</h3>

<p><code>functionRef</code> is a function name or a <a
    href="/en-US/docs/Web/JavaScript/Reference/Operators/function">function
    expression</a>. The function receives an {{domxref("Event")}} object as its sole
  argument.</p>

<p>Only one <code>oncancel</code> handler can be assigned to an object at a time. You may
  prefer to use the {{domxref("EventTarget.addEventListener()")}} method instead, since
  it's more flexible.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{event("cancel")}} event</li>
  <li>HTML {{HTMLElement("dialog")}} element</li>
  <li>Related event handler: {{domxref("GlobalEventHandlers.onclose")}}</li>
</ul>
