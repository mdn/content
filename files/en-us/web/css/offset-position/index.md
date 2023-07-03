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
  - : Indicates that the element does not have an offset starting position. This is the default value when the {{cssxref("path")}} CSS function is used to specify the value for the {{cssxref("offset-path")}} property. When the {{cssxref("ray")}} CSS function is used to specify the value for the `offset-path` property, the `normal` keyword defaults to `0px, 0px` of the containing block.
- `auto`
  - : Indicates that the offset starting position is the top-left corner of the element's box. This is the default value when `ray()` is used to specify the value for the {{cssxref("offset-path")}} property.
- `<position>`
  - : A {{cssxref("&lt;position&gt;")}}. A position defines an x/y coordinate, to place an item relative to the edges of an element's box. It can be defined using one to four values. If two non-keyword values are used, the first value represents the horizontal position and the second represents the vertical position. If only one value is specified, the second value is assumed to be `center`. If three or four values are used, the length-percentage values are offsets for the preceding keyword value(s). For more explanation of these value types, see {{cssxref("background-position")}}.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Comparing various offset starting positions

This example visually compares the initial offset starting position of an element when `ray()` is used to specify a value for the {{cssxref("offset-path")}} property. The `+` text inside the element box is used to depict the element's anchor point.

```html hidden
<div id="wrap">
  <div class="box">+</div>
  <div class="box box0">+</div>
</div>

<div id="wrap">
  <div class="box">+</div>
  <div class="box box1">+</div>
  <p>offset-position: normal;</p>
</div>

<div id="wrap">
  <div class="box">+</div>
  <div class="box box2">+</div>
  <p>offset-position: auto;</p>
</div>

<div id="wrap">
  <div class="box">+</div>
  <div class="box box3">+</div>
  <p>offset-position: left top;</p>
</div>
```

```css hidden
#wrap {
  position: relative;
  width: 500px;
  height: 100px;
  border: 1px solid black;
  margin: 0 2em 4em 5em;
  text-align: center;
  line-height: 3em;
}

p {
  font-family: "Courier New", monospace;
  font-size: 0.8em;
  text-align: right;
  padding-right: 10px;
}

.box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
}
```

```css
.box {
  background-color: green;
  border-top: 5px solid red;
  position: absolute;
  top: 20px;
  left: 20px;
  opacity: 20%;
}

.box0 {
  opacity: 100%;
}

.box1 {
  offset-position: normal;
  offset-path: ray(0deg);
  opacity: 100%;
}

.box2 {
  offset-position: auto;
  offset-path: ray(0deg);
  opacity: 100%;
}

.box3 {
  offset-position: left top;
  offset-path: ray(0deg);
  opacity: 100%;
}
```

#### Result

{{EmbedLiveSample('Comparing various offset starting positions', '100%', 600)}}

Notice the difference between offset starting positions `auto` and `left top`. The value `auto` places the element such that its anchor point is at the top-left corner of the element box itself, whereas the value `left top` places the element such that the anchor point is the top left corner of the containing block.

### Setting initial offset position for an offset-path

In this example, the {{cssxref("offset-path")}} property is used to define the path along which the `cyan` element should move. The value of the {{cssxref("path")}} CSS function is a SVG path data that describes a curved path. The element moves along this curved path during the `move` animation.

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
  position: absolute;
  left: 20px;
  top: 20px;
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

{{EmbedLiveSample('Setting_initial_offset_position_for_an_offset-path', '100%', 200)}}

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
