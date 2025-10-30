---
title: corner-start-end-shape
slug: Web/CSS/Reference/Properties/corner-start-end-shape
page-type: css-property
status:
  - experimental
browser-compat: css.properties.corner-start-end-shape
sidebar: cssref
---

{{SeeCompatTable}}

The **`corner-start-end-shape`** [CSS](/en-US/docs/Web/CSS) property specifies the shape of a box's block-start and inline-end corner, within its {{cssxref("border-radius")}} area.

For a full description of corner shape behavior and multiple examples, see the {{cssxref("corner-shape")}} shorthand property page.

## Syntax

```css
/* Keyword values */
corner-start-end-shape: square;
corner-start-end-shape: bevel;

/* superellipse() function values */
corner-start-end-shape: superellipse(1.5);
corner-start-end-shape: superellipse(-2.2);

/* Global values */
corner-start-end-shape: inherit;
corner-start-end-shape: initial;
corner-start-end-shape: revert;
corner-start-end-shape: revert-layer;
corner-start-end-shape: unset;
```

### Values

The `corner-start-end-shape` property is specified using a {{cssxref("&lt;corner-shape-value>")}} value.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

You can find other related examples on the {{cssxref("corner-shape")}} reference page.

### Basic `corner-start-end-shape` usage

#### HTML

The markup for this example contains a single {{htmlelement("div")}} element.

```html live-sample___basic-usage
<div></div>
```

#### CSS

We give the box some basic styles, which we've hidden for brevity. We also apply a {{cssxref("box-shadow")}}, a `border-radius` of `20px 40px 60px 80px`, and a `corner-start-end-shape` of `notch`.

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
  background-color: cyan;
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
  border-radius: 20px 40px 60px 80px;
  corner-start-end-shape: notch;
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
- {{cssxref("corner-start-start-shape")}}, {{cssxref("corner-end-start-shape")}}, and {{cssxref("corner-end-end-shape")}}
- {{cssxref("corner-top-left-shape")}}, {{cssxref("corner-top-right-shape")}}, {{cssxref("corner-bottom-left-shape")}}, and {{cssxref("corner-bottom-right-shape")}}
- {{cssxref("border-radius")}} shorthand property
- {{cssxref("border-start-end-radius")}}
- [CSS borders and box decorations](/en-US/docs/Web/CSS/CSS_borders_and_box_decorations) module
- [CSS backgrounds and borders](/en-US/docs/Web/CSS/CSS_backgrounds_and_borders) module
