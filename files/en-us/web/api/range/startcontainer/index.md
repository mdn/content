---
title: Range.startContainer
slug: Web/API/Range/startContainer
tags:
  - API
  - DOM
  - Property
  - Range
browser-compat: api.Range.startContainer
---
<p>{{ApiRef("DOM")}}</p>

<p>The <code><strong>Range.startContainer</strong></code> read-only property returns the
  {{domxref("Node")}} within which the <code>Range</code> starts. To change the start
  position of a node, use one of the {{domxref("Range.setStart()")}} methods.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>startRangeNode</em> = <em>range</em>.startContainer;
</pre>

<h2 id="Example">Example</h2>

<pre class="brush: js">range = document.createRange();
range.setStart(startNode,startOffset);
range.setEnd(endNode,endOffset);
startRangeNode = range.startContainer;
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/API/Document_Object_Model">The DOM interfaces index</a></li>
</ul>
