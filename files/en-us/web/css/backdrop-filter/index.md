---
title: backdrop-filter
slug: Web/CSS/backdrop-filter
tags:
  - CSS
  - CSS Property
  - Graphics
  - Layout
  - NeedsContent
  - Reference
  - SVG
  - SVG Filter
  - Web
  - 'recipe:css-property'
browser-compat: css.properties.backdrop-filter
---
<div>{{CSSRef}}</div>

<p>The <strong><code>backdrop-filter</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> property lets you apply graphical effects such as blurring or color shifting to the area behind an element. Because it applies to everything <em>behind</em> the element, to see the effect you must make the element or its background at least partially transparent.</p>

<pre class="brush: css no-line-numbers">/* Keyword value */
backdrop-filter: none;

/* URL to SVG filter */
backdrop-filter: url(commonfilters.svg#filter);

/* &lt;filter-function&gt; values */
backdrop-filter: blur(2px);
backdrop-filter: brightness(60%);
backdrop-filter: contrast(40%);
backdrop-filter: drop-shadow(4px 4px 10px blue);
backdrop-filter: grayscale(30%);
backdrop-filter: hue-rotate(120deg);
backdrop-filter: invert(70%);
backdrop-filter: opacity(20%);
backdrop-filter: sepia(90%);
backdrop-filter: saturate(80%);

/* Multiple filters */
backdrop-filter: url(filters.svg#filter) blur(4px) saturate(150%);

/* Global values */
backdrop-filter: inherit;
backdrop-filter: initial;
backdrop-filter: revert;
backdrop-filter: unset;
</pre>

<h2 id="Syntax">Syntax</h2>

<h3 id="Values">Values</h3>

<dl>
 <dt><code>none</code></dt>
 <dd>No filter is applied to the backdrop.</dd>
 <dt><code>&lt;filter-function-list&gt;</code></dt>
 <dd>A space-separated list of {{cssxref("&lt;filter-function&gt;")}}s or an <a href="/en-US/docs/Web/SVG/Element/filter">SVG filter</a> that will be applied to the backdrop.</dd>
</dl>

<h2 id="Formal_definition">Formal definition</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax">Formal syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">.box {
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  font-family: sans-serif;
  text-align: center;
  line-height: 1;
 -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  max-width: 50%;
  max-height: 50%;
  padding: 20px 40px;
}

html,
body {
  height: 100%;
  width: 100%;
}

body {
  background-image: url(https://picsum.photos/id/1080/6858/4574), linear-gradient(rgb(219, 166, 166), rgb(0, 0, 172));
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.container {
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
}</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div class="container"&gt;
  &lt;div class="box"&gt;
    &lt;p&gt;backdrop-filter: blur(10px)&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;
</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample("Examples", 600, 400)}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{cssxref("filter")}}</li>
</ul>
