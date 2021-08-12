---
title: polygon()
slug: Web/CSS/basic-shape/polygon()
tags:
  - CSS
  - CSS Data Type
  - CSS Shapes
  - polygon
  - CSS Functions
  - Data Type
  - Reference
browser-compat: css.types.basic-shape.polygon
---
<div>{{CSSRef}}</div>

<p>The <strong><code>polygon()</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> function is one of the {{cssxref("&lt;basic-shape&gt;")}} <a href="/en-US/docs/Web/CSS/CSS_Types">data types</a>.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: css">clip-path: polygon(50% 2.4%, 34.5% 33.8%, 0% 38.8%, 25% 63.1%, 19.1% 97.6%);</pre>

<h3>Values</h3>

<dl>
  <dt><code>&lt;fill-rule&gt;</code></dt>
  <dd>An optional value of <code>nonzero</code> (the default when omitted) or <code>evenodd</code>, which specifies the <a href="/en-US/docs/Web/SVG/Attribute/fill-rule">filling rule</a>.</dd>
  <dt><code><code>[&lt;length-percentage&gt;&lt;length-percentage&gt;]#</code></code></dt>
  <dd>Three or more pairs of values (a polygon must at least draw a triangle). These values are co-ordinates drawn with reference to the reference box.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3>Basic polygon() example</h3>

<p>In this example a shape is created for text to follow using the <code>polygon()</code>, you can change any of the values to see how the shape is changed.</p>

<p>{{EmbedGHLiveSample("css-examples/shapes/basic-shape/polygon.html", '100%', 800)}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>Properties that use this data type: {{cssxref("clip-path")}}, {{cssxref("shape-outside")}}</li>
 <li><a href="/en-US/docs/Web/CSS/CSS_Shapes/Basic_Shapes">Guide to Basic Shapes</a></li>
</ul>
