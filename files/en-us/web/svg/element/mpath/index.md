---
title: <mpath>
slug: Web/SVG/Element/mpath
tags:
  - Element
  - NeedsExample
  - Reference
  - SVG
  - SVG Animation
browser-compat: svg.elements.mpath
---
<div>{{SVGRef}}</div>

<p>The <strong><code>&lt;mpath&gt;</code></strong> sub-element for the {{SVGElement("animateMotion")}} element provides the ability to reference an external {{SVGElement("path")}} element as the definition of a motion path.</p>

<h2 id="Usage_context">Usage context</h2>

<p>{{svginfo}}</p>

<h2 id="Attributes">Attributes</h2>

<h3 id="Global_attributes">Global attributes</h3>

<ul>
 <li><a href="/en-US/docs/Web/SVG/Attribute#core_attributes">Core attributes</a> »</li>
 <li><a href="/en-US/docs/Web/SVG/Attribute#xlink_attributes">Xlink attributes</a> »</li>
</ul>

<h3 id="Specific_attributes">Specific attributes</h3>

<ul>
 <li>{{SVGAttr("xlink:href")}}</li>
</ul>

<h2 id="DOM_Interface">DOM Interface</h2>

<p>This element implements the {{domxref("SVGMPathElement")}} interface.</p>

<h2 id="Example">Example</h2>

<h3 id="SVG">SVG</h3>

<pre class="brush: html; highlight[23]">&lt;svg width="100%" height="100%"  viewBox="0 0 500 300"
     xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink" &gt;

  &lt;rect x="1" y="1" width="498" height="298"
        fill="none" stroke="blue" stroke-width="2" /&gt;

  &lt;!-- Draw the outline of the motion path in blue, along
          with three small circles at the start, middle and end. --&gt;
  &lt;path id="path1" d="M100,250 C 100,50 400,50 400,250"
        fill="none" stroke="blue" stroke-width="7.06"  /&gt;
  &lt;circle cx="100" cy="250" r="17.64" fill="blue"  /&gt;
  &lt;circle cx="250" cy="100" r="17.64" fill="blue"  /&gt;
  &lt;circle cx="400" cy="250" r="17.64" fill="blue"  /&gt;

  &lt;!-- Here is a triangle which will be moved about the motion path.
       It is defined with an upright orientation with the base of
       the triangle centered horizontally just above the origin. --&gt;
  &lt;path d="M-25,-12.5 L25,-12.5 L 0,-87.5 z"
        fill="yellow" stroke="red" stroke-width="7.06"  &gt;
    &lt;!-- Define the motion path animation --&gt;
    &lt;animateMotion dur="6s" repeatCount="indefinite" rotate="auto" &gt;
       &lt;mpath xlink:href="#path1"/&gt;
    &lt;/animateMotion&gt;
  &lt;/path&gt;
&lt;/svg&gt;
</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample("Example", 250, 165)}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{SVGElement("animateMotion")}}</li>
</ul>
