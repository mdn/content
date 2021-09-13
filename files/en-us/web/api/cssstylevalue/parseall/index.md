---
title: CSSStyleValue.parseAll()
slug: Web/API/CSSStyleValue/parseAll
tags:
- API
- CSS Typed Object Model API
- CSSStyleValue
- Experimental
- Houdini
- Method
- Reference
- parseAll()
browser-compat: api.CSSStyleValue.parseAll
---
<p>{{APIRef("CSS Typed Object Model API")}}{{SeeCompatTable}}</p>

<p>The <strong><code>parseAll()</code></strong> method of the {{domxref("CSSStyleValue")}}
	interface sets all occurrences of a specific CSS property to the specified value and
	returns an array of {{domxref('CSSStyleValue')}} objects, each containing one of the
	supplied values.</p>

<h2 id="Syntax">Syntax</h2>

<pre
	class="brush: js">CSSStyleValue.parseAll(<em>property</em>, <em>value</em>)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
	<dt>property</dt>
	<dd>A CSS property to set.</dd>
	<dt>cssText</dt>
	<dd>A comma-separated string containing one or more values that apply to the provided
		property.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>An array of <code>CSSStyleValue</code> objects, each containing one of the supplied
	values.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
	<li>{{domxref("CSSStyleValue.parse()")}}</li>
	<li><a href="/en-US/docs/Web/API/CSS_Typed_OM_API/Guide">Using the CSS Typed OM</a>
	</li>
	<li><a href="/en-US/docs/Web/API/CSS_Typed_OM_API">CSS Typed Object Model API</a></li>
</ul>
