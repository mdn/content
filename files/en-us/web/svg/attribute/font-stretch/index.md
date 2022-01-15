---
title: font-stretch
slug: Web/SVG/Attribute/font-stretch
tags:
  - NeedsExample
  - SVG
  - SVG Attribute
browser-compat: svg.attributes.presentation.font-stretch
---
{{SVGRef}}

The **`font-stretch`** attribute indicates the desired amount of condensing or expansion in the glyphs used to render the text.

> **Note:** As a presentation attribute, `font-stretch` can be used as a CSS property. See the {{cssxref("font-stretch", "CSS font-stretch")}} property for more information.

You can use this attribute with the following SVG elements:

*   {{SVGElement("altGlyph")}}
*   {{SVGElement("text")}}
*   {{SVGElement("textPath")}}
*   {{SVGElement("tref")}}
*   {{SVGElement("tspan")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>{{csssyntax("font-stretch")}}</td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>normal</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
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
        {{SpecName("CSS4 Fonts", "#propdef-font-stretch", "font-stretch")}}
      </td>
      <td>{{Spec2("CSS4 Fonts")}}</td>
      <td>
        Adds the <code>&#x3C;percentage></code> syntax for variable fonts.
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName("CSS3 Fonts", "#propdef-font-stretch", "font-stretch")}}
      </td>
      <td>{{Spec2("CSS3 Fonts")}}</td>
      <td>Initial definition of <code>font-stretch</code> in CSS Fonts</td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "text.html#FontStretchProperty", "font-stretch")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition</td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}

## See also

*   {{cssxref("font-stretch", "CSS font-stretch")}}
