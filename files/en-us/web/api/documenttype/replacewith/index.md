---
title: DocumentType.replaceWith()
slug: Web/API/DocumentType/replaceWith
tags:
  - API
  - DOM
  - Method
  - DocumentType
  - Reference
browser-compat: api.DocumentType.replaceWith
---
<div>{{APIRef("DOM")}}</div>

<p>The <code><strong>DocumentType.replaceWith()</strong></code> method replaces the document type with a set of given nodes.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">replaceWith(...nodes)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>nodes</code></dt>
  <dd>A set of nodes to replace the {{domxref("DocumentType")}} with.</dd>
</dl>

<h3 id="Exceptions">Exceptions</h3>

<ul>
  <li>{{domxref("HierarchyRequestError")}}: Node cannot be inserted at the specified point
    in the hierarchy.</li>
</ul>

<h2 id="Examples">Examples</h2>

<h3 id="Using_replaceWith">Using <code>replaceWith()</code></h3>

<pre class="brush: js">
let svg_dt = document.implementation.createDocumentType(
  'svg:svg',
  '-//W3C//DTD SVG 1.1//EN',
  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'
);

document.doctype.replaceWith(svg_dt);
</pre>

<h2 id="Specifications">Specifications</h2>

<p>{{Specifications}}

</p>
<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("Element.replaceWith()")}}</li>
</ul>
