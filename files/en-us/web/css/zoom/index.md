---
title: zoom
slug: Web/CSS/zoom
tags:
  - CSS
  - CSS Property
  - Non-standard
  - Reference
  - 'recipe:css-property'
browser-compat: css.properties.zoom
---
<div>{{CSSRef}}{{Non-standard_header}}</div>

<p>The non-standard <strong><dfn><code>zoom</code></dfn></strong> <a href="/en-US/docs/Web/CSS">CSS</a> property can be used to control the magnification level of an element. {{cssxref("transform-function/scale", "transform: scale()")}} should be used instead of this property, if possible. However, unlike CSS Transforms, <code>zoom</code> affects the layout size of the element.</p>

<pre class="brush: css no-line-numbers">/* Keyword values */
zoom: normal;
zoom: reset;

/* &lt;percentage&gt; values */
zoom: 50%;
zoom: 200%;

/* &lt;number&gt; values */
zoom: 1.1;
zoom: 0.7;

/* Global values */
zoom: inherit;
zoom: initial;
zoom: unset;
</pre>

<h2 id="Syntax">Syntax</h2>

<h3 id="Values">Values</h3>

<dl>
	<dt><code>normal</code></dt>
	<dd>Render this element at its normal size.</dd>
	<dt><code>reset</code> {{non-standard_inline}}</dt>
	<dd>Do not (de)magnify this element if the user applies non-pinch-based zooming (e.g. by pressing <kbd>Ctrl</kbd>-<kbd>-</kbd> or <kbd>Ctrl</kbd>+<kbd>+</kbd> keyboard shortcuts) to the document. Only supported by WebKit (and possibly Blink).</dd>
	<dt>{{cssxref("&lt;percentage&gt;")}}</dt>
	<dd>Zoom factor. <code>100%</code> is equivalent to <code>normal</code>. Values larger than <code>100%</code> zoom in. Values smaller than <code>100%</code> zoom out.</dd>
	<dt>{{cssxref("&lt;number&gt;")}}</dt>
	<dd>Zoom factor. Equivalent to the corresponding percentage (<code>1.0</code> = <code>100%</code> = <code>normal</code>). Values larger than <code>1.0</code> zoom in. Values smaller than <code>1.0</code> zoom out.</dd>
</dl>

<h2 id="Formal_definition">Formal definition</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax">Formal syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="First_example">First example</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;p class="small"&gt;Small&lt;/p&gt;
&lt;p class="normal"&gt;Normal&lt;/p&gt;
&lt;p class="big"&gt;Big&lt;/p&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">p.small {
  zoom: 75%;
}
p.normal {
  zoom: normal;
}
p.big {
  zoom: 2.5;
}
p {
  display: inline-block;
}
p:hover {
  zoom: reset;
}
</pre>

<h4 id="Result">Result</h4>

<p>{{EmbedLiveSample('First_example')}}</p>

<h3 id="Second_example">Second example</h3>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html">&lt;div id="a" class="circle"&gt;&lt;/div&gt;
&lt;div id="b" class="circle"&gt;&lt;/div&gt;
&lt;div id="c" class="circle"&gt;&lt;/div&gt;</pre>

<h4 id="CSS_2">CSS</h4>

<pre class="brush: css">div.circle {
  width: 25px;
  height: 25px;
  border-radius: 100%;
  text-align: center;
  vertical-align: middle;
  display: inline-block;
  zoom: 1.5;
}
div#a {
  background-color: gold;
  zoom: normal;
}
div#b {
  background-color: green;
  zoom: 200%;
}
div#c {
  background-color: blue;
  zoom: 2.9;
}
</pre>

<h4 id="Result_2">Result</h4>

<p>{{EmbedLiveSample('Second_example')}}</p>

<h2 id="Specifications">Specifications</h2>

<p>Not part of any standard. This property originated in Internet Explorer. Apple has <a href="https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-SW15">a description in the Safari CSS Reference</a>. Rossen Atanassov of Microsoft has <a href="http://cdn.rawgit.com/atanassov/css-zoom/master/Overview.html">an unofficial draft specification proposal on GitHub</a>.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
	<li><a href="https://css-tricks.com/almanac/properties/z/zoom/"><code>zoom</code> entry in CSS-Tricks' CSS Almanac</a></li>
	<li>The <a href="/en-US/docs/Web/CSS/@viewport/zoom"><code>zoom</code> viewport descriptor</a>, for use with <a href="/en-US/docs/Web/CSS/@viewport"><code>@viewport</code></a></li>
	<li><a href="https://bugzilla.mozilla.org/show_bug.cgi?id=390936">Bug 390936: Implement Internet Explorer <code>zoom</code> property for CSS </a>on the Firefox issue tracker Bugzilla</li>
</ul>
