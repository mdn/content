---
title: corner-top-right-shape
slug: Web/CSS/corner-top-right-shape
page-type: css-property
status:
  - experimental
browser-compat: css.properties.corner-top-right-shape
sidebar: cssref
---

{{SeeCompatTable}}

The **`corner-top-right-shape`** [CSS](/en-US/docs/Web/CSS) property specifies the shape of a box's top-right corner, within its {{cssxref("border-radius")}} area.

For a full description of corner shape behavior and multiple examples, see the {{cssxref("corner-shape")}} shorthand property page.

## Syntax

```css
/* Keyword values */
corner-top-right-shape: scoop;
corner-top-right-shape: square;

/* superellipse() function values */
corner-top-right-shape: superellipse(2.2);
corner-top-right-shape: superellipse(-2.5);

/* Global values */
corner-top-right-shape: inherit;
corner-top-right-shape: initial;
corner-top-right-shape: revert;
corner-top-right-shape: revert-layer;
corner-top-right-shape: unset;
```

### Values

The `corner-top-right-shape` property is specified using a {{cssxref("&lt;corner-shape-value>")}} value.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

You can find other related examples on the {{cssxref("corner-shape")}} reference page.

### Basic `corner-top-right-shape` usage

#### HTML

The markup for this example contains a single {{htmlelement("div")}} element.

```html live-sample___basic-usage
<div></div>
```

#### CSS

We give the box some basic styles, which we've hidden for brevity. We also apply a {{cssxref("box-shadow")}}, a `border-radius` of 60 pixels, and a `corner-top-right-shape` of `bevel`.

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
  background-color: green;
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
  border-radius: 60px;
  corner-top-right-shape: bevel;
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
- {{cssxref("corner-top-left-shape")}}, {{cssxref("corner-bottom-left-shape")}}, and {{cssxref("corner-bottom-right-shape")}}
- {{cssxref("corner-start-start-shape")}}, {{cssxref("corner-start-end-shape")}}, {{cssxref("corner-end-start-shape")}}, and {{cssxref("corner-end-end-shape")}}
- {{cssxref("border-radius")}} shorthand property
- {{cssxref("border-top-right-radius")}}
- [CSS borders and box decorations](/en-US/docs/Web/CSS/CSS_borders_and_box_decorations) module
- [CSS backgrounds and borders](/en-US/docs/Web/CSS/CSS_backgrounds_and_borders) module
