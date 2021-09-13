---
title: Node.compareDocumentPosition()
slug: Web/API/Node/compareDocumentPosition
tags:
- API
- Compare Nodes
- DOM
- Method
- Node
- Position
- Reference
- compareDocumentPosition
browser-compat: api.Node.compareDocumentPosition
---
<div>{{APIRef("DOM")}}</div>

<p>The
    <code><strong>Node.compareDocumentPosition()</strong></code> method reports the
    position of its argument node relative to the node on which it is called.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">node.compareDocumentPosition(otherNode)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>otherNode</code></dt>
  <dd>
    The {{domxref("Node")}} for which position should be reported, relative to <code>node</code>.
  </dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>An integer value representing <code>otherNode</code>'s position relative to <code>node</code>
    as a <a href="https://en.wikipedia.org/wiki/Mask_(computing)">bitmask</a> combining the
    following constant properties of {{domxref("Node")}}:</p>

<table>
  <thead>
    <tr>
      <th scope="col">Constant</th>
      <th scope="col">Value</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>Node.DOCUMENT_POSITION_DISCONNECTED</code></td>
      <td>1</td>
      <td><code>otherNode</code> and <code>node</code> are in different documents
          or different trees in the same document</td>
    </tr>
    <tr>
      <td><code>Node.DOCUMENT_POSITION_PRECEDING</code></td>
      <td>2</td>
      <td><code>otherNode</code> precedes <code>node</code> in either a
          <a href="https://en.wikipedia.org/wiki/Tree_traversal#Pre-order,_NLR">pre-order depth-first traversal</a>
          of a tree containing both (e.g., as an ancestor or previous sibling
          or a descendant of a previous sibling or previous sibling of an ancestor)
          or (if they are disconnected) in an arbitrary but consistent ordering</td>
    </tr>
    <tr>
      <td><code>Node.DOCUMENT_POSITION_FOLLOWING</code></td>
      <td>4</td>
      <td><code>otherNode</code> follows <code>node</code> in either a
          <a href="https://en.wikipedia.org/wiki/Tree_traversal#Pre-order,_NLR">pre-order depth-first traversal</a>
          of a tree containing both (e.g., as a descendant or following sibling
          or a descendant of a following sibling or following sibling of an ancestor)
          or (if they are disconnected) in an arbitrary but consistent ordering</td>
    </tr>
    <tr>
      <td><code>Node.DOCUMENT_POSITION_CONTAINS</code></td>
      <td>8</td>
      <td><code>otherNode</code> is an ancestor of <code>node</code></td>
    </tr>
    <tr>
      <td><code>Node.DOCUMENT_POSITION_CONTAINED_BY</code></td>
      <td>16</td>
      <td><code>otherNode</code> is a descendant of <code>node</code></td>
    </tr>
    <tr>
      <td><code>Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC</code></td>
      <td>32</td>
      <td>the result relies upon arbitrary and/or implementation-specific behavior
          and is not guaranteed to be portable</td>
    </tr>
  </tbody>
</table>

<p>More than one bit is set if multiple scenarios apply. For example, if
  <code>otherNode</code> is located earlier in the document <strong><em>and</em></strong>
  contains the <code>node</code> on which <code>compareDocumentPosition()</code> was
  called, then both the <code>DOCUMENT_POSITION_CONTAINS</code> and
  <code>DOCUMENT_POSITION_PRECEDING</code> bits would be set, producing a value of 10
  (<code>0x0A</code>).</p>

<h2 id="Example">Example</h2>

<pre class="brush:js">const head = document.head;
const body = document.body;

if (head.compareDocumentPosition(body) &amp; Node.DOCUMENT_POSITION_FOLLOWING) {
  console.log('Well-formed document');
} else {
  console.error('&lt;head&gt; is not before &lt;body&gt;');
}
</pre>

<div class="note">
  <p><strong>Note:</strong> Because the result returned by
    <code>compareDocumentPosition()</code> is a bitmask, the
    <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND">bitwise AND operator</a>
    must be used for meaningful results.</p>
</div>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{DOMxRef("Node.contains()")}}</li>
</ul>
