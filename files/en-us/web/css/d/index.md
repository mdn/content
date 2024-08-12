---
title: d
slug: Web/CSS/d
page-type: css-property
browser-compat: css.properties.d
---

{{CSSRef}}

The **`d`** [CSS](/en-US/docs/Web/CSS) property defines a path to be drawn by the SVG {{SVGElement("path")}} element. If present, it overrides the element's {{SVGAttr("d")}} attribute.

> [!NOTE]
> The `d` property only applies to {{SVGElement("path")}} elements nested in an {{SVGElement("svg")}}. It doesn't apply to other SVG elements nor to HTML elements or pseudo-elements.

## Syntax

```css
/* Default */
d: none;

/* Basic usage */
d: path("m 5,5 h 35 L 20,30 z");
d: path("M 0,25 l 50,150 l 200,50 z");
d: path("M 10,5 l 90,0 -80,80 0,-60 80,80 -90,0 z");

/* Global values */
d: inherit;
d: initial;
d: revert;
d: revert-layer;
d: unset;
```

### Values

The value is either a {{cssxref("basic-shape/path", "path()")}} function with a single {{cssxref("&lt;string&gt;")}} parameter or the keyword `none`.

- `none`
  - : No path is drawn.
- `path(<string>)`
  - : A `path()` function with a quoted [data string](/en-US/docs/Web/SVG/Attribute/d) parameter. The data string defines an [SVG path](/en-US/docs/Web/SVG/Element/path). The SVG path data string contains [path commands](/en-US/docs/Web/SVG/Attribute/d#path_commands) that implicitly use pixel units. An empty path is considered invalid.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Specifying path data

This example demonstrates the basic use case of `d`, and how the CSS `d` property takes precedence over the `d` attribute.

#### HTML

We include two identical `<path>` elements in an SVG; their `d` attribute values are `"m 5,5 h 90 v 90 h -90 v -90 z"`, which creates a `90px` square.

```html
<svg>
  <path d="m 5,5 h 90 v 90 h -90 v -90 z" />
  <path d="m 5,5 h 90 v 90 h -90 v -90 z" />
</svg>
```

#### CSS

With CSS, we style both paths, providing a black {{cssxref("stroke")}} and semi-opaque red {{cssxref("fill")}}. We then use the `d` property to override the value of the SVG {{SVGAttr("d")}} attribute for the last path only. The browser renders SVG images as `300px` wide and `150px` tall by default.

```css
svg {
  border: 1px solid;
}

path {
  fill: #f338;
  stroke: #000;
}

path:last-of-type {
  d: path(
    "M10,30 A20,20 0,0,1 50,30 A20,20 0,0,1 90,30 Q90,60 50,90 Q10,60 10,30 z"
  );
}
```

#### Results

{{EmbedLiveSample("Specifying path data", "300", "180")}}

The second `<path>` is a heart, as defined in the CSS `d` property's `path()` function value. The unstyled `<path>`'s path remained a square, as defined in its SVG `d` attribute value.

### Animating data paths

This example demonstrates animating the `d` attribute value.

#### HTML

We create a `<svg>` containing a single `<path>` element.

```html
<svg>
  <path />
</svg>
```

#### CSS

We use the `d` attribute to define a heart with a line through it. We use CSS to define the {{cssxref("fill")}}, {{cssxref("stroke")}}, and {{cssxref("stroke-width")}} of that path, and add a two-second {{cssxref("transition")}}. We add a {{cssxref(":hover")}} style that contains a slightly different {{cssxref("basic-shape/path", "path()")}} function; the path has the same number of data points as the default state, making the path animatable.

```css
svg {
  border: 1px solid;
}

path {
  d: path(
    "M10,30 A20,20 0,0,1 50,30 A20,20 0,0,1 90,30 Q90,60 50,90 Q10,60 10,30 z M90,5 L5,90"
  );
  transition: all 2s;
  fill: none;
  stroke: red;
  stroke-width: 3px;
}

svg:hover path {
  d: path(
    "M10,30 A20,20 0,0,1 50,30 A20,20 0,0,1 90,30 Q90,60 50,90 Q10,60 10,30 z M5,5 L90,90"
  );
  stroke: black;
}
```

#### Results

{{EmbedLiveSample("Animating data paths", "300", "180")}}

To view the animation, hover over the SVG.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- SVG {{SVGAttr("d")}} attribute
- {{cssxref("fill")}}
- {{cssxref("stroke")}}
- {{cssxref("basic-shape/path", "path()")}} function
- {{cssxref("basic-shape")}} data type
- [Overview of CSS shapes](/en-US/docs/Web/CSS/CSS_shapes/Overview_of_shapes)
- [CSS shapes](/en-US/docs/Web/CSS/CSS_shapes) module
