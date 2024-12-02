---
title: lighting-color
slug: Web/CSS/lighting-color
page-type: css-property
browser-compat: css.properties.lighting-color
---

{{CSSRef}}

The **`lighting-color`** [CSS](/en-US/docs/Web/CSS) property defines the color of the light source for the {{SVGElement("feDiffuseLighting")}} and {{SVGElement("feSpecularLighting")}} SVG lighting filter primitives within an SVG {{SVGElement("filter")}}. If present, it overrides the element's {{SVGAttr("lighting-color")}} attribute.

> [!NOTE]
> The `lighting-color` property only applies to {{SVGElement("feDiffuseLighting")}} and {{SVGElement("feSpecularLighting")}} elements nested in an {{SVGElement("svg")}}. It doesn't apply to other SVG, HTML, or pseudo-elements.

## Syntax

```css
/* <color> values */
lighting-color: red;
lighting-color: hsl(120deg 75% 25% / 60%);
lighting-color: currentcolor;

/* Global values */
lighting-color: inherit;
lighting-color: initial;
lighting-color: revert;
lighting-color: revert-layer;
lighting-color: unset;
```

### Values

- {{cssxref("color_value", "&lt;color>")}}

  - : The lighting's color. This can be any valid CSS {{cssxref("color_value", "&lt;color>")}} value.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Defining the color of filter lighting

This example demonstrates the basic use case of `lighting-color`, and how the CSS `lighting-color` property takes precedence over the `lighting-color` attribute.

#### HTML

We have an SVG with two {{SVGElement("filter")}} elements, one with a `<feDiffuseLighting>` and one with a `<feSpecularLighting>` child. Each includes the SVG `lighting-color` attribute defining the lighting color as `red`. Both of these children have a {{SVGElement("fePointLight")}}, the required child that sets the light source. We included two {{SVGElement("rect")}} elements with a filter attribute; this is where the filters will be displayed.

```html
<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg">
  <filter id="flood1">
    <feDiffuseLighting lighting-color="red">
      <fePointLight x="75" y="30" z="10" />
    </feDiffuseLighting>
  </filter>
  <filter id="flood2">
    <feSpecularLighting specularExponent="5" lighting-color="red">
      <fePointLight x="225" y="75" z="5" />
    </feSpecularLighting>
  </filter>

  <rect id="r1" filter="url(#flood1)" />
  <rect id="r2" filter="url(#flood2)" />
</svg>
```

#### CSS

We define the size and position of our `<rect>` using the CSS {{cssxref("height")}}, {{cssxref("width")}}, {{cssxref("x")}}, and {{cssxref("y")}} properties. We also add a background image to the SVG to make any color alpha transparency more apparent:

```css
svg {
  background-image: repeating-linear-gradient(
    45deg,
    transparent 0 9px,
    #ccc 0px 10px
  );
}

rect {
  width: 100px;
  height: 100px;
  x: 10px;
  y: 10px;
}

#r2 {
  x: 150px;
}
```

We then apply different lighting color values to the filter's child elements using the CSS `lighting-color` property. We use a named color and a 3-digit hexadecimal color, but we can use any valid CSS color syntax:

```css
feDiffuseLighting {
  lighting-color: blue;
}

feSpecularLighting {
  lighting-color: #f09;
}
```

#### Results

{{EmbedLiveSample("Defining the color of filter lighting", "300", "220")}}

The attributes defined the color of both light filters as `red`, but these values were overridden by the CSS `lighting-color` values.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("color")}}
- {{cssxref("fill")}}
- {{cssxref("flood-color")}}
- {{cssxref("stop-color")}}
- {{cssxref("stroke")}}
- {{cssxref("flood-opacity")}}
- {{cssxref("background-color")}}
- {{cssxref("color_value", "&lt;color>")}}
- {{cssxref("filter-function")}}
- SVG {{SVGAttr("lighting-color")}} attribute
