---
title: device-aspect-ratio
slug: Web/CSS/@media/device-aspect-ratio
tags:
  - '@media'
  - CSS
  - Deprecated
  - Media Queries
  - Reference
  - Web
  - media feature
browser-compat: css.at-rules.media.device-aspect-ratio
---
{{CSSRef}} {{deprecated_header}}

The **`device-aspect-ratio`** [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#media_features) can be used to test the width-to-height aspect ratio of an output device.

## Syntax

The `device-aspect-ratio` feature is specified as a {{cssxref("&lt;ratio&gt;")}}. It is a range feature, meaning that you can also use the prefixed **`min-device-aspect-ratio`** and **`max-device-aspect-ratio`** variants to query minimum and maximum values, respectively.

## Examples

### Using min-device-aspect-ratio

```css
article {
  padding: 1rem;
}

@media screen and (min-device-aspect-ratio: 16/9) {
  article {
    padding: 1rem 5vw;
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
