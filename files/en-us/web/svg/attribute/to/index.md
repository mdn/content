---
title: to
slug: Web/SVG/Attribute/To
page-type: svg-attribute
spec-urls:
  - https://svgwg.org/specs/animations/#SetElementToAttribute
  - https://svgwg.org/specs/animations/#ToAttribute
---

{{SVGRef}}

The **`to`** attribute indicates the final value of the attribute that will be modified during the animation.

The value of the attribute will change between the {{SVGAttr("from")}} attribute value and this value.

You can use this attribute with the following SVG elements:

- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}
- {{SVGElement("set")}}

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
  <rect x="10" y="10" width="100" height="100">
    <animate
      attributeType="XML"
      attributeName="width"
      fill="freeze"
      from="100"
      to="150"
      dur="3s" />
  </rect>
</svg>
```

{{EmbedLiveSample("Example", "200", "200")}}

## animate, animateMotion, animateTransform

For {{SVGElement("animate")}}, {{SVGElement("animateMotion")}}, and {{SVGElement("animateTransform")}}, `to` specifies the ending value of the animation.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><code>&#x3C;value></code></td>
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

The exact value type for this attribute depend on the value of the attribute that will be animated.

If a list of values is defined via the {{SVGAttr("values")}} attribute, the `to` attribute is ignored.

## set

For the {{SVGElement("set")}} element, `to` specifies the value for the attribute during the duration of the element.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><code>&#x3C;value></code></td>
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

The exact value type for this attribute depend on the value of the attribute that will be animated.

## Specifications

{{Specifications}}
