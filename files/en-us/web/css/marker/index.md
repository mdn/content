---
title: marker
slug: Web/CSS/marker
page-type: css-property
browser-compat: css.properties.marker
---

{{CSSRef}}

The **`marker`** [CSS](/en-US/docs/Web/CSS) property points to a marker that will be drawn on the first, middle, and last vertices of the element's path; that is, at all of its vertices. The marker must have been defined using an SVG {{SVGElement('marker')}} element, and can only be referenced with a {{cssxref("url_value", "&lt;url&gt;")}} value. The value of the CSS property overrides any values of the `marker-start`, `marker`, and `marker-end` attributes in the SVG.

For many marker-supporting shapes, the first and last vertices are in the same place: for example, the top left corner of a {{SVGElement('rect')}}. In such shapes, if both the first and last markers are defined, two markers will be drawn at that point, though they may not point in the same direction.

For the middle vertices, the direction each marker points is defined as the direction halfway between the direction at the end of the preceding path segment and the direction of the start of the following path segment. This can be thought of as the cross product of the vectors defined by the two path directions.

> [!NOTE]
> The `marker` property will only have an effect for elements that can use SVG markers. See {{SVGAttr("marker-start")}} for a list.

## Syntax

```css
marker: none;
marker: url(markers.svg#arrow);

/* Global values */
marker: inherit;
marker: initial;
marker: revert;
marker: revert-layer;
marker: unset;
```

### Values

- `none`

  - : This means no marker will be drawn at each vertex of the element's path.

- `<marker-ref>`

  - : A {{cssxref("url_value", "&lt;url&gt;")}} that refers to a marker defined by an SVG {{SVGElement('marker')}} element, to be drawn at each vertex of the element's path. If the URL reference is invalid, no marker will be drawn at the path's vertices.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Example

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 240 120" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker
      id="triangle"
      viewBox="0 0 10 10"
      markerWidth="10"
      markerHeight="10"
      refX="1"
      refY="5"
      markerUnits="strokeWidth"
      orient="auto">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#f00" />
    </marker>
  </defs>
  <polyline
    id="test"
    fill="none"
    stroke="black"
    points="20,100 40,60 70,80 100,20 130,10 150,10 170,20 170,100 120,100" />
</svg>
```

```css
polyline#test {
  marker: url(#triangle);
}
```

{{EmbedLiveSample("Example", "200", "200")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("marker-start")}}
- {{cssxref("marker-end")}}
- SVG {{SVGAttr("marker")}} attribute
