---
title: GlobalEventHandlers.onabort
slug: Web/API/GlobalEventHandlers/onabort
tags:
- API
- Event Handler
- Experimental
- GlobalEventHandlers
- NeedsContent
- NeedsHelp
- NeedsUpdate
- Property
- Reference
- Window
browser-compat: api.GlobalEventHandlers.onabort
---
<div>{{ApiRef("HTML DOM")}} {{SeeCompatTable}} {{draft}}</div>

<p>The <strong><code>onabort</code></strong> property of the
  {{domxref("GlobalEventHandlers")}} mixin is the <a href="/en-US/docs/Web/Events/Event_handlers">event handler</a> for
  processing {{event("abort")}} events sent to the window.</p>

<p>While the <a
    href="https://html.spec.whatwg.org/multipage/browsing-the-web.html#abort-a-document">standard
    for aborting a document load</a> is defined, <a
    href="https://github.com/whatwg/html/issues/3525">HTML issue #3525</a> suggests that
  browsers should not currently fire the <code>abort</code> event on a <code>Window</code>
  that would trigger <code>onabort</code> to be called.</p>

<p>TODO: define what "abort" is. Closing the window via window manager? Stopping the load
  of the page? By which means and reasons (user, network/server)? At which stages would it
  fire / be caught? For IE, <code>onabort</code> is only available with
  <code>&lt;img&gt;</code> tags.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>window</em>.onabort = <em>functionRef</em>;
</pre>

<h3 id="Value">Value</h3>

<p><code>functionRef</code> is a function name or a <a
    href="/en-US/docs/Web/JavaScript/Reference/Operators/function">function
    expression</a>.</p>

<h2 id="Example">Example</h2>

<pre class="brush:js">window.onabort = function() {
  alert('Load aborted.');
}</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<div>

  <p>{{Compat}}</p>

  <p>This property is not available with Firefox 2 or Safari.</p>
</div>
