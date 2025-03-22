---
title: stroke-linejoin
slug: Web/CSS/stroke-linejoin
page-type: css-property
browser-compat: css.properties.stroke-linejoin
---

{{CSSRef}}

The **`stroke-linejoin`** [CSS](/en-US/docs/Web/CSS) property defines the shape to be used at the corners of an [SVG](/en-US/docs/Web/SVG) element's stroked paths. If present, it overrides the element's {{SVGAttr("stroke-linejoin")}} attribute.

This property applies to any SVG corner-generating shape or text-content element (see {{SVGAttr("stroke-linejoin")}} for a full list), but as an inherited property, it may be applied to elements such as {{SVGElement("g")}} and still have the intended effect on descendant elements'

## Syntax

```css
/* keyword values */
stroke-linejoin: bevel;
stroke-linejoin: miter;
stroke-linejoin: round;

/* Global values */
stroke-linejoin: inherit;
stroke-linejoin: initial;
stroke-linejoin: revert;
stroke-linejoin: revert-layer;
stroke-linejoin: unset;
```

### Values

- `bevel`

  - : Indicates that a bevelled corner is to be used to join path segments. The bevel is formed by truncating the corner by a line perpendicular to a line that bisects the difference in the subpath angles where they meet the join point.

- `miter`

  - : Indicates that a sharp corner is to be used to join path segments. The corner is formed by extending the outer edges of the stroke at the tangents of the path segments until they intersect. This is the default value.

- `round`

  - : Indicates that a round corner is to be used to join path segments. This is accomplished by cropping the join as per `bevel`, and then appending a filled arc tangent in order to round the corner.

The following values are defined, but not supported in any browser:

- `arcs`

  - : _(Unsupported.)_ Indicates that an _arcs corner_ is to be used to join path segments. The arc's shape is formed by extending the outer edges of the stroke at the join point with arcs that have the same curvature as the outer edges at the join point.

- `crop`

  - : _(Unsupported.)_ Indicates the corner should extend past the join point by the minimum amount necessary to form a convex corner. This is functionally equivalent to `miter` (see above) with a {{CSSxref('stroke-miterlimit')}} value of `1`.

- `fallback`

  - : _(Unsupported; at risk.)_ behaves identically to `crop bevel` when the {{CSSxref('stroke-miterlimit')}} value is exceeded.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Line-joining styles

This example demonstrates the three currently supported keyword values for `stroke-linejoin`.

#### HTML

We set up four identical paths, all of which have a black stroke with a width of one and no fill.

```html
<svg viewBox="0 0 15 12" xmlns="http://www.w3.org/2000/svg">
  <g stroke="black" stroke-width="1" fill="none">
    <path d="M2,5  a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5" />
    <path d="M8,5  a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5" />
    <path d="M2,11 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5" />
    <path d="M8,11 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5" />
  </g>
</svg>
```

#### CSS

To each of the four paths, a supported line-joining value is applied. The first is beveled, the second rounded, the third mitered, and the fourth also mitered but with a {{CSSxref('stroke-miterlimit')}} of `2`, which forces the corner to be beveled instead of mitered.

```css
path:nth-child(1) {
  stroke-linejoin: bevel;
}
path:nth-child(2) {
  stroke-linejoin: round;
}
path:nth-child(3) {
  stroke-linejoin: miter;
}
path:nth-child(4) {
  stroke-linejoin: miter;
  stroke-miterlimit: 2;
}
```

#### Results

{{EmbedLiveSample("Line-joining styles", "500", "600")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("stroke-dasharray")}}
- {{cssxref("stroke-dashoffset")}}
- {{cssxref("stroke-linecap")}}
- {{cssxref("stroke-miterlimit")}}
- {{cssxref("stroke-opacity")}}
- {{cssxref("stroke-width")}}
- {{cssxref("stroke")}}
- SVG {{SVGAttr("stroke-linejoin")}} attribute
