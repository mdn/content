---
title: corner-left-shape
slug: Web/CSS/corner-left-shape
page-type: css-property
browser-compat: css.properties.corner-left-shape
sidebar: cssref
---

The **`corner-left-shape`** [CSS](/en-US/docs/Web/CSS) property specifies the shape of both the corners on a box's left-hand edge, within their {{cssxref("border-radius")}} area.

You can set corner shapes individually and other combinations of corner shapes using the shorthand {{cssxref("corner-shape")}} property and its other [constituent properties](/en-US/docs/Web/CSS/corner-shape#constituent_properties).

If a visible `border-radius` is not applied to a container's left-edge corners, `corner-left-shape` will have no effect on them.

## Syntax

```css
/* Single keyword value set for both corners */
corner-left-shape: round;
corner-left-shape: bevel;

/* Single superellipse() value set for both corners */
corner-left-shape: superellipse(1.2);
corner-left-shape: superellipse(-2.5);

/* Top corner, bottom corner */
corner-left-shape: round bevel;
corner-left-shape: bevel superellipse(1.2);

/* Global values */
corner-left-shape: inherit;
corner-left-shape: initial;
corner-left-shape: revert;
corner-left-shape: revert-layer;
corner-left-shape: unset;
```

### Values

The `corner-left-shape` property is specified using one or two {{cssxref("&lt;corner-shape-value>")}} values:

- If one value is used, it specifies the shape of both corners.
- If two values are used, the first one specifies the shape of the top corner, and the second one specifies the shape of the bottom corner.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

You can find other related examples on the {{cssxref("corner-shape")}} reference page.

### Basic `corner-left-shape` usage

#### HTML

The markup for this example contains a single {{htmlelement("div")}} element.

```html live-sample___basic-usage
<div></div>
```

#### CSS

We give the box some basic styles, which we've hidden for brevity. We also apply a {{cssxref("box-shadow")}}, a `border-radius` of 60 pixels, and a `corner-left-shape` of `notch bevel`.

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
  corner-left-shape: notch bevel;
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
- {{cssxref("corner-top-shape")}}, {{cssxref("corner-bottom-shape")}}, {{cssxref("corner-right-shape")}}
- {{cssxref("corner-block-start-shape")}}, {{cssxref("corner-block-end-shape")}}, {{cssxref("corner-inline-start-shape")}}, and {{cssxref("corner-inline-end-shape")}} logical properties
