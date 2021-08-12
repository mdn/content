---
title: aspect-ratio
slug: Web/CSS/aspect-ratio
tags:
  - CSS
  - CSS Property
  - Images
  - Reference
  - aspect-ratio
  - 'recipe:css-property'
browser-compat: css.properties.aspect-ratio
---
<div>{{CSSRef}}</div>

<p>The <strong><code>aspect-ratio</code></strong>  <a href="/en-US/docs/CSS">CSS</a> property sets a <strong>preferred aspect ratio</strong> for the box, which will be used in the calculation of auto sizes and some other layout functions.</p>

<pre class="brush:css no-line-numbers">aspect-ratio: 1 / 1;

/* Global values */
aspect-ratio: inherit;
aspect-ratio: initial;
aspect-ratio: revert;
aspect-ratio: unset;
</pre>

<h3 id="Values">Values</h3>

<dl>
 <dt>{{cssxref("&lt;auto&gt;")}}</dt>
 <dd><a href="/en-US/docs/Web/CSS/Replaced_element">Replaced elements</a> with an intrinsic aspect ratio use <em>that</em> aspect ratio, otherwise the box has no preferred aspect ratio. Size calculations involving intrinsic aspect ratio always work with the content box dimensions.</dd>
 <dt>{{cssxref("&lt;ratio&gt;")}}</dt>
 <dd>The box’s preferred aspect ratio is the specified ratio of <code>width</code> / <code>height</code>. Size calculations involving preferred aspect ratio work with the dimensions of the box specified by <code>box-sizing</code>.</dd>
</dl>

<h2 id="Formal_definition">Formal definition</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax">Formal syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="Examples_of_values_for_aspect-ratio">Examples of values for aspect-ratio</h3>

<pre class="brush: css">aspect-ratio: 1 / 1;
aspect-ratio: 16 / 9;
</pre>

<h2 id="Mapping_width_and_height_to_aspect-ratio">Mapping width and height to aspect-ratio</h2>

<p>Browsers have added an internal <code>aspect-ratio</code> property that applies to <a href="/en-US/docs/Web/CSS/Replaced_element">replaced elements</a> and other related elements that accept <code>width</code> and <code>height</code> attributes. This appears in the browser's internal UA stylesheet. </p>

<p>In Firefox, the internal stylesheet rule looks like this:</p>

<pre class="brush: css">img, input[type="image"], video, embed, iframe, marquee, object, table {
  aspect-ratio: attr(width) / attr(height);
}</pre>

<p>You can read more about this feature in <a href="https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/">Setting Height And Width On Images Is Important Again</a>.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/Media/images/aspect_ratio_mapping">Mapping the width and height attributes of media container elements to their aspect-ratio</a></li>
 <li><a href="https://www.smashingmagazine.com/2019/03/aspect-ratio-unit-css/">Designing an aspect ratio unit for CSS</a></li>
</ul>
