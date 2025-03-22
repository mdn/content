---
title: fill
slug: Web/CSS/fill
page-type: css-property
browser-compat: css.properties.fill
---

{{CSSRef}}

The **`fill`** [CSS](/en-US/docs/Web/CSS) property defines how SVG text content and the interior canvas of SVG shapes are filled or painted. If present, it overrides the element's {{SVGAttr("fill")}} attribute.

The areas inside the outline of the SVG shape or text are painted. What is "inside" a shape may not always be clear. The paths defining a shape may overlap. The areas considered "inside" these complex shapes are clarified by the {{cssxref("fill-rule")}} property or attribute.

If subpaths are open, `fill` closes the path before painting, as if a "closepath" command were included connecting the last point of the subpath with the first point of the subpath. In other words, `fill` applies to open subpaths within `path` elements (i.e., subpaths without a closepath command) and `polyline` elements.

> [!NOTE]
> The `fill` property only applies to {{SVGElement('circle')}}, {{SVGElement('ellipse')}}, {{SVGElement('path')}}, {{SVGElement('polygon')}}, {{SVGElement('polyline')}}, {{SVGElement('rect')}}, {{SVGElement('text')}}, {{SVGElement('textPath')}}, {{SVGElement('tref')}}, and {{SVGElement('tspan')}} elements nested in an {{SVGElement("svg")}}. It doesn't apply other SVG, HTML, or pseudo-elements.

## Syntax

```css
/* keywords */
fill: none;
fill: context-fill;
fill: context-stroke;

/* <color> values */
fill: red;
fill: hsl(120deg 75% 25% / 60%);

/* <url> values */
fill: url(#gradientElementID);
fill: url(star.png);

/* <url> with fallback */
fill: url(#gradientElementID) blue;
fill: url(star.png) none;

/* Global values */
fill: inherit;
fill: initial;
fill: revert;
fill: revert-layer;
fill: unset;
```

### Values

- `none`

  - : No `fill` is painted; the areas inside the stroke, if any, are transparent.

- `context-fill`

  - : Uses the paint value of `fill` from a context element.

- `context-stroke`

  - : Uses the paint value of `stroke` from a context element.

- {{cssxref("color_value", "&lt;color>")}}

  - : The color of the fill as any valid CSS {{cssxref("color_value", "&lt;color>")}} value.

- `<url>`

  - : A URL reference to an SVG paint server element, such as a {{SVGElement("linearGradient")}}, {{SVGElement("radialGradient")}}, or {{SVGElement("pattern")}}. The resource reference can optionally be followed by a `<color>` or `none`, which will be used as a fallback if the referenced paint server doesn't resolve.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Defining fill values for SVG elements

This example demonstrates how a `fill` is declared, the effect of the property, and how the CSS `fill` property takes precedence over the `fill` attribute.

#### HTML

We have an SVG with two complex shapes defined using the SVG {{SVGElement('polygon')}} and {{SVGElement('path')}} elements. Both have the `fill` attribute set to `#000` (equivalent to the default, `black`). We add a dark grey stroke of `#666` using the SVG {{SVGAttr("stroke")}} attribute but could have used the {{CSSXRef("stroke")}} property.

```html
<svg viewBox="0 0 220 120" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M 10,5 l 90,0 -80,80 0,-60 80,80 -90,0 z"
    stroke="#666"
    fill="#000" />
  <polygon
    points="180,10 150,100 220,40 140,40 210,100"
    stroke="#666"
    fill="#000" />
</svg>
```

#### CSS

We set `fill` values on the shapes in the SVG.

```css hidden
svg {
  border: 1px solid;
  height: calc(100vh - 20px);
  margin-bottom: 10px;
}
```

```css
path {
  fill: red;
}
polygon {
  fill: hsl(0deg 100% 50% / 60%);
}
```

#### Results

{{EmbedLiveSample("Defining fill values for SVG elements", "300", "170")}}

The CSS `fill` property value overrides the SVG `fill` attribute value, resulting in both shapes being filled with a red color; the polygon's red is translucent.

### Using fill keyword values

This example demonstrates using keyword values for `fill`.

#### HTML

We include three {{SVGElement("path")}} elements and a {{SVGElement("marker")}} element that adds a {{SVGElement("circle")}} to every path point. We set the circle marker to be black with a grey fill with the SVG {{SVGAttr("stroke")}} and {{SVGAttr("fill")}} attributes.

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 90">
  <path d="M 10 44.64 L 30 10 L 70 10 L 90 44.64 L 70 79.28 L 30 79.28 Z" />
  <path d="M 100 44.64 L 80 10 L 120 10 L 140 44.64 L 120 79.28 L 80 79.28 Z" />
  <path
    d="M 150 44.64 L 130 10 L 170 10 L 190 44.64 L 170 79.28 L 130 79.28 Z" />
  <marker
    id="circle"
    markerWidth="12"
    markerHeight="12"
    refX="6"
    refY="6"
    markerUnits="userSpaceOnUse">
    <circle cx="6" cy="6" r="3" stroke-width="2" stroke="black" fill="grey" />
  </marker>
</svg>
```

#### CSS

We set different `stroke` and `fill` colors on each path. The first path, the one with a red border, has its `fill` set to `none`. We set the circle marker's stroke and fill to the same color as the stroke of the element they're marking, using the `context-stroke` value.

```css hidden
svg {
  border: 1px solid;
  height: calc(100vh - 20px);
  margin-bottom: 10px;
}
```

```css
path {
  stroke-width: 2px;
  marker: url(#circle);
}
path:nth-of-type(1) {
  stroke: red;
  fill: none;
}
path:nth-of-type(2) {
  stroke: green;
  fill: lightgreen;
}
path:nth-of-type(3) {
  stroke: blue;
  fill: lightblue;
}
circle {
  stroke: context-stroke;
  fill: context-stroke;
}
```

#### Results

{{EmbedLiveSample("Using fill keyword values", "300", "170")}}

Note how the first path has a transparent background because the `fill` is `none`, overriding the default `fill` of `black`. The circles are filled with the color of the stroke. If you change the value to `context-fill`, the circles will be transparent, `lightgreen` and `lightblue` instead of `red`, `green`, and `blue`.

### Fills and fallbacks

This example demonstrates how to include a `url()` value with a fallback as a `fill` value.

#### HTML

We have an SVG containing two {{SVGElement("polygon")}} stars and a {{SVGElement("linearGradient")}} that goes from green to gold to red.

```html
<svg viewBox="0 0 220 120" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="myGradient">
      <stop offset="5%" stop-color="green" />
      <stop offset="50%" stop-color="gold" />
      <stop offset="95%" stop-color="red" />
    </linearGradient>
  </defs>
  <polygon points="80,10 50,100 120,40 40,40 110,100" />
  <polygon points="180,10 150,100 220,40 140,40 210,100" />
</svg>
```

#### CSS

We set `fill` values on the polygons in the SVG, providing a `url()` value and a fallback.

```css hidden
svg {
  border: 1px solid;
  height: calc(100vh - 20px);
  margin-bottom: 10px;
}
```

```css
polygon:first-of-type {
  fill: url("#myGradient") magenta;
}
polygon:last-of-type {
  fill: url("#MISSINGIMAGE") magenta;
}
```

#### Results

{{EmbedLiveSample("Fills and fallbacks", "300", "170")}}

The first star has a gradient as a background. The second star uses the fallback value, as the element referenced in the `url()` does not exist.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- SVG {{SVGAttr("fill")}} attribute
- Presentation properties: `fill`, {{cssxref("clip-rule")}}, {{cssxref("color-interpolation-filters")}}, {{cssxref("fill-opacity")}}, {{cssxref("fill-rule")}}, {{cssxref("marker-end")}}, {{cssxref("marker-mid")}}, {{cssxref("marker-start")}}, {{cssxref("shape-rendering")}}, {{cssxref("stop-color")}}, {{cssxref("stop-opacity")}}, {{cssxref("stroke")}}, {{cssxref("stroke-dasharray")}}, {{cssxref("stroke-dashoffset")}}, {{cssxref("stroke-linecap")}}, {{cssxref("stroke-linejoin")}}, {{cssxref("stroke-miterlimit")}}, {{cssxref("stroke-opacity")}}, {{cssxref("stroke-width")}}, {{cssxref("text-anchor")}}, and {{cssxref("vector-effect")}}
- {{cssxref("opacity")}}
- {{cssxref("background-color")}}
- {{cssxref("color_value", "&lt;color>")}}
- {{cssxref("basic-shape")}} data type
