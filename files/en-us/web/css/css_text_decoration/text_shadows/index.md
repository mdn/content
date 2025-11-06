---
title: Introduction to text shadows
short-title: Text shadows
slug: Web/CSS/CSS_text_decoration/Text_shadows
page-type: guide
sidebar: cssref
---

You can apply shadows to your text by using the {{cssxref("text-shadow")}} property. This property accepts a comma-separated list of shadow values. Each shadow requires at least two {{cssxref("length")}} values but can include up to three `<length>` values and one {{cssxref("color")}} value.

```css
text-shadow: 1px 3px;
text-shadow: 1px -2px 3px white;
text-shadow:
  5px 5px mediumblue,
  10px 10px magenta,
  15px 15px rebeccapurple;
```

To remove any shadow from the text, use the keyword `none`.

```css
text-shadow: none;
```

In this guide, we look at the components of text shadows and how you can apply multiple text shadows to an element.

## Components of text shadows

Each shadow includes a horizontal offset, a vertical offset, and an optional blur radius, in that order. You can also define the color of the shadow.

### Horizontal offset

The first {{cssxref("length")}} in the value of `text-shadow` represents the horizontal offset of the shadow relative to the original text. Positive values move the shadow to the right, while negative values move it to the left. A value of `0` is a common valid value.

In this example, the different `text-shadow` declarations differ only in their horizontal offsets. The first `<length>` value moves the shadow to the left (`-30px`) or to the right (`30px`).

```css live-sample___horizontal
.negative {
  text-shadow: -30px 0 1px red;
}

.positive {
  text-shadow: 30px 0 1px red;
}

.zero {
  text-shadow: 0 0 1px red;
}
```

```html hidden live-sample___horizontal live-sample___vertical live-sample___blur
<p class="negative">Negative</p>
<p class="positive">Positive</p>
<p class="zero">Zero</p>
```

```css hidden live-sample___horizontal live-sample___vertical live-sample___blur live-sample___multiple1
p {
  border: 1px solid;
  padding: 20px;
  font-family: sans-serif;
  font-size: 1.25rem;
}
```

{{EmbedLiveSample('horizontal','auto','320')}}

You may have noticed that the `text-shadow` property has no effect on the [CSS box model](/en-US/docs/Web/CSS/Guides/Box_model/Introduction), similar to the {{cssxref("outline")}} property. Just like {{cssxref("box-shadow")}}, text shadows do not affect layout, do not trigger scrolling, and do not impact the size of the scrollable overflow area. While text shadows can make an element's text appear bigger, they have no actual impact on the width (or height) of content.

### Vertical offset

The second {{cssxref("length")}} in the value of `text-shadow` represents the vertical offset of the shadow relative to the original text. This required value behaves similarly to the horizontal offset, except that it moves the shadow up or down rather than left or right.

In this example, the `text-shadow` declarations differ only in their vertical offsets. The second `<length>` value moves the shadow up (`-30px`) or down (`30px`).

```css live-sample___vertical
.negative {
  text-shadow: 0 -30px 1px red;
}

.positive {
  text-shadow: 0 30px 1px red;
}

.zero {
  text-shadow: 0 0 1px red;
}
```

{{EmbedLiveSample('vertical','auto','320')}}

### Blur radius

The blur radius is defined by the third {{cssxref("length")}} value and is optional. If omitted, the blur radius is `0`, creating a copy of the text positioned by the first two length values. The value must be `0` or greater; the greater the value, the more widely dispersed the shadow effect will be.

In this example, the `text-shadow` declarations differ only in their blur radii. This third `<length>` value is either invalid (`-5px`), blurs the shadow (`5px`), or creates a copy of the text (`0`).

```css live-sample___blur
.negative {
  /* invalid */
  text-shadow: 30px 30px -5px red;
}

.positive {
  text-shadow: 30px 30px 5px red;
}

.zero {
  text-shadow: 30px 30px 0 red;
}
```

{{EmbedLiveSample('blur','auto','320')}}

### Shadow color

While you can apply [multiple shadows](#multiple_shadows) to text, each shadow consists of a single base color. That color can be any valid CSS {{cssxref("color")}} value, defaulting to [`currentcolor`](/en-US/docs/Web/CSS/Reference/Values/color_value#currentcolor_keyword) if omitted.

The following three shadows are equivalent in terms of their shadow colors:

```css
.shadow-color {
  text-shadow:
    5px 5px mediumblue,
    10px 10px magenta,
    15px 15px rebeccapurple;
}

.shadow-color-hex {
  text-shadow:
    5px 5px #0000cd,
    10px 10px #ff00ff,
    15px 15px #663399;
}

.shadow-color-rgb {
  text-shadow:
    5px 5px rgb(0 0 205),
    10px 10px rgb(255 0 255),
    15px 15px rgb(102 51 153);
}
```

## Multiple shadows

You can apply multiple shadows to the same text by including multiple shadow values separated by commas.

The shadow effects are applied front-to-back: the first shadow is on top.

In our example of `text-shadow: 5px 5px mediumblue, 10px 10px magenta, 15px 15px rebeccapurple;`, it defines three shadows, with the blue one on top of the pink, which is on top of the purple:

```css hidden live-sample___multiple1
p {
  text-shadow:
    5px 5px mediumblue,
    10px 10px magenta,
    15px 15px rebeccapurple;
}
```

```html hidden live-sample___multiple1
<p>I have three shadows</p>
```

{{EmbedLiveSample('multiple1','auto','120')}}

## Multiple shadows with transparent text

Shadows are painted above any background colors or images and below any borders. While shadows overlay each other, they don't overlay the text. There is no equivalent of the {{cssxref("box-shadow")}} property's `inset` keyword in the text shadow world. Unlike a box shadow, text shadows are not clipped to the shadowed shape and may show through if the text is partially-transparent.

The following examples apply the same shadows to the text but with different {{cssxref("color")}} property values. The semi-transparent examples are difficult to read but are included to demonstrate how shadows render:

```css live-sample___opaque
p {
  text-shadow:
    5px 5px 0 mediumblue,
    10px 10px 5px magenta,
    15px 15px 10px rebeccapurple;
}

.opaque {
  color: black;
}

.semitransparent {
  color: rgb(0 0 0 / 0.5);
}

.transparent {
  color: transparent;
}

.white {
  color: white;
}

.semi-white {
  color: rgb(255 255 255 / 0.75);
}
```

```html hidden live-sample___opaque
<p class="opaque">The text is opaque black</p>
<p class="semitransparent">The text is semiopaque black</p>
<p class="transparent">The text is transparent black</p>
<p class="white">The text is opaque white</p>
<p class="semi-white">The text is semiopaque white</p>
```

```css hidden live-sample___opaque
p {
  border: 1px solid black;
  padding: 20px;
  font-family: sans-serif;
  font-size: 1.75rem;
  font-weight: bold;
}
```

{{EmbedLiveSample('opaque','auto','540')}}

In the "transparent" example, the text is transparent but is fully legible because the top shadow is not blurred. Note how the shadow appears behind the text and is visible when the text is less than fully opaque. This is especially noticeable in the "semi-opaque white" example. This behavior differs from non-inset box shadows, where shadows are clipped at the border's outer edge.
