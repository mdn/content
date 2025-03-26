---
title: marker-start
slug: Web/CSS/marker-start
page-type: css-property
browser-compat: css.properties.marker-start
---

{{CSSRef}}

The **`marker-start`** [CSS](/en-US/docs/Web/CSS) property points to a marker that will be drawn on the first vertex of the element's path; that is, at its starting vertex. The marker must have been defined using an SVG {{SVGElement('marker')}} element, and can only be referenced with a {{cssxref("url_value", "&lt;url&gt;")}} value. The value of the CSS property overrides any values of the `marker-start` attribute in the SVG.

For many marker-supporting shapes, the first and last vertices are in the same place: for example, the top left corner of a {{SVGElement('rect')}}. In such shapes, if both the first and last markers are defined, two markers will be drawn at that point, though they may not point in the same direction.

> [!NOTE]
> The `marker-start` property will only have an effect for elements that can use SVG markers. See {{SVGAttr("marker-start")}} for a list.

## Syntax

```css
marker-start: none;
marker-start: url(markers.svg#arrow);

/* Global values */
marker-start: inherit;
marker-start: initial;
marker-start: revert;
marker-start: revert-layer;
marker-start: unset;
```

### Values

- `none`

  - : This means no marker will be drawn at the first vertex of the element's path.

- `<marker-ref>`

  - : A {{cssxref("url_value", "&lt;url&gt;")}} that refers to a marker defined by an SVG {{SVGElement('marker')}} element, to be drawn at the first vertex of the element's path. If the URL reference is invalid, no marker will be drawn at the path's first vertex.

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
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
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
    points="20,100 40,60 70,80 100,20" />
</svg>
```

```css
polyline#test {
  marker-start: url(#triangle);
}
```

{{EmbedLiveSample("Example", "200", "200")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("marker-mid")}}
- {{cssxref("marker-end")}}
- {{cssxref("marker")}}
- SVG {{SVGAttr("marker-start")}} attribute
