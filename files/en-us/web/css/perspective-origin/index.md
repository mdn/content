---
title: perspective-origin
slug: Web/CSS/perspective-origin
tags:
  - 3D
  - CSS
  - CSS Property
  - CSS Transforms
  - Graphics
  - Property
  - Reference
  - Transforms
  - perspective
  - perspective-origin
  - 'recipe:css-property'
browser-compat: css.properties.perspective-origin
---
<div>{{CSSRef}}</div>

<p>The <strong><code>perspective-origin</code></strong> <a href="/en-US/docs/CSS">CSS</a> property determines the position at which the viewer is looking. It is used as the <em>vanishing point</em> by the {{cssxref("perspective")}} property.</p>

<div>{{EmbedInteractiveExample("pages/css/perspective-origin.html")}}</div>

<p>The <strong><code>perspective-origin</code></strong> and {{cssxref('perspective')}} properties are attached to the parent of a child transformed in 3-dimensional space, unlike the <code><a href="/en-US/docs/Web/CSS/transform-function/perspective">perspective()</a></code> transform function which is placed on the element being transformed.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush:css no-line-numbers">/* One-value syntax */
perspective-origin: x-position;

/* Two-value syntax */
perspective-origin: x-position y-position;

/* When both x-position and y-position are keywords,
   the following is also valid */
perspective-origin: y-position x-position;

/* Global values */
perspective-origin: inherit;
perspective-origin: initial;
perspective-origin: revert;
perspective-origin: unset;
</pre>

<h3 id="Values">Values</h3>

<dl>
 <dt><em>x-position</em></dt>
 <dd>Indicates the position of the abscissa of the <em>vanishing point</em>. It can have one of the following values:
 <ul>
  <li>{{cssxref("&lt;length-percentage&gt;")}} indicating the position as an absolute length value or relative to the width of the element. The value may be negative.</li>
  <li><code>left</code>, a keyword being a shortcut for the <code>0</code> length value.</li>
  <li><code>center</code>, a keyword being a shortcut for the <code>50%</code> percentage value.</li>
  <li><code>right</code>, a keyword being a shortcut for the <code>100%</code> percentage value.</li>
 </ul>
 </dd>
 <dt><em>y-position</em></dt>
 <dd>Indicates the position of the ordinate of the <em>vanishing point</em>. It can have one of the following values:
 <ul>
  <li>{{cssxref("&lt;length-percentage&gt;")}} indicating the position as an absolute length value or relative to the height of the element. The value may be negative.</li>
  <li><code>top</code>, a keyword being a shortcut for the <code>0</code> length value.</li>
  <li><code>center</code>, a keyword being a shortcut for the <code>50%</code> percentage value.</li>
  <li><code>bottom</code>, a keyword being a shortcut for the <code>100%</code> percentage value.</li>
 </ul>
 </dd>
</dl>

<h2 id="Formal_definition">Formal definition</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax">Formal syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="Changing_the_perspective_origin">Changing the perspective origin</h3>

<p>This example shows cubes with popular <code>perspective-origin</code> values.</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;section&gt;

&lt;figure&gt;
  &lt;figcaption&gt;&lt;code&gt;perspective-origin: top left;&lt;/code&gt;&lt;/figcaption&gt;
    &lt;div class="container"&gt;
     &lt;div class="cube potl"&gt;
      &lt;div class="face front"&gt;1&lt;/div&gt;
      &lt;div class="face back"&gt;2&lt;/div&gt;
      &lt;div class="face right"&gt;3&lt;/div&gt;
      &lt;div class="face left"&gt;4&lt;/div&gt;
      &lt;div class="face top"&gt;5&lt;/div&gt;
      &lt;div class="face bottom"&gt;6&lt;/div&gt;
     &lt;/div&gt;
    &lt;/div&gt;
&lt;/figure&gt;

&lt;figure&gt;
  &lt;figcaption&gt;&lt;code&gt;perspective-origin: top;&lt;/code&gt;&lt;/figcaption&gt;
   &lt;div class="container"&gt;
    &lt;div class="cube potm"&gt;
      &lt;div class="face front"&gt;1&lt;/div&gt;
      &lt;div class="face back"&gt;2&lt;/div&gt;
      &lt;div class="face right"&gt;3&lt;/div&gt;
      &lt;div class="face left"&gt;4&lt;/div&gt;
      &lt;div class="face top"&gt;5&lt;/div&gt;
      &lt;div class="face bottom"&gt;6&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/figure&gt;

&lt;figure&gt;
  &lt;figcaption&gt;&lt;code&gt;perspective-origin: top right;&lt;/code&gt;&lt;/figcaption&gt;
  &lt;div class="container"&gt;
    &lt;div class="cube potr"&gt;
      &lt;div class="face front"&gt;1&lt;/div&gt;
      &lt;div class="face back"&gt;2&lt;/div&gt;
      &lt;div class="face right"&gt;3&lt;/div&gt;
      &lt;div class="face left"&gt;4&lt;/div&gt;
      &lt;div class="face top"&gt;5&lt;/div&gt;
      &lt;div class="face bottom"&gt;6&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/figure&gt;

&lt;figure&gt;
  &lt;figcaption&gt;&lt;code&gt;perspective-origin: left;&lt;/code&gt;&lt;/figcaption&gt;
  &lt;div class="container"&gt;
    &lt;div class="cube poml"&gt;
      &lt;div class="face front"&gt;1&lt;/div&gt;
      &lt;div class="face back"&gt;2&lt;/div&gt;
      &lt;div class="face right"&gt;3&lt;/div&gt;
      &lt;div class="face left"&gt;4&lt;/div&gt;
      &lt;div class="face top"&gt;5&lt;/div&gt;
      &lt;div class="face bottom"&gt;6&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/figure&gt;

&lt;figure&gt;
  &lt;figcaption&gt;&lt;code&gt;perspective-origin: 50% 50%;&lt;/code&gt;&lt;/figcaption&gt;
  &lt;div class="container"&gt;
    &lt;div class="cube pomm"&gt;
      &lt;div class="face front"&gt;1&lt;/div&gt;
      &lt;div class="face back"&gt;2&lt;/div&gt;
      &lt;div class="face right"&gt;3&lt;/div&gt;
      &lt;div class="face left"&gt;4&lt;/div&gt;
      &lt;div class="face top"&gt;5&lt;/div&gt;
      &lt;div class="face bottom"&gt;6&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/figure&gt;

&lt;figure&gt;
  &lt;figcaption&gt;&lt;code&gt;perspective-origin: right;&lt;/code&gt;&lt;/figcaption&gt;
  &lt;div class="container"&gt;
    &lt;div class="cube pomr"&gt;
      &lt;div class="face front"&gt;1&lt;/div&gt;
      &lt;div class="face back"&gt;2&lt;/div&gt;
      &lt;div class="face right"&gt;3&lt;/div&gt;
      &lt;div class="face left"&gt;4&lt;/div&gt;
      &lt;div class="face top"&gt;5&lt;/div&gt;
      &lt;div class="face bottom"&gt;6&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/figure&gt;

&lt;figure&gt;
  &lt;figcaption&gt;&lt;code&gt;perspective-origin: bottom left;&lt;/code&gt;&lt;/figcaption&gt;
  &lt;div class="container"&gt;
    &lt;div class="cube pobl"&gt;
      &lt;div class="face front"&gt;1&lt;/div&gt;
      &lt;div class="face back"&gt;2&lt;/div&gt;
      &lt;div class="face right"&gt;3&lt;/div&gt;
      &lt;div class="face left"&gt;4&lt;/div&gt;
      &lt;div class="face top"&gt;5&lt;/div&gt;
      &lt;div class="face bottom"&gt;6&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/figure&gt;

&lt;figure&gt;
  &lt;figcaption&gt;&lt;code&gt;perspective-origin: bottom;&lt;/code&gt;&lt;/figcaption&gt;
  &lt;div class="container"&gt;
    &lt;div class="cube pobm"&gt;
      &lt;div class="face front"&gt;1&lt;/div&gt;
      &lt;div class="face back"&gt;2&lt;/div&gt;
      &lt;div class="face right"&gt;3&lt;/div&gt;
      &lt;div class="face left"&gt;4&lt;/div&gt;
      &lt;div class="face top"&gt;5&lt;/div&gt;
      &lt;div class="face bottom"&gt;6&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/figure&gt;

&lt;figure&gt;
  &lt;figcaption&gt;&lt;code&gt;perspective-origin: bottom right;&lt;/code&gt;&lt;/figcaption&gt;
  &lt;div class="container"&gt;
    &lt;div class="cube pobr"&gt;
      &lt;div class="face front"&gt;1&lt;/div&gt;
      &lt;div class="face back"&gt;2&lt;/div&gt;
      &lt;div class="face right"&gt;3&lt;/div&gt;
      &lt;div class="face left"&gt;4&lt;/div&gt;
      &lt;div class="face top"&gt;5&lt;/div&gt;
      &lt;div class="face bottom"&gt;6&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/figure&gt;

&lt;figure&gt;
  &lt;figcaption&gt;&lt;code&gt;perspective-origin: -200% -200%;&lt;/code&gt;&lt;/figcaption&gt;
  &lt;div class="container"&gt;
    &lt;div class="cube po200200neg"&gt;
      &lt;div class="face front"&gt;1&lt;/div&gt;
      &lt;div class="face back"&gt;2&lt;/div&gt;
      &lt;div class="face right"&gt;3&lt;/div&gt;
      &lt;div class="face left"&gt;4&lt;/div&gt;
      &lt;div class="face top"&gt;5&lt;/div&gt;
      &lt;div class="face bottom"&gt;6&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/figure&gt;

&lt;figure&gt;
  &lt;figcaption&gt;&lt;code&gt;perspective-origin: 200% 200%;&lt;/code&gt;&lt;/figcaption&gt;
  &lt;div class="container"&gt;
    &lt;div class="cube po200200pos"&gt;
      &lt;div class="face front"&gt;1&lt;/div&gt;
      &lt;div class="face back"&gt;2&lt;/div&gt;
      &lt;div class="face right"&gt;3&lt;/div&gt;
      &lt;div class="face left"&gt;4&lt;/div&gt;
      &lt;div class="face top"&gt;5&lt;/div&gt;
      &lt;div class="face bottom"&gt;6&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/figure&gt;

&lt;figure&gt;
  &lt;figcaption&gt;&lt;code&gt;perspective-origin: 200% -200%;&lt;/code&gt;&lt;/figcaption&gt;
  &lt;div class="container"&gt;
    &lt;div class="cube po200200"&gt;
      &lt;div class="face front"&gt;1&lt;/div&gt;
      &lt;div class="face back"&gt;2&lt;/div&gt;
      &lt;div class="face right"&gt;3&lt;/div&gt;
      &lt;div class="face left"&gt;4&lt;/div&gt;
      &lt;div class="face top"&gt;5&lt;/div&gt;
      &lt;div class="face bottom"&gt;6&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/figure&gt;

&lt;/section&gt;
</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">/* perspective-origin values (unique per example) */
.potl {
  perspective-origin: top left;
}
.potm {
  perspective-origin: top;
}
.potr {
  perspective-origin: top right;
}
.poml {
  perspective-origin: left;
}
.pomm {
  perspective-origin: 50% 50%;
}
.pomr {
  perspective-origin: right;
}
.pobl {
  perspective-origin: bottom left;
}
.pobm {
  perspective-origin: bottom;
}
.pobr {
  perspective-origin: bottom right;
}
.po200200neg {
  perspective-origin: -200% -200%;
}
.po200200pos {
  perspective-origin: 200% 200%;
}
.po200200 {
  perspective-origin: 200% -200%;
}

/* Define the container div, the cube div, and a generic face */
.container {
  width: 100px;
  height: 100px;
  margin: 24px;
  border: none;
}

.cube {
  width: 100%;
  height: 100%;
  backface-visibility: visible;
  perspective: 300px;
  transform-style: preserve-3d;
}

.face {
  display: block;
  position: absolute;
  width: 100px;
  height: 100px;
  border: none;
  line-height: 100px;
  font-family: sans-serif;
  font-size: 60px;
  color: white;
  text-align: center;
}

/* Define each face based on direction */
.front {
  background: rgba(0, 0, 0, 0.3);
  transform: translateZ(50px);
}
.back {
  background: rgba(0, 255, 0, 1);
  color: black;
  transform: rotateY(180deg) translateZ(50px);
}
.right {
  background: rgba(196, 0, 0, 0.7);
  transform: rotateY(90deg) translateZ(50px);
}
.left {
  background: rgba(0, 0, 196, 0.7);
  transform: rotateY(-90deg) translateZ(50px);
}
.top {
  background: rgba(196, 196, 0, 0.7);
  transform: rotateX(90deg) translateZ(50px);
}
.bottom {
  background: rgba(196, 0, 196, 0.7);
  transform: rotateX(-90deg) translateZ(50px);
}

/* Make the layout a little nicer */
section {
  background-color: #EEE;
  padding: 10px;
  font-family: sans-serif;
  text-align: left;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}</pre>

<h4 id="Result">Result</h4>

<p>{{EmbedLiveSample('Changing_the_perspective_origin', '100%', 700)}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms">Using CSS Transforms</a></li>
 <li>{{cssxref('transform-style')}}</li>
 <li>{{cssxref('transform-function')}}</li>
 <li>{{cssxref('perspective')}}</li>
 <li><code><a href="/en-US/docs/Web/CSS/transform-function/perspective">transform: perspective()</a></code> function</li>
</ul>
