---
title: ::target-text
slug: Web/CSS/Reference/Selectors/::target-text
page-type: css-pseudo-element
browser-compat: css.selectors.target-text
sidebar: cssref
---

The **`::target-text`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-elements) represents the text that has been scrolled to if the browser supports [text fragments](/en-US/docs/Web/URI/Reference/Fragment/Text_fragments). It allows authors to choose how to highlight that section of text.

The `::target-text` pseudo-element follows a special inheritance model common to all highlight pseudo-elements. For more details on how this inheritance works, see the [Highlight pseudo-elements inheritance](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-elements#highlight_pseudo-elements_inheritance) section.

## Syntax

```css
::target-text {
  /* ... */
}
```

## Examples

### Highlighting text fragments

```css
::target-text {
  background-color: rebeccapurple;
  color: white;
}
```

To see this CSS in action follow the link to [scroll-to-text demo](https://mdn.github.io/css-examples/target-text/index.html#:~:text=From%20the%20foregoing%20remarks%20we%20may%20gather%20an%20idea%20of%20the%20importance).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Text fragments](/en-US/docs/Web/URI/Reference/Fragment/Text_fragments)
- {{cssxref(":target")}} (for highlighting target elements)
