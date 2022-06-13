---
title: aural
slug: Web/CSS/@media/aural
tags:
  - CSS
  - Deprecated
  - Reference
  - aural
  - media feature
  - speech
---
{{CSSRef}} {{deprecated_header}}

The `aural` [CSS](/en-US/docs/Web/CSS) [media type](/en-US/docs/Web/CSS/@media#media_types) is used for devices that have speech output capabilities.

> **Note:** This media type has been deprecated in favor of [`speech`](/en-US/docs/Web/CSS/@media#speech).

## Syntax

The `aural` CSS media type—which has been deprecated in favor of the [`speech`](/en-US/docs/Web/CSS/@media#speech) media type—was used to specify a block of CSS that applied only when the content is being presented using a speech synthesis device.

```css
@media aural {
  /* speech-specific styles here */
}
```

Updating existing CSS to use the `speech` media type should be as simple as replacing `aural` with `speech`.

## Examples

### Basic example

```css
@media aural {
  body { voice-family: Paul }
}
```

## Specifications

| Specification                                    | Status     | Comment             |
| ------------------------------------------------ | ---------- | ------------------- |
| {{SpecName('CSS2.2', '', 'aural')}} | Deprecated | Initial definition. |

## See also

- [Media queries](/en-US/docs/Web/CSS/Media_Queries)
- [Using media queries](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
- [`@media`](/en-US/docs/Web/CSS/@media)
- [`speech`](/en-US/docs/Web/CSS/@media#speech)
