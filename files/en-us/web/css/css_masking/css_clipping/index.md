---
title: Introduction to CSS clipping
slug: Web/CSS/CSS_masking/CSS_clipping
page-type: guide
---

{{CSSRef}}

CSS clipping enables you to define visible portions of an element while hiding other parts, effectively "clipping" its content within a specific shape or area. With clipping, elements aren't limited to being rendered as rectangles. By applying clipping, you can create visually engaging designs. This guide explores the {{cssxref("clip-path")}} property along with some examples.

## CSS clipping

Clipping is a CSS technique used to clip, or hide, sections of an element, displaying only the area of the element located within a developer defined path. Clips areas are created by vector paths; anything in the path is visible while areas outside the path are hidden.

### The `clip-path` property

The `clip-path` property lets you apply clipping. The value is the vector path defining the area of the element that should remain visible. The path can be defined using boxes, a reference to an SVG {{svgelem("clipPath")}}, or CSS shapes and paths. For example, we clip a blue square {{htmlelement("div")}}, creating a diamond, using the {{cssxref("basic-shape/polygon","polygon()")}} function as the clipping path:

```html hidden live-sample__clip-path
<div></div>
```

```css live-sample__clip-path
div {
  height: 200px;
  width: 200px;
  background-color: blue;

  clip-path: polygon(0 50%, 50% 100%, 100% 50%, 50% 0);
}
```

{{ EmbedLiveSample('clip-path', 230, 230) }}

With the `clip-path` property, you can make complex shapes by clipping an element to a `<basic-shape>` or to an SVG source. You can [animate and transition `clip-path` shapes](#animation) if the declared states have the same number of vector points.

### Values of the `clip-path` property

To visually clip an element, the `clip-path` property is set to either a {{cssxref("geometry-box")}}, a {{cssxref("url")}} to a {{svgElem(
  "clipPaht")}} clip source, or a {{cssxref("basic-shape")}} created with [shape function](/en-US/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#shape_functions).

### Geometry boxes

The `clip-path` hides everything outside of the clipped region. The most basic clipping is done via a geometry box. You can clip an element based on it's margin, border, padding, or content. The effects of these visual box values can achieved via other CSS properties, such as setting the {{cssxref("border-color")}} to transparent and the {{cssxref("background-origin")}} to the desired visual box. We're looking at these values mostly because these values are using in conjunction with the shape functions, which we'll look at later, to define the origin of the shape clip path.

[Understanding the reference box](/en-US/docs/Web/CSS/CSS_shapes/Basic_shapes#the_reference_box) used by CSS shapes is important when using `clip-path`, especially with [basic shapes](#clipping-to-basic-shapes), as the reference box defines a shape's coordinate system.

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

.boxmodel {
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
<blockquote class="boxmodel">
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

When a `<geometry>` box is specified in combination with a `<basic-shape>`, the value defines the reference box for the basic shape. If specified by itself, it causes the edges of the specified box, including any corner shaping (such as a border-radius), to be the clipping path.

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

Even values like `clip-path: margin-box` can actually be useful. In addition to creative visuals made by placing the clip-path's edge at the margin-box edge, any computed value for `clip-path`, other than `none`, results in the creation of a new [stacking context](/en-US/docs/Web/CSS/CSS_positioned_layout/Stacking_context) the same way that CSS {{cssxref("opacity")}} does for values other than `1`.

## Clipping to basic shapes

The `clip-path` property's support of `<basic-shapes>` values provides a powerful way to shape elements. The various shape function enable defining precise clipping regions, effectively sculpting elements into unique forms. The basic shape functions, include:

- {{cssxref("basic-shape/circle","circle()")}}
- {{cssxref("basic-shape/ellipse","ellipse()")}}
- {{cssxref("basic-shape/inset","inset()")}}
- {{cssxref("basic-shape/path","path()")}}
- {{cssxref("basic-shape/polygon","polygon()")}}
- {{cssxref("basic-shape/rect","rect()")}}
- {{cssxref("basic-shape/shape","shape()")}}
- {{cssxref("basic-shape/xywh","xywh()")}}

The size and position of these shapes are defined by the `<geometry-box>` value, which defaults to border-box being used as the reference box if the `clip-path` value includes a shape without the `<geometry-box>` component value.

Some of these functions appear to only provide basic predefined clipping options. They may appear to replicate effects you can created with {{csxref("border-radius")}}, but if you [toggled the `border-radius`](#visual-box-values) property in the previous example, you may have noticed the power of CSS clipping. Shapes provide even more control. For example,`inset()` enables clipping a rectangul with precise margins. The real power and control comes with `path()`, `shape()`, and even `polygon()`, which allows for custom multi-point shapes.

### Creating polygons

With `polygon()`, by defining pairs of coordinates, each of which represents a vertex of the shape. you can create intricate forms like stars or abstract figures. The coordinates define vector points connected by straight lines.

Here we use the `polygon()` function to create a star:

```html hidden
<div></div>
```

```css
div {
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
<div></div>
```

```css hidden
div {
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

div {
  animation: morphStar alternate 3s infinite ease-in-out;
}
```

{{ EmbedLiveSample('Animation', 230, 230) }}

### Paths and shapes()

The `path()` function enables drawing shapes using SVG commands. The function accepts the equivalent of the SVG {{svgattr(d")}} attribute as the function's parameter.

The `shape()` function also takes path drawing directive, but with a syntax that is more human readable. The `shape()` function is more robust in that it accepts CSS values and units (`path()` is limited to coordinates), including using CSS math functions like `calc()`.

is a {{cssxref("basic-shape")}}. The value can be a clip source, a CSS shape, a geometry-box, both a shape and geometry-box, or the keyword `none`, which is the default.

### Wrapping text around your clipped shapes

Clipped elements are still rectangular boxed. Clipping means your element doesn't look like a box; but it is still a box. To wrap inline content around the non-rectangular (or rectangular) shapes you define, use the {{cssxref("shape-outside")}} property. By default, inline content wraps around its margin box; `shape-outside` provides a way to customize this wrapping, making it possible to wrap text around the elements you've clipped, following the clip path you replicated rather than the element's rectangular box.

## See also

- [CSS masking](/en-US/docs/Web/CSS/CSS_masking) module
