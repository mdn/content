---
title: <fePointLight>
slug: Web/SVG/Element/fePointLight
tags:
  - Element
  - Reference
  - SVG
  - SVG Filter
  - SVG Light Source
browser-compat: svg.elements.fePointLight
---
<div>{{SVGRef}}</div>

<p>The <strong><code>&lt;fePointLight&gt;</code></strong> filter primitive defines a light source which allows to create a point light effect. It that can be used within a lighting filter primitive: {{SVGElement("feDiffuseLighting")}} or {{SVGElement("feSpecularLighting")}}.</p>

<h2 id="Usage_context">Usage context</h2>

<p>{{svginfo}}</p>

<h2 id="Attributes">Attributes</h2>

<h3 id="Global_attributes">Global attributes</h3>

<ul>
 <li><a href="/en-US/docs/Web/SVG/Attribute#core_attributes">Core attributes</a></li>
</ul>

<h3 id="Specific_attributes">Specific attributes</h3>

<ul>
 <li>{{SVGAttr("x")}}</li>
 <li>{{SVGAttr("y")}}</li>
 <li>{{SVGAttr("z")}}</li>
</ul>

<h2 id="DOM_Interface">DOM Interface</h2>

<p>This element implements the {{domxref("SVGFEPointLightElement")}} interface.</p>

<h2 id="Example">Example</h2>

<h3 id="SVG">SVG</h3>

<pre class="brush: html; highlight[7]">&lt;svg width="200" height="200" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"&gt;
  &lt;defs&gt;
    &lt;filter id="spotlight"&gt;
      &lt;feSpecularLighting result="spotlight" specularConstant="1.5"
          specularExponent="80" lighting-color="#FFF"&gt;
        &lt;fePointLight x="50" y="50" z="220"/&gt;
      &lt;/feSpecularLighting&gt;
      &lt;feComposite in="SourceGraphic" in2="spotlight" operator="arithmetic"
          k1="0" k2="1" k3="1" k4="0"/&gt;
    &lt;/filter&gt;
  &lt;/defs&gt;

  &lt;image xlink:href="/files/6457/mdn_logo_only_color.png" x="10%" y="10%"
      width="80%" height="80%" style="filter:url(#spotlight);"/&gt;
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
 <li>{{SVGElement("feDiffuseLighting")}}</li>
 <li>{{SVGElement("feSpecularLighting")}}</li>
 <li>{{SVGElement("feDistantLight")}}</li>
 <li>{{SVGElement("feSpotLight")}}</li>
 <li><a href="/en-US/docs/Web/SVG/Tutorial/Filter_effects">SVG tutorial: Filter effects</a></li>
</ul>
