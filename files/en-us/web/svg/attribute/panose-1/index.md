---
title: panose-1
slug: Web/SVG/Attribute/panose-1
page-type: svg-attribute
status:
  - deprecated
browser-compat: svg.elements.font-face.panose-1
---

{{SVGRef}}{{Deprecated_Header}}

The **`panose-1`** attribute indicates the Panose-1 number of a font face.

Panose-1 is an industry standard TrueType font classification and matching technology. The PANOSE system consists of a set of ten numbers that categorize the key attributes of a Latin typeface, a classification procedure for creating those numbers, and mapper software that determines the closest possible font match given a set of typefaces.

You can use this attribute with the following SVG elements:

- {{SVGElement("font-face")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#Integer">&#x3C;integer></a
          >{10}</code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>0 0 0 0 0 0 0 0 0 0</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

- `<integer>{10}`
  - : This value specifies a Panose-1 number and consists of ten decimal integers, separated by whitespace. The initial value zero for each PANOSE digit means "any", i.e. all fonts will match the Panose number if this value is used.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
