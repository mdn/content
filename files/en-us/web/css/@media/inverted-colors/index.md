---
title: inverted-colors
slug: Web/CSS/@media/inverted-colors
tags:
  - '@media'
  - CSS
  - Media Queries
  - Reference
  - media feature
browser-compat: css.at-rules.media.inverted-colors
---
{{CSSRef}}

The **`inverted-colors`** [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#media_features) can be used to test whether the {{glossary("user agent")}} or underlying OS is inverting colors.

## Syntax

The `inverted-colors` feature is specified as a keyword value chosen from the list below.

- `none`
  - : Colors are displayed normally.
- `inverted`
  - : All pixels within the displayed area have been inverted.

## Examples

### HTML

```html
<p>If you're using inverted colors, this text should be blue on white (the inverse of yellow on black). If you're not, it should be red on light gray.</p>
<p>If the text is gray, your browser doesn't support the `inverted-colors` media feature.</p>
```

### CSS

```css
p {
  color: gray;
}

@media (inverted-colors: inverted) {
  p {
    background: black;
    color: yellow;
  }
}

@media (inverted-colors: none) {
  p {
    background: #eee;
    color: red;
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
