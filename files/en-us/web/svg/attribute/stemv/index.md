---
title: stemv
slug: Web/SVG/Attribute/stemv
page-type: svg-attribute
status:
  - deprecated
browser-compat: svg.elements.font-face.stemv
---

{{SVGRef}}{{Deprecated_Header}}

The **`stemv`** attribute indicates the vertical stem width of the font.

The vertical stem width is the width of vertical (or near-vertical) stems of {{Glossary("glyphs")}}. This information is often tied to hinting, and may not be directly accessible in some font formats. The measurement is meant for the dominant vertical stem in the font because there might be different groupings of vertical stems (e.g., one main one, and one lighter weight one as for an uppercase "M" or "N").

If this attribute is used, the {{SVGAttr("units-per-em")}} must also be used.

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
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

- `<number>`
  - : This value indicates the vertical stem width of the font.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGAttr("stemh")}}
