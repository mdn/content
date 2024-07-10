---
title: u1
slug: Web/SVG/Attribute/u1
page-type: svg-attribute
status:
  - deprecated
browser-compat: svg.elements.hkern.u1
---

{{SVGRef}}{{Deprecated_Header}}

The **`u1`** attribute specifies list of {{Glossary("Unicode")}} characters (refer to the description of the {{SVGAttr("unicode")}} attribute of the {{SVGElement("glyph")}} element for a description of how to express individual Unicode characters) and/or ranges of Unicode characters, which identify a set of possible first {{Glossary("glyph")}} in a kerning pair.

If a given Unicode character within the set has multiple corresponding `<glyph>` elements (i.e., there are multiple `<glyph>` elements with the same `unicode` attribute value but different {{SVGAttr("glyph-name")}} values), then all such glyphs are included in the set. Comma is the separator character; thus, to kern a comma, specify the comma as part of a range of Unicode characters or as a glyph name using the {{SVGAttr("g1")}} attribute. The total set of possible first glyphs in the kerning pair is the union of glyphs specified by the `u1` and `g1` attributes.

## Elements

You can use this attribute with the following SVG elements:

- {{SVGElement("hkern")}}
- {{SVGElement("vkern")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <a href="/en-US/docs/Web/CSS/Value_definition_syntax#brackets">[</a>
        <code>&#x3C;character></code>
        <a href="/en-US/docs/Web/CSS/Value_definition_syntax#single_bar">|</a>
        <code>&#x3C;urange></code>
        <a href="/en-US/docs/Web/CSS/Value_definition_syntax#brackets">]</a
        ><a href="/en-US/docs/Web/CSS/Value_definition_syntax#hash_mark)"
          >#</a
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

- `[ <character> | <urange> ]#`
  - : This value indicates a comma-separated sequence of Unicode characters and/or ranges of Unicode characters, which identify a set of possible first glyphs in a kerning pair.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
