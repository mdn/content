---
title: word-spacing
slug: Web/SVG/Attribute/word-spacing
tags:
  - SVG
  - SVG Attribute
browser-compat: svg.attributes.presentation.word-spacing
---
{{SVGRef}}

The **`word-spacing`** attribute specifies spacing behavior between words.

If a {{cssxref("length")}} is provided without a unit identifier (e.g. an unqualified number such as 128), the browser processes the \<length> as a width value in the current user coordinate system.

If a \<length> is provided with one of the unit identifiers (e.g. .25em or 1%), then the browser converts the \<length> into a corresponding value in the current user coordinate system.

> **Note:** As a presentation attribute, `word-spacing` can be used as a CSS property. See the {{cssxref("word-spacing", "CSS word-spacing")}} property for more information.

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
<svg viewBox="0 0 250 50" xmlns="http://www.w3.org/2000/svg">
  <text y="20" word-spacing="2">Bigger spacing between words</text>
  <text x="0" y="40" word-spacing="-0.5">Smaller spacing between words</text>
</svg>
```

{{EmbedLiveSample("Example", "250", "100")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><code>normal</code> | {{cssxref("length")}}</td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Default values</th>
      <td><code>normal</code></td>
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
        {{SpecName("CSS3 Text", "#word-spacing-property", "word-spacing")}}
      </td>
      <td>{{Spec2("CSS3 Text")}}</td>
      <td>SVG 2 just refers to the definition in CSS Text 3.</td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "text.html#WordSpacingProperty", "word-spacing")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition</td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}

## See also

*   {{cssxref("word-spacing", "CSS word-spacing")}}
