---
title: Adjacent sibling combinator
slug: Web/CSS/Adjacent_sibling_combinator
tags:
  - CSS
  - NeedsMobileBrowserCompatibility
  - Reference
  - Selector
  - Selectors
browser-compat: css.selectors.adjacent_sibling
---
<div>{{CSSRef("Selectors")}}</div>

<p>The <strong>adjacent sibling combinator</strong> (<code>+</code>) separates two selectors and matches the second element only if it <em>immediately</em> follows the first element, and both are children of the same parent {{DOMxRef("element")}}.</p>

<pre class="brush: css no-line-numbers">/* Paragraphs that come immediately after any image */
img + p {
  font-weight: bold;
}</pre>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: css">former_element + target_element { <em>style properties</em> }
</pre>

<h2 id="Examples">Examples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">li:first-of-type + li {
  color: red;
}
</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;ul&gt;
  &lt;li&gt;One&lt;/li&gt;
  &lt;li&gt;Two!&lt;/li&gt;
  &lt;li&gt;Three&lt;/li&gt;
&lt;/ul&gt;</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample("Examples", "100%", 100)}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/CSS/General_sibling_combinator">General sibling combinator</a></li>
</ul>
