---
title: oklab()
slug: Web/CSS/color_value/oklab
page-type: css-function
status:
  - experimental
browser-compat: css.types.color.oklab
---

{{CSSRef}}{{SeeCompatTable}}

The **`oklab()`** functional notation expresses a given color in the Oklab color space, which attempts to mimic how color is perceived by the human eye. The `oklab()` works with a Cartesian coordinate system on the OKlab color space, the a- and b-axes. If you want a polar color system, chroma and hue, use {{cssxref("color_value/oklch", "oklch()")}}.

Oklab is a perceptual color space and is useful to:

- Transform an image to grayscale, without changing its lightness.
- Modify the saturation of colors, while keeping user perception of hue and lightness
- Create smooth and uniform gradients of colors (when interpolated manually, for example, in a {{HTMLElement("canvas")}} element).

The function `oklab()` can represent any color from the Oklab color space that is wider than RGB and include wide gamut and P3 colors.

## Syntax

```css
/* oklab(lightness a-axis b-axis) */
oklab(40.1% 0.1143 0.045);
oklab(59.69% 0.1007 0.1191);

/* oklab(lightness a-axis b-axis / Alpha) */
oklab(59.69% 0.1007 0.1191 / 0.5);
```

> **Note:** The oklab() function does **not** support commas to separate its values as some other color functions do, and the optional alpha value needs to be preceded with a forward slash (`/`) when specified.

### Values

- lightness
  - : A {{cssxref("&lt;percentage&gt;")}} between `0%` representing black and `100%` representing white, specifying the perceived lightness.
- a-axis
  - : The distance along the `a` axis in the Oklab colorspace, that is how green/red the color is.
- b-axis
  - : the distance along the `b` axis in the Oklab colorspace, that is how blue/yellow the color is.
- alpha
  - : A {{cssxref("&lt;number&gt;")}} between `0` and `1`, or a {{cssxref("&lt;percentage&gt;")}}, where the number `1` corresponds to `100%` (full opacity), representing the transparency (or alpha channel) of the color.

### Formal syntax

{{csssyntax}}

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [A perceptual color space for image processing](https://bottosson.github.io/posts/oklab/)
- {{cssxref("color_value/oklch",'oklch()')}} use the same color space as `oklab()` but a polar coordinate system.
