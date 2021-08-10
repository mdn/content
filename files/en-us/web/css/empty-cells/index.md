---
title: empty-cells
slug: Web/CSS/empty-cells
tags:
  - CSS
  - CSS Property
  - CSS Tables
  - Reference
  - 'recipe:css-property'
browser-compat: css.properties.empty-cells
---
<div>{{CSSRef}}</div>

<p>The <strong><code>empty-cells</code></strong> CSS property sets whether borders and backgrounds appear around {{htmlelement("table")}} cells that have no visible content.</p>

<div>{{EmbedInteractiveExample("pages/css/empty-cells.html")}}</div>

<p>This property has an effect only when the {{cssxref("border-collapse")}} property is <code>separate</code>.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush:css no-line-numbers">/* Keyword values */
empty-cells: show;
empty-cells: hide;

/* Global values */
empty-cells: inherit;
empty-cells: initial;
empty-cells: unset;
</pre>

<p>The <code>empty-cells</code> property is specified as one of the keyword values listed below.</p>

<h3 id="Values">Values</h3>

<dl>
 <dt><code>show</code></dt>
 <dd>Borders and backgrounds are drawn like in normal cells.</dd>
 <dt><code>hide</code></dt>
 <dd>No borders or backgrounds are drawn.</dd>
</dl>

<h2 id="Formal_definition">Formal definition</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax">Formal syntax</h2>

{{csssyntax}}

<h2 id="Examples">Example</h2>

<h3 id="Showing_and_hiding_empty_table_cells">Showing and hiding empty table cells</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;table class="table_1"&gt;
  &lt;tr&gt;
    &lt;td&gt;Moe&lt;/td&gt;
    &lt;td&gt;Larry&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Curly&lt;/td&gt;
    &lt;td&gt;&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;
&lt;br&gt;
&lt;table class="table_2"&gt;
  &lt;tr&gt;
    &lt;td&gt;Moe&lt;/td&gt;
    &lt;td&gt;Larry&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Curly&lt;/td&gt;
    &lt;td&gt;&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;
</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">.table_1 {
  empty-cells: show;
}

.table_2 {
  empty-cells: hide;
}

td,
th {
  border: 1px solid gray;
  padding: 0.5rem;
}</pre>

<h4 id="Result">Result</h4>

<p>{{ EmbedLiveSample('Showing_and_hiding_empty_table_cells', '100%', '200') }}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{cssxref("border-collapse")}}</li>
 <li><a href="/en-US/docs/Learn/CSS/Building_blocks/Styling_tables">Styling tables</a></li>
</ul>
