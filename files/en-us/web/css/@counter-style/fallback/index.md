---
title: fallback
slug: Web/CSS/@counter-style/fallback
tags:
  - '@counter-style'
  - At-rule descriptor
  - CSS
  - CSS Counter Styles
  - CSS Descriptor
  - Reference
browser-compat: css.at-rules.counter-style.fallback
---
<div>{{CSSRef}}</div>

<p>The <strong><code>fallback</code></strong> descriptor can be used to specify a counter style to fall back to if the current counter style cannot create a marker representation for a particular counter value.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: css">/* Keyword values */
fallback: lower-alpha;
fallback: custom-gangnam-style;
</pre>

<h2 id="Description">Description</h2>

<p>If the specified fallback style is also unable to construct a representation, then its fallback style will be used. If a valid fallback style is not specified, it defaults to <code>decimal</code>.</p>

<p>A couple of scenarios where a fallback style will be used are:</p>

<ul>
 <li>When the {{cssxref('range')}} descriptor is specified for a counter style, the fallback style will be used to represent values that fall outside the range.</li>
 <li>When the <code>fixed</code> {{cssxref('system')}} is used and there are not enough symbols to cover all the list items, the fallback style will be used for the rest of the list items.</li>
</ul>

<h2 id="Formal_definition">Formal definition</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax">Formal syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="Specifying_a_fallback_counter_style">Specifying a fallback counter style</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;ul class="list"&gt;
  &lt;li&gt;One&lt;/li&gt;
  &lt;li&gt;Two&lt;/li&gt;
  &lt;li&gt;Three&lt;/li&gt;
  &lt;li&gt;Four&lt;/li&gt;
  &lt;li&gt;Five&lt;/li&gt;
&lt;/ul&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">@counter-style fallback-example {
  system: fixed; symbols: "\24B6" "\24B7" "\24B8";
  fallback: upper-alpha;
}

.list {
  list-style: fallback-example;
}</pre>

<h4 id="Result">Result</h4>

<p>{{ EmbedLiveSample('Specifying_a_fallback_counter_style') }}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}</li>
 <li>{{cssxref("symbols", "symbols()")}}: the functional notation creating anonymous counter styles</li>
</ul>
