---
title: column-span
slug: Web/CSS/column-span
tags:
  - CSS
  - CSS Multi-column Layout
  - CSS Property
  - Reference
  - 'recipe:css-property'
browser-compat: css.properties.column-span
---
<div>{{CSSRef}}</div>

<p>The <strong><code>column-span</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> property makes it possible for an element to span across all columns when its value is set to <code>all</code>.</p>

<div>{{EmbedInteractiveExample("pages/css/column-span.html")}}</div>

<pre class="brush:css no-line-numbers">/* Keyword values */
column-span: none;
column-span: all;

/* Global values */
column-span: inherit;
column-span: initial;
column-span: revert;
column-span: unset;
</pre>

<p>An element that spans more than one column is called a <strong>spanning element</strong>.</p>

<h2 id="Syntax">Syntax</h2>

<p>The <code>column-span</code> property is specified as one of the keyword values listed below.</p>

<h3 id="Values">Values</h3>

<dl>
 <dt><code>none</code></dt>
 <dd>The element does not span multiple columns.</dd>
 <dt><code>all</code></dt>
 <dd>The element spans across all columns. Content in the normal flow that appears before the element is automatically balanced across all columns before the element appears. The element establishes a new block formatting context.</dd>
</dl>

<h2 id="Formal_definition">Formal definition</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax">Formal syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="Making_a_heading_span_columns">Making a heading span columns</h3>

<p>In this example, the heading is made to span across all the columns of the article.</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;article&gt;
  &lt;h2&gt;Header spanning all of the columns&lt;/h2&gt;
  &lt;p&gt;
     The h2 should span all the columns. The rest
     of the text should be distributed among the columns.
  &lt;/p&gt;
  &lt;p&gt;This is a bunch of text split into three columns using the CSS `columns` property. The text is equally distributed over the columns.&lt;/p&gt;
  &lt;p&gt;This is a bunch of text split into three columns using the CSS `columns` property. The text is equally distributed over the columns.&lt;/p&gt;
  &lt;p&gt;This is a bunch of text split into three columns using the CSS `columns` property. The text is equally distributed over the columns.&lt;/p&gt;
  &lt;p&gt;This is a bunch of text split into three columns using the CSS `columns` property. The text is equally distributed over the columns.&lt;/p&gt;
&lt;/article&gt;
</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush:css">article {
  columns: 3;
}

h2 {
  column-span: all;
}
</pre>

<h4 id="Result">Result</h4>

<p>{{EmbedLiveSample('Making_a_heading_span_columns', 'auto', 260)}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/HTML/Inline_elements">Inline elements</a></li>
 <li>{{domxref("HTMLSpanElement")}} </li>
</ul>
