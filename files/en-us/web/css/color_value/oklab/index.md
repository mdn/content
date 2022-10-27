---
title: oklab()
slug: Web/CSS/color_value/oklab
page-type: css-function
tags:
  - CSS
  - Data Type
  - Reference
  - color
  - oklab
browser-compat: css.types.color.oklab
---

{{CSSRef}}{{SeeCompatTable}}

The **`oklab()`** functional notation expresses a given color in the Oklab color space, which attempts to mimic how color is perceived by the human eye.

Oklab is a perceptual color space and is useful to:

- Transform an image to grayscale, without changing its lightness.
- Modify the saturation of colors, while keeping user perception of hue and lightness
- Create smooth and uniform gradients of colors.

## Syntax

```css
/* oklab(lightness a-axis b-axis) */
oklab(40.1% 0.1143 0.045);
oklab(59.69% 0.1007 0.1191);

/* oklab(lightness a-axis b-axis / Alpha) */
oklab(59.69% 0.1007 0.1191 / 0.5);
```

> **Note:** The oklab() function does **not** support commas to separate its values as some other color functions, and the optional alpha value needs to be preceded with a forward slash (`/`) when specified.

### Values

- lightness
  - : A {{cssxref("&lt;percentage&gt;")}} between `0%` representing black and `100%` representing white specifying the perceived lightness.
- a-axis
  - : The distance along the `a` axis in the Oklab colorspace, that is how green/red the color is.
- b-axis
  - : the distance along the `b` axis in the Oklab colorspace, that is how blue/yellow the color is.
- alpha
  - : A {{cssxref("&lt;number&gt;")}} between `0` and `1`, or a {{cssxref("&lt;percentage&gt;")}}, where the number `1` corresponds to `100%` (full opacity), representing the transparency (or alpha channel) of the color.

## Examples

### Green with oklab()

```css
div {
  padding: 1em;
  margin: 1em;
  border: solid 1px black;
}

.ref {
  background-color: green;
}

.oklab {
  background-color: oklab(51.975% -0.1403 0.10768);
}
```

```html
<div class="ref">RGB</div>
<div class="oklab">OKLAB</div>
```

{{EmbedLiveSample("Green_with_oklab", "100%", 155)}}

### Smooth gradients

The OK lab color space allows for smoother gradients than the RGB color space.

```css
div {
  /*padding: 1em;
  margin: 1em;
  border: solid 1px black;*/
}

.ref {
  background-image: linear-gradient(to right, #0f0 0%, #f00 50%, #00f 100%);
}

.oklab {
  background-image: linear-gradient(to right, oklab(0.86644 -0.23389 0.1795), oklab(0.62796 0.22486 0.12585 / 50%), oklab(0.45201 -0.03246 -0.31153 / 100%));
}
```

```html
<div class="ref">RGB</div>
<div class="oklab">OKLAB</div>
```

{{EmbedLiveSample("Smooth_gradients", "100%", 155)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [A perceptual color space for image processing](https://bottosson.github.io/posts/oklab/)
- [Safari Technology Preview 137 release notes](https://webkit.org/blog/12156/release-notes-for-safari-technology-preview-137/): includes `oklab()` and {{cssxref("color_value/oklch",'oklch()')}} colors.
