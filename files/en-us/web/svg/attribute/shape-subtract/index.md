---
title: shape-subtract
slug: Web/SVG/Attribute/shape-subtract
page-type: svg-attribute
tags:
  - SVG
  - SVG Attribute
browser-compat: svg.attributes.presentation.shape-subtract
---

{{SVGRef}}

The **`shape-subtract`** attribute allows exclusion to part of the content-area from the wrapping area. The excluded area is the addition of all the areas defined in a list of {{cssxref("basic-shape")}} and/or SVG [shapes](/en-US/docs/Web/SVG/Tutorial/Basic_Shapes).

> **Note:** As a presentation attribute, `shape-subtract` can be used as a CSS property.

You can use this attribute with the following SVG elements:

- {{SVGElement("text")}}
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
<svg xmlns="http://www.w3.org/2000/svg"
     width="450" height="300" viewBox="0 0 450 300">

  <rect id="rect1" x="25"  y="25"  width="225" height="175" fill="white" stroke="black"/>
  <rect id="rect2" x="200" y="125" width="225" height="150" fill="white" stroke="black" style="shape-margin:25px;"/>

  <text style="shape-inside:url(#rect1); shape-subtract:url(#rect2); shape-padding:25px; text-align:justified;">
    Lorem ipsum ...
  </text>

  <text style="shape-inside:url(#rect2); shape-padding:25px; text-align:justified;">
    Lorem ipsum ...
  </text>

</svg>
```

{{EmbedLiveSample("Example", "120", "120")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Default Value</th>
      <td><code>none</code></td>
    </tr>
    <tr>
      <th scope="row">Value</th>
      <td>{{cssxref("basic-shape")}} | {{glossary("uri")}}</td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

- `<basic-shape>`
  - : The shape is computed based on the values of one of {{SVGElement("circle")}}, {{SVGElement("ellipse")}} or {{SVGElement("polygon")}}.
- `<uri>`
  - : For any `<uri>` that references an SVG shape element, that element defines the contributing shape, expanded by the value of its {{cssxref("shape-margin")}} distance. For any `<uri>` that references an image, the contributing shape is extracted and computed based on the alpha channel of the specified image using the {{cssxref("shape-image-threshold")}}. If an `<uri>`does not reference an SVG shape element or an image, that `<uri>` is ignored.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
