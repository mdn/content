---
title: Selection.collapse()
slug: Web/API/Selection/collapse
tags:
- API
- Experimental
- HTML Editing
- Method
- Reference
- Selection
browser-compat: api.Selection.collapse
---
<div>{{ApiRef("DOM")}}{{SeeCompatTable}}</div>

<p>The <strong><code>Selection.collapse()</code></strong> method collapses the current
  selection to a single point. The document is not modified. If the content is focused and
  editable, the caret will blink there.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><var>sel</var>.collapse(<var>node</var>, <var>offset</var>);
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><em><code>node</code></em></dt>
  <dd>The caret location will be within this node. This value can also be set to
    <code>null</code> — if <code>null</code> is specified, the method will behave like
    {{domxref("Selection.removeAllRanges()")}}, i.e. all ranges will be removed from the
    selection.</dd>
  <dt><em><code>offset</code></em> {{optional_inline}}</dt>
  <dd>The offset in <code>node</code> to which the selection will be collapsed. If not
    specified, the default value <code>0</code> is used.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">/* Place the caret at the beginning of an HTML document's body. */
var body = document.getElementsByTagName("body")[0];
window.getSelection().collapse(body,0);
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("Selection")}}, the interface it belongs to.</li>
</ul>
