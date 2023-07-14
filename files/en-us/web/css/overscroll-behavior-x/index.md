---
title: overscroll-behavior-x
slug: Web/CSS/overscroll-behavior-x
page-type: css-property
browser-compat: css.properties.overscroll-behavior-x
---

{{CSSRef}}

The **`overscroll-behavior-x`** CSS property sets the browser's behavior when the horizontal boundary of a scrolling area is reached.

See {{cssxref("overscroll-behavior")}} for a full explanation.

```css
/* Keyword values */
overscroll-behavior-x: auto; /* default */
overscroll-behavior-x: contain;
overscroll-behavior-x: none;

/* Global values */
overscroll-behavior-x: inherit;
overscroll-behavior-x: initial;
overscroll-behavior-x: revert;
overscroll-behavior-x: revert-layer;
overscroll-behavior-x: unset;
```

## Syntax

The `overscroll-behavior-x` property is specified as a keyword chosen from the list of values below.

### Values

- `auto`
  - : The default scroll overflow behavior occurs as normal.
- `contain`
  - : Default scroll overflow behavior is observed inside the element this value is set on (e.g. "bounce" effects or refreshes), but no scroll chaining occurs to neighboring scrolling areas, e.g. underlying elements will not scroll.
- `none`
  - : No scroll chaining occurs to neighboring scrolling areas, and default scroll overflow behavior is prevented.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Preventing an underlying element from scrolling horizontally

In our simple [overscroll-behavior-x example](https://mdn.github.io/css-examples/overscroll-behavior/overscroll-behavior-x) (see [source code](https://github.com/mdn/css-examples/blob/main/overscroll-behavior/overscroll-behavior-x.html) also), we have two block-level boxes, one inside the other. The outer box has a large {{cssxref("width")}} set on it so the page will scroll horizontally. The inner box has a small width (and {{cssxref("height")}}) set on it so it sits comfortably inside the viewport, but its content is given a large `width` so it will scroll horizontally.

By default, when the inner box is scrolled and a scroll boundary is reached, the whole page will begin to scroll, which is probably not what we want. To avoid this, you can set `overscroll-behavior-x: contain` on the inner box:

```css
main > div {
  height: 300px;
  width: 500px;
  overflow: auto;
  position: relative;
  top: 100px;
  left: 100px;
  overscroll-behavior-x: contain;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Take control of your scroll: customizing pull-to-refresh and overflow effects](https://developer.chrome.com/blog/overscroll-behavior/#full-demo)
- The mapped logical properties: {{cssxref("overscroll-behavior-inline")}}, {{cssxref("overscroll-behavior-block")}}
