---
title: overflow-block
slug: Web/CSS/@media/overflow-block
page-type: css-media-feature
browser-compat: css.at-rules.media.overflow-block
---

{{CSSRef}}

The **`overflow-block`** [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/@media#media_features) can be used to test how the output device handles content that overflows the initial [containing block](/en-US/docs/Web/CSS/CSS_display/Containing_block) along the block axis.

> [!NOTE]
> The `overflow-block` property does not determine whether overflow occurs; rather, it reveals the device's handling of such overflow. Typically, on screens in most browsers, the behavior will be "scroll": when content exceeds the available vertical space, the device allows you to scroll to access the overflowed content.

## Syntax

The `overflow-block` feature is specified as a keyword value chosen from the list below.

- `none`
  - : Content that overflows the block axis is not displayed.
- `scroll`
  - : Content that overflows the block axis can be seen by scrolling to it.
- `optional-paged`
  - : Content that overflows the block axis can be seen by scrolling to it, but page breaks can be manually triggered (such as via {{cssxref("break-inside")}}, etc.) to cause the following content to display on the following page.
- `paged`
  - : Content is broken up into discrete pages; content that overflows one page in the block axis is displayed on the following page.

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
@media (overflow-block: scroll) {
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

## See also

- [Using Media Queries](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/en-US/docs/Web/CSS/@media)
