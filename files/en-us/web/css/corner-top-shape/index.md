---
title: corner-top-shape
slug: Web/CSS/corner-top-shape
page-type: css-property
browser-compat: css.properties.corner-top-shape
sidebar: cssref
---

The **`corner-top-shape`** [CSS](/en-US/docs/Web/CSS) property specifies the shape of both the corners on a box's top edge, within their {{cssxref("border-radius")}} area.

You can set corner shapes individually and other combinations of corner shapes using the shorthand {{cssxref("corner-shape")}} property and its other [constituent properties](/en-US/docs/Web/CSS/corner-shape#constituent_properties).

If a visible `border-radius` is not applied to a container's top-edge corners, `corner-top-shape` will have no effect on them.

## Constituent properties

The `corner-top-shape` property is a shorthand for the following physical properties:

- {{cssxref("corner-top-left-shape")}}
- {{cssxref("corner-top-right-shape")}}

## Syntax

```css
/* Single keyword value set for both corners */
corner-top-shape: notch;
corner-top-shape: squircle;

/* Single superellipse() value set for both corners */
corner-top-shape: superellipse(3);
corner-top-shape: superellipse(-1.5);

/* Left-hand corner, right-hand corner */
corner-top-shape: notch squircle;
corner-top-shape: notch superellipse(-1.5);

/* Global values */
corner-top-shape: inherit;
corner-top-shape: initial;
corner-top-shape: revert;
corner-top-shape: revert-layer;
corner-top-shape: unset;
```

### Values

The `corner-top-shape` property is specified using one or two {{cssxref("&lt;corner-shape-value>")}} values:

- If one value is used, it specifies the shape of both corners.
- If two values are used, the first one specifies the shape of the left-hand corner, and the second one specifies the shape of the right-hand corner.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

You can find other related examples on the {{cssxref("corner-shape")}} reference page.

### Basic `corner-top-shape` usage

#### HTML

The markup for this example contains a single {{htmlelement("div")}} element.

```html live-sample___basic-usage
<div></div>
```

#### CSS

We give the box some basic styles, which we've hidden for brevity. We also apply a {{cssxref("box-shadow")}}, a `border-radius` of 60 pixels, and a `corner-top-shape` of `scoop notch`.

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
  corner-top-shape: scoop notch;
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
- {{cssxref("corner-bottom-shape")}}, {{cssxref("corner-left-shape")}}, {{cssxref("corner-right-shape")}}
- {{cssxref("corner-block-start-shape")}}, {{cssxref("corner-block-end-shape")}}, {{cssxref("corner-inline-start-shape")}}, and {{cssxref("corner-inline-end-shape")}} logical properties
