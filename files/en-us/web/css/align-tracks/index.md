---
title: align-tracks
slug: Web/CSS/align-tracks
tags:
  - CSS
  - Experimental
  - Property
  - Reference
  - align-tracks
  - grid
  - masonry
browser-compat: css.properties.align-tracks
---
<div>{{CSSRef}}</div>

<p>{{SeeCompatTable}}</p>

<p>The <strong><code>align-tracks</code></strong> CSS property sets the alignment in the masonry axis for grid containers that have <a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Masonry_Layout">masonry</a> in their block axis.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: css">/* Keyword values */
align-tracks: start;
align-tracks: space-between;
align-tracks: center;
align-tracks: start,center,end;

/* Global values */
align-tracks: inherit;
align-tracks: initial;
align-tracks: revert;
align-tracks: unset;
</pre>

<p>The property can take a single value, in which case all tracks are aligned in the same way. If a list of values is used then the first value applies to the first track in the grid axis, the second to the next and so on.</p>

<p>If there are fewer values than tracks, the last value is used for all remaining tracks. If there are more values than tracks, any additional values are ignored.</p>

<h3 id="Values">Values</h3>

<dl>
 <dt><code>start</code></dt>
 <dd>The items are packed flush to each other toward the start edge of the alignment container in the masonry axis.</dd>
 <dt><code>end</code></dt>
 <dd>The items are packed flush to each other toward the end edge of the alignment container in the masonry axis.</dd>
 <dt><code>center</code></dt>
 <dd>The items are packed flush to each other toward the center of the alignment container along the masonry axis.</dd>
 <dt><code>normal</code></dt>
 <dd>Acts as <code>start</code>.</dd>
 <dt><code>baseline<br>
 first baseline</code><br>
 <code>last baseline</code></dt>
 <dd>Specifies participation in first- or last-baseline alignment: aligns the alignment baseline of the box’s first or last baseline set with the corresponding baseline in the shared first or last baseline set of all the boxes in its baseline-sharing group.<br>
 The fallback alignment for <code>first baseline</code> is <code>start</code>, the one for <code>last baseline</code> is <code>end</code>.</dd>
 <dt><code>space-between</code></dt>
 <dd>The items are evenly distributed within the alignment container along the masonry axis. The spacing between each pair of adjacent items is the same. The first item is flush with the main-start edge, and the last item is flush with the main-end edge.</dd>
 <dt><code>space-around</code></dt>
 <dd>The items are evenly distributed within the alignment container along the masonry axis. The spacing between each pair of adjacent items is the same. The empty space before the first and after the last item equals half of the space between each pair of adjacent items.</dd>
 <dt><code>space-evenly</code></dt>
 <dd>The items are evenly distributed within the alignment container along the masonry axis. The spacing between each pair of adjacent items, the main-start edge and the first item, and the main-end edge and the last item, are all exactly the same.</dd>
 <dt><code>stretch</code></dt>
 <dd>
 <p>The items stretch along the masonry axis to fill the content box. Items with definite size do not stretch.</p>
 </dd>
</dl>

<h2 id="Formal_definition">Formal definition</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax">Formal syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="Masonry_layout_with_multiple_values_for_align-tracks">Masonry layout with multiple values for align-tracks</h3>

<p>{{EmbedGHLiveSample("css-examples/grid/masonry/align-tracks.html", '100%', 900)}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>Related CSS properties: {{cssxref("justify-tracks")}}, {{cssxref("masonry-auto-flow")}}</li>
</ul>
