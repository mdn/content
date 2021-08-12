---
title: column-gap (grid-column-gap)
slug: Web/CSS/column-gap
tags:
  - CSS
  - CSS Flexible Boxes
  - CSS Grid
  - CSS Multi-column Layout
  - CSS Property
  - Reference
  - column-gap
  - 'recipe:css-property'
browser-compat: css.properties.column-gap
---
<div>{{CSSRef}}</div>

<p>The <strong><code>column-gap</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> property sets the size of the gap ({{glossary("Gutters","gutter")}}) between an element's columns.</p>

<div>{{EmbedInteractiveExample("pages/css/column-gap.html")}}</div>


<p>Initially a part of <a href="/en-US/docs/Web/CSS/CSS_Columns">Multi-column Layout</a>, the definition of <code>column-gap</code> has been broadened to include multiple layout methods. Now specified in <a href="/en-US/docs/Web/CSS/CSS_Box_Alignment">Box Alignment</a>, it may be used in Multi-column, Flexible Box, and Grid layouts.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush:css; no-line-numbers">/* Keyword value */
column-gap: normal;

/* &lt;length&gt; values */
column-gap: 3px;
column-gap: 2.5em;

/* &lt;percentage&gt; value */
column-gap: 3%;

/* Global values */
column-gap: inherit;
column-gap: initial;
column-gap: revert;
column-gap: unset;
</pre>

<p>The <code>column-gap</code> property is specified as one of the values listed below.</p>

<h3 id="Values">Values</h3>

<dl>
 <dt><code>normal</code></dt>
 <dd>The browser's default spacing is used between columns. For multi-column layout this is specified as <code>1em</code>. For all other layout types it is 0.</dd>
 <dt>{{CSSxRef("&lt;length&gt;")}}</dt>
 <dd>The size of the gap between columns, defined as a {{CSSxRef("&lt;length&gt;")}}. The {{CSSxRef("&lt;length&gt;")}} property's value must be non-negative.</dd>
 <dt>{{CSSxRef("&lt;percentage&gt;")}}</dt>
 <dd>The size of the gap between columns, defined as a {{CSSxRef("&lt;percentage&gt;")}}. The {{CSSxRef("&lt;percentage&gt;")}} property's value must be non-negative.</dd>
</dl>

<h2 id="Formal_definition">Formal definition</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax">Formal syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="Flex_layout">Flex layout</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;div id="flexbox"&gt;
  &lt;div&gt;&lt;/div&gt;
  &lt;div&gt;&lt;/div&gt;
  &lt;div&gt;&lt;/div&gt;
&lt;/div&gt;
</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css; highlight[4]">#flexbox {
  display: flex;
  height: 100px;
  column-gap: 20px;
}

#flexbox &gt; div {
  border: 1px solid green;
  background-color: lime;
  flex: auto;
}
</pre>

<h4 id="Result">Result</h4>

<p>{{EmbedLiveSample("Flex_layout", "auto", "120px")}}</p>

<h3 id="Grid_layout">Grid layout</h3>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html">&lt;div id="grid"&gt;
  &lt;div&gt;&lt;/div&gt;
  &lt;div&gt;&lt;/div&gt;
  &lt;div&gt;&lt;/div&gt;
&lt;/div&gt;</pre>

<h4 id="CSS_2">CSS</h4>

<pre class="brush: css; highlight[6]">#grid {
  display: grid;
  height: 100px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px;
  column-gap: 20px;
}

#grid &gt; div {
  border: 1px solid green;
  background-color: lime;
}
</pre>

<h4 id="Result_2">Result</h4>

<p>{{EmbedLiveSample("Grid_layout", "auto", "120px")}}</p>

<h3 id="Multi-column_layout">Multi-column layout</h3>

<h4 id="HTML_3">HTML</h4>

<pre class="brush: html">&lt;p class="content-box"&gt;
  This is some multi-column text with a 40px column
  gap created with the CSS `column-gap` property.
  Don't you think that's fun and exciting? I sure do!
&lt;/p&gt;
</pre>

<h4 id="CSS_3">CSS</h4>

<pre class="brush:css">.content-box {
  column-count: 3;
  column-gap: 40px;
}
</pre>

<h4 id="Result_3">Result</h4>

<p>{{EmbedLiveSample("Multi-column_layout", "auto", "120px")}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>Related CSS properties: {{CSSxRef("row-gap")}}, {{CSSxRef("gap")}}</li>
 <li>Grid Layout Guide: <em><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#Gutters">Basic concepts of grid layout - Gutters</a></em></li>
 <li>Multi-column Layout Guide: <em><a href="/en-US/docs/Web/CSS/CSS_Columns/Styling_Columns">Styling Columns</a></em></li>
</ul>
