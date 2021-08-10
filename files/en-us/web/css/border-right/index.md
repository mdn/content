---
title: border-right
slug: Web/CSS/border-right
tags:
  - CSS
  - CSS Borders
  - CSS Property
  - Reference
  - 'recipe:css-shorthand-property'
browser-compat: css.properties.border-right
---
<div>{{CSSRef}}</div>

<p>The <strong><code>border-right</code></strong> <a href="/en-US/docs/Web/CSS/Shorthand_properties">shorthand</a> <a href="/en-US/docs/Web/CSS">CSS</a> property sets all the properties of an element's right <a href="/en-US/docs/Web/CSS/border">border</a>.</p>

<div>{{EmbedInteractiveExample("pages/css/border-right.html")}}</div>

<p>As with all shorthand properties, <code>border-right</code> always sets the values of all of the properties that it can set, even if they are not specified. It sets those that are not specified to their default values. This means that ...</p>

<pre class="brush: css">border-right-style: dotted;
border-right: thick green;
</pre>

<p>... is actually the same as ...</p>

<pre class="brush: css">border-right-style: dotted;
border-right: none thick green;
</pre>

<p>... and the value of {{cssxref("border-right-style")}} given before <code>border-right</code> is ignored. Since the default value of {{cssxref("border-right-style")}} is <code>none</code>, not specifying the <code>border-style</code> part results in no border.</p>

<h2 id="Constituent_properties">Constituent properties</h2>

<p>This property is a shorthand for the following CSS properties:</p>

<ul>
 <li>{{cssxref("border-right-color")}}</li>
 <li>{{cssxref("border-right-style")}}</li>
 <li>{{cssxref("border-right-width")}}</li>
</ul>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: css no-line-numbers">border-right: 1px;
border-right: 2px dotted;
border-right: medium dashed green;

/* Global values */
border-right: inherit;
border-right: initial;
border-right: revert;
border-right: unset;
</pre>

<p>The three values of the shorthand property can be specified in any order, and one or two of them may be omitted.</p>

<h3 id="Values">Values</h3>

<dl>
 <dt><code>&lt;br-width&gt;</code></dt>
 <dd>See {{cssxref("border-right-width")}}.</dd>
 <dt><code>&lt;br-style&gt;</code></dt>
 <dd>See {{cssxref("border-right-style")}}.</dd>
 <dt>{{cssxref("&lt;color&gt;")}}</dt>
 <dd>See {{cssxref("border-right-color")}}.</dd>
</dl>

<h2 id="Formal_definition">Formal definition</h2>

<p>{{CSSInfo}}</p>

<h2 id="Formal_syntax">Formal syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="Applying_a_right_border">Applying a right border</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;div&gt;
  This box has a border on the right side.
&lt;/div&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">div {
  border-right: 4px dashed blue;
  background-color: gold;
  height: 100px;
  width: 100px;
  font-weight: bold;
  text-align: center;
}
</pre>

<h4 id="Results">Results</h4>

<p>{{EmbedLiveSample('Applying_a_right_border')}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{cssxref("border")}}</li>
 <li>{{cssxref("border-block")}}</li>
 <li>{{cssxref("outline")}}</li>
</ul>
