---
title: minmax()
slug: Web/CSS/minmax()
tags:
  - CSS
  - CSS Function
  - CSS Grid
  - Experimental
  - Function
  - Layout
  - Reference
  - Web
browser-compat: css.properties.grid-template-columns.minmax
---
<div>{{CSSRef}}</div>

<p>The <strong><code>minmax()</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> <a href="/en-US/docs/Web/CSS/CSS_Functions">function</a> defines a size range greater than or equal to <var>min</var> and less than or equal to <var>max</var>. It is used with <a href="/en-US/docs/Web/CSS/CSS_Grid_Layout">CSS Grids</a>.</p>

<div>{{EmbedInteractiveExample("pages/css/function-minmax.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: css no-line-numbers">/* &lt;inflexible-breadth&gt;, &lt;track-breadth&gt; values */
minmax(200px, 1fr)
minmax(400px, 50%)
minmax(30%, 300px)
minmax(100px, max-content)
minmax(min-content, 400px)
minmax(max-content, auto)
minmax(auto, 300px)
minmax(min-content, auto)

/* &lt;fixed-breadth&gt;, &lt;track-breadth&gt; values */
minmax(200px, 1fr)
minmax(30%, 300px)
minmax(400px, 50%)
minmax(50%, min-content)
minmax(300px, max-content)
minmax(200px, auto)

/* &lt;inflexible-breadth&gt;, &lt;fixed-breadth&gt; values */
minmax(400px, 50%)
minmax(30%, 300px)
minmax(min-content, 200px)
minmax(max-content, 200px)
minmax(auto, 300px)
</pre>

<p>A function taking two parameters, <em>min</em> and <em>max</em>.</p>

<p>Each parameter can be a <code>&lt;length&gt;</code>, a <code>&lt;percentage&gt;</code>, a <code>&lt;flex&gt;</code> value, or one of the keyword values <code>max-content</code>, <code>min-content</code>, or <code>auto</code>.</p>

<p>If <var>max</var> &lt; <var>min</var>, then <var>max</var> is ignored and <code>minmax(min,max)</code> is treated as <var>min</var>. As a maximum, a {{cssxref("flex_value","&lt;flex&gt;")}} value sets the flex factor of a grid track; it is invalid as a minimum.</p>

<h3 id="Values">Values</h3>

<dl>
 <dt>{{cssxref("&lt;length&gt;")}}</dt>
 <dd>A non-negative length.</dd>
 <dt>{{cssxref("&lt;percentage&gt;")}}</dt>
 <dd>A non-negative percentage relative to the inline size of the grid container in column grid tracks, and the block size of the grid container in row grid tracks. If the size of the grid container depends on the size of its tracks, then the <code>&lt;percentage&gt;</code> must be treated as <code>auto</code>. The {{glossary("user agent")}} may adjust the intrinsic size contributions of the track to the size of the grid container and increase the final size of the track by the minimum amount that would result in honoring the percentage.</dd>
 <dt>{{cssxref("&lt;flex&gt;")}}</dt>
 <dd>A non-negative dimension with the unit <code>fr</code> specifying the track’s flex factor. Each <code>&lt;flex&gt;</code>-sized track takes a share of the remaining space in proportion to its flex factor.</dd>
 <dt><code>max-content</code></dt>
 <dd>Represents the largest max-content contribution of the grid items occupying the grid track.</dd>
 <dt><code>min-content</code></dt>
 <dd>Represents the largest min-content contribution of the grid items occupying the grid track.</dd>
 <dt><code>auto</code></dt>
 <dd>As a maximum, identical to <code>max-content</code>. As a minimum it represents the largest minimum size (as specified by {{cssxref("min-width")}}/{{cssxref("min-height")}}) of the grid items occupying the grid track.</dd>
</dl>

<h3 id="Formal_syntax">Formal syntax</h3>

{{csssyntax}}

<h3 id="CSS_properties">CSS properties</h3>

<p><code>minmax()</code> function can be used within: </p>

<ul>
 <li><a href="/en-US/docs/Web/CSS/grid-template-columns">grid-template-columns</a></li>
 <li><a href="/en-US/docs/Web/CSS/grid-template-rows">grid-template-rows</a></li>
 <li><a href="/en-US/docs/Web/CSS/grid-auto-columns">grid-auto-columns</a></li>
 <li><a href="/en-US/docs/Web/CSS/grid-auto-rows">grid-auto-rows</a></li>
</ul>

<h2 id="Examples">Examples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css; highlight[3]">#container {
  display: grid;
  grid-template-columns: minmax(min-content, 300px) minmax(200px, 1fr) 150px;
  grid-gap: 5px;
  box-sizing: border-box;
  height: 200px;
  width: 100%;
  background-color: #8cffa0;
  padding: 10px;
}

#container &gt; div {
  background-color: #8ca0ff;
  padding: 5px;
}
</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div id="container"&gt;
  &lt;div&gt;
    Item as wide as the content, but at most 300 pixels.
  &lt;/div&gt;
  &lt;div&gt;
    Item with flexible width but a minimum of 200 pixels.
  &lt;/div&gt;
  &lt;div&gt;
    Inflexible item of 150 pixels width.
  &lt;/div&gt;
&lt;/div&gt;</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample("Examples", "100%", 200)}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>Grid Layout Guide: <em><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#Track_sizing_and_minmax()">Basic concepts of grid layout - track sizing with minmax()</a></em></li>
 <li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid,_Logical_Values_and_Writing_Modes">CSS grids, logical values and writing modes</a></li>
 <li>
  <p>Video tutorial: <em><a href="http://gridbyexample.com/video/series-minmax/">Introducing minmax()</a></em></p>
 </li>
</ul>
