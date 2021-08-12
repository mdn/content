---
title: device-height
slug: Web/CSS/@media/device-height
tags:
  - '@media'
  - CSS
  - Deprecated
  - Media Queries
  - Reference
  - media feature
browser-compat: css.at-rules.media.device-height
---
{{CSSRef}} {{deprecated_header}}

The **`device-height`** [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#media_features) can be used to test the height of an output device's rendering surface.

## Syntax

The `device-height` feature is specified as a {{cssxref("&lt;length&gt;")}} value. It is a range feature, meaning that you can also use the prefixed **`min-device-height`** and **`max-device-height`** variants to query minimum and maximum values, respectively.

## Examples

### Applying a special stylesheet for devices that are shorter than 800 pixels

```html
<link rel="stylesheet" media="screen and (max-device-height: 799px)" href="http://foo.bar.com/short-styles.css" />
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Media Queries](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
- [@media](/en-US/docs/Web/CSS/@media)
