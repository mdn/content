---
title: '@font-feature-values'
slug: Web/CSS/@font-feature-values
tags:
  - At-rule
  - CSS
  - CSS Fonts
  - Reference
browser-compat: css.at-rules.font-feature-values
---
<div>{{CSSRef}}</div>

<p>The <strong><code>@font-feature-values</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> <a href="/en-US/docs/Web/CSS/At-rule" title="At-rule">at-rule</a> lets you use a common name in the {{cssxref("font-variant-alternates")}} property for features activated differently in OpenType. This can help simplify your CSS when using multiple fonts.</p>

<p>The <code>@font-feature-values</code> at-rule may be used either at the top level of your CSS or inside any <a href="/en-US/docs/Web/CSS/At-rule#conditional_group_rules">CSS conditional-group at-rule</a>.</p>

<h2 id="Syntax">Syntax</h2>

<h3 id="Feature_value_blocks">Feature value blocks</h3>

<dl>
 <dt><code>@swash</code></dt>
 <dd>Specifies a feature name that will work with the {{cssxref("font-variant-alternates", "swash()", "#swash()")}} functional notation of {{cssxref("font-variant-alternates")}}. A swash feature value definition allows only one value: <code>ident1: 2</code> is valid, but <code>ident2: 2 4</code> isn't.</dd>
 <dt><code>@annotation</code></dt>
 <dd>Specifies a feature name that will work with the {{cssxref("font-variant-alternates", "annotation()", "#annotation()")}} functional notation of {{cssxref("font-variant-alternates")}}. An annotation feature value definition allows only one value: <code>ident1: 2</code> is valid, but <code>ident2: 2 4</code> isn't.</dd>
 <dt><code>@ornaments</code></dt>
 <dd>Specifies a feature name that will work with the {{cssxref("font-variant-alternates", "ornaments()", "#ornaments()")}} functional notation of {{cssxref("font-variant-alternates")}}. An ornaments feature value definition allows only one value: <code>ident1: 2</code> is valid, but <code>ident2: 2 4</code> isn't.</dd>
 <dt><code>@stylistic</code></dt>
 <dd>Specifies a feature name that will work with the {{cssxref("font-variant-alternates", "stylistic()", "#stylistic()")}} functional notation of {{cssxref("font-variant-alternates")}}. A stylistic feature value definition allows only one value: <code>ident1: 2</code> is valid, but <code>ident2: 2 4</code> isn't.</dd>
 <dt><code>@styleset</code></dt>
 <dd>Specifies a feature name that will work with the {{cssxref("font-variant-alternates", "styleset()", "#styleset()")}} functional notation of {{cssxref("font-variant-alternates")}}. A styleset feature value definition allows an unlimited number of values: <code>ident1: 2 4 12 1</code> maps to the OpenType values <code>ss02</code>, <code>ss04</code>, <code>ss12</code>, and <code>ss01</code>. Note that values higher than <code>99</code> are valid, but don't map to any OpenType values and are ignored.</dd>
 <dt><code>@character-variant</code></dt>
 <dd>Specifies a feature name that will work with the {{cssxref("font-variant-alternates", "character-variant()", "#character-variant()")}} functional notation of {{cssxref("font-variant-alternates")}}. A character-variant feature value definition allows either one or two values: <code>ident1: 3</code> maps to <code>cv03=1</code>, and <code>ident2: 2 4</code> maps to <code>cv02=4</code>, but <code>ident2: 2 4 5</code> is invalid.</dd>
</dl>

<h2 id="Formal_syntax">Formal syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="Using_styleset_in_a_font-feature-values_rule">Using @styleset in a @font-feature-values rule</h3>

<pre class="brush: css">/* At-rule for "nice-style" in Font One */
@font-feature-values Font One {
  @styleset {
    nice-style: 12;
  }
}

/* At-rule for "nice-style" in Font Two */
@font-feature-values Font Two {
  @styleset {
    nice-style: 4;
  }
}

…

/* Apply the at-rules with a single declaration */
.nice-look {
  font-variant-alternates: styleset(nice-style);
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>The {{cssxref("font-variant-alternates")}} property that uses values that this at-rule defines.</li>
</ul>
