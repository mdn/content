---
title: top
slug: Web/CSS/top
tags:
  - CSS
  - CSS Positioning
  - CSS Property
  - Reference
  - 'recipe:css-property'
browser-compat: css.properties.top
---
<div>{{CSSRef}}</div>

<p>The <strong><code>top</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> property participates in specifying the vertical position of a <a href="/en-US/docs/Web/CSS/position">positioned element</a>. It has no effect on non-positioned elements.</p>

<div>{{EmbedInteractiveExample("pages/css/top.html")}}</div>

<p>The effect of <code>top</code> depends on how the element is positioned (i.e., the value of the {{cssxref("position")}} property):</p>

<ul>
 <li>When <code>position</code> is set to <code>absolute</code> or <code>fixed</code>, the <code>top</code> property specifies the distance between the element's outer margin of top edge and the inner border of the top edge of its containing block.</li>
 <li>When <code>position</code> is set to <code>relative</code>, the <code>top</code> property specifies the distance the element's top edge is moved below its normal position.</li>
 <li>When <code>position</code> is set to <code>sticky</code>, the <code>top</code> property is used to compute the sticky-constraint rectangle.</li>
 <li>When <code>position</code> is set to <code>static</code>, the <code>top</code> property has <em>no effect</em>.</li>
</ul>

<p>When both <code>top</code> and {{cssxref("bottom")}} are specified, <code>position</code> is set to <code>absolute</code> or <code>fixed</code>, <em>and</em> {{cssxref("height")}} is unspecified (either <code>auto</code> or <code>100%</code>) both the <code>top</code> and <code>bottom</code> distances are respected. In all other situations, if {{cssxref("height")}} is constrained in any way or <code>position</code> is set to <code>relative</code>, the <code>top</code> property takes precedence and the <code>bottom</code> property is ignored.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush:css no-line-numbers">/* &lt;length&gt; values */
top: 3px;
top: 2.4em;

/* &lt;percentage&gt;s of the height of the containing block */
top: 10%;

/* Keyword value */
top: auto;

/* Global values */
top: inherit;
top: initial;
top: revert;
top: unset;
</pre>

<h3 id="Values">Values</h3>

<dl>
 <dt>{{cssxref("&lt;length&gt;")}}</dt>
 <dd>A negative, null, or positive {{cssxref("&lt;length&gt;")}} that represents:
 <ul>
  <li>for <em>absolutely positioned elements</em>, the distance to the top edge of the containing block.</li>
  <li>for <em>relatively positioned elements</em>, the distance that the element is moved below its normal position.</li>
 </ul>
 </dd>
 <dt>{{cssxref("&lt;percentage&gt;")}}</dt>
 <dd>A {{cssxref("&lt;percentage&gt;")}} of the containing block's height.</dd>
 <dt><code>auto</code></dt>
 <dd>Specifies that:
 <ul>
  <li>for <em>absolutely positioned elements</em>, the position of the element is based on the {{Cssxref("bottom")}} property, while <code>height: auto</code> is treated as a height based on the content; or if <code>bottom</code> is also <code>auto</code>, the element is positioned where it should vertically be positioned if it were a static element.</li>
  <li>for <em>relatively positioned elements</em>, the distance of the element from its normal position is based on the {{Cssxref("bottom")}} property; or if <code>bottom</code> is also <code>auto</code>, the element is not moved vertically at all.</li>
 </ul>
 </dd>
 <dt><code>inherit</code></dt>
 <dd>Specifies that the value is the same as the computed value from its parent element (which might not be its containing block). This computed value is then handled as if it were a {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, or the <code>auto</code> keyword.</dd>
</dl>

<h2 id="Formal_definition">Formal definition</h2>

<p>{{CSSInfo}}</p>

<h2 id="Formal_syntax">Formal syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="A_positioned_element_set_10_from_the_top">A positioned element set 10% from the top</h3>

<pre class="brush: css">body {
  background: beige;
}

div {
  position: absolute;
  top: 10%;
  right: 40%;
  bottom: 20%;
  left: 15%;
  background: gold;
  border: 1px solid blue;
}</pre>

<pre class="brush: html">&lt;div&gt;The size of this content is determined by the position of its edges.&lt;/div&gt;</pre>

<p>{{EmbedLiveSample('Examples','100%','200')}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{cssxref("inset")}}, the shorthand for all related properties: {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}}, and {{cssxref("right")}}</li>
 <li>The mapped logical properties: {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}}, and {{cssxref("inset-inline-end")}} and the shorthands {{cssxref("inset-block")}} and {{cssxref("inset-inline")}}</li>
 <li>{{cssxref("position")}}</li>
</ul>
