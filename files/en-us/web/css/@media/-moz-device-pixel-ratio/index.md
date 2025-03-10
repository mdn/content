---
title: -moz-device-pixel-ratio
slug: Web/CSS/@media/-moz-device-pixel-ratio
page-type: css-media-feature
status:
  - deprecated
  - non-standard
browser-compat: css.at-rules.media.-moz-device-pixel-ratio
---

{{CSSRef}} {{Non-standard_header}} {{Deprecated_header}}

The **`-moz-device-pixel-ratio`** Gecko-only [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/@media#media_features) can be used to apply styles based on the number of device pixels per CSS pixel.

> [!WARNING]
> Do not use this feature. Use the [`resolution`](/en-US/docs/Web/CSS/@media/resolution) feature with the `dppx` unit instead.

> [!NOTE]
> This media feature is also implemented by WebKit as `-webkit-device-pixel-ratio`. The min and max prefixes as implemented by Gecko are named `min--moz-device-pixel-ratio` and `max--moz-device-pixel-ratio`; but the same prefixes as implemented by WebKit are named `-webkit-min-device-pixel-ratio` and `-webkit-max-device-pixel-ratio`.

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
/* First, set for WebKit-based browsers */
@media (-webkit-min-device-pixel-ratio: 2),
  (min--moz-device-pixel-ratio: 2) /* Older Firefox browsers (prior to firefox 16) */,
  (min-resolution: 2dppx) /* The standard way */,
  (min-resolution: 192dpi); /* dppx fallback */
```

> [!NOTE]
> See this [CSSWG article](https://www.w3.org/blog/CSS/2012/06/14/unprefix-webkit-device-pixel-ratio/) for compatibility good practices regarding `resolution` and `dppx`.

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- [Using Media Queries](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/en-US/docs/Web/CSS/@media)
