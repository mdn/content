---
title: Inline formatting context
slug: Web/CSS/Inline_formatting_context
page-type: guide
---

{{CSSRef}}

This article explains the inline formatting context.

## Core concepts

The inline formatting context is part of the visual rendering of a web page. Inline boxes are laid out one after the other, in the direction sentences run in the writing mode in use:

- In a horizontal writing mode, boxes are laid out horizontally, starting on the left.
- In a vertical writing mode they would be laid out vertically starting at the top.

In the example below, the two {{HTMLElement("div")}} elements with the black borders are part of a [block formatting context](/en-US/docs/Web/CSS/CSS_display/Block_formatting_context), while inside each box, the words participate in an inline formatting context. The words in the horizontal writing mode run horizontally, while words in the vertical writing mode run vertically.

```html live-sample___inline
<div class="example horizontal">One Two Three</div>
<div class="example vertical">Four Five Six</div>
```

```css live-sample___inline
body {
  font: 1.2em sans-serif;
}
.example {
  border: 5px solid black;
  margin: 20px;
}

.horizontal {
  writing-mode: horizontal-tb;
}
.vertical {
  writing-mode: vertical-rl;
}
```

{{EmbedLiveSample("inline", "", "220px")}}

Boxes forming a line are contained by a rectangular area called a line box. This box will be large enough to contain all of the inline boxes in that line; when there is no more room in the inline direction another line will be created. Therefore, a paragraph is a set of inline line boxes, stacked in the block direction.

When an inline box is split, margins, borders, and padding have no visual effect where the split occurs. In the next example there is a {{HTMLElement("span")}} element wrapping a set of words wrapping onto two lines. The border on the `<span>` breaks at the wrapping point.

```html live-sample___break
<div class="example">
  Before that night—
  <span
    >a memorable night, as it was to prove— hundreds of millions of people</span
  >
  had watched the rising smoke-wreaths of their fires without drawing any
  special inspiration from the fact.
</div>
```

```css live-sample___break
body {
  font: 1.2em sans-serif;
}
.example {
  border: 5px solid black;
  margin: 20px;
}

span {
  border: 5px solid rebeccapurple;
}
```

{{EmbedLiveSample("break")}}

Margins, borders, and padding in the inline direction are respected. In the example below you can see how the margin, border, and padding on the inline `<span>` element are added.

```html live-sample___mbp
<div class="example horizontal">One <span>Two</span> Three</div>
<div class="example vertical">Four <span>Five</span> Six</div>
```

```css live-sample___mbp
body {
  font: 1.2em sans-serif;
}

.example {
  border: 5px solid black;
  margin: 20px;
}

span {
  border: 5px solid rebeccapurple;
  padding-inline-start: 20px;
  padding-inline-end: 40px;
  margin-inline-start: 30px;
  margin-inline-end: 10px;
}
.horizontal {
  writing-mode: horizontal-tb;
}

.vertical {
  writing-mode: vertical-rl;
}
```

{{EmbedLiveSample("mbp", "", "340px")}}

> [!NOTE]
> I am using the logical, flow-relative properties — {{cssxref("padding-inline-start")}} rather than {{cssxref("padding-left")}} — so that they work in the inline dimension whether the text is horizontal or vertical. Read more about these properties in [Logical Properties and Values](/en-US/docs/Web/CSS/CSS_logical_properties_and_values).

## Alignment in the block direction

Inline boxes may be aligned in the block direction in different ways, using the {{cssxref("vertical-align")}} property, which will align on the block axis in vertical writing modes (therefore not vertically at all!). In the example below the large text is making the line box of the first sentence larger, therefore the `vertical-align` property can be used to align the inline boxes either side of it. I have used the value `top`, try changing it to `middle`, `bottom`, or `baseline`.

```html live-sample___align
<div class="example horizontal">
  Before that night—<span>a memorable night</span>, as it was to prove—hundreds
  of millions of people had watched the rising smoke-wreaths of their fires
  without drawing any special inspiration from the fact.
</div>

<div class="example vertical">
  Before that night—<span>a memorable night</span>, as it was to prove—hundreds
  of millions of people had watched the rising smoke-wreaths of their fires
  without drawing any special inspiration from the fact.
</div>
```

```css live-sample___align
body {
  font: 1.2em sans-serif;
}

span {
  font-size: 200%;
  vertical-align: top;
}

.example {
  border: 5px solid black;
  margin: 20px;
  inline-size: 400px;
}

.horizontal {
  writing-mode: horizontal-tb;
}

.vertical {
  writing-mode: vertical-rl;
}
```

{{EmbedLiveSample("align", "", "640px")}}

## Alignment in the inline direction

If there is additional space in the inline direction, the {{cssxref("text-align")}} property can be used to align the inline boxes within their line box. Try changing the value of `text-align` below to `end`.

```html live-sample___text-align
<div class="example horizontal">One Two Three</div>
<div class="example vertical">Four Five Six</div>
```

```css hidden live-sample___text-align
body {
  font: 1.2em sans-serif;
}

.example {
  border: 5px solid black;
  margin: 20px;
}

.horizontal {
  writing-mode: horizontal-tb;
}

.vertical {
  writing-mode: vertical-rl;
}
```

```css live-sample___text-align
.example {
  text-align: center;
  inline-size: 250px;
}
```

{{EmbedLiveSample("text-align", "", "350px")}}

## Effect of floats

Line boxes usually have the same size in the inline direction, therefore the same width if working in a horizontal writing mode, or height if working in a vertical writing mode. If there is a {{cssxref("float")}} within the same block formatting context however, the float will cause the line boxes that wrap the float to become shorter.

```html live-sample___float
<div class="box">
  <div class="float">I am a floated box!</div>
  <p>I am content inside the container.</p>
</div>
```

```css live-sample___float
body {
  font: 1.2em sans-serif;
}

.box {
  background-color: rgb(224 206 247);
  border: 5px solid rebeccapurple;
}

.float {
  float: left;
  width: 250px;
  height: 150px;
  background-color: white;
  border: 1px solid black;
  padding: 10px;
}
```

{{EmbedLiveSample("float", "", "200px")}}

## See also

- [Block formatting context](/en-US/docs/Web/CSS/CSS_display/Block_formatting_context)
- [Visual Formatting Model](/en-US/docs/Web/CSS/Visual_formatting_model)
