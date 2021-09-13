---
title: TreeWalker.previousSibling()
slug: Web/API/TreeWalker/previousSibling
tags:
- API
- DOM
- DOM Reference
- Method
- TreeWalker
- createTreeWalker
- treeWalker.previousSibling
browser-compat: api.TreeWalker.previousSibling
---
<p>{{ APIRef("DOM") }}</p>

<p>The <strong><code>TreeWalker.previousSibling()</code></strong> method moves the current
  {{domxref("Node")}} to its previous sibling, if any, and returns the found sibling. If
  there is no such node, return <code>null</code> and the current node is not changed.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>node</em> = <em>treeWalker</em>.previousSibling();
</pre>

<h2 id="Example">Example</h2>

<pre class="brush: js">var treeWalker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_ELEMENT,
    { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
    false
);
var node = treeWalker.previousSibling(); // returns null as there is no previous sibiling

</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>The {{domxref("TreeWalker")}} interface it belongs to.</li>
</ul>
