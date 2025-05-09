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

With the `clip-path` property, you can make complex shapes by clipping an element to a `<basic-shape>` or to an SVG source. You can animate and transition `clip-path` shapes if the declared states have the same number of vector points.

### Values of the `clip-path` property

To visually clip an element, the `clip-path` property is set to either a {{cssxref("geometry-box")}}, a {{cssxref("url")}} to a {{svgElem(
  "clipPaht")}} clip source, or a {{cssxref("basic-shape")}} created with [shape function](/en-US/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#shape_functions).

### Geometry boxes

The `clip-path` hides everything outside of the clipped region. The most basic clipping is done via a geometry box. You can clip an element based on it's margin, border, padding, or content. The effects of these visual box values can achieved via other CSS properties, such as setting the {{cssxref("border-color")}} to transparent and the {{cssxref("background-origin")}} to the desired visual box. We're looking at these values mostly because these values are using in conjunction with the shape functions, which we'll look at later, to define the origin of the shape clip path.

This live example demonstrates the `clip-path` property's different visual box values on a element, while comparing it to the CSS `background-origin` property. We've applied a {{cssxref("border")}}, a {{cssxref("background-color")}}, a {{cssxref("background-image")}}, and {{cssxref("padding")}} to the {{htmlelement("blockquote")}}. Select a radio button to update the `--value` to a different `<geometry-box>` value, which updates the {{cssxref("background-origin")}} and the {{cssxref("clip-path")}} resolved values.

```css hidden live-sample__geometry
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
```

```css live-sample__geometry
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

```html hidden live-sample__geometry
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
```

{{ EmbedLiveSample('geometry', 230, 420) }}

When a `<geometry>` box is specified in combination with a `<basic-shape>`, the value defines the reference box for the basic shape. If specified by itself, it causes the edges of the specified box, including any corner shaping (such as a border-radius), to be the clipping path.

### Shape origin

The previous example may make you think that the `<geometry-box>` values are useless, as you can use `background-origin` instead. And you can. But when clipping using basic shapes, the `<geometry-box>`, when included along with a `<basic-shape>` as the `clip-path` value, defines the reference box for, or origin of, that shape. We can combine the two previous examples to demonstrate this.

```html hidden live-sample__origin
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

```css live-sample__origin
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

```css hidden live-sample__origin
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

{{ EmbedLiveSample('origin', 230, 420) }}

For another example, see [`clip-path` shapes and geometry boxes](/en-US/docs/Web/CSS/clip-path#shapes_and_geometry_boxes).

Note that evenly seemingly useless values like `clip-path: margin-box` can actually be useful, as any computed value for `clip-path`, other than `none`, results in the creation of a new [stacking context](/en-US/docs/Web/CSS/CSS_positioned_layout/Stacking_context) the same way that CSS {{cssxref("opacity")}} does for values other than `1`. And even if it seems useless, there are some creative effects you can create by placing the clip-path's edge at the margin-box edge.

```html hidden live-sample__margin
<section></section>
```

```css live-sample__margin
section {
  width: 200px;
  padding: 20px;
  margin: 60px;
  background-color: #ededed;
  background-image: linear-gradient(rebeccapurple, magenta);
  background-repeat: no-repeat;

  clip-path: margin-box circle(60px at top right);
}
```

{{ EmbedLiveSample('margin', 230, 420) }}

### SVG clip-path

The

### Clipping to basic shapes

The `polygon()` function is a {{cssxref("basic-shape")}}. The value can be a clip source, a CSS shape, a geometry-box, both a shape and geometry-box, or the keyword `none`, which is the default.

### Wrapping text around your clipped shapes

Clipped elements are still rectangular boxed. Clipping means your element doesn't look like a box; but it is still a box. To wrap inline content around the non-rectangular (or rectangular) shapes you define, use the {{cssxref("shape-outside")}} property. By default, inline content wraps around its margin box; `shape-outside` provides a way to customize this wrapping, making it possible to wrap text around the elements you've clipped, following the clip path you replicated rather than the element's rectangular box.

## See also

- [CSS masking](/en-US/docs/Web/CSS/CSS_masking) module
