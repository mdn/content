---
title: string
slug: Web/SVG/Attribute/string
tags:
  - Deprecated
  - SVG
  - SVG Attribute
browser-compat: svg.elements.font-face-format.string
---
{{SVGRef}}{{Deprecated_Header}}

The **`string`** attribute is a hint to the user agent, and specifies a list of formats that the font referenced by the parent {{SVGElement("font-face-uri")}} element supports.

You can use this attribute with the following SVG elements:

*   {{SVGElement("font-face-format")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#anything"
            >&#x3C;anything></a
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

*   `<anything>`
    *   : This value specifies a list of formats that are supported by the font referenced by the parent {{SVGElement("font-face-uri")}} element.

        The available types are: `"woff"`, `"woff2"`, `"truetype"`, `"opentype"`, `"embedded-opentype"`, and `"svg"`. See the {{cssxref("@font-face/src", "src")}} descriptor of the {{cssxref("@font-face")}} at-rule for more information.

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
        {{SpecName("SVG1.1", "fonts.html#FontFaceFormatElementStringAttribute", "string")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition</td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}
