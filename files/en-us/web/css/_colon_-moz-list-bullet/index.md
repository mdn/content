---
title: '::-moz-list-bullet'
slug: 'Web/CSS/:-moz-list-bullet'
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

<p>The <strong><code>::-moz-list-bullet</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> <a href="/en-US/docs/Web/CSS/Pseudo-elements">pseudo-element</a> is a <a href="/en-US/docs/Web/CSS/Mozilla_Extensions">Mozilla extension</a> that represents the marker (typically a bullet) of a list item ({{htmlelement("li")}}) in an unordered list ({{htmlelement("ul")}}).</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: css">li::-moz-list-bullet</pre>

<h2 id="Examples">Examples</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;ul&gt;
  &lt;li&gt;Item 1&lt;/li&gt;
  &lt;li&gt;Item 2&lt;/li&gt;
  &lt;li&gt;Item 3&lt;/li&gt;
&lt;/ul&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">::-moz-list-bullet {
  color: red;
  font-size: 1.5em;
}</pre>

<h3 id="Result">Result</h3>

<p>{{ EmbedLiveSample('Examples', '', '', '', 'Web/CSS/:-moz-list-bullet') }}</p>

<h2 id="Specifications">Specifications</h2>

<p>Not part of any standard.</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{cssxref(":-moz-list-number")}}</li>
 <li>{{cssxref("::marker")}}</li>
</ul>
