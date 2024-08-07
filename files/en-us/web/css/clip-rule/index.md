---
title: clip-rule
slug: Web/CSS/clip-rule
page-type: css-property
browser-compat: css.properties.clip-rule
---

{{CSSRef}}

The **`clip-rule`** [CSS](/en-US/docs/Web/CSS) property defines how to determine which pixels in a mask's box are inside the clipping shape defined by a [clip path](/en-US/docs/Web/CSS/clip-path), and which are outside, when parts of the path overlap other parts. Specifically, it chooses between the "non-zero" and "even-odd" methods of determining inclusion. `clip-rule` can be applied to all SVG elements, but only has an effect on those which are part of a clipping path. CSS values of the `clip-rule` property can override SVG values of the {{SVGAttr("clip-rule")}} attribute.

## Syntax

```css
/* Keywords */
clip-rule: nonzero;
clip-rule: evenodd;

/* Global values */
clip-rule: inherit;
clip-rule: initial;
clip-rule: revert;
clip-rule: revert-layer;
clip-rule: unset;
```

### Values

- `nonzero`

  - : For every point in the clipping mask's box, a ray is drawn in a random direction. Every time the ray intersects with any part of the clipping path, a tally is increased by one if the clipping path's part is moving from left to right across the ray, whereas it is decreased by one if the path part is moving right to left across the ray. If the final total of the tally is zero, the point is outside the path's shape. Otherwise, it's inside the path's shape.

- `even-odd`

  - : For every point in the clipping mask's box, a ray is drawn in a random direction. Every time the ray intersects with any part of the clipping path, a tally is increased by one. If the final total of the tally is even, the point is outside the path's shape; otherwise, it's inside the path's shape. Zero is taken to be even.

## Formal syntax

{{csssyntax}}

## Examples

### Choosing between rules for a path with all clockwise paths

In this SVG image, we have two rectangles that are clipped, once with each clipping rule. There are two {{SVGElement("clipPath")}} elements, so that one can be set to use the non-zero clipping rule and the other uses the even-odd rule. Both paths are drawn in a clockwise direction for both its inner and outer parts.

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50">
  <g stroke="#123" fill="#BCD">
    <!-- basic rectangle and clipping path visualization follow -->
    <rect x="10" y="10" width="30" height="30" />
    <path
      d="M 65,5 l 20,20 -20,20 -20,-20 20,-20 m 0,10 l 10,10 -10,10 -10,-10 10,-10 z"
      fill="none"
      stroke-width="0.5" />
    <!-- rectangles to be clipped follow -->
    <rect x="110" y="10" width="30" height="30" clip-path="url(#clipper1)" />
    <rect x="160" y="10" width="30" height="30" clip-path="url(#clipper2)" />
  </g>
  <!-- clipping paths follow -->
  <clipPath id="clipper1" clipPathUnits="objectBoundingBox">
    <path
      d="M 0.5 -0.15 l 0.65 0.65 -0.65,0.65 -0.65,-0.65 0.65,-0.65 m 0,0.33 l 0.33,0.33 -0.33,0.33 -0.33,-0.33 0.33,-0.33 z"
      clip-rule="evenodd" />
  </clipPath>
  <clipPath id="clipper2" clipPathUnits="objectBoundingBox">
    <path
      d="M 0.5 -0.15 l 0.65 0.65 -0.65,0.65 -0.65,-0.65 0.65,-0.65 m 0,0.33 l 0.33,0.33 -0.33,0.33 -0.33,-0.33 0.33,-0.33 z"
      clip-rule="nonzero" />
  </clipPath>
</svg>
```

To the clipping paths that are applied to the clipped rectangles, the CSS `clip-rule` property is used to set one path to use the `nonzero` rules, and the other to use the `evenodd` rule. These override the values of the `clip-path` attributes in the SVG, which have been intentionally set to the opposite values as the CSS imposes.

```css
#clipper1 {
  clip-rule: nonzero;
}
#clipper2 {
  clip-rule: evenodd;
}
```

Because both the inner and outer parts of the path move in a clockwise (left-to-right) direction, the resulting clip shape will be different between the two clipping rules. For `nonzero`, any ray inside the outer part of the shape will tally to a value above zero, because it will encounter one or more left-to-right path fragments. For `even-odd`, points between the two parts of the path will have an odd-numbered tally, whereas any point either inside the inner path or outside the outer part will have an even-numbered tally.

{{EmbedLiveSample("Choosing between rules for a path with all clockwise paths", "500", "200")}}

### Choosing between rules for a path with different winding paths

This example uses the same SVG as the previous example, with the change that the interior part of the clipping path winds in a counterclockwise direction.

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50">
  <g stroke="#123" fill="#BCD">
    <!-- basic rectangle and clipping path visualization follow -->
    <rect x="10" y="10" width="30" height="30" />
    <path
      d="M 65,5 l 20,20 -20,20 -20,-20 20,-20 m 0,10 l 10,10 -10,10 -10,-10 10,-10 z"
      fill="none"
      stroke-width="0.5" />
    <!-- rectangles to be clipped follow -->
    <rect x="110" y="10" width="30" height="30" clip-path="url(#clipper1)" />
    <rect x="160" y="10" width="30" height="30" clip-path="url(#clipper2)" />
  </g>
  <!-- clipping paths follow -->
  <clipPath id="clipper1" clipPathUnits="objectBoundingBox">
    <path
      d="M 0.5 -0.15 l 0.65 0.65 -0.65,0.65 -0.65,-0.65 0.65,-0.65 m 0,0.33 l -0.33,0.33 0.33,0.33 0.33,-0.33 -0.33,-0.33 z" />
  </clipPath>
  <clipPath id="clipper2" clipPathUnits="objectBoundingBox">
    <path
      d="M 0.5 -0.15 l 0.65 0.65 -0.65,0.65 -0.65,-0.65 0.65,-0.65 m 0,0.33 l 0.33,0.33 -0.33,0.33 -0.33,-0.33 0.33,-0.33 z" />
  </clipPath>
</svg>
```

We apply the same CSS as before.

```css
#clipper1 {
  clip-rule: nonzero;
}
#clipper2 {
  clip-rule: evenodd;
}
```

In this case, because the outer part of the path moves in a clockwise (left-to-right) direction and the interior part of the path moves in a counterclockwise (right-to-left) direction, the resulting clip shape will be the same regardless of which clipping rule is used.

{{EmbedLiveSample("Choosing between rules for a path with different winding paths", "500", "200")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- SVG {{SVGAttr("clip-rule")}} attribute
- SVG {{SVGElement("clipPath")}} element
- CSS {{CSSxRef('clip-path')}} property
