---
title: font-weight
slug: Web/SVG/Attribute/font-weight
tags:
  - SVG
  - SVG Attribute
browser-compat: svg.attributes.presentation.font-weight
---
{{SVGRef}}

The **`font-weight`** attribute refers to the boldness or lightness of the glyphs used to render the text, relative to other fonts in the same font family.

> **Note:** As a presentation attribute, `font-weight` can be used as a CSS property. See the {{cssxref("font-weight", "CSS font-weight")}} property for more information.

You can use this attribute with the following SVG elements:

*   {{SVGElement("altGlyph")}}
*   {{SVGElement("text")}}
*   {{SVGElement("textPath")}}
*   {{SVGElement("tref")}}
*   {{SVGElement("tspan")}}

## Example

```css hidden
html, body, svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 200 30" xmlns="http://www.w3.org/2000/svg">
  <text y="20" font-weight="normal">Normal text</text>
  <text x="100" y="20" font-weight="bold">Bold text</text>
</svg>
```

{{EmbedLiveSample("Example", "200", "30")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code>normal</code> | <code>bold</code> | <code>bolder</code> |
        <code>lighter</code> | {{cssxref("number")}}
      </td>
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

For a description of the values, please refer to the [CSS `font-weight`](/en-US/docs/Web/CSS/font-weight#Values) property.

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
        {{SpecName("CSS4 Fonts", "#font-weight-prop", "font-weight")}}
      </td>
      <td>{{Spec2("CSS4 Fonts")}}</td>
      <td>
        Defines <code>font-weight</code> to accept any numbers between 1 and
        1000.
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName("CSS3 Fonts", "#font-weight-prop", "font-weight")}}
      </td>
      <td>{{Spec2("CSS3 Fonts")}}</td>
      <td>No change</td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "text.html#FontWeightProperty", "font-weight")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition</td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}

## See also

*   {{cssxref("font-weight", "CSS font-weight")}}
