---
title: HTMLTemplateElement.content
slug: Web/API/HTMLTemplateElement/content
tags:
- API
- HTML DOM
- HTMLTemplateElement
- Property
- Reference
- Web Components
browser-compat: api.HTMLTemplateElement.content
---
<div>{{APIRef("Web Components")}}</div>

<p>The <code><strong>HTMLTemplateElement.content</strong></code> property returns a
  <code>&lt;template&gt;</code> element's template contents (a
  {{domxref("DocumentFragment")}}).</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">var <var>documentFragment</var> = <var>templateElement</var>.content</pre>

<h2 id="Example">Example</h2>

<pre class="brush: js">var templateElement = document.querySelector("#foo");
var documentFragment = templateElement.content.cloneNode(true);</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("HTMLTemplateElement")}}</li>
</ul>
