---
title: flood-color
slug: Web/CSS/flood-color
page-type: css-property
browser-compat: css.properties.flood-color
---

{{CSSRef}}

The **`flood-color`** [CSS](/en-US/docs/Web/CSS) property defines the color of the current filter primitive subregion in {{SVGElement("feFlood")}} and {{SVGElement("feDropShadow")}} elements within a {{SVGElement("filter")}}. If present, it overrides the element's {{SVGAttr("flood-color")}} attribute.

> [!NOTE]
> The `flood-color` property only applies to {{SVGElement("feFlood")}} and {{SVGElement("feDropShadow")}} elements nested in an {{SVGElement("svg")}}. It doesn't apply to other SVG, HTML, or pseudo-elements.

## Syntax

```css
/* <color> values */
flood-color: red;
flood-color: hsl(120deg 75% 25% / 60%);
flood-color: currentcolor;

/* Global values */
flood-color: inherit;
flood-color: initial;
flood-color: revert;
flood-color: revert-layer;
flood-color: unset;
```

### Values

- {{cssxref("color_value", "&lt;color>")}}

  - : The flood's color. This can be any valid CSS {{cssxref("color_value", "&lt;color>")}} value.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Defining the color of a filters flood

This example demonstrates the basic use case of `flood-color`, and how the CSS `flood-color` property takes precedence over the `flood-color` attribute.

#### HTML

We have an SVG with two {{SVGElement("filter")}} elements, each with a {{SVGElement("feFlood")}} child. Each `<feFlood>` element includes the SVG `flood-color` attribute defining the flood color as `seagreen`. We included two {{SVGElement("rect")}} elements with a filter attribute; this is where the filters will be displayed.

```html
<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg">
  <filter id="flood1">
    <feFlood flood-color="seagreen" />
  </filter>
  <filter id="flood2">
    <feFlood flood-color="seagreen" />
  </filter>

  <rect id="r1" filter="url(#flood1)" />
  <rect id="r2" filter="url(#flood2)" />
</svg>
```

#### CSS

We define the size and position of our `<rect>` using the CSS {{cssxref("height")}}, {{cssxref("width")}}, {{cssxref("x")}}, and {{cssxref("y")}} properties:

```css
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

We then apply different flood color values to the `<feFlood>` elements using the CSS `flood-color` property. We use a named color and a 3-digit hexadecimal color, but we can use any valid CSS color syntax:

```css
#flood1 feFlood {
  flood-color: rebeccapurple;
}
#flood2 feFlood {
  flood-color: #f36;
}
```

#### Results

{{EmbedLiveSample("Defining the color of a filters flood", "300", "220")}}

The attributes defined the squares as seagreen, but these values were overridden by the CSS `flood-color` values.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("flood-opacity")}}
- {{cssxref("color")}}
- {{cssxref("fill")}}
- {{cssxref("lighting-color")}}
- {{cssxref("stop-color")}}
- {{cssxref("stroke")}}
- {{cssxref("box-shadow")}}
- {{cssxref("text-shadow")}}
- {{cssxref("background-color")}}
- {{cssxref("color_value", "&lt;color>")}}
- {{cssxref("filter-function")}}
- SVG {{SVGAttr("flood-color")}} attribute
