---
title: font-family
slug: Web/SVG/Attribute/font-family
tags:
  - SVG
  - SVG Attribute
browser-compat: svg.attributes.presentation.font-family
---
{{SVGRef}}

The **`font-family`** attribute indicates which font family will be used to render the text, specified as a prioritized list of font family names and/or generic family names.

> **Note:** As a presentation attribute, `font-family` can be used as a CSS property. See the {{cssxref("font-family", "CSS font-family")}} property for more information.

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
  <text y="20" font-family="Arial, Helvetica, sans-serif">Sans serif</text>
  <text x="100" y="20" font-family="monospace">Monospace</text>
</svg>
```

{{EmbedLiveSample("Example", "200", "30")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>{{csssyntax("font-family")}}</td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td>Depends on user agent</td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

For a description of the values, please refer to the [CSS `font-family`](/en-US/docs/Web/CSS/font-family#Values) property.

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
        {{SpecName("CSS4 Fonts", "#generic-font-families", "generic font families")}}
      </td>
      <td>{{Spec2("CSS4 Fonts")}}</td>
      <td>
        Adds new generic font families, specifically: <code>system-ui</code>,
        <code>emoji</code>, <code>math</code>, and <code>fangsong</code>.
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName("CSS3 Fonts", "#font-family-prop", "font-family")}}
      </td>
      <td>{{Spec2("CSS3 Fonts")}}</td>
      <td>No significant change</td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "text.html#FontFamilyProperty", "font-family")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition</td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}

## See also

*   {{cssxref("font-family", "CSS font-family")}}
