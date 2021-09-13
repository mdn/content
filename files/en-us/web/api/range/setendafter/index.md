---
title: Range.setEndAfter()
slug: Web/API/Range/setEndAfter
tags:
  - API
  - DOM
  - Method
  - Range
browser-compat: api.Range.setEndAfter
---
<div>{{ApiRef("DOM")}}</div>

<p>The <strong><code>Range.setEndAfter()</code></strong> method sets the end position of a
  {{domxref("Range")}} relative to another {{domxref("Node")}}. The parent
  <code>Node</code> of end of the <code>Range</code> will be the same as that for the
  <code>referenceNode</code>.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>range</em>.setEndAfter(<em>referenceNode</em>);
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>referenceNode</code></dt>
  <dd>The {{domxref("Node")}} to end the {{domxref("Range")}} after.</dd>
</dl>

<h2 id="Example">Example</h2>

<pre class="brush:js">var range = document.createRange();
var referenceNode = document.getElementsByTagName('div').item(0);

range.setEndAfter(referenceNode);</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/API/Document_Object_Model">The DOM interfaces index</a></li>
</ul>
