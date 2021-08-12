---
title: border-left-width
slug: Web/CSS/border-left-width
tags:
  - CSS
  - CSS Borders
  - CSS Property
  - Reference
  - 'recipe:css-property'
browser-compat: css.properties.border-left-width
---
<div>{{CSSRef}}</div>

<p>The <strong><code>border-left-width</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> property sets the width of the left border of an element.</p>

<div>{{EmbedInteractiveExample("pages/css/border-left-width.html")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush:css no-line-numbers">/* Keyword values */
border-left-width: thin;
border-left-width: medium;
border-left-width: thick;

/* &lt;length&gt; values */
border-left-width: 10em;
border-left-width: 3vmax;
border-left-width: 6px;

/* Global keywords */
border-left-width: inherit;
border-left-width: initial;
border-left-width: revert;
border-left-width: unset;
</pre>

<h3 id="Values">Values</h3>

<dl>
 <dt><code>&lt;line-width&gt;</code></dt>
 <dd>Defines the width of the border, either as an explicit nonnegative {{cssxref("&lt;length&gt;")}} or a keyword. If it's a keyword, it must be one of the following values:
   <ul>
     <li><code>thin</code></li>
     <li><code>medium</code></li>
     <li><code>thick</code></li>
  </ul>
 </dd>
</dl>

<div class="note">
 <p><strong>Note:</strong> Because the specification doesn't define the exact thickness denoted by each keyword, the precise result when using one of them is implementation-specific. Nevertheless, they always follow the pattern <code>thin ≤ medium ≤ thick</code>, and the values are constant within a single document.</p>
</div>

<h2 id="Formal_definition">Formal definition</h2>

<p>{{CSSInfo}}</p>

<h2 id="Formal_syntax">Formal syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="Comparing_border_widths">Comparing border widths</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;div&gt;Element 1&lt;/div&gt;
&lt;div&gt;Element 2&lt;/div&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">div {
  border: 1px solid red;
  margin: 1em 0;
}

div:nth-child(1) {
  border-left-width: thick;
}
div:nth-child(2) {
  border-left-width: 2em;
}</pre>

<h4 id="Result">Result</h4>

<p>{{EmbedLiveSample('Comparing_border_widths', '100%')}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>The other border-width-related CSS properties: {{Cssxref("border-top-width")}}, {{Cssxref("border-right-width")}}, {{Cssxref("border-bottom-width")}}, and {{Cssxref("border-width")}}.</li>
 <li>The other border-left-related CSS properties: {{Cssxref("border")}}, {{Cssxref("border-left")}}, {{Cssxref("border-left-style")}}, and {{Cssxref("border-left-color")}}.</li>
</ul>
