---
title: fill
slug: Web/CSS/fill
page-type: css-property
browser-compat: css.properties.fill
---

{{CSSRef}}

The **`fill`** [CSS](/en-US/docs/Web/CSS) property defines how SVG text content and SVG shape's interior canvas are filled or painted. If present, it overrides the element's {{SVGAttr("fill")}} attribute

The areas inside the outline of the SVG shape or text are painted. For complex shapes, the areas considered "inside" the shape to be painted are clarified by the {{cssxref("fill-rule")}} property or attribute. If subpaths are open, `fill` closes the path before painting, as if a "closepath" command were included connecting the last point of the subpath with the first point of the subpath. In other words, `fill` applies to open subpaths within `path` elements (i.e., subpaths without a closepath command) and `polyline` elements.

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

  - : A URL reference to an SVG paint server element, such as {{SVGElement("linearGradient")}}, {{SVGElement("radialGradient")}}, or {{SVGElement("pattern")}} element. The resource reference can optionally be followed by a fall-back `<color>` or `none` which will be used as a fallback if the paint server referenced doesn't resolve.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Defining the fill rules for SVG elements

This example demonstrates how a `fill` is declared, the effect of the property, and how the CSS `fill` property takes precedence over the `fill` attribute.

#### HTML

We define an SVG with two complex shapes defined using the SVG {{SVGElement('polygon')}} and {{SVGElement('path')}} elements. The polygon has the SVG `fill` attribute set to `evenodd` and the star shaped path is set to `nonzero`, which is the default. To make the lines visible, we set the outline to `red` using the SVG {{SVGAttr("stroke")}} attribute, but could have used the {{CSSXRef("stroke")}} property.

```html hidden
`
<p>Original SVG</p>
```

```html
<svg viewBox="0 0 220 120" xmlns="http://www.w3.org/2000/svg">
  <polygon
    points="180,10 150,100 220,40 140,40 210,100"
    stroke="red"
    fill="evenodd" />
  <path
    d="M 10,5 l 90,0 -80,80 0,-60 80,80 -90,0 z"
    stroke="red"
    fill="nonzero" />
</svg>
```

```html hidden
<p><code>fill: nonzero;</code></p>
<svg viewBox="0 0 220 120" xmlns="http://www.w3.org/2000/svg">
  <polygon
    points="180,10 150,100 220,40 140,40 210,100"
    stroke="red"
    fill="evenodd" />
  <path
    d="M 10,5 l 90,0 -80,80 0,-60 80,80 -90,0 z"
    stroke="red"
    fill="nonzero" />
</svg>
<p><code>fill: evenodd;</code></p>
<svg viewBox="0 0 220 120" xmlns="http://www.w3.org/2000/svg">
  <polygon
    points="180,10 150,100 220,40 140,40 210,100"
    stroke="red"
    fill="evenodd" />
  <path
    d="M 10,5 l 90,0 -80,80 0,-60 80,80 -90,0 z"
    stroke="red"
    fill="nonzero" />
</svg>
```

The above SVG is repeated three times which isn't shown for the sake of brevity.

#### CSS

The shapes nested in the first SVG have no CSS applied. We set the shapes in the second SVG to use `nonzero`, setting all three shapes in the second SVG to use the `nonzero` value. The third SVG has all its nested shapes set to `evenodd`.

```css hidden
svg {
  border: 1px solid;
  height: calc(33vh - 2.5em);
  margin-bottom: 10px;
}
p {
  margin: 0;
}
```

```css
svg:nth-of-type(2) > * {
  fill: nonzero;
}
svg:nth-of-type(3) > * {
  fill: evenodd;
}
```

#### Results

{{EmbedLiveSample("Defining the fill rules for SVG elements", "300", "540")}}

With the `nonzero` value for `fill`, the "inside" of the shape is the entire shape. The `evenodd` value defines some space as empty. The first image renders the `fill` included as an attribute. Declaring the `fill` in the CSS overrides the attribute values in the second and third images.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- SVG {{SVGAttr("fill")}} attribute
- Presentation properties: `fill`, {{cssxref("clip-rule")}}, , {{cssxref("color-interpolation-filters")}}, {{cssxref("fill-opacity")}}, {{cssxref("fill-rule")}}, {{cssxref("marker-end")}}, {{cssxref("marker-mid")}}, {{cssxref("marker-start")}}, {{cssxref("shape-rendering")}}, {{cssxref("stop-color")}}, {{cssxref("stop-opacity")}}, {{cssxref("stroke")}}, {{cssxref("stroke-dasharray")}}, {{cssxref("stroke-dashoffset")}}, {{cssxref("stroke-linecap")}}, {{cssxref("stroke-linejoin")}}, {{cssxref("stroke-miterlimit")}}, {{cssxref("stroke-opacity")}}, {{cssxref("stroke-width")}}, {{cssxref("text-anchor")}}, and {{cssxref("vector-effect")}}
- {{cssxref("opacity")}}
- {{cssxref("background-color")}}
- {{cssxref("color_value", "&lt;color>")}}
- {{cssxref("basic-shape")}} data type
