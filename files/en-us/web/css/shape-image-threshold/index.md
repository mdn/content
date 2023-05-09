---
title: shape-image-threshold
slug: Web/CSS/shape-image-threshold
page-type: css-property
browser-compat: css.properties.shape-image-threshold
---

{{CSSRef}}

The **`shape-image-threshold`** [CSS](/en-US/docs/Web/CSS) property sets the alpha channel threshold used to extract the shape using an image as the value for {{cssxref("shape-outside")}}.

{{EmbedInteractiveExample("pages/css/shape-image-threshold.html")}}

Any pixels whose alpha component's value is greater than the threshold are considered to be part of the shape for the purposes of determining its boundaries. For example, a value of `0.5` means that the shape will enclose all the pixels that are more than 50% opaque.

## Syntax

```css
/* <number> value */
shape-image-threshold: 0.7;

/* Global values */
shape-image-threshold: inherit;
shape-image-threshold: initial;
shape-image-threshold: revert;
shape-image-threshold: revert-layer;
shape-image-threshold: unset;
```

### Values

- {{cssxref("&lt;alpha-value&gt;")}}
  - : Sets the threshold used for extracting a shape from an image. The shape is defined by the pixels whose alpha value is greater than the threshold. Values outside the range 0.0 (fully transparent) to 1.0 (fully opaque) are clamped to this range.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Aligning text to a gradient

This example creates a {{HTMLElement("div")}} block with a gradient background image. The gradient is established as a CSS shape using `shape-outside`, so that pixels within the gradient which are at least 20% opaque (that is, those pixels with an alpha component greater than 0.2) are considered part of the shape.

#### HTML

```html
<div id="gradient-shape"></div>

<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel at commodi
  voluptates enim, distinctio officia. Saepe optio accusamus doloribus sint
  facilis itaque ab nulla, dolor molestiae assumenda cum sit placeat adipisci,
  libero quae nihil porro debitis laboriosam inventore animi impedit nostrum
  nesciunt quisquam expedita! Dolores consectetur iure atque a mollitia dicta
  repudiandae illum exercitationem aliquam repellendus ipsum porro modi, id nemo
  eligendi, architecto ratione quibusdam iusto nisi soluta? Totam inventore ea
  eum sed velit et eligendi suscipit accusamus iusto dolore, at provident eius
  alias maxime pariatur non deleniti ipsum sequi rem eveniet laboriosam magni
  expedita?
</p>
```

#### CSS

```css
#gradient-shape {
  width: 150px;
  height: 150px;
  float: left;
  background-image: linear-gradient(30deg, black, transparent 80%, transparent);
  shape-outside: linear-gradient(30deg, black, transparent 80%, transparent);
  shape-image-threshold: 0.2;
}
```

The shape is established here using {{cssxref("background-image")}} with a linear gradient rather than an image file. The same gradient is also used as the image from which the shape is derived for establishing the float area, using the {{cssxref("shape-outside")}} property.

The 20% opacity threshold for treating gradient pixels as part of the shape is then established using `shape-image-threshold` with a value of `0.2`.

#### Result

{{EmbedLiveSample('Aligning_text_to_a_gradient', 600, 230)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Shapes](/en-US/docs/Web/CSS/CSS_Shapes)
- [Overview of CSS Shapes](/en-US/docs/Web/CSS/CSS_Shapes/Overview_of_CSS_Shapes)
- {{cssxref("&lt;basic-shape&gt;")}}
- {{cssxref("shape-outside")}}
- {{cssxref("shape-margin")}}
