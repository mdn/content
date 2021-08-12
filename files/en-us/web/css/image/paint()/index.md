---
title: paint()
slug: Web/CSS/image/paint()
tags:
  - CSS
  - CSS Function
  - CSS4-images
  - Function
  - Houdini
  - Reference
  - Web
browser-compat: css.types.image.paint
---
<div>{{CSSRef}}{{SeeCompatTable}}</div>

<p>The <strong><code>paint()</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> <a href="/en-US/docs/Web/CSS/CSS_Functions">function</a> defines an {{cssxref("&lt;image&gt;")}} value generated with a PaintWorklet.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: css">paint(<var>workletName</var>, <var>parameters</var>)</pre>

<p>where:</p>

<dl>
 <dt><var>workletName</var></dt>
 <dd>The name of the registered worklet.</dd>
 <dt><var>parameters</var></dt>
 <dd>Optional additional parameters to pass to the paintWorklet</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Basic_usage_example">Basic usage example</h3>

<p>You can pass additional arguments via the CSS paint() function. In this example, we passed two arguments: whether the background-image on a group of list items is filled or just has a stroke outline, and the width of that outline:</p>

<pre class="brush: html hidden">&lt;ul&gt;
    &lt;li&gt;item 1&lt;/li&gt;
    &lt;li&gt;item 2&lt;/li&gt;
    &lt;li&gt;item 3&lt;/li&gt;
    &lt;li&gt;item 4&lt;/li&gt;
    &lt;li&gt;item 5&lt;/li&gt;
    &lt;li&gt;item 6&lt;/li&gt;
    &lt;li&gt;item 7&lt;/li&gt;
    &lt;li&gt;item 8&lt;/li&gt;
    &lt;li&gt;item 9&lt;/li&gt;
    &lt;li&gt;item 10&lt;/li&gt;
    &lt;li&gt;item 11&lt;/li&gt;
    &lt;li&gt;item 12&lt;/li&gt;
    &lt;li&gt;item 13&lt;/li&gt;
    &lt;li&gt;item 14&lt;/li&gt;
    &lt;li&gt;item 15&lt;/li&gt;
    &lt;li&gt;item 16&lt;/li&gt;
    &lt;li&gt;item 17&lt;/li&gt;
    &lt;li&gt;item 18&lt;/li&gt;
    &lt;li&gt;item 19&lt;/li&gt;
    &lt;li&gt;item 20&lt;/li&gt;
&lt;/ul&gt;</pre>

<pre class="brush: js hidden">  CSS.paintWorklet.addModule('https://mdn.github.io/houdini-examples/cssPaint/intro/worklets/hilite.js');
</pre>

<pre class="brush: css">li {
   --boxColor: hsla(55, 90%, 60%, 1.0);
   background-image: paint(hollowHighlights, stroke, 2px);
}

li:nth-of-type(3n) {
   --boxColor: hsla(155, 90%, 60%, 1.0);
   background-image: paint(hollowHighlights, filled,  3px);
}

li:nth-of-type(3n+1) {
   --boxColor: hsla(255, 90%, 60%, 1.0);
   background-image: paint(hollowHighlights, stroke, 1px);
}</pre>

<p>We've included a custom property in the selector block defining a boxColor. Custom properties are accessible to the PaintWorklet.</p>

<p>{{EmbedLiveSample("Examples", 300, 300)}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{domxref('PaintWorklet')}}</li>
 <li>{{domxref('CSS Painting API')}}</li>
 <li><a href="/en-US/docs/Web/API/CSS_Painting_API/Guide">Using the CSS Painting API</a></li>
 <li>{{cssxref("&lt;image&gt;")}}</li>
 <li>{{domxref("canvas")}}</li>
</ul>
