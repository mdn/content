---
title: <feBlend>
slug: Web/SVG/Element/feBlend
tags:
  - Element
  - SVG
  - SVG Filter
browser-compat: svg.elements.feBlend
---
<div>{{SVGRef}}</div>

<p>The <strong><code>&lt;feBlend&gt;</code></strong> <a href="/en-US/docs/Web/SVG">SVG</a> filter primitive composes two objects together ruled by a certain blending mode. This is similar to what is known from image editing software when blending two layers. The mode is defined by the {{SVGAttr("mode")}} attribute.</p>

<h2 id="Usage_context">Usage context</h2>

<p>{{svginfo}}</p>

<h2 id="Attributes">Attributes</h2>

<h3 id="Global_attributes">Global attributes</h3>

<ul>
 <li><a href="/en-US/docs/Web/SVG/Attribute#core_attributes">Core attributes</a></li>
 <li><a href="/en-US/docs/Web/SVG/Attribute#presentation_attributes">Presentation attributes</a></li>
 <li><a href="/en-US/docs/Web/SVG/Attribute#filter_primitive_attributes">Filter primitive attributes</a></li>
 <li>{{SVGAttr("class")}}</li>
 <li>{{SVGAttr("style")}}</li>
</ul>

<h3 id="Specific_attributes">Specific attributes</h3>

<ul>
 <li>{{SVGAttr("in")}}</li>
 <li>{{SVGAttr("in2")}}</li>
 <li>{{SVGAttr("mode")}}</li>
</ul>

<h2 id="DOM_Interface">DOM Interface</h2>

<p>This element implements the {{domxref("SVGFEBlendElement")}} interface.</p>

<h2 id="Example">Example</h2>

<h3 id="SVG">SVG</h3>

<pre class="brush: html; highlight[5-6]">&lt;svg width="200" height="200" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"&gt;
  &lt;defs&gt;
    &lt;filter id="spotlight"&gt;
      &lt;feFlood result="floodFill" x="0" y="0" width="100%" height="100%"
          flood-color="green" flood-opacity="1"/&gt;
      &lt;feBlend in="SourceGraphic" in2="floodFill" mode="multiply"/&gt;
    &lt;/filter&gt;
  &lt;/defs&gt;

  &lt;image xlink:href="//developer.mozilla.org/files/6457/mdn_logo_only_color.png"
      x="10%" y="10%" width="80%" height="80%"
      style="filter:url(#spotlight);"/&gt;
&lt;/svg&gt;</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample("Example", 200, 200)}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{SVGElement("filter")}}</li>
 <li>{{SVGElement("animate")}}</li>
 <li>{{SVGElement("set")}}</li>
 <li>{{SVGElement("feColorMatrix")}}</li>
 <li>{{SVGElement("feComponentTransfer")}}</li>
 <li>{{SVGElement("feComposite")}}</li>
 <li>{{SVGElement("feConvolveMatrix")}}</li>
 <li>{{SVGElement("feDiffuseLighting")}}</li>
 <li>{{SVGElement("feDisplacementMap")}}</li>
 <li>{{SVGElement("feFlood")}}</li>
 <li>{{SVGElement("feGaussianBlur")}}</li>
 <li>{{SVGElement("feImage")}}</li>
 <li>{{SVGElement("feMerge")}}</li>
 <li>{{SVGElement("feMorphology")}}</li>
 <li>{{SVGElement("feOffset")}}</li>
 <li>{{SVGElement("feSpecularLighting")}}</li>
 <li>{{SVGElement("feTile")}}</li>
 <li>{{SVGElement("feTurbulence")}}</li>
 <li><a href="/en-US/docs/Web/SVG/Tutorial/Filter_effects">SVG tutorial: Filter effects</a></li>
</ul>
