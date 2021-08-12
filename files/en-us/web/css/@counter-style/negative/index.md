---
title: negative
slug: Web/CSS/@counter-style/negative
tags:
  - '@counter-style'
  - At-rule descriptor
  - CSS
  - CSS Descriptor
  - Reference
browser-compat: css.at-rules.counter-style.negative
---
<div>{{CSSRef}}</div>

<p>When defining custom counter styles, the <strong><code>negative</code></strong> descriptor lets you alter the representations of negative counter values, by providing a way to specify symbols to be appended or prepended to the counter representation when the value is negative.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: css no-line-numbers">/* &lt;symbol&gt; values */
negative: "-";       /* Prepends '-' if value is negative */
negative: "(" ")";   /* Surrounds value by '(' and ')' if it is negative */
</pre>

<h3 id="Values">Values</h3>

<dl>
 <dt>first <code>&lt;symbol&gt;</code></dt>
 <dd>This symbol will be prepended to the representation when the counter is negative.</dd>
 <dt>second <code>&lt;symbol&gt;</code></dt>
 <dd>If present, this symbol will be appended to the representation when the counter is negative.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>If the counter value is negative, the symbol provided as value for the descriptor is prepended to the counter representation; and a second symbol if specified, will be appended to the representation. The negative descriptor has effect only if the <code>system</code> value is <code>symbolic</code>, <code>alphabetic</code>, <code>numeric</code>, <code>additive</code>, or <code>extends</code>, if the extended counter style itself uses a negative sign. If the negative descriptor is specified for other systems that don't support negative counter values, then the descriptor is ignored.</p>

<h2 id="Formal_definition">Formal definition</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax">Formal syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="Rendering_negative_counters">Rendering negative counters</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;ol class="list" start="-3"&gt;
  &lt;li&gt;One&lt;/li&gt;
  &lt;li&gt;Two&lt;/li&gt;
  &lt;li&gt;Three&lt;/li&gt;
  &lt;li&gt;Four&lt;/li&gt;
  &lt;li&gt;Five&lt;/li&gt;
&lt;/ol&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">@counter-style neg {
  system: numeric;
  symbols: "0" "1" "2" "3" "4" "5" "6" "7" "8" "9";
  negative: "(-" ")";
}

.list {
  list-style: neg;
}</pre>

<h4 id="Result">Result</h4>

<p>{{ EmbedLiveSample('Rendering_negative_counters', '', '', '', 'Web/CSS/@counter-style/negative') }}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}</li>
 <li>{{cssxref("symbols()", "symbols()")}}, the functional notation creating anonymous counter styles.</li>
</ul>
