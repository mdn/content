---
title: alphabetic
slug: Web/SVG/Attribute/alphabetic
tags:
  - Deprecated
  - SVG
  - SVG Attribute
browser-compat: svg.elements.font-face.alphabetic
---
{{SVGRef}}{{deprecated_header}}

The **`alphabetic`** attribute defines the lower baseline of a font. It has the same syntax and semantics as the {{cssxref("@font-face/baseline", "baseline")}} descriptor within an {{cssxref("@font-face")}}.

For horizontally oriented glyph layouts, it indicates the alignment coordinate for glyphs to achieve alphabetic baseline alignment. The value is an offset in the font coordinate system.

You can use this attribute with the following SVG elements:

*   {{SVGElement("font-face")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>{{cssxref("number")}}</td>
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
        {{SpecName("SVG1.1", "fonts.html#FontFaceElementAlphabeticAttribute", "alphabetic")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition</td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}

## See also

*   {{SVGAttr("v-alphabetic")}}
