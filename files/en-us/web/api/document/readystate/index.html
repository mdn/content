---
title: Document.readyState
slug: Web/API/Document/readyState
tags:
  - API
  - HTML DOM
  - Property
  - Reference
browser-compat: api.Document.readyState
---
<div>{{APIRef("DOM")}}</div>

<p>The <strong><code>Document.readyState</code></strong> property describes the loading
  state of the {{domxref("document")}}.</p>

<p>When the value of this property changes, a {{event("readystatechange")}} event fires on
  the {{domxref("document")}} object.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">let <var>string</var> = <var>document</var>.readyState;
</pre>

<h3 id="Values">Values</h3>

<p>The <code>readyState</code> of a document can be one of following:</p>

<dl>
  <dt><code>loading</code></dt>
  <dd>The {{domxref("document")}} is still loading.</dd>
  <dt><code>interactive</code></dt>
  <dd>The document has finished loading and the document has been parsed but sub-resources
    such as scripts, images, stylesheets and frames are still loading.</dd>
  <dt><code>complete</code></dt>
  <dd>The document and all sub-resources have finished loading. The state indicates that
    the {{event("load")}} event is about to fire.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Different_states_of_readiness">Different states of readiness</h3>

<pre class="brush: js">switch (document.readyState) {
  case "loading":
    // The document is still loading.
    break;
  case "interactive":
    // The document has finished loading. We can now access the DOM elements.
    // But sub-resources such as scripts, images, stylesheets and frames are still loading.
    const span = document.createElement("span");
    span.textContent = "A &lt;span&gt; element.";
    document.body.appendChild(span);
    break;
  case "complete":
    // The page is fully loaded.
    console.log("The first CSS rule is: " + document.styleSheets[0].cssRules[0].cssText);
    break;
}
</pre>

<h3 id="readystatechange_as_an_alternative_to_DOMContentLoaded_event">readystatechange as
  an alternative to DOMContentLoaded event</h3>

<pre class="brush: js">// Alternative to DOMContentLoaded event
document.onreadystatechange = function () {
  if (document.readyState === 'interactive') {
    initApplication();
  }
}
</pre>

<h3 id="readystatechange_as_an_alternative_to_load_event">readystatechange as an
  alternative to load event</h3>

<pre class="brush: js">// Alternative to load event
document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
    initApplication();
  }
}</pre>

<h3
  id="readystatechange_as_event_listener_to_insert_or_modify_the_DOM_before_DOMContentLoaded">
  readystatechange as event listener to insert or modify the DOM before DOMContentLoaded
</h3>

<pre class="brush: js">document.addEventListener('readystatechange', event =&gt; {
  if (event.target.readyState === 'interactive') {
    initLoader();
  }
  else if (event.target.readyState === 'complete') {
    initApp();
  }
});

</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<div>{{Compat}}</div>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{event("readystatechange")}} event</li>
  <li>{{event("DOMContentLoaded")}} event</li>
  <li>{{event("load")}} event</li>
</ul>
