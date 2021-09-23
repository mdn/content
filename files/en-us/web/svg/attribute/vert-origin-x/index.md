---
title: vert-origin-x
slug: Web/SVG/Attribute/vert-origin-x
tags:
  - Deprecated
  - SVG
  - SVG Attribute
browser-compat: svg.elements.font.vert-origin-x
---
{{SVGRef}}{{Deprecated_Header}}

The **`vert-origin-x`** attribute indicates the x-coordinate in the font coordinate system of the origin of a {{Glossary("glyph")}} to be used when drawing vertically oriented text.

You can use this attribute with the following SVG elements:

*   {{SVGElement("font")}}

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
      <td><em>Half of {{SVGAttr("horiz-adv-x")}} value</em></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

*   `<number>`
    *   : This value indicates the x-coordinate of the origin of a glyph for vertically oriented text.

## Specifications

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Specification</th>
      <th scope="col">Status</th>
      <th scope="col">Comment</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{SpecName("SVG1.1", "fonts.html#FontElementVertOriginXAttribute", "vert-origin-x")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition</td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}

## See also

*   {{SVGAttr("horiz-origin-x")}}
*   {{SVGAttr("horiz-origin-y")}}
*   {{SVGAttr("vert-origin-y")}}
