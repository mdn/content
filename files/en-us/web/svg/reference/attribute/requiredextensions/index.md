---
title: requiredExtensions
slug: Web/SVG/Reference/Attribute/requiredExtensions
page-type: svg-attribute
browser-compat: svg.elements.animate.requiredExtensions
sidebar: svgref
---

The **`requiredExtensions`** SVG [conditional processing attribute](/en-US/docs/Web/SVG/Reference/Attribute#conditional_processing_attributes) is a list of space-separated URL values each referencing a language extension.

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
        space-separated <code><a href="">&lt;url&gt;</a> values</code>
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

For a description of the values, please refer to the [HTML `requiredExtensions`](/en-US/docs/Web/HTML/Reference/Global_attributes/requiredExtensions) attribute.

## Accessibility concerns

Automatically focusing an SVG can confuse visually-impaired people using screen-reading technology and people with cognitive impairments. When requiredExtensions is assigned, screen-readers "teleport" their user to the focusable element without warning them beforehand.

Use careful consideration for accessibility when applying the `requiredExtensions` attribute. Automatically focusing on an element can cause the page to scroll on load. The focus can also cause dynamic keyboards to display on some touch devices. While a screen reader will announce the {{glossary("accessible name")}} of the element receiving focus, the screen reader will not announce anything before the element that may provide more context, and the sighted user on a small device will equally miss the context created by the preceding content.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGAttr("tabindex")}} attribute
- {{SVGAttr("systemLanguage")}} attribute
- {{domxref("SVGGraphicsElement")}} interface
- {{domxref("SVGAnimationElement")}} interface
