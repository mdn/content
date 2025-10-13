---
title: corner-bottom-left-shape
slug: Web/CSS/corner-bottom-left-shape
page-type: css-property
status:
  - experimental
browser-compat: css.properties.corner-bottom-left-shape
sidebar: cssref
---

{{SeeCompatTable}}

The **`corner-bottom-left-shape`** [CSS](/en-US/docs/Web/CSS) property specifies the shape of a box's bottom-left corner, within its {{cssxref("border-radius")}} area.

For a full description of corner shape behavior and multiple examples, see the {{cssxref("corner-shape")}} shorthand property page.

## Syntax

```css
/* Keyword values */
corner-bottom-left-shape: bevel;
corner-bottom-left-shape: round;

/* superellipse() function values */
corner-bottom-left-shape: superellipse(0.7);
corner-bottom-left-shape: superellipse(-1.9);

/* Global values */
corner-bottom-left-shape: inherit;
corner-bottom-left-shape: initial;
corner-bottom-left-shape: revert;
corner-bottom-left-shape: revert-layer;
corner-bottom-left-shape: unset;
```

### Values

The `corner-bottom-left-shape` property is specified using a {{cssxref("&lt;corner-shape-value>")}} value.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

You can find other related examples on the {{cssxref("corner-shape")}} reference page.

### Basic `corner-bottom-left-shape` usage

#### HTML

The markup for this example contains a single {{htmlelement("div")}} element.

```html live-sample___basic-usage
<div></div>
```

#### CSS

We give the box some basic styles, which we've hidden for brevity. We also apply a {{cssxref("box-shadow")}}, a `border-radius` of `80px 40% 60px 20%`, and a `corner-bottom-left-shape` of `squircle`.

```css hidden live-sample___basic-usage
body {
  font-family: "Helvetica", "Arial", sans-serif;
  width: 240px;
  margin: 20px auto;
}

div {
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: goldenrod;
  background-image: linear-gradient(
    to bottom,
    rgb(255 255 255 / 0),
    rgb(255 255 255 / 0.5)
  );
}
```

```css live-sample___basic-usage
div {
  box-shadow: 1px 1px 3px gray;
  border-radius: 80px 40% 60px 20%;
  corner-bottom-left-shape: squircle;
}
```

#### Result

The rendered result looks like this:

{{EmbedLiveSample("basic-usage", "100%", "240")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("corner-shape")}} shorthand property
- {{cssxref("corner-top-left-shape")}}, {{cssxref("corner-top-right-shape")}}, and {{cssxref("corner-bottom-right-shape")}}
- {{cssxref("corner-start-start-shape")}}, {{cssxref("corner-start-end-shape")}}, {{cssxref("corner-end-start-shape")}}, and {{cssxref("corner-end-end-shape")}}
- {{cssxref("border-radius")}} shorthand property
- {{cssxref("border-bottom-left-radius")}}
- [CSS borders and box decorations](/en-US/docs/Web/CSS/CSS_borders_and_box_decorations) module
- [CSS backgrounds and borders](/en-US/docs/Web/CSS/CSS_backgrounds_and_borders) module
