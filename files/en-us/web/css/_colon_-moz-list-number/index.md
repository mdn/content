---
title: '::-moz-list-number'
slug: 'Web/CSS/:-moz-list-number'
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

<p>The <strong><code>::-moz-list-number</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> <a href="/en-US/docs/Web/CSS/Pseudo-elements">pseudo-element</a> is a <a href="/en-US/docs/Web/CSS/Mozilla_Extensions">Mozilla extension</a> that represents the marker (typically a number) of a list item ({{HTMLElement("li")}}) in an ordered list ({{HTMLElement("ol")}}).</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: css">li::-moz-list-number
</pre>

<h2 id="Examples">Examples</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush:html">&lt;ol&gt;
  &lt;li&gt;First item&lt;/li&gt;
  &lt;li&gt;Second item&lt;/li&gt;
  &lt;li&gt;Third item&lt;/li&gt;
&lt;/ol&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush:css">li::-moz-list-number {
  font-style: italic;
  font-weight: bold;
}
</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample("Examples","auto","auto","/@api/deki/files/4668/=moz-list-number.png")}}</p>

<h2 id="Specifications">Specifications</h2>

<p>Not part of any standard.</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{cssxref(":-moz-list-bullet")}}</li>
 <li>{{cssxref("::marker")}}</li>
</ul>
