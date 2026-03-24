---
title: font-stretch
slug: Web/SVG/Reference/Attribute/font-stretch
page-type: svg-attribute
status:
  - deprecated
browser-compat: svg.global_attributes.font-stretch
sidebar: svgref
---

{{deprecated_header}}

The **`font-stretch`** attribute indicates the desired amount of condensing or expansion in the glyphs used to render the text.

> [!NOTE]
> The `font-stretch` attribute was renamed to {{SVGAttr("font-width")}} following the renaming of the corresponding CSS property. The {{cssxref("font-stretch")}} CSS property is now a legacy alias for the {{cssxref("font-width")}} property. While `font-width` is the specification's preferred name, `font-stretch` currently has broader browser support.

You can use this attribute with the following SVG elements:

- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tspan")}}

> [!NOTE]
> As a presentation attribute, `font-stretch` also has a CSS property counterpart: {{cssxref("font-stretch")}}. When both are specified, the CSS property takes priority.

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>See {{cssxref("font-stretch", "", "#formal_syntax")}}</td>
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

- SVG {{SVGAttr("font-width")}} attribute (modern replacement)
- CSS {{cssxref("font-width")}} property
- CSS {{cssxref("font-stretch")}} property (legacy alias)
