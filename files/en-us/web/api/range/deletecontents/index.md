---
title: Range.deleteContents()
slug: Web/API/Range/deleteContents
tags:
  - API
  - DOM
  - Method
  - Range
browser-compat: api.Range.deleteContents
---
<div>{{ApiRef("DOM")}}</div>

<p>The <strong><code>Range.deleteContents()</code></strong> method removes the contents of
  the {{ domxref("Range") }} from the {{ domxref("Document") }}.</p>

<p>Unlike {{ domxref("Range.extractContents()") }}, this method does not return a
  {{domxref("DocumentFragment")}} containing the deleted content.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>range</em>.deleteContents()
</pre>

<h2 id="Example">Example</h2>

<pre class="brush: js">range = document.createRange();
range.selectNode(document.getElementsByTagName("div").item(0));
range.deleteContents();
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/API/Document_Object_Model">The DOM interfaces index</a></li>
</ul>
