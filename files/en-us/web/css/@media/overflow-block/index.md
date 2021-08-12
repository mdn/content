---
title: overflow-block
slug: Web/CSS/@media/overflow-block
tags:
  - '@media'
  - CSS
  - Media Queries
  - Reference
  - media feature
browser-compat: css.at-rules.media.overflow-block
---
{{CSSRef}}

The **`overflow-block`** [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#media_features) can be used to test how the output device handles content that overflows the initial [containing block](/en-US/docs/Web/CSS/Containing_block) along the block axis.

## Syntax

The `overflow-block` feature is specified as a keyword value chosen from the list below.

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
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac turpis eleifend, fringilla velit ac, aliquam tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc velit erat, tempus id rutrum sed, dapibus ut urna. Integer vehicula nibh a justo imperdiet rutrum. Nam faucibus pretium orci imperdiet sollicitudin. Nunc id facilisis dui. Proin elementum et massa et feugiat. Integer rutrum ullamcorper eleifend. Proin sit amet tincidunt risus. Sed nec augue congue eros accumsan tincidunt sed eget ex.</p>
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

- [Using Media Queries](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
- [@media](/en-US/docs/Web/CSS/@media)
