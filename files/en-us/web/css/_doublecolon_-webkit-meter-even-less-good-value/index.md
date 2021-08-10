---
title: '::-webkit-meter-even-less-good-value'
slug: 'Web/CSS/::-webkit-meter-even-less-good-value'
tags:
  - '-webkit-meter-even-less-good-value'
  - CSS
  - Non-standard
  - Pseudo-element
  - Reference
  - Selector
browser-compat: css.selectors.-webkit-meter-even-less-good-value
---
<div>{{CSSRef}}{{Non-standard_header}}</div>

<p>The <strong><code>::-webkit-meter-even-less-good-value</code></strong> gives a red color to a {{htmlelement("meter")}} element when the value and the optimum attributes fall outside the low-high range, but in opposite zones. To illustrate, it applies when <em>value</em> &lt; <em>low</em> &lt; <em>high</em> &lt; <em>optimum</em> or <em>value</em> &gt; <em>high</em> &gt; <em>low</em> &gt; <em>optimum</em>.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: css">::-webkit-meter-even-less-good-value</pre>

<h2 id="Specifications">Specifications</h2>

<p>Not part of any standard.</p>

<h2 id="Examples">Examples</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;meter min="0" max="10" value="6"&gt;Score out of 10&lt;/meter&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">meter::-webkit-meter-even-less-good-value {
  background: linear-gradient(to bottom, #f77, #d44 45%, #d44 55%, #f77);
  height: 100%;
  box-sizing: border-box;
}</pre>

<h3 id="Result">Result</h3>

<p>{{ EmbedLiveSample('Examples', '100%', 50) }}</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<p>The pseudo-elements used by WebKit/Blink to style other parts of a {{htmlelement("meter")}} element are as follows:</p>

<ul>
 <li>{{cssxref("::-webkit-meter-inner-element")}}</li>
 <li>{{cssxref("::-webkit-meter-bar")}}</li>
 <li>{{cssxref("::-webkit-meter-optimum-value")}}</li>
 <li>{{cssxref("::-webkit-meter-suboptimum-value")}}</li>
</ul>
