---
title: suffix
slug: Web/CSS/@counter-style/suffix
tags:
  - '@counter-style'
  - At-rule descriptor
  - CSS
  - CSS Counter Styles
  - CSS Descriptor
  - Reference
browser-compat: css.at-rules.counter-style.suffix
---
<div>{{CSSRef}}</div>

<p>The <code><strong>suffix</strong></code> descriptor of the{{cssxref("@counter-style")}} rule specifies content that will be appended to the marker representation.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: css">/* &lt;symbol&gt; values */
suffix: "";
suffix: ") ";
suffix: url(bullet.png);
</pre>

<h3 id="Values">Values</h3>

<dl>
 <dt><code>&lt;symbol&gt;</code></dt>
 <dd>Specifies a <code>&lt;symbol&gt;</code> that is appended to the marker representation. It may be a {{cssxref("&lt;string&gt;")}}, {{cssxref("&lt;image&gt;")}}, or {{cssxref("&lt;custom-ident&gt;")}}.</dd>
</dl>

<h2 id="Formal_definition">Formal definition</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax">Formal syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="Setting_a_suffix_for_a_counter">Setting a suffix for a counter</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;ul class="choices"&gt;
  &lt;li&gt;One&lt;/li&gt;
  &lt;li&gt;Two&lt;/li&gt;
  &lt;li&gt;Three&lt;/li&gt;
  &lt;li&gt;None of the above&lt;/li&gt;
&lt;/ul&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">@counter-style options {
  system: fixed;
  symbols: A B C D;
  suffix: ") ";
}

.choices {
  list-style: options;
}</pre>

<h4 id="Result">Result</h4>

<p>{{ EmbedLiveSample('Setting_a_suffix_for_a_counter')}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}</li>
 <li>{{cssxref("symbols()", "symbols()")}}, the functional notation creating anonymous counter styles</li>
</ul>
