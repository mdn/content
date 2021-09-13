---
title: Element.scrollTop
slug: Web/API/Element/scrollTop
tags:
  - API
  - CSSOM View
  - NeedsArtUpdate
  - NeedsMarkupWork
  - Property
  - Reference
browser-compat: api.Element.scrollTop
---
<div>{{APIRef("DOM")}}</div>

<p>The <code><strong>Element.scrollTop</strong></code> property gets or sets the number of pixels that an element's content is scrolled vertically.</p>

<p>An element's <code>scrollTop</code> value is a measurement of the distance from the element's top to its topmost <em>visible</em> content. When an element's content does not generate a vertical scrollbar, then its <code>scrollTop</code> value is <code>0</code>.</p>

<p>When <code>scrollTop</code> is used on the root element (the <code>&lt;html&gt;</code> element), the <code>scrollY</code> of the window is returned. <a href="https://www.w3.org/TR/2016/WD-cssom-view-1-20160317/#dom-element-scrolltop">This is a special case of <code>scrollTop</code></a>.</p>

<div class="warning">
<p><strong>Warning:</strong> On systems using display scaling, <code>scrollTop</code> may give you a decimal value.</p>
</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">// Get the number of pixels scrolled.
var <var>intElemScrollTop</var> = someElement.scrollTop;
</pre>

<p>After running this code, <code><var>intElemScrollTop</var></code> is an integer corresponding to the number of pixels that the {{domxref("element")}}'s content has been scrolled upwards.</p>

<pre class="brush: js">// Set the number of pixels scrolled.
<var>element</var>.scrollTop = <var>intValue</var>;
</pre>

<p><code>scrollTop</code> can be set to any integer value, with certain caveats:</p>

<ul>
 <li>If the element can't be scrolled (e.g. it has no overflow or if the element has a property of "<strong>non-scrollable</strong>"), <code>scrollTop</code> is <code>0</code>.</li>
 <li><code>scrollTop</code> doesn't respond to negative values; instead, it sets itself back to <code>0</code>.</li>
 <li>If set to a value greater than the maximum available for the element, <code>scrollTop</code> settles itself to the maximum value.</li>
</ul>

<h2>Examples</h2>

<h3>Scrolling an element</h3>

<p>In this example, try scrolling the inner container with the dashed border, and see how the value of <code>scrollTop</code> changes.</p>

<h4>HTML</h4>

<pre class="brush: html">

&lt;div id="container"&gt;
  &lt;div id="scroller"&gt;
      &lt;p&gt;Far out in the uncharted backwaters of the unfashionable end
      of the western spiral arm of the Galaxy lies a small unregarded
      yellow sun. Orbiting this at a distance of roughly ninety-two million
      miles is an utterly insignificant little blue green planet whose
      ape-descended life forms are so amazingly primitive that they still
      think digital watches are a pretty neat idea.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;div id="output"&gt;scrollTop: 0&lt;/div&gt;
</pre>

<h4>CSS</h4>

<pre class="brush: css">
#scroller {
  overflow: scroll;
  height: 150px;
  width: 150px;
  border: 5px dashed orange;
}

#output {
  padding: 1rem 0;
}
</pre>

<h4>JavaScript</h4>

<pre class="brush: js">
const scroller = document.querySelector("#scroller");
const output = document.querySelector("#output");

scroller.addEventListener("scroll", event => {
  output.textContent = `scrollTop: ${scroller.scrollTop}`;
});
</pre>

<h4>Result</h4>

{{EmbedLiveSample("Scrolling_an_element", 400, 250)}}

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="https://msdn.microsoft.com/en-us/library/hh781509(v=vs.85).aspx" title="MSDN Measuring Element Dimension and Location">MSDN's Measuring Element Dimension and Location</a></li>
 <li>{{domxref("Element.scrollLeft")}}</li>
 <li>{{domxref("Element.scrollTo()")}}</li>
</ul>
