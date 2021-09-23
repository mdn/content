---
title: glyph-name
slug: Web/SVG/Attribute/glyph-name
tags:
  - Deprecated
  - SVG
  - SVG Attribute
browser-compat: svg.elements.glyph.glyph-name
---
{{SVGRef}}{{Deprecated_Header}}

The **`glyph-name`** attribute specifies the name of a {{Glossary("glyph")}}.

It is recommended that glyph names be unique within a font. The glyph names can be used in situations where {{Glossary("Unicode")}} character numbers do not provide sufficient information to access the correct glyph, such as when there are multiple glyphs per Unicode character.

The glyph names can be referenced in {{Glossary("kerning")}} definitions created by {{SVGElement("hkern")}} and {{SVGElement("vkern")}} elements.

You can use this attribute with the following SVG elements:

*   {{SVGElement("glyph")}}

## Context notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><code>&#x3C;name>#</code></td>
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

*   `<name>#`
    *   : This value specifies a comma-separated list of names for the glyph.

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
        {{SpecName("SVG1.1", "fonts.html#GlyphElementGlyphNameAttribute", "glyph-name")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition</td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}
