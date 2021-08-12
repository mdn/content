---
title: circle()
slug: Web/CSS/basic-shape/circle()
tags:
  - CSS
  - CSS Data Type
  - CSS Shapes
  - circle
  - CSS Functions
  - Data Type
  - Reference
browser-compat: css.types.basic-shape.circle
---
<div>{{CSSRef}}</div>

<p>The <strong><code>circle()</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> function is one of the {{cssxref("&lt;basic-shape&gt;")}} <a href="/en-US/docs/Web/CSS/CSS_Types">data types</a>.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: css">shape-outside: circle(50%);
clip-path: circle(6rem at 12rem 8rem);
</pre>

<h3>Values</h3>

<dl>
  <dt><code>&lt;shape-radius&gt;</code></dt>
  <dd><p>This may be a {{cssxref("length")}}, or a {{cssxref("percentage")}} or values <code>closest-side</code> and <code>farthest-side</code>.</p>
    <dl>
      <dt><code>closest-side</code></dt>
      <dd>Uses the length from the center of the shape to the closest side of the reference box. For circles, this is the closest side in any dimension.</dd>
      <dt><code>farthest-side</code></dt>
      <dd>Uses the length from the center of the shape to the farthest side of the reference box. For circles, this is the closest side in any dimension.</dd>
    </dl>
  </dd>
  <dt><code>&lt;position&gt;</code></dt>
  <dd>Moves the center of the circle. May be a {{cssxref("length")}}, or a {{cssxref("percentage")}}, or a values such as <code>left</code>.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Basic_circle">Basic circle</h3>

<p>In the example below, the {{cssxref("shape-outside")}} property has a value of <code>circle(50%)</code>, which defines a circle on a floated element for the text to flow round.</p>

<p>{{EmbedGHLiveSample("css-examples/shapes/overview/circle.html", '100%', 720)}}</p>


<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>Properties that use this data type: {{cssxref("clip-path")}}, {{cssxref("shape-outside")}}</li>
 <li><a href="/en-US/docs/Web/CSS/CSS_Shapes/Basic_Shapes">Guide to Basic Shapes</a></li>
</ul>
