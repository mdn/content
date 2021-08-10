---
title: scroll-snap-align
slug: Web/CSS/scroll-snap-align
tags:
  - Advanced
  - CSS
  - Example
  - NeedsLiveSample
  - Reference
  - 'recipe:css-property'
browser-compat: css.properties.scroll-snap-align
---
<div>{{CSSRef}}</div>

<p>The <code>scroll-snap-align</code> property specifies the box’s snap position as an alignment of its snap area (as the alignment subject) within its snap container’s snapport (as the alignment container). The two values specify the snapping alignment in the block axis and inline axis, respectively. If only one value is specified, the second value defaults to the same value.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: css">/* Keyword values */
scroll-snap-align: none;
scroll-snap-align: start end; /* when two values set first is block, second inline */
scroll-snap-align: center;

/* Global values */
scroll-snap-align: inherit;
scroll-snap-align: initial;
scroll-snap-align: revert;
scroll-snap-align: unset;
</pre>

<h3 id="Values">Values</h3>

<dl>
 <dt><code>none</code></dt>
 <dd>The box does not define a snap position in that axis.</dd>
 <dt><code>start</code></dt>
 <dd>The start alignment of this box's scroll snap area, within the scroll container's snapport is a snap position in this axis.</dd>
 <dt><code>end</code></dt>
 <dd>The end alignment of this box's scroll snap area, within the scroll container's snapport is a snap position in this axis.</dd>
 <dt><code>center</code></dt>
 <dd>The center alignment of this box's scroll snap area, within the scroll container's snapport is a snap position in this axis.</dd>
</dl>

<p>Safari currently has the two value syntax in the wrong order, the first value being inline the second block. See <a href="https://bugs.webkit.org/show_bug.cgi?id=191865">bug #191865</a>.</p>

<h2 id="Formal_definition">Formal definition</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax">Formal syntax</h2>

{{csssyntax}}

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/CSS/CSS_Scroll_Snap">CSS Scroll Snap</a></li>
  <li><a href="https://developers.google.com/web/updates/2018/07/css-scroll-snap">Well-Controlled Scrolling with CSS Scroll Snap</a></li>
</ul>
