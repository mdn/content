---
title: stemh
slug: Web/SVG/Attribute/stemh
page-type: svg-attribute
status:
  - deprecated
browser-compat: svg.elements.font-face.stemh
---

{{SVGRef}}{{Deprecated_Header}}

The **`stemh`** attribute indicates the horizontal stem width of the font.

The stem width refers to the dominant stem of the font. There may be two or more designed widths. For example, the main vertical stems of Roman characters will differ from the thin stems on serifed "M" and "N", plus there may be different widths for uppercase and lowercase characters in the same font. Also, either by design or by error, all stems may have slightly different widths.

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
  - : This value indicates the horizontal stem width of the font.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGAttr("stemv")}}
