---
title: color-gamut
slug: Web/CSS/@media/color-gamut
page-type: css-media-feature
browser-compat: css.at-rules.media.color-gamut
---

{{CSSRef}}

The **`color-gamut`** [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/@media#media_features) is used to apply CSS styles based on the approximate range of color {{glossary("gamut")}} supported by the {{glossary("user agent")}} and the output device.

## Syntax

The `color-gamut` feature is specified as one of the following {{glossary("color space", "color spaces")}} as keyword values:

- `srgb`
  - : The user agent and the output device can support approximately the [sRGB](/en-US/docs/Glossary/Color_space#srgb) gamut or more. This includes the vast majority of color displays.
- `p3`
  - : The user agent and the output device can support approximately the gamut specified by the [Display P3](https://www.color.org/chardata/rgb/DisplayP3.xalter) color space or more. The P3 gamut is larger than and includes the sRGB gamut.
- `rec2020`
  - : The user agent and the output device can support approximately the gamut specified by the [ITU-R Recommendation BT.2020](https://en.wikipedia.org/wiki/Rec._2020) color space or more. The REC. 2020 gamut is larger than and includes the P3 gamut.

## Examples

### HTML

```html
<p>This is a test.</p>
```

### CSS

```css
p {
  padding: 10px;
  border: solid;
}

@media (color-gamut: srgb) {
  p {
    background: #f4ae8a;
  }
}
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`color()`](/en-US/docs/Web/CSS/color_value/color) function to specify colors in a defined colorspace.
- [CSS colors](/en-US/docs/Web/CSS/CSS_colors) module
- [`@media`](/en-US/docs/Web/CSS/@media) at-rule that is used to specify the color-gamut expression.
- [Using media queries](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries) to understand when and how to use a media query.
- [CSS media queries](/en-US/docs/Web/CSS/CSS_media_queries) module
- [sRGB](https://en.wikipedia.org/wiki/SRGB) on Wikipedia
