---
title: update
slug: Web/CSS/@media/update-frequency
tags:
  - '@media'
  - CSS
  - Media Queries
  - Reference
  - media feature
  - Experimental
browser-compat: css.at-rules.media.update
---
{{CSSRef}}{{SeeCompatTable}}

The **`update`** [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#media_features) can be used to test how frequently (if at all) the output device is able to modify the appearance of content.

## Syntax

The `update` feature is specified as a single keyword value chosen from the list below.

- `none`
  - : Once it has been rendered, the layout can no longer be updated. Example: documents printed on paper.
- `slow`
  - : The layout may change dynamically according to the usual rules of CSS, but the output device is not able to render or display changes quickly enough for them to be perceived as a smooth animation. Examples: e-book readers or severely underpowered devices.
- `fast`
  - : The layout may change dynamically according to the usual rules of CSS, and the output device is not unusually constrained in speed, so regularly-updating things like [CSS Animations](/en-US/docs/Web/CSS/CSS_Animations) can be used. Example: computer screens.

## Examples

### HTML

```html
<p>If this text animates for you, you are using a fast-updating device.</p>
```

### CSS

```css
@keyframes jiggle {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(25px);
  }
}

@media (update: fast) {
  p {
    animation: 1s jiggle linear alternate infinite;
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
