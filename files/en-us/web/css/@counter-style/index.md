---
title: '@counter-style'
slug: Web/CSS/@counter-style
tags:
  - At-rule
  - CSS
  - CSS Counter
  - Reference
  - counter
browser-compat: css.at-rules.counter-style
---
<p>{{CSSRef}}</p>

<p>The <strong><code>@counter-style</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> <a href="/en-US/docs/Web/CSS/At-rule">at-rule</a> lets you define counter styles that are not part of the predefined set of styles. A <code>@counter-style</code> rule defines how to convert a counter value into a string representation.</p>

<pre class="brush: css no-line-numbers">@counter-style thumbs {
  system: cyclic;
  symbols: "\1F44D";
  suffix: " ";
}

ul {
  list-style: thumbs;
}</pre>

<p>The initial version of CSS defined a set of useful counter styles. However, although more styles were added to this set of predefined styles over the years, this system proved too restrictive to fulfill the needs of worldwide typography. The <code>@counter-style</code> at-rule addresses this shortcoming in an open-ended manner, by allowing authors to define their own counter styles when the pre-defined styles aren't fitting their needs.</p>

<h2 id="Syntax">Syntax</h2>

<h3 id="Descriptors">Descriptors</h3>

<p>Each <code>@counter-style</code> is identified by a name and has a set of descriptors.</p>

<dl>
 <dt>{{cssxref("@counter-style/system", "system")}}</dt>
 <dd>Specifies the algorithm to be used for converting the integer value of a counter to a string representation.</dd>
</dl>

<dl>
 <dt>{{cssxref("@counter-style/negative", "negative")}}</dt>
 <dd>Lets the author specify symbols to be appended or prepended to the counter representation if the value is negative.</dd>
</dl>

<dl>
 <dt>{{cssxref("@counter-style/prefix", "prefix")}}</dt>
 <dd>Specifies a symbol that should be prepended to the marker representation. Prefixes are added to the representation in the final stage, so in the final representation of the counter, it comes before the negative sign.</dd>
</dl>

<dl>
 <dt>{{cssxref("@counter-style/suffix", "suffix")}}</dt>
 <dd>Specifies, similar to the prefix descriptor, a symbol that is appended to the marker representation. Suffixes come after the marker representation.</dd>
</dl>

<dl>
 <dt>{{cssxref("@counter-style/range", "range")}}</dt>
 <dd>Defines the range of values over which the counter style is applicable. If a counter style is used to represent a counter value outside of its ranges, the counter style will drop back to its fallback style.</dd>
</dl>

<dl>
 <dt>{{cssxref("@counter-style/pad", "pad")}}</dt>
 <dd>Is used when you need the marker representations to be of a minimum length. For example if you want the counters to start at 01 and go through 02, 03, 04 etc, then the pad descriptor is to be used. For representations larger than the specified pad value, the marker is constructed as normal.</dd>
</dl>

<dl>
 <dt>{{cssxref("@counter-style/fallback", "fallback")}}</dt>
 <dd>Specifies a system to fall back into if either the specified system is unable to construct the representation of a counter value or if the counter value outside the specified range. If the specified fallback also fails to represent the value, then the fallback style's fallback is used, if one is specified. If there are either no fallback systems described or if the chain of fallback systems are unable to represent a counter value, then it will ultimately fall back to the decimal style.</dd>
</dl>

<dl>
 <dt>{{cssxref("@counter-style/symbols", "symbols")}}</dt>
 <dd>Specifies the symbols that are to be used for the marker representations. Symbols can contain string, images or custom identifiers. How the symbols are used to construct the marker representation is up to the algorithm specified in the system descriptor. For example, if the system specified is fixed, then each of the N symbols specified in the descriptor will be used to represent the first N counter symbols. Once the specified set of symbols have exhausted, the fallback style will be used for the rest of the list.<br>
 <br>
 The below <code>@counter-style</code> rule uses images instead of character symbols. Image values for symbols is currently an 'at risk' feature, and is not implemented in any browser.
 <pre class="brush: css">@counter-style winners-list {
  system: fixed;
  symbols: url(gold-medal.svg) url(silver-medal.svg) url(bronze-medal.svg);
  suffix: " ";
}</pre>
 </dd>
</dl>

<dl>
 <dt>{{cssxref("@counter-style/additive-symbols", "additive-symbols")}}</dt>
 <dd>While the symbols specified in the symbols descriptor is used for constructing marker representation by most algorithms, some systems such as 'additive' rely on <em>additive tuples</em> described in this descriptor. Each additive tuple consists of a counter symbol and a non negative integer weight. The additive tuples must be specified in the descending order of their weights.</dd>
</dl>

<dl>
 <dt>{{cssxref("@counter-style/speak-as", "speak-as")}}</dt>
 <dd>Describes how to read out the counter style in speech synthesizers, such as screen readers. For example, the value of the marker symbol can be read out as numbers or alphabets for ordered lists or as audio cues for unordered lists, based on the value of this descriptor.</dd>
</dl>

<h2 id="Formal_syntax">Formal syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="Specifying_symbols_with_counter-style">Specifying symbols with counter-style</h3>

<pre class="brush: css">@counter-style circled-alpha {
  system: fixed;
  symbols: Ⓐ Ⓑ Ⓒ Ⓓ Ⓔ Ⓕ Ⓖ Ⓗ Ⓘ Ⓙ Ⓚ Ⓛ Ⓜ Ⓝ Ⓞ Ⓟ Ⓠ Ⓡ Ⓢ Ⓣ Ⓤ Ⓥ Ⓦ Ⓧ Ⓨ Ⓩ;
  suffix: " ";
}</pre>

<p>The above counter style rule can be applied to lists like this:</p>

<pre class="brush: css">.items {
  list-style: circled-alpha;
}
</pre>

<p>Which will produce lists like this:</p>

<p>Ⓐ One<br>
 Ⓑ Two<br>
 Ⓒ Three<br>
 Ⓓ Four<br>
 Ⓔ FIve<br>
 ...<br>
 ...<br>
 Ⓨ Twenty Five<br>
 Ⓩ Twenty Six<br>
 27 Twenty Seven<br>
 28 Twenty Eight<br>
 29 Twenty Nine<br>
 30 Thirty</p>

<p>See more examples on the <a href="https://mdn.github.io/css-examples/counter-style-demo/">demo page</a>.</p>

<h3>Ready-made counter styles</h3>

<p>Find a collection of over 100 <code>counter-style</code> code snippets in the <a href="https://www.w3.org/TR/predefined-counter-styles/">Ready-made Counter Styles</a> document. This document provides counter styles that meet the needs of languages and cultures around the world.</p>

<p>The <a href="https://r12a.github.io/app-counters/">Counter styles converter</a> pulls from this list to test and create copy and paste code for counter styles.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}, {{Cssxref("list-style-type")}}</li>
 <li>{{cssxref("symbols()", "symbols()")}}, the functional notation creating anonymous counter styles.</li>
 <li>CSS {{Cssxref("counter()")}} and {{Cssxref("counters()")}} functions</li>
 <li><a href="https://mdn.github.io/css-examples/counter-style-demo/">Counter style demo</a> (<a href="https://github.com/mdn/css-examples/tree/master/counter-style-demo">code</a>)</li>
</ul>
