---
title: background-size
slug: Web/CSS/background-size
tags:
  - CSS
  - CSS Background
  - CSS Property
  - Reference
  - recipe:css-property
browser-compat: css.properties.background-size
---
{{CSSRef}}

The **`background-size`** [CSS](/en-US/docs/Web/CSS) property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.

{{EmbedInteractiveExample("pages/css/background-size.html")}}

Spaces not covered by a background image are filled with the {{cssxref("background-color")}} property, and the background color will be visible behind background images that have transparency/translucency.

## Syntax

```css
/* Keyword values */
background-size: cover;
background-size: contain;

/* One-value syntax */
/* the width of the image (height becomes 'auto') */
background-size: 50%;
background-size: 3.2em;
background-size: 12px;
background-size: auto;

/* Two-value syntax */
/* first value: width of the image, second value: height */
background-size: 50% auto;
background-size: 3em 25%;
background-size: auto 6px;
background-size: auto auto;

/* Multiple backgrounds */
background-size: auto, auto; /* Not to be confused with `auto auto` */
background-size: 50%, 25%, 25%;
background-size: 6px, auto, contain;

/* Global values */
background-size: inherit;
background-size: initial;
background-size: revert;
background-size: unset;
```

The `background-size` property is specified in one of the following ways:

- Using the keyword values `contain` or `cover`.
- Using a width value only, in which case the height defaults to `auto`.
- Using both a width and a height value, in which case the first sets the width and the second sets the height. Each value can be a {{cssxref("&lt;length&gt;")}}, a {{cssxref("&lt;percentage&gt;")}}, or `auto`.

To specify the size of multiple background images, separate the value for each one with a comma.

### Values

- `contain`
  - : Scales the image as large as possible within its container without cropping or stretching the image. If the container is larger than the image, this will result in image tiling, unless the {{cssxref("background-repeat")}} property is set to `no-repeat`.
- `cover`
  - : Scales the image as large as possible to fill the container, stretching the image if necessary. If the proportions of the image differ from the element, it is cropped either vertically or horizontally so that no empty space remains.
- `auto`
  - : Scales the background image in the corresponding direction such that its intrinsic proportions are maintained.
- {{cssxref("&lt;length&gt;")}}
  - : Stretches the image in the corresponding dimension to the specified length. Negative values are not allowed.
- {{cssxref("&lt;percentage&gt;")}}
  - : Stretches the image in the corresponding dimension to the specified percentage of the _background positioning area_. The background positioning area is determined by the value of {{cssxref("background-origin")}} (by default, the padding box). However, if the background's {{cssxref("background-attachment")}} value is `fixed`, the positioning area is instead the entire {{glossary("viewport")}}. Negative values are not allowed.

### Intrinsic dimensions and proportions

The computation of values depends on the image's intrinsic dimensions (width and height) and intrinsic proportions (width-to-height ratio). These attributes are as follows:

- A bitmap image (such as JPG) always has intrinsic dimensions and proportions.
- A vector image (such as SVG) does not necessarily have intrinsic dimensions. If it has both horizontal and vertical intrinsic dimensions, it also has intrinsic proportions. If it has no dimensions or only one dimension, it may or may not have proportions.
- CSS {{cssxref("&lt;gradient&gt;")}}s have no intrinsic dimensions or intrinsic proportions.
- Background images created with the {{cssxref("element()")}} function use the intrinsic dimensions and proportions of the generating element.

> **Note:** In Gecko, background images created using the [`element()`](</en-US/docs/Web/CSS/element()>) function are currently treated as images with the dimensions of the element, or of the background positioning area if the element is SVG, with the corresponding intrinsic proportion. This is non-standard behavior.

Based on the intrinsic dimensions and proportions, the rendered size of the background image is computed as follows:

- **If both components of `background-size` are specified and are not `auto`:** The background image is rendered at the specified size.
- **If the `background-size` is `contain` or `cover`:** While preserving its intrinsic proportions, the image is rendered at the largest size contained within, or covering, the background positioning area. If the image has no intrinsic proportions, then it's rendered at the size of the background positioning area.
- **If the `background-size` is `auto` or `auto auto`:**

  - If the image has both horizontal and vertical intrinsic dimensions, it's rendered at that size.
  - If the image has no intrinsic dimensions and has no intrinsic proportions, it's rendered at the size of the background positioning area.
  - If the image has no intrinsic dimensions but has intrinsic proportions, it's rendered as if `contain` had been specified instead.
  - If the image has only one intrinsic dimension and has intrinsic proportions, it's rendered at the size corresponding to that one dimension. The other dimension is computed using the specified dimension and the intrinsic proportions.
  - If the image has only one intrinsic dimension but has no intrinsic proportions, it's rendered using the specified dimension and the other dimension of the background positioning area.

  > **Note:** SVG images have a [`preserveAspectRatio`](/en-US/docs/Web/SVG/Attribute/preserveAspectRatio) attribute that defaults to the equivalent of `contain`; an explicit `background-size` causes `preserveAspectRatio` to be ignored.

- **If the `background-size` has one `auto` component and one non-`auto` component:**

  - If the image has intrinsic proportions, it's stretched to the specified dimension. The unspecified dimension is computed using the specified dimension and the intrinsic proportions.
  - If the image has no intrinsic proportions, it's stretched to the specified dimension. The unspecified dimension is computed using the image's corresponding intrinsic dimension, if there is one. If there is no such intrinsic dimension, it becomes the corresponding dimension of the background positioning area.

> **Note:** Background sizing for vector images that lack intrinsic dimensions or proportions is not yet fully implemented in all browsers. Be careful about relying on the behavior described above, and test in multiple browsers to be sure the results are acceptable.

### Working with gradients

If you use a `<gradient>` as the background and specify a `background-size` to go with it, it's best not to specify a size that uses a single `auto` component, or is specified using only a width value (for example, `background-size: 50%`). Rendering of `<gradient>`s in such cases changed in Firefox 8, and at present is generally inconsistent across browsers, which do not all implement rendering in full accordance with [the CSS3 `background-size` specification](https://www.w3.org/TR/css3-background/#the-background-size) and with [the CSS3 Image Values gradient specification](http://dev.w3.org/csswg/css3-images/#gradients).

```css
.gradient-example {
  width: 50px;
  height: 100px;
  background-image: linear-gradient(blue, red);

  /* Not safe to use */
  background-size: 25px;
  background-size: 50%;
  background-size: auto 50px;
  background-size: auto 50%;

  /* Safe to use */
  background-size: 25px 50px;
  background-size: 50% 50%;
}
```

Note that it's particularly not recommended to use a pixel dimension and an `auto` dimension with a `<gradient>`, because it's impossible to replicate rendering in versions of Firefox prior to 8, and in browsers not implementing Firefox 8's rendering, without knowing the exact size of the element whose background is being specified.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Tiling a large image

Let's consider a large image, a 2982x2808 Firefox logo image. We want to tile four copies of this image into a 300x300-pixel element. To do this, we can use a fixed `background-size` value of 150 pixels.

#### HTML

```html
<div class="tiledBackground">
</div>
```

#### CSS

```css
.tiledBackground {
  background-image: url(https://www.mozilla.org/media/img/logos/firefox/logo-quantum.9c5e96634f92.png);
  background-size: 150px;
  width: 300px;
  height: 300px;
  border: 2px solid;
  color: pink;
}
```

#### Result

{{EmbedLiveSample("Tiling_a_large_image", 340, 340)}}

See [Scaling background images](/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders/Scaling_background_images) for more examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Scaling background images](/en-US/docs/Web/CSS/Scaling_background_images)
- [Scaling of SVG backgrounds](/en-US/docs/Web/CSS/Scaling_of_SVG_backgrounds)
- {{cssxref("object-fit")}}
