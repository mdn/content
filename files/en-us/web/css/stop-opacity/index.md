---
title: stop-opacity
slug: Web/CSS/stop-opacity
page-type: css-property
browser-compat: css.properties.stop-opacity
---

{{CSSRef}}

The **`stop-opacity`** [CSS](/en-US/docs/Web/CSS) property defines the opacity of a given color gradient stop in the SVG {{SVGElement("stop")}} element within an SVG gradient. If present, it overrides the element's {{SVGAttr("stop-opacity")}} attribute.

The property value impacts the {{cssxref("stop-color")}}'s alpha channel; it can increase the transparency of a `<stop>`'s color but can not make the color defined by the `stop-color` property more opaque.

> [!NOTE]
> The `stop-opacity` property only applies to {{SVGElement('stop')}} elements nested in an {{SVGElement("svg")}}. It doesn't apply to other SVG, HTML, or pseudo-elements.

## Syntax

```css
/* numeric and percentage values */
stop-opacity: 0.2;
stop-opacity: 20%;

/* Global values */
stop-opacity: inherit;
stop-opacity: initial;
stop-opacity: revert;
stop-opacity: revert-layer;
stop-opacity: unset;
```

### Values

The `<opacity-value>` is a {{cssxref("number")}} or {{cssxref("percentage")}} denoting the opacity of the SVG gradient `<stop>` element.

- {{cssxref("number")}}

  - : A numeric value between `0` and `1`, inclusive.

- {{cssxref("percentage")}}

  - : A percentage value between `0%` and `100%`, inclusive.

With `0` or `0%` set, the stop is fully transparent. With `1` or `100%` set, the element is the full opacity of the `stop-color` value, which may or may not be partially opaque.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Defining the opacity of a SVG gradient color stop

This example demonstrates the basic use case of `stop-opacity`, and how the CSS `stop-opacity` property takes precedence over the `stop-opacity` attribute.

#### HTML

We have an SVG with a few {{SVGElement("polygon")}} stars and three {{SVGElement("linearGradient")}} elements: each has three {{SVGElement("stop")}} elements defining three color-stops that create a gradient going from blue to white to pink; the only difference between them is the `id` value.

```html
<svg viewBox="0 0 250 120" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="myGradient1">
      <stop offset="5%" stop-color="#66ccff" stop-opacity="1" />
      <stop offset="50%" stop-color="#fefefe" stop-opacity="1" />
      <stop offset="95%" stop-color="#f4aab9" stop-opacity="1" />
    </linearGradient>
    <linearGradient id="myGradient2">
      <stop offset="5%" stop-color="#66ccff" stop-opacity="1" />
      <stop offset="50%" stop-color="#fefefe" stop-opacity="1" />
      <stop offset="95%" stop-color="#f4aab9" stop-opacity="1" />
    </linearGradient>
    <linearGradient id="myGradient3">
      <stop offset="5%" stop-color="#66ccff" stop-opacity="1" />
      <stop offset="50%" stop-color="#fefefe" stop-opacity="1" />
      <stop offset="95%" stop-color="#f4aab9" stop-opacity="1" />
    </linearGradient>
  </defs>
  <polygon points="40,10 10,100 80,40 0,40 70,100" />
  <polygon points="125,10 95,100 165,40 85,40 155,100" />
  <polygon points="210,10 180,100 250,40 170,40 240,100" />
</svg>
```

#### CSS

We include a {{cssxref("stroke")}} and {{cssxref("stroke-width")}} making the polygon path line visible.

Each `polygon` has a gradient background set using the {{cssxref("fill")}} property; the gradient's `id` is the `url()` parameter. We set `magenta` as the fallback color.

We define the opacity of the stops of each gradient using the `stop-opacity` property.

The SVG has a striped background to make the transparency settings more apparent.

```css hidden
svg {
  border: 1px solid;
  height: calc(100vh - 20px);
  margin-bottom: 10px;
  background: repeating-linear-gradient(
    to top left,
    white 0 9px,
    black 9px 10px
  );
}
```

```css
polygon {
  stroke: #333;
  stroke-width: 1px;
}
polygon:nth-of-type(1) {
  fill: url("#myGradient1") magenta;
}
polygon:nth-of-type(2) {
  fill: url("#myGradient2") magenta;
}
polygon:nth-of-type(3) {
  fill: url("#myGradient3") magenta;
}

#myGradient1 stop {
  stop-opacity: 1;
}
#myGradient2 stop {
  stop-opacity: 0.8;
}
#myGradient3 stop {
  stop-opacity: 25%;
}
```

#### Results

{{EmbedLiveSample("Defining the opacity of a SVG gradient color stop", "300", "200")}}

The first star is fully opaque. The fill of the second star is 80% opaque because the color stops are slightly translucent; the `stop-opacity: 0.8;` overrode the `stop-opacity="1"` element attribute value. The fill of the last star is barely noticeable with color stops that are 25% opaque. Note the stroke is the same opaque dark grey in all cases.

> [!NOTE]
> Because we used the same `stop-opacity` value for all the sibling `<stop>` elements in the linear gradient, we could have instead used a single `<linearGradient>` with fully opaque stops, and set a value for each `<polygon>`s {{cssxref("fill-opacity")}} property instead.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- SVG {{SVGAttr("stop-opacity")}} attribute
- Presentation properties: `stop-opacity`, {{cssxref("clip-rule")}}, {{cssxref("color-interpolation-filters")}}, {{cssxref("fill-opacity")}}, {{cssxref("fill-rule")}}, {{cssxref("fill")}}, {{cssxref("marker-end")}}, {{cssxref("marker-mid")}}, {{cssxref("marker-start")}}, {{cssxref("shape-rendering")}}, {{cssxref("stop-color")}}, {{cssxref("stroke")}}, {{cssxref("stroke-dasharray")}}, {{cssxref("stroke-dashoffset")}}, {{cssxref("stroke-linecap")}}, {{cssxref("stroke-linejoin")}}, {{cssxref("stroke-miterlimit")}}, {{cssxref("stroke-opacity")}}, {{cssxref("stroke-width")}}, {{cssxref("text-anchor")}}, and {{cssxref("vector-effect")}}
- {{cssxref("opacity")}}
- {{cssxref("background-color")}}
- {{cssxref("color_value", "&lt;color>")}}
- {{cssxref("basic-shape")}} data type
