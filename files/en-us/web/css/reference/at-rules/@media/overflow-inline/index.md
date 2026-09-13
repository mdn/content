---
title: "`overflow-inline` CSS media feature"
short-title: overflow-inline
slug: Web/CSS/Reference/At-rules/@media/overflow-inline
page-type: css-media-feature
browser-compat: css.at-rules.media.overflow-inline
sidebar: cssref
---

The **`overflow-inline`** [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/Reference/At-rules/@media#media_features) can be used to test how the output device handles content that overflows the initial [containing block](/en-US/docs/Web/CSS/Guides/Display/Containing_block) along the inline axis.

> [!NOTE]
> The `overflow-inline` property does not determine whether overflow occurs; rather, it reveals the device's handling of such overflow. Typically, on screens in most browsers, the behavior will be "scroll": when content exceeds the available horizontal space, the device allows you to scroll to access the overflowed content.

## Syntax

The `overflow-inline` feature is specified as a keyword value chosen from the list below.

- `none`
  - : Content that overflows the inline axis is not displayed.
- `scroll`
  - : Content that overflows the inline axis can be seen by scrolling to it.

## Examples

### HTML

```html
<p class="overflowing">
  <strong>This paragraph is overflowing</strong>. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac turpis
  eleifend, fringilla velit ac, aliquam tellus. Vestibulum ante ipsum primis in
  faucibus orci luctus et ultrices posuere cubilia Curae; Nunc velit erat,
  tempus id rutrum sed, dapibus ut urna. Integer vehicula nibh a justo imperdiet
  rutrum. Nam faucibus pretium orci imperdiet sollicitudin. Nunc id facilisis
  dui. Proin elementum et massa et feugiat. Integer rutrum ullamcorper eleifend.
  Proin sit amet tincidunt risus. Sed nec augue congue eros accumsan tincidunt
  sed eget ex.
</p>

<p class="not-overflowing">
  <strong>This paragraph does not overflow</strong>. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac turpis
  eleifend, fringilla velit ac, aliquam tellus. Vestibulum ante ipsum primis in
  faucibus orci luctus et ultrices posuere cubilia Curae;
</p>
```

### CSS

```css
p {
  border: 2px solid black;
  margin-block: 1em;
}

.overflowing {
  white-space: nowrap;
}

@media (overflow-inline: scroll) {
  p {
    /* applies to all paragraphs because this feature detects
       how overflow is handled by the device */
    color: red;
    border-style: dashed;
  }
}
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
