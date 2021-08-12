---
title: ':nth-last-child()'
slug: Web/CSS/:nth-last-child
tags:
  - CSS
  - Layout
  - Pseudo-class
  - Reference
  - Selector
  - Web
browser-compat: css.selectors.nth-last-child
---
<div>{{CSSRef}}</div>

<p>The <strong><code>:nth-last-child()</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> <a href="/en-US/docs/Web/CSS/Pseudo-classes">pseudo-class</a> matches elements based on their position among a group of siblings, counting from the end.</p>

<pre class="brush: css no-line-numbers">/* Selects every fourth element
   among any group of siblings,
   counting backwards from the last one */
:nth-last-child(4n) {
  color: lime;
}</pre>

<div class="note">
<p><strong>Note:</strong> This pseudo-class is essentially the same as {{Cssxref(":nth-child")}}, except it counts items backwards from the <em>end</em>, not forwards from the beginning.</p>
</div>

<h2 id="Syntax">Syntax</h2>

<p>The <code>nth-last-child</code> pseudo-class is specified with a single argument, which represents the pattern for matching elements, counting from the end.</p>

<h3 id="Keyword_values">Keyword values</h3>

<dl>
 <dt><code>odd</code></dt>
 <dd>Represents elements whose numeric position in a series of siblings is odd: 1, 3, 5, etc., counting from the end.</dd>
 <dt><code>even</code></dt>
 <dd>Represents elements whose numeric position in a series of siblings is even: 2, 4, 6, etc., counting from the end.</dd>
</dl>

<h3 id="Functional_notation">Functional notation</h3>

<dl>
 <dt><code>&lt;An+B&gt;</code></dt>
 <dd>Represents elements whose numeric position in a series of siblings matches the pattern <code>An+B</code>, for every positive integer or zero value of <code>n</code>. The index of the first element, counting from the end, is <code>1</code>. The values <code>A</code> and <code>B</code> must both be {{cssxref("&lt;integer&gt;")}}s.</dd>
</dl>

<h3 id="Formal_syntax">Formal syntax</h3>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="Example_selectors">Example selectors</h3>

<dl>
 <dt><code>tr:nth-last-child(odd)</code> or <code>tr:nth-last-child(2n+1)</code></dt>
 <dd>Represents the odd rows of an HTML table: 1, 3, 5, etc., counting from the end.</dd>
 <dt><code>tr:nth-last-child(even)</code> or <code>tr:nth-last-child(2n)</code></dt>
 <dd>Represents the even rows of an HTML table: 2, 4, 6, etc., counting from the end.</dd>
 <dt><code>:nth-last-child(7)</code></dt>
 <dd>Represents the seventh element, counting from the end.</dd>
 <dt><code>:nth-last-child(5n)</code></dt>
 <dd>Represents elements 5, 10, 15, etc., counting from the end.</dd>
 <dt><code>:nth-last-child(3n+4)</code></dt>
 <dd>Represents elements 4, 7, 10, 13, etc., counting from the end.</dd>
 <dt><code>:nth-last-child(-n+3)</code></dt>
 <dd>Represents the last three elements among a group of siblings.</dd>
 <dt><code>p:nth-last-child(n)</code> or <code>p:nth-last-child(n+1)</code></dt>
 <dd>Represents every <code>&lt;p&gt;</code> element among a group of siblings. This is the same as a simple <code>p</code> selector. (Since <code>n</code> starts at zero, while the last element begins at one, <code>n</code> and <code>n+1</code> will both select the same elements.)</dd>
 <dt><code>p:nth-last-child(1)</code> or <code>p:nth-last-child(0n+1)</code></dt>
 <dd>Represents every <code>&lt;p&gt;</code> that is the first element among a group of siblings, counting from the end. This is the same as the {{cssxref(":last-child")}} selector.</dd>
</dl>

<h3 id="Table_example">Table example</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;table&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;First line&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;Second line&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;Third line&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;Fourth line&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;Fifth line&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;
</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">table {
  border: 1px solid blue;
}

/* Selects the last three elements */
tr:nth-last-child(-n+3) {
  background-color: pink;
}

/* Selects every element starting from the second to last item */
tr:nth-last-child(n+2) {
  color: blue;
}

/* Select only the last second element */
tr:nth-last-child(2) {
  font-weight: 600;
}
</pre>

<h4 id="Result">Result</h4>

<p>{{EmbedLiveSample('Table_example', 300, 150)}}</p>

<h3 id="Quantity_query">Quantity query</h3>

<p>A <em>quantity query</em> styles elements depending on how many of them there are. In this example, list items turn red when there are at least three of them in a given list. This is accomplished by combining the capabilities of the <code>nth-last-child</code> pseudo-class and the <a href="/en-US/docs/Web/CSS/General_sibling_combinator">general sibling combinator</a>.</p>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html">&lt;h4&gt;A list of four items (styled):&lt;/h4&gt;
&lt;ol&gt;
  &lt;li&gt;One&lt;/li&gt;
  &lt;li&gt;Two&lt;/li&gt;
  &lt;li&gt;Three&lt;/li&gt;
  &lt;li&gt;Four&lt;/li&gt;
&lt;/ol&gt;

&lt;h4&gt;A list of two items (unstyled):&lt;/h4&gt;
&lt;ol&gt;
  &lt;li&gt;One&lt;/li&gt;
  &lt;li&gt;Two&lt;/li&gt;
&lt;/ol&gt;</pre>

<h4 id="CSS_2">CSS</h4>

<pre class="brush: css">/* If there are at least three list items,
   style them all */
li:nth-last-child(n+3),
li:nth-last-child(n+3) ~ li {
  color: red;
}</pre>

<h4 id="Result_2">Result</h4>

<p>{{EmbedLiveSample('Quantity_query', '100%', 270)}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{Cssxref(":nth-child")}}, {{Cssxref(":nth-last-of-type")}}</li>
 <li><a href="https://alistapart.com/article/quantity-queries-for-css">Quantity Queries for CSS</a></li>
</ul>
