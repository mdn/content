---
title: ':blank'
slug: 'Web/CSS/:blank'
tags:
  - ':blank'
  - CSS
  - CSS Selectors
  - Draft
  - Experimental
  - NeedsContent
  - NeedsExample
  - Pseudo-class
  - Selector
browser-compat: css.selectors.blank
---
<p>{{CSSRef}}{{SeeCompatTable}}</p>

<div class="notecard note">
<p><strong>Note:</strong> The <code>:blank</code> selector is considered at risk, as the CSSWG keeps changing it.</p>

<p>See <a href="https://github.com/w3c/csswg-drafts/issues/1967" title="[selectors] decide on :blank">CSSWG issue #1967</a>.</p>
</div>

<p>The <strong><code>:blank</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> <a href="/en-US/docs/Web/CSS/Pseudo-classes">pseudo-class</a> selects empty user input elements (e.g. {{HTMLElement("input")}} or {{HTMLElement("textarea")}}).</p>

<h2 id="Syntax">Syntax</h2>

{{CSSSyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="Simple_blank_example">Simple :blank example</h3>

<p>In eventual supporting browsers, the <code>:blank</code> pseudo-class will enable developers to highlight in some way input controls that are not required, but still have no content filled in, perhaps as a reminder to users.</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;textarea&gt;&lt;/textarea&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">textarea:blank {
  border: 3px solid red;
}</pre>

<h4 id="Result">Result</h4>

<p>{{EmbedLiveSample('Simple_blank_example', '100%', 150)}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{CSSxRef(":empty")}}</li>
</ul>
