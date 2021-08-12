---
title: ID selectors
slug: Web/CSS/ID_selectors
tags:
  - CSS
  - Reference
  - Selector
  - Selectors
browser-compat: css.selectors.id
---
<div>{{CSSRef}}</div>

<p>The CSS <strong>ID selector</strong> matches an element based on the value of the element’s {{htmlattrxref("id")}} attribute. In order for the element to be selected, its <code>id</code> attribute must match exactly the value given in the selector.</p>

<pre class="brush: css no-line-numbers">/* The element with id="demo" */
#demo {
  border: red 2px solid;
}</pre>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: css">#id_value { <em>style properties</em> }</pre>

<p>Note that syntactically (but not specificity-wise), this is equivalent to the following {{Cssxref("Attribute_selectors", "attribute selector")}}:</p>

<pre class="brush: css">[id=id_value] { <em>style properties</em> }</pre>

<h2 id="Examples">Examples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">#identified {
  background-color: skyblue;
}
</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div id="identified"&gt;This div has a special ID on it!&lt;/div&gt;
&lt;div&gt;This is just a regular div.&lt;/div&gt;
</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample("Examples", '100%', 50)}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/CSS/CSS_Selectors">CSS Selectors</a></li>
 <li><a href="/en-US/docs/Learn/CSS/Building_blocks/Selectors">Learn CSS: Selectors</a></li>
</ul>
