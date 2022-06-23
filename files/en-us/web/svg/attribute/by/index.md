---
title: by
slug: Web/SVG/Attribute/by
tags:
  - SVG
  - SVG Attribute
browser-compat: svg.elements.animateTransform.by
---
{{SVGRef}}

The **`by`** attribute specifies a relative offset value for an attribute that will be modified during an animation.

The starting value for the attribute is either indicated by specifying it as value for the attribute given in the {{SVGAttr("attributeName")}} or the {{SVGAttr("from")}} attribute.

You can use this attribute with the following SVG elements:

- {{SVGElement("animate")}}
- {{SVGElement("animateColor")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}

## Example

```css hidden
html, body, svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="100" height="100">
    <animate attributeName="width" fill="freeze" by="50" dur="3s"/>
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

When a list of values is defined via the {{SVGAttr("values")}} attribute, the `by` attribute is ignored.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
