---
title: NodeFilter.acceptNode()
slug: Web/API/NodeFilter/acceptNode
tags:
- API
- DOM
- DOM Reference
- Method
- NodeFilter
browser-compat: api.NodeFilter.acceptNode
---
<div>{{APIRef("DOM")}}</div>

<p>The <strong><code>NodeFilter.acceptNode()</code></strong> method returns an
  <code>unsigned short</code> that will be used to tell if a given {{domxref("Node")}}
  must be accepted or not by the {{ domxref("NodeIterator") }} or {{ domxref("TreeWalker")
  }} iteration algorithm. This method is expected to be written by the user of a
  <code>NodeFilter</code>. Possible return values are:</p>

<table class="standard-table">
  <tbody>
    <tr>
      <td class="header">Constant</td>
      <td class="header">Description</td>
    </tr>
    <tr>
      <td><code>NodeFilter.FILTER_ACCEPT</code></td>
      <td>Value returned by the {{ domxref("NodeFilter.acceptNode()") }} method when a
        node should be accepted.</td>
    </tr>
    <tr>
      <td><code>NodeFilter.FILTER_REJECT</code></td>
      <td>Value to be returned by the {{ domxref("NodeFilter.acceptNode()") }} method when
        a node should be rejected. The children of rejected nodes are not visited by the
        {{ domxref("NodeIterator") }} or {{ domxref("TreeWalker") }} object; this value is
        treated as "skip this node and all its children".</td>
    </tr>
    <tr>
      <td><code>NodeFilter.FILTER_SKIP</code></td>
      <td>Value to be returned by {{ domxref("NodeFilter.acceptNode()") }} for nodes to be
        skipped by the {{ domxref("NodeIterator") }} or {{ domxref("TreeWalker") }}
        object. The children of skipped nodes are still considered. This is treated as
        "skip this node but not its children".</td>
    </tr>
  </tbody>
</table>

<p>The function should return <code>NodeFilter.FILTER_ACCEPT</code>, which causes the
  TreeWalker to return the node, <code>NodeFilter.FILTER_REJECT</code>, which causes the
  TreeWalker to ignore the entire subtree, or <code>NodeFilter.FILTER_SKIP</code>.</p>

<p>The browser doesn't provide any object implementing this method. It is the user who is
  expected to write an object implementing the {{domxref("NodeFilter")}} interface,
  tailoring the <code>acceptNode()</code> method to its needs, and using it with some
  {{domxref("TreeWalker")}} or {{domxref("NodeIterator")}} objects.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>result<code> = </code>nodeFilter<code>.acceptNode(</code>node</em>)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><em>node</em></dt>
  <dd>Is a {{domxref("Node")}} being the object to check against the filter.</dd>
</dl>

<h2 id="Example">Example</h2>

<pre class="brush: js">var nodeIterator = document.createNodeIterator(
  // Node to use as root
  document.getElementById('someId'),

  // Only consider nodes that are text nodes (nodeType 3)
  NodeFilter.SHOW_TEXT,

  // Object containing the function to use for the acceptNode method
  // of the NodeFilter
    { acceptNode: function(node) {
      // Logic to determine whether to accept, reject or skip node
      // In this case, only accept nodes that have content
      // other than whitespace
      if ( ! /^\s*$/.test(node.data) ) {
        return NodeFilter.FILTER_ACCEPT;
      }
    }
  },
  false
);

// Show the content of every non-empty text node that is a child of root
var node;

while ((node = iterator.nextNode())) {
  alert(node.data);
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>The interface it belongs to: {{domxref("NodeFilter")}}.</li>
</ul>
