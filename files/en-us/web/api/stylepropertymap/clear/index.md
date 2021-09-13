---
title: StylePropertyMap.clear()
slug: Web/API/StylePropertyMap/clear
tags:
- API
- CSS Typed Object Model API
- Houdini
- Method
- Reference
- StylePropertyMap
- clear()
browser-compat: api.StylePropertyMap.clear
---
<p>{{APIRef("CSS Typed Object Model API")}}{{SeeCompatTable}}</p>

<p>The <strong><code>clear()</code></strong> method of the {{domxref("StylePropertyMap")}}
  interface removes all declarations in the <code>StylePropertyMap</code>.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">StylePropertMap.clear()</pre>

<h3 id="Parameters">Parameters</h3>

<p>None.</p>

<h3 id="Return_value">Return value</h3>

<p>{{jsxref('undefined')}}</p>

<h2 id="Example">Example</h2>

<p>The following example removes all styles within the elements <a
    href="/en-US/docs/Web/HTML/Global_attributes/style">style attribute</a>.</p>

<pre class="brush: js">// get the button element
const buttonEl = document.querySelector('.example');

// remove all styles from the style attribute
buttonEl.attributeStyleMap.clear();
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
