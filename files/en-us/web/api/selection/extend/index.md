---
title: Selection.extend()
slug: Web/API/Selection/extend
tags:
- API
- Experimental
- HTML Editing
- Method
- Reference
- Selection
browser-compat: api.Selection.extend
---
<div>
  <div>
    <div>{{ ApiRef("DOM") }}{{SeeCompatTable}}</div>
  </div>
</div>

<p>The <strong><code>Selection.extend()</code></strong> method moves the focus of the
  selection to a specified point. The anchor of the selection does not move. The selection
  will be from the anchor to the new focus, regardless of direction.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>sel</em>.extend(<em>node</em>, <em>offset</em>)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>node</code></dt>
  <dd>The node within which the focus will be moved.</dd>
  <dt><code>offset</code> {{optional_inline}}</dt>
  <dd>The offset position within <code>node</code> where the focus will be moved to. If
    not specified, the default value <code>0</code> is used.</dd>
</dl>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("Selection")}}, the interface it belongs to.</li>
</ul>
