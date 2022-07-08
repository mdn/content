---
title: color-gamut
slug: Web/CSS/@media/color-gamut
tags:
  - '@media'
  - CSS
  - Media Queries
  - Reference
  - media feature
browser-compat: css.at-rules.media.color-gamut
---
{{CSSRef}}

The **`color-gamut`** [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#media_features) can be used to test the approximate range of colors that are supported by the {{glossary("user agent")}} and the output device.

## Syntax

The `color-gamut` feature is specified as a keyword value chosen from the list below.

- `srgb`
  - : The output device can support approximately the [sRGB](https://en.wikipedia.org/wiki/SRGB) {{glossary("gamut")}} or more. This includes the vast majority of color displays.
- `p3`
  - : The output device can support approximately the {{glossary("gamut")}} specified by the [Display P3](https://www.color.org/chardata/rgb/DisplayP3.xalter) Color Space or more. The p3 gamut is larger than and includes the srgb gamut.
- `rec2020`
  - : The output device can support approximately the {{glossary("gamut")}} specified by the [ITU-R Recommendation BT.2020 Color Space](https://en.wikipedia.org/wiki/Rec._2020) or more. The rec2020 gamut is larger than and includes the p3 gamut.

## Examples

### HTML

```html
<p>This is a test.</p>
```

### CSS

```css
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

- [Using Media Queries](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
- [@media](/en-US/docs/Web/CSS/@media)
