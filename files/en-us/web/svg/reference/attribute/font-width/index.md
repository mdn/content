---
title: font-width
slug: Web/SVG/Reference/Attribute/font-width
page-type: svg-attribute
status:
  - experimental
  - non-standard
browser-compat: svg.global_attributes.font-width
sidebar: svgref
---

{{SeeCompatTable}}{{non-standard_header}}

The **`font-width`** attribute selects a normal, condensed, or expanded face from a font family for the glyphs used to render the text.

> [!NOTE]
> The `font-width` attribute is the modern replacement for the {{SVGAttr("font-stretch")}} attribute, which is a legacy alias. While `font-width` is the specification's preferred name, `font-stretch` currently has broader browser support.

You can use this attribute with the following SVG elements:

- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tspan")}}

> [!NOTE]
> As a presentation attribute, `font-width` also has a CSS property counterpart: {{cssxref("font-width")}}. When both are specified, the CSS property takes priority.

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>See {{cssxref("font-width", "", "#formal_syntax")}}</td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>normal</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- CSS {{cssxref("font-width")}} property
- Legacy SVG {{SVGAttr("font-stretch")}} attribute
- CSS {{cssxref("font-stretch")}} property
