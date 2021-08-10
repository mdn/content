---
title: padding-block-start
slug: Web/CSS/padding-block-start
tags:
  - CSS
  - CSS Logical Property
  - CSS Property
  - Experimental
  - Reference
  - padding-block
  - padding-block-start
  - 'recipe:css-property'
browser-compat: css.properties.padding-block-start
---
<div>{{CSSRef}}</div>

<p>The <strong><code>padding-block-start</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> property defines the logical block start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.</p>

<div>{{EmbedInteractiveExample("pages/css/padding-block-start.html")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush:css no-line-numbers">/* &lt;length&gt; values */
padding-block-start: 10px;      /* An absolute length */
padding-block-start: 1em;       /* A length relative to the text size */

/* &lt;percentage&gt; value */
padding-block-start: 5%;        /* A padding relative to the block container's width */

/* Global values */
padding-block-start: inherit;
padding-block-start: initial;
padding-block-start: revert;
padding-block-start: unset;
</pre>

<h3 id="Values">Values</h3>

<dl>
  <dt>{{cssxref("&lt;length&gt;")}}</dt>
  <dd>The size of the padding as a fixed value. Must be nonnegative.</dd>
  <dt>{{cssxref("&lt;percentage&gt;")}}</dt>
  <dd>The size of the padding as a percentage, relative to the <em>inline-size</em> of the containing block. Must be nonnegative.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>The <code>padding-block-start</code> property is defined in the specification as taking the same values as the {{cssxref("padding-top")}} property. However, the phsyical property it maps to depends on the values set for {{cssxref("writing-mode")}}, {{cssxref("direction")}}, and {{cssxref("text-orientation")}}. Therefore, it could map to {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, or {{cssxref("padding-left")}}</p>

<p>It relates to {{cssxref("padding-block-end")}}, {{cssxref("padding-inline-start")}}, and {{cssxref("padding-inline-end")}}, which define the other paddings of the element.</p>

<h2 id="Formal_definition">Formal definition</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax">Formal syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="Setting_block_start_padding_for_vertical_text">Setting block start padding for vertical text</h3>

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
  padding-block-start: 20px;
  background-color: #C8C800;
}</pre>

<h4 id="Result">Result</h4>

<p>{{EmbedLiveSample("Setting_block_start_padding_for_vertical_text", 140, 140)}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>The mapped physical properties: {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, and {{cssxref("padding-left")}}</li>
 <li>{{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}</li>
</ul>
