---
title: offset-position
slug: Web/CSS/offset-position
page-type: css-property
status:
  - experimental
browser-compat: css.properties.offset-position
---

{{CSSRef}}{{SeeCompatTable}}

The **`offset-position`** [CSS](/en-US/docs/Web/CSS) property defines the initial position of an element along a path. This property is typically used in combination with the {{cssxref("offset-path")}} property to create a motion effect. The value of `offset-position` determines where the element gets placed initially for moving along an `offset-path` if the offset-path function does not specify its own starting position.

The `offset-position` property is part of a motion system based on {{cssxref("offset")}} constituent properties, including {{cssxref("offset-anchor")}}, {{cssxref("offset-distance")}}, and `offset-path`. These properties work together to create various motion effects along a path.

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
  - : Indicates that the offset starting position is the top-left corner of the element's box. This is the default value.
- `<position>`
  - : A {{cssxref("&lt;position&gt;")}}. The position defines an x/y coordinate, to place an item relative to the edges of an element's box. It can be defined using one to four values. If two non-keyword values are used, the first value represents the horizontal position and the second represents the vertical position. If only one value is specified, the second value is assumed to be `center`. If three or four values are used, the {{cssxref("length-percentage")}} values are offsets for the preceding keyword value(s). For more explanation of these value types, see {{cssxref("background-position")}}.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting initial offset-position for an offset-path

In this example, the {{cssxref("offset-path")}} property is used to define the path along which the `cyan` element should move. The value of the {{cssxref("path")}} CSS function is an [SVG data path](/en-US/docs/Web/SVG/Attribute/d) that describes a curved path. The element moves along this curved path during the `move` animation.

#### HTML

```html
<div id="wrap">
  <div id="motion-demo"></div>
</div>
```

#### CSS

```css hidden
#wrap {
  width: 260px;
  height: 160px;
  border: 1px dashed black;
}
```

```css
#motion-demo {
  offset-path: path("M20,20 C20,100 200,0 200,100");
  offset-position: left top;
  animation: move 3000ms infinite alternate ease-in-out;
  width: 40px;
  height: 40px;
  background: cyan;
}

@keyframes move {
  0%,
  20% {
    offset-distance: 0%;
  }
  80%,
  100% {
    offset-distance: 100%;
  }
}
```

#### Result

{{EmbedLiveSample('Setting_initial_offset_position_for_an_offset-path', '100%', 200)}}

### Comparing various offset starting positions

This example visually compares various initial offset starting position of an element when `ray()` is used to specify a value for the {{cssxref("offset-path")}} property. The number inside the element box indicates the element to which CSS is applied as well as the element's anchor point.

```html hidden
<div class="wrap">
  <div class="box">0</div>
  <div class="box box0">0</div>
  <pre>
    offset-position: normal;
  </pre>
</div>

<div class="wrap">
  <div class="box">0</div>
  <div class="box box1">1</div>
  <pre>
    offset-position: normal;
    offset-path: ray(0deg);
  </pre>
</div>

<div class="wrap">
  <div class="box">0</div>
  <div class="box box2">2</div>
  <pre>
    offset-position: auto;
    offset-path: ray(0deg);
  </pre>
</div>

<div class="wrap">
  <div class="box">0</div>
  <div class="box box3">3</div>
  <pre>
    offset-position: left top;
    offset-path: ray(0deg);
  </pre>
</div>

<div class="wrap">
  <div class="box">0</div>
  <div class="box box4">4</div>
  <pre>
    offset-position: 30% 70%;
    offset-path: ray(120deg);
  </pre>
</div>
```

```css hidden
.wrap {
  position: relative;
  width: 600px;
  height: 120px;
  border: 1px solid black;
  margin: 0 2em 4em 5em;
  text-align: center;
}

pre {
  font-size: 1em;
  text-align: right;
  padding-right: 10px;
  line-height: 1em;
}

.box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
}

.box + .box {
  opacity: 1;
}
```

```css
.box {
  background-color: green;
  border-top: 6px dashed white;
  background-clip: border-box;
  position: absolute;
  top: 20px;
  left: 20px;
  opacity: 20%;
  color: white;
}

.box0 {
  offset-position: normal;
}

.box1 {
  offset-position: normal;
  offset-path: ray(0deg);
}

.box2 {
  offset-position: auto;
  offset-path: ray(0deg);
}

.box3 {
  offset-position: left top;
  offset-path: ray(0deg);
}

.box4 {
  offset-position: 30% 70%;
  offset-path: ray(120deg);
}
```

#### Result

{{EmbedLiveSample('Comparing various offset starting positions', '100%', 930)}}

Notice that when `offset-position` is `normal`, the starting position of the ray is `50%, 50%` of the containing block. Also notice the difference between offset starting positions `auto` and `left top`. The value `auto` places the element such that its anchor point is at the top-left corner of the element box itself, whereas the value `left top` places the element such that the anchor point is the top-left corner of the containing block.

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
