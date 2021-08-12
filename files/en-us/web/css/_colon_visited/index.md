---
title: ':visited'
slug: 'Web/CSS/:visited'
tags:
  - CSS
  - Layout
  - Pseudo-class
  - Reference
  - Selector
  - Web
browser-compat: css.selectors.visited
---
<div>{{CSSRef}}</div>

<p>The <strong><code>:visited</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> <a href="/en-US/docs/Web/CSS/Pseudo-classes">pseudo-class</a> represents links that the user has already visited. For privacy reasons, the styles that can be modified using this selector are very limited.</p>

<pre class="brush: css no-line-numbers">/* Selects any &lt;a&gt; that has been visited */
a:visited {
  color: green;
}</pre>

<p>Styles defined by the <code>:visited</code> pseudo-class will be overridden by any subsequent link-related pseudo-class ({{cssxref(":link")}}, {{cssxref(":hover")}}, or {{cssxref(":active")}}) that has at least equal specificity. To style links appropriately, put the <code>:visited</code> rule after the <code>:link</code> rule but before the <code>:hover</code> and <code>:active</code> rules, as defined by the <em>LVHA-order</em>: <code>:link</code> — <code>:visited</code> — <code>:hover</code> — <code>:active</code>.</p>

<h2 id="Privacy_restrictions">Privacy restrictions</h2>

<p>For privacy reasons, browsers strictly limit which styles you can apply using this pseudo-class, and how they can be used:</p>

<ul>
 <li>Allowable CSS properties are {{ cssxref("color") }}, {{ cssxref("background-color") }}, {{ cssxref("border-color") }}, {{ cssxref("border-bottom-color") }}, {{ cssxref("border-left-color") }}, {{ cssxref("border-right-color") }}, {{ cssxref("border-top-color") }}, {{ cssxref("column-rule-color") }}, {{ cssxref("outline-color") }}, {{ cssxref("text-decoration-color") }}, and {{ cssxref("text-emphasis-color") }}.</li>
 <li>Allowable SVG attributes are {{SVGAttr("fill")}} and {{SVGAttr("stroke")}}.</li>
 <li>The alpha component of the allowed styles will be ignored. The alpha component of the element's non-<code>:visited</code> state will be used instead, except when that component is <code>0</code>, in which case the style set in <code>:visited</code> will be ignored entirely.</li>
 <li>Although these styles can change the appearance of colors to the end user, the {{domxref("window.getComputedStyle")}} method will lie and always return the value of the non-<code>:visited</code> color.</li>
 <li>The <code><a href="/en-US/docs/Web/HTML/Element/link">&lt;link&gt;</a></code> element is never matched by <code>:visited</code>.</li>
</ul>

<div class="note">
<p><strong>Note:</strong> For more information on these limitations and the reasons behind them, see <a href="/en-US/docs/Web/CSS/Privacy_and_the_:visited_selector">Privacy and the :visited selector</a>.</p>
</div>

<h2 id="Syntax">Syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<p>Properties that would otherwise have no color or be transparent cannot be modified with <code>:visited</code>. Of the properties that can be set with this pseudo-class, your browser probably has a default value for <code>color</code> and <code>column-rule-color</code> only. Thus, if you want to modify the other properties, you'll need to give them a base value outside the <code>:visited</code> selector.</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;a href="#test-visited-link"&gt;Have you visited this link yet?&lt;/a&gt;&lt;br&gt;
&lt;a href=""&gt;You've already visited this link.&lt;/a&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">a {
  /* Specify non-transparent defaults to certain properties,
     allowing them to be styled with the :visited state */
  background-color: white;
  border: 1px solid white;
}

a:visited {
  background-color: yellow;
  border-color: hotpink;
  color: hotpink;
}</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample("Examples")}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/CSS/Privacy_and_the_:visited_selector">Privacy and the :visited selector</a></li>
 <li>Link-related pseudo-classes: {{cssxref(":link")}}, {{cssxref(":active")}}, {{cssxref(":hover")}}</li>
</ul>
