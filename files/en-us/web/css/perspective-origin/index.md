---
title: perspective-origin
slug: Web/CSS/perspective-origin
page-type: css-property
browser-compat: css.properties.perspective-origin
---

{{CSSRef}}

The **`perspective-origin`** [CSS](/en-US/docs/Web/CSS) property determines the position at which the viewer is looking. It is used as the _vanishing point_ by the {{cssxref("perspective")}} property.

{{EmbedInteractiveExample("pages/css/perspective-origin.html")}}

The **`perspective-origin`** and {{cssxref('perspective')}} properties are attached to the parent of a child transformed in 3-dimensional space, unlike the [`perspective()`](/en-US/docs/Web/CSS/transform-function/perspective) transform function which is placed on the element being transformed.

## Syntax

```css
/* One-value syntax */
perspective-origin: x-position;

/* Two-value syntax */
perspective-origin: x-position y-position;

/* When both x-position and y-position are keywords,
   the following is also valid */
perspective-origin: y-position x-position;

/* Global values */
perspective-origin: inherit;
perspective-origin: initial;
perspective-origin: revert;
perspective-origin: revert-layer;
perspective-origin: unset;
```

### Values

- _x-position_

  - : Indicates the position of the abscissa of the _vanishing point_. It can have one of the following values:

    - {{cssxref("&lt;length-percentage&gt;")}} indicating the position as an absolute length value or relative to the width of the element. The value may be negative.
    - `left`, a keyword being a shortcut for the `0` length value.
    - `center`, a keyword being a shortcut for the `50%` percentage value.
    - `right`, a keyword being a shortcut for the `100%` percentage value.

- _y-position_

  - : Indicates the position of the ordinate of the _vanishing point_. It can have one of the following values:

    - {{cssxref("&lt;length-percentage&gt;")}} indicating the position as an absolute length value or relative to the height of the element. The value may be negative.
    - `top`, a keyword being a shortcut for the `0` length value.
    - `center`, a keyword being a shortcut for the `50%` percentage value.
    - `bottom`, a keyword being a shortcut for the `100%` percentage value.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Changing the perspective origin

An example showing how to change `perspective-origin` is given in [Using CSS transforms > Changing the perspective origin](/en-US/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms#changing_the_perspective_origin).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using CSS Transforms](/en-US/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms)
- {{cssxref('transform-style')}}
- {{cssxref('transform-function')}}
- {{cssxref('perspective')}}
- [`transform: perspective()`](/en-US/docs/Web/CSS/transform-function/perspective) function
