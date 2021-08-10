---
title: ':local-link'
slug: 'Web/CSS/:local-link'
browser-compat: css.selectors.local-link
---
<p>{{ CSSRef }}</p>

<p>The <strong><code>:local-link</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> <a href="/en-US/docs/Web/CSS/Pseudo-classes">pseudo-class</a> represents a link to the same document. Therefore an element that is the source anchor of a hyperlink whose target’s absolute URL matches the element's own document URL.</p>

<pre>/* Selects any &lt;a&gt; that links to the current document */
a:local-link {
  color: green;
}
</pre>

<h2 id="Syntax">Syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;a href="#target"&gt;This is a link on the current page.&lt;/a&gt;&lt;br&gt;
&lt;a href="https://example.com"&gt;This is an external link&lt;/a&gt;&lt;br&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">a:local-link {
  color: green;
}
</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample("Examples")}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
	<li>Link-related pseudo-classes: {{ cssxref(":link") }},{{ cssxref(":visited") }}, {{ cssxref(":hover") }}, {{ cssxref(":active") }}</li>
</ul>
