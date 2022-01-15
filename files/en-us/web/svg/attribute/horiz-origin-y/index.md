---
title: horiz-origin-y
slug: Web/SVG/Attribute/horiz-origin-y
tags:
  - Deprecated
  - SVG
  - SVG Attribute
browser-compat: svg.elements.font.horiz-origin-y
---
{{SVGRef}}{{Deprecated_Header}}

The **`horiz-origin-y`** attribute indicates the y-coordinate in the font coordinate system of the origin of a {{Glossary("glyph")}} to be used when drawing horizontally oriented text.

> **Note:** The origin applies to all glyphs in the font.

You can use this attribute with the following SVG elements:

*   {{SVGElement("font")}}

## Usage notes

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
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

*   `<number>`
    *   : This value indicates the x-coordinate of the origin of a glyph for horizontally oriented text.

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
        {{SpecName("SVG1.1", "fonts.html#FontElementHorizOriginYAttribute", "horiz-origin-y")}}
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
*   {{SVGAttr("vert-origin-x")}}
*   {{SVGAttr("vert-origin-y")}}
