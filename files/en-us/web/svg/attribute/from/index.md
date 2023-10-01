---
title: from
slug: Web/SVG/Attribute/From
page-type: svg-attribute
browser-compat: svg.elements.animate.from
---

{{SVGRef}}

The **`from`** attribute indicates the initial value of the attribute that will be modified during the animation.

When used with the {{SVGAttr("to")}} attribute, the animation will change the modified attribute from the `from` value to the `to` value. When used with the {{SVGAttr("by")}} attribute, the animation will change the attribute relatively from the `from` value by the value specified in `by`.

You can use this attribute with the following SVG elements:

- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}

## Example

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" height="100">
    <animate attributeName="width" fill="freeze" from="100" to="150" dur="3s" />
  </rect>
</svg>
```

{{EmbedLiveSample("Example", "200", "200")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><em>See below</em></td>
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

The exact value type for this attribute depends on the value of the attribute that will be animated.

When a list of values is defined via the {{SVGAttr("values")}} attribute, the `from` attribute is ignored.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
