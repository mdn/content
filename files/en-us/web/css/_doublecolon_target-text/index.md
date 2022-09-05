---
title: '::target-text'
slug: Web/CSS/::target-text
tags:
  - '::target-text'
  - CSS
  - Pseudo-element
  - Reference
  - Selector
  - Web
  - Experimental
browser-compat: css.selectors.target-text
---
{{CSSRef}}{{SeeCompatTable}}

The **`::target-text`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) represents the text that has been scrolled to if the browser supports scroll-to-text fragments. It allows authors to choose how to highlight that section of text.

```css
::target-text {
  background-color: pink;
}
```

## Syntax

```
::target-text
```

## Examples

### Highlighting scroll-to-text

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

- [Text fragments](https://web.dev/text-fragments/)
