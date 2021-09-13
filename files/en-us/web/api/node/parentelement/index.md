---
title: Node.parentElement
slug: Web/API/Node/parentElement
tags:
- API
- DOM
- JavaScript
- NeedsBrowserCompatibility
- Node
- Property
browser-compat: api.Node.parentElement
---
<div>
  <div>{{APIRef("DOM")}}</div>
</div>

<p>The <code><strong>Node.parentElement</strong></code> read-only property returns the DOM
  node's parent {{DOMxRef("Element")}}, or <code>null</code> if the node either has no
  parent, or its parent isn't a DOM {{DOMxRef("Element")}}.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js"><em>parentElement</em> = <em>node</em>.parentElement</pre>

<p><code>parentElement</code> is the parent element of the current node. This is always a
  DOM {{DOMxRef("Element")}} object, or <code>null</code>.</p>

<h2 id="Example">Example</h2>

<pre class="brush:js">if (node.parentElement) {
    node.parentElement.style.color = "red";
}</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>On some browsers, the <code>parentElement</code> property is only defined on nodes that
  are themselves an {{DOMxRef("Element")}}. In particular, it is not defined on text
  nodes.</p>

<div>

  <p>{{Compat}}</p>
</div>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{DOMxRef("Node.parentNode")}}</li>
</ul>
