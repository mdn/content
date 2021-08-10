---
title: scroll-snap-coordinate
slug: Web/CSS/scroll-snap-coordinate
tags:
  - CSS
  - CSS Property
  - CSS Scroll Snap
  - Deprecated
  - Reference
  - 'recipe:css-property'
browser-compat: css.properties.scroll-snap-coordinate
---
<div>{{CSSRef}}{{deprecated_header}}</div>

<p>The <strong><code>scroll-snap-coordinate</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> property defines the x and y coordinate positions within an element that will align with its nearest ancestor scroll container's {{cssxref("scroll-snap-destination")}} for each respective axis.</p>

<pre class="brush:css no-line-numbers">/* Keyword value */
scroll-snap-coordinate: none;

/* &lt;position&gt; values */
scroll-snap-coordinate: 50px 50px;                   /* Single coordinate */
scroll-snap-coordinate: 100px 100px, 100px bottom;   /* Multiple coordinates */

/* Global values */
scroll-snap-coordinate: inherit;
scroll-snap-coordinate: initial;
scroll-snap-coordinate: unset;</pre>

<p>If the element has been transformed, the snap coordinates are likewise transformed, thus aligning the snap points with the element as it is displayed.</p>

<h2 id="Syntax">Syntax</h2>

<h3 id="Values">Values</h3>

<dl>
 <dt><code>none</code></dt>
 <dd>Specifies that the element does not contribute to a snap point.</dd>
 <dt>{{cssxref("&lt;position&gt;")}}</dt>
 <dd>Specifies the offset of the snap coordinates from the start edge of the element’s border box. For each pairing, the first value gives the x coordinate of the snap coordinate, the second value its y coordinate.</dd>
</dl>

<h2 id="Formal_definition">Formal definition</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax">Formal syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="Setting_scroll_snap_coordinates">Setting scroll snap coordinates</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;div id="container"&gt;
  &lt;div&gt;
    &lt;p&gt;At coordinate (0, 0)&lt;/p&gt;
    &lt;div class="scrollContainer coordinate0"&gt;
      &lt;div&gt;1&lt;/div&gt;
      &lt;div&gt;2&lt;/div&gt;
      &lt;div&gt;3&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;

  &lt;div&gt;
    &lt;p&gt;At coordinate (25, 0)&lt;/p&gt;
    &lt;div class="scrollContainer coordinate25"&gt;
      &lt;div&gt;1&lt;/div&gt;
      &lt;div&gt;2&lt;/div&gt;
      &lt;div&gt;3&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;

  &lt;div&gt;
    &lt;p&gt;At coordinate (50, 0)&lt;/p&gt;
    &lt;div class="scrollContainer coordinate50"&gt;
      &lt;div&gt;1&lt;/div&gt;
      &lt;div&gt;2&lt;/div&gt;
      &lt;div&gt;3&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">#container {
  display: flex;
}

#container &gt; div:nth-child(-n+2) {
  margin-right: 20px;
}

.scrollContainer {
  width: 100px;
  overflow: auto;
  white-space: nowrap;
  scroll-snap-type: mandatory;
  font-size: 0;
}

.scrollContainer &gt; div {
  width: 100px;
  height: 100px;
  display: inline-block;
  line-height: 100px;
  text-align: center;
  font-size: 50px;
}

.coordinate0 &gt; div {
  scroll-snap-coordinate: 0 0;
}

.coordinate25 &gt; div {
  scroll-snap-coordinate: 25px 0;
}

.coordinate50 &gt; div {
  scroll-snap-coordinate: 50px 0;
}

.scrollContainer &gt; div:nth-child(even) {
  background-color: #87ea87;
}

.scrollContainer &gt; div:nth-child(odd) {
  background-color: #87ccea;
}</pre>

<h4 id="Result">Result</h4>

<p>{{EmbedLiveSample("Setting_scroll_snap_coordinates", "100%", "170")}}</p>

<h2 id="Specifications">Specifications</h2>

<p>Not part of any standard.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/CSS/CSS_Scroll_Snap">CSS Scroll Snap</a></li>
  <li><a href="https://developers.google.com/web/updates/2018/07/css-scroll-snap">Well-Controlled Scrolling with CSS Scroll Snap</a></li>
</ul>
