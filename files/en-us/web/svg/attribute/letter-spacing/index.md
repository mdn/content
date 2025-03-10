---
title: letter-spacing
slug: Web/SVG/Attribute/letter-spacing
page-type: svg-attribute
browser-compat: svg.global_attributes.letter-spacing
---

{{SVGRef}}

The **`letter-spacing`** attribute controls spacing between text characters.

If the attribute value is a unitless number (like `128`), the browser processes it as a {{cssxref("length")}} in the current user coordinate system.

If the attribute value has a unit identifier, such as `.25em` or `1%`, then the browser converts the \<length> into its corresponding value in the current user coordinate system.

> [!NOTE]
> As a presentation attribute, `letter-spacing` also has a CSS property counterpart: {{cssxref("letter-spacing")}}. When both are specified, the CSS property takes priority.

You can use this attribute with the following SVG elements:

- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tref")}}
- {{SVGElement("tspan")}}

## Example

```css hidden
html,
body,
svg {
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

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- CSS {{cssxref("letter-spacing")}} property
