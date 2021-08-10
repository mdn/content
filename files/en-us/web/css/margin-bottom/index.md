---
title: margin-bottom
slug: Web/CSS/margin-bottom
tags:
  - CSS
  - CSS Property
  - Reference
  - recipe:css-property
browser-compat: css.properties.margin-bottom
---
<div>{{CSSRef}}</div>

<p>The <strong><code>margin-bottom</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> property sets the <a href="/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model">margin area</a> on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer.</p>

<div>{{EmbedInteractiveExample("pages/css/margin-bottom.html")}}</div>

<p><img alt="The effect of the CSS margin-bottom property on the element box" src="margin-bottom.svg"></p>

<p>This property has no effect on <em>non-<a href="/en-US/docs/Web/CSS/Replaced_element">replaced</a></em> inline elements, such as {{HTMLElement("span")}} or {{HTMLElement("code")}}.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush:css no-line-numbers">/* &lt;length&gt; values */
margin-bottom: 10px;  /* An absolute length */
margin-bottom: 1em;   /* relative to the text size */
margin-bottom: 5%;    /* relative to the nearest block container's width */

/* Keyword values */
margin-bottom: auto;

/* Global values */
margin-bottom: inherit;
margin-bottom: initial;
margin-bottom: revert;
margin-bottom: unset;
</pre>

<p>The <code>margin-bottom</code> property is specified as the keyword <code>auto</code>, or a <code>&lt;length&gt;</code>, or a <code>&lt;percentage&gt;</code>. Its value can be positive, zero, or negative.</p>

<h3 id="Values">Values</h3>

<dl>
 <dt>{{cssxref("&lt;length&gt;")}}</dt>
 <dd>The size of the margin as a fixed value.</dd>
 <dt>{{cssxref("&lt;percentage&gt;")}}</dt>
 <dd>The size of the margin as a percentage, relative to the <em>width</em> of the containing block.</dd>
 <dt><code>auto</code></dt>
 <dd>The browser selects a suitable value to use. See {{cssxref("margin")}}.</dd>
</dl>

<h2 id="Formal_definition">Formal definition</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax">Formal syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="Setting_positive_and_negative_bottom_margins">Setting positive and negative bottom margins</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;div class="container"&gt;
&lt;div class="box0"&gt;Box 0&lt;/div&gt;
&lt;div class="box1"&gt;Box 1&lt;/div&gt;
&lt;div class="box2"&gt;Box one's negative margin pulls me up&lt;/div&gt;
&lt;/div&gt;</pre>

<h4 id="CSS">CSS</h4>

<p>CSS for divs to set margin-bottom and height</p>

<pre class="brush: css">.box0 {
    margin-bottom:1em;
    height:3em;
}
.box1 {
    margin-bottom:-1.5em;
    height:4em;
}
.box2 {
    border:1px dashed black;
    border-width:1px 0;
    margin-bottom:2em;
}

</pre>

<p>Some definitions for container and divs so margins' effects can be seen more clearly</p>

<pre class="brush: css">.container {
    background-color:orange;
    width:320px;
    border:1px solid black;
}
div {
    width:320px;
    background-color:gold;
}</pre>

<h4 id="Result">Result</h4>

<p>{{ EmbedLiveSample('Setting_positive_and_negative_bottom_margins',350,200) }}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{cssxref("margin-top")}}, {{cssxref("margin-right")}}, and {{cssxref("margin-left")}} and the {{cssxref("margin")}} shorthand</li>
 <li>The mapped logical properties: {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}}, and {{cssxref("margin-inline-end")}} and the shorthands {{cssxref("margin-block")}} and {{cssxref("margin-inline")}}</li>
</ul>
