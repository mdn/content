---
title: NodeIterator.previousNode()
slug: Web/API/NodeIterator/previousNode
tags:
- API
- DOM
- Method
- NodeIterator
browser-compat: api.NodeIterator.previousNode
---
<div>{{APIRef("DOM")}}</div>

<p>The <code><strong>NodeIterator.previousNode()</strong></code> method returns the
	previous node in the set represented by the {{domxref("NodeIterator")}} and moves the
	position of the iterator backwards within the set.</p>

<p>This method returns <code>null</code> when the current node is the first node in the
	set.</p>

<p>In old browsers, as specified in old versions of the specifications, the method may
	throws the <code>INVALID_STATE_ERR</code> {{domxref("DOMException")}} if this method
	is called after the {{domxref("NodeIterator.detach()")}}method. Recent browsers never
	throw.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>node</em> = <em>nodeIterator</em>.previousNode();
</pre>

<h2 id="Example">Example</h2>

<pre class="brush: js">var nodeIterator = document.createNodeIterator(
    document.body,
    NodeFilter.SHOW_ELEMENT,
    { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
    false // this optional argument is not used any more
);
currentNode = nodeIterator.nextNode(); // returns the next node
previousNode = nodeIterator.previousNode(); // same result, since we backtracked to the previous node
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
	<li>The interface it belongs to: {{domxref("NodeIterator")}}.</li>
</ul>
