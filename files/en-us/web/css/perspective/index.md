---
title: perspective
slug: Web/CSS/perspective
page-type: css-property
browser-compat: css.properties.perspective
---

{{CSSRef}}

The **`perspective`** [CSS](/en-US/docs/Web/CSS) property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective.

{{EmbedInteractiveExample("pages/css/perspective.html")}}

## Syntax

```css
/* Keyword value */
perspective: none;

/* <length> values */
perspective: 20px;
perspective: 3.5em;

/* Global values */
perspective: inherit;
perspective: initial;
perspective: revert;
perspective: revert-layer;
perspective: unset;
```

### Values

- `none`
  - : Indicates that no perspective transform is to be applied.
- `<length>`
  - : A {{cssxref("&lt;length&gt;")}} giving the distance from the user to the z=0 plane. It is used to apply a perspective transform to the children of the element. Negative values are syntax errors. If the value is smaller than `1px`, it is clamped to `1px`.

## Description

Each 3D element with z>0 becomes larger; each 3D-element with z<0 becomes smaller. The strength of the effect is determined by the value of this property.
Large values of `perspective` cause a small transformation;
small values of `perspective` cause a large transformation.

The parts of the 3D elements that are behind the user — i.e. their z-axis coordinates are greater than the value of the `perspective` CSS property — are not drawn.

The _vanishing point_ is by default placed at the center of the element, but its position can be changed using the {{cssxref("perspective-origin")}} property.

Using this property with a value other than `none` creates a new [stacking context](/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context). Also, in that case, the object will act as a containing block for `position: fixed` elements that it contains.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting perspective

An example showing how a cube varies if the `perspective` is set at different positions is given in [Using CSS transforms > Setting perspective](/en-US/docs/Web/CSS/CSS_transforms/Using_CSS_transforms#setting_perspective).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using CSS Transforms](/en-US/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
