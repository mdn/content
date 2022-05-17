---
title: horiz-adv-x
slug: Web/SVG/Attribute/horiz-adv-x
tags:
  - Deprecated
  - SVG
  - SVG Attribute
browser-compat: svg.elements.font.horiz-adv-x
---
{{SVGRef}}{{Deprecated_Header}}

The **`horiz-adv-x`** attribute indicates the horizontal advance after rendering a {{Glossary("glyph")}} in horizontal orientation.

You can use this attribute with the following SVG elements:

- {{SVGElement("font")}}
- {{SVGElement("glyph")}}
- {{SVGElement("missing-glyph")}}

## font

For {{SVGElement("font")}} elements, `horiz-adv-x` specifies the default horizontal advance of a glyph in horizontal orientation.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#Number"
            >&#x3C;number></a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

- `<number>`
  - : This value indicates the horizontal advance of the glyph.

## glyph, missing-glyph

For {{SVGElement("glyph")}} and {{SVGElement("missing-glyph")}} elements, `horiz-adv-x` specifies the horizontal advance of the glyph in horizontal orientation.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#Number"
            >&#x3C;number></a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td>
        <em>{{SVGElement("font")}}'s <code>horiz-adv-x</code> value</em>
      </td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

- `<number>`
  - : This value indicates the horizontal advance of the glyph.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGAttr("vert-adv-y")}}
