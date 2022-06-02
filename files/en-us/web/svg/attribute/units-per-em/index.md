---
title: units-per-em
slug: Web/SVG/Attribute/units-per-em
tags:
  - Deprecated
  - SVG
  - SVG Attribute
browser-compat: svg.elements.font-face.units-per-em
---
{{SVGRef}}{{Deprecated_Header}}

The **`units-per-em`** attribute specifies the number of coordinate units on the "em square", an abstract square whose height is the intended distance between lines of type in the same type size. This is the size of the design grid on which {{Glossary("glyph", "glyphs")}} are laid out.

> **Note:** This value is almost always necessary as nearly every other attribute requires the definition of a design grid.

You can use this attribute with the following SVG elements:

- {{SVGElement("font-face")}}

## Usage notes

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
      <td><code>1000</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

- `<number>`
  - : This value indicates the number of coordinate units on the em square.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
