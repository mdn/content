---
title: border-inline-start-color
slug: Web/CSS/border-inline-start-color
tags:
  - CSS
  - CSS Logical Property
  - CSS Property
  - Experimental
  - Reference
  - border-inline
  - border-inline-color
  - border-inline-start
  - border-inline-start-color
  - 'recipe:css-property'
browser-compat: css.properties.border-inline-start-color
---
<div>{{CSSRef}}</div>

<p>The <strong><code>border-inline-start-color</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> property defines the color of the logical inline start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the {{cssxref("border-top-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-bottom-color")}}, or {{cssxref("border-left-color")}} property depending on the values defined for {{cssxref("writing-mode")}}, {{cssxref("direction")}}, and {{cssxref("text-orientation")}}.</p>

<div>{{EmbedInteractiveExample("pages/css/border-inline-start-color.html")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush:css no-line-numbers">border-inline-start-color: red;
border-inline-start-color: #ee4141;

/* Global values */
border-inline-start-color: inherit;
border-inline-start-color: initial;
border-inline-start-color: revert;
border-inline-start-color: unset;</pre>

<p>Related properties are {{cssxref("border-block-start-color")}}, {{cssxref("border-block-end-color")}}, and {{cssxref("border-inline-end-color")}}, which define the other border colors of the element.</p>

<h3 id="Values">Values</h3>

<dl>
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
  writing-mode: vertical-lr;
  border: 10px solid blue;
  border-inline-start-color: red;
}</pre>

<p>{{EmbedLiveSample("Examples", 140, 140)}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>This property maps to one of the physical border properties: {{cssxref("border-top-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-bottom-color")}}, and {{cssxref("border-left-color")}}</li>
 <li>{{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}</li>
</ul>
