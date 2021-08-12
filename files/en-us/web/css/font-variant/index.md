---
title: font-variant
slug: Web/CSS/font-variant
tags:
  - CSS
  - CSS Fonts
  - CSS Property
  - Reference
  - 'recipe:css-shorthand-property'
browser-compat: css.properties.font-variant
---
<div>{{CSSRef}}</div>

<p>The <strong><code>font-variant</code></strong> CSS <a href="/en-US/docs/Web/CSS/Shorthand_properties">shorthand property</a> allows you to set all the font variants for a font.</p>

<p>You can also set the CSS Level 2 (Revision 1) values of <code>font-variant</code>, (that is, <code>normal</code> or <code>small-caps</code>), by using the {{cssxref("font")}} shorthand.</p>

<div>{{EmbedInteractiveExample("pages/css/font-variant.html")}}</div>

<h2 id="Constituent_properties">Constituent properties</h2>

<p>This property is a shorthand for the following CSS properties:</p>

<ul>
 <li>{{cssxref("font-variant-alternates")}}</li>
 <li>{{cssxref("font-variant-caps")}}</li>
 <li>{{cssxref("font-variant-east-asian")}}</li>
 <li>{{cssxref("font-variant-ligatures")}}</li>
 <li>{{cssxref("font-variant-numeric")}}</li>
</ul>

<h2 id="Syntax">Syntax</h2>

<pre class="brush:css no-line-numbers">font-variant: small-caps;
font-variant: common-ligatures small-caps;

/* Global values */
font-variant: inherit;
font-variant: initial;
font-variant: revert;
font-variant: unset;
</pre>

<h3 id="Values">Values</h3>

<dl>
 <dt><code>normal</code></dt>
 <dd>Specifies a normal font face; each of the longhand properties has an initial value of normal. Longhand properties of <code>font-variant</code> are: {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variant-ligatures")}}, and {{cssxref("font-variant-east-asian")}}.</dd>
 <dt><code>none</code></dt>
 <dd>Sets the value of the {{cssxref("font-variant-ligatures")}} to <code>none</code> and the values of the other longhand property as <code>normal</code>, their initial value.</dd>
 <dt><code>&lt;common-lig-values&gt;</code>, <code>&lt;discretionary-lig-values&gt;</code>, <code>&lt;historical-lig-values&gt;</code>, <code>&lt;contextual-alt-values&gt;</code></dt>
 <dd>Specifies the keywords related to the {{cssxref("font-variant-ligatures")}} longhand property. The possible values are: <code>common-ligatures</code>, <code>no-common-ligatures</code>, <code>discretionary-ligatures</code>, <code>no-discretionary-ligatures</code>, <code>historical-ligatures</code>, <code>no-historical-ligatures</code>, <code>contextual</code>, and <code>no-contextual</code>.</dd>
 <dt><code>stylistic()</code>, <code>historical-forms</code>, <code>styleset()</code>, <code>character-variant()</code>, <code>swash()</code>, <code>ornaments()</code>, <code>annotation()</code></dt>
 <dd>Specifies the keywords and functions related to the {{cssxref("font-variant-alternates")}} longhand property.</dd>
 <dt><code>small-caps</code>, <code>all-small-caps</code>, <code>petite-caps</code>, <code>all-petite-caps</code>, <code>unicase</code>, <code>titling-caps</code></dt>
 <dd>Specifies the keywords and functions related to the {{cssxref("font-variant-caps")}} longhand property.</dd>
 <dt><code>&lt;numeric-figure-values&gt;</code>, <code>&lt;numeric-spacing-values&gt;</code>, <code>&lt;numeric-fraction-values&gt;</code>, <code>ordinal</code>, <code>slashed-zero</code></dt>
 <dd>Specifies the keywords related to the {{cssxref("font-variant-numeric")}} longhand property. The possible values are:  <code>lining-nums</code>, <code>oldstyle-nums</code>, <code>proportional-nums</code>, <code>tabular-nums</code>, <code>diagonal-fractions</code>, <code>stacked-fractions</code>, <code>ordinal</code>, and <code>slashed-zero</code>.</dd>
 <dt><code>&lt;east-asian-variant-values&gt;</code>, <code>&lt;east-asian-width-values&gt;</code>, <code>ruby</code></dt>
 <dd>Specifies the keywords related to the {{cssxref("font-variant-east-asian")}} longhand property. The possible values are: <code>jis78</code>, <code>jis83</code>, <code>jis90</code>, <code>jis04</code>, <code>simplified</code>, <code>traditional</code>, <code>full-width</code>, <code>proportional-width</code>, <code>ruby</code>.</dd>
</dl>

<h2 id="Formal_definition">Formal definition</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax">Formal syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="Setting_the_small-caps_font_variant">Setting the small-caps font variant</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;p class="normal"&gt;Firefox rocks!&lt;/p&gt;
&lt;p class="small"&gt;Firefox rocks!&lt;/p&gt;
</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">p.normal {
  font-variant: normal;
}
p.small {
  font-variant: small-caps;
}
</pre>

<h4 id="Result">Result</h4>

<p>{{ EmbedLiveSample('Setting_the_small-caps_font_variant', '', '', '', 'Web/CSS/font-variant') }}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{cssxref("text-transform")}}</li>
 <li>{{cssxref("text-combine-upright")}}</li>
 <li>{{cssxref("text-orientation")}}</li>
</ul>
