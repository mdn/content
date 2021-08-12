---
title: shape-image-threshold
slug: Web/CSS/shape-image-threshold
tags:
  - Boundaries
  - CSS
  - CSS Property
  - CSS Shapes
  - Float Area
  - Opacity
  - Property
  - Reference
  - Shape
  - 'recipe:css-property'
  - shape-image-threshold
browser-compat: css.properties.shape-image-threshold
---
<div>{{CSSRef}}</div>

<p>The <strong><code>shape-image-threshold</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> property sets the alpha channel threshold used to extract the shape using an image as the value for {{cssxref("shape-outside")}}.</p>

<div>{{EmbedInteractiveExample("pages/css/shape-image-threshold.html")}}</div>


<p>Any pixels whose alpha component's value is greater than the threshold are considered to be part of the shape for the purposes of determining its boundaries. For example, a value of <code>0.5</code> means that the shape will enclose all the pixels that are more than 50% opaque.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush:css no-line-numbers">/* &lt;number&gt; value */
shape-image-threshold: 0.7;

/* Global values */
shape-image-threshold: inherit;
shape-image-threshold: initial;
shape-image-threshold: revert;
shape-image-threshold: unset;
</pre>

<h3 id="Values">Values</h3>

<dl>
 <dt>{{cssxref("&lt;alpha-value&gt;")}}</dt>
 <dd>Sets the threshold used for extracting a shape from an image. The shape is defined by the pixels whose alpha value is greater than the threshold. Values outside the range 0.0 (fully transparent) to 1.0 (fully opaque) are clamped to this range.</dd>
</dl>

<h2 id="Formal_definition">Formal definition</h2>

<p>{{CSSInfo}}</p>

<h2 id="Formal_syntax">Formal syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="Aligning_text_to_a_gradient">Aligning text to a gradient</h3>

<p>This example creates a {{HTMLElement("div")}} block with a gradient background image. The gradient is established as a CSS shape using <code>shape-outside</code>, so that pixels within the gradient which are at least 20% opaque (that is, those pixels with an alpha component greater than 0.2) are considered part of the shape.</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;div id="gradient-shape"&gt;&lt;/div&gt;

&lt;p&gt;
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel at commodi
  voluptates enim, distinctio officia. Saepe optio accusamus doloribus sint
  facilis itaque ab nulla, dolor molestiae assumenda cum sit placeat
  adipisci, libero quae nihil porro debitis laboriosam inventore animi
  impedit nostrum nesciunt quisquam expedita! Dolores consectetur iure atque
  a mollitia dicta repudiandae illum exercitationem aliquam repellendus
  ipsum porro modi, id nemo eligendi, architecto ratione quibusdam iusto
  nisi soluta? Totam inventore ea eum sed velit et eligendi suscipit
  accusamus iusto dolore, at provident eius alias maxime pariatur non
  deleniti ipsum sequi rem eveniet laboriosam magni expedita?
&lt;/p&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css; highlight[9]">#gradient-shape {
  width: 150px;
  height: 150px;
  float: left;
  background-image: linear-gradient(30deg, black, transparent 80%,
      transparent);
  shape-outside: linear-gradient(30deg, black, transparent 80%,
      transparent);
  shape-image-threshold: 0.2;
}</pre>

<p>The shape is established here using {{cssxref("background-image")}} with a linear gradient rather than an image file. The same gradient is also used as the image from which the shape is derived for establishing the float area, using the {{cssxref("shape-outside")}} property.</p>

<p>The 20% opacity threshold for treating gradient pixels as part of the shape is then established using <code>shape-image-threshold</code> with a value of <code>0.2</code>.</p>

<h4 id="Result">Result</h4>

<p>{{EmbedLiveSample('Aligning_text_to_a_gradient', 600, 230)}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/CSS/CSS_Shapes">CSS Shapes</a></li>
 <li><a href="/en-US/docs/Web/CSS/CSS_Shapes/Overview_of_CSS_Shapes">Overview of CSS Shapes</a></li>
 <li>{{cssxref("&lt;basic-shape&gt;")}}</li>
 <li>{{cssxref("shape-outside")}}</li>
 <li>{{cssxref("shape-margin")}}</li>
</ul>
