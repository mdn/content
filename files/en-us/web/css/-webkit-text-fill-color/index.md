---
title: '-webkit-text-fill-color'
slug: Web/CSS/-webkit-text-fill-color
tags:
  - CSS
  - CSS Property
  - Non-standard
  - Reference
  - 'recipe:css-property'
browser-compat: css.properties.-webkit-text-fill-color
---
<div>{{CSSRef}}{{Non-standard_header}}</div>

<p>The <strong><code>-webkit-text-fill-color</code></strong> CSS property specifies the fill <a href="/en-US/docs/Web/CSS/color_value">color</a> of characters of text. If this property is not set, the value of the {{cssxref("color")}} property is used.</p>

<pre class="brush: css no-line-numbers">/* &lt;color&gt; values */
-webkit-text-fill-color: red;
-webkit-text-fill-color: #000000;
-webkit-text-fill-color: rgb(100, 200, 0);

/* Global values */
-webkit-text-fill-color: inherit;
-webkit-text-fill-color: initial;
-webkit-text-fill-color: unset;
</pre>

<h2 id="Syntax">Syntax</h2>

<h3 id="Values">Values</h3>

<dl>
 <dt><code>&lt;color&gt;</code></dt>
 <dd>The foreground fill color of the element's text content.</dd>
</dl>

<h2 id="Formal_definition">Formal definition</h2>

<p>{{CSSInfo}}</p>

<h2 id="Formal_syntax">Formal syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="Changing_the_fill_color">Changing the fill color</h3>

<h4 id="CSS">CSS</h4>

<pre class="brush: css; highlight[4]">p {
  margin: 0;
  font-size: 3em;
  -webkit-text-fill-color: green;
}
</pre>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;p&gt;This text is green.&lt;/p&gt;
</pre>

<h4 id="Results">Results</h4>

<p>{{EmbedLiveSample("Changing_the_fill_color", "380px", "60px")}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="https://www.webkit.org/blog/85/introducing-text-stroke/">Surfin' Safari blog post announcing this feature</a></li>
 <li><a href="https://css-tricks.com/adding-stroke-to-web-text/">CSS-Tricks article explaining this feature</a></li>
 <li>{{cssxref("-webkit-text-stroke-color")}}</li>
 <li>{{cssxref("-webkit-text-stroke-width")}}</li>
 <li>{{cssxref("-webkit-text-stroke")}}</li>
</ul>
