---
title: StylePropertyMap.delete()
slug: Web/API/StylePropertyMap/delete
tags:
- API
- CSS Typed Object Model API
- Houdini
- Method
- Reference
- StylePropertyMap
- delete()
browser-compat: api.StylePropertyMap.delete
---
<p>{{APIRef("CSS Typed Object Model API")}}{{SeeCompatTable}}</p>

<p>The <strong><code>delete()</code></strong> method of the
  {{domxref("StylePropertyMap")}} interface removes the CSS declaration with the given
  property.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">StylePropertyMap.delete(<var>property</var>)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt>property</dt>
  <dd>An identifier indicating the stylistic feature (e.g. font, width, background
    color) to remove.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>{{jsxref('undefined')}}</p>

<h2 id="Example">Example</h2>

<p>The following example removes the {{cssxref('background-image')}} property from the
  element's <a href="/en-US/docs/Web/HTML/Global_attributes/style">style attribute</a>.
</p>

<pre class="brush: js">// get the button element
const buttonEl = document.querySelector('button');

// remove background-image from style attribute
buttonEl.attributeStyleMap.delete('background-image');
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
