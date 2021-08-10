---
title: min-content
slug: Web/CSS/min-content
tags:
  - CSS
  - Keyword
  - Reference
  - min-content
  - sizing
browser-compat: css.properties.width.min-content
---
<p>The <code>min-content</code> sizing keyword represents the intrinsic minimum width of the content. For text content this means that the content will take all soft-wrapping opportunities, becoming as small as the longest word.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: css">/* Used as a length */
width: min-content;
inline-size: min-content;
height: min-content;
block-size: min-content;

/* used in grid tracks */
grid-template-columns: 200px 1fr min-content;

/* Global values */
min-content: inherit;
min-content: initial;
min-content: revert;
min-content: unset;</pre>

<h2 id="Examples">Examples</h2>

<h3 id="Using_min-content_for_box_sizing">Using min-content for box sizing</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;div class="item"&gt;Item&lt;/div&gt;
&lt;div class="item"&gt;Item with more text in it.&lt;/div&gt;
</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">.item {
  width: min-content;
  background-color: #8ca0ff;
  padding: 5px;
  margin-bottom: 1em;
}
</pre>

<h4 id="Result">Result</h4>

<p>{{EmbedLiveSample("Using_min-content_for_box_sizing", "100%", 200)}}</p>

<h3 id="Sizing_grid_columns_with_min-content">Sizing grid columns with min-content</h3>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html">&lt;div id="container"&gt;
  &lt;div&gt;Item&lt;/div&gt;
  &lt;div&gt;
    Item with more text in it.
  &lt;/div&gt;
  &lt;div&gt;Flexible item&lt;/div&gt;
&lt;/div&gt;</pre>

<h4 id="CSS_2">CSS</h4>

<pre class="brush: css">#container {
  display: grid;
  grid-template-columns: min-content min-content 1fr;
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

<h4 id="Result_2">Result</h4>

<p>{{EmbedLiveSample("Sizing_grid_columns_with_min-content", "100%", 200)}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<h3 id="Supported_for_width_and_other_sizing_properties">Supported for width (and other sizing properties)</h3>

<p>{{Compat}}</p>
