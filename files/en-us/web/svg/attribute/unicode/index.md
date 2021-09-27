---
title: unicode
slug: Web/SVG/Attribute/unicode
tags:
  - Deprecated
  - SVG
  - SVG Attribute
browser-compat: svg.elements.glyph.unicode
---
{{SVGRef}}{{Deprecated_Header}}

The **`unicode`** attribute specifies one or more {{Glossary("Unicode")}} characters indicating the sequence of Unicode characters which corresponds to a {{Glossary("glyph")}}.

If a character is provided, then this glyph corresponds to the given Unicode character. If multiple characters are provided, then this glyph corresponds to the given sequence of Unicode characters. One use of a sequence of characters is ligatures. For example, if `unicode="ffl"`, then the given glyph will be used to render the sequence of characters "f", "f", and "l".

It is often useful to refer to characters using XML character references expressed in hexadecimal notation or decimal notation. For example, `unicode="ffl"` could be expressed as XML character references in hexadecimal notation as `unicode="&#x66;&#x66;&#x6c;"` or in decimal notation as `unicode="&#102;&#102;&#108;"`.

The `unicode` attribute contributes to the process for deciding which glyph(s) are used to represent which character(s). If the attribute is not provided for a given `<glyph>`, then the only way to use this glyph is via an {{SVGElement("altGlyph")}} reference.

You can use this attribute with the following SVG elements:

*   {{SVGElement("glyph")}}

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

*   `<string>`
    *   : This value specifies one or more Unicode characters corresponding to a glyph.

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
        {{SpecName("SVG1.1", "fonts.html#GlyphElementUnicodeAttribute", "unicode")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition</td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}
