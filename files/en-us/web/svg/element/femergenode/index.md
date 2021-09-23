---
title: <feMergeNode>
slug: Web/SVG/Element/feMergeNode
tags:
  - Element
  - NeedsContent
  - NeedsExample
  - Reference
  - SVG
  - SVG Filter
browser-compat: svg.elements.feMergeNode
---
<p>The <code>feMergeNode</code> takes the result of another filter to be processed by its parent {{ SVGElement("feMerge") }}.</p>

<h2 id="Usage_context">Usage context</h2>

<p>{{svginfo}}</p>

<h2 id="Example">Example</h2>

<pre class="brush: html">&lt;svg width="200" height="200"
 xmlns="http://www.w3.org/2000/svg"
 xmlns:xlink="http://www.w3.org/1999/xlink"&gt;

    &lt;filter id="feOffset" x="-40" y="-20" width="100" height="200"&gt;
        &lt;feOffset in="SourceGraphic" dx="60" dy="60" /&gt;
        &lt;feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur2" /&gt;
        &lt;feMerge&gt;
            &lt;feMergeNode in="blur2" /&gt;
            &lt;feMergeNode in="SourceGraphic" /&gt;
        &lt;/feMerge&gt;
    &lt;/filter&gt;

    &lt;rect x="40" y="40" width="100" height="100"
       style="stroke: #000000; fill: green; filter: url(#feOffset);" /&gt;
    &lt;rect x="40" y="40" width="100" height="100"
        style="stroke: #000000; fill: green;" /&gt;
&lt;/svg&gt;
</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample('Example', 200, 200)}}</p>

<h2 id="Attributes">Attributes</h2>

<h3 id="Global_attributes">Global attributes</h3>

<ul>
 <li><a href="/en-US/docs/Web/SVG/Attribute#core">Core attributes</a> »</li>
</ul>

<h3 id="Specific_attributes">Specific attributes</h3>

<ul>
 <li>{{ SVGAttr("in") }}</li>
</ul>

<h2 id="DOM_Interface">DOM Interface</h2>

<p>This element implements the <code><a href="/en-US/docs/DOM/SVGFEMergeNodeElement">SVGFEMergeNodeElement</a></code> interface.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{ SVGElement("filter") }}</li>
 <li>{{ SVGElement("animate") }}</li>
 <li>{{ SVGElement("set") }}</li>
 <li>{{ SVGElement("feMerge") }}</li>
 <li><a href="/en-US/docs/Web/SVG/Tutorial/Filter_effects">SVG tutorial: Filter effects</a></li>
</ul>

<p>{{SVGRef}}</p>
