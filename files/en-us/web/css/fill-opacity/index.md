---
title: fill-opacity
slug: Web/CSS/fill-opacity
page-type: css-property
browser-compat: css.properties.fill-opacity
---

{{CSSRef}}

The **`fill-opacity`** [CSS](/en-US/docs/Web/CSS) property defines the opacity of the painting operation (color, gradient, pattern, etc.) applied to SVG shapes or text content elements to fill the element. The property defines the opacity of the element's `fill` only; it does not affect the stroke. If present, it overrides the element's {{SVGAttr("fill-opacity")}} attribute.

> [!NOTE]
> The `fill-opacity` property only applies to {{SVGElement("circle")}}, {{SVGElement("ellipse")}}, {{SVGElement("path")}}, {{SVGElement("polygon")}}, {{SVGElement("polyline")}}, {{SVGElement("rect")}}, {{SVGElement("text")}}, {{SVGElement("textPath")}}, and {{SVGElement("tspan")}} elements nested in an {{SVGElement("svg")}}. It doesn't apply to other SVG, HTML, or pseudo-elements.

## Syntax

```css
/* numeric and percentage values */
fill-opacity: 0.2;
fill-opacity: 20%;

/* Global values */
fill-opacity: inherit;
fill-opacity: initial;
fill-opacity: revert;
fill-opacity: revert-layer;
fill-opacity: unset;
```

### Values

The {{cssxref("number")}} and {{cssxref("percentage")}} values denote the opacity of the `fill` of the element.

- {{cssxref("number")}}

  - : A numeric value between `0` and `1`, inclusive.

- {{cssxref("percentage")}}

  - : A percentage value between `0%` and `100%`, inclusive.

With `0` or `0%`, the element is fully transparent. With `1` or `100%`, the element is fully opaque. With values in between, the element is semi-transparent, with content behind the element being visible.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Defining the fill opacity of SVG elements

This example demonstrates the basic use case of `fill-opacity`, and how the CSS `fill-opacity` property takes precedence over the `fill-opacity` attribute and has no effect on any `stroke` applied to a shape.

#### HTML

We include several different SVG graphic elements and set the `fill-opacity` attribute of each one to `1` (except `line`), meaning the fill of each element is opaque. The `fill-opacity` SVG attribute does not apply to {{SVGElement("line")}}.

```html
<svg viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="30" height="30" fill-opacity="1" />
  <rect x="60" y="10" rx="10" ry="10" width="30" height="30" fill-opacity="1" />
  <circle cx="25" cy="75" r="20" fill-opacity="1" />
  <ellipse cx="75" cy="75" rx="20" ry="10" fill-opacity="1" />
  <line x1="50" x2="90" y1="40" y2="60" stroke="black" stroke-width="5" />
  <polyline
    points="60 90 65 100 70 95 75 110 80 105 85 120 90 115 95 130 100 125"
    fill-opacity="1" />
  <path d="M20,130 Q40,105 50,130 T90,130" fill-opacity="1" />
</svg>
```

#### CSS

With CSS, we use the `fill-opacity` property to override the value of the SVG {{SVGAttr("fill-opacity")}} attribute, giving each SVG element a different value.

We add a {{cssxref("stroke")}} to the circle and ellipse, to demonstrate that the opacity of the stroke is not impacted by the `fill-opacity` property.

Other SVG styles are set, including a background image to allow the opacity of each element to be more easily seen. These are not shown for the sake of brevity.

```css hidden
svg {
  border: 1px solid;
  height: calc(100vh - 20px);
  background: repeating-linear-gradient(
    to bottom right,
    transparent 0 10px,
    #ccc 10px 11px
  );
}
```

```css
svg > * {
  fill: black;
}
rect:last-of-type {
  fill-opacity: 0.1;
}
circle {
  fill-opacity: 0.6;
}
ellipse {
  fill-opacity: 40%;
}
line {
  fill-opacity: 10%;
}
polyline {
  fill-opacity: 50%;
}
path {
  fill-opacity: 0.5;
}

circle,
ellipse {
  stroke: black;
  stroke-width: 3px;
}
```

#### Results

{{EmbedLiveSample("Defining the fill opacity of SVG elements", "300", "360")}}

Only two elements are fully opaque: the first rectangle and the line. The first rectangle is not matched by any of the selectors, therefore no CSS is applied and the `fill` is fully opaque. The `line` is matched, with `fill-opacity: 10%` set. However, the line has no `fill` paint operation — only the `stroke` is visible — therefore the declaration has no effect.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- SVG {{SVGAttr("fill-opacity")}} attribute
- Presentation properties: `fill-opacity`, {{cssxref("clip-rule")}}, {{cssxref("color-interpolation-filters")}}, {{cssxref("fill-rule")}}, {{cssxref("fill")}}, {{cssxref("marker-end")}}, {{cssxref("marker-mid")}}, {{cssxref("marker-start")}}, {{cssxref("shape-rendering")}}, {{cssxref("stop-color")}}, {{cssxref("stop-opacity")}}, {{cssxref("stroke")}}, {{cssxref("stroke-dasharray")}}, {{cssxref("stroke-dashoffset")}}, {{cssxref("stroke-linecap")}}, {{cssxref("stroke-linejoin")}}, {{cssxref("stroke-miterlimit")}}, {{cssxref("stroke-opacity")}}, {{cssxref("stroke-width")}}, {{cssxref("text-anchor")}}, and {{cssxref("vector-effect")}}
- {{cssxref("opacity")}}
- {{cssxref("background-color")}}
- {{cssxref("color_value", "&lt;color>")}}
- {{cssxref("basic-shape")}} data type
