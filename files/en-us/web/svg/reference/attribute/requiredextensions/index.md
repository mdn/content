---
title: requiredExtensions
slug: Web/SVG/Reference/Attribute/requiredExtensions
page-type: svg-attribute
browser-compat: svg.global_attributes.requiredExtensions
sidebar: svgref
---

The **`requiredExtensions`** SVG [conditional processing attribute](/en-US/docs/Web/SVG/Reference/Attribute#conditional_processing_attributes) is a list of space-separated URL values each referencing a language extension. Language extensions are extended capabilities that go beyond those defined by standard browser specifications.

The value is a space-separated list of URL references identifying the required extensions. If all of the named extensions in the list are supported by the user agent, the element is rendered as usual. If attribute is present but the value is an empty string, or if any of the extensions are not supported by the browser, the browser will skip the element, along with all its descendants, not rendering it.

You can use this attribute with the following SVG elements:

- {{SVGElement("a")}}
- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}
- {{SVGElement("circle")}}
- {{SVGElement("clipPath")}}
- {{SVGElement("defs")}}
- {{SVGElement("ellipse")}}
- {{SVGElement("foreignObject")}}
- {{SVGElement("g")}}
- {{SVGElement("image")}}
- {{SVGElement("line")}}
- {{SVGElement("mask")}}
- {{SVGElement("path")}}
- {{SVGElement("pattern")}}
- {{SVGElement("polygon")}}
- {{SVGElement("polyline")}}
- {{SVGElement("rect")}}
- {{SVGElement("set")}}
- {{SVGElement("svg")}}
- {{SVGElement("switch")}}
- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tspan")}}
- {{SVGElement("use")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <a href="/en-US/docs/Web/SVG/Guides/Content_type#list-of-ts"><code>&lt;list-of-IRIs&gt;</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td>(none)</td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGAttr("tabindex")}}
- {{SVGAttr("systemLanguage")}}
- {{SVGAttr("requiredFeatures")}}
