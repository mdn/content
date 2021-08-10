---
title: text-orientation
slug: Web/CSS/text-orientation
tags:
  - CSS
  - CSS Property
  - CSS Writing Modes
  - Reference
  - 'recipe:css-property'
browser-compat: css.properties.text-orientation
---
<div>{{CSSRef}}</div>

<p>The <strong><code>text-orientation</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> property sets the orientation of the text characters in a line. It only affects text in vertical mode (when {{cssxref("writing-mode")}} is not <code>horizontal-tb</code>). It is useful for controlling the display of languages that use vertical script, and also for making vertical table headers.</p>

<div>{{EmbedInteractiveExample("pages/css/text-orientation.html")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush:css no-line-numbers">/* Keyword values */
text-orientation: mixed;
text-orientation: upright;
text-orientation: sideways-right;
text-orientation: sideways;
text-orientation: use-glyph-orientation;

/* Global values */
text-orientation: inherit;
text-orientation: initial;
text-orientation: initial;
text-orientation: unset;
</pre>

<p>The <code>text-orientation</code> property is specified as a single keyword from the list below.</p>

<h3 id="Values">Values</h3>

<dl>
 <dt><code>mixed</code></dt>
 <dd>Rotates the characters of horizontal scripts 90° clockwise. Lays out the characters of vertical scripts naturally. Default value.</dd>
 <dt><code>upright</code></dt>
 <dd>Lays out the characters of horizontal scripts naturally (upright), as well as the glyphs for vertical scripts. Note that this keyword causes all characters to be considered as left-to-right: the used value of {{cssxref("direction")}} is forced to be <code>ltr</code>.</dd>
 <dt><code>sideways</code></dt>
 <dd>Causes characters to be laid out as they would be horizontally, but with the whole line rotated 90° clockwise.</dd>
 <dt><code>sideways-right</code></dt>
 <dd>An alias to <code>sideways</code> that is kept for compatibility purposes.</dd>
 <dt><code>use-glyph-orientation</code></dt>
 <dd>On SVG elements, this keyword leads to use the value of the deprecated SVG properties <code>glyph-orientation-vertical</code> and <code>glyph-orientation-horizontal</code>.</dd>
</dl>

<h2 id="Formal_definition">Formal definition</h2>

<p>{{CSSInfo}}</p>

<h2 id="Formal_syntax">Formal syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p&gt;Lorem ipsum dolet semper quisquam.&lt;/p&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">p {
  writing-mode: vertical-rl;
  text-orientation: upright;
}</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample('Examples')}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>The other vertical-script related CSS properties: {{cssxref("writing-mode")}}, {{cssxref("text-combine-upright")}}, and {{cssxref("unicode-bidi")}}.</li>
 <li><a href="/docs/Web/CSS/CSS_Logical_Properties">CSS Logical properties</a></li>
 <li><a href="https://www.w3.org/International/articles/vertical-text/">Styling vertical text (Chinese, Japanese, Korean and Mongolian)</a></li>
 <li>Extensive browsers support test results: <a href="https://w3c.github.io/i18n-tests/results/horizontal-in-vertical.html#text_orientation">https://w3c.github.io/i18n-tests/results/horizontal-in-vertical.html#text_orientation</a></li>
</ul>
