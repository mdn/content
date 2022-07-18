---
title: offset-position
slug: Web/CSS/offset-position
tags:
  - CSS
  - CSS Motion Path
  - CSS Property
  - Experimental
  - Property
  - offset-position
  - recipe:css-property
browser-compat: css.properties.offset-position
---
{{CSSRef}}{{SeeCompatTable}}

The **`offset-position`** CSS property defines the [initial position](https://www.w3.org/TR/motion-1/#valdef-offsetpath-initial-position) of the {{cssxref("offset-path")}}.

## Syntax

```css
/* Keyword values */
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

- `auto`
  - : The initial position is the position of the box specified by the {{cssxref("position")}} property.
- `<position>`
  - : A {{cssxref("&lt;position&gt;")}}. A position defines an x/y coordinate, to place an item relative to the edges of an element's box. It can be defined using one to four values. If two non-keyword values are used, the first value represents the horizontal position and the second represents the vertical position. If only one value is specified, the second value is assumed to be `center`. If three or four values are used, the length-percentage values are offsets for the preceding keyword value(s). For more explanation of these value types, see {{cssxref("background-position")}}.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting initial offset position

```html
<div id="motion-demo"></div>
```

```css
#motion-demo {
  offset-path: path('M20,20 C20,100 200,0 200,100');
  offset-position: left top;
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
