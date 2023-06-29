---
title: offset-position
slug: Web/CSS/offset-position
page-type: css-property
status:
  - experimental
browser-compat: css.properties.offset-position
---

{{CSSRef}}{{SeeCompatTable}}

The **`offset-position`** [CSS](/en-US/docs/Web/CSS) property defines the initial position of an element on a path. It determines where the element gets placed initially for moving along an {{cssxref("offset-path")}}.

## Syntax

```css
/* Keyword values */
offset-position: normal;
offset-position: auto;
offset-position: top;
offset-position: bottom;
offset-position: left;
offset-position: right;
offset-position: center;

/* <percentage> values */
offset-position: 25% 75%;

/* <length> values */
offset-position: 0 0;
offset-position: 1cm 2cm;
offset-position: 10ch 8em;

/* Edge offsets values */
offset-position: bottom 10px right 20px;
offset-position: right 3em bottom 10px;
offset-position: bottom 10px right;
offset-position: top right 10px;

/* Global values */
offset-position: inherit;
offset-position: initial;
offset-position: revert;
offset-position: revert-layer;
offset-position: unset;
```

### Values

- `normal`
  - : Indicates that the element does not have an offset starting position.
- `auto`
  - : Indicates that the offset starting position is the top-left corner of the element box.
- `<position>`
  - : A {{cssxref("&lt;position&gt;")}}. A position defines an x/y coordinate, to place an item relative to the edges of an element's box. It can be defined using one to four values. If two non-keyword values are used, the first value represents the horizontal position and the second represents the vertical position. If only one value is specified, the second value is assumed to be `center`. If three or four values are used, the length-percentage values are offsets for the preceding keyword value(s). For more explanation of these value types, see {{cssxref("background-position")}}.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Exploring various offset starting positions

### Setting initial offset position for an offset-path

#### HTML

```html
<div id="wrap">
  <div id="motion-demo"></div>
</div>
```

#### CSS

```css
#wrap {
  position: relative;
  width: 300px;
  height: 200px;
  border: 1px solid black;
}

#motion-demo {
  offset-path: path("M10,10 C10,100 200,0 200,100");
  offset-position: auto;
  animation: move 3000ms infinite alternate ease-in-out;
  width: 40px;
  height: 40px;
  background: cyan;
  position: absolute;
  left: 40px;
  top: 40px;
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

{{EmbedLiveSample('Setting initial offset position for an offset path', '100%', 250)}}

The offset-path property is used to define the path along which an element should move. In this code example, the offset-path property is set to path("M20,20 C20,100 200,0 200,100").

The value of path("M20,20 C20,100 200,0 200,100") is a SVG path data that describes a curved path. The path starts at the point (20,20) and includes a cubic Bezier curve. The control points of the curve are (20,100) and (200,0), and the end point of the curve is (200,100).

By setting the offset-path property to this path, the element with the #motion-demo ID will move along this curved path during the animation.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("offset")}}
- {{cssxref("offset-anchor")}}
- {{cssxref("offset-distance")}}
- {{cssxref("offset-path")}}
- {{cssxref("offset-rotate")}}
