---
title: Introduction to text shadows
slug: Web/CSS/CSS_text_decoration/Text_shadows
page-type: guide
sidebar: cssref
---

You can apply shadows to your text using the {{cssxref("text-shadow")}} property. This property takes a comma-separated list of shadows, with each shadow including two to four component values: two or three {{cssxref("length")}} values and zero or one {{cssxref("color")}} values. Alternatively, you can use the keyword `none` to ensure the text doesn't have a drop shadow:

```css
text-shadow: none;
text-shadow: 1px -2px 3px white;
text-shadow:
  5px 5px mediumblue,
  10px 10px magenta,
  15px 15px rebeccapurple;
```

In this guide we look at the text shadows various component parts and applying multiple text shadows to an element.

## Components of the `text-shadow` property

Each shadow includes a horizontal offset and vertical offset, and an optional blur radius, in that order. You can also define the shadow's color.

### Horizontal offset

The first {{cssxref("length")}} in the value of the `text-shadow` is the horizontal offset of the shadow from the original text. Positive values move the shadow to the right. Negative values move the shadow left. A value of `0` is a common valid value.

In this example, we only change the horizontal offset. This first `<length>` in the value moves the shadow left or right.

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
<p class="positive">Postive</p>
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

You may have notice that the `text-shadow` property has no effect on the [CSS box model](/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model), like the {{cssxref("outline")}} property. Just like {{cssxref("box-shadow")}}, text shadows do not effect layout, do not trigger scrolling, and do not impact the size of the scrollable overflow area. While text shadows can make an element's text look bigger, shadows have no actual impact on the width (or height) of content.

### Vertical offset

The second {{cssxref("length")}} in the value is the vertical offset of the shadow from the original text. This required value behaves similarly to the horizontal offset except that it moves the shadow up or down rather than left or right.

In this example, we change the vertical offset in each `text-shadow` declaration. This second `<length>` in the value moves the shadow down if positive or up if negative.

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

The optional blur radius is defined by the third {{cssxref("length")}}, if included. If omitted, the blur radius is `0`, creating a copy of the text positioned by the first two length values. The value must be `0` or greater, and the greater the value the more widely dispersed the shadow effect will be.

In this example, we change the blur radius in each `text-shadow` declaration. This third `<length>` in the value blurs the shadow if positive, creates a copy of the text if `0`, and is invalid if negative.

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

While text can have multiple comma-separated shadows applied, each shadow consists of a single base color. That color can be any valid CSS {{cssxref("color")}} value, defaulting to to [`currentcolor`](/en-US/docs/Web/CSS/color_value#currentcolor_keyword) if omitted.

The following three shadows are equivalent:

```css
text-shadow:
  5px 5px mediumblue,
  10px 10px magenta,
  15px 15px rebeccapurple;
text-shadow:
  5px 5px #0000cd,
  10px 10px #ff00ff,
  15px 15px #663399;
text-shadow:
  5px 5px rgb(0 0 205),
  10px 10px rgb(255 0 255),
  15px 15px rgb(102 51 153);
```

## Multiple shadows

You can apply multiple shadows to the same text by including multiple shadow values separated by commas.

The shadow effects are applied front-to-back: the first shadow is on top.

In our example, `text-shadow: 5px 5px mediumblue, 10px 10px magenta, 15px 15px rebeccapurple;`, the blue is on top of the pink which is on top of the purple:

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

### With transparent text

Shadows are painted above any background colors or images and below any borders. While shadows overlay each other, they don't overlay text. There is no equivalent to the {{cssxref("box-shadow")}} property's `inset` keyword. Unlike box-shadow, text shadows are not clipped to the shadowed shape and may show through if the text is partially-transparent.

These examples have the same shadows applied to content with different {{cssxref("color")}} property values:

```css live-sample___opaque
p {
  text-shadow:
    5px 5px 0 mediumblue,
    10px 10px 5px magenta,
    15px 15px 10px rebeccapurple;
}

.opaque {
  color: rgb(0 0 0);
}

.semitransparent {
  color: rgb(0 0 0 / 0.5);
}

.transparent {
  color: rgb(0 0 0 / 0);
}

.white {
  color: rgb(255 255 255);
}

.semiwhite {
  color: rgb(255 255 255 / 0.75);
}
```

```html hidden live-sample___opaque
<p class="opaque">The text is opaque black</p>
<p class="semitransparent">The text is semiopaque black</p>
<p class="transparent">The text is transparent black</p>
<p class="white">The text is opaque white</p>
<p class="semiwhite">The text is semiopaque white</p>
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

{{EmbedLiveSample('opaque','auto','400')}}

In the "transparent" example, the text is transparent, but is fully legible because the top shadow is not blurred. Note how, the shadow appears behind the text and is visible when the text is less than fully opaque. This is especially noticeable in the semi-opaque white example. This is different from non-inset box shadows which are clipped at the border's outer edge.
