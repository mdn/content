---
title: Node.nodeValue
slug: Web/API/Node/nodeValue
tags:
- API
- DOM
- NeedsSpecTable
- Node
- Property
- Reference
browser-compat: api.Node.nodeValue
---
<div>{{APIRef("DOM")}}</div>

<p>The <code><strong>nodeValue</strong></code> property of the {{domxref("Node")}}
  interface returns or sets the value of the current node.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><var>str</var> = <var>node</var>.nodeValue;
<em>node</em>.nodeValue = <em>str</em>;
</pre>

<h3 id="Value">Value</h3>

<p><code>str</code> is a string containing the value of the current node, if any. For the
  document itself, <code>nodeValue</code> returns <code>null</code>. For text, comment,
  and CDATA nodes, <code>nodeValue</code> returns the content of the node. For attribute
  nodes, the value of the attribute is returned.</p>

<p>The following table shows the return values for different elements:</p>

<table>
  <thead>
    <tr>
      <th scope="col">Node</th>
      <th scope="col">Value of nodeValue</th>
    </tr>
  </thead>
  <tbody>
  </tbody>
  <tbody>
    <tr>
      <td>{{domxref("CDATASection")}}</td>
      <td>Content of the CDATA section</td>
    </tr>
    <tr>
      <td>{{domxref("Comment")}}</td>
      <td>Content of the comment</td>
    </tr>
    <tr>
      <td>{{domxref("Document")}}</td>
      <td><code>null</code></td>
    </tr>
    <tr>
      <td>{{domxref("DocumentFragment")}}</td>
      <td><code>null</code></td>
    </tr>
    <tr>
      <td>{{domxref("DocumentType")}}</td>
      <td><code>null</code></td>
    </tr>
    <tr>
      <td>{{domxref("Element")}}</td>
      <td><code>null</code></td>
    </tr>
    <tr>
      <td>{{domxref("NamedNodeMap")}}</td>
      <td><code>null</code></td>
    </tr>
    <tr>
      <td>{{domxref("ProcessingInstruction")}}</td>
      <td>Entire content excluding the target</td>
    </tr>
    <tr>
      <td>{{domxref("Text")}}</td>
      <td>Content of the text node</td>
    </tr>
  </tbody>
</table>

<p>When <code>nodeValue</code> is defined to be <code>null</code>, setting it has no
  effect.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
