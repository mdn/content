---
title: corner-bottom-right-shape
slug: Web/CSS/Reference/Properties/corner-bottom-right-shape
page-type: css-property
status:
  - experimental
browser-compat: css.properties.corner-bottom-right-shape
sidebar: cssref
---

{{SeeCompatTable}}

The **`corner-bottom-right-shape`** [CSS](/en-US/docs/Web/CSS) property specifies the shape of a box's bottom-right corner, within its {{cssxref("border-radius")}} area.

For a full description of corner shape behavior and multiple examples, see the {{cssxref("corner-shape")}} shorthand property page.

## Syntax

```css
/* Keyword values */
corner-bottom-right-shape: notch;
corner-bottom-right-shape: scoop;

/* superellipse() function values */
corner-bottom-right-shape: superellipse(1.7);
corner-bottom-right-shape: superellipse(-3);

/* Global values */
corner-bottom-right-shape: inherit;
corner-bottom-right-shape: initial;
corner-bottom-right-shape: revert;
corner-bottom-right-shape: revert-layer;
corner-bottom-right-shape: unset;
```

### Values

The `corner-bottom-right-shape` property is specified using a {{cssxref("&lt;corner-shape-value>")}} value.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

You can find other related examples on the {{cssxref("corner-shape")}} reference page.

### Basic `corner-bottom-right-shape` usage

#### HTML

The markup for this example contains a single {{htmlelement("div")}} element.

```html live-sample___basic-usage
<div></div>
```

#### CSS

We give the box some basic styles, which we've hidden for brevity. We also apply a {{cssxref("box-shadow")}}, a `border-radius` of `30% / 20%`, and a `corner-bottom-right-shape` of `notch`.

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
  border-radius: 30% / 20%;
  corner-bottom-right-shape: notch;
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
- {{cssxref("corner-top-left-shape")}}, {{cssxref("corner-top-right-shape")}}, and {{cssxref("corner-bottom-left-shape")}}
- {{cssxref("corner-start-start-shape")}}, {{cssxref("corner-start-end-shape")}}, {{cssxref("corner-end-start-shape")}}, and {{cssxref("corner-end-end-shape")}}
- {{cssxref("border-radius")}} shorthand property
- {{cssxref("border-bottom-right-radius")}}
- [CSS borders and box decorations](/en-US/docs/Web/CSS/Guides/Borders_and_box_decorations) module
- [CSS backgrounds and borders](/en-US/docs/Web/CSS/Guides/Backgrounds_and_borders) module
