---
title: corner-inline-start-shape
slug: Web/CSS/corner-inline-start-shape
page-type: css-property
status:
  - experimental
browser-compat: css.properties.corner-inline-start-shape
sidebar: cssref
---

{{SeeCompatTable}}

The **`corner-inline-start-shape`** [CSS](/en-US/docs/Web/CSS) property specifies the shape of both the corners on a box's inline-start edge, within their {{cssxref("border-radius")}} area.

For a full description of corner shape behavior and multiple examples, see the {{cssxref("corner-shape")}} shorthand property page.

## Constituent properties

The `corner-inline-start-shape` property is a shorthand for the following physical properties:

- {{cssxref("corner-start-start-shape")}}
- {{cssxref("corner-end-start-shape")}}

## Syntax

```css
/* Single keyword value set for both corners */
corner-inline-start-shape: round;
corner-inline-start-shape: bevel;

/* Single superellipse() value set for both corners */
corner-inline-start-shape: superellipse(0.5);
corner-inline-start-shape: superellipse(-3);

/* Block-start/inline-start corner, block-end/inline-start corner */
corner-inline-start-shape: round bevel;
corner-inline-start-shape: round superellipse(0.5);

/* Global values */
corner-inline-start-shape: inherit;
corner-inline-start-shape: initial;
corner-inline-start-shape: revert;
corner-inline-start-shape: revert-layer;
corner-inline-start-shape: unset;
```

### Values

The `corner-inline-start-shape` property is specified using one or two {{cssxref("&lt;corner-shape-value>")}} values:

- If **one value** is used, it specifies the shape of **both inline-start** corners.
- If **two values** are used, the first one specifies the shape of the **block-start/inline-start** corner, and the second one specifies the shape of the **block-end/inline-start** corner.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

You can find other related examples on the {{cssxref("corner-shape")}} reference page.

### Basic `corner-inline-start-shape` usage

#### HTML

The markup for this example contains a single {{htmlelement("div")}} element.

```html live-sample___basic-usage
<div></div>
```

#### CSS

We give the box some basic styles, which we've hidden for brevity. We also apply a {{cssxref("box-shadow")}}, a `border-radius` of 60 pixels, and a `corner-inline-start-shape` of `square bevel`.

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
  border-radius: 60px;
  corner-inline-start-shape: square bevel;
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
- {{cssxref("corner-block-start-shape")}}, {{cssxref("corner-block-end-shape")}}, and {{cssxref("corner-inline-end-shape")}}
- {{cssxref("corner-top-shape")}}, {{cssxref("corner-bottom-shape")}}, {{cssxref("corner-left-shape")}}, and {{cssxref("corner-right-shape")}}
- {{cssxref("border-radius")}} shorthand property
- {{cssxref("border-start-start-radius")}} and {{cssxref("border-end-start-radius")}}
- [CSS borders and box decorations](/en-US/docs/Web/CSS/CSS_borders_and_box_decorations) module
- [CSS backgrounds and borders](/en-US/docs/Web/CSS/CSS_backgrounds_and_borders) module
