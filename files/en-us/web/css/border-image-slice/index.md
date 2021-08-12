---
title: border-image-slice
slug: Web/CSS/border-image-slice
tags:
  - CSS
  - CSS Borders
  - CSS Property
  - NeedsExample
  - Reference
  - recipe:css-property
browser-compat: css.properties.border-image-slice
---
<div>{{CSSRef}}</div>

<p>The <strong><code>border-image-slice</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> property divides the image specified by {{cssxref("border-image-source")}} into regions. These regions form the components of an element's <a href="/en-US/docs/Web/CSS/border-image">border image</a>.</p>

<div>{{EmbedInteractiveExample("pages/css/border-image-slice.html")}}</div>

<p>The slicing process creates nine regions in total: four corners, four edges, and a middle region. Four slice lines, set a given distance from their respective sides, control the size of the regions.</p>

<p><a href="/en-US/docs/Web/CSS/border-image-slice/border-image-slice.png"><img alt="The nine regions defined by the border-image or border-image-slice properties" src="border-image-slice.png"></a></p>

<p>The above diagram illustrates the location of each region.</p>

<ul>
 <li>Zones 1-4 are corner regions. Each one is used a single time to form the corners of the final border image.</li>
 <li>Zones 5-8 are edge regions. These are <a href="/en-US/docs/Web/CSS/border-image-repeat">repeated, scaled, or otherwise modified</a> in the final border image to match the dimensions of the element.</li>
 <li>Zone 9 is the middle region. It is discarded by default, but is used like a background image if the keyword <code>fill</code> is set.</li>
</ul>

<p>The {{cssxref("border-image-repeat")}}, {{cssxref("border-image-width")}}, and {{cssxref("border-image-outset")}} properties determine how these regions are used to form the final border image.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush:css no-line-numbers">/* All sides */
border-image-slice: 30%;

/* vertical | horizontal */
border-image-slice: 10% 30%;

/* top | horizontal | bottom */
border-image-slice: 30 30% 45;

/* top | right | bottom | left */
border-image-slice: 7 12 14 5;

/* Using the `fill` keyword */
border-image-slice: 10% fill 7 12;

/* Global values */
border-image-slice: inherit;
border-image-slice: initial;
border-image-slice: revert;
border-image-slice: unset;
</pre>

<p>The <code>border-image-slice</code> property may be specified using one to four <code>&lt;number-percentage&gt;</code> values to represent the position of each image slice. Negative values are invalid; values greater than their corresponding dimension are clamped to <code>100%</code>.</p>

<ul>
 <li>When <strong>one</strong> position is specified, it creates all four slices at the same distance from their respective sides.</li>
 <li>When <strong>two</strong> positions are specified, the first value creates slices measured from the <strong>top and bottom</strong>, the second creates slices measured from the <strong>left and right</strong>.</li>
 <li>When <strong>three</strong> positions are specified, the first value creates a slice measured from the <strong>top</strong>, the second creates slices measured from the <strong>left and right</strong>, the third creates a slice measured from the <strong>bottom</strong>.</li>
 <li>When <strong>four</strong> positions are specified, they create slices measured from the <strong>top</strong>, <strong>right</strong>, <strong>bottom</strong>, and <strong>left</strong> in that order (clockwise).</li>
</ul>

<p>The optional <code>fill</code> value, if used, can be placed anywhere in the declaration.</p>

<h3 id="Values">Values</h3>

<dl>
 <dt>{{cssxref("&lt;number&gt;")}}</dt>
 <dd>Represents an edge offset in <em>pixels</em> for raster images and <em>coordinates</em> for vector images. For vector images, the number is relative to the element's size, not the size of the source image, so percentages are generally preferable in these cases.</dd>
 <dt>{{cssxref("&lt;percentage&gt;")}}</dt>
 <dd>Represents an edge offset as a percentage of the source image's size: the width of the image for horizontal offsets, the height for vertical offsets.</dd>
 <dt><code>fill</code></dt>
 <dd>Preserves the middle image region and displays it like a background image, but stacked above the actual {{cssxref("background")}}. Its width and height are sized to match the top and left image regions, respectively.</dd>
</dl>

<h2 id="Formal_definition">Formal definition</h2>

<p>{{CSSInfo}}</p>

<h2 id="Formal_syntax">Formal syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="Adjustable_border_width_and_slice">Adjustable border width and slice</h3>

<p>The following example shows a simple <code>&lt;div&gt;</code> with a border image set on it. The source image for the borders is as follows:</p>

<p><img alt="nice multi-colored diamonds" src="border-diamonds.png"></p>

<p>The diamonds are 30px across, therefore setting 30 pixels as the value for both <code><a href="/en-US/docs/Web/CSS/border-width">border-width</a></code> and <code>border-image-slice</code> will get you complete and fairly crisp diamonds in your border:</p>

<pre class="brush: css">border-width: 30px;
border-image-slice: 30;</pre>

<p>These are the default values we have used in this example. However, we have also provided two sliders to allow you to dynamically change the values of the above two properties, allowing you to appreciate the effect they have:</p>

<p><code>border-image-slice</code> Changes the size of the image slice sampled for use in each border and border corner (and the content area, if the <code>fill</code> keyword is used) — varying this away from 30 causes the border to look somewhat irregular, but can have some interesting effects.</p>

<p><code>border-width</code>: Changes the width of the border. The sampled image size is scaled to fit inside the border, which means that if the width is bigger than the slice, the image can start to look somewhat pixelated (unless of course you use an SVG image).</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;div class="wrapper"&gt;
  &lt;div&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;ul&gt;
  &lt;li&gt;
    &lt;label for="width"&gt;slide to adjust &lt;code&gt;border-width&lt;/code&gt;&lt;/label&gt;
    &lt;input type="range" min="10" max="45" id="width"&gt;
    &lt;output id="width-output"&gt;30px&lt;/output&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;label for="slice"&gt;slide to adjust &lt;code&gt;border-image-slice&lt;/code&gt;&lt;/label&gt;
    &lt;input type="range" min="10" max="45" id="slice"&gt;
    &lt;output id="slice-output"&gt;30&lt;/output&gt;
  &lt;/li&gt;
&lt;/ul&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">.wrapper {
  width: 400px;
  height: 300px;
}

div &gt; div {
  width: 300px;
  height: 200px;
  border-width: 30px;
  border-style: solid;
  border-image: url(https://interactive-examples.mdn.mozilla.net/media/examples/border-diamonds.png);
  border-image-slice: 30;
  border-image-repeat: round;
}

li {
  display: flex;
  place-content: center;
}</pre>

<h4 id="JavaScript">JavaScript</h4>

<pre class="brush: js">const widthSlider = document.getElementById('width');
const sliceSlider = document.getElementById('slice');
const widthOutput = document.getElementById('width-output');
const sliceOutput = document.getElementById('slice-output');
const divElem = document.querySelector('div &gt; div');

widthSlider.addEventListener('input', () =&gt; {
  const newValue = widthSlider.value + 'px';
  divElem.style.borderWidth = newValue;
  widthOutput.textContent = newValue;
})

sliceSlider.addEventListener('input', () =&gt; {
  const newValue = sliceSlider.value;
  divElem.style.borderImageSlice = newValue;
  sliceOutput.textContent = newValue;
})</pre>

<h4 id="Result">Result</h4>

<p>{{EmbedLiveSample('Adjustable_border_width_and_slice', '100%', 400)}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/CSS/Shorthand_properties#tricky_edge_cases">Illustrated description of the 1-to-4-value syntax</a></li>
</ul>
