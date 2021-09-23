---
title: orientation
slug: Web/SVG/Attribute/orientation
tags:
  - Deprecated
  - SVG
  - SVG Attribute
browser-compat: svg.elements.glyph.orientation
---
{{SVGRef}}{{Deprecated_Header}}

The **`orientation`** attribute indicates that the given {{Glossary("glyph")}} is only to be used for a particular text direction, i.e. horizontal or vertical.

You can use this attribute with the following SVG elements:

*   {{SVGElement("glyph")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><code>h</code> | <code>v</code></td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td>
        <em>None (meaning glyph can be used for both text directions)</em>
      </td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

*   `h`
    *   : This value indicates that the glyph is only used for a horizontal text direction.
*   `v`
    *   : This value indicates that the glyph is only used for a vertical text direction.

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
        {{SpecName("SVG1.1", "fonts.html#GlyphElementOrientationAttribute", "orientation")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition</td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}
