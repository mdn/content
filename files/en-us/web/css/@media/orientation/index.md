---
title: orientation
slug: Web/CSS/@media/orientation
tags:
  - '@media'
  - CSS
  - Media Queries
  - NeedsBrowserCompatibility
  - Reference
  - media feature
browser-compat: css.at-rules.media.orientation
---
{{CSSRef}}

The **`orientation`** [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#media_features) can be used to test the orientation of the {{glossary("viewport")}} (or the page box, for [paged media](/en-US/docs/Web/CSS/Paged_Media)).

> **Note:** This feature does not correspond to _device_ orientation. Opening the soft keyboard on many devices in portrait orientation will cause the viewport to become wider than it is tall, thereby causing the browser to use landscape styles instead of portrait.

## Syntax

The `orientation` feature is specified as a keyword value chosen from the list below.

### Keyword values

- `portrait`
  - : The viewport is in a portrait orientation, i.e.,  the height is greater than or equal to the width.
- `landscape`
  - : The viewport is in a landscape orientation, i.e., the width is greater than the height.

## Examples

### HTML

```html
<div>Box 1</div>
<div>Box 2</div>
<div>Box 3</div>
```

### CSS

```css
body {
  display: flex;
}

div {
  background: yellow;
}

@media (orientation: landscape) {
  body {
    flex-direction: row;
  }
}

@media (orientation: portrait) {
  body {
    flex-direction: column;
  }
}
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
