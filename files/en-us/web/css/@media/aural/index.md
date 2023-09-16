---
title: aural
slug: Web/CSS/@media/aural
page-type: css-media-feature
status:
  - deprecated
spec-urls: https://www.w3.org/TR/CSS22/aural.html
---

{{CSSRef}} {{deprecated_header}}

The `aural` [CSS](/en-US/docs/Web/CSS) [media type](/en-US/docs/Web/CSS/@media#media_types) is used for devices that have speech output capabilities.

## Syntax

The `aural` CSS media type was used to specify a block of CSS that applied only when the content is being presented using a speech synthesis device.

```css
@media aural {
  /* speech-specific styles here */
}
```

## Examples

### Basic example

```css
@media aural {
  body {
    voice-family: Paul;
  }
}
```

## Specifications

{{Specifications}}

## See also

- [Media queries](/en-US/docs/Web/CSS/CSS_media_queries)
- [Using media queries](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [`@media`](/en-US/docs/Web/CSS/@media)
