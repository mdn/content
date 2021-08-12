---
title: '::-moz-focus-inner'
slug: 'Web/CSS/::-moz-focus-inner'
tags:
  - CSS
  - 'CSS:Mozilla Extensions'
  - Firefox
  - Mozilla
  - Non-standard
  - Pseudo-element
  - Reference
  - Selector
browser-compat: css.selectors.-moz-focus-inner
---
<div>{{CSSRef}}{{Non-standard_header}}</div>

<p>The <strong><code>::-moz-focus-inner</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> <a href="/en-US/docs/Web/CSS/Pseudo-elements">pseudo-element</a> is a <a href="/en-US/docs/Web/CSS/Mozilla_Extensions">Mozilla extension</a> that represents an inner focus ring of the {{HTMLElement("button")}} element as well as the {{HTMLElement("input/button","button")}}, {{HTMLElement("input/submit","submit")}}, {{HTMLElement("input/reset","reset")}}, and {{HTMLElement("input/color","color")}} types of the {{HTMLElement("input")}} element.</p>

<div class="note">
<p><strong>Note:</strong> Using <code>::-moz-focus-inner</code> with anything than the buttons that support it doesn't match anything and has no effect.</p>
</div>

<h2 id="Syntax">Syntax</h2>

{{csssyntax}}

<h2 id="Example">Example</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;input type="submit" value="Input"/&gt;
&lt;button type="submit"&gt;Button&lt;/button&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">button::-moz-focus-inner,
input[type="color"]::-moz-focus-inner,
input[type="reset"]::-moz-focus-inner,
input[type="button"]::-moz-focus-inner,
input[type="submit"]::-moz-focus-inner {
    padding-block-start: 0px;
    padding-inline-end: 2px;
    padding-block-end: 0px;
    padding-inline-start: 2px;
    border: 2px dotted red;
}
</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample("Example", 300, 50)}}</p>

<h2 id="Specifications">Specifications</h2>

<p>Not part of any standard.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/CSS/Mozilla_Extensions">Mozilla CSS extensions</a></li>
 <li>Related CSS properties:
  <ul>
   <li><code><a href="/en-US/docs/Web/CSS/-moz-user-focus">-moz-user-focus</a></code></li>
  </ul>
 </li>
 <li>Related CSS selectors:
  <ul>
   <li><code><a href="/en-US/docs/Web/CSS/:-moz-focusring">:-moz-focusring</a></code></li>
   <li><code><a href="/en-US/docs/Web/CSS/:focus">:focus</a></code></li>
   <li><code><a href="/en-US/docs/Web/CSS/:focus-visible">:focus-visible</a></code></li>
   <li><code><a href="/en-US/docs/Web/CSS/:focus-within">:focus-within</a></code></li>
  </ul>
 </li>
</ul>
