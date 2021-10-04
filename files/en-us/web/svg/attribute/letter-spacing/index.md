---
title: letter-spacing
slug: Web/SVG/Attribute/letter-spacing
tags:
  - SVG
  - SVG Attribute
browser-compat: svg.attributes.presentation.letter-spacing
---
{{SVGRef}}

The **`letter-spacing`** attribute controls spacing between text characters, in addition to any spacing from the {{SVGAttr("kerning")}} attribute.

If the attribute value is a unitless number (like `128`), the browser processes it as a {{cssxref("length")}} in the current user coordinate system.

If the attribute value has a unit identifier, such as `.25em` or `1%`, then the browser converts the \<length> into its corresponding value in the current user coordinate system.

> **Note:** As a presentation attribute, `letter-spacing` can be used as a CSS property. See the {{cssxref("letter-spacing", "CSS letter-spacing")}} property for more information.

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
<svg viewBox="0 0 400 30" xmlns="http://www.w3.org/2000/svg">
  <text y="20" letter-spacing="2">Bigger letter-spacing</text>
  <text x="200" y="20" letter-spacing="-0.5">Smaller letter-spacing</text>
</svg>
```

{{EmbedLiveSample("Example", "200", "30")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><code>normal</code> | {{cssxref("length")}}</td>
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

For a description of the values, please refer to the [CSS `letter-spacing`](/en-US/docs/Web/CSS/letter-spacing#values) property.

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
        {{SpecName("CSS3 Text", "#letter-spacing-property", "letter-spacing")}}
      </td>
      <td>{{Spec2("CSS3 Text")}}</td>
      <td>SVG 2 just refers to the definition in CSS Text 3.</td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "text.html#LetterSpacingProperty", "letter-spacing")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition</td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}

## See also

*   {{cssxref("letter-spacing", "CSS letter-spacing")}}
