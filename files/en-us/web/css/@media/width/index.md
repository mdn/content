---
title: width
slug: Web/CSS/@media/width
tags:
  - '@media'
  - CSS
  - Media Queries
  - Reference
  - media feature
browser-compat: css.at-rules.media.width
---
{{CSSRef}}

The **`width`** [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#media_features) can be used to test the width of the {{glossary("viewport")}} (or the page box, for [paged media](/en-US/docs/Web/CSS/Paged_Media)).

## Syntax

The `width` feature is specified as a {{cssxref("&lt;length&gt;")}} value representing the viewport width. It is a range feature, meaning that you can also use the prefixed **`min-width`** and **`max-width`** variants to query minimum and maximum values, respectively.

## Examples

### HTML

```html
<div>Watch this element as you resize your viewport's width.</div>
```

### CSS

```css
/* Exact width */
@media (width: 360px) {
  div {
    color: red;
  }
}

/* Minimum width */
@media (min-width: 35rem) {
  div {
    background: yellow;
  }
}

/* Maximum width */
@media (max-width: 50rem) {
  div {
    border: 2px solid blue;
  }
}
```

### Result

{{EmbedLiveSample('Examples','90%')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Media Queries](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
- [@media](/en-US/docs/Web/CSS/@media)
