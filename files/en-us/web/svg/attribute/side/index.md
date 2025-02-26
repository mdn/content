---
title: side
slug: Web/SVG/Attribute/side
page-type: svg-attribute
status:
  - experimental
browser-compat: svg.elements.textPath.side
---

{{SVGRef}}{{SeeCompatTable}}

The **`side`** attribute determines the side of a path the text is placed on (relative to the path direction).

You can use this attribute with the following SVG elements:

- {{SVGElement("textPath")}}

## Example

```css hidden
html,
body,
svg {
  height: 100%;
}

text {
  font:
    25px Arial,
    Helvetica,
    sans-serif;
}
```

```html
<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg">
  <text>
    <textPath href="#circle1" side="left">Text left from the path</textPath>
  </text>
  <text>
    <textPath href="#circle2" side="right">Text right from the path</textPath>
  </text>

  <circle
    id="circle1"
    cx="100"
    cy="100"
    r="70"
    fill="transparent"
    stroke="silver" />
  <circle
    id="circle2"
    cx="320"
    cy="100"
    r="70"
    fill="transparent"
    stroke="silver" />
</svg>
```

{{EmbedLiveSample("Example", "420", "220")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><code>left</code> | <code>right</code></td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>left</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

- `left`
  - : This value places the text on the left side of the path (relative to the path direction).
- `right`
  - : This value places the text on the right side of the path (relative to the path direction). This effectively reverses the path direction.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
