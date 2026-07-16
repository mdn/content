---
title: "`border-shape` CSS property"
short-title: border-shape
slug: Web/CSS/Reference/Properties/border-shape
page-type: css-property
status:
  - experimental
browser-compat: css.properties.border-shape
sidebar: cssref
---

{{SeeCompatTable}}

The **`border-shape`** [CSS](/en-US/docs/Web/CSS) property defines an element's border shape using {{cssxref("basic-shape")}} values.

## Syntax

```css
/* Keyword */
border-shape: none;

/* Single <basic-shape> value */
border-shape: circle(50%);
border-shape: rect(10px 460px 130px 20px round 20px);
border-shape: shape(
  from 5% 0.5rem,
  arc to 80px 1pt of 10% ccw large rotate 25deg
);

/* Two <basic-shape> values */
border-shape: circle(50%) ellipse(40% 30%);
border-shape: polygon(0% 0%, 0% 100%, 100% 0%)
  polygon(10% 10%, 10% 70%, 70% 10%);

/* <basic-shape> and <geometry-box> values */
border-shape: circle(50%) border-box ellipse(40% 30%) view-box;
border-shape: rect(5px 198px 189px 0px round 20px) view-box circle(50%);
border-shape: path(
    "M 35,95 C 35,50 60,15 100,20 C 120,5 160,5 180,22 C 200,5 250,5 270,22 C 295,5 340,5 360,22 C 395,10 440,35 440,75 C 455,90 450,120 430,128 C 400,145 360,145 330,130 C 300,145 260,145 230,130 C 200,145 160,145 130,130 C 80,142 35,120 35,95 Z"
  )
  view-box;

/* Global values */
border-shape: inherit;
border-shape: initial;
border-shape: revert;
border-shape: revert-layer;
border-shape: unset;
```

The `border-shape` property may be specified using the keyword `none`, or one or two space-separated shape definitions, each consisting of a `<basic-shape>` value or a `<basic-shape>` value and a `<geometry-box>` value.

### Values

- `none`
  - : Specifies that no border shape is defined. This is the initial value.
- {{cssxref("basic-shape")}}
  - : Defines the shape of the border using one of the `<basic-shape>` functions.
- [`<geometry-box>`](/en-US/docs/Web/CSS/Reference/Values/box-edge#geometry-box) {{optional_inline}}
  - : Defines the reference box relative to which the border shape is drawn. If not included, the shape's reference geometry box defaults to:
    - `half-border-box` if a single basic shape is specified, which means that any defined border is drawn on top of the shape path, with the path going down its center.
    - `border-box` for the first (outer) shape and `padding-box` for the second (inner) shape if two basic shapes are specified. The border then occupies the area between the two shapes.

## Description

The `border-shape` property can be applied to elements to create precisely-shaped containers such as speech bubbles, as shown here, or abstract tooltip designs, without having to use workarounds.

```html hidden live-sample___speech-bubble-demo
<img src="https://mdn.github.io/shared-assets/images/examples/leopard.jpg" />
<p>I am a leopard</p>
```

```css hidden live-sample___speech-bubble-demo
html {
  height: 100%;
}

body {
  margin: 0;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  display: block;
  width: 300px;
  anchor-name: --leopard;
  position: relative;
  top: 45px;
}

p {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.3rem;
  padding: 15px 0;
  margin: 0 0 -30px -110px;
  background-color: chartreuse;
  border: 7px solid rgb(50 50 50);
  box-shadow: 5px 5px 10px rgb(0 0 0 / 0.75);

  width: 250px;
  height: 100px;
  border-shape: shape(
      from 50.08% 0%,
      curve to 97.71% 25.55% with 72.95% 0%/93.9% 8.76%,
      curve to 97.71% 62.04% with 100.76% 37.96%/100.76% 49.64%,
      curve to 50.08% 83.94% with 93.9% 75.18%/72.95% 83.94%,
      curve to 23.41% 82.48% with 36.75% 83.94%/27.22% 83.21%,
      curve to 17.7% 100% with 21.51% 87.59%/19.22% 94.16%,
      curve to 11.98% 82.48% with 16.17% 94.16%/13.89% 87.59%,
      curve to 1.31% 62.04% with 13.5% 81.75%/3.98% 76.64%,
      curve to 2.45% 25.55% with -0.59% 49.64%/-0.59% 37.96%,
      curve to 50.08% 0% with 6.26% 8.76%/27.22% 0%,
      close
    )
    content-box;

  text-align: center;
  line-height: 4;

  position: absolute;
  position-anchor: --leopard;
  bottom: anchor(top);
  left: anchor(right);
}
```

{{EmbedLiveSample("speech-bubble-demo", "100%", "240")}}

Note how the applied `border-shape` plays well with the {{cssxref("border")}} and {{cssxref("box-shadow")}} defined on the element — they follow the shape of the border.

### Supported shape functions

You can define an element's `border-shape` (including that of an inline or pseudo-element) using one of the {{cssxref("basic-shape")}} functions. These functions include:

- {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/rect","rect()")}}, and {{cssxref("basic-shape/xywh","xywh()")}}: Provide different ways to define basic rectangle shapes.
- {{cssxref("basic-shape/circle","circle()")}}: Defines circle shapes.
- {{cssxref("basic-shape/ellipse","ellipse()")}}: Defines ellipse shapes.
- {{cssxref("basic-shape/path","path()")}}: Defines any kind of shape using [SVG path](/en-US/docs/Web/SVG/Reference/Element/path) string syntax. SVG path syntax has limitations — it can use only pixel values and the path has to be defined as a single string, so custom properties can't be included via {{cssxref("var()")}}. You are advised to use `shape()` instead.
- {{cssxref("basic-shape/polygon","polygon()")}}: Defines any kind of polygon via pairs of vertex coordinates. If your desired shape includes smooth curves, you are advised to use `shape()`.
- {{cssxref("basic-shape/shape","shape()")}}: Defines any kind of shape. The syntax of `shape()` is more CSS-compatible than that of `path()` and solves its shortcomings.

You can also include an optional [`<geometry-box>`](/en-US/docs/Web/CSS/Reference/Values/box-edge#geometry-box) keyword after each `<basic-shape>` value to specify the reference box relative to which the shapes should be drawn.

### Stroke and fill modes

The `border-shape` property has the following two modes:

- If a single `<basic-shape>` is provided in the value, that shape defines the shape of the element's border, with the defined border styles drawn as a stroke around the shape, as shown in the previous example. This is known as **stroke mode**.
- If two `<basic-shape>`s are provided in the value, the first shape defines the outer boundary of the border, the second shape defines the inner boundary of the border, and any defined border color fills the area between the two boundaries. This is known as **fill mode**.

> [!NOTE]
> Avoid defining a shape for the inner boundary that's larger than the outer boundary. If you do this, the border area does not render properly; you might end up with no border fill rendered or one shape rendered behind the other.

### Effect on layout and rendering

The `border-shape` property creates a purely visual effect — the element's layout is still computed using the underlying rectangular box definition, and the content flow is not affected.

The element's content and background are clipped by the `border-shape` property (the inner shape in fill mode). When the specified `border-shape` is the same size or smaller than the content/background, you won't need to adjust the reference box, unless you want to create some kind of offset effect. However, when the specified `border-shape` is larger than the content/background, you will see gaps between the edge of the background and the shape(s). In such cases, you may need to use a different reference box to fix the display (see [Handling border-shapes larger than the element's background](#handling_border-shapes_larger_than_the_elements_background) for more information).

### Limitations on border styles applied to border shapes

Not all border styles are applied to elements with a `border-shape` property set. The following list explains how each property is affected:

- {{cssxref("border-color")}}: This property is applied. However, when multiple element borders have different colors applied, the browser chooses the first edge with a border color, in the following order:

  - Block start edge
  - Inline start edge
  - Block end edge
  - Inline end edge

  The browser then applies that edge's border color to the entire rendered `border-shape`.

- {{cssxref("border-image")}}: Not applied.
- {{cssxref("border-style")}}: Not applied. All borders are rendered with a `solid` style.
- {{cssxref("border-width")}}: In stroke mode, `border-width` is applied directly to the rendered `border-shape`. When multiple edges have different border widths, the browser selects a width to apply to the entire border using the same process as described for `border-color`.

  In fill mode, the border area is defined by the difference between the areas of the outer and inner shapes; therefore, `border-width` doesn't have any direct effect on the width of the rendered border. However, it does have an indirect effect — it still affects the size of the reference boxes the shapes are drawn relative to (unless you set their `<geometry-box>` to `content-box` or `padding-box`). You therefore still need to be mindful of the `border-width` set on the underlying element while using fill mode.

As an example, if an element has the following declarations applied:

```css
border-shape: rect(5px 198px 189px 0px round 20px);
border-bottom: 30px dashed blue;
border-left: 40px dotted hotpink;
border-right: 50px double yellow;
```

The rendered box will have a rectangular border with rounded corners. The border style will be `solid` because other styles are ignored. The border width and color will be `40px` and `hotpink`, respectively – this is because the `border-left` property applies styles to the inline start edge (assuming that the page has a horizontal {{cssxref("writing-mode")}}), which is the first edge with border styles; this gets chosen by the browser per the priority list described earlier.

### Interaction with `border-radius` and `corner-shape`

The {{cssxref("border-radius")}} and {{cssxref("corner-shape")}} properties are incompatible with `border-shape`. When a `border-shape` is set on an element, any set `border-radius` is ignored, therefore `corner-shape` will also have no effect. The `border-shape` and `border-radius`/`corner-shape` properties have different effects, and are used separately.

If you want to use shaped corners in a `border-shape`, you will have to draw them directly as part of the shape.

### `border-shape` versus `clip-path`

The {{cssxref("clip-path")}} property takes values similar to `border-shape` and produces similar effects. Both properties can be used to change the shape of an element and therefore the element's hit area, altering the boundary inside which `:hover` effects and pointer-related events activate.

However, there is a fundamental difference in how the two properties work:

- `clip-path` hides the area of the element that sits outside the region defined by the provided shape.
- `border-shape` changes the visual rendering of the element so that it sits inside the region defined by the provided shape.

This means `border-shape` clips the element's content while still letting the {{cssxref("overflow")}} property control its display, whereas `clip-path` hides the element's content altogether, so overflow control is not possible.

More significantly, properties such as `box-shadow` and `outline` do not follow the shape created by `clip-path` — it chops off the outside of the element, meaning that such effects are truncated in an ugly fashion or removed altogether. The `border-shape` property, on the other hand, creates a differently-shaped border that is neatly followed by such effects.

### Handling border-shapes larger than the element's background

As mentioned earlier, one issue with `border-shape` is that when you define a shape that is larger than the element's content/background, you can end up with a gap between the background and the border.

The recommended approach to fixing this is to set the reference `<geometry-box>` to `content-box`. and then use {{cssxref("padding")}} to fill in the gaps between the content and the border. For example:

```css
border-shape: shape(
    from 0% 0%,
    hline to 33%,
    arc by 33% 0% of 16% 20% small cw,
    hline to 100%,
    line to 100% 33%,
    arc by 0% 33% of 20% 16% small cw,
    line to 100% 100%,
    hline to 66%,
    arc by -33% 0% of 16% 20% small ccw,
    hline to 0%,
    line to 0% 66%,
    arc by 0% -33% of 20% 16% small ccw,
    close
  )
  content-box;
padding: 24px;
```

This way, the `padding` will be set outside the shape, causing it to get smaller, and forcing the background to fill up the parts of the shape extending outside the content area. You can see this technique in action in our [irregular jigsaw piece navigation menu](/en-US/docs/Web/CSS/Guides/Borders_and_box_decorations/border-shape_nav_menu) example.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic `border-shape` stroke usage

This example shows how to use `border-shape` in stroke mode.

#### HTML

The markup for this example contains a single {{htmlelement("p")}} element.

```html live-sample___basic-border-shape live-sample___basic-border-shape-fill
<p>Circle</p>
```

#### CSS

```css hidden live-sample___basic-border-shape live-sample___basic-border-shape-fill live-sample___border-shape-select live-sample___animate-border-shape
html {
  height: 100%;
}

body {
  margin: 0;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
}

p {
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.6rem;
  padding: 40px 50px;
  background-color: chartreuse;
  display: flex;
  align-items: center;
}
```

We give the box a {{cssxref("width")}} of `fit-content` and an {{cssxref("aspect-ratio")}} of `1/1` to neatly fit the content inside a square. We also set a thick black {{cssxref("border")}} and a {{cssxref("box-shadow")}} before setting a {{cssxref("border-shape")}} of `circle(50%)` to create a circular border that neatly fits the content and background.

```css live-sample___basic-border-shape
p {
  width: fit-content;
  aspect-ratio: 1/1;
  border: 15px solid black;
  box-shadow: 5px 5px 10px rgb(0 0 0 / 0.5);
  border-shape: circle(50%);
}
```

#### Result

{{EmbedLiveSample("basic-border-shape", "100%", "240")}}

Note how the `border` and `box-shadow` neatly follow the defined shape.

### Basic `border-shape` fill usage

This example builds on the previous one, showing how to use `border-shape` in fill mode to create an irregular filled border.

The HTML is the same as in the previous example.

#### CSS

The CSS is the same as in the previous example, except this time we color the border `hotpink`, and we include two `<basic-shape>` definitions inside the `border-shape` value. There's an outer rectangle that covers the whole area of the content and an inner circle that's the same as in the previous example.

```css live-sample___basic-border-shape-fill
p {
  width: fit-content;
  aspect-ratio: 1/1;
  border: 15px solid hotpink;
  box-shadow: 5px 5px 10px rgb(0 0 0 / 0.5);
  border-shape: rect(0% 100% 100% 0% round 20px) circle(50%);
}
```

#### Result

{{EmbedLiveSample("basic-border-shape-fill", "100%", "240")}}

Note how this time, the border covers the area between the rectangle and the circle, and it adopts the color set in the `border` declaration.

### Comparing `border-shape` values

In this example, we let you select from different `border-shape` values to apply to an element, so you can compare and contrast how they render.

#### HTML

The HTML is similar to that in the previous example, except this time we include a bit more text in the `<p>` element. We've also included a {{htmlelement("select")}} element so you can choose different classes to apply to the `<p>` via JavaScript (we've hidden both the `<select>` and the JavaScript for brevity).

```html live-sample___border-shape-select
<p>Blessed are the cheesemakers.</p>
```

```html hidden live-sample___border-shape-select
<form>
  <label for="shape-select">Select border-shape type:</label>
  <br />
  <select id="shape-select">
    <option>circle</option>
    <option selected>ellipse</option>
    <option>inset</option>
    <option>path</option>
    <option>polygon</option>
    <option>rect</option>
    <option>shape</option>
    <option>two-polygons</option>
    <option>xywh</option>
  </select>
</form>
```

The classes set different `border-shape` values on the `<p>` element. To begin with, a `class` of `ellipse` is set on the `<p>` element, so initially it has an `ellipse()` `border-shape`.

```js hidden live-sample___border-shape-select
const box = document.querySelector("p");
const select = document.querySelector("select");

select.addEventListener("change", selectClass);

function selectClass() {
  box.className = select.value;
}

selectClass();
```

#### CSS

In the CSS, we give the box a {{cssxref("width")}} of `550px`, a thick black {{cssxref("border")}}, and a {{cssxref("box-shadow")}}.

```css live-sample___border-shape-select
p {
  width: 550px;
  border: 15px solid black;
  box-shadow: 5px 5px 10px rgb(0 0 0 / 0.5);
}
```

Next, we define the rules for each of the classes that will be applied when you select the different options in the `<select>` element:

```css-nolint live-sample___border-shape-select
.circle {
  border-shape: circle(60%);
}

.ellipse {
  border-shape: ellipse(50% 40%);
}

.inset {
  border-shape: inset(10px 20px 10px 20px round 20px);
}

.path {
  border-shape: path(
      "M 35,95 C 35,50 60,15 100,20 C 120,5 160,5 180,22 C 200,5 250,5 270,22 C 295,5 340,5 360,22 C 460,10 477,35 496,75 C 515,157 450,120 430,128 C 400,145 360,145 330,130 C 300,145 260,145 230,130 C 200,145 160,145 130,130 C 80,142 35,120 35,95 Z"
    )
    view-box;
}

.polygon {
  border-shape: polygon(0% 60%, 0% 85%, 8% 100%, 18% 88%, 30% 100%, 42% 88%, 55% 100%, 68% 88%, 80% 100%, 86% 88%, 90% 75%, 100% 60%, 90% 30%, 85% 5%, 75% 18%, 65% 3%, 52% 16%, 40% 3%, 27% 16%, 15% 3%, 5% 18%) view-box;
}

.rect {
  border-shape: rect(10px 500px 130px 20px round 20px);
}

.shape {
  border-shape: shape(
    from 0% 64.5%,
    curve to 15.71% 8.26% with 0% 30.76%/6.04% 4.51%,
    curve to 35.05% 9.76% with 20.55% -2.99%/30.21% -2.99%,
    curve to 56.8% 9.76% with 39.88% -2.99%/51.97% -2.99%,
    curve to 78.56% 9.76% with 62.84% -2.99%/73.72% -2.99%,
    curve to 97.89% 49.5% with 87.02% 0.76%/97.89% 19.51%,
    curve to 95.47% 89.25% with 101.52% 60.75%/100.31% 83.25%,
    curve to 71.3% 90.75% with 88.22% 102%/78.56% 102%,
    curve to 47.13% 90.75% with 64.05% 102%/54.38% 102%,
    curve to 22.96% 90.75% with 39.88% 102%/30.21% 102%,
    curve to 0% 64.5% with 10.88% 99.75%/0% 83.25%,
    close
  );
}

.two-polygons {
  border-shape: polygon(0% 60%, 0% 85%, 8% 100%, 18% 88%, 30% 100%, 42% 88%, 55% 100%, 68% 88%, 80% 105%, 86% 88%, 91% 75%, 101% 60%, 93% 30%, 86% 5%, 75% 18%, 65% 3%, 52% 16%, 40% 3%, 27% 16%, 15% 3%, 5% 18%)
    polygon(0% 55%, 0% 90%, 6% 104%, 17% 93%, 30% 100%, 43% 93%, 56% 102%, 69% 93%, 81% 102%, 88% 93%, 94% 78%, 100% 58%, 94% 24%, 88% -2%, 76% 13%, 64% -4%, 51% 11%, 39% -4%, 26% 11%, 13% -4%, 3% 13%);
}

.xywh {
  border-shape: xywh(5% 5% 90% 90% round 20px);
}
```

```css hidden live-sample___border-shape-select
form {
  position: absolute;
  border: 2px solid black;
  background: white;
  padding: 5px;
  bottom: 0;
  right: 0;
}

form select {
  width: 100%;
  padding: 2px 5px;
  margin-top: 10px;
}
```

#### Result

{{EmbedLiveSample("border-shape-select", "100%", "350")}}

Select different options from the drop-down menu to see how the different border shapes render. At any point, feel free to use your browser's developer tools to inspect the `border-shape` values applied to the `<p>` element and edit them to get an idea of how the values work.

### Animating a `border-shape`

This example demonstrates how you can animate the `border-shape` property.

#### HTML

The same `<p>` element is used as in the previous example, except this time we've included a [`tabindex`](/en-US/docs/Web/HTML/Reference/Global_attributes/tabindex) attribute so it can be focused via the keyboard.

```html live-sample___animate-border-shape
<p tabindex="0">Blessed are the cheesemakers.</p>
```

#### CSS

For this example, we apply a `polygon()` `border-shape` to the `<p>`.

```css-nolint live-sample___animate-border-shape
p {
  width: 550px;
  border: 15px solid black;
  box-shadow: 5px 5px 10px rgb(0 0 0 / 0.5);
  border-shape: polygon(0% 60%, 0% 85%, 8% 100%, 18% 88%, 30% 100%, 42% 88%, 55% 100%, 68% 88%, 80% 100%, 86% 88%, 90% 75%, 100% 60%, 90% 30%, 85% 5%, 75% 18%, 65% 3%, 52% 16%, 40% 3%, 27% 16%, 15% 3%, 5% 18%) view-box;
}
```

We also set an {{cssxref("animation")}} on the `<p>` element's {{cssxref(":hover")}} and {{cssxref(":focus")}} states, so that when the element is hovered or focused, it smoothly animates back and forth between two polygon border shapes for infinite iterations.

```css-nolint live-sample___animate-border-shape
p:hover,
p:focus {
  animation: morph 1s ease-in-out infinite alternate;
}

@keyframes morph {
  from {
    border-shape: polygon(0% 60%, 0% 85%, 8% 100%, 18% 88%, 30% 100%, 42% 88%, 55% 100%, 68% 88%, 80% 100%, 86% 88%, 90% 75%, 100% 60%, 90% 30%, 85% 5%, 75% 18%, 65% 3%, 52% 16%, 40% 3%, 27% 16%, 15% 3%, 5% 18%) view-box;
  }
  to {
    border-shape: polygon(0% 55%, 0% 90%, 6% 104%, 17% 93%, 30% 100%, 43% 93%, 56% 102%, 69% 93%, 81% 102%, 88% 93%, 94% 78%, 100% 58%, 94% 24%, 88% -2%, 76% 13%, 64% -4%, 51% 11%, 39% -4%, 26% 11%, 13% -4%, 3% 13%) view-box;
  }
}
```

#### Result

{{EmbedLiveSample("animate-border-shape", "100%", "240")}}

Hover over or focus the paragraph to see the animation.

```css hidden live-sample___speech-bubble-demo live-sample___basic-border-shape live-sample___basic-border-shape-fill live-sample___border-shape-select live-sample___animate-border-shape
@supports not (border-shape: circle(50%)) {
  body::before {
    content: "Your browser does not support the 'border-shape' property.";
    font-family: sans-serif;
    background-color: wheat;
    padding: 1rem 0;
    text-align: center;

    z-index: 1;
    position: fixed;
    inset: 40% 0 auto;
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("border")}}
- {{cssxref("corner-shape")}}
- [Creating an irregular nav menu with border-shape](/en-US/docs/Web/CSS/Guides/Borders_and_box_decorations/border-shape_nav_menu)
- [CSS borders and box decorations](/en-US/docs/Web/CSS/Guides/Borders_and_box_decorations) module
- [CSS backgrounds and borders](/en-US/docs/Web/CSS/Guides/Backgrounds_and_borders) module
- [border-shape: the future of the non-rectangular web](https://una.im/border-shape) by Una Kravets (2026)
- [Get Ready For the Powerful CSS border-shape Property!](https://css-tricks.com/get-ready-for-the-powerful-css-border-shape-property/) on CSS Tricks (2026)
