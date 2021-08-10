---
title: inline-size
slug: Web/CSS/inline-size
tags:
  - CSS
  - CSS Logical Property
  - CSS Property
  - Reference
  - 'recipe:css-property'
browser-compat: css.properties.inline-size
---
<div>{{CSSRef}}</div>

<p>The <strong><code>inline-size</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the {{cssxref("width")}} or the {{cssxref("height")}} property, depending on the value of {{cssxref("writing-mode")}}.</p>

<p>If the writing mode is vertically oriented, the value of <code>inline-size</code> relates to the height of the element; otherwise, it relates to the width of the element. A related property is {{cssxref("block-size")}}, which defines the other dimension of the element.</p>

<div>{{EmbedInteractiveExample("pages/css/inline-size.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush:css no-line-numbers">/* &lt;length&gt; values */
inline-size: 300px;
inline-size: 25em;

/* &lt;percentage&gt; values */
inline-size: 75%;

/* Keyword values */
inline-size: max-content;
inline-size: min-content;
inline-size: fit-content(20em);
inline-size: auto;

/* Global values */
inline-size: inherit;
inline-size: initial;
inline-size: revert;
inline-size: unset;
</pre>

<h3 id="Values">Values</h3>

<p>The <code>inline-size</code> property takes the same values as the {{cssxref("width")}} and {{cssxref("height")}} properties.</p>

<h2 id="Formal_definition">Formal definition</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax">Formal syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="Setting_inline_size_in_pixels">Setting inline size in pixels</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;p class="exampleText"&gt;Example text&lt;/p&gt;
</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">.exampleText {
  writing-mode: vertical-rl;
  background-color: yellow;
  inline-size: 110px;
}</pre>

<h4 id="Result">Result</h4>

<p>{{EmbedLiveSample("Setting_inline_size_in_pixels")}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>The mapped physical properties: {{cssxref("width")}} and {{cssxref("height")}}</li>
 <li>{{cssxref("writing-mode")}}</li>
</ul>
