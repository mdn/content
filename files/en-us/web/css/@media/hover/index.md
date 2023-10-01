---
title: hover
slug: Web/CSS/@media/hover
page-type: css-media-feature
browser-compat: css.at-rules.media.hover
---

{{CSSRef}}

The **`hover`** [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/@media#media_features) can be used to test whether the user's _primary_ input mechanism can hover over elements.

## Syntax

The `hover` feature is specified as a keyword value chosen from the list below.

- `none`
  - : The primary input mechanism cannot hover at all or cannot conveniently hover (e.g., many mobile devices emulate hovering when the user performs an inconvenient long tap), or there is no primary pointing input mechanism.
- `hover`
  - : The primary input mechanism can conveniently hover over elements.

## Examples

### HTML

```html
<a href="#">Try hovering over me!</a>
```

### CSS

```css
/* default hover effect */
a:hover {
  color: black;
  background: yellow;
}

@media (hover: hover) {
  /* when hover is supported */
  a:hover {
    color: white;
    background: black;
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

- [Using Media Queries](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/en-US/docs/Web/CSS/@media)
