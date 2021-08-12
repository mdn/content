---
title: justify-self
slug: Web/CSS/justify-self
tags:
  - CSS
  - CSS Box Alignment
  - CSS Property
  - Reference
  - 'recipe:css-property'
browser-compat: css.properties.justify-self
---
<div>{{CSSRef}}</div>

<p>The <a href="/en-US/docs/Web/CSS">CSS</a> <strong><code>justify-self</code></strong> property sets the way a box is justified inside its alignment container along the appropriate axis.</p>

<div>{{EmbedInteractiveExample("pages/css/justify-self.html")}}</div>

<p>The effect of this property is dependent of the layout mode we are in:</p>

<ul>
 <li>In block-level layouts, it aligns an item inside its containing block on the inline axis.</li>
 <li>For absolutely-positioned elements, it aligns an item inside its containing block on the inline axis, accounting for the offset values of top, left, bottom, and right.</li>
 <li>In table cell layouts, this property is <em>ignored</em> (<a href="/en-US/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_In_Block_Abspos_Tables">more</a> about alignment in block, absolute positioned and table layout)</li>
 <li>In flexbox layouts, this property is <em>ignored</em> (<a href="/en-US/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_in_Flexbox">more</a> about alignment in Flexbox)</li>
 <li>In grid layouts, it aligns an item inside its grid area on the inline axis (<a href="/en-US/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_In_Grid_Layout">more</a> about alignment in grid layouts)</li>
</ul>

<h2 id="Syntax">Syntax</h2>

<pre class="brush:css no-line-numbers">/* Basic keywords */
justify-self: auto;
justify-self: normal;
justify-self: stretch;

/* Positional alignment */
justify-self: center;     /* Pack item around the center */
justify-self: start;      /* Pack item from the start */
justify-self: end;        /* Pack item from the end */
justify-self: flex-start; /* Equivalent to 'start'. Note that justify-self is ignored in Flexbox layouts. */
justify-self: flex-end;   /* Equivalent to 'end'. Note that justify-self is ignored in Flexbox layouts. */
justify-self: self-start;
justify-self: self-end;
justify-self: left;       /* Pack item from the left */
justify-self: right;      /* Pack item from the right */

/* Baseline alignment */
justify-self: baseline;
justify-self: first baseline;
justify-self: last baseline;

/* Overflow alignment (for positional alignment only) */
justify-self: safe center;
justify-self: unsafe center;

/* Global values */
justify-self: inherit;
justify-self: initial;
justify-self: revert;
justify-self: unset;
</pre>

<p>This property can take one of three different forms:</p>

<ul>
 <li>Basic keywords: one of the keyword values <code>normal</code>, <code>auto</code>, or <code>stretch</code>.</li>
 <li>Baseline alignment: the <code>baseline</code> keyword, plus optionally one of <code>first</code> or <code>last</code>.</li>
 <li>Positional alignment:
  <ul>
   <li>one of: <code>center</code>, <code>start</code>, <code>end</code>, <code>flex-start</code>, <code>flex-end</code>, <code>self-start</code>, <code>self-end</code>, <code>left</code>, or <code>right</code>.</li>
   <li>Plus optionally <code>safe</code> or <code>unsafe</code>.</li>
  </ul>
 </li>
</ul>

<h3 id="Values">Values</h3>

<dl>
 <dt><code>auto</code></dt>
 <dd>The value used is the value of the <code>justify-items</code> property of the parents box, unless the box has no parent, or is absolutely positioned, in these cases, <code>auto</code> represents <code>normal</code>.</dd>
 <dt><code>normal</code></dt>
 <dd>The effect of this keyword is dependent of the layout mode we are in:
 <ul>
  <li>In block-level layouts, the keyword is a synonym of <code>start</code>.</li>
  <li>In absolutely-positioned layouts, the keyword behaves like <code>start</code> on <em>replaced</em> absolutely-positioned boxes, and as <code>stretch</code> on <em>all other</em> absolutely-positioned boxes.</li>
  <li>In table cell layouts, this keyword has no meaning as this property is <em>ignored</em>.</li>
  <li>In flexbox layouts, this keyword has no meaning as this property is <em>ignored.</em></li>
  <li>In grid layouts, this keyword leads to a behavior similar to the one of <code>stretch</code>, except for boxes with an aspect ratio or an intrinsic sizes where it behaves like <code>start</code>.</li>
 </ul>
 </dd>
 <dt><code>start</code></dt>
 <dd>The item is packed flush to each other toward the start edge of the alignment container in the appropriate axis.</dd>
 <dt><code>end</code></dt>
 <dd>The item is packed flush to each other toward the end edge of the alignment container in the appropriate axis.</dd>
 <dt><code>flex-start</code></dt>
 <dd>For items that are not children of a flex container, this value is treated like <code>start</code>.</dd>
 <dt><code>flex-end</code></dt>
 <dd>For items that are not children of a flex container, this value is treated like <code>end</code>.</dd>
 <dt><code>self-start</code></dt>
 <dd>The item is packed flush to the edge of the alignment container of the start side of the item, in the appropriate axis.</dd>
 <dt><code>self-end</code></dt>
 <dd>The item is packed flush to the edge of the alignment container of the end side of the item, in the appropriate axis.</dd>
 <dt><code>center</code></dt>
 <dd>The items are packed flush to each other toward the center of the of the alignment container.</dd>
 <dt><code>left</code></dt>
 <dd>The items are packed flush to each other toward the left edge of the alignment container. If the property's axis is not parallel with the inline axis, this value behaves like <code>start</code>.</dd>
 <dt><code>right</code></dt>
 <dd>The items are packed flush to each other toward the right edge of the alignment container in the appropriate axis. If the property's axis is not parallel with the inline axis, this value behaves like <code>start</code>.</dd>
 <dt><code>baseline<br>
 first baseline</code><br>
 <code>last baseline</code></dt>
 <dd>Specifies participation in first- or last-baseline alignment: aligns the alignment baseline of the box's first or last baseline set with the corresponding baseline in the shared first or last baseline set of all the boxes in its baseline-sharing group.<br>
 The fallback alignment for <code>first baseline</code> is <code>start</code>, the one for <code>last baseline</code> is <code>end</code>.</dd>
 <dt><code>stretch</code></dt>
 <dd>If the combined size of the items is less than the size of the alignment container, any <code>auto</code>-sized items have their size increased equally (not proportionally), while still respecting the constraints imposed by {{CSSxRef("max-height")}}/{{CSSxRef("max-width")}} (or equivalent functionality), so that the combined size exactly fills the alignment container.</dd>
 <dt><code>safe</code></dt>
 <dd>If the size of the item overflows the alignment container, the item is instead aligned as if the alignment mode were <code>start</code>.</dd>
 <dt><code>unsafe</code></dt>
 <dd>Regardless of the relative sizes of the item and alignment container, the given alignment value is honored.</dd>
</dl>

<h2 id="Formal_definition">Formal definition</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax">Formal syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="Simple_demonstration">Simple demonstration</h3>

<p>In the following example we have a simple 2 x 2 grid layout. Initially the grid container is given a <code>justify-items</code> value of <code>stretch</code> — the default — which causes the grid items to stretch across the entire width of their cells.</p>

<p>The second, third, and fourth grid items are then given different values of <code>justify-self</code>, to show how these override the <code>justify-items</code> value. These values cause the grid items to span only as wide as their content width, and align in different positions across their cells.</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;article class="container"&gt;
  &lt;span&gt;First child&lt;/span&gt;
  &lt;span&gt;Second child&lt;/span&gt;
  &lt;span&gt;Third child&lt;/span&gt;
  &lt;span&gt;Fourth child&lt;/span&gt;
&lt;/article&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">html {
  font-family: helvetica, arial, sans-serif;
  letter-spacing: 1px;
}

article {
  background-color: red;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 40px;
  grid-gap: 10px;
  width: 300px;
  justify-items: stretch;
}

span:nth-child(2) {
  justify-self: start;
}

span:nth-child(3) {
justify-self: center;
}

span:nth-child(4) {
justify-self: end;
}

article span {
  background-color: black;
  color: white;
  margin: 1px;
  text-align: center;
}

article, span {
  padding: 10px;
  border-radius: 7px;
}

article {
  margin: 20px;
}</pre>

<h4 id="Result">Result</h4>

<p>{{EmbedLiveSample('Simple_demonstration', '100%', 200)}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>CSS Grid Guide: <em><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout">Box alignment in CSS Grid layouts</a></em></li>
 <li><a href="/en-US/docs/Web/CSS/CSS_Box_Alignment">CSS Box Alignment</a></li>
 <li>The {{CSSxRef("justify-items")}} property</li>
</ul>
