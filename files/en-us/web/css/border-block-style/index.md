---
title: border-block-style
slug: Web/CSS/border-block-style
tags:
  - CSS
  - CSS Logical Property
  - CSS Property
  - Experimental
  - Non-standard
  - Reference
  - 'recipe:css-property'
browser-compat: css.properties.border-block-style
---
<div>{{CSSRef}}</div>

<p>The <strong><code>border-block-style</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> property defines the style of the logical block borders of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the {{cssxref("border-top-style")}} and {{cssxref("border-bottom-style")}}, or {{cssxref("border-left-style")}} and {{cssxref("border-right-style")}} properties depending on the values defined for {{cssxref("writing-mode")}}, {{cssxref("direction")}}, and {{cssxref("text-orientation")}}.</p>

<div>{{EmbedInteractiveExample("pages/css/border-block-style.html")}}</div>

<p>The border style in the other dimension can be set with {{cssxref("border-inline-style")}}, which sets {{cssxref("border-inline-start-style")}}, and {{cssxref("border-inline-end-style")}}.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush:css no-line-numbers">/* &lt;'border-style'&gt; values */
border-block-style: dashed;
border-block-style: dotted;
border-block-style: groove;

/* Global values */
border-block-style: inherit;
border-block-style: initial;
border-block-style: revert;
border-block-style: unset;</pre>

<h3 id="Values">Values</h3>

<dl>
 <dt><code>&lt;'border-style'&gt;</code></dt>
 <dd>The line style of the border. See {{ cssxref("border-style") }}.</dd>
</dl>

<h2 id="Formal_definition">Formal definition</h2>

<p>{{CSSInfo}}</p>

<h2 id="Formal_syntax">Formal syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="Dashed_border_with_vertical_text">Dashed border with vertical text</h3>

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
  border: 5px solid blue;
  border-block-style: dashed;
}</pre>

<h4 id="Results">Results</h4>

<p>{{EmbedLiveSample("Dashed_border_with_vertical_text", 140, 140)}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>This property maps to one of the physical border properties: {{cssxref("border-top-style")}}, {{cssxref("border-right-style")}}, {{cssxref("border-bottom-style")}}, or {{cssxref("border-left-style")}}.</li>
 <li>{{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}</li>
</ul>
