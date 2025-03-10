---
title: word-spacing
slug: Web/SVG/Attribute/word-spacing
page-type: svg-attribute
browser-compat: svg.global_attributes.word-spacing
---

{{SVGRef}}

The **`word-spacing`** attribute specifies spacing behavior between words.

If a {{cssxref("length")}} is provided without a unit identifier (e.g. an unqualified number such as 128), the browser processes the \<length> as a width value in the current user coordinate system.

If a \<length> is provided with one of the unit identifiers (e.g. .25em or 1%), then the browser converts the \<length> into a corresponding value in the current user coordinate system.

> [!NOTE]
> As a presentation attribute, `word-spacing` also has a CSS property counterpart: {{cssxref("word-spacing")}}. When both are specified, the CSS property takes priority.

## Elements

You can use this attribute with the following SVG elements:

- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tref")}}
- {{SVGElement("tspan")}}

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

## Examples

This example includes two {{SVGElement("text")}} elements with different `word-spacing` values.

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 250 50" xmlns="http://www.w3.org/2000/svg">
  <text y="20" word-spacing="4">Bigger spacing between words</text>
  <text x="0" y="40" word-spacing="-0.5">Smaller spacing between words</text>
</svg>
```

{{EmbedLiveSample("Examples", "250", "100")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- CSS {{cssxref("word-spacing")}} property
