---
title: scroll-margin-block-end
slug: Web/CSS/scroll-margin-block-end
tags:
  - CSS
  - 'recipe:css-property'
  - scroll-margin-block-end
browser-compat: css.properties.scroll-margin-block-end
---
<div>{{CSSRef}}</div>

<p>The <code>scroll-margin-block-end</code> property defines the margin of the scroll snap area at the end of the block dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.</p>

<div>{{EmbedInteractiveExample("pages/css/scroll-margin-block-end.html")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: css">/* &lt;length&gt; values */
scroll-margin-block-end: 10px;
scroll-margin-block-end: 1em;

/* Global values */
scroll-margin-block-end: inherit;
scroll-margin-block-end: initial;
scroll-margin-block-end: revert;
scroll-margin-block-end: unset;
</pre>

<h3 id="Values">Values</h3>

<dl>
 <dt><code>&lt;length&gt;</code></dt>
 <dd>An outset from the block end edge of the scroll container.</dd>
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
