---
title: overflow-inline
slug: Web/CSS/@media/overflow-inline
page-type: css-media-feature
browser-compat: css.at-rules.media.overflow-inline
---

{{CSSRef}}

The **`overflow-inline`** [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/@media#media_features) can be used to test how the output device handles content that overflows the initial [containing block](/en-US/docs/Web/CSS/Containing_block) along the inline axis.

## Syntax

The `overflow-inline` feature is specified as a keyword value chosen from the list below.

- `none`
  - : Content that overflows the inline axis is not displayed.
- `scroll`
  - : Content that overflows the inline axis can be seen by scrolling to it.

## Examples

### HTML

```html
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac turpis
  eleifend, fringilla velit ac, aliquam tellus. Vestibulum ante ipsum primis in
  faucibus orci luctus et ultrices posuere cubilia Curae; Nunc velit erat,
  tempus id rutrum sed, dapibus ut urna. Integer vehicula nibh a justo imperdiet
  rutrum. Nam faucibus pretium orci imperdiet sollicitudin. Nunc id facilisis
  dui. Proin elementum et massa et feugiat. Integer rutrum ullamcorper eleifend.
  Proin sit amet tincidunt risus. Sed nec augue congue eros accumsan tincidunt
  sed eget ex.
</p>
```

### CSS

```css
p {
  white-space: nowrap;
}

@media (overflow-inline: scroll) {
  p {
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
