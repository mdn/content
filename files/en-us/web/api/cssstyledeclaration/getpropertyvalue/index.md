---
title: CSSStyleDeclaration.getPropertyValue()
slug: Web/API/CSSStyleDeclaration/getPropertyValue
tags:
- API
- CSSOM
- Method
- Reference
browser-compat: api.CSSStyleDeclaration.getPropertyValue
---
<p>{{ APIRef("CSSOM") }}</p>

<p>The <strong>CSSStyleDeclaration.getPropertyValue()</strong> method interface returns a
  {{domxref('DOMString')}} containing the value of a specified CSS property.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">var <em>value</em> = <em>style</em>.getPropertyValue(<em>property</em>);</pre>

<h3 id="Parameters">Parameters</h3>

<ul>
  <li><em><code>property</code></em> is a {{domxref('DOMString')}} representing the
    property name (hyphen case) to be checked.</li>
</ul>

<h3 id="Return_value">Return value</h3>

<ul>
  <li><code><em>value</em></code> is a {{domxref('DOMString')}} containing the value of
    the property. If not set, returns the empty string.</li>
</ul>

<h2 id="Example">Example</h2>

<p>The following JavaScript code queries the value of the <code>margin</code> property in
  a CSS selector rule:</p>

<pre class="brush: js">var declaration = document.styleSheets[0].cssRules[0].style;
var value = declaration.getPropertyValue('margin'); // "1px 2px"
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
