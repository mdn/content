---
title: '::-webkit-meter-bar'
slug: Web/CSS/::-webkit-meter-bar
tags:
  - '-webkit-meter-bar'
  - CSS
  - Non-standard
  - Pseudo-element
  - Reference
  - Selector
  - WebKit
browser-compat: css.selectors.-webkit-meter-bar
---
<div>{{CSSRef}}{{Non-standard_header}}</div>

<p>The <strong><code>::-webkit-meter-bar</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> <a href="/en-US/docs/Glossary/Pseudo-class">pseudo-class</a> is a <a href="/en-US/docs/Web/CSS/WebKit_Extensions">WebKit extension</a> that represents the meter bar in a {{HTMLElement("meter")}} element.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: css">::-webkit-meter-bar</pre>

<h2 id="Specifications">Specifications</h2>

<p>Not part of any standard.</p>

<h2 id="Examples">Examples</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;meter min="0" max="10" value="6"&gt;Score out of 10&lt;/meter&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">meter {
  /* Reset the default appearance */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

meter::-webkit-meter-bar {
  background: #eee;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2) inset;
  border-radius: 3px;
}</pre>

<h3 id="Result">Result</h3>

<p>{{ EmbedLiveSample('Examples') }}</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>The pseudo-elements used by WebKit/Blink to style other parts of a {{htmlelement("meter")}} element are as follows:
  <ul>
   <li>{{cssxref("::-webkit-meter-inner-element")}}</li>
   <li>{{cssxref("::-webkit-meter-even-less-good-value")}}</li>
   <li>{{cssxref("::-webkit-meter-optimum-value")}}</li>
   <li>{{cssxref("::-webkit-meter-suboptimum-value")}}</li>
  </ul>
 </li>
 <li><a href="/en-US/docs/Web/CSS/WebKit_Extensions">WebKit CSS extensions</a></li>
</ul>
