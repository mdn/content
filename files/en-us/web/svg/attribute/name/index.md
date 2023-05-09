---
title: name
slug: Web/SVG/Attribute/name
page-type: svg-attribute
status:
  - deprecated
spec-urls:
  - https://www.w3.org/TR/SVG11/fonts.html#FontFaceNameElementNameAttribute
  - https://www.w3.org/TR/SVG11/color.html#ColorProfileElementNameAttribute
---

{{SVGRef}}{{Deprecated_Header}}

The **`name`** attribute specifies either the name of a color profile or a font face.

You can use this attribute with the following SVG elements:

- {{ SVGElement("font-face-name") }}

## font-face-name

For {{SVGElement("font-face-name")}}, `name` defines the name of the font face.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><code>&#x3C;name></code></td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

- `<name>`
  - : This value specifies the name of a local font. Unlike the syntax allowed between the parentheses of the `local(…)` clause in an [`@font-face` rule `src`](/en-US/docs/Web/CSS/@font-face/src) descriptor, the font name specified in this attribute is not surrounded in single or double quotes.

## Specifications

{{Specifications}}
