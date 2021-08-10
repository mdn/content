---
title: inset-inline
slug: Web/CSS/inset-inline
tags:
  - CSS
  - CSS Logical Property
  - CSS Property
  - Experimental
  - Reference
  - 'recipe:css-shorthand-property'
browser-compat: css.properties.inset-inline
---
<div>{{CSSRef}}</div>

<p>The <strong><code>inset-inline</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> property defines the logical start and end offsets of an element in the inline direction, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the {{cssxref("top")}} and {{cssxref("bottom")}}, or {{cssxref("right")}} and {{cssxref("left")}} properties depending on the values defined for {{cssxref("writing-mode")}}, {{cssxref("direction")}}, and {{cssxref("text-orientation")}}.</p>

<pre class="brush:css no-line-numbers">/* &lt;length&gt; values */
inset-inline: 3px 10px;
inset-inline: 2.4em 3em;
inset-inline: 10px; /* value applied to start and end */

/* &lt;percentage&gt;s of the width or height of the containing block */
inset-inline: 10% 5%;

/* Keyword value */
inset-inline: auto;

/* Global values */
inset-inline: inherit;
inset-inline: initial;
inset-inline: revert;
inset-inline: unset;
</pre>

<h2 id="Constituent_properties">Constituent properties</h2>

<p>This property is a shorthand for the following CSS properties:</p>

<ul>
 <li>{{cssxref("inset-inline-end")}}</li>
 <li>{{cssxref("inset-inline-start")}}</li>
</ul>

<h2 id="Syntax">Syntax</h2>

<h3 id="Values">Values</h3>

<p>The <code>inset-inline</code> property takes the same values as the {{cssxref("left")}} property.</p>

<h2 id="Formal_definition">Formal definition</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax">Formal syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="Setting_inline_start_and_end_offsets">Setting inline start and end offsets</h3>

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
  writing-mode: vertical-lr;
  position: relative;
  inset-inline: 20px 50px;
  background-color: #c8c800;
}</pre>

<h4 id="Result">Result</h4>

<p>{{EmbedLiveSample("Setting_inline_start_and_end_offsets", 140, 140)}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>The mapped physical properties: {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, and {{cssxref("left")}}</li>
 <li>The mapped physical shortcut: {{cssxref("inset")}}</li>
 <li>The mapped block shortcut: {{cssxref("inset-block")}}</li>
 <li>{{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}</li>
</ul>
