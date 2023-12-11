---
title: <resolution>
slug: Web/CSS/resolution
page-type: css-type
browser-compat: css.types.resolution
---

{{CSSRef}}

The **`<resolution>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Types), used for describing [resolutions](/en-US/docs/Web/CSS/@media/resolution) in [media queries](/en-US/docs/Web/CSS/CSS_media_queries), denotes the pixel density of an output device, i.e., its resolution.

On screens, the units are related to _CSS_ inches, centimeters, or pixels, not physical values.

## Syntax

The `<resolution>` data type consists of a strictly positive {{cssxref("&lt;number&gt;")}} followed by one of the units listed below. As with all CSS dimensions, there is no space between the unit literal and the number.

### Units

- `dpi`
  - : Represents the number of [dots per inch](https://en.wikipedia.org/wiki/Dots_per_inch). Screens typically contains 72 or 96 dots per inch, but the dpi for printed documents is usually much greater. As 1 inch is 2.54 cm, `1dpi ≈ 0.39dpcm`.
- `dpcm`
  - : Represents the number of [dots per centimeter](https://en.wikipedia.org/wiki/Dots_per_inch). As 1 inch is 2.54 cm, `1dpcm ≈ 2.54dpi`.
- `dppx`
  - : Represents the number of dots per [`px`](/en-US/docs/Web/CSS/length#px) unit. Due to the 1:96 fixed ratio of CSS `in` to CSS `px`, `1dppx` is equivalent to `96dpi`, which corresponds to the default resolution of images displayed in CSS as defined by {{cssxref("image-resolution")}}.
- `x`
  - : Alias for `dppx`.

> **Note:** Although the number `0` is always the same regardless of unit, the unit may not be omitted. In other words, `0` is invalid and does not represent `0dpi`, `0dpcm`, or `0dppx`.

## Examples

### Use in a media query

```css
@media print and (min-resolution: 300dpi) {
  /* … */
}
```

### Valid resolutions

```plain example-good
96dpi
50.82dpcm
3dppx
```

### Invalid resolutions

```plain example-bad
72 dpi     Spaces are not allowed between the number and the unit.
ten dpi    The number must use digits only.
0          The unit is required.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [resolution](/en-US/docs/Web/CSS/@media/resolution) media feature
- The {{cssxref("image-resolution")}} property
- [Using @media queries](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)
