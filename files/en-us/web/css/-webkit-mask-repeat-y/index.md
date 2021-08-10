---
title: '-webkit-mask-repeat-y'
slug: Web/CSS/-webkit-mask-repeat-y
tags:
  - CSS
  - CSS Masking
  - CSS Property
  - Non-standard
  - Reference
  - 'recipe:css-property'
browser-compat: css.properties.-webkit-mask-repeat-y
---
<div>{{CSSRef}}{{Non-standard_header}}</div>

<p>The <code>-webkit-mask-repeat-y</code> property sets whether and how a mask image is repeated (tiled) vertically.</p>

<pre class="brush:css no-line-numbers">/* Keyword values */
-webkit-mask-repeat-y: repeat;
-webkit-mask-repeat-y: no-repeat;
-webkit-mask-repeat-y: space;
-webkit-mask-repeat-y: round;

/* Multiple values */
-webkit-mask-repeat-y: repeat, no-repeat, space;

/* Global values */
-webkit-mask-repeat-y: inherit;
-webkit-mask-repeat-y: initial;
-webkit-mask-repeat-y: unset;
</pre>

<h2 id="Syntax">Syntax</h2>

<h3 id="Values">Values</h3>

<dl>
 <dt>repeat</dt>
 <dd>The mask image is repeated vertically.</dd>
 <dt>no-repeat</dt>
 <dd>The mask image is not repeated vertically; only one copy of the mask image is drawn in vertical direction. The vertical remainder of the masked element's content is not displayed.</dd>
 <dt>repeat</dt>
 <dd>The mask image is repeated vertically.</dd>
 <dt>space</dt>
 <dd>The image is repeated as much as possible without clipping. The first and last images are pinned to the top and bottom edge of the element, and whitespace is distributed evenly between the images. The {{cssxref("mask-position")}} property is ignored unless only one image can be displayed without clipping. The only case where clipping happens using space is when there isn't enough room to display one image.</dd>
 <dt>round</dt>
 <dd>As the allowed vertical space increases in size, the repeated images will stretch (leaving no gaps) until there is room for another one to be added. When the next image is added, all of the current ones compress to allow room. Example: An image with an original height of 260px, repeated three times, might stretch until each repetition is 300px high, and then another image will be added. They will then compress to a height of 225px.</dd>
</dl>

<h2 id="Formal_definition">Formal definition</h2>

<p>{{CSSInfo}}</p>

<h2 id="Formal_syntax">Formal syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="Using_a_repeating_or_non-repeating_mask_image">Using a repeating or non-repeating mask image</h3>

<pre class="brush: css">.exampleone {
  -webkit-mask-image: url('mask.png');
  -webkit-mask-repeat-y: repeat;
}

.exampletwo {
  -webkit-mask-image: url('mask.png');
  -webkit-mask-repeat-y: no-repeat;
}
</pre>

<h3 id="Using_multiple_mask_images">Using multiple mask images</h3>

<p>You can specify a different <code>&lt;repeat-style&gt;</code> for each mask image, separated by commas:</p>

<pre class="brush: css">.examplethree {
  -webkit-mask-image: url('mask1.png'), url('mask2.png');
  -webkit-mask-repeat-y: repeat, space;
}
</pre>

<p>Each image is matched with the corresponding repeat style, from first specified to last.</p>

<h2 id="Specifications">Specifications</h2>

<p>Not part of any standard.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<p>{{cssxref("-webkit-mask-repeat")}}, {{cssxref("-webkit-mask-repeat-x")}}</p>
