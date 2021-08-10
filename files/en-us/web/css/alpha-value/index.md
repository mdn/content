---
title: <alpha-value>
slug: Web/CSS/alpha-value
tags:
  - Alpha
  - Alpha-value
  - CSS
  - CSS Data Type
  - CSS Reference
  - Data Type
  - Example
  - Reference
  - color
---
<div>{{CSSRef}}</div>

<p>The <strong><code>&lt;alpha-value&gt;</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> <a href="/en-US/docs/Web/CSS/CSS_Types">data type</a> represents a value that can be either a {{cssxref("&lt;number&gt;")}} or a {{cssxref("&lt;percentage&gt;")}}, specifying the <strong>{{Glossary("alpha", "alpha channel")}}</strong> or <strong>transparency</strong> of a color.</p>

<h2 id="Syntax">Syntax</h2>

<p>The value of an <code>&lt;alpha-value&gt;</code> is given as either a <code><a href="/en-US/docs/Web/CSS/number">&lt;number&gt;</a></code> or a <code><a href="/en-US/docs/Web/CSS/percentage">&lt;percentage&gt;</a></code>.</p>

<p>If given as a number, the useful range is 0 (fully transparent) to 1.0 (fully opaque), with decimal values in between; that is, 0.5 indicates that half of the foreground color is used and half of the background color is used. Values outside the range of 0 to 1 are permitted, but are <a href="https://en.wikipedia.org/wiki/Clamping_(graphics)">clamped</a> to like within the range 0 to 1.</p>

<p>If the alpha value is given as a percentage, 0% corresponds to fully transparent while 100% indicates fully opaque.</p>

<h2 id="Interpolation">Interpolation</h2>

<p>When animated, values of the <code>&lt;alpha-value&gt;</code> CSS data type are interpolated as real, floating-point numbers. The speed of the interpolation is determined by the <a href="/en-US/docs/Web/CSS/single-transition-timing-function">timing function</a> associated with the animation.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Setting_text_color_opacity">Setting text color opacity</h3>

<p>Here an alpha value is used to set partially transparent text:</p>

<pre class="brush: css no-line-numbers language-css">/* &lt;rgba()&gt; */
color: rgba(34, 12, 64, 0.6);
color: rgba(34.0 12 64 / 60%);
</pre>

<h3 id="Setting_shape_image_threshold">Setting shape image threshold</h3>

<p>Here an alpha value is used to determine which parts of an image are considered part of a shape:</p>

<pre class="brush: css no-line-numbers language-css">/* shape-image-threshold */
shape-image-threshold: 70%;
shape-image-threshold: 0.7;</pre>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('CSS4 Colors', '#type-def-alpha-value', '&lt;alpha-value&gt;')}}</td>
   <td>{{Spec2('CSS4 Colors')}}</td>
   <td>No significant change.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Colors', '#alphavaluedt', '&lt;alpha-value&gt;')}}</td>
   <td>{{Spec2('CSS3 Colors')}}</td>
   <td>Introduces <code>&lt;alpha-value&gt;</code> along with <code>rgba()</code> and <code>hsla()</code> functional notations.</td>
  </tr>
 </tbody>
</table>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Learn/CSS/Styling_text/Fundamentals">Fundamental text and font styling</a></li>
 <li><a href="/en-US/docs/Web/CSS/CSS_Types">CSS data types</a></li>
 <li><a href="/en-US/docs/Web/CSS/CSS_Color">CSS Color</a></li>
 <li><code><a href="/en-US/docs/Web/CSS/color_value">&lt;color&gt;</a></code></li>
</ul>
