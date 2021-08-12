---
title: '-moz-orient'
slug: Web/CSS/-moz-orient
tags:
  - CSS
  - CSS Property
  - Non-standard
  - Reference
  - 'recipe:css-property'
browser-compat: css.properties.-moz-orient
---
<div>{{CSSRef}}{{Non-standard_header}}</div>

<p>The <strong><code>-moz-orient</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> property specifies the orientation of the element to which it's applied.</p>

<h2 id="Syntax">Syntax</h2>

<p>The <code>-moz-orient</code> property is specified as one of the keyword values chosen from the list below.</p>

<h3 id="Values">Values</h3>

<dl>
 <dt><code>inline</code></dt>
 <dd>The element is rendered in the same direction as the axis of the text: horizontally for horizontal writing modes, vertically for vertical writing modes.</dd>
 <dt><code>block</code></dt>
 <dd>The element is rendered orthogonally to the axis of the text: vertically for horizontal writing modes, horizontal for vertical writing modes.</dd>
 <dt><code>horizontal</code></dt>
 <dd>The element is rendered horizontally.</dd>
 <dt><code>vertical</code></dt>
 <dd>The element is rendered vertically.</dd>
</dl>

<h2 id="Formal_definition">Formal definition</h2>

<p>{{CSSInfo}}</p>

<h2 id="Formal_syntax">Formal syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p&gt;
  The following progress meter
  is horizontal (the default):
&lt;/p&gt;
&lt;progress max="100" value="75"&gt;&lt;/progress&gt;

&lt;p&gt;
 The following progress meter
 is vertical:
&lt;/p&gt;
&lt;progress class="vert" max="100" value="75"&gt;&lt;/progress&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">.vert {
  -moz-orient: vertical;
  width: 16px;
  height: 150px;
}</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample("Examples","200","360")}}</p>

<h2 id="Specifications">Specifications</h2>

<p>Not part of any standard. Though <a href="https://lists.w3.org/Archives/Public/www-style/2014Jun/0396.html">submitted</a> to the W3C, with positive initial feedback, this property is not yet part of any specification; currently, this is a Mozilla-specific extension (that is, <code>-moz-orient</code>).</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{cssxref("box-orient")}}</li>
</ul>
