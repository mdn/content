---
title: '-moz-device-pixel-ratio'
slug: Web/CSS/@media/-moz-device-pixel-ratio
tags:
  - '@media'
  - CSS
  - Deprecated
  - Non-standard
  - media feature
browser-compat: css.at-rules.media.-moz-device-pixel-ratio
---
{{CSSRef}} {{Non-standard_header}} {{Deprecated_header}}

The **`-moz-device-pixel-ratio`** Gecko-only [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#media_features) can be used to apply styles based on the number of device pixels per CSS pixel.

> **Warning:** Do not use this feature. Use the [`resolution`](/en-US/docs/Web/CSS/@media/resolution) feature with the `dppx` unit instead.

> **Note:** This media feature is also implemented by Webkit and by [IE 11 for Windows Phone 8.1](<https://msdn.microsoft.com/library/ie/dn760733(v=vs.85).aspx>) as `-webkit-device-pixel-ratio`. The min and max prefixes as implemented by Gecko are named `min--moz-device-pixel-ratio` and `max--moz-device-pixel-ratio`; but the same prefixes as implemented by Webkit are named `-webkit-min-device-pixel-ratio` and `-webkit-max-device-pixel-ratio`.

## Syntax

- {{cssxref("&lt;number&gt;")}}
  - : The number of device pixels per CSS pixel.

**Media:** {{cssxref("@media")}}
**Accepts min/max prefixes:** yes

## Examples

### Basic compatibility example

`-moz-device-pixel-ratio` may be used for compatibility with Firefox older than 16, and alongside `-webkit-device-pixel-ratio` for compatibility with WebKit-based browsers that do not support `dppx`.

Example:

```css
@media (-webkit-min-device-pixel-ratio: 2), /* Webkit-based browsers */
       (min--moz-device-pixel-ratio: 2),    /* Older Firefox browsers (prior to Firefox 16) */
       (min-resolution: 2dppx),             /* The standard way */
       (min-resolution: 192dpi)             /* dppx fallback */
```

> **Note:** See this [CSSWG article](https://www.w3.org/blog/CSS/2012/06/14/unprefix-webkit-device-pixel-ratio/) for compatibility good practices regarding `resolution` and `dppx`.

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- [Using Media Queries](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
- [@media](/en-US/docs/Web/CSS/@media)
