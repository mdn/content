---
title: style
slug: Web/SVG/Attribute/style
page-type: svg-attribute
browser-compat: svg.global_attributes.style
---

{{SVGRef}}

The **`style`** attribute allows to style an element using {{Glossary("CSS")}} declarations. It functions identically to [the `style` attribute in HTML](/en-US/docs/Web/HTML/Global_attributes/style).

You can use this attribute with any SVG element.

## Example

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
  <rect
    width="80"
    height="40"
    x="10"
    y="10"
    style="fill: skyblue; stroke: cadetblue; stroke-width: 2;" />
</svg>
```

{{EmbedLiveSample("Example", "200", "120")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><code>&#x3C;style></code></td>
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

- `<style>`

  - : The syntax of style data depends on the style sheet language. By default, the style sheet language is [CSS](/en-US/docs/Web/CSS).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGElement("style")}}
- [HTML `style` attribute](/en-US/docs/Web/HTML/Global_attributes/style)
