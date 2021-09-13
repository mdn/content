---
title: Element.clientTop
slug: Web/API/Element/clientTop
tags:
- API
- CSSOM View
- NeedsAgnostify
- NeedsMarkupWork
- Property
- Reference
browser-compat: api.Element.clientTop
---
<div>{{ APIRef("DOM") }}</div>

<p>The width of the top border of an element in pixels. It is a read-only, integer
	property of element.</p>

<p>As it happens, all that lies between the two locations (<code>offsetTop</code> and
	client area top) is the element's border. This is because the <code>offsetTop</code>
	indicates the location of the top of the border (not the margin) while the client area
	starts immediately below the border, (client area includes padding.) Therefore, the
	<strong>clientTop</strong> value will always equal the integer portion of the
	<code>.getComputedStyle()</code> value for "border-top-width". (Actually might be
	Math.round(parseFloat()).) For example, if the computed "border-top-width" is zero,
	then <strong><code>clientTop</code></strong> is also zero.</p>

<div class="note">
	<p><strong>Note:</strong> This property will round the value to an integer. If you
		need a fractional value, use {{ domxref("element.getBoundingClientRect()") }}.</p>
</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var <em>top</em> = <var>element</var>.clientTop;
</pre>

<h2 id="Example">Example</h2>

<p>In the following example, the client area has a white background and a 24px black <code>border-top</code>. The <code>clientTop</code> value is the distance from where the margin (yellow) area ends and the padding and content areas (white) begin: that is, 24px.</p>

<h3>HTML</h3>

<pre class="brush: html">
&lt;div id="container"&gt;
  &lt;div id="contained"&gt;
    &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
	  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
	  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;
</pre>

<h3>CSS</h3>

<pre class="brush: css">

#container {
	margin: 3rem;
	background-color: rgb(255, 255, 204);
	border: 4px dashed black;
}

#contained {
	margin: 1rem;
	border-top: 24px black solid;
	padding: 0px 28px;
	overflow: auto;
	background-color: white;
}
</pre>

<h3>Result</h3>

{{EmbedLiveSample("Example", 400, 350)}}

<h2 id="Notes">Notes</h2>

<p><code>clientTop</code> was first introduced in the MS IE DHTML object model.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
