---
title: format
slug: Web/SVG/Attribute/format
tags:
  - Deprecated
  - SVG
  - SVG Attribute
browser-compat: svg.elements.altGlyph.format
---
{{SVGRef}}{{Deprecated_Header}}

The **`format`** attribute indicates the format of the given font.

You can use this attribute with the following SVG elements:

- {{SVGElement("altGlyph")}}
- {{SVGElement("glyphRef")}}

## Context notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><code>&#x3C;string></code></td>
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

- `<string>`
  - : This value specifies the format of the given font.

    Here is a list of font formats and their strings that can be used as values for this attribute:

    <table class="no-markdown">
      <tbody>
        <tr>
          <th>Format string</th>
          <th>Format</th>
        </tr>
        <tr>
          <td><code>truedoc-pfr</code></td>
          <td>TrueDoc™ Portable Font Resource</td>
        </tr>
        <tr>
          <td><code>embedded-opentype</code></td>
          <td>Embedded OpenType</td>
        </tr>
        <tr>
          <td><code>type-1</code></td>
          <td>PostScript™ Type 1</td>
        </tr>
        <tr>
          <td><code>truetype</code></td>
          <td>TrueType</td>
        </tr>
        <tr>
          <td><code>opentype</code></td>
          <td>OpenType, including TrueType Open</td>
        </tr>
        <tr>
          <td><code>truetype-gx</code></td>
          <td>TrueType with GX extensions</td>
        </tr>
        <tr>
          <td><code>speedo</code></td>
          <td>Speedo</td>
        </tr>
        <tr>
          <td><code>intellifont</code></td>
          <td>Intellifont</td>
        </tr>
      </tbody>
    </table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [List of font formats defined in CSS 2 (outdated specification)](https://www.w3.org/TR/2008/REC-CSS2-20080411/fonts.html#referencing)
