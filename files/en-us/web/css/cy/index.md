---
title: cy
slug: Web/CSS/cy
page-type: css-property
browser-compat: css.properties.cy
---

{{CSSRef}}

The **`cy`** [CSS](/en-US/docs/Web/CSS) property defines the y-axis center point of an SVG {{SVGElement("circle")}} or {{SVGElement("ellipse")}} elements. If present, it overrides the element's {{SVGAttr("cy")}} attribute.

> [!NOTE]
> While the SVG {{SVGElement("radialGradient")}} element supports the {{SVGAttr("cy")}} attribute, the `cy` property only applies to {{SVGElement("circle")}} and {{SVGElement("ellipse")}} elements nested in an {{SVGElement("svg")}}. This attribute does not apply to `<radialGradient>` or other SVG elements nor to HTML elements or pseudo-elements.

## Syntax

```css
/* length and percentage values */
cy: 3px;
cy: 20%;

/* Global values */
cy: inherit;
cy: initial;
cy: revert;
cy: revert-layer;
cy: unset;
```

### Values

The {{cssxref("length")}} and {{cssxref("percentage")}} values denote the vertical center of the circle or ellipse.

- {{cssxref("length")}}

  - : As an absolute or relative length, it can be expressed in any unit allowed by the CSS {{cssxref("&lt;length&gt;")}} data type. Negative values are invalid.

- {{cssxref("percentage")}}

  - : Percentages refer to the height of the current SVG viewport.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Defining the y-axis coordinate of a circle and ellipse

In this example, we have two identical `<circle>` and two identical `<ellipse>` elements in an SVG; their `cy` attribute values ar `50` and `150`, respectively.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="30" />
  <circle cx="50" cy="50" r="30" />
  <ellipse cx="150" cy="50" rx="20" ry="40" />
  <ellipse cx="150" cy="50" rx="20" ry="40" />
</svg>
```

With CSS, we style only the first circle and first ellipse, allowing their twin shapes to use default styles (with ({{cssxref("fill")}} defaulting to black). We use the `cy` property to override the value of the SVG {{SVGAttr("cy")}} attribute and also give it a `fill` and {{cssxref("stroke")}} to differentiate the first shapes in each pair from their twin. The browser renders SVG images as `300px` wide and `150px` tall by default.

```css
svg {
  border: 1px solid;
}

circle:first-of-type {
  cy: 30px;
  fill: lightgreen;
  stroke: black;
}
ellipse:first-of-type {
  cy: 100px;
  fill: pink;
  stroke: black;
}
```

{{EmbedLiveSample("Defining the y-axis coordinate of a circle and ellipse", "300", "180")}}

The styled circle's center is `30px` from the top edge of the SVG viewport and the styled ellipse is `100px` from that edge, as defined in the CSS `cy` property values. The unstyled shapes centers are both `50px` from the top edge of the SVG viewport, as defined in their SVG `cy` attribute values.

### y-axis coordinates as percentage values

In this example, we use the same markup as the previous example. The only difference is the CSS `cy` property value; in this case, we use percentage values of `30%` and `50%`.

```html hidden
<svg xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="30" />
  <circle cx="50" cy="50" r="30" />
  <ellipse cx="150" cy="50" rx="20" ry="40" />
  <ellipse cx="150" cy="50" rx="20" ry="40" />
</svg>
```

```css
svg {
  border: 1px solid;
}

circle:first-of-type {
  cy: 30%;
  fill: lightgreen;
  stroke: black;
}
ellipse:first-of-type {
  cy: 50%;
  fill: pink;
  stroke: black;
}
```

{{EmbedLiveSample("y-axis coordinates as percentage values", "300", "180")}}

In this case, the y-axis coordinates of the center of the circle and ellipse are `30%` and `50%` of the height of the current SVG viewport, respectively. As the image's height defaulted to `150px`, meaning the `cy` value is the equivalent of `45px` and `120px`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- SVG {{SVGAttr("cy")}} attribute
- Geometry properties: `cy`, {{cssxref("cx")}}, {{cssxref("r")}}, {{cssxref("rx")}}, {{cssxref("ry")}}, {{cssxref("x")}}, {{cssxref("y")}}, {{cssxref("width")}}, {{cssxref("height")}}
- {{cssxref("fill")}}
- {{cssxref("stroke")}}
- {{cssxref("paint-order")}}
- {{cssxref("border-radius")}} shorthand property
- {{cssxref("gradient/radial-gradient", "radial-gradient")}}
- {{cssxref("basic-shape")}} data type
