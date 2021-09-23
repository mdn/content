---
title: unicode-range
slug: Web/SVG/Attribute/unicode-range
tags:
  - Deprecated
  - SVG
  - SVG Attribute
browser-compat: svg.elements.font-face.unicode-range
---
{{SVGRef}}{{Deprecated_Header}}

The **`unicode-range`** attribute defines the range of [ISO 10646](https://www.iso.org/standard/56921.html "Universal Coded Character Set (UCS)") characters possibly covered by the glyphs in a font.

You can use this attribute with the following SVG elements:

*   {{SVGElement("font-face")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          >&#x3C;urange><a
            href="/en-US/docs/Web/CSS/Value_definition_syntax#hash_mark_()"
            title="The hash mark multiplier indicates that the entity may be repeated one or more times (for example, the plus multiplier), but each occurrence is separated by a comma (&#x27;,&#x27;)."
            >#</a
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

*   `<urange>#`
    *   : This value is a comma-separated list of ISO 10646 characters possibly covered by the glyphs in the font.

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
        {{SpecName("SVG1.1", "fonts.html#FontFaceElementUnicodeRangeAttribute", "unicode-range")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition</td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}

## See also

*   [ISO 10646](https://www.iso.org/standard/56921.html "Universal Coded Character Set (UCS)")
