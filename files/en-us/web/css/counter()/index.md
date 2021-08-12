---
title: counter()
slug: Web/CSS/counter()
tags:
  - CSS
  - CSS Counter
  - CSS Function
  - Function
  - Reference
browser-compat: css.types.counter
---
<p>{{CSSRef}}</p>

<p>The <strong><code>counter()</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> <a href="/en-US/docs/Web/CSS/CSS_Functions">function</a> returns a string representing the current value of the named counter, if there is one. It is generally used with <a href="/en-US/docs/Web/CSS/Pseudo-elements">pseudo-elements</a>, but can be used, theoretically, anywhere a <code><a href="/en-US/docs/Web/CSS/string">&lt;string&gt;</a></code> value is supported.</p>

<pre class="brush: css">/* Simple usage */
counter(countername);

/* changing the counter display */
counter(countername, upper-roman)</pre>

<p>A <a href="/en-US/docs/Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters">counter</a> has no visible effect by itself. The <code>counter()</code> function (and {{cssxref("counters", "counters()")}} function) is what makes it useful by returning developer defined strings (or images).</p>

<div class="notecard note">
<p><strong>Note:</strong> The <code>counter()</code> function can be used with any CSS property, but support for properties other than {{CSSxRef("content")}} is experimental, and support for the type-or-unit parameter is sparse.</p>

<p>Check the <a href="#browser_compatibility">Browser compatibility table</a> carefully before using this in production.</p>
</div>

<h2 id="Syntax">Syntax</h2>

<h3 id="Values">Values</h3>

<dl>
 <dt>{{cssxref("&lt;custom-ident&gt;")}}</dt>
 <dd>A name identifying the counter, which is the same case-sensitive name used for the {{cssxref("counter-reset")}} and {{cssxref("counter-increment")}}. The name cannot start with two dashes and can't be <code>none</code>, <code>unset</code>, <code>initial</code>, or <code>inherit</code>.</dd>
 <dt><code>&lt;counter-style&gt;</code></dt>
 <dd>A {{cssxref("&lt;list-style-type&gt;")}} name, {{cssxref("&lt;@counter-style&gt;")}} name or {{cssxref("symbols()")}} function, where a counter style name is a <code>numeric</code>, <code>alphabetic</code>, or <code>symbolic</code> simple predefined counter style, a complex longhand east Asian or Ethiopic predefined counter style, or other <a href="/en-US/docs/Web/CSS/CSS_Counter_Styles">predefined counter style</a>. If omitted, the counter-style defaults to <code>decimal</code>.</dd>
</dl>

<h3 id="Formal_syntax">Formal syntax</h3>

{{CSSSyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="default_value_compared_to_upper_Roman">default value compared to upper Roman</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html;">&lt;ol&gt;
  &lt;li&gt;&lt;/li&gt;
  &lt;li&gt;&lt;/li&gt;
  &lt;li&gt;&lt;/li&gt;
&lt;/ol&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css; highlight[2]">ol {
  counter-reset: listCounter;
}
li {
  counter-increment: listCounter;
}
li::after {
  content: "[" counter(listCounter) "] == ["
               counter(listCounter, upper-roman) "]";
}</pre>

<h4 id="Result">Result</h4>

<p>{{EmbedLiveSample("default_value_compared_to_upper_Roman", "100%", 150)}}</p>

<h3 id="decimal-leading-zero_compared_to_lower-alpha"><dfn>decimal-leading-zero</dfn> compared to lower-alpha</h3>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html;">&lt;ol&gt;
  &lt;li&gt;&lt;/li&gt;
  &lt;li&gt;&lt;/li&gt;
  &lt;li&gt;&lt;/li&gt;
&lt;/ol&gt;</pre>

<h4 id="CSS_2">CSS</h4>

<pre class="brush: css; highlight[2]">ol {
  counter-reset: count;
}
li {
  counter-increment: count;
}
li::after {
  content: "[" counter(count, <dfn>decimal-leading-zero</dfn>) "] == ["
               counter(count, lower-alpha) "]";
}</pre>

<h4 id="Result_2">Result</h4>

<p>{{EmbedLiveSample("decimal-leading-zero_compared_to_lower-alpha", "100%", 150)}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters">Using CSS Counters</a></li>
 <li>{{cssxref("counter-reset")}}</li>
 <li>{{cssxref("counter-set")}}</li>
 <li>{{cssxref("counter-increment")}}</li>
 <li>{{cssxref("@counter-style")}}</li>
 <li>CSS <code><a href="/en-US/docs/Web/CSS/counters">counters()</a></code> function</li>
</ul>
