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

- `<length-percentage>`
  - : Denotes the horizontal center of the circle or ellipse. As an absolute length, it can be expressed in any unit allowed by the CSS {{cssxref("&lt;length&gt;")}} data type. Percentages refer to the width of the current SVG viewport. Unitless and `px` values are SVG coordinate units if the {{SVGAttr("viewBox")}} attribute is included; otherwise, CSS pixel units are used. Negative values are invalid.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Defining the x-axis coordinate of a circle and ellipse

In this example, we have two identical `<circle>` and two identical `<ellipse>` elements in an SVG; their `cx` attribute values ar `50` and `150`, respectively.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="30" />
  <circle cx="50" cy="50" r="30" />
  <ellipse cx="150" cy="50" rx="20" ry="40" />
  <ellipse cx="150" cy="50" rx="20" ry="40" />
</svg>
```

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

{{EmbedLiveSample("Defining the x-axis coordinate of a circle and ellipse", "300", "180")}}

The style circle's center is `30px` from the left edge of the SVG viewport and the styled ellipse is `180px` from that edge, as defined in the CSS `cx` property values. The unstyled shapes centers are `50px` and `150px` from the left edge of the SVG viewport, as defined in their SVG `cx` attribute values.

### x-axis coordinates as percentage values

In this example, we use the same markup as the previous example. The only difference is the CSS `cx` property value; in this case, we use percentage values of `30%` and `80%`.

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

{{EmbedLiveSample("x-axis coordinates as percentage values", "300", "180")}}

In this case, the x-axis coordinates of the center of the circle and ellipse are `30%` and `80%` of the width of the current SVG viewport, respectively. As the image's width defaulted to `300px`, meaning the `cx` value is the equivalent of `90px` and `240px`.

### Using unitless values

This example demonstrates the effects of the viewBox attribute on unitless `cx` value declaration.

We have three images, each with the same two circles as seen in the previous examples. The only difference is we include the `viewBox` attribute in the second and third images.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="30" />
  <circle cx="50" cy="50" r="30" />
</svg>
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="30" />
  <circle cx="50" cy="50" r="30" />
</svg>
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="30" />
  <circle cx="50" cy="50" r="30" />
</svg>
```

We set all three images to be `300px` wide. With CSS, we style only the first circle, allowing the second circle to use default styles.

We include a unitless `cx` of `30`. This value overrides the value of the SVG {{SVGAttr("cx")}} attribute, but the effect is different depending on whether the `viewBox` attribute is present, and the viewbox size defined.

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

{{EmbedLiveSample("Using unitless values", "300", "800")}}

The circle's horizontal center point in `30` in all cases. With a radius of `30`, the green circle will always abut the left edge of the SVG viewport, even though the appearance will differ. When no `viewBox` is set, CSS pixels are used. The first green circle's center is `30` CSS pixels from the left edge of the SVG viewport. In the other two SVGs, the `viewBox` is `100` and `200` SVG units wide, which makes `30` the equivalent of `30%` and `15%` of the SVG viewbox respectively. When the SVGs are scaled up to viewports that are `300px` wide, the `30` is the equivalent of `90px` and `45px`; with the radius similarly scaled.

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
