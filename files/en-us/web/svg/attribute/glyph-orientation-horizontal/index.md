---
title: glyph-orientation-horizontal
slug: Web/SVG/Attribute/glyph-orientation-horizontal
page-type: svg-attribute
status:
  - deprecated
browser-compat: svg.attributes.presentation.glyph-orientation-horizontal
---

{{SVGRef}}{{Deprecated_Header}}

The **`glyph-orientation-horizontal`** attribute affects the amount that the current text position advances as each {{Glossary("glyph")}} is rendered.

When the reference orientation direction is horizontal and the `glyph-orientation-horizontal` results in an orientation angle that is a multiple of 180 degrees, then the current text position is incremented according to the horizontal metrics of the glyph. Otherwise, if the value of this attribute is not a multiple of 180 degrees, then the current text position is incremented according to the vertical metrics of the glyph.

This attribute is applied only to text written in a horizontal {{SVGAttr("writing-mode")}}.

> **Note:** As a presentation attribute, `glyph-orientation-horizontal` can be used as a CSS property.

You can use this attribute with the following SVG elements:

- {{SVGElement("textPath")}}
- {{SVGElement("text")}}
- {{SVGElement("tref")}}
- {{SVGElement("tspan")}}

## Context notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#Angle"
            >&#x3C;angle></a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>0deg</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

- `<angle>`
  - : The value of the angle is restricted to 0, 90, 180, and 270 degrees. If another angle is specified, it is rounded to the closest of the permitted values.
    A value of `0deg` indicates that all glyphs are set with the top of the glyphs oriented towards the reference orientation. A value of `90deg` indicates an orientation of 90 degrees clockwise from the reference orientation.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
