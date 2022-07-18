---
title: device-width
slug: Web/CSS/@media/device-width
tags:
  - '@media'
  - CSS
  - Deprecated
  - Media Queries
  - Reference
  - media feature
browser-compat: css.at-rules.media.device-width
---
{{CSSRef}} {{deprecated_header}}

> **Note:** To query for the width of the viewport, developers should use the [`width`](/en-US/docs/Web/CSS/@media/width) media feature instead.

The **`device-width`** [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#media_features) can be used to test the width of an output device's rendering surface.

## Syntax

The `device-width` feature is specified as a {{cssxref("&lt;length&gt;")}} value. It is a range feature, meaning that you can also use the prefixed **`min-device-width`** and **`max-device-width`** variants to query minimum and maximum values, respectively.

## Examples

### Applying a special stylesheet for devices that are narrower than 800 pixels

```html
<link rel="stylesheet" media="screen and (max-device-width: 799px)" href="http://foo.bar.com/narrow-styles.css" />
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Media Queries](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
- [@media](/en-US/docs/Web/CSS/@media)
