---
title: CSSStyleDeclaration.getPropertyPriority()
slug: Web/API/CSSStyleDeclaration/getPropertyPriority
tags:
- API
- CSSOM
- Method
- Reference
browser-compat: api.CSSStyleDeclaration.getPropertyPriority
---
<p>{{ APIRef("CSSOM") }}</p>

<p>The <strong>CSSStyleDeclaration.getPropertyPriority()</strong> method interface returns
  a {{domxref('DOMString')}} that provides all explicitly set priorities on the CSS
  property.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">var <em>priority</em> = <em>style</em>.getPropertyPriority(<em>property</em>);</pre>

<h3 id="Parameters">Parameters</h3>

<ul>
  <li><em><code>property</code></em> is a {{domxref('DOMString')}} representing the
    property name to be checked.</li>
</ul>

<h3 id="Return_value">Return value</h3>

<ul>
  <li><code><em>priority</em></code> is a {{domxref('DOMString')}} that represents the
    priority (e.g. <code>"important"</code>) if one exists. If none exists, returns the
    empty string.</li>
</ul>

<h2 id="Example">Example</h2>

<p>The following JavaScript code checks whether <code>margin</code> is marked as important
  in a CSS selector rule:</p>

<pre class="brush: js">var declaration = document.styleSheets[0].cssRules[0].style;
var isImportant = declaration.getPropertyPriority('margin') === 'important';
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
