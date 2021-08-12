---
title: '::-moz-progress-bar'
slug: 'Web/CSS/::-moz-progress-bar'
tags:
  - CSS
  - 'CSS:Mozilla Extensions'
  - NeedsCompatTable
  - Non-standard
  - Pseudo-element
  - Reference
  - Selector
---
<div>{{CSSRef}}{{Non-standard_header}}</div>

<p>The <strong><code>::-moz-progress-bar</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> <a href="/en-US/docs/Web/CSS/Pseudo-elements">pseudo-element</a> is a <a href="/en-US/docs/Web/CSS/Mozilla_Extensions">Mozilla extension</a> that represents the progress bar inside a {{HTMLElement("progress")}} element. (The bar represents the amount of progress that has been made.)</p>

<p>If you want to select the unfinished part of {{HTMLElement("progress")}} in Mozilla, please select the {{HTMLElement("progress")}} directly.</p>

<h2 id="Syntax">Syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush:html;">&lt;progress value="30" max="100"&gt;30%&lt;/progress&gt;
&lt;progress max="100"&gt;Indeterminate&lt;/progress&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">::-moz-progress-bar {
  background-color: red;
}

/* Force indeterminate bars to have zero width */
:indeterminate::-moz-progress-bar {
  width: 0;
}</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample('Examples')}}</p>

<h2 id="Specifications">Specifications</h2>

<p>Not part of any standard.</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{HTMLElement("progress")}}</li>
 <li>{{ cssxref("::-ms-fill") }}</li>
 <li>{{ cssxref("::-webkit-progress-bar") }}</li>
 <li>{{ cssxref("::-webkit-progress-value") }}</li>
 <li>{{ cssxref("::-webkit-progress-inner-element") }}</li>
</ul>
