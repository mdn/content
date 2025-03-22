---
title: Logical properties for sizing
slug: Web/CSS/CSS_logical_properties_and_values/Sizing
page-type: guide
---

{{CSSRef}}

In this guide we will explain the flow-relative mappings between physical dimension properties and logical properties used for sizing elements on our pages.

When specifying the size of an item, the [CSS logical properties and values](/en-US/docs/Web/CSS/CSS_logical_properties_and_values) module gives you the ability to indicate sizing as it relates to the flow of text (inline and block) rather than physical sizing which relates to the physical dimensions of horizontal and vertical (e.g. left and right). While these flow relative mappings may well become the default for many of us, in a design you may well use both physical and logical sizing. You might want some features to always relate to the physical dimensions whatever the writing mode.

## Mappings for dimensions

The table below provides mappings between logical and physical properties. These mappings assume that you are in a `horizontal-tb` writing mode, such as English or Arabic, in which case {{CSSxRef("width")}} would be mapped to {{CSSxRef("inline-size")}}.

If you were in a vertical writing mode then {{CSSxRef("inline-size")}} would be mapped to {{CSSxRef("height")}}.

| Logical Property               | Physical Property         |
| ------------------------------ | ------------------------- |
| {{CSSxRef("inline-size")}}     | {{CSSxRef("width")}}      |
| {{CSSxRef("block-size")}}      | {{CSSxRef("height")}}     |
| {{CSSxRef("min-inline-size")}} | {{CSSxRef("min-width")}}  |
| {{CSSxRef("min-block-size")}}  | {{CSSxRef("min-height")}} |
| {{CSSxRef("max-inline-size")}} | {{CSSxRef("max-width")}}  |
| {{CSSxRef("max-block-size")}}  | {{CSSxRef("max-height")}} |

## Width and height example

The logical mappings for {{CSSxRef("width")}} and {{CSSxRef("height")}} are {{CSSxRef("inline-size")}}, which sets the length in the inline dimension and {{CSSxRef("block-size")}}, which sets the length in the block dimension. When working in English, replacing `width` with `inline-size` and `height` with `block-size` will give the same layout.

In the live example below, the `writing-mode` is set to `horizontal-tb`. Change it to `vertical-rl` and you will see that the first example — which uses `width` and `height` — remains the same size in each dimension, despite the text becoming vertical. The second example — which uses `inline-size` and `block-size` — will follow the text direction as if the entire block has rotated.

```html live-sample___size-inline-block
<div class="container">
  <div class="physical box">I have a width of 200px and a height of 100px.</div>

  <div class="logical box">
    I have an inline-size of 200px and a block-size of 100px.
  </div>
</div>
```

```css hidden live-sample___size-inline-block
body {
  font: 1.2em / 1.5 sans-serif;
}
.container {
  display: flex;
}
.box {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  padding: 10px;
  margin: 10px;
}
```

```css live-sample___size-inline-block
.box {
  writing-mode: horizontal-tb;
}

.physical {
  width: 200px;
  height: 100px;
}

.logical {
  inline-size: 200px;
  block-size: 100px;
}
```

{{EmbedLiveSample("size-inline-block")}}

## Min-width and min-height example

There are also mappings for {{CSSxRef("min-width")}} and {{CSSxRef("min-height")}} — these are {{CSSxRef("min-inline-size")}} and {{CSSxRef("min-block-size")}}. These work in the same way as the `inline-size` and `block-size` properties, but setting a minimum rather than a fixed size.

Try changing the example below to `vertical-rl`, as with the first example, to see the effect it has. I am using `min-height` in the first example and `min-block-size` in the second.

```html live-sample___size-min
<div class="container">
  <div class="physical box">
    I have a width of 200px and a min-height of 5em.
  </div>

  <div class="logical box">
    I have an inline-size of 200px and a min-block-size of 5em.
  </div>
</div>
```

```css hidden live-sample___size-min
body {
  font: 1.2em / 1.5 sans-serif;
}
.container {
  display: flex;
}
.box {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  padding: 10px;
  margin: 10px;
}
```

```css live-sample___size-min
.box {
  writing-mode: horizontal-tb;
}

.physical {
  width: 200px;
  min-height: 5em;
}

.logical {
  inline-size: 200px;
  min-block-size: 5em;
}
```

{{EmbedLiveSample("size-min")}}

## Max-width and max-height example

Finally you can use {{CSSxRef("max-inline-size")}} and {{CSSxRef("max-block-size")}} as logical replacements for {{CSSxRef("max-width")}} and {{CSSxRef("max-height")}}. Try playing with the below example in the same way as before.

```html live-sample___size-max
<div class="container">
  <div class="physical box">I have a max-width of 200px.</div>

  <div class="logical box">I have an max-inline-size of 200px.</div>
</div>
```

```css hidden live-sample___size-max
body {
  font: 1.2em / 1.5 sans-serif;
}
.container {
  display: flex;
}
.box {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  padding: 10px;
  margin: 10px;
}
```

```css live-sample___size-max
.box {
  writing-mode: horizontal-tb;
}

.physical {
  max-width: 200px;
}

.logical {
  max-inline-size: 200px;
}
```

{{EmbedLiveSample("size-max")}}

## Logical keywords for resize

The {{CSSxRef("resize")}} property sets whether or not an item can be resized and has physical values of `horizontal` and `vertical`. The `resize` property also has logical keyword values. Using `resize: inline` allows resizing in the inline dimension and `resize: block` allow resizing in the block dimension.

The keyword value of `both` for the resize property works whether you are thinking physically or logically. It sets both dimensions at once. Try playing with the below example.

```html live-sample___size-resize
<div class="container">
  <div class="physical box">
    I have a width of 200px and a height of 100px. I can be resized
    horizontally.
  </div>

  <div class="logical box">
    I have an inline-size of 200px and a block-size of 100px. I can be resized
    in the inline direction.
  </div>
</div>
```

```css hidden live-sample___size-resize
body {
  font: 1.2em / 1.5 sans-serif;
}
.container {
  display: flex;
}
.box {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  padding: 10px;
  margin: 10px;
}
```

```css live-sample___size-resize
.box {
  writing-mode: horizontal-tb;
  overflow: scroll;
}

.physical {
  width: 200px;
  height: 100px;
  resize: horizontal;
}

.logical {
  inline-size: 200px;
  block-size: 100px;
  resize: inline;
}
```

{{EmbedLiveSample("size-resize")}}
