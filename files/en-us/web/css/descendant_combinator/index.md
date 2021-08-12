---
title: Descendant combinator
slug: Web/CSS/Descendant_combinator
tags:
  - CSS
  - Reference
  - Selector
  - Selectors
browser-compat: css.selectors.descendant
---
<div>{{CSSRef("Selectors")}}</div>

<p>The <strong>descendant combinator</strong> — typically represented by a single space (<code> </code>) character — combines two selectors such that elements matched by the second selector are selected if they have an ancestor (parent, parent's parent, parent's parent's parent, etc) element matching the first selector. Selectors that utilize a descendant combinator are called <dfn>descendant selectors</dfn>.</p>

<pre class="brush: css no-line-numbers">/* List items that are descendants of the "my-things" list */
ul.my-things li {
  margin: 2em;
}</pre>

<p>The descendant combinator is technically one or more {{Glossary("CSS")}} white space characters — the space character and/or one of four control characters: carriage return, form feed, new line, and tab characters — between two selectors in the absence of another combinator. Additionally, the white space characters of which the combinator is comprised may contain any number of CSS comments.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: css"><var>selector1</var> <var>selector2</var> {
  <var>/* property declarations */</var>
}</pre>

<h2 id="Examples">Examples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">li {
  list-style-type: disc;
}

li li {
  list-style-type: circle;
}
</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;ul&gt;
  &lt;li&gt;
    &lt;div&gt;Item 1&lt;/div&gt;
    &lt;ul&gt;
      &lt;li&gt;Subitem A&lt;/li&gt;
      &lt;li&gt;Subitem B&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;div&gt;Item 2&lt;/div&gt;
    &lt;ul&gt;
      &lt;li&gt;Subitem A&lt;/li&gt;
      &lt;li&gt;Subitem B&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/li&gt;
&lt;/ul&gt;
</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample("Examples", "100%", 160)}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/CSS/Child_combinator">Child combinator</a></li>
</ul>
