---
title: scroll-margin-block-start
slug: Web/CSS/scroll-margin-block-start
tags:
  - Beginner
  - CSS
  - Example
  - 'recipe:css-property'
  - scroll-margin-block-start
browser-compat: css.properties.scroll-margin-block-start
---
<div>{{CSSRef}}</div>

<p>The <code>scroll-margin-block-start</code> property defines the margin of the scroll snap area at the start of the block dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.</p>

<div>{{EmbedInteractiveExample("pages/css/scroll-margin-block-start.html")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: css">/* &lt;length&gt; values */
scroll-margin-block-start: 10px;
scroll-margin-block-start: 1em;

/* Global values */
scroll-margin-block-start: inherit;
scroll-margin-block-start: initial;
scroll-margin-block-start: revert;
scroll-margin-block-start: unset;
</pre>

<h3 id="Values">Values</h3>

<dl>
 <dt><code>&lt;length&gt;</code></dt>
 <dd>An outset from the block start edge of the scroll container.</dd>
</dl>
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
