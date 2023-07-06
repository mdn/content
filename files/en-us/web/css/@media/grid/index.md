---
title: grid
slug: Web/CSS/@media/grid
page-type: css-media-feature
browser-compat: css.at-rules.media.grid
---

{{CSSRef}}

The **`grid`** [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/@media#media_features) can be used to test whether the output device uses a grid-based screen.

Most modern computers and smartphones have bitmap-based screens. Examples of grid-based devices include text-only terminals and basic phones with only one fixed font.

## Syntax

The `grid` feature is specified as a {{cssxref("&lt;mq-boolean&gt;")}} value (`0` or `1`) representing whether or not the output device is grid-based.

## Examples

### HTML

```html
<p class="unknown">I don't know if you're using a grid device. :-(</p>
<p class="bitmap">You are using a bitmap device.</p>
<p class="grid">You are using a grid device! Neato!</p>
```

### CSS

```css
:not(.unknown) {
  color: lightgray;
}

@media (grid: 0) {
  .unknown {
    color: lightgray;
  }

  .bitmap {
    color: red;
    text-transform: uppercase;
  }
}

@media (grid: 1) {
  .unknown {
    color: lightgray;
  }

  .grid {
    color: black;
    text-transform: uppercase;
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
