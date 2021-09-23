---
title: <feMerge>
slug: Web/SVG/Element/feMerge
tags:
  - Element
  - Reference
  - SVG
  - SVG Filter
browser-compat: svg.elements.feMerge
---
<div>{{SVGRef}}</div>

<p>The <strong><code>&lt;feMerge&gt;</code></strong> SVG element allows filter effects to be applied concurrently instead of sequentially. This is achieved by other filters storing their output via the {{ SVGAttr("result") }} attribute and then accessing it in a {{ SVGElement("feMergeNode") }} child.</p>

<h2 id="Usage_context">Usage context</h2>

<p>{{svginfo}}</p>

<h2 id="Example">Example</h2>

<h3 id="SVG">SVG</h3>

<pre class="brush: html; highlight[7-10]">&lt;svg width="200" height="200"
  xmlns="http://www.w3.org/2000/svg"&gt;

  &lt;filter id="feOffset" x="-40" y="-20" width="100" height="200"&gt;
    &lt;feOffset in="SourceGraphic" dx="60" dy="60" /&gt;
    &lt;feGaussianBlur stdDeviation="5" result="blur2" /&gt;
    &lt;feMerge&gt;
      &lt;feMergeNode in="blur2" /&gt;
      &lt;feMergeNode in="SourceGraphic" /&gt;
    &lt;/feMerge&gt;
  &lt;/filter&gt;

  &lt;rect x="40" y="40" width="100" height="100"
    style="stroke: #000000; fill: green; filter: url(#feOffset);" /&gt;
&lt;/svg&gt;
</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample('Example', 200, 200)}}</p>

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

<p><em>None</em></p>

<h2 id="DOM_Interface">DOM Interface</h2>

<p>This element implements the {{domxref("SVGFEMergeElement")}} interface.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{SVGElement("filter")}}</li>
 <li>{{SVGElement("feBlend")}}</li>
 <li>{{SVGElement("feColorMatrix")}}</li>
 <li>{{SVGElement("feComponentTransfer")}}</li>
 <li>{{SVGElement("feComposite")}}</li>
 <li>{{SVGElement("feConvolveMatrix")}}</li>
 <li>{{SVGElement("feDiffuseLighting")}}</li>
 <li>{{SVGElement("feDisplacementMap")}}</li>
 <li>{{SVGElement("feFlood")}}</li>
 <li>{{SVGElement("feGaussianBlur")}}</li>
 <li>{{SVGElement("feImage")}}</li>
 <li>{{SVGElement("feMergeNode")}}</li>
 <li>{{SVGElement("feMorphology")}}</li>
 <li>{{SVGElement("feOffset")}}</li>
 <li>{{SVGElement("feSpecularLighting")}}</li>
 <li>{{SVGElement("feTile")}}</li>
 <li>{{SVGElement("feTurbulence")}}</li>
 <li><a href="/en-US/docs/Web/SVG/Tutorial/Filter_effects">SVG tutorial: Filter effects</a></li>
</ul>
