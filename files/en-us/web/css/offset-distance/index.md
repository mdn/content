---
title: offset-distance
slug: Web/CSS/offset-distance
page-type: css-property
browser-compat: css.properties.offset-distance
---

{{CSSRef}}

The **`offset-distance`** CSS property specifies a position along an {{CSSxRef("offset-path")}} for an element to be placed.

{{EmbedInteractiveExample("pages/css/offset-distance.html")}}

## Syntax

```css
/* Default value */
offset-distance: 0;

/* the middle of the offset-path */
offset-distance: 50%;

/* a fixed length positioned along the path */
offset-distance: 40px;

/* Global values */
offset-distance: inherit;
offset-distance: initial;
offset-distance: revert;
offset-distance: revert-layer;
offset-distance: unset;
```

- `{{cssxref('&lt;length-percentage&gt;')}}`

  - : A length that specifies how far the element is along the path (defined with {{cssxref('offset-path')}}).

    100% represents the total length of the path (when the `offset-path` is defined as a basic shape or `path()`).

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Using offset-distance in an animation

The motion aspect in CSS Motion Path typically comes from animating the `offset-distance` property. If you want to animate an element along its full path, you would define its {{cssxref('offset-path')}} and then set up an animation that takes the `offset-distance` from `0%` to `100%`.

#### HTML

```html
<div id="motion-demo"></div>
```

#### CSS

```css
#motion-demo {
  offset-path: path("M20,20 C20,100 200,0 200,100");
  animation: move 3000ms infinite alternate ease-in-out;
  width: 40px;
  height: 40px;
  background: cyan;
}

@keyframes move {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}
```

#### Result

{{EmbedLiveSample('Using_offset-distance_in_an_animation', '100%', 150)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("offset")}}
- {{cssxref("offset-anchor")}}
- {{cssxref("offset-path")}}
- {{cssxref("offset-position")}}
- {{cssxref("offset-rotate")}}
