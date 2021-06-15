---
title: NodeFilter
slug: Web/API/NodeFilter
tags:
  - API
  - DOM
  - DOM Reference
browser-compat: api.NodeFilter
---
<div>{{APIRef("DOM")}}</div>

<p>A <strong><code>NodeFilter</code></strong> interface represents an object used to filter the nodes in a {{domxref("NodeIterator")}} or {{domxref("TreeWalker")}}. A <code>NodeFilter</code> knows nothing about the document or traversing nodes; it only knows how to evaluate a single node against the provided filter.</p>

<div class="note">
<p><strong>Note:</strong> The browser doesn't provide any object implementing this interface. It is the user who is expected to write one, tailoring the <code>acceptNode()</code> method to its needs, and using it with some {{domxref("TreeWalker")}} or {{domxref("NodeIterator")}} objects.</p>
</div>

<h2 id="Properties">Properties</h2>

<p><em>This interface neither implements nor inherits any properties.</em></p>

<h2 id="Methods">Methods</h2>

<p><em>This interface doesn't inherit any methods.</em></p>

<dl>
	<dt>{{domxref("NodeFilter.acceptNode()")}}</dt>
	<dd>
	<p>Returns an <code>unsigned short</code> that will be used to tell if a given {{domxref("Node")}} must be accepted or not by the {{ domxref("NodeIterator") }} or {{ domxref("TreeWalker") }} iteration algorithm.</p>

	<p>This method is expected to be written by the user of a <code>NodeFilter</code>. Possible return values are:</p>

	<table class="standard-table">
		<thead>
			<tr>
				<th class="header" scope="col">Constant</th>
				<th class="header" scope="col">Description</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><code>FILTER_ACCEPT</code></td>
				<td>Value returned by the {{domxref("NodeFilter.acceptNode()")}} method when a node should be accepted.</td>
			</tr>
			<tr>
				<td><code>FILTER_REJECT</code></td>
				<td>
				<p>Value to be returned by the {{domxref("NodeFilter.acceptNode()")}} method when a node should be rejected. For {{domxref("TreeWalker")}}, child nodes are also rejected.</p>

				<p>For {{ domxref("NodeIterator") }}, this flag is synonymous with <code>FILTER_SKIP</code>.</p>
				</td>
			</tr>
			<tr>
				<td><code>FILTER_SKIP</code></td>
				<td>
				<p>Value to be returned by {{domxref("NodeFilter.acceptNode()")}} for nodes to be skipped by the {{domxref("NodeIterator")}} or {{domxref("TreeWalker")}} object.</p>

				<p>The children of skipped nodes are still considered. This is treated as "skip this node but not its children".</p>
				</td>
			</tr>
		</tbody>
	</table>
	</dd>
</dl>

<h2 id="Example">Example</h2>

<pre class="brush: js">const nodeIterator = document.createNodeIterator(
  // Node to use as root
  document.getElementById('someId'),

  // Only consider nodes that are text nodes (nodeType 3)
  NodeFilter.SHOW_TEXT,

  // Object containing the function to use for the acceptNode method
  // of the NodeFilter
  {
    acceptNode: function(node) {
      // Logic to determine whether to accept, reject or skip node
      // In this case, only accept nodes that have content
      // other than whitespace
      if (/\S/.test(node.data)) {
        return NodeFilter.FILTER_ACCEPT
      }
    }
  },
  false
);

// Show the content of every non-empty text node that is a child of root
let node;

while ((node = nodeIterator.nextNode())) {
  alert(node.data)
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
	<li><strong>Related interfaces</strong>

	<ul>
		<li>{{domxref("TreeWalker")}}</li>
		<li>{{domxref("NodeIterator")}}.</li>
	</ul>
	</li>
</ul>
