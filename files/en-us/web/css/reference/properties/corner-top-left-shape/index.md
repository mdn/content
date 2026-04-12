---
title: corner-top-left-shape
slug: Web/CSS/Reference/Properties/corner-top-left-shape
page-type: css-property
status:
  - experimental
browser-compat: css.properties.corner-top-left-shape
sidebar: cssref
---

{{SeeCompatTable}}

The **`corner-top-left-shape`** [CSS](/en-US/docs/Web/CSS) property specifies the shape of a box's top-left corner, within its {{cssxref("border-radius")}} area.

For a full description of corner shape behavior and multiple examples, see the {{cssxref("corner-shape")}} shorthand property page.

## Syntax

```css
/* Keyword values */
corner-top-left-shape: notch;
corner-top-left-shape: squircle;

/* superellipse() function values */
corner-top-left-shape: superellipse(3);
corner-top-left-shape: superellipse(-1.5);

/* Global values */
corner-top-left-shape: inherit;
corner-top-left-shape: initial;
corner-top-left-shape: revert;
corner-top-left-shape: revert-layer;
corner-top-left-shape: unset;
```

### Values

The `corner-top-left-shape` property is specified using a {{cssxref("&lt;corner-shape-value>")}} value.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

You can find other related examples on the {{cssxref("corner-shape")}} reference page.

### Basic `corner-top-left-shape` usage

#### HTML

The markup for this example contains a single {{htmlelement("div")}} element.

```html live-sample___basic-usage
<div></div>
```

#### CSS

We give the box some basic styles, which we've hidden for brevity. We also apply a {{cssxref("box-shadow")}}, a `border-radius` of `25% 100px`, and a `corner-top-left-shape` of `scoop`.

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
  background-color: orange;
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
  border-radius: 25% 100px;
  corner-top-left-shape: scoop;
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
- {{cssxref("corner-top-right-shape")}}, {{cssxref("corner-bottom-left-shape")}}, and {{cssxref("corner-bottom-right-shape")}}
- {{cssxref("corner-start-start-shape")}}, {{cssxref("corner-start-end-shape")}}, {{cssxref("corner-end-start-shape")}}, and {{cssxref("corner-end-end-shape")}}
- {{cssxref("border-radius")}} shorthand property
- {{cssxref("border-top-left-radius")}}
- [CSS borders and box decorations](/en-US/docs/Web/CSS/Guides/Borders_and_box_decorations) module
- [CSS backgrounds and borders](/en-US/docs/Web/CSS/Guides/Backgrounds_and_borders) module
