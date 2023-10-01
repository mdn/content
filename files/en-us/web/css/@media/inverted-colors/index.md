---
title: inverted-colors
slug: Web/CSS/@media/inverted-colors
page-type: css-media-feature
browser-compat: css.at-rules.media.inverted-colors
---

{{CSSRef}}

The **`inverted-colors`** [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/@media#media_features) is used to test if the {{glossary("user agent")}} or the underlying operating system has inverted all colors.

Inversion of colors can have unpleasant side effects, such as shadows turning into highlights, which can reduce the readability of the content. Using this media feature, you can detect if inversion is happening and style the content accordingly while respecting user preference.

## Syntax

```css
/* Keyword value */
@media (inverted-colors: inverted) {
  /* styles to apply if inversion of colors is detected */
}
```

The `inverted-colors` feature is specified as one of the following keyword values:

- `none`
  - : Indicates that the colors are displayed normally and no inversion of colors has happened. This keyword value evaluates as false.
- `inverted`
  - : Indicates that all pixels within the displayed area have been inverted. This keyword value evaluates as true.

## Examples

### Applying styles if color inversion is detected

This example demonstrates the effects of both `inverted-colors` media feature keyword values and when the `inverted-colors` media feature is not supported.

#### HTML

```html
<p>
  If color inversion is detected, this text will appear blue on white (the
  inverse of yellow on black) along with a line over the text. If no color
  inversion is happening, the text will appear red on light gray without the
  line over the text.
</p>
<p>
  If the text is gray and no overline is present, it means your browser doesn't
  support the
  <code>inverted-colors</code> media feature.
</p>
```

#### CSS

```css
p {
  color: gray;
}

@media (inverted-colors: inverted) {
  p {
    background: black;
    color: yellow;
    text-decoration: overline;
  }
}

@media (inverted-colors: none) {
  p {
    background: #eee;
    color: red;
  }
}
```

#### Result

{{EmbedLiveSample("Applying styles if color inversion is detected")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [@media](/en-US/docs/Web/CSS/@media)
- [CSS media queries](/en-US/docs/Web/CSS/CSS_media_queries) module
- [Using media queries](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)
