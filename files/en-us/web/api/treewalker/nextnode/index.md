---
title: TreeWalker.nextNode()
slug: Web/API/TreeWalker/nextNode
tags:
- API
- DOM
- DOM Reference
- Method
- TreeWalker
browser-compat: api.TreeWalker.nextNode
---
<p>{{ APIRef("DOM") }}</p>

<p>The <strong><code>TreeWalker.nextNode()</code></strong> method moves the current
  {{domxref("Node")}} to the next <em>visible</em> node in the document order, and returns
  the found node. It also moves the current node to this one. If no such node exists,
  returns <code>null</code> and the current node is not changed.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>node</em> = <em>treeWalker</em>.nextNode();
</pre>

<h2 id="Example">Example</h2>

<pre class="brush: js">var treeWalker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_ELEMENT,
    { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
    false
);
var node = treeWalker.nextNode(); // returns the first child of root, as it is the next node in document order

</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>The {{domxref("TreeWalker")}} interface it belongs to.</li>
</ul>
