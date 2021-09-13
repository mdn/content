---
title: Document.links
slug: Web/API/Document/links
tags:
  - API
  - Document
  - HTML DOM
  - Property
  - Reference
browser-compat: api.Document.links
---
<p>{{ APIRef("DOM") }}</p>

<p>The <strong><code>links</code></strong> read-only property of the {{domxref("Document")}} interface returns a collection of all {{HTMLElement("area")}} elements and {{HTMLElement("a")}} elements in a document with a value for the <a href="/en-US/docs/Web/API/URLUtils.href">href</a> attribute.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="eval"><em>nodeList</em> = document.links
</pre>

<h3 id="Value">Value</h3>

<p>An {{domxref("HTMLCollection")}}.</p>

<h2 id="Example">Example</h2>

<pre class="brush: js">var links = document.links;
for(var i = 0; i &lt; links.length; i++) {
  var linkHref = document.createTextNode(links[i].href);
  var lineBreak = document.createElement("br");
  document.body.appendChild(linkHref);
  document.body.appendChild(lineBreak);
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
