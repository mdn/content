---
title: border-inline-end
slug: Web/CSS/border-inline-end
tags:
  - CSS
  - CSS Logical Property
  - CSS Property
  - Experimental
  - Reference
  - border-inline
  - border-inline-end
  - border-inline-end-color
  - border-inline-end-style
  - border-inline-end-width
  - 'recipe:css-shorthand-property'
browser-compat: css.properties.border-inline-end
---
<div>{{CSSRef}}</div>

<p>The <strong><code>border-inline-end</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> property is a <a href="/en-US/docs/Web/CSS/Shorthand_properties">shorthand property</a> for setting the individual logical inline-end border property values in a single place in the style sheet.</p>

<div>{{EmbedInteractiveExample("pages/css/border-inline-end.html")}}</div>

<h2 id="Constituent_properties">Constituent properties</h2>

<p>This property is a shorthand for the following CSS properties:</p>

<ul>
 <li><a href="/en-US/docs/Web/CSS/border-inline-end-color"><code>border-inline-end-color</code></a></li>
 <li><a href="/en-US/docs/Web/CSS/border-inline-end-style"><code>border-inline-end-style</code></a></li>
 <li><a href="/en-US/docs/Web/CSS/border-inline-end-width"><code>border-inline-end-width</code></a></li>
</ul>

<h2 id="Syntax">Syntax</h2>

<pre class="brush:css no-line-numbers">border-inline-end: 1px;
border-inline-end: 2px dashed;
border-inline-end: medium dashed blue;

/* Global values */
border-inline-end: inherit;
border-inline-end: initial;
border-inline-end: revert;
border-inline-end: unset;</pre>

<p>The physical border to which <code>border-inline-end</code> maps depends on the element's writing mode, directionality, and text orientation. It corresponds to the {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, or {{cssxref("border-left")}} property depending on the values defined for {{cssxref("writing-mode")}}, {{cssxref("direction")}}, and {{cssxref("text-orientation")}}.</p>

<p>Related properties are {{cssxref("border-block-start")}}, {{cssxref("border-block-end")}}, and {{cssxref("border-inline-start")}}, which define the other borders of the element.</p>

<p>{{cssinfo}}</p>

<h3 id="Values">Values</h3>

<p>The <code>border-inline-end</code> is specified with one or more of the following, in any order:</p>

<dl>
 <dt><code>&lt;'border-width'&gt;</code></dt>
 <dd>The width of the border. See {{cssxref("border-width")}}.</dd>
 <dt><code>&lt;'border-style'&gt;</code></dt>
 <dd>The line style of the border. See {{cssxref("border-style")}}.</dd>
 <dt><code>&lt;'color'&gt;</code></dt>
 <dd>The color of the border. See {{cssxref("color")}}.</dd>
</dl>

<h2 id="Formal_definition">Formal definition</h2>

<p>{{CSSInfo}}</p>

<h2 id="Formal_syntax">Formal syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div&gt;
  &lt;p class="exampleText"&gt;Example text&lt;/p&gt;
&lt;/div&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exampleText {
  writing-mode: vertical-rl;
  border-inline-end: 5px dashed blue;
}</pre>

<p>{{EmbedLiveSample("Examples", 140, 140)}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>This property maps to one of the physical border properties: {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, or {{cssxref("border-left")}}.</li>
 <li>{{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}</li>
</ul>
