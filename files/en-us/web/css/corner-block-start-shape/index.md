---
title: corner-block-start-shape
slug: Web/CSS/corner-block-start-shape
page-type: css-property
browser-compat: css.properties.corner-block-start-shape
sidebar: cssref
---

The **`corner-block-start-shape`** [CSS](/en-US/docs/Web/CSS) property specifies the shape of both the corners on a box's block-start edge, within their {{cssxref("border-radius")}} area.

You can set corner shapes individually and other combinations of corner shapes using the shorthand {{cssxref("corner-shape")}} property and its other [constituent properties](/en-US/docs/Web/CSS/corner-shape#constituent_properties).

If a visible `border-radius` is not applied to a container's block-start-edge corners, `corner-block-start-shape` will have no effect on them.

## Constituent properties

The `corner-block-start-shape` property is a shorthand for the following physical properties:

- {{cssxref("corner-start-start-shape")}}
- {{cssxref("corner-start-end-shape")}}

## Syntax

```css
/* Single keyword value set for both corners */
corner-block-start-shape: notch;
corner-block-start-shape: squircle;

/* Single superellipse() value set for both corners */
corner-block-start-shape: superellipse(2.7);
corner-block-start-shape: superellipse(-2.5);

/* Block-start/inline-start corner, block-start/inline-end corner */
corner-block-start-shape: notch squircle;
corner-block-start-shape: notch superellipse(-2.5);

/* Global values */
corner-block-start-shape: inherit;
corner-block-start-shape: initial;
corner-block-start-shape: revert;
corner-block-start-shape: revert-layer;
corner-block-start-shape: unset;
```

### Values

The `corner-block-start-shape` property is specified using one or two {{cssxref("&lt;corner-shape-value>")}} values:

- If one value is used, it specifies the shape of both corners.
- If two values are used, the first one specifies the shape of the block-start/inline-start corner, and the second one specifies the shape of the block-start/inline-end corner.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

You can find other related examples on the {{cssxref("corner-shape")}} reference page.

### Basic `corner-block-start-shape` usage

#### HTML

The markup for this example contains a single {{htmlelement("div")}} element.

```html live-sample___basic-usage
<div></div>
```

#### CSS

We give the box some basic styles, which we've hidden for brevity. We also apply a {{cssxref("box-shadow")}}, a `border-radius` of 60 pixels, and a `corner-block-start-shape` of `scoop notch`.

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
  corner-block-start-shape: scoop notch;
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
- {{cssxref("corner-block-end-shape")}}, {{cssxref("corner-inline-start-shape")}}, {{cssxref("corner-inline-end-shape")}}
- {{cssxref("corner-top-shape")}}, {{cssxref("corner-bottom-shape")}}, {{cssxref("corner-left-shape")}}, and {{cssxref("corner-right-shape")}} physical properties
