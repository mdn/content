---
title: inset-block-end
slug: Web/CSS/inset-block-end
tags:
  - CSS
  - CSS Logical Property
  - CSS Property
  - Experimental
  - Reference
  - 'recipe:css-property'
browser-compat: css.properties.inset-block-end
---
<div>{{CSSRef}}</div>

<p>The <strong><code>inset-block-end</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> property defines the logical block end offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, or {{cssxref("left")}} property depending on the values defined for {{cssxref("writing-mode")}}, {{cssxref("direction")}}, and {{cssxref("text-orientation")}}.</p>

<pre class="brush:css no-line-numbers">/* &lt;length&gt; values */
inset-block-end: 3px;
inset-block-end: 2.4em;

/* &lt;percentage&gt;s of the width or height of the containing block */
inset-block-end: 10%;

/* Keyword value */
inset-block-end: auto;

/* Global values */
inset-block-end: inherit;
inset-block-end: initial;
inset-block-end: revert;
inset-block-end: unset;
</pre>

<h2 id="Syntax">Syntax</h2>

<h3 id="Values">Values</h3>

<p>The <code>inset-block-end</code> property takes the same values as the {{cssxref("left")}} property.</p>

<h2 id="Formal_definition">Formal definition</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax">Formal syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="Setting_block_end_offset">Setting block end offset</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;div&gt;
  &lt;p class="exampleText"&gt;Example text&lt;/p&gt;
&lt;/div&gt;
</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exampleText {
  writing-mode: vertical-rl;
  position: relative;
  inset-block-end: 20px;
  background-color: #c8c800;
}</pre>

<h4 id="Result">Result</h4>

<p>{{EmbedLiveSample("Setting_block_end_offset", 140, 140)}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>The properties which defines other insets: {{cssxref("inset-block-start")}}, {{cssxref("inset-inline-start")}}, and {{cssxref("inset-inline-end")}}</li>
 <li>The mapped physical properties: {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, and {{cssxref("left")}}</li>
 <li>{{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}</li>
</ul>
