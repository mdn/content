---
title: ':root'
slug: Web/CSS/:root
tags:
  - CSS
  - Element
  - Layout
  - Node
  - Pseudo-class
  - Reference
  - Selector
  - Web
  - root
browser-compat: css.selectors.root
---
<div>{{CSSRef}}</div>

<p>The <strong><code>:root</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> <a href="/en-US/docs/Web/CSS/Pseudo-classes"> pseudo-class</a> matches the root element of a tree representing the document. In HTML, <code>:root</code> represents the {{HTMLElement("html")}} element and is identical to the selector <code>html</code>, except that its <a href="/en-US/docs/Web/CSS/Specificity">specificity</a> is higher.</p>

<pre class="brush: css no-line-numbers">/* Selects the root element of the document:
   &lt;html&gt; in the case of HTML */
:root {
  background: yellow;
}</pre>

<h2 id="Syntax">Syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="Declaring_global_CSS_variables">Declaring global CSS variables</h3>

<p><code>:root</code> can be useful for declaring global <a href="/en-US/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>:</p>

<pre class="brush: css">:root {
  --main-color: hotpink;
  --pane-padding: 5px 42px;
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{HTMLElement("html")}}</li>
 <li>{{domxref("Document.rootElement")}}</li>
 <li>{{domxref("Node.getRootNode()")}}</li>
 <li>{{domxref("Element.shadowRoot")}}</li>
 <li>{{domxref("ShadowRoot")}}</li>
</ul>
