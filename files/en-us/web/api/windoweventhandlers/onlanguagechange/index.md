---
title: WindowEventHandlers.onlanguagechange
slug: Web/API/WindowEventHandlers/onlanguagechange
tags:
- API
- Event Handler
- Experimental
- Property
- Reference
- WindowEventHandlers
browser-compat: api.WindowEventHandlers.onlanguagechange
---
<div>{{APIRef("HTML DOM")}} {{SeeCompatTable}}</div>

<p>The <code><strong>onlanguagechange</strong></code> property of the
  {{domxref("WindowEventHandlers")}} mixin is the <a href="/en-US/docs/Web/Events/Event_handlers">event handler</a> for
  processing {{event("languagechange")}} events.</p>

<p>These events are received by the object implementing this interface, usually a
  {{domxref("Window")}}, an {{domxref("HTMLBodyElement")}}, or an
  {{domxref("HTMLIFrameElement")}}. Such an event is sent by the browser to inform that
  the preferred languages list has been updated. The list is accessible via
  {{domxref("Navigator.languages")}}.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>object</em>.onlanguagechange = <em>function</em>;
</pre>

<h3 id="Value">Value</h3>

<ul>
  <li><code>function</code> is the name of a user-defined function, without the
    <code>()</code> suffix or any parameters, or an anonymous function declaration, such
    as <code>function(event) {...}</code>. An event handler always has one single
    parameter, containing the event, here of type {{domxref("Event")}}.</li>
</ul>

<h2 id="Example">Example</h2>

<pre class="brush: js">window.onlanguagechange = function(event) {
  console.log('languagechange event detected!');
};
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>The {{event("languagechange")}} event and its type, {{domxref("Event")}}</li>
</ul>
