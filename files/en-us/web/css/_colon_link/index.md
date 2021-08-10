---
title: ':link'
slug: 'Web/CSS/:link'
tags:
  - CSS
  - Layout
  - Pseudo-class
  - Reference
  - Selector
  - Web
browser-compat: css.selectors.link
---
<div>{{ CSSRef }}</div>

<p>The <strong><code>:link</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> <a href="/en-US/docs/Web/CSS/Pseudo-classes">pseudo-class</a> represents an element that has not yet been visited. It matches every unvisited {{HTMLElement("a")}} or {{HTMLElement("area")}} element that has an <code>href</code> attribute.</p>

<pre class="brush: css no-line-numbers">/* Selects any &lt;a&gt; that has not been visited yet */
a:link {
  color: red;
}</pre>

<p>Styles defined by the <code>:link</code> pseudo-class will be overridden by any subsequent link-related pseudo-class ({{cssxref(":active")}}, {{cssxref(":hover")}}, or {{cssxref(":visited")}}) that has at least equal specificity. To style links appropriately, put the <code>:link</code> rule before all other link-related rules, as defined by the <em>LVHA-order</em>: <code>:link</code> — <code>:visited</code> — <code>:hover</code> — <code>:active</code>.</p>

<div class="note">
<p><strong>Note:</strong> Use {{cssxref(":any-link")}} to select an element independent of whether it has been visited or not.</p>
</div>

<h2 id="Syntax">Syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<p>By default, most browsers apply a special {{cssxref("color")}} value to visited links. Thus, the links in this example will probably have special font colors only before you visit them. (After that, you'll need to clear your browser history to see them again.) However, the {{cssxref("background-color")}} values are likely to remain, as most browsers do not set that property on visited links by default.</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;a href="#ordinary-target"&gt;This is an ordinary link.&lt;/a&gt;&lt;br&gt;
&lt;a href=""&gt;You've already visited this link.&lt;/a&gt;&lt;br&gt;
&lt;a&gt;Placeholder link (won't get styled)&lt;/a&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">a:link {
  background-color: gold;
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
 <li>Link-related pseudo-classes: {{ cssxref(":visited") }}, {{ cssxref(":hover") }}, {{ cssxref(":active") }}</li>
</ul>
