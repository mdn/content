---
title: <feTurbulence>
slug: Web/SVG/Element/feTurbulence
tags:
  - Element
  - SVG
  - SVG Filter
browser-compat: svg.elements.feTurbulence
---
<div>{{SVGRef}}</div>

<p>The <strong><code>&lt;feTurbulence&gt;</code></strong> <a href="/en-US/docs/Web/SVG">SVG</a> filter primitive creates an image using the <a href="https://en.wikipedia.org/wiki/Perlin_noise">Perlin turbulence function</a>. It allows the synthesis of artificial textures like clouds or marble. The resulting image will fill the entire filter primitive subregion.</p>

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
 <li>{{SVGAttr("baseFrequency")}}</li>
 <li>{{SVGAttr("numOctaves")}}</li>
 <li>{{SVGAttr("seed")}}</li>
 <li>{{SVGAttr("stitchTiles")}}</li>
 <li>{{SVGAttr("type")}}</li>
</ul>

<h2 id="DOM_Interface">DOM Interface</h2>

<p>This element implements the {{domxref("SVGFETurbulenceElement")}} interface.</p>

<h2 id="Example">Example</h2>

<pre class="brush: html; highlight[4-5]">&lt;svg width="200" height="200" viewBox="0 0 220 220"
     xmlns="http://www.w3.org/2000/svg"&gt;
  &lt;filter id="displacementFilter"&gt;
    &lt;feTurbulence type="turbulence" baseFrequency="0.05"
        numOctaves="2" result="turbulence"/&gt;
    &lt;feDisplacementMap in2="turbulence" in="SourceGraphic"
        scale="50" xChannelSelector="R" yChannelSelector="G"/&gt;
  &lt;/filter&gt;

  &lt;circle cx="100" cy="100" r="100"
      style="filter: url(#displacementFilter)"/&gt;
&lt;/svg&gt;</pre>

<p>{{EmbedLiveSample('Example', 220, 220)}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{SVGElement("filter")}}</li>
 <li>{{SVGElement("animate")}}</li>
 <li>{{SVGElement("set")}}</li>
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
 <li>{{SVGElement("feMerge")}}</li>
 <li>{{SVGElement("feMorphology")}}</li>
 <li>{{SVGElement("feOffset")}}</li>
 <li>{{SVGElement("feSpecularLighting")}}</li>
 <li>{{SVGElement("feTile")}}</li>
 <li><a href="/en-US/docs/Web/SVG/Tutorial/Filter_effects">SVG tutorial: Filter effects</a></li>
</ul>
