---
title: r
slug: Web/CSS/r
page-type: css-property
browser-compat: css.properties.r
---

{{CSSRef}}

The **`r`** [CSS](/en-US/docs/Web/CSS) property defines the radius of a circle. It can only be used with the SVG {{SVGElement("circle")}} element and doesn't apply to other SVG or HTML elements. If present, it overrides the circle's {{SVGAttr("r")}} attribute. 

## Syntax

```css
/* length and percentage values */
r: 3px;
r: 20%;

/* Global values */
r: inherit;
r: initial;
r: revert;
r: revert-layer;
r: unset;
```

### Values

- `<length-percentage>`
  - : Denotes the size of the circle radius. As an absolute length, it can be expressed in any unit allowed by the CSS {{cssxref("&lt;length&gt;")}} data type. Percentages refer to the normalized diagonal of the current SVG viewport. Negative values are invalid.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Defining the radius of a circle

In this example, we have a `<circle>` in an SVG, which has a `0` radius.

```html
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="0" />
</svg>
```

With CSS, we use the `r` property, overriding the value of the SVG {{SVGAttr("r")}} attribute.

```css
svg {
  border: 1px solid black;
  width: 300px;
}

circle {
  r: 30px;
  fill: lightgreen;
  stroke: black;
}
```

{{EmbedLiveSample("Defining the radius of a circle", "300", "150")}}

### Defining the radius of a circle using percentages

In this example, we use the same markup as the previous example. The only difference is the `r` value; in this case, we use a percentage value.

```html hidden
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="0" />
</svg>
```

```css
svg {
  border: 1px solid black;
  width: 300px;
}

circle {
  r: 10%;
  fill: lightgreen;
  stroke: black;
}
```

{{EmbedLiveSample("Defining the radius of a circle using percentages", "300", "150")}}

In this case, the radius of the circle is `10%` of the normalized diagonal of the SVG viewport.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("fill")}}
- {{cssxref("stroke")}}
- {{cssxref("border-radius")}} shorthand property
- {{cssxref("radial-gradient")}}
- {{cssxref("basic-shape")}} data type
- SVG {{SVGAttr("r")}} attribute
