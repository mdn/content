---
title: widths
slug: Web/SVG/Attribute/widths
page-type: svg-attribute
status:
  - deprecated
browser-compat: svg.elements.font-face.widths
---

{{SVGRef}}{{Deprecated_Header}}

The **`widths`** attribute indicates a list of range values, each followed by one or more {{Glossary("glyph")}} widths.

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

  - : This value is a comma-separated list of UCS range values as defined in [ISO 10646](https://www.iso.org/standard/29819.html), each followed by one or more glyph widths.

    If this attribute is used, the {{SVGAttr("units-per-em")}} attribute must also be used.

    If the range is omitted, a range of U+0-7FFFFFFF is assumed which covers all characters and their glyphs. If not enough glyph widths are given, the last in the list is replicated to cover that range. If too many widths are provided, the extras are ignored.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ISO 10646](https://www.iso.org/standard/29819.html)
