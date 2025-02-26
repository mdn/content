---
title: stroke-linecap
slug: Web/CSS/stroke-linecap
page-type: css-property
browser-compat: css.properties.stroke-linecap
---

{{CSSRef}}

The **`stroke-linecap`** [CSS](/en-US/docs/Web/CSS) property defines the shape to be used at the end of open subpaths of [SVG](/en-US/docs/Web/SVG) elements' unclosed strokes. If present, it overrides the element's {{SVGAttr("stroke-linecap")}} attribute.

This property applies to any SVG shape that can have unclosed strokes and text-content element (see {{SVGAttr("stroke-linecap")}} for a full list), but as an inherited property, it may be applied to elements such as {{SVGElement("g")}} and still have the intended effect on descendant elements' strokes.

## Syntax

```css
/* keyword values */
stroke-linecap: butt;
stroke-linecap: round;
stroke-linecap: square;

/* Global values */
stroke-linecap: inherit;
stroke-linecap: initial;
stroke-linecap: revert;
stroke-linecap: revert-layer;
stroke-linecap: unset;
```

### Values

- `butt`

  - : Indicates that the stroke for each subpath does not extend beyond its two endpoints. On a zero-length subpath, the path will not be rendered at all. This is the default value.

- `round`

  - : Indicates that at the end of each subpath the stroke will be extended by a half circle with a diameter equal to the stroke width. On a zero-length subpath, the stroke consists of a full circle centered at the subpath's point.

- `square`

  - : Indicates that at the end of each subpath the stroke will be extended by a rectangle with a width equal to half the width of the stroke and a height equal to the width of the stroke. On a zero-length subpath, the stroke consists of a square with its width equal to the stroke width, centered at the subpath's point.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Linecaps

This example demonstrates the property's three keyword values.

#### HTML

We first set up a light-gray rectangle. Then, in a group, three paths are defined whose length is exactly the same as the width of the rectangle, and all of which start at the left edge of the rectangle. They are all set to have a `dodgerblue` stroke with a width of seven.

```html
<svg viewBox="0 0 100 50" width="500" height="250">
  <rect x="10" y="5" width="80" height="30" fill="#DDD" />
  <g stroke="dodgerblue" stroke-width="7">
    <path d="M 10,10 h 80" />
    <path d="M 10,20 h 80" />
    <path d="M 10,30 h 80" />
  </g>
</svg>
```

#### CSS

We then apply a different linecap style to each path via CSS.

```css
path:nth-of-type(1) {
  stroke-linecap: butt;
}
path:nth-of-type(2) {
  stroke-linecap: square;
}
path:nth-of-type(3) {
  stroke-linecap: round;
}
```

#### Results

{{EmbedLiveSample("Linecaps", "500", "250")}}

The first path has `butt` linecaps, which essentially means the stroke runs exactly to the end points (both the start and the end) of the path, and no further. The second path has `square` linecaps, so the visible path extends out past the end points of the path, making the overall length of the path appear to be 87, since the path length is 80 and each of the two square caps is 3.5 wide. The third path has `circle` caps, so while it also appears to be 87 units long, the two caps are semicircular instead of square.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("stroke-dasharray")}}
- {{cssxref("stroke-dashoffset")}}
- {{cssxref("stroke-linejoin")}}
- {{cssxref("stroke-miterlimit")}}
- {{cssxref("stroke-opacity")}}
- {{cssxref("stroke-width")}}
- {{cssxref("stroke")}}
- SVG {{SVGAttr("stroke-linecap")}} attribute
