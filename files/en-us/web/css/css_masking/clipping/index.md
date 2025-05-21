---
title: Introduction to CSS clipping
slug: Web/CSS/CSS_masking/Clipping
page-type: guide
---

{{CSSRef}}

CSS clipping enables you to define visible portions of an element while hiding other parts, effectively "clipping" its content within a specific shape or area. With clipping, elements aren't limited to being rendered as rectangles and can be designed in visually engaging ways. This guide explores the {{cssxref("clip-path")}} property along with some examples.

## CSS clipping

Clipping is a CSS technique used to clip (hide) sections of an element, displaying only the area of the element located within a developer-defined path. Clips areas are created by vector paths; anything in the path is visible while areas outside the path are hidden.

### The `clip-path` property

The `clip-path` property applies clipping. The value it accepts is a vector path defining the area of the element that should remain visible. The path can be defined using boxes, a reference to an [SVG `<clipPath>`](#svg_as_source), or CSS [shapes and paths](#shape_function). In the following example, we clip a blue square {{htmlelement("div")}}, creating a diamond, using the {{cssxref("basic-shape/polygon","polygon()")}} function as the clipping path:

```html hidden live-sample__clip-path
<div class="diamond"></div>
```

```css live-sample__clip-path
.diamond {
  height: 200px;
  width: 200px;
  background-color: blue;

  clip-path: polygon(0 50%, 50% 100%, 100% 50%, 50% 0);
}
```

{{ EmbedLiveSample('clip-path', 230, 230) }}

With the `clip-path` property, you can make complex shapes by clipping an element to a `<basic-shape>` or to an [SVG source](#svg_as_source). You can [animate and transition `clip-path` shapes](#animation) if the declared states have the same number of vector points.

### Values of the `clip-path` property

To visually clip an element, the `clip-path` property is set to either a {{cssxref("geometry-box")}}, a {{cssxref("url_value", "url")}} to a {{svgElement("clipPath")}} clip source, or a {{cssxref("basic-shape")}} created with [shape function](/en-US/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#shape_functions).

### Geometry boxes

The `clip-path` hides everything outside of the clipped region. The most basic clipping is done via a geometry box. You can clip an element based on it's margin, border, padding, or content. The effects of these visual box values can achieved via other CSS properties, such as setting the {{cssxref("border-color")}} to transparent and the {{cssxref("background-origin")}} to the desired visual box. We're looking at these values mostly because these values are using in conjunction with the shape functions, which we'll look at later, to define the origin of the shape clip path.

[Understanding the reference box](/en-US/docs/Web/CSS/CSS_shapes/Basic_shapes#the_reference_box) used by CSS shapes is important when using `clip-path`, especially with [basic shapes](#clipping_to_basic_shapes), as the reference box defines a shape's coordinate system.

#### Visual box values

This live example demonstrates the `clip-path` property's different visual box values on a element, while comparing it to the CSS `background-origin` property. We've applied a {{cssxref("border")}}, a {{cssxref("background-color")}}, a {{cssxref("background-image")}}, and {{cssxref("padding")}} to the {{htmlelement("blockquote")}}. Select a radio button to update the `--value` to a different `<geometry-box>` value, which updates the {{cssxref("background-origin")}} and the {{cssxref("clip-path")}} resolved values.

```css hidden
body {
  display: flex;
  flex-flow: row wrap;
  place-content: center;
}
blockquote {
  float: left;
  font-size: 1.2rem;
}
q {
  color: white;
  font-family: sans-serif;
  display: block;
  margin-bottom: 0.5em;
}
p {
  margin: 0;
  line-height: 1.6;
}

body {
  --value: initial;
}
body:has([value="border-box"]:checked) {
  --value: border-box;
}
body:has([value="padding-box"]:checked) {
  --value: padding-box;
}
body:has([value="content-box"]:checked) {
  --value: content-box;
}
body:has([type="checkbox"]:checked) blockquote {
  border-radius: 70px;
}
```

```css
blockquote {
  width: 210px;
  padding: 20px;
  margin: 20px;
  border: 20px dashed #dedede;
  background-color: #ededed;
  background-image: linear-gradient(rebeccapurple, magenta);
  background-repeat: no-repeat;
}

.clippath {
  background-origin: var(--value);
  clip-path: var(--value);
}

.box-model {
  background-origin: var(--value);
}
```

```html hidden
<blockquote class="clippath">
  <q
    >I've learned that people will forget what you said, people will forget what
    you did, but people will never forget how you made them feel.</q
  >
  <cite>&mdash; Maya Angelou</cite>
</blockquote>
<blockquote class="box-model">
  <q
    >I've learned that people will forget what you said, people will forget what
    you did, but people will never forget how you made them feel.</q
  >
  <cite>&mdash; Maya Angelou</cite>
</blockquote>

<fieldset>
  <legend>Select the geometry box value:</legend>
  <p>
    <label
      ><input type="radio" name="gb" value="border-box" /> border-box</label
    >
  </p>
  <p>
    <label
      ><input type="radio" name="gb" value="padding-box" /> padding-box</label
    >
  </p>
  <p>
    <label
      ><input type="radio" name="gb" value="content-box" /> content-box</label
    >
  </p>
  <p>
    <label
      ><input type="radio" name="gb" value="initial" checked /> initial</label
    >
  </p>
</fieldset>
<p>
  <label><input type="checkbox" /> Change the border radius</label>
</p>
```

{{ EmbedLiveSample('visual box values', 230, 430) }}

When a `<geometry>` box is specified in combination with a `<basic-shape>`, the value defines the reference box for the basic shape. If specified by itself, it causes the edges of the specified box, including any corner shaping (such as a `border-radius`), to be the clipping path.

#### Shape origin

The previous example may make you think that the `<geometry-box>` values are useless, as you can use `background-origin` instead. And you can. But when clipping using basic shapes, the `<geometry-box>`, when included along with a `<basic-shape>` as the `clip-path` value, defines the reference box for, or origin of, that shape. We can combine the two previous examples to demonstrate this.

```html hidden
<blockquote class="clippath">
  <q
    >I've learned that people will forget what you said, people will forget what
    you did, but people will never forget how you made them feel.</q
  >
  <cite>&mdash; Maya Angelou</cite>
</blockquote>
<fieldset>
  <legend>Select the origin of the clip path shape:</legend>
  <p>
    <label
      ><input type="radio" name="gb" value="border-box" checked />
      border-box</label
    >
  </p>
  <p>
    <label
      ><input type="radio" name="gb" value="padding-box" /> padding-box</label
    >
  </p>
  <p>
    <label
      ><input type="radio" name="gb" value="content-box" /> content-box</label
    >
  </p>
</fieldset>
```

```css
blockquote {
  width: 210px;
  padding: 20px;
  margin: 20px;
  border: 20px dashed #dedede;
  background-color: #ededed;
  background-image: linear-gradient(rebeccapurple, magenta);
  background-repeat: no-repeat;
  background-origin: border-box;
  clip-path: var(--value) polygon(0 50%, 50% 100%, 100% 50%, 50% 0);
}
```

```css hidden
blockquote {
  font-size: 1.2rem;
}
q {
  color: white;
  font-family: sans-serif;
  display: block;
  margin-bottom: 0.5em;
}
p {
  margin: 0;
  line-height: 1.6;
}

body {
  --value: "";
}
body:has([value="border-box"]:checked) {
  --value: border-box;
}
body:has([value="padding-box"]:checked) {
  --value: padding-box;
}
body:has([value="content-box"]:checked) {
  --value: content-box;
}
```

{{ EmbedLiveSample('shape origin', 230, 420) }}

For another example, see [`clip-path` shapes and geometry boxes](/en-US/docs/Web/CSS/clip-path#shapes_and_geometry_boxes).

Even values like `clip-path: margin-box` can be useful. In addition to creative visuals made by placing the clip-path's edge at the margin-box edge, any computed value for `clip-path`, other than `none`, results in the creation of a new [stacking context](/en-US/docs/Web/CSS/CSS_positioned_layout/Stacking_context) the same way that CSS {{cssxref("opacity")}} does for values other than `1`.

## Clipping to basic shapes

The `clip-path` property's support of {{cssxref("basic-shape")}} values provides a powerful way to shape elements. The various shape function enable defining precise clipping regions, effectively sculpting elements into unique forms. The basic shape functions, include:

- {{cssxref("basic-shape/circle","circle()")}}
- {{cssxref("basic-shape/ellipse","ellipse()")}}
- {{cssxref("basic-shape/inset","inset()")}}
- {{cssxref("basic-shape/path","path()")}}
- {{cssxref("basic-shape/polygon","polygon()")}}
- {{cssxref("basic-shape/rect","rect()")}}
- {{cssxref("basic-shape/shape","shape()")}}
- {{cssxref("basic-shape/xywh","xywh()")}}

The size and position of these shapes are defined by the `<geometry-box>` value, which defaults to border-box being used as the reference box if the `clip-path` value includes a shape without the `<geometry-box>` component value.

Some of these functions appear to only provide basic predefined clipping options. They may appear to replicate effects you can created with {{cssxref("border-radius")}}, but if you [toggled the `border-radius`](#visual_box_values) property in the previous example, you may have noticed the power of CSS clipping. Shapes provide even more control. For example, `inset()` enables clipping a rectangle with precise margins. The real power and control comes with `path()`, `shape()`, and even `polygon()`, which allows for custom multi-point shapes.

### Creating polygons

With `polygon()`, by defining pairs of coordinates, each of which represents a vertex of the shape. you can create intricate forms like stars or abstract figures. The coordinates define vector points connected by straight lines.

Here we use the `polygon()` function to create a star:

```html hidden
<div class="star"></div>
```

```css
.star {
  width: 200px;
  height: 200px;
  background: linear-gradient(rebeccapurple, magenta) blue;
  clip-path: polygon(
    50% 0%,
    61% 35%,
    100% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    0% 35%,
    39% 35%,
    50% 0%
  );
}
```

{{ EmbedLiveSample('Creating polygons', 230, 230) }}

### Animation

Clipped shapes can be animated and transitioned by declaring the same number of vector points for the different states.

```html hidden
<div class="star"></div>
```

```css hidden
.star {
  width: 200px;
  height: 200px;
  background: linear-gradient(rebeccapurple, magenta) blue;
  clip-path: polygon(
    50% 0%,
    61% 35%,
    100% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    0% 35%,
    39% 35%,
    50% 0%
  );
}
```

```css
@keyframes morphStar {
  from {
    clip-path: polygon(
      50% 0%,
      61% 35%,
      100% 35%,
      68% 57%,
      79% 91%,
      50% 70%,
      21% 91%,
      32% 57%,
      0% 35%,
      39% 35%,
      50% 0%
    );
  }
  to {
    clip-path: polygon(
      50% 10%,
      65% 30%,
      90% 20%,
      75% 60%,
      85% 95%,
      50% 80%,
      15% 95%,
      25% 60%,
      10% 20%,
      35% 30%,
      50% 10%
    );
  }
}

.star {
  animation: morphStar alternate 3s infinite ease-in-out;
}
```

{{ EmbedLiveSample('Animation', 230, 230) }}

### The `path()` function

The `path()` function enables drawing shapes using SVG commands. The function accepts the equivalent of the SVG {{svgattr("d")}} attribute as the function's parameter.

The star from the previous example can be created using `path()`:

```html hidden
<div class="star"></div>
```

```css
.star {
  width: 200px;
  height: 200px;
  background: linear-gradient(rebeccapurple, magenta) blue;
  clip-path: path(
    "M100,0 L122,70 L200,70 L136,114 L158,182 L100,140 L42,182 L64,114 L0,70 L78,70 L100,0 Z"
  );
}
```

{{ EmbedLiveSample('The path function', 230, 230) }}

### Curved lines

With `path()`, we are not limited to straight lines. In this example, we use the `path()` function to create a heart:

```html hidden
<div class="heart"></div>
```

```css
.heart {
  width: 200px;
  height: 200px;
  background: linear-gradient(rebeccapurple, magenta) blue;
  clip-path: path(
    "M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z"
  );
}
```

{{ EmbedLiveSample('Curved lines', 230, 230) }}

### SVG as source

Instead of passing an SVG {{svgattr("d")}} attribute string as the `path()` function argument, the value of the `clip-path` property can reference the SVG {{svgElement("clipPath")}} element directly.

```html
<div class="heart"></div>
<svg height="0" width="0">
  <clipPath id="heart">
    <path
      d="M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z" />
  </clipPath>
</svg>
```

The `id` of the `<clipPath>` is the parameter of the {{cssxref("url_function", "url()")}} function.

```css
.heart {
  width: 200px;
  height: 200px;
  background: linear-gradient(rebeccapurple, magenta) blue;
  clip-path: url(#heart);
}
```

{{ EmbedLiveSample('svg as source', 230, 230) }}

### Shape function

The SVG path syntax is not the most intuitive. For this reason, CSS also offers a `shape()` function. The `shape()` function also takes path drawing directive, but with a syntax that is more human readable. We can recreate the heart with more declarative CSS:

```css
.heart {
  clip-path: shape(
    from 20px 70px,
    arc to 100px 70px of 1% cw,
    arc to 180px 70px of 1% cw,
    curve to 100px 190px with 180px 130px,
    curve to 20px 70px with 20px 130px
  );
}
```

The `shape()` function is more robust in that it accepts CSS values and units (`path()` is limited to coordinates), including using CSS math functions like `calc()`. By using variables, we can create shapes (and boxes) of many different sizes:

```css
:root {
  --m: 10;
}
.heart {
  width: calc(20px * var(--m));
  height: calc(20px * var(--m));
  display: inline-block;
  background: linear-gradient(rebeccapurple, magenta) blue;
  clip-path: border-box
    shape(
      from calc(2px * var(--m)) calc(7px * var(--m)),
      arc to calc(10px * var(--m)) calc(7px * var(--m)) of 1% cw,
      arc to calc(18px * var(--m)) calc(7px * var(--m)) of 1% cw,
      curve to calc(10px * var(--m)) calc(19px * var(--m)) with
        calc(18px * var(--m)) calc(13px * var(--m)),
      curve to calc(2px * var(--m)) calc(7px * var(--m)) with
        calc(2px * var(--m)) calc(13px * var(--m))
    );
}
.small {
  --m: 4;
}

.medium {
  --m: 8;
}

.large {
  --m: 12;
}
```

```html
<div class="heart small"></div>
<div class="heart medium"></div>
<div class="heart large"></div>
```

{{ EmbedLiveSample('shape function', 230, 270) }}

### Wrapping text around your clipped shapes

Clipped elements are still rectangular boxed. Clipping means your element doesn't look like a box; but it is still a box. To wrap inline content around the non-rectangular (or rectangular) shapes you define, use the {{cssxref("shape-outside")}} property. By default, inline content wraps around its margin box; `shape-outside` provides a way to customize this wrapping, making it possible to wrap text around the elements you've clipped, following the clip path you replicated rather than the element's rectangular box.

The content includes two elements to be clipped and the content that will be shaped around them.

```html
<div class="leftTriangle"></div>
<div class="rightTriangle"></div>
<blockquote>
  <q>
    I've learned that people will forget what you said, people will forget what
    you did, but people will never forget how you made them feel.</q
  >
  <cite>&mdash; Maya Angelou</cite>
</blockquote>
```

```css hidden
:root {
  --m: 10;
  font-size: calc(3px * var(--m));
}
div {
  width: calc(0.75em * var(--m));
  height: calc(0.75em * var(--m));
  display: inline-block;
  background: linear-gradient(rebeccapurple, magenta) blue;
}
cite {
  display: block;
  text-align: right;
}
```

In addition to applying the same shape for both the `clip-shape` and `shape-outside` properties, the clipped element has to be floated so that the clipped element is on the same line as the content.

```css
.leftTriangle {
  clip-path: polygon(0 0, 0 100%, 100% 0);
  shape-outside: polygon(0 0, 0 100%, 100% 0);
  float: left;
}
.rightTriangle {
  clip-path: polygon(100% 0, 100% 100%, 0 100%);
  shape-outside: polygon(100% 0, 100% 100%, 0 100%);
  float: right;
}
```

{{ EmbedLiveSample('Wrapping text around your clipped shapes', 230, 290) }}

## See also

- {{cssxref("basic-shape")}}
- {{cssxref("shape-image-threshold")}}
- {{cssxref("shape-margin")}}
- [Overview of shapes](/en-US/docs/Web/CSS/CSS_shapes/Overview_of_shapes)
- [Introduction to CSS masking](/en-US/docs/Web/CSS/CSS_masking/Masking)
- [CSS masking](/en-US/docs/Web/CSS/CSS_masking) module
- [CSS shapes](/en-US/docs/Web/CSS/CSS_shapes) module
