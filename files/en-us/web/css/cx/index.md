---
title: cx
slug: Web/CSS/cx
page-type: css-property
browser-compat: css.properties.cx
---

{{CSSRef}}

The **`cx`** [CSS](/en-US/docs/Web/CSS) property defines the x-axis center point of an SVG {{SVGElement("circle")}} or {{SVGElement("ellipse")}} element. If present, it overrides the element's {{SVGAttr("cx")}} attribute.

> [!NOTE]
> While SVG the {{SVGAttr("cx")}} attribute is relevant to the SVG {{SVGElement("radialGradient")}} element, the `cx` property only applies to {{SVGElement("circle")}} and {{SVGElement("ellipse")}} elements nested in an {{SVGElement("svg")}}. It doesn't apply to `<radialGradient>` or other SVG elements nor to HTML elements or pseudo-elements.

## Syntax

```css
/* length and percentage values */
cx: 20px;
cx: 20%;
cx: 20;

/* Global values */
cx: inherit;
cx: initial;
cx: revert;
cx: revert-layer;
cx: unset;
```

### Values

The {{cssxref("length-percentage")}} property value denotes the horizontal center of the circle or ellipse.

- {{cssxref("length-percentage")}}

  - : As an absolute or relative length, it can be expressed in any unit allowed by the CSS {{cssxref("&lt;length&gt;")}} data type. Unitless and `px` values are SVG coordinate units if the {{SVGAttr("viewBox")}} attribute is included; otherwise, CSS pixel units are used. Negative values are invalid.

- {{cssxref("percentage")}}

  - : Percentages refer to the width of the current SVG viewport.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Defining the x-axis coordinate of a circle and ellipse

This example demonstrates the basic use case of `cx`, and how the CSS `cx` property takes precedence over the `cx` attribute.

#### HTML

We include two identical `<circle>` and two identical `<ellipse>` elements in an SVG; their `cx` attribute values are `50` and `150`, respectively.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="30" />
  <circle cx="50" cy="50" r="30" />
  <ellipse cx="150" cy="50" rx="20" ry="40" />
  <ellipse cx="150" cy="50" rx="20" ry="40" />
</svg>
```

#### CSS

With CSS, we style only the first circle and first ellipse, allowing their twin shapes to use default styles (with ({{cssxref("fill")}} defaulting to black). We use the `cx` property to override the value of the SVG {{SVGAttr("cx")}} attribute and also give it a `fill` and {{cssxref("stroke")}} to differentiate the first shapes in each pair from their twin. The browser renders SVG images as `300px` wide and `150px` tall by default.

```css
svg {
  border: 1px solid;
}

circle:first-of-type {
  cx: 30px;
  fill: lightgreen;
  stroke: black;
}
ellipse:first-of-type {
  cx: 180px;
  fill: pink;
  stroke: black;
}
```

#### Results

{{EmbedLiveSample("Defining the x-axis coordinate of a circle and ellipse", "300", "180")}}

The style circle's center is `30px` from the left edge of the SVG viewport and the styled ellipse is `180px` from that edge, as defined in the CSS `cx` property values. The unstyled shapes centers are `50px` and `150px` from the left edge of the SVG viewport, as defined in their SVG `cx` attribute values.

### x-axis coordinates as percentage values

This example demonstrates using percentage values for `cx`.

#### HTML

We use the same markup as the previous example.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="30" />
  <circle cx="50" cy="50" r="30" />
  <ellipse cx="150" cy="50" rx="20" ry="40" />
  <ellipse cx="150" cy="50" rx="20" ry="40" />
</svg>
```

#### CSS

We use CSS which is similar to the previous example. The only difference is the CSS `cx` property value; in this case, we use percentage values of `30%` for the `<circle>` and `80%` for the `<ellipse>`.

```css
svg {
  border: 1px solid;
}

circle:first-of-type {
  cx: 30%;
  fill: lightgreen;
  stroke: black;
}
ellipse:first-of-type {
  cx: 80%;
  fill: pink;
  stroke: black;
}
```

#### Results

{{EmbedLiveSample("x-axis coordinates as percentage values", "300", "180")}}

When using percentage values for `cx`, the values are relative to the width of the SVG viewport. Here, the x-axis coordinates of the center of the style circle and ellipse are `30%` and `80%`, respectively, of the width of the current SVG viewport. As the width defaulted to `300px`, the `cx` values are `90px` and `240px` from the SVG viewport's left edge.

### Using unitless values

This example demonstrates the effects of the viewBox attribute on unitless `cx` value declaration.

#### HTML

We include three SVG images, each with the same two circles as seen in the previous examples. The only difference is the `viewBox` attribute included in the second and third images.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="30" />
  <circle cx="50" cy="50" r="30" />
</svg>
<svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="30" />
  <circle cx="50" cy="50" r="30" />
</svg>
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="30" />
  <circle cx="50" cy="50" r="30" />
</svg>
```

#### CSS

We set all three images to be `300px` wide. We style only the first circle in each SVG, allowing the second circle to use default styles.

We include a unitless `cx` value of `30`.

```css
svg {
  border: 1px solid;
  width: 300px;
}

circle:first-of-type {
  cx: 30;
  fill: lightgreen;
  stroke: black;
}
```

#### Results

The effect of the CSS `cx` property values differs depending on whether the `viewBox` is defined.

{{EmbedLiveSample("Using unitless values", "300", "460")}}

The circle's horizontal center point in `30` in all cases, which is the same value as the radius defined with the {{SVGAttr("r")}} SVG attribute, making the styled green circle abut the left edge of the SVG viewport. When the `viewBox` is omitted, CSS pixels are used, and the `30` is equal to `30px`; the center of green circle in the first SVG is `30` CSS pixels from the left edge of the SVG viewport.

The `viewBox` attribute is defined in the second and third SVG images as `100` and `200` SVG units wide, respectively. This makes `30` the equivalent of `30%` of the second SVG's viewbox and `15%` of the third SVG's viewbox. Both SVGs are `300px` wide when displayed, meaning the circles' center point along the x-axis (and radii) is the equivalent of `90px` and `45px`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- SVG {{SVGAttr("cx")}} attribute
- Geometry properties: `cx`, {{cssxref("cy")}}, {{cssxref("r")}}, {{cssxref("rx")}}, {{cssxref("ry")}}, {{cssxref("x")}}, {{cssxref("y")}}, {{cssxref("width")}}, {{cssxref("height")}}
- {{cssxref("fill")}}
- {{cssxref("stroke")}}
- {{cssxref("paint-order")}}
- {{cssxref("border-radius")}} shorthand property
- {{cssxref("radial-gradient")}}
- {{cssxref("basic-shape")}} data type
