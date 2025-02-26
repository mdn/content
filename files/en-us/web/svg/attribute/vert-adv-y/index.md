---
title: vert-adv-y
slug: Web/SVG/Attribute/vert-adv-y
page-type: svg-attribute
status:
  - deprecated
browser-compat: svg.elements.font.vert-adv-y
---

{{SVGRef}}{{Deprecated_Header}}

The **`vert-adv-y`** attribute indicates the vertical advance after rendering a {{Glossary("glyph")}} in vertical orientation.

You can use this attribute with the following SVG elements:

- {{SVGElement("font")}}
- {{SVGElement("glyph")}}
- {{SVGElement("missing-glyph")}}

## font

For {{SVGElement("font")}} elements, `vert-adv-y` specifies the default vertical advance for a glyph in vertical orientation.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><em>1 em as of {{SVGAttr("units-per-em")}}</em></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

- `<number>`
  - : This value indicates the default vertical advance of the glyph in vertical direction

## glyph, missing-glyph

For {{SVGElement("glyph")}} and {{SVGElement("missing-glyph")}} elements, `vert-adv-y` specifies the vertical advance for a glyph in vertical orientation.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td>
        <em>{{SVGElement("font")}}'s <code>vert-adv-y</code> value</em>
      </td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

- `<number>`
  - : This value indicates the vertical advance of the glyph in vertical direction

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGAttr("horiz-adv-x")}}
- {{SVGAttr("units-per-em")}}
