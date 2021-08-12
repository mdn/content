---
title: background-position
slug: Web/CSS/background-position
tags:
  - CSS
  - CSS Background
  - CSS Property
  - Reference
  - 'recipe:css-property'
browser-compat: css.properties.background-position
---
<div>{{CSSRef}}</div>

<p>The <strong><code>background-position</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> property sets the initial position for each background image. The position is relative to the position layer set by {{cssxref("background-origin")}}.</p>

<div>{{EmbedInteractiveExample("pages/css/background-position.html")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: css no-line-numbers">/* Keyword values */
background-position: top;
background-position: bottom;
background-position: left;
background-position: right;
background-position: center;

/* &lt;percentage&gt; values */
background-position: 25% 75%;

/* &lt;length&gt; values */
background-position: 0 0;
background-position: 1cm 2cm;
background-position: 10ch 8em;

/* Multiple images */
background-position: 0 0, center;

/* Edge offsets values */
background-position: bottom 10px right 20px;
background-position: right 3em bottom 10px;
background-position: bottom 10px right;
background-position: top right 10px;

/* Global values */
background-position: inherit;
background-position: initial;
background-position: revert;
background-position: unset;
</pre>

<p>The <code>background-position</code> property is specified as one or more <code>&lt;position&gt;</code> values, separated by commas.</p>

<h3 id="Values">Values</h3>

<dl>
 <dt><code>&lt;position&gt;</code></dt>
 <dd>
  <p>A {{cssxref("&lt;position&gt;")}}. A position defines an x/y coordinate, to place an item relative to the edges of an element's box. It can be defined using one to four values. If two non-keyword values are used, the first value represents the horizontal position and the second represents the vertical position. If only one value is specified, the second value is assumed to be <code>center</code>. If three or four values are used, the length-percentage values are offsets for the preceding keyword value(s).</p>
  <p><strong>1-value syntax:</strong> the value may be:</p>

  <ul>
   <li>The keyword value <code>center</code>, which centers the image.</li>
   <li>One of the keyword values <code>top</code>, <code>left</code>, <code>bottom</code>, <code>right</code>. This specifies an edge against which to place the item. The other dimension is then set to 50%, so the item is placed in the middle of the edge specified.</li>
   <li>A {{cssxref("&lt;length&gt;")}} or {{cssxref("&lt;percentage&gt;")}}. This specifies the X coordinate relative to the left edge, with the Y coordinate set to 50%.</li>
  </ul>

  <p><strong>2-value syntax:</strong> one value defines X and the other defines Y. Each value may be:</p>

  <ul>
   <li>One of the keyword values <code>top</code>, <code>left</code>, <code>bottom</code>, <code>right</code>. If <code>left</code> or <code>right</code> are given here, then this defines X and the other given value defines Y. If <code>top</code> or <code>bottom</code> are given, then this defines Y and the other value defines X.</li>
   <li>A {{cssxref("&lt;length&gt;")}} or {{cssxref("&lt;percentage&gt;")}}. If the other value is <code>left</code> or <code>right</code>, then this value defines Y, relative to the top edge. If the other value is <code>top</code> or <code>bottom</code>, then this value defines X, relative to the left edge. If both values are <code>&lt;length&gt;</code> or <code>&lt;percentage&gt;</code> values, then the first defines X and the second Y.</li>
   <li>Note that: If one value is <code>top</code> or <code>bottom</code>, then the other value may not be <code>top</code> or <code>bottom</code>. If one value is <code>left</code> or <code>right</code>, then the other value may not be <code>left</code> or <code>right</code>. This means, e.g., that <code>top top</code> and <code>left right</code> are not valid.</li>
   <li>The default value is <code>top left</code> or <code>0% 0%</code>.</li>
  </ul>

  <p><strong>3-value syntax:</strong> Two values are keyword values, and the third is the offset for the preceding value:</p>

  <ul>
   <li>The first value is one of the keyword values <code>top</code>, <code>left</code>, <code>bottom</code>, <code>right</code>, or <code>center</code>. If <code>left</code> or <code>right</code> are given here, then this defines X. If <code>top</code> or <code>bottom</code> are given, then this defines Y and the other keyword value defines X.</li>
   <li>The {{cssxref("&lt;length&gt;")}} or {{cssxref("&lt;percentage&gt;")}} value, if it is the second value, is the offset for the first value. If it is the third value, it is the offset for the second value.</li>
   <li>The single length or percentage value is an offset for the keyword value that precedes it. The combination of one keyword with two {{cssxref("&lt;length&gt;")}} or {{cssxref("&lt;percentage&gt;")}} values is not valid.</li>
  </ul>

  <p><strong>4-value syntax:</strong> The first and third values are keyword value defining X and Y. The second and fourth values are offsets for the preceding X and Y keyword values:</p>

  <ul>
   <li>The first value and third values one of the keyword values <code>top</code>, <code>left</code>, <code>bottom</code>, <code>right</code>. If <code>left</code> or <code>right</code> are given here, then this defines X. If <code>top</code> or <code>bottom</code> are given, then this defines Y and the other keyword value defines X.</li>
   <li>The second and fourth values are {{cssxref("&lt;length&gt;")}} or {{cssxref("&lt;percentage&gt;")}} values. The second value is the offset for the first keyword. The fourth value is the offset for the second keyword.</li>
  </ul>

</dd>
</dl>


 <h3>Regarding Percentages:</h3>
 
 <p>The percentage offset of the given background image's position is relative to the container. A value of 0% means that the left (or top) edge of the background image is aligned with the corresponding left (or top) edge of the container, or the 0% mark of the image will be on the 0% mark of the container. A value of 100% means that the <em>right</em> (or <em>bottom</em>) edge of the background image is aligned with the <em>right</em> (or <em>bottom</em>) edge of the container, or the 100% mark of the image will be on the 100% mark of the container. Thus a value of 50% horizontally or vertically centers the background image as the 50% of the image will be at the 50% mark of the container. Similarly, <code>background-position: 25% 75%</code> means the spot on the image that is 25% from the left and 75% from the top will be placed at the spot of the container that is 25% from the container's left and 75% from the container's top.</p>
 <p>Essentially what happens is the background image dimension is <em>subtracted</em> from the corresponding container dimension, and then a percentage of the resulting value is used as the direct offset from the left (or top) edge.</p>

 <p><code>(container width - image width) * (position x%) = (x offset value)<br>
  (container height - image height) * (position y%) = (y offset value)</code></p>

 <p>Using the X axis for an example, let's say we have an image that is 300px wide and we are using it in a container that is 100px wide, with background-size set to auto:</p>

 <p><code>100px - 300px = -200px <em>(container &amp; image difference)</em></code></p>

 <p>So that with position percentages of -25%, 0%, 50%, 100%, 125%,  we get these image-to-container edge offset values:</p>

 <p><code> -200px * -25% = 50px <br>
   -200px * 0% = 0px <br>
   -200px * 50% = -100px <br>
   -200px * 100% = -200px </code><br>
  <code> -200px * 125% = -250px </code></p>

 <p>So with these resultant values for our example, the <strong>left edge</strong> of the <strong>image</strong> is offset from the <strong>left edge</strong> of the <strong>container</strong> by:</p>

 <ul>
  <li>+ 50px (putting the left image edge in the center of the 100-pixel-wide container)</li>
  <li>0px (left image edge coincident with the left container edge)</li>
  <li>-100px (left image edge 100px to the left of the container, in this example that means the middle 100px image area is centered in the container)</li>
  <li>-200px (left image edge 200px to the left of the container, in this example that means the right image edge is coincident with the right container edge)</li>
  <li>-250px (left image edge 250px to the left of the container, in this example that puts the right edge of the 300px-wide image in the center of the container)</li>
 </ul>

 <p>It's worth mentioning that if your background-size is equal to the container size for a given axis, then a <em>percentage</em> position for that axis will have no effect because the "container-image difference" will be zero. You will need to offset using absolute values.</p>

<h2 id="Formal_definition">Formal definition</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax">Formal syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="Positioning_background_images">Positioning background images</h3>

<p>Each of these three examples uses the {{cssxref("background")}} property to create a yellow, rectangular element containing a star image. In each example, the star is in a different position. The third example illustrates how to specify positions for two different background images within one element.</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;div class="exampleone"&gt;Example One&lt;/div&gt;
&lt;div class="exampletwo"&gt;Example Two&lt;/div&gt;
&lt;div class="examplethree"&gt;Example Three&lt;/div&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">/* Shared among all &lt;div&gt;s */
div {
  background-color: #FFEE99;
  background-repeat: no-repeat;
  width: 300px;
  height: 80px;
  margin-bottom: 12px;
}

/* These examples use the `background` shorthand property */
.exampleone {
  background: url("startransparent.gif") #FFEE99 2.5cm bottom no-repeat;
}
.exampletwo {
  background: url("startransparent.gif") #FFEE99 left 4em bottom 1em no-repeat;
}

/* Multiple background images: Each image is matched with the
   corresponding position, from first specified to last. */
.examplethree {
  background-image:    url("startransparent.gif"),
                       url("catfront.png");
  background-position: 0px 0px,
                       right 3em bottom 2em;
}</pre>

<h4 id="Result">Result</h4>

<p>{{EmbedLiveSample('Positioning_background_images', 420, 200)}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{cssxref("background-position-x")}}</li>
 <li>{{cssxref("background-position-y")}}</li>
 <li>{{cssxref("background-position-inline")}}</li>
 <li>{{cssxref("background-position-block")}}</li>
 <li><a href="/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds">Using multiple backgrounds</a></li>
 <li>{{cssxref("transform-origin")}}</li>
</ul>
