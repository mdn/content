---
title: HTMLContentElement.select
slug: Web/API/HTMLContentElement/select
tags:
- API
- HTML DOM
- Property
- Reference
- Web Components
- Deprecated
browser-compat: api.HTMLContentElement.select
---
<p>{{ APIRef("Web Components") }}{{Deprecated_header}}</p>

<p>The <code><strong>HTMLContentElement.select</strong></code> property reflects the
  <code>select</code> attribute. It is a {{domxref("DOMString")}} containing a
  space-separated list of CSS selectors that select the content to insert in place of the
  &lt;content&gt; element.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>object</em>.select = "<em>CSSselector</em> <em>CSSselector</em> ...";
</pre>

<h2 id="Example">Example</h2>

<pre class="brush: js">// Select &lt;h1&gt; elements and elements with class="error"
myContentObject.select = "h1 .error";</pre>

<h2 id="Specifications">Specifications</h2>

<p>This feature is no longer defined by any standards.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/API/HTMLContentElement">HTMLContentElement</a></li>
</ul>
