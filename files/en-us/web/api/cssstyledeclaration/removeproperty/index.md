---
title: CSSStyleDeclaration.removeProperty()
slug: Web/API/CSSStyleDeclaration/removeProperty
tags:
- API
- CSSOM
- Method
- Reference
browser-compat: api.CSSStyleDeclaration.removeProperty
---
<p>{{ APIRef("CSSOM") }}</p>

<p>The <strong><code>CSSStyleDeclaration.removeProperty()</code></strong> method interface
  removes a property from a CSS style declaration object.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">var <em>oldValue</em> = <em>style</em>.removeProperty(<em>property</em>);</pre>

<h3 id="Parameters">Parameters</h3>

<ul>
  <li><em><code>property</code></em> is a {{domxref('DOMString')}} representing the
    property name to be removed. Note that multi-word property names are hyphenated and
    not camel-cased.</li>
</ul>

<h3 id="Return_value">Return value</h3>

<ul>
  <li><code><em>oldValue</em></code> is a {{domxref('DOMString')}} equal to the value of
    the CSS property before it was removed.</li>
</ul>

<h3 id="Exceptions">Exceptions</h3>

<ul>
  <li>{{domxref('DOMException')}} NO_MODIFICATION_ALLOWED_ERR: if the property or
    declaration block is read only.</li>
</ul>

<h2 id="Example">Example</h2>

<p>The following JavaScript code removes the <code>background-color</code> CSS property
  from a selector rule:</p>

<pre class="brush: js">var declaration = document.styleSheets[0].rules[0].style;
var oldValue = declaration.removeProperty('background-color');
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
