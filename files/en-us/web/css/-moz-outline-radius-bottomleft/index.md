---
title: '-moz-outline-radius-bottomleft'
slug: Web/CSS/-moz-outline-radius-bottomleft
tags:
  - CSS
  - CSS Property
  - NeedsCompatTable
  - NeedsContent
  - Non-standard
  - Reference
  - recipe:css-property
browser-compat: css.properties.-moz-outline-radius-bottomleft
---
<div>{{CSSRef}}</div>

<div>{{deprecated_header}}</div>

<p>In Mozilla applications, the <strong><code>-moz-outline-radius-bottomleft</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> property can be used to round the bottom-left corner of an element's {{cssxref("outline")}}.</p>

<h2 id="Syntax">Syntax</h2>

<p>The value of <code>-moz-outline-radius-bottomleft</code> is either a CSS {{cssxref("length", "&lt;length&gt;")}} or a <a href="/en-US/docs/Web/CSS/percentage">percentage</a> of the corresponding dimensions of the border box. The {{cssxref("calc()", "calc()")}} function may be used as well.</p>

<h3 id="Values">Values</h3>

<dl>
 <dt><code>&lt;length&gt;</code></dt>
 <dd>The radius of the circle defining the curvature of the bottom and left edges of the element, specified as a CSS {{cssxref("length", "&lt;length&gt;")}}.</dd>
 <dt><code>&lt;percentage&gt;</code></dt>
 <dd>The radius of the circle defining the rounding of the bottom-left corner of the element, specified as the <a href="/en-US/docs/Web/CSS/percentage">percentages</a> of the bottom and left sides of the border box.</dd>
</dl>

<h2 id="Formal_definition">Formal definition</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax">Formal syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="Rounding_a_outline">Rounding a outline</h3>

<p>Since this is a Firefox-only property, this example will not display the desired effect if you are viewing this in a browser other than Firefox.</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;p&gt;Look at this paragraph's bottom-left corner.&lt;/p&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">p {
  margin: 10px;
  border: solid cyan;
  outline: dotted green;
  -moz-outline-radius-bottomleft: 2em;
}</pre>

<h4 id="Result">Result</h4>

<p>{{EmbedLiveSample("Rounding_a_outline")}}</p>

<h2 id="Specifications">Specifications</h2>

<p>Not part of any standard.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>See the {{cssxref("-moz-outline-radius")}} property for more information.</li>
</ul>
