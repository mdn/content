---
title: counters()
slug: Web/CSS/counters()
tags:
  - CSS
  - CSS Counter
  - CSS Function
  - Function
  - Reference
browser-compat: css.types.counters
---
<p>{{CSSRef}}</p>

<p>The <strong><code>counters()</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> <a href="/en-US/docs/Web/CSS/CSS_Functions">function</a> enables nested counters, returning a concatenated string representing the current values of the named counters, if there are any. The <code>counters()</code> function has two forms: <code>counters(<var>name</var>, <var>string</var>)</code> or <code>counters(<var>name</var>, <var>string</var>, <var>style</var>)</code>. It is generally used with <a href="/en-US/docs/Web/CSS/Pseudo-elements">pseudo-elements</a>, but can be used, theoretically, anywhere a <code><a href="/en-US/docs/Web/CSS/string">&lt;string&gt;</a></code> value is supported. The generated text is the value of all counters with the given name, from outermost to innermost, separated by the specified string. The counters are rendered in the style indicated, defaulting to <code>decimal</code> if no style is specified.</p>

<pre class="brush: css">/* Simple usage  - style defaults to decimal */
counters(countername, '-');

/* changing the counter display */
counters(countername, '.', upper-roman)</pre>

<p>A <a href="/en-US/docs/Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters">counter</a> has no visible effect by itself. The <code>counters()</code> function (and {{cssxref("counter", "counter()")}} function) is what makes it useful by returning developer defined content.</p>

<div class="notecard note">
<p><strong>Note:</strong> The <code>counters()</code> function can be used with any CSS property, but support for properties other than {{CSSxRef("content")}} is experimental, and support for the type-or-unit parameter is sparse.</p>

<p>Check the <a href="#browser_compatibility">Browser compatibility table</a> carefully before using this in production.</p>
</div>

<h2 id="Syntax">Syntax</h2>

<h3 id="Values">Values</h3>

<dl>
 <dt>{{cssxref("&lt;custom-ident&gt;")}}</dt>
 <dd>A name identifying the counters, which is the same case-sensitive name used for the {{cssxref("counter-reset")}} and {{cssxref("counter-increment")}}. The name cannot start with two dashes and can't be <code>none</code>, <code>unset</code>, <code>initial</code>, or <code>inherit</code>.</dd>
 <dt><code>&lt;counter-style&gt;</code></dt>
 <dd>A counter style name or <code><a href="/en-US/docs/Web/CSS/symbols">symbols()</a></code> function, where a counter style name is a numeric, alphabetic, or symbolic simple predefined counter style, a complex longhand east Asian or Ethiopic predefined counter style, or other <a href="/en-US/docs/Web/CSS/CSS_Counter_Styles">predefined counter style</a>. If omitted, the counter-style defaults to decimal</dd>
 <dt>{{cssxref("&lt;string&gt;")}}</dt>
 <dd>Any number of text characters. Non-Latin characters must be encoded using their Unicode escape sequences: for example, <code>\000A9</code> represents the copyright symbol.</dd>
</dl>

<h3 id="Formal_syntax">Formal syntax</h3>

{{CSSSyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="default_value_compared_to_upper_Roman">default value compared to upper Roman</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html;">&lt;ol&gt;
  &lt;li&gt;
     &lt;ol&gt;
        &lt;li&gt;&lt;/li&gt;
        &lt;li&gt;&lt;/li&gt;
        &lt;li&gt;&lt;/li&gt;
      &lt;/ol&gt;
  &lt;/li&gt;
  &lt;li&gt;&lt;/li&gt;
  &lt;li&gt;&lt;/li&gt;
  &lt;li&gt;
     &lt;ol&gt;
        &lt;li&gt;&lt;/li&gt;
        &lt;li&gt;
           &lt;ol&gt;
              &lt;li&gt;&lt;/li&gt;
              &lt;li&gt;&lt;/li&gt;
              &lt;li&gt;&lt;/li&gt;
           &lt;/ol&gt;
        &lt;/li&gt;
      &lt;/ol&gt;
  &lt;/li&gt;
&lt;/ol&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css; highlight[2]">ol {
  counter-reset: listCounter;
}
li {
  counter-increment: listCounter;
}
li::marker {
   content:  counters(listCounter, '.', upper-roman) ') ';
}
li::before {
  content:  counters(listCounter, ".") " == " counters(listCounter, ".", lower-roman) ;
}</pre>

<h4 id="Result">Result</h4>

<p>{{EmbedLiveSample("default_value_compared_to_upper_Roman", "100%", 150)}}</p>

<h3 id="decimal-leading-zero_compared_to_lower-alpha">decimal-leading-zero compared to lower-alpha</h3>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html;">&lt;ol&gt;
  &lt;li&gt;
     &lt;ol&gt;
        &lt;li&gt;&lt;/li&gt;
        &lt;li&gt;&lt;/li&gt;
        &lt;li&gt;&lt;/li&gt;
      &lt;/ol&gt;
  &lt;/li&gt;
  &lt;li&gt;&lt;/li&gt;
  &lt;li&gt;&lt;/li&gt;
  &lt;li&gt;
     &lt;ol&gt;
        &lt;li&gt;&lt;/li&gt;
        &lt;li&gt;
           &lt;ol&gt;
              &lt;li&gt;&lt;/li&gt;
              &lt;li&gt;&lt;/li&gt;
              &lt;li&gt;&lt;/li&gt;
           &lt;/ol&gt;
        &lt;/li&gt;
      &lt;/ol&gt;
  &lt;/li&gt;
&lt;/ol&gt;</pre>

<h4 id="CSS_2">CSS</h4>

<pre class="brush: css; highlight[2]">ol {
  counter-reset: count;
}
li {
  counter-increment: count;
}
li::marker {
   content: counters(count, '.', upper-alpha) ') ';
}
li::before {
  content: counters(count, ".", <dfn>decimal-leading-zero</dfn>) " == " counters(count, ".", lower-alpha);
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
 <li>{{cssxref("counter-set")}}</li>
 <li>{{cssxref("counter-reset")}}</li>
 <li>{{cssxref("counter-increment")}}</li>
 <li>{{cssxref("@counter-style")}}</li>
 <li>CSS <code><a href="/en-US/docs/Web/CSS/counter_function">counter()</a></code> function</li>
 <li>{{cssxref("::marker")}}</li>
</ul>
