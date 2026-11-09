---
title: unicode-bidi
slug: Web/SVG/Reference/Attribute/unicode-bidi
page-type: svg-attribute
browser-compat: svg.global_attributes.unicode-bidi
sidebar: svgref
---

The **`unicode-bidi`** attribute, together with the {{SVGAttr("direction")}} attribute, determines how bidirectional text in a document is handled. For example, if a block of content contains both left-to-right and right-to-left text, the browser uses the Unicode bidirectional algorithm to decide how to display the text. The `unicode-bidi` attribute allows the developer to override this algorithm and control the text embedding.

> [!NOTE]
> As a presentation attribute, `unicode-bidi` also has a CSS property counterpart: {{cssxref("unicode-bidi")}}. When both are specified, the CSS property takes priority.

## Elements

You can use this attribute with the following SVG elements:

- {{SVGElement("textPath")}}
- {{SVGElement("text")}}
- {{SVGElement("tspan")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>See {{cssxref("unicode-bidi", "", "#formal_syntax")}}</td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>normal</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

For a description of the values, please refer to the CSS {{cssxref("unicode-bidi")}} property.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- CSS {{cssxref("unicode-bidi")}} property
