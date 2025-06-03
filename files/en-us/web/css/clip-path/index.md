---
title: clip-path
slug: Web/CSS/clip-path
page-type: css-property
browser-compat: css.properties.clip-path
---

{{CSSRef}}

The **`clip-path`** [CSS](/en-US/docs/Web/CSS) property creates a clipping region that sets what part of an element should be shown. Parts that are inside the region are shown, while those outside are hidden.

{{InteractiveExample("CSS Demo: clip-path")}}

```css interactive-example-choice
clip-path: circle(40%);
```

```css interactive-example-choice
clip-path: ellipse(130px 140px at 10% 20%);
```

```css interactive-example-choice
clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
```

```css interactive-example-choice
clip-path: path("M 0 200 L 0,75 A 5,5 0,0,1 150,75 L 200 200 z");
```

```css interactive-example-choice
clip-path: rect(5px 145px 160px 5px round 20%);
```

```css interactive-example-choice
clip-path: xywh(0 5px 100% 75% round 15% 0);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <img
      class="transition-all"
      id="example-element"
      src="/shared-assets/images/examples/balloon-small.jpg"
      width="150" />
    We had agreed, my companion and I, that I should call for him at his house,
    after dinner, not later than eleven o’clock. This athletic young Frenchman
    belongs to a small set of Parisian sportsmen, who have taken up “ballooning”
    as a pastime. After having exhausted all the sensations that are to be found
    in ordinary sports, even those of “automobiling” at a breakneck speed, the
    members of the “Aéro Club” now seek in the air, where they indulge in all
    kinds of daring feats, the nerve-racking excitement that they have ceased to
    find on earth.
  </div>
</section>
```

```css interactive-example
section {
  align-items: flex-start;
}

.example-container {
  text-align: left;
  padding: 20px;
}

#example-element {
  float: left;
  width: 150px;
  margin: 20px;
}
```

## Syntax

```css
/* Keyword values */
clip-path: none;

/* <clip-source> values */
clip-path: url(resources.svg#c1);

/* <geometry-box> values */
clip-path: margin-box;
clip-path: border-box;
clip-path: padding-box;
clip-path: content-box;
clip-path: fill-box;
clip-path: stroke-box;
clip-path: view-box;

/* <basic-shape> values */
clip-path: inset(100px 50px);
clip-path: circle(50px at 0 100px);
clip-path: ellipse(50px 60px at 10% 20%);
clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
clip-path: path(
  "M0.5,1 C0.5,1,0,0.7,0,0.3 A0.25,0.25,1,1,1,0.5,0.3 A0.25,0.25,1,1,1,1,0.3 C1,0.7,0.5,1,0.5,1 Z"
);
clip-path: rect(5px 5px 160px 145px round 20%);
clip-path: shape(from 0% 0%, line to 100% 0%, line to 50% 100%, close);
clip-path: xywh(0 5px 100% 75% round 15% 0);

/* Box and shape values combined */
clip-path: padding-box circle(50px at 0 100px);

/* Global values */
clip-path: inherit;
clip-path: initial;
clip-path: revert;
clip-path: revert-layer;
clip-path: unset;
```

The `clip-path` property is specified as one or a combination of the values listed below.

### Values

- `<clip-source>`
  - : A {{cssxref("url_value", "&lt;url&gt;")}} referencing an [SVG](/en-US/docs/Web/SVG) {{SVGElement("clipPath")}} element.
- {{cssxref("&lt;basic-shape&gt;")}}

  - : A shape whose size and position is defined by the `<geometry-box>` value. If no geometry box is specified, the `border-box` will be used as the reference box. One of:

    - {{cssxref("basic-shape/inset","inset()")}}
      - : Defines an inset rectangle.
    - {{cssxref("basic-shape/circle","circle()")}}
      - : Defines a circle using a radius and a position.
    - {{cssxref("basic-shape/ellipse","ellipse()")}}
      - : Defines an ellipse using two radii and a position.
    - {{cssxref("basic-shape/polygon","polygon()")}}
      - : Defines a polygon using an SVG filling rule and a set of vertices.
    - {{cssxref("basic-shape/path","path()")}}
      - : Defines a shape using an optional SVG filling rule and an SVG path definition.
    - {{cssxref("basic-shape/rect","rect()")}}
      - : Defines a rectangle using the specified distances from the edges of the reference box.
    - {{cssxref("basic-shape/shape","shape()")}}
      - : Defines a shape using an optional SVG filling rule and shape commands for lines, curves, and arcs.
    - {{cssxref("basic-shape/xywh","xywh()")}}
      - : Defines a rectangle using the specified distances from the top and left edges of the reference box and the specified width and height of the rectangle.

- `<geometry-box>`

  - : If specified in combination with a `<basic-shape>`, this value defines the reference box for the basic shape. If specified by itself, it causes the edges of the specified box, including any corner shaping (such as a {{cssxref("border-radius")}}), to be the clipping path. The geometry box can be one of the following values:

    - `margin-box`
      - : Uses the [margin box](/en-US/docs/Web/CSS/CSS_shapes/From_box_values#margin-box) as the reference box.
    - `border-box`
      - : Uses the [border box](/en-US/docs/Web/CSS/CSS_shapes/From_box_values#border-box) as the reference box.
    - `padding-box`
      - : Uses the [padding box](/en-US/docs/Web/CSS/CSS_shapes/From_box_values#padding-box) as the reference box.
    - `content-box`
      - : Uses the [content box](/en-US/docs/Web/CSS/CSS_shapes/From_box_values#content-box) as the reference box.
    - `fill-box`
      - : Uses the object bounding box as the reference box.
    - `stroke-box`
      - : Uses the stroke bounding box as the reference box.
    - `view-box`
      - : Uses the nearest SVG viewport as the reference box. If a {{SVGAttr("viewBox")}} attribute is specified for the element creating the SVG viewport, the reference box is positioned at the origin of the coordinate system established by the `viewBox` attribute and the dimension of the size of the reference box is set to the width and height values of the `viewBox` attribute.

- `none`
  - : No clipping path is created.

> [!NOTE]
> A computed value other than **`none`** results in the creation of a new [stacking context](/en-US/docs/Web/CSS/CSS_positioned_layout/Stacking_context) the same way that CSS {{cssxref("opacity")}} does for values other than `1`.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Shapes and geometry boxes

In this example, two triangles are created by defining a `polygon()` as the clip path on {{htmlelement("div")}} elements. Each one has a solid colored background and a thick {{cssxref("border")}}. The second `<div>` element has its reference box set to `content-box`:

#### HTML

```html live-sample___shapes1 live-sample___shapes2 live-sample___shapes3
<div></div>
<div></div>
```

#### CSS

```css hidden live-sample___shapes1 live-sample___shapes2 live-sample___shapes3
body {
  display: flex;
  gap: 20px;
  flex-flow: row wrap;
}
```

```css live-sample___shapes1 live-sample___shapes2 live-sample___shapes3
div {
  height: 200px;
  width: 200px;
  box-sizing: border-box;
  background-color: rebeccapurple;
  border: 20px solid magenta;

  clip-path: polygon(50% 0, 100% 100%, 0 100%);
}

div:last-of-type {
  clip-path: content-box polygon(50% 0, 100% 100%, 0 100%);
}
```

#### Results

{{EmbedLiveSample("shapes1", "", "230")}}

For the first triangle, we didn't specify a reference box; it therefore defaults to `border-box`, with the 0% and 100% positions located on the outside edge of the border. In the second example, we set the `<geometry-box>` to `content-box`, meaning the reference box for the basic shape is the outer edge of the content area, which is inside the padding box. Because our example has no `padding`, this is the inner edge of the border.

### `shape()` versus `path()` functions

Expanding on the previous example, we create the same triangle with different `<basic-shape>` values, demonstrating how the {{cssxref("basic-shape/shape", "shape()")}} and {{cssxref("basic-shape/path", "path()")}} functions can also be used to create clipping paths, with `shape()` being a more flexible solution.

We use `path()` to define the first element's clipping path, and `shape()` for the second, both using the default `border-box` as their reference box:

```css live-sample___shapes2 live-sample___shapes3
div {
  clip-path: path("M100 0 L200 200 L0 200 Z");
}

div:last-of-type {
  clip-path: shape(from 50% 0, line to 100% 100%, line to 0 100%, close);
}
```

As a result, the path defined with the shape() function grows with the element, whereas the path() version does not:

{{EmbedLiveSample("shapes2", "", "230")}}

Because the `shape()` function allows using {{cssxref("percentage")}} values (and [custom properties](/en-US/docs/Web/CSS/--*) too), it is more robust.

We'll demonstrate this by increasing the size of the underlying element:

```css live-sample___shapes3
div {
  width: 250px;
  height: 250px;
}
```

{{EmbedLiveSample("shapes3", "", "280")}}

The visibility, or at least partial visibility, of the four border sides in the clip path example defined by the `shape()` function is due to the percentage values allowing the path to grow with the element. In the `path()` version, the element grew, but not the shape. As a result, the top and left borders are partially visible while the right and bottom borders are clipped out.

### SVG as clip source

In this example, we define SVG {{svgElement("clipPath")}} elements to use as a `clip-path` source.

#### HTML

We include two {{htmlElement("div")}} elements and an `<svg>` element containing two `<clipPath>` elements. One `<clipPath>` contains four {{svgElement("rect")}} elements that together define window panes, leaving a cross of blank space in the middle, and the other contains two crossing `<rect>` elements.

```html
<svg height="0" width="0">
  <defs>
    <clipPath id="window">
      <rect y="0" x="0" width="80" height="80" />
      <rect y="0" x="120" width="80" height="80" />
      <rect y="120" x="0" width="80" height="80" />
      <rect y="120" x="120" width="80" height="80" />
    </clipPath>
    <clipPath id="cross">
      <rect y="0" x="80" width="40" height="200" />
      <rect y="80" x="0" width="200" height="40" />
    </clipPath>
  </defs>
</svg>

<div class="window">Window</div>
<div class="cross">Cross</div>
```

#### CSS

We use [flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout) to allow our elements to sit side-by-side with a gap between them, if there is space available. We define a {{cssxref("gradient/conic-gradient", "conic-gradient()")}} background image on both `<div>` elements, providing an interesting visual to clip, along with a {{cssxref("border")}}.

```css
body {
  display: flex;
  gap: 20px;
  flex-flow: row wrap;
  font: 2em sans-serif;
}

div {
  width: 200px;
  height: 200px;
  background-image: conic-gradient(
    at center,
    rebeccapurple,
    green,
    lightblue,
    rebeccapurple
  );

  border: 5px solid;
  box-sizing: border-box;
}
```

We then set the `id` of the `<clipPath>` as the `<clip-source>`. We center the text in the `cross` example vertically using {{cssxref("align-content")}}, as otherwise the text would be clipped, as is happening in the `window` example.

```css
.window {
  clip-path: url(#window);
}

.cross {
  clip-path: url(#cross);
  align-content: center;
}
```

#### Results

{{EmbedLiveSample("SVG as clip source", "", "230")}}

The elements, including their border and text, are clipped, with only the parts overlapping the `<clipPath>` elements being drawn to the page.

### The various value types

This example demonstrates the various values of the `clip-path` property clipping an HTML {{htmlelement("img")}}.

#### HTML

The HTML includes an `<img>` that will be clipped, a star-shaped `<clipPath>`, and a {{htmlelement("select")}} element to choose a `clip-path` property value from.

```html
<img
  id="clipped"
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<svg height="0" width="0">
  <defs>
    <clipPath id="star">
      <path d="M100,0 42,180 196,70 4,70 158,180z" />
    </clipPath>
  </defs>
</svg>

<select id="clipPath">
  <option value="none">none</option>
  <option value="circle(100px at 110px 100px)">circle</option>
  <option value="url(#star)" selected>star</option>
  <option value="inset(20px round 20px)">inset</option>
  <option value="rect(20px 150px 200px 20px round 10%)">rect</option>
  <option value="xywh(0 20% 90% 67% round 0 0 5% 5px)">xywh</option>
  <option value="path('M 0 200 L 0,110 A 110,90 0,0,1 240,100 L 200 340 z')">
    path
  </option>
</select>
```

```html hidden
<pre id="log"></pre>
```

#### CSS

The initial rendering includes the star as the `clip-path` source.

```css
#clipped {
  margin-bottom: 20px;
  clip-path: url(#star);
}
```

#### JavaScript

When you select a new option from the `<select>` menu, an event handler updates the value of the `clip-path` set on the `<img>`.

```js
const clipPathSelect = document.getElementById("clipPath");
clipPathSelect.addEventListener("change", (evt) => {
  const path = evt.target.value;
  document.getElementById("clipped").style.clipPath = path;
  log(`clip-path: ${path};`);
});
```

```js hidden
function log(text) {
  const logElement = document.querySelector("#log");
  logElement.innerText = `${text}`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

#### Result

{{EmbedLiveSample("Complete_example", 230, 300)}}

Select different options to change the `clip-path` value.

> [!NOTE]
> While it is possible to define a path of text, if you want to clip a background image to text rather than a shape, see the {{cssxref("background-clip")}} property.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("clip-rule")}}
- {{CSSxRef("mask")}}
- {{CSSxRef("filter")}}
- {{cssxref("background-clip")}}
- [Introduction to CSS clipping](/en-US/docs/Web/CSS/CSS_masking/Clipping)
- [CSS masking](/en-US/docs/Web/CSS/CSS_masking) module
- SVG {{SVGAttr("clip-path")}} attribute
- [Applying SVG effects to HTML content](/en-US/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
