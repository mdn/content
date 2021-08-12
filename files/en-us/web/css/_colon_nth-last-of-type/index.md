---
title: ':nth-last-of-type()'
slug: 'Web/CSS/:nth-last-of-type'
tags:
  - CSS
  - Layout
  - Pseudo-class
  - Reference
  - Selector
  - Web
browser-compat: css.selectors.nth-last-of-type
---
<div>{{CSSRef}}</div>

<p>The <strong><code>:nth-last-of-type()</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> <a href="/en-US/docs/Web/CSS/Pseudo-classes">pseudo-class</a> matches elements of a given type, based on their position among a group of siblings, counting from the end.</p>

<pre class="brush: css no-line-numbers">/* Selects every fourth &lt;p&gt; element
   among any group of siblings,
   counting backwards from the last one */
p:nth-last-of-type(4n) {
  color: lime;
}</pre>

<div class="note">
<p><strong>Note:</strong> This pseudo-class is essentially the same as {{Cssxref(":nth-of-type")}}, except it counts items backwards from the <em>end</em>, not forwards from the beginning.</p>
</div>

<h2 id="Syntax">Syntax</h2>

<p>The <code>nth-last-of-type</code> pseudo-class is specified with a single argument, which represents the pattern for matching elements, counting from the end.</p>

<p>See {{Cssxref(":nth-last-child")}} for a more detailed explanation of its syntax.</p>

<h3 id="Formal_syntax">Formal syntax</h3>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div&gt;
  &lt;span&gt;This is a span.&lt;/span&gt;
  &lt;span&gt;This is another span.&lt;/span&gt;
  &lt;em&gt;This is emphasized.&lt;/em&gt;
  &lt;span&gt;Wow, this span gets limed!!!&lt;/span&gt;
  &lt;strike&gt;This is struck through.&lt;/strike&gt;
  &lt;span&gt;Here is one last span.&lt;/span&gt;
&lt;/div&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">span:nth-last-of-type(2) {
  background-color: lime;
}</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample('Examples')}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{Cssxref(":nth-last-child")}}, {{Cssxref(":nth-of-type")}}</li>
</ul>
