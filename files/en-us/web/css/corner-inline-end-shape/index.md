---
title: corner-inline-end-shape
slug: Web/CSS/corner-inline-end-shape
page-type: css-property
status:
  - experimental
browser-compat: css.properties.corner-inline-end-shape
sidebar: cssref
---

{{SeeCompatTable}}

The **`corner-inline-end-shape`** [CSS](/en-US/docs/Web/CSS) property specifies the shape of both the corners on a box's inline-end edge, within their {{cssxref("border-radius")}} area.

For a full description of corner shape behavior and multiple examples, see the {{cssxref("corner-shape")}} shorthand property page.

## Constituent properties

The `corner-inline-end-shape` property is a shorthand for the following physical properties:

- {{cssxref("corner-start-end-shape")}}
- {{cssxref("corner-end-end-shape")}}

## Syntax

```css
/* Single keyword value set for both corners */
corner-inline-end-shape: squircle;
corner-inline-end-shape: scoop;

/* Single superellipse() value set for both corners */
corner-inline-end-shape: superellipse(1.5);
corner-inline-end-shape: superellipse(-0.8);

/* Block-start/inline-end corner, block-end/inline-end corner */
corner-inline-end-shape: squircle scoop;
corner-inline-end-shape: squircle superellipse(-0.8);

/* Global values */
corner-inline-end-shape: inherit;
corner-inline-end-shape: initial;
corner-inline-end-shape: revert;
corner-inline-end-shape: revert-layer;
corner-inline-end-shape: unset;
```

### Values

The `corner-inline-end-shape` property is specified using one or two {{cssxref("&lt;corner-shape-value>")}} values:

- If **one value** is used, it specifies the shape of **both inline-end** corners.
- If **two values** are used, the first one specifies the shape of the **block-start/inline-end** corner, and the second one specifies the shape of the **block-end/inline-end** corner.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

You can find other related examples on the {{cssxref("corner-shape")}} reference page.

### Basic `corner-inline-end-shape` usage

#### HTML

The markup for this example contains a single {{htmlelement("div")}} element.

```html live-sample___basic-usage
<div></div>
```

#### CSS

We give the box some basic styles, which we've hidden for brevity. We also apply a {{cssxref("box-shadow")}}, a `border-radius` of `15% 30%`, and a `corner-inline-end-shape` of `bevel squircle`.

```css hidden live-sample___basic-usage
body {
  font-family: Arial, Helvetica, sans-serif;
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
  border-radius: 15% 30%;
  corner-inline-end-shape: bevel squircle;
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
- {{cssxref("corner-block-start-shape")}}, {{cssxref("corner-block-end-shape")}}, and {{cssxref("corner-inline-start-shape")}}
- {{cssxref("corner-top-shape")}}, {{cssxref("corner-bottom-shape")}}, {{cssxref("corner-left-shape")}}, and {{cssxref("corner-right-shape")}}
- {{cssxref("border-radius")}} shorthand property
- {{cssxref("border-start-end-radius")}} and {{cssxref("border-end-end-radius")}}
- [CSS borders and box decorations](/en-US/docs/Web/CSS/CSS_borders_and_box_decorations) module
- [CSS backgrounds and borders](/en-US/docs/Web/CSS/CSS_backgrounds_and_borders) module
