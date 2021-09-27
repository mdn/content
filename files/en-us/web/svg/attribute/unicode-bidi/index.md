---
title: unicode-bidi
slug: Web/SVG/Attribute/unicode-bidi
tags:
  - SVG
  - SVG Attribute
browser-compat: svg.attributes.presentation.unicode-bidi
---
{{SVGRef}}

The **`unicode-bidi`** attribute specifies how the accumulation of the background image is managed.

> **Note:** As a presentation attribute, `unicode-bidi` can be used as a CSS property. See the [CSS `unicode-bidi`](/en-US/docs/Web/CSS/unicode-bidi) property for more information.

You can use this attribute with the following SVG elements:

*   {{SVGElement("altGlyph")}}
*   {{SVGElement("textPath")}}
*   {{SVGElement("text")}}
*   {{SVGElement("tref")}}
*   {{SVGElement("tspan")}}

## Context notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><code>{{csssyntax("unicode-bidi")}}</code></td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>normal</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

For a description of the values, please refer to the CSS {{cssxref("unicode-bidi")}} property.

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
        {{SpecName("CSS3 Writing Modes", "#unicode-bidi", "unicode-bidi")}}
      </td>
      <td>{{Spec2("CSS3 Writing Modes")}}</td>
      <td>
        SVG 2 only refers to CSS Writing Modes.<br />Introduced
        <code>isolate</code>, <code>isolate-override</code>, and
        <code>plaintext</code> keywords.
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "text.html#UnicodeBidiProperty", "unicode-bidi")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition</td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}
