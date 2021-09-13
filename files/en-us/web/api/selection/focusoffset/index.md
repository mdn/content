---
title: Selection.focusOffset
slug: Web/API/Selection/focusOffset
tags:
- API
- Experimental
- HTML Editing
- Property
- Read-only
- Reference
- Selection
browser-compat: api.Selection.focusOffset
---
<div>{{ ApiRef("DOM") }}{{SeeCompatTable}}</div>

<p>The <strong><code>Selection.focusOffset</code></strong> read-only property returns the
  number of characters that the selection's focus is offset within the
  {{domxref("Selection.focusNode")}}.</p>

<p>This number is zero-based. If the selection ends with the first character in the
  {{domxref("Selection.focusNode")}}, <code>0</code> is returned.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>offset</em> =<em> sel</em>.focusOffset
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("Selection")}}, the interface it belongs to.</li>
</ul>
