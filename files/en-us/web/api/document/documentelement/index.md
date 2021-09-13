---
title: Document.documentElement
slug: Web/API/Document/documentElement
tags:
- API
- DOM
- Document
- Property
- Reference
- root
browser-compat: api.Document.documentElement
---
<div>{{ApiRef("DOM")}}</div>

<p><strong><code>Document.documentElement</code></strong> returns the
  {{domxref("Element")}} that is the root element of the {{domxref("document")}} (for
  example, the {{HTMLElement("html")}} element for HTML documents).</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">const <var>element</var> = document.documentElement
</pre>

<h2 id="Example">Example</h2>

<pre class="brush:js">const rootElement = document.documentElement;
const firstTier = rootElement.childNodes;
// firstTier is a NodeList of the direct children of the root element
// such as &lt;head&gt; and &lt;body&gt;

for (const child of firstTier) {
   // do something with each direct child of the root element
}</pre>

<h2 id="Notes">Notes</h2>

<p>For any non-empty HTML document, <code>documentElement</code> will always be an
  {{HTMLElement("html")}} element. For any non-empty XML document,
  <code>documentElement</code> will always be whatever element is the root element of the
  document.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
