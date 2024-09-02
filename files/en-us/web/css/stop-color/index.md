---
title: stop-color
slug: Web/CSS/stop-color
page-type: css-property
browser-compat: css.properties.stop-color
---

{{CSSRef}}

The **`stop-color`** [CSS](/en-US/docs/Web/CSS) property defines the color to use for an SVG {{SVGElement("stop")}} element within a gradient. If present, it overrides the element's {{SVGAttr("stop-color")}} attribute.

> [!NOTE]
> The `stop-color` property only applies to {{SVGElement('stop')}} elements nested in an {{SVGElement("svg")}}. It doesn't apply to other SVG, HTML, or pseudo-elements.

## Syntax

```css
/* <color> values */
stop-color: red;
stop-color: hsl(120deg 75% 25% / 60%);
stop-color: currentcolor;

/* Global values */
stop-color: inherit;
stop-color: initial;
stop-color: revert;
stop-color: revert-layer;
stop-color: unset;
```

### Values

- {{cssxref("color_value", "&lt;color>")}}

  - : The color of the fill. This can be any valid CSS {{cssxref("color_value", "&lt;color>")}} value.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Defining the color stops of SVG gradients

This example demonstrates the basic use case of `stop-color`, and how the CSS `stop-color` property takes precedence over the `stop-color` attribute.

#### HTML

We have an SVG with three {{SVGElement("rect")}} squares and three {{SVGElement("linearGradient")}} elements. Each gradient has four {{SVGElement("stop")}} elements creating gradients that go from black to white and then white to grey; the only difference between them is the `id` value.

```html
<svg viewBox="0 0 264 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="myGradient1">
      <stop offset="25%" stop-color="#000" />
      <stop offset="40%" stop-color="#fff" />
      <stop offset="60%" stop-color="#fff" />
      <stop offset="75%" stop-color="#333" />
    </linearGradient>
    <linearGradient id="myGradient2">
      <stop offset="25%" stop-color="#000" />
      <stop offset="40%" stop-color="#fff" />
      <stop offset="60%" stop-color="#fff" />
      <stop offset="75%" stop-color="#333" />
    </linearGradient>
    <linearGradient id="myGradient3">
      <stop offset="25%" stop-color="#000" />
      <stop offset="40%" stop-color="#fff" />
      <stop offset="60%" stop-color="#fff" />
      <stop offset="75%" stop-color="#333" />
    </linearGradient>
  </defs>
  <rect x="2" y="10" width="80" height="80" fill="url('#myGradient1')" />
  <rect x="92" y="10" width="80" height="80" fill="url('#myGradient2')" />
  <rect x="182" y="10" width="80" height="80" fill="url('#myGradient3')" />
</svg>
```

#### CSS

We include a {{cssxref("stroke")}} and {{cssxref("stroke-width")}} outlining the rectangle. We define the colors of the first and last stops in each gradient, overriding their `stop-color` attribute values, using the `stop-color` property. Various CSS {{cssxref("color_value", "&lt;color>")}} syntaxes are shown.

```css hidden
svg {
  border: 1px solid;
  height: calc(100vh - 20px);
  margin-bottom: 10px;
}
```

```css
rect {
  stroke: #333;
  stroke-width: 1px;
}

#myGradient1 {
  stop:first-of-type {
    stop-color: #66ccff;
  }
  stop:last-of-type {
    stop-color: #f4aab9;
  }
}
#myGradient2 {
  stop:first-of-type {
    stop-color: yellow;
  }
  stop:last-of-type {
    stop-color: purple;
  }
}
#myGradient3 {
  stop:first-of-type {
    stop-color: hsl(0deg 100% 50%);
  }
  stop:last-of-type {
    stop-color: hsl(20deg 100% 50%);
  }
}
```

#### Results

{{EmbedLiveSample("Defining the color stops of SVG gradients", "300", "200")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- SVG {{SVGAttr("stop-color")}} attribute
- Presentation properties: `stop-color`, {{cssxref("clip-rule")}}, {{cssxref("color-interpolation-filters")}}, {{cssxref("fill-opacity")}}, {{cssxref("fill-rule")}}, {{cssxref("fill")}}, {{cssxref("marker-end")}}, {{cssxref("marker-mid")}}, {{cssxref("marker-start")}}, {{cssxref("shape-rendering")}}, {{cssxref("stop-opacity")}}, {{cssxref("stroke")}}, {{cssxref("stroke-dasharray")}}, {{cssxref("stroke-dashoffset")}}, {{cssxref("stroke-linecap")}}, {{cssxref("stroke-linejoin")}}, {{cssxref("stroke-miterlimit")}}, {{cssxref("stroke-opacity")}}, {{cssxref("stroke-width")}}, {{cssxref("text-anchor")}}, and {{cssxref("vector-effect")}}
- {{cssxref("opacity")}}
- {{cssxref("background-color")}}
- {{cssxref("color_value", "&lt;color>")}}
- {{cssxref("basic-shape")}} data type
